# The Counterweight — Overview

A community-governed platform where verified real people invest together, trade together, and govern together. No bots. No billionaire owners. No VC. Open-source.

## Why This Scope

This looks like many products. It's one system. The pieces need each other:

Identity enables trusted reviews → trusted reviews make the marketplace useful → marketplace generates revenue → revenue pays builders → builders build certification → certification creates the talent pool → talent pool fees generate more revenue → investment facilitation becomes possible because trust is established → investment returns attract more members → more members make collective purchasing viable → growth.

Remove any piece and the loop breaks.

Each feature exists somewhere already. Affiliate review sites, angel networks, cooperatives, certification bodies, discussion forums — all proven. Nowhere do they exist together, under community ownership, with one verified identity connecting them all. That's the gap.

Publicly owned infrastructure needs to cover communication, commerce, finance, and governance — because these are the systems people depend on daily and currently have no ownership over. Covering only one leaves people dependent on corporate platforms for the rest.

The MVP is three things. Each phase generates the revenue that funds the next.

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
| Governance | One person, one vote on leadership and policy. Stake-weighted on investment decisions. Leaders removable any day. |
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

The split changes as the platform grows — more flows to community reinvestment at scale:

| Annual revenue | Builders + Investors | Operations | Community reinvestment |
|---------------|---------------------|------------|----------------------|
| Under $5M | 70% | 20% | 10% |
| $5M - $50M | 60% | 20% | 20% |
| $50M - $500M | 45% | 20% | 35% |
| $500M+ | Community votes on the split |

Within the builders+investors share, investor portion is capped at 40% and time-bounded.

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
