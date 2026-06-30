import { NextResponse } from "next/server";
import { getCount } from "@/lib/store";

export async function GET() {
  try {
    const count = await getCount();
    return NextResponse.json({ count });
  } catch {
    return NextResponse.json({ count: 0 });
  }
}
