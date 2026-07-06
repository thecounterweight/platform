# The Counterweight — Overview

A community-governed platform where verified real people invest together, trade together, and govern together. Community-owned. Open-source.

## Why This Scope

Looks like many products. It's one system — the pieces reinforce each other, but they don't all need to exist on day one.

**Load-bearing (must exist for the platform to function):**

Identity → trusted reviews → marketplace → revenue → builders → more features

**Amplifiers (added when the foundation is solid):**

Certification → talent pool → more revenue → investment facilitation → collective purchasing → governance at scale → translation → federation

The load-bearing pieces launch together as the MVP. Each amplifier is added when the previous phase generates the revenue and trust to support it.

Each feature exists somewhere already — affiliate review sites, angel networks, cooperatives, certification bodies, discussion forums. All proven. Nowhere do they exist together, under community ownership, with one verified identity connecting them all.

## What It Does

| Module | What it does |
|--------|-------------|
| Identity | Government ID + face scan + OTP = one real person per account. Privacy-preserving. Verification = cooperative membership = legal co-ownership. |
| Discussion | Threaded boards + chat. Every participant is a verified human. |
| Marketplace | Products aggregated from Amazon/Flipkart + community sellers. Reviews from verified humans only. Reviewers earn commission. |
| Certification | Domain experts evaluate and certify skills and product quality. Selected by community. |
| Talent Pool | Companies pay to access expert-certified professionals. |
| Investment | Communities back businesses via signed contracts. Revenue share or equity. Platform facilitates, doesn't manage. |
| Collective Purchasing | Small shops pool demand, buy direct from manufacturers at bulk prices. Platform coordinates. |
| Governance | One person, one vote on leadership and policy. Stake-weighted on investment decisions. Leaders removable via no-confidence (7-day discussion + 60% vote). |
| Payments | Money moves through existing rails (UPI, SEPA, bank transfer). Platform records, never holds or processes. |

## How It Makes Money

```
Day 1:    Affiliate commissions (reviews drive purchases on Amazon/Flipkart)
Month 3:  Talent pool access fees (companies pay for certified professionals)
Month 3:  Certification fees (candidates or sponsoring companies pay)
Month 6+: Seller commissions (when community sellers are added)
Scale:    Collective purchasing operational fees
```

Revenue from affiliate commissions, talent pool access, and certification fees. Community-owned.

## How Money Flows

**Early stage:** Operations takes priority. Early revenue keeps infrastructure running and contributors retained. The full split activates once monthly revenue consistently covers operating costs with margin.

The split changes as the platform grows. These ratios are a starting proposal — informed by how cooperatives and open-source foundations handle similar splits, open to revision.

| Annual revenue | Builders + Investors | Operations | Community reinvestment |
|---------------|---------------------|------------|----------------------|
| Under $20M | 60% | 30% | 10% |
| $20M - $100M | 55% | 20% | 25% |
| $100M - $500M | 35% | 20% | 45% |
| $500M+ | Community votes on the split |

Within the builders+investors share, investor portion is capped at 30% of total revenue (under $20M) or 40% ($20M+), and is time-bounded.

## How Contributors Get Paid

Contributions are tracked. Units = hours × complexity multiplier × time bonus.

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

- **Frontend:** Next.js (PWA — installable, push notifications)
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
