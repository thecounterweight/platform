import { Redis } from "@upstash/redis";

let _redis: Redis | null = null;

function getRedis(): Redis {
  if (!_redis) {
    const url = process.env.UPSTASH_REDIS_REST_URL;
    const token = process.env.UPSTASH_REDIS_REST_TOKEN;
    if (!url || !token) throw new Error("Missing Redis credentials");
    _redis = new Redis({ url, token });
  }
  return _redis;
}

export interface Signup {
  name: string;
  email: string | null;
  role: string;
  timestamp: string;
}

export async function addSignup(name: string, email: string | null, role: string): Promise<boolean> {
  const redis = getRedis();

  // Deduplicate by email if provided, otherwise by normalized name
  const dedupeKey = email || name.toLowerCase();
  const exists = await redis.sismember("signup_ids", dedupeKey);
  if (exists) return false;

  await redis.sadd("signup_ids", dedupeKey);
  await redis.lpush(
    "signups",
    JSON.stringify({ name, email, role, timestamp: new Date().toISOString() })
  );
  await redis.incr("signup_count");
  return true;
}

export async function getCount(): Promise<number> {
  const redis = getRedis();
  const count = await redis.get<number>("signup_count");
  return count || 0;
}

export async function trackVisitor(ip: string): Promise<void> {
  const redis = getRedis();
  await redis.pfadd("unique_visitors", ip);
}

export async function getVisitorCount(): Promise<number> {
  const redis = getRedis();
  const count = await redis.pfcount("unique_visitors");
  return count || 0;
}

// Contributions
export interface Contribution {
  name: string;
  amount: number;
  currency: string;
  hideAmount: boolean;
  razorpayPaymentId: string;
  razorpayOrderId: string;
  timestamp: string;
}

export async function addContribution(contribution: Contribution): Promise<boolean> {
  const redis = getRedis();

  // Deduplicate by payment ID
  const added = await redis.sadd("contribution_ids", contribution.razorpayPaymentId);
  if (!added) return false; // Already recorded

  await redis.lpush("contributions", JSON.stringify(contribution));
  await redis.incrbyfloat("contributions_total", contribution.amount);
  await redis.incr("contributions_count");
  return true;
}

export async function getContributions(): Promise<Contribution[]> {
  const redis = getRedis();
  const raw = await redis.lrange<Contribution>("contributions", 0, -1);
  return raw || [];
}

export async function getContributionStats(): Promise<{ total: number; count: number }> {
  const redis = getRedis();
  const total = await redis.get<number>("contributions_total");
  const count = await redis.get<number>("contributions_count");
  return { total: total || 0, count: count || 0 };
}
