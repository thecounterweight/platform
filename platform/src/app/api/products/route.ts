import { NextResponse } from "next/server";
import { listProducts } from "@/modules/marketplace/service";

export async function GET() {
  const products = await listProducts();
  return NextResponse.json(products);
}
