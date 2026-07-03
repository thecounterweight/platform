import { NextRequest, NextResponse } from "next/server";
import { createReview } from "@/modules/marketplace/service";

export async function POST(request: NextRequest) {
  const { productId, authorId, rating, body } = await request.json();

  if (!productId || !authorId || !rating || !body) {
    return NextResponse.json({ error: "productId, authorId, rating, body are required" }, { status: 400 });
  }

  if (rating < 1 || rating > 5) {
    return NextResponse.json({ error: "rating must be 1-5" }, { status: 400 });
  }

  try {
    const review = await createReview({ productId, authorId, rating, body });
    return NextResponse.json(review, { status: 201 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to create review";
    return NextResponse.json({ error: message }, { status: 403 });
  }
}
