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

export async function POST(request: NextRequest) {
  try {
    // Origin check — block cross-site form submissions
    const origin = request.headers.get("origin");
    if (origin && !ALLOWED_ORIGINS.includes(origin)) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const { email, role } = await request.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email) || email.length > 254) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const sanitizedRole = VALID_ROLES.includes(role) ? role : "";

    const added = await addSignup(email.toLowerCase().trim(), sanitizedRole);

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
