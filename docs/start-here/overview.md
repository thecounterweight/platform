# The Counterweight — Overview

## The Problem

You can't tell what's real on the internet anymore. We fix that.

## The Solution

Every user is verified through government ID. One account per human. Identity data never reaches our servers — it stays on your device. An irrevocable purpose trust prevents sale or mission change. Open-source. Governed democratically.

**What the platform does:** Discussion, product reviews with a marketplace, contracts between verified parties, democratic governance, real-time translation across languages, end-to-end encrypted messaging. All built on verified identity — every participant is a real, unique human.

**What verified identity enables:** Trusted reviews (persistent reputation, can't start over). One-person-one-vote governance. Enforceable contracts between identified parties. Moderation where bans have real cost.

## Why This Scope

It's one system. The pieces reinforce each other, but they ship in phases.

**Load-bearing (must exist for the platform to function):**

Identity → discussion → trusted reviews → marketplace → revenue → builders → more features

**Amplifiers (added when the foundation is solid):**

Certification → talent pool → more revenue → contract infrastructure → collective purchasing → governance at scale → federation

The load-bearing pieces launch together as the MVP. Each amplifier is added when the previous phase generates the revenue and trust to support it.

Each of these features exists somewhere already — affiliate review sites, cooperatives, certification bodies, discussion forums. The identity layer is what makes each piece trustable. Without it, reviews are gameable, governance is vulnerable to sybil attacks, and contracts are expensive to enforce with gaps that both sides exploit.

## What It Does

| Module | What it does |
|--------|-------------|
| Identity | Government ID + face scan + OTP = one real person per account. Identity data stays on your device (signed credential from KYC provider). Platform stores only a deduplication hash computed via OPRF — never sees raw identity data. Two paths: anonymous (pseudonym, full privacy) or public profile (where you're from, what you've contributed, certifications, communities). ZK proofs for ecosystem. |
| Discussion | Threaded boards + chat. Every participant is a verified human. E2E encrypted DMs (MLS protocol). Real-time neural translation across languages. |
| Marketplace | Products aggregated from major platforms (affiliate APIs) + community sellers listing directly. You review with proof of purchase or as an expert. Others who buy based on your recommendation rate it — with proof of purchase. Platform calculates a helpfulness score over time. You get paid proportionally. Revenue comes from affiliate commissions. |
| Certification | Domain experts evaluate and certify skills and product quality. Selected by community. |
| Talent Pool | Companies pay to access expert-certified professionals. |
| Contracts | Enforceable agreements between verified humans — business funding, freelancer agreements, rental contracts, loans, partnerships. Platform provides templates, signing, storage, and dispute resolution. |
| Collective Purchasing | Small shops pool demand, buy direct from manufacturers at bulk prices. Platform coordinates. |
| Governance | One person, one vote on leadership and policy. Leaders removable via no-confidence (7-day discussion + 60% vote). |
| Payments | Money moves through existing rails (UPI, SEPA, bank transfer). Platform records, never holds or processes. |

## How It Makes Money

```
Milestone 3:  Affiliate commissions (reviews drive purchases on Amazon/Flipkart)
Phase 2:      Talent pool access fees (companies pay for certified professionals)
Phase 2:      Certification fees (candidates or sponsoring companies pay)
Phase 2:      Seller commissions (when community sellers are added)
At scale:     Collective purchasing operational fees
```

Milestones 1-2 generate no revenue — they build the community and trust. Revenue starts at Milestone 3 (marketplace + affiliate APIs). Phase 2 features are funded by Milestone 3 revenue.

## How Money Flows

**Early stage (pre-quorum):** The founder has operational authority within the defined formula. Anyone can contribute capital as risk capital — recorded permanently, recognized under governance-decided terms when revenue flows. The full bicameral voting process activates once membership hits 10,000 verified members. Until then, early funding operates under constitutional bounds with founder authority and independent-body oversight on disputes.

**Starting split:** 60% builders + investors | 30% operations | 10% community reinvestment. Investor share is capped and time-bounded. At scale, governance decides the split.

See [Funding Model](../joining/funding-model.md) for full details.

## How Contributors Get Paid

Contributions are tracked on a public ledger. Revenue distributes proportional to what you built. Complexity and timing are accounted for — early contributors get higher multipliers to compensate for risk.

See [Builder Compensation](../joining/builder-compensation.md) for the full formula.

## The System Diagram

![System Diagram](../assets/system-diagram.svg)

## Current Status

Nothing is built yet. The platform exists as design and documentation only.

| Status | Component |
|--------|-----------|
| Designed | Identity verification, payments, contracts, certification, marketplace strategy |
| Not started | All platform code (backend, frontend, mobile) |

## Tech Stack (Proposed)

- **Frontend:** Next.js (PWA — installable, push notifications)
- **Backend:** Next.js API routes + standalone workers (TypeScript, modular monolith)
- **Database:** PostgreSQL (single instance, schemas per module)
- **Cache:** Redis (sessions, rate limiting, real-time presence)
- **Background Jobs:** BullMQ (Redis-backed)
- **Search:** Meilisearch or Typesense (added when marketplace launches)
- **Storage:** Cloudflare R2 or MinIO (S3-compatible)
- **Hosting:** Vercel (frontend) + Railway or Fly.io (workers/db) + GPU instance (translation/ML inference)
- **Translation:** NLLB-200 or SeamlessM4T (self-hosted, GPU inference)
- **Trust Engine:** EigenTrust graph propagation (reviewer trust scoring)
- **E2E Encryption:** MLS protocol (RFC 9420) for DMs and group chat
- **CI/CD:** GitHub Actions

## Read More

- [Vision](vision.md) — where this goes at scale
- [MVP](mvp.md) — what gets built first
- [Builder Compensation](../joining/builder-compensation.md) — how contributors get paid
- [Identity Verification](../building/identity-verification.md) — how one-person-one-account works
- [Payments](../building/payments.md) — how money moves
- [Contracts](../building/contracts.md) — contract infrastructure for verified humans
- [Contributing](../../CONTRIBUTING.md) — how to start
