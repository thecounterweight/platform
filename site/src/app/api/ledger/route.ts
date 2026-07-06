import { NextResponse } from "next/server";

export const revalidate = 300; // Cache for 5 minutes

export async function GET() {
  try {
    const res = await fetch(
      "https://raw.githubusercontent.com/thecounterweight/ledger/main/BALANCE.md",
      { next: { revalidate: 300 } }
    );

    if (!res.ok) {
      return NextResponse.json({ raised: 0, spent: 0, balance: 0, contributors: 0 });
    }

    const text = await res.text();

    // Parse totals from the markdown table
    const raisedMatch = text.match(/Total contributions\s*\|\s*([\d.]+)/);
    const spentMatch = text.match(/Total spent\s*\|\s*([\d.]+)/);

    // Count contributors from the contribution history table (skip header and separator rows)
    const contributionRows = text.match(/\| \d{4}-\d{2}-\d{2} \|/g);
    const contributors = contributionRows ? contributionRows.length : 0;

    const raised = raisedMatch ? parseFloat(raisedMatch[1]) : 0;
    const spent = spentMatch ? parseFloat(spentMatch[1]) : 0;

    return NextResponse.json({
      raised,
      spent,
      balance: raised - spent,
      contributors,
    });
  } catch {
    return NextResponse.json({ raised: 0, spent: 0, balance: 0, contributors: 0 });
  }
}
