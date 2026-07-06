import { NextResponse } from "next/server";
import { getContributionStats, getContributions } from "@/lib/store";

export const revalidate = 60;

export async function GET() {
  try {
    const [stats, contributions] = await Promise.all([
      getContributionStats(),
      getContributions(),
    ]);

    const publicList = contributions.map((c) => ({
      name: c.name,
      amount: c.hideAmount ? null : c.amount,
      currency: c.currency,
      timestamp: c.timestamp,
    }));

    return NextResponse.json({
      raised: stats.total,
      contributors: stats.count,
      contributions: publicList,
    });
  } catch {
    return NextResponse.json({ raised: 0, contributors: 0, contributions: [] });
  }
}
