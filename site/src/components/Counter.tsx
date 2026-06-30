"use client";

import { useEffect, useState } from "react";

export function Counter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/count")
      .then((res) => res.json())
      .then((data) => setCount(data.count))
      .catch(() => setCount(0));
  }, []);

  if (count === null) {
    return (
      <div className="mt-10 text-zinc-500 text-lg">Loading...</div>
    );
  }

  return (
    <div className="mt-10">
      <span className="text-5xl md:text-7xl font-bold text-white tabular-nums">
        {count.toLocaleString()}
      </span>
      <p className="mt-2 text-zinc-400 text-lg">
        {count === 1 ? "person has" : "people have"} joined
      </p>
    </div>
  );
}
