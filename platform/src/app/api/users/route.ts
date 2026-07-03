import { NextRequest, NextResponse } from "next/server";
import { createUser } from "@/modules/identity/service";

export async function POST(request: NextRequest) {
  const { displayName, email } = await request.json();

  if (!displayName || typeof displayName !== "string") {
    return NextResponse.json({ error: "displayName is required" }, { status: 400 });
  }

  const user = await createUser(displayName, email || undefined);
  return NextResponse.json(user, { status: 201 });
}
