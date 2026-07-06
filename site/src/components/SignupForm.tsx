"use client";

import { useState, useEffect, useRef } from "react";

declare global {
  interface Window {
    turnstile?: {
      render: (container: string | HTMLElement, options: Record<string, unknown>) => string;
      reset: (widgetId: string) => void;
    };
  }
}

export function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [formLoadedAt] = useState(Date.now());
  const turnstileRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  useEffect(() => {
    // Load Turnstile script
    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    script.async = true;
    script.onload = () => {
      if (window.turnstile && turnstileRef.current) {
        widgetIdRef.current = window.turnstile.render(turnstileRef.current, {
          sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "",
          theme: "dark",
          callback: (token: string) => setTurnstileToken(token),
        });
      }
    };
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name) return;

    if (!turnstileToken) {
      setStatus("error");
      setMessage("Please complete the verification.");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email: email || null,
          role,
          token: turnstileToken,
          loadedAt: formLoadedAt,
          website: "", // honeypot
        }),
      });

      if (res.ok) {
        setStatus("success");
        setMessage("You're in. Welcome to The Counterweight.");
        setName("");
        setEmail("");
        setRole("");
      } else {
        const data = await res.json();
        setStatus("error");
        setMessage(data.error || "Something went wrong. Try again.");
        // Reset turnstile on failure
        if (window.turnstile && widgetIdRef.current) {
          window.turnstile.reset(widgetIdRef.current);
          setTurnstileToken("");
        }
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
        <label htmlFor="signup-name" className="sr-only">Your name</label>
        <input
          id="signup-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          required
          aria-required="true"
          className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-zinc-600"
        />
      </div>
      <div>
        <label htmlFor="signup-email" className="sr-only">Email (optional)</label>
        <input
          id="signup-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email (optional — for launch updates only)"
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
          <option value="just-here">Just here to support</option>
        </select>
      </div>
      {/* Honeypot — hidden from real users, bots fill it */}
      <div aria-hidden="true" style={{ position: "absolute", left: "-9999px" }}>
        <label htmlFor="website">Website</label>
        <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      {/* Cloudflare Turnstile */}
      <div ref={turnstileRef}></div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full px-4 py-3 bg-white text-zinc-950 font-semibold rounded-lg hover:bg-zinc-200 transition-colors disabled:opacity-50"
      >
        {status === "loading" ? "..." : "I'm in"}
      </button>
      {status === "error" && (
        <p className="text-red-400 text-sm">{message}</p>
      )}
    </form>
  );
}
