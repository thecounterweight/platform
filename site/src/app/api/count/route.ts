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

export async function GET(request: NextRequest) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    if (!isBot(request) && ip !== "unknown") {
      await trackVisitor(ip);
    }

    const [signups, visitors] = await Promise.all([
      getCount(),
      getVisitorCount(),
    ]);

    return NextResponse.json({ count: signups, visitors, ok: true });
  } catch {
    return NextResponse.json({ count: null, visitors: null, ok: false });
  }
}
