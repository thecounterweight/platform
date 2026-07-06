# Payments

How money moves on the platform without the platform becoming a payment processor.

## Core Principle

The platform does not hold, route, or process money. It verifies identities, facilitates contracts, and records that transactions happened. Money moves between verified parties through existing infrastructure.

This means: no money transmission license needed. No funds held in escrow. No regulatory burden of being a payment processor.

## The Split Approach

Different transaction types use different rails based on what makes sense.

### Small Transactions (Marketplace Purchases)

Use the cheapest country-specific rail available:

| Country/Region | Rail | Approximate cost |
|---------------|------|-----------------|
| India | UPI | Free (person-to-person) |
| EU | SEPA | Pennies per transfer |
| US | ACH | $0.20-0.50 flat |
| Others | Best available local rail | Varies |

For countries where only card processors (Stripe, Razorpay) are available, use them. On a small purchase, 2% is a few rupees — not ideal, but not the 15-30% that existing platforms take.

Buyers pay only what the payment rail charges — no platform fee. Sellers pay a small commission on completed sales.

### Large Transactions (Investment Contracts, Business Funding)

Direct bank transfer between parties. Zero processing fee.

How it works:
1. Contract is signed on the platform between named, verified parties.
2. Platform shows payment details (bank account of the receiving party).
3. Sender transfers directly — via their own bank, UPI, wire, whatever they prefer.
4. Receiving party confirms receipt on the platform.
5. Platform records the transaction as complete.

The money never touches the platform. This is how angel investments, property deals, and large B2B transactions already work.

### Cross-Border

| Type | Recommended rail | Cost |
|------|-----------------|------|
| Small marketplace purchase | Wise, or local equivalent | 0.5-1.5% |
| Large investment contract | International wire or Wise | User chooses their own method |

Cross-border investment contracts are direct transfers — the platform provides the contract and identity verification, the parties choose how to move the money.

## What the Platform Charges

| Transaction type | Who pays | Platform fee |
|-----------------|----------|--------------|
| Marketplace purchase (aggregated) | Nobody | None — revenue comes from affiliate commissions |
| Marketplace sale (community sellers) | Seller | Small commission on completed sales |
| Contract creation + signing | Both parties (split or initiator pays) | Per-contract fee covering templates, signing infrastructure, storage, and reminders |
| Dispute resolution | Parties involved | Shared fee covering mediator coordination and process management |
| Collective purchasing | Nobody | Small coordination fee covers operations and generates revenue |

Buyers never pay a platform fee. Sellers pay a small commission when a sale completes — the platform brought them the customer. Businesses receiving investment capital pay a facilitation fee that covers legal infrastructure and generates a small revenue stream. Dispute resolution fees are shared by the parties involved. Collective purchasing coordination covers its own operational costs and generates a small revenue stream.

All fees follow the same rubric: calculate what it costs to build and maintain the component, then add a small margin on top. Specific percentages will be determined by research into actual operational costs — not set arbitrarily. Revenue also comes from affiliate commissions, sponsored slots, certification fees, talent pool access fees, and proportional fees from commercial instances using the identity layer.

## Why This Works

- **No money held = no money transmission license.** The platform is a contract and identity layer, not a payment processor.
- **KYC already handled.** The three-layer identity verification (government ID + face scan + OTP) satisfies any processor's KYC requirements. See [Identity Verification](identity-verification.md).
- **AML is a software problem.** With verified identities on both sides, transaction monitoring for suspicious patterns (rapid cycling, unusual amounts) is straightforward.
- **Cheapest possible cost per country.** No single expensive processor forced on everyone. Each country uses its own near-free infrastructure.
- **Large amounts pay nothing.** The transactions where fees hurt most (₹2 lakh investment, ₹50 lakh business funding) go direct bank-to-bank. Zero intermediary.

## What About Disputes?

For marketplace purchases where money has already moved:

- Buyer and seller are both verified real humans.
- The contract/receipt exists on the platform.
- Dispute resolution follows the same process as any other contract dispute — community mediation first, legal system as last resort. See [Contracts](contracts.md) for the dispute process.
- For small marketplace disputes, buyer/seller reputation and community pressure usually resolve it. Persistent bad actors lose their verified status.

## Implementation Phases

1. **MVP:** No on-platform payments. Marketplace is listing + reviews only. Buyers contact sellers directly.
2. **Phase 2:** Integrate country-specific rails for marketplace (UPI first for India). Direct bank transfer for investment contracts (just recording, no processing).
3. **Phase 3:** Cross-border marketplace payments via Wise API or equivalent. Expand rail integrations to more countries.

## Open Questions

- Which countries to prioritize after India for rail integration?
- Should the platform offer optional escrow for marketplace purchases (via a licensed partner, not holding funds itself)?
- How to handle refunds when money moved directly between parties?
