# Vision

## The Problem

You can't tell what's real on the internet anymore. We fix that.

Discussions are shaped by bots and sockpuppets. Moderation is arbitrary — the platform is both the government and the judge. Our data gets sold, our content gets harvested, and we have no structural say in any of it.

## The Core Idea

Every person on the platform is verified through government ID. One account per human. Identity data never reaches platform servers — it stays on your device. An irrevocable purpose trust prevents sale or mission change (same mechanism as Patagonia — legally binding, independent trustees).

Verified identity is the dependency for everything else. Reviews are trustable when reviewers have one persistent reputation. Governance works when one person equals one vote. Moderation works when getting banned costs something. Contracts are enforceable when both parties are identified.

## What We're Building

A platform where verified people can discuss, transact, and govern collectively.

### The Platform

- **Every person is real.** One account per human. Verified. You choose how to show up — anonymous (pseudonym, full privacy) or public profile (where you're from, what you've contributed, certifications, communities). Either way, the system knows it's a real person.
- **Your data stays on your device.** A signed credential from the KYC provider lives on your phone. The platform never receives identity data — only a deduplication hash computed via OPRF, where the server never sees your ID number and your phone never sees the server's key. Full export and delete at any time. Open-source code so anyone can verify.
- **You govern the platform.** Features, policies, moderation — decided by user vote. One person, one vote. Leaders elected and removable.
- **Communication is built in.** Discussion boards, group chat. End-to-end encrypted (MLS protocol) — the platform cannot read your private messages.
- **Money moves through existing rails.** UPI, SEPA, bank transfers. The platform records, never holds or processes.
- **Translation is built in.** Post in any language, read in any language. Self-hosted neural translation — no user content leaves our infrastructure.
- **Contracts between verified parties.** Business funding, freelancer agreements, rental contracts. Templates, digital signatures, immutable storage. Both parties are identified and accountable.

### The Marketplace

- **Products from everywhere, reviews you can trust.** Products aggregated from major platforms via affiliate APIs, plus community sellers listing directly. Reviews from verified humans with proof of purchase.
- **Reviewers get paid based on accuracy.** When someone buys based on your recommendation, they rate it — with proof of purchase. Platform calculates a helpfulness score over time. You earn proportionally.
- **Community certification.** Expert evaluators — selected by the community — certify product quality and skills.
- **Talent pool.** Expert-certified professionals. Companies pay to access.
- **Collective purchasing.** Platform aggregates demand from small shops, coordinates bulk orders direct from manufacturers. Participants pay manufacturers directly — platform coordinates, never holds money.

### At Scale

If the platform reaches millions of verified members:

- **Identity as open infrastructure.** Zero-knowledge proofs let users prove attributes ("I'm 18+", "I'm a unique human", "I'm in this district") to third-party services without revealing identity. The platform never knows where you authenticate.
- **Others build on it.** P2P lending, freelance marketplaces, local classifieds, co-op governance, citizen journalism — each someone else's project, running on their own server. The platform issues cryptographic credentials; third parties verify ZK proofs.
- **Political coordination.** Verified members in the same geography coordinate on local issues. The identity layer confirms residency without revealing addresses.

## How It Grows

1. Discussion and reviews launch. Users join, content is created.
2. Marketplace activates. Affiliate revenue starts.
3. Communities form around geography or interest.
4. Contract infrastructure enables agreements between verified parties.
5. At sufficient density, coordination beyond the platform becomes feasible.
6. Federation — other instances connect to the identity layer.

## Why This Scope

Ships in phases. Each phase generates the revenue and trust that funds the next. The load-bearing path: identity → discussion → reviews → marketplace → revenue → more features. Amplifiers (certification, talent pool, contracts, collective purchasing) are added when the foundation supports them.

The identity layer is what makes each piece trustable. Without it, reviews are gameable, governance is vulnerable to sybil attacks, and contracts have no accountability.

## What This Is Not

No tokens, no NFTs, no speculation. No ads, no data selling. Open-source, forkable, designed for federation.

Blockchain may be used as infrastructure (anchoring the contribution ledger) — never as a product feature and never as something users interact with.
