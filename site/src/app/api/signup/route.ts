import { NextRequest, NextResponse } from "next/server";
import { addSignup } from "@/lib/store";

const VALID_ROLES = [
  "",
  "engineering",
  "design",
  "legal",
  "economics",
  "trust-safety",
  "community",
  "domain-expert",
  "translation",
  "other",
  "just-here",
];

const ALLOWED_ORIGINS = [
  "https://thecounterweight.org",
  "http://localhost:3000",
];

const MIN_SUBMIT_TIME_MS = 2000; // 2 seconds minimum to fill form

async function verifyTurnstile(token: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return false;

  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ secret, response: token }),
  });

  const data = await res.json();
  return data.success === true;
}

export async function POST(request: NextRequest) {
  try {
    // Origin check
    const origin = request.headers.get("origin");
    if (origin && !ALLOWED_ORIGINS.includes(origin)) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const { name, email, role, token, loadedAt, website } = await request.json();

    // Honeypot check — if the hidden field is filled, it's a bot
    if (website) {
      // Silently accept to not reveal the trap
      return NextResponse.json({ success: true }, { status: 201 });
    }

    // Timing check — form submitted too fast
    if (loadedAt && Date.now() - loadedAt < MIN_SUBMIT_TIME_MS) {
      return NextResponse.json({ error: "Please take your time." }, { status: 422 });
    }

    // Turnstile verification
    if (!token || !(await verifyTurnstile(token))) {
      return NextResponse.json({ error: "Verification failed. Please try again." }, { status: 403 });
    }

    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }

    if (name.length > 100) {
      return NextResponse.json({ error: "Name too long" }, { status: 400 });
    }

    // Email is optional but must be valid if provided
    let sanitizedEmail: string | null = null;
    if (email && typeof email === "string" && email.trim().length > 0) {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(email) || email.length > 254) {
        return NextResponse.json({ error: "Invalid email" }, { status: 400 });
      }
      sanitizedEmail = email.toLowerCase().trim();
    }

    const sanitizedRole = VALID_ROLES.includes(role) ? role : "";

    const added = await addSignup(name.trim(), sanitizedEmail, sanitizedRole);

    if (!added) {
      return NextResponse.json(
        { error: "You're already signed up" },
        { status: 409 }
      );
    }

    return NextResponse.json({ success: true }, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "We hit our free-tier database limit. Working on a solution." },
      { status: 500 }
    );
  }
}
