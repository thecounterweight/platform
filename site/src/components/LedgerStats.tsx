"use client";

import { useEffect, useState } from "react";

interface LedgerData {
  raised: number;
  spent: number;
  balance: number;
  contributors: number;
}

export function LedgerStats() {
  const [data, setData] = useState<LedgerData | null>(null);

  useEffect(() => {
    fetch("/api/ledger")
      .then((res) => res.json())
      .then(setData)
      .catch(() => setData(null));
  }, []);

  if (!data || data.raised === 0) return null;

  return (
    <div className="grid grid-cols-3 gap-4 mb-8">
      <div className="border border-zinc-800 rounded-lg p-4 text-center">
        <p className="text-2xl font-bold text-zinc-100">${data.raised.toFixed(2)}</p>
        <p className="text-xs text-zinc-500 mt-1">Total raised</p>
      </div>
      <div className="border border-zinc-800 rounded-lg p-4 text-center">
        <p className="text-2xl font-bold text-zinc-100">${data.spent.toFixed(2)}</p>
        <p className="text-xs text-zinc-500 mt-1">Total spent</p>
      </div>
      <div className="border border-zinc-800 rounded-lg p-4 text-center">
        <p className="text-2xl font-bold text-zinc-100">{data.contributors}</p>
        <p className="text-xs text-zinc-500 mt-1">Contributors</p>
      </div>
    </div>
  );
}
