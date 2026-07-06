"use client";

import { useState } from "react";

declare global {
  interface Window {
    Razorpay: new (options: Record<string, unknown>) => { open: () => void };
  }
}

export function ContributeForm() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handlePay() {
    const parsedAmount = parseFloat(amount);
    if (!name.trim()) {
      setErrorMsg("Name is required");
      return;
    }
    if (!parsedAmount || parsedAmount < 1) {
      setErrorMsg("Minimum contribution is ₹1");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contribute", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: parsedAmount, name: name.trim() }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to create order");
      }

      const { orderId, amount: orderAmount, currency } = await res.json();

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: orderAmount,
        currency,
        name: "The Counterweight",
        description: "Platform contribution",
        order_id: orderId,
        notes: { contributor_name: name.trim() },
        prefill: { name: name.trim() },
        theme: { color: "#18181b" },
        handler: () => {
          setStatus("success");
          setName("");
          setAmount("");
        },
        modal: {
          ondismiss: () => setStatus("idle"),
        },
      };

      if (!window.Razorpay) {
        throw new Error("Payment system is loading. Please try again in a moment.");
      }

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-green-800 rounded-lg p-6 text-center">
        <p className="text-green-400 font-medium">Contribution received.</p>
        <p className="text-sm text-zinc-400 mt-2">
          It will appear on the public ledger shortly. Thank you.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm text-zinc-400 underline hover:text-zinc-200"
        >
          Contribute again
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm text-zinc-400 mb-1">
          Your name (shown on public ledger)
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name or pseudonym"
          className="w-full px-4 py-2 bg-zinc-900 border border-zinc-700 rounded-lg text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-zinc-500"
        />
      </div>
      <div>
        <label htmlFor="amount" className="block text-sm text-zinc-400 mb-1">
          Amount (₹)
        </label>
        <input
          id="amount"
          type="number"
          min="1"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Any amount"
          className="w-full px-4 py-2 bg-zinc-900 border border-zinc-700 rounded-lg text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-zinc-500"
        />
      </div>
      {errorMsg && <p className="text-sm text-red-400">{errorMsg}</p>}
      <button
        onClick={handlePay}
        disabled={status === "loading"}
        className="w-full py-3 bg-zinc-100 text-zinc-900 font-medium rounded-lg hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Processing..." : "Contribute"}
      </button>
      <p className="text-xs text-zinc-600 text-center">
        Processed securely via Razorpay. You&apos;ll see &quot;The Counterweight&quot; on your statement.
      </p>
    </div>
  );
}
