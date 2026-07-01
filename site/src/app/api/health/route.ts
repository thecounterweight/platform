import { NextResponse } from "next/server";
import { getCount } from "@/lib/store";

export async function GET() {
  try {
    await getCount();
    return NextResponse.json({ status: "ok" });
  } catch {
    return NextResponse.json({ status: "degraded", reason: "redis" }, { status: 503 });
  }
}
