/**
 * Marketplace Module — Service Layer
 *
 * Responsible for:
 * - Product aggregation (Amazon, Flipkart affiliate APIs)
 * - Community seller listings
 * - Reviews (parameter-based, one per person per product)
 * - Trust score calculation
 * - Affiliate link tracking and commission attribution
 * - Sort by aggregate score (sum of star ratings)
 *
 * See: /docs/mvp.md (marketplace section)
 *
 * TODO: This is a placeholder. The marketplace workstream lead will
 * implement these features.
 */

import { db } from "@/lib/db";

export async function listProducts(params?: { source?: string }) {
  return db.product.findMany({
    where: params?.source ? { source: params.source as never } : undefined,
    include: { reviews: { select: { rating: true } } },
    orderBy: { createdAt: "desc" },
  });
}

export async function getProduct(id: string) {
  return db.product.findUnique({
    where: { id },
    include: {
      reviews: {
        include: { author: { select: { displayName: true, tier: true } } },
        orderBy: { createdAt: "desc" },
      },
    },
  });
}

export async function createReview(params: {
  productId: string;
  authorId: string;
  rating: number;
  body: string;
}) {
  // Only verified users can review
  const user = await db.user.findUnique({ where: { id: params.authorId } });
  if (!user || user.tier === "UNVERIFIED") {
    throw new Error("Only verified users can write reviews");
  }

  return db.review.create({ data: params });
}

// TODO: Marketplace workstream — implement these
// export async function fetchFromAmazon(query: string) {}
// export async function fetchFromFlipkart(query: string) {}
// export async function createCommunityListing(sellerId: string, product: unknown) {}
// export async function calculateTrustScore(userId: string) {}
// export async function trackAffiliateClick(productId: string, reviewerId: string) {}
