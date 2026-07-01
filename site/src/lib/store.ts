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
  email: string;
  role: string;
  timestamp: string;
}

export async function addSignup(email: string, role: string): Promise<boolean> {
  const redis = getRedis();
  const exists = await redis.sismember("signup_emails", email);
  if (exists) return false;

  await redis.sadd("signup_emails", email);
  await redis.lpush(
    "signups",
    JSON.stringify({ email, role, timestamp: new Date().toISOString() })
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
