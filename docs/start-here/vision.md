# Vision

## The Problem

You can't tell what's real on the internet anymore. We fix that.

## The Core Idea

Every person on the platform is verified through government ID. One account per human. Identity data never reaches platform servers — it stays on your device. An irrevocable purpose trust prevents sale or mission change (same mechanism as Patagonia — legally binding, independent trustees).

Verified identity is the dependency for everything else. Reviews are trustable when reviewers have one persistent reputation. Governance works when one person equals one vote. Moderation works when getting banned costs something. Contracts are enforceable when both parties are identified.

## What We're Building

A platform where verified people can organize, transact, and govern collectively.

### The Platform

- **Every person is real.** One account per human. Verified. You choose how to show up — anonymous (pseudonym, full privacy) or as yourself (public profile that accumulates reputation, connections, and standing). Either way, the system knows it's a real person.
- **Your data stays on your device.** Identity data never reaches platform servers — a signed credential from the KYC provider lives on your phone. Attributes (age bracket, district — categorical, never precise) are verified statelessly from that credential when needed. Full export and delete at any time. Open-source code so anyone can verify. Zero-knowledge proofs let you prove things to external services without revealing data to them or to us.
- **You govern the platform.** Features, policies, moderation — decided by user vote. One person, one vote.
- **Communication is built in.** Discussion boards, group chat, video calls. End-to-end encrypted (MLS protocol) — the platform cannot read your private messages, even under compulsion.
- **Money moves transparently.** Payments happen through existing rails (UPI, SEPA, bank transfers) — the platform records, not processes. All investment contracts are visible to all members. Personal transactions stay private.
- **Translation is built in.** Post in any language, read in any language.
- **Legal infrastructure is built in.** Contracts of any type — business funding, rental, freelance, partnership, loans. Templates designed by lawyers, digital signatures, immutable storage. Contracts are timestamped and legally enforceable.

### The Marketplace

A dedicated space you enter when you want to buy or sell.

- **Products from everywhere, reviews you can trust.** Products aggregated from major platforms via affiliate APIs, plus community sellers listing directly for free. Reviews from verified humans with proof of purchase.
- **No buyer fees.** Sellers pay a small commission when a sale happens — the platform brought them the customer. Listing is free.
- **Community certification.** Expert evaluators — selected by the community — independently assess and certify quality. Products, services, and skills.
- **Talent pool.** Experts evaluate and certify skills. Companies pay a fee to access expert-certified professionals.
- **Collective purchasing.** The platform aggregates demand from small shops and coordinates bulk orders direct from manufacturers. Participants pay manufacturers directly — the platform coordinates, never holds the money.

### At Scale (conditional on reaching sufficient membership)

If the platform reaches millions of verified members, additional capabilities become feasible:

- **Contracts between verified parties.** Business funding, freelancer agreements, rental contracts, loans — enforceable because both parties are identified. Requires contract infrastructure (Phase 2).
- **Political coordination.** Verified members in the same geography can coordinate on local issues — the identity layer confirms residency. Requires sufficient density per geography.
- **Bottom-up governance.** Communities choose leaders via one-person-one-vote. No-confidence motion, 7-day discussion, 60% majority removes them.

## How It Grows

Small → large. Local → global.

1. Discussion and reviews launch. Users join, content is created.
2. Marketplace activates. Affiliate revenue starts.
3. Communities form around geography or interest.
4. Contract infrastructure enables direct business funding between verified parties.
5. At sufficient membership density, political coordination becomes feasible.
6. Federation — other instances can connect to the identity layer.

## Why This Scope

Ships in phases — each phase generates the revenue and trust that funds the next. The load-bearing path: identity → reviews → marketplace → revenue → more features. Amplifiers (certification, talent pool, contracts, collective purchasing) are added when the foundation supports them.

See [Overview](overview.md#why-this-scope) for the full breakdown. The identity layer is what makes each individual piece trustable — without it, reviews are gameable, governance is vulnerable to sybil attacks, and contracts have no accountability.

## Bigger Than One Platform

The identity layer is open infrastructure — but privacy-preserving. Third-party services can verify that a user is real, unique, and meets specific criteria without the platform sharing any data or even knowing which services the user authenticates with.

**How it works:** Zero-knowledge proofs. Users generate cryptographic proofs on their own device that prove attributes ("I'm 18+", "I'm a unique human", "I'm in this city") without revealing the underlying data. Third parties verify the proof mathematically — no API call to the platform, no data exchange, no surveillance.

**Others can build:**

- **P2P lending** — verify "real person, 18+, unique" without learning who they are
- **Freelance marketplaces** — portable reputation proofs across instances
- **Local classifieds** — verify "seller is in this district" without revealing their address
- **Co-op management** — legitimate one-person-one-vote for any organization (Semaphore-based anonymous group membership)
- **Mutual aid networks** — verify "real person in this geography" without identity disclosure
- **Skill exchange** — prove certification level without revealing name
- **Citizen journalism** — verified (provably real) but anonymous (ZK proof reveals nothing beyond "unique human")
- **Whistleblowing** — prove insider status without revealing identity

Each of these is someone else's project, running on their own server. The platform issues cryptographic credentials; third parties verify ZK proofs. The platform never knows where users authenticate.

**Sustainability:**

- Community-serving instances (mutual aid, co-op governance, non-profits) — verify proofs for free.
- Revenue-generating instances (freelance marketplaces, lending platforms) — pay a proportional fee for credential infrastructure.

The ceiling on that percentage is a constitutional bound — changeable only by 75% supermajority. The specific rate within that ceiling is decided democratically.

See [Identity Verification](../building/identity-verification.md#identity-as-infrastructure-zero-knowledge-proofs) for the full technical architecture.

## Your Profile as a Citizen of the World

Two paths: anonymous (pseudonymous, full access, full privacy) or public profile (reputation ledger — location, review accuracy, trust score, certifications, time on platform). Both paths have full feature access. The public profile accumulates from platform activity.

See [Identity Verification — Two Paths](../building/identity-verification.md#two-paths-anonymous-or-public-identity) for the full design.

## What This Is Not

No tokens, no NFTs, no speculation. Open-source, forkable, designed for federation. People invest and expect returns. Parts of this will fail. We'll rebuild them.

Blockchain may be used as infrastructure (anchoring the contribution ledger for immutability) — but never as a product feature and never as something users need to interact with.
