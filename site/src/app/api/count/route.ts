import { NextRequest, NextResponse } from "next/server";
import { getCount, trackVisitor, getVisitorCount } from "@/lib/store";

export async function GET(request: NextRequest) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    await trackVisitor(ip);

    const [signups, visitors] = await Promise.all([
      getCount(),
      getVisitorCount(),
    ]);

    return NextResponse.json({ count: signups, visitors });
  } catch {
    return NextResponse.json({ count: 0, visitors: 0 });
  }
}
