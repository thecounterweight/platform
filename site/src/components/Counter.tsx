"use client";

import { useEffect, useState } from "react";

export function Counter() {
  const [count, setCount] = useState<number | null>(null);
  const [visitors, setVisitors] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/count")
      .then((res) => res.json())
      .then((data) => {
        setCount(data.count);
        setVisitors(data.visitors);
      })
      .catch(() => {
        setCount(0);
        setVisitors(0);
      });
  }, []);

  if (count === null) {
    return (
      <div className="mt-10 text-zinc-500 text-lg">Loading...</div>
    );
  }

  return (
    <div className="mt-10 flex flex-col items-center gap-6">
      <div className="text-center">
        <span className="text-5xl md:text-7xl font-bold text-white tabular-nums">
          {count.toLocaleString()}
        </span>
        <p className="mt-2 text-zinc-400 text-lg">
          {count === 1 ? "person has" : "people have"} joined
        </p>
      </div>
      {visitors !== null && visitors > 0 && (
        <div className="text-center">
          <span className="text-2xl md:text-3xl font-semibold text-zinc-400 tabular-nums">
            {visitors.toLocaleString()}
          </span>
          <p className="mt-1 text-zinc-500 text-sm">
            unique visitors
          </p>
        </div>
      )}
    </div>
  );
}
