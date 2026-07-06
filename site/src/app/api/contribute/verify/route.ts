import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import Razorpay from "razorpay";
import { addContribution } from "@/lib/store";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export async function POST(request: NextRequest) {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, name, hideAmount } =
      await request.json();

    // Verify payment signature
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    if (expectedSignature !== razorpay_signature) {
      return NextResponse.json({ error: "Invalid payment signature" }, { status: 400 });
    }

    // Fetch payment details from Razorpay to get the amount
    const payment = await razorpay.payments.fetch(razorpay_payment_id);

    if (payment.status !== "captured") {
      return NextResponse.json({ error: "Payment not captured" }, { status: 400 });
    }

    await addContribution({
      name: name || "Anonymous",
      amount: Number(payment.amount) / 100,
      currency: String(payment.currency),
      hideAmount: hideAmount || false,
      razorpayPaymentId: razorpay_payment_id,
      razorpayOrderId: razorpay_order_id,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ status: "ok" });
  } catch {
    return NextResponse.json({ error: "Verification failed" }, { status: 500 });
  }
}
