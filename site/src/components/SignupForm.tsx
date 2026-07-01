"use client";

import { useState } from "react";

export function SignupForm() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, role }),
      });

      if (res.ok) {
        setStatus("success");
        setMessage("You're in. We'll be in touch.");
        setEmail("");
        setRole("");
      } else {
        const data = await res.json();
        setStatus("error");
        setMessage(data.error || "Something went wrong. Try again.");
      }
    } catch {
      setStatus("error");
      setMessage("We hit our free-tier database limit. Working on a solution — check back soon.");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-zinc-800 rounded-lg p-6">
        <p className="text-lg text-zinc-100">{message}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="signup-email" className="sr-only">Email address</label>
        <input
          id="signup-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          required
          aria-required="true"
          className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-zinc-600"
        />
      </div>
      <div>
        <label htmlFor="signup-role" className="sr-only">Your role</label>
        <select
          id="signup-role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-100 focus:outline-none focus:border-zinc-600"
        >
          <option value="">What can you bring? (optional)</option>
          <option value="engineering">Engineering</option>
          <option value="design">Design</option>
          <option value="legal">Legal</option>
          <option value="economics">Economics / Finance</option>
          <option value="trust-safety">Trust & Safety</option>
          <option value="community">Community Organizing</option>
          <option value="domain-expert">Domain Expertise (evaluator)</option>
          <option value="translation">Translation</option>
          <option value="other">Other</option>
          <option value="just-here">Just here for the movement</option>
        </select>
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full px-4 py-3 bg-white text-zinc-950 font-semibold rounded-lg hover:bg-zinc-200 transition-colors disabled:opacity-50"
      >
        {status === "loading" ? "..." : "Join The Counterweight"}
      </button>
      {status === "error" && (
        <p className="text-red-400 text-sm">{message}</p>
      )}
    </form>
  );
}
