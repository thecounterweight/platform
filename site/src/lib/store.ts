import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

export interface Signup {
  email: string;
  role: string;
  timestamp: string;
}

export async function addSignup(email: string, role: string): Promise<boolean> {
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
  const count = await redis.get<number>("signup_count");
  return count || 0;
}
