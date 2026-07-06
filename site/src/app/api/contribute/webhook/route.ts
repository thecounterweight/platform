import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { addContribution } from "@/lib/store";

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const signature = request.headers.get("x-razorpay-signature");

    if (!signature) {
      return NextResponse.json({ error: "Missing signature" }, { status: 400 });
    }

    // Verify webhook signature
    const secret = process.env.RAZORPAY_WEBHOOK_SECRET!;
    const expectedSignature = crypto
      .createHmac("sha256", secret)
      .update(body)
      .digest("hex");

    if (signature !== expectedSignature) {
      return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
    }

    const event = JSON.parse(body);

    if (event.event === "payment.captured") {
      const payment = event.payload.payment.entity;

      await addContribution({
        name: payment.notes?.contributor_name || "Anonymous",
        amount: payment.amount / 100, // Convert from paise to rupees
        currency: payment.currency,
        razorpayPaymentId: payment.id,
        razorpayOrderId: payment.order_id,
        timestamp: new Date().toISOString(),
      });
    }

    return NextResponse.json({ status: "ok" });
  } catch {
    return NextResponse.json({ error: "Webhook processing failed" }, { status: 500 });
  }
}
