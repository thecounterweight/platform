import { NextResponse } from "next/server";
import { getContributionStats } from "@/lib/store";

export const revalidate = 60;

export async function GET() {
  try {
    const stats = await getContributionStats();

    return NextResponse.json({
      raised: stats.total,
      contributors: stats.count,
    });
  } catch {
    return NextResponse.json({ raised: 0, contributors: 0 });
  }
}
