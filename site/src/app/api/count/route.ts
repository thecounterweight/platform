import { NextRequest, NextResponse } from "next/server";
import { getCount, trackVisitor, getVisitorCount } from "@/lib/store";

function isBot(request: NextRequest): boolean {
  const ua = request.headers.get("user-agent") || "";
  const botPatterns = [
    /vercel/i,
    /bot/i,
    /crawler/i,
    /spider/i,
    /headless/i,
    /lighthouse/i,
    /pingdom/i,
    /uptimerobot/i,
    /node-fetch/i,
    /python-requests/i,
    /curl/i,
    /wget/i,
  ];
  return botPatterns.some((p) => p.test(ua));
}

// Cache count values for 30 seconds to reduce Redis calls
let cachedCount: { signups: number; visitors: number; timestamp: number } | null = null;
const CACHE_TTL = 30_000;

export async function GET(request: NextRequest) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    if (!isBot(request) && ip !== "unknown") {
      await trackVisitor(ip);
    }

    // Serve cached counts if fresh
    if (cachedCount && Date.now() - cachedCount.timestamp < CACHE_TTL) {
      return NextResponse.json({
        count: cachedCount.signups,
        visitors: cachedCount.visitors,
        ok: true,
      });
    }

    const [signups, visitors] = await Promise.all([
      getCount(),
      getVisitorCount(),
    ]);

    cachedCount = { signups, visitors, timestamp: Date.now() };

    return NextResponse.json({ count: signups, visitors, ok: true });
  } catch {
    return NextResponse.json({ count: null, visitors: null, ok: false });
  }
}
