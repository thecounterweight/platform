"use client";

import { useEffect, useState } from "react";

interface PublicContribution {
  name: string;
  amount: number | null;
  currency: string;
  timestamp: string;
}

interface LedgerData {
  raised: number;
  contributors: number;
  contributions: PublicContribution[];
}

export function LedgerStats() {
  const [data, setData] = useState<LedgerData | null>(null);

  useEffect(() => {
    fetch("/api/ledger")
      .then((res) => res.json())
      .then(setData)
      .catch(() => setData(null));
  }, []);

  if (!data || data.contributors === 0) return null;

  return (
    <div className="mb-8">
      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="border border-zinc-800 rounded-lg p-4 text-center">
          <p className="text-2xl font-bold text-zinc-100">₹{data.raised.toLocaleString("en-IN")}</p>
          <p className="text-xs text-zinc-500 mt-1">Total raised</p>
        </div>
        <div className="border border-zinc-800 rounded-lg p-4 text-center">
          <p className="text-2xl font-bold text-zinc-100">{data.contributors}</p>
          <p className="text-xs text-zinc-500 mt-1">Contributors</p>
        </div>
      </div>

      {/* Contributor list */}
      {data.contributions.length > 0 && (
        <div className="border border-zinc-800 rounded-lg p-4">
          <h3 className="text-sm font-medium text-zinc-400 mb-3">Recent contributions</h3>
          <div className="space-y-2">
            {data.contributions.map((c, i) => (
              <div key={i} className="flex items-center justify-between text-sm">
                <span className="text-zinc-300">{c.name}</span>
                <span className="text-zinc-500">
                  {c.amount !== null ? `₹${c.amount.toLocaleString("en-IN")}` : "—"}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
