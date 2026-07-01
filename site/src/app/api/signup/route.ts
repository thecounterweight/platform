import { NextRequest, NextResponse } from "next/server";
import { addSignup } from "@/lib/store";

export async function POST(request: NextRequest) {
  try {
    const { email, role } = await request.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const added = await addSignup(email.toLowerCase().trim(), role || "");

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
