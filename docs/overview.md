# The Counterweight — Overview

A community-governed platform where verified real people invest together, trade together, and govern together. No bots. No billionaire owners. No VC. Open-source.

## Why This Scope

This looks like many products. It's one system. The pieces reinforce each other — but they don't all need to exist on day one.

**Load-bearing (must exist for the platform to function):**

Identity → trusted reviews → marketplace → revenue → builders → more features

**Amplifiers (strengthen the system, added when the foundation is solid):**

Certification → talent pool → more revenue → investment facilitation → collective purchasing → governance at scale → translation → federation

The load-bearing pieces launch together as the MVP. Each amplifier is added when the previous phase generates the revenue and trust to support it.

Each feature exists somewhere already. Affiliate review sites, angel networks, cooperatives, certification bodies, discussion forums — all proven. Nowhere do they exist together, under community ownership, with one verified identity connecting them all. That's the gap.

Publicly owned infrastructure needs to cover communication, commerce, finance, and governance — because these are the systems people depend on daily and currently have no ownership over. Covering only one leaves people dependent on corporate platforms for the rest. But it doesn't all ship at once.

## What It Does (One Sentence Each)

| Module | What it does |
|--------|-------------|
| Identity | Government ID + face scan + OTP = one real person per account. Privacy-preserving. |
| Discussion | Threaded boards + chat. Every participant is verified human. No bots, no manipulation. |
| Marketplace | Products aggregated from Amazon/Flipkart + community sellers. Reviews from verified humans only. Reviewers earn commission. |
| Certification | Domain experts evaluate and certify skills and product quality. Selected by community, not self-appointed. |
| Talent Pool | Companies pay to access expert-certified professionals. Cheaper than recruiters, more reliable than LinkedIn. |
| Investment | Communities back businesses via signed contracts. Revenue share or equity. Platform facilitates, doesn't manage. |
| Collective Purchasing | Small shops pool demand, buy direct from manufacturers at bulk prices. Platform coordinates. |
| Governance | One person, one vote on leadership and policy. Stake-weighted on investment decisions. Leaders removable via no-confidence (7-day discussion + 60% vote). |
| Payments | Money moves through existing rails (UPI, SEPA, bank transfer). Platform records, never holds or processes. |

## How It Makes Money

```
Day 1:    Affiliate commissions (reviews drive purchases on Amazon/Flipkart)
Month 3:  Talent pool access fees (companies pay for certified professionals)
Month 3:  Certification fees (candidates or sponsoring companies pay)
Month 6+: Transaction fees (when on-platform payments activate)
Scale:    Collective purchasing operational fees
```

No ads. No data selling. No VC demanding growth at all costs.

## How Money Flows

**Early stage:** Before revenue is healthy enough to support the full split, operations takes priority. Early revenue keeps infrastructure running and contributors retained. The full split activates once monthly revenue consistently covers operating costs with margin.

The split changes as the platform grows. These ratios are a starting proposal — informed by how cooperatives and open-source foundations handle similar splits, but open to revision as we learn more. No timeline assumed. When revenue hits a threshold, the split adjusts:

| Annual revenue | Builders + Investors | Operations | Community reinvestment |
|---------------|---------------------|------------|----------------------|
| Under $20M | 60% | 30% | 10% |
| $20M - $100M | 55% | 20% | 25% |
| $100M - $500M | 35% | 20% | 45% |
| $500M+ | Community votes on the split |

Within the builders+investors share, investor portion is capped at 30% of total revenue (under $20M) or 40% of total revenue ($20M+), and is time-bounded. The increase from 30% to 40% at scale accommodates growth-stage investors who contribute larger capital at lower risk — early investors' share doesn't grow, the pool expands to include new participants.

## How Contributors Get Paid

Every contribution is tracked. Units = hours × complexity multiplier × time bonus.

- Year 1 contributors get 3x multiplier on all units
- Year 2 gets 2x, Year 3 gets 1.5x, Year 4+ gets 1x
- Revenue flows to contributors proportional to their share of total units
- All assignments are public, challengeable, and require verifiable artifacts

## The System Diagram

![System Diagram](assets/system-diagram.svg)

[View full size](https://raw.githubusercontent.com/thecounterweight/platform/main/docs/assets/system-diagram.svg)

## What's Built vs What's Planned

| Status | Component |
|--------|-----------|
| Live | Landing page + signup (thecounterweight.org) |
| Designed | Identity verification, payments, investment model, certification, marketplace strategy |
| Not started | All platform code (backend, frontend, mobile) |

## Tech Stack (Proposed)

- **Frontend:** Next.js (PWA — installable, push notifications, no app store gatekeepers)
- **Backend:** Modular monolith (clear boundaries, ships as one unit, splits later)
- **Database:** PostgreSQL
- **Cache:** Redis
- **Message Broker:** NATS or RabbitMQ
- **Search:** Meilisearch or Typesense
- **Storage:** MinIO or Cloudflare R2
- **Deployment:** Docker + Kubernetes (when scale warrants it)

## Read More

- [Vision](vision.md) — the full picture
- [MVP](mvp.md) — what gets built first
- [Builder Compensation](builder-compensation.md) — how you get paid
- [Identity Verification](identity-verification.md) — how one-person-one-account works
- [Payments](payments.md) — how money moves
- [Investment Model](investment-model.md) — community economics
- [Contributing](../CONTRIBUTING.md) — how to start
