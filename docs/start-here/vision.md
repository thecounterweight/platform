# Vision

## The Problem

You can't trust anything online. Reviews are fake. Platforms get sold and gutted. The person you're arguing with might be a bot — or five bots. You have no vote in the rules, no recourse when they change, and no way to take your reputation elsewhere when the platform dies.

## The Core Idea

Every person on the platform is a verified, unique human. The platform is structurally prevented from being sold, captured, or stripped of user protections — guaranteed by an irrevocable purpose trust, not just a promise.

That one decision — verified identity — enables trusted reviews, democratic governance, enforceable contracts between strangers, and moderation that actually works. The rest of this document describes what we build on top of it.

## What We're Building

A platform that enables collective action by design.

### The Platform

- **Every person is real.** One account per human. Verified. You choose how to show up — anonymous (pseudonym, full privacy) or as yourself (public profile that accumulates reputation, connections, and standing). Either way, the system knows it's a real person.
- **You own your data.** Opt-in attributes only (age bracket, district — categorical, never precise). Full export and delete at any time. Open-source code so anyone can verify. Zero-knowledge proofs let you prove things to external services without revealing data to them or to us.
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

### At Scale

With millions of verified people, transparent money, and democratic governance on the same platform:

- **Contracts between real people.** Business funding, freelancer agreements, rental contracts, loans — all enforceable because both parties are verified. Revenue flows, disputes are resolvable, and every agreement has a paper trail.
- **Political power.** 5,000 organized people in a city who vote together on local issues are a serious voting block.
- **Bottom-up governance.** Communities choose leaders. Leaders serve at the pleasure of the people. No-confidence motion, 7-day discussion, 60% majority removes them.

## How It Grows

Small → large. Local → global.

1. People join. They have a discussion space with real humans.
2. Marketplace activates. People buy and sell. Revenue flows. Builders get paid.
3. Communities form around geography or interest. Members start backing businesses directly.
4. First businesses get funded. Returns flow back. More people join because it works.
5. Political coordination emerges naturally once membership hits critical mass.
6. Other communities see it working. They spin up their own — connected to the network but sovereign.

## Why This Scope

One system where each piece strengthens the others. Ships in phases — each phase generates the revenue and trust that funds the next.

**Load-bearing (the MVP):**

- Identity makes reviews trustworthy
- Trusted reviews make the marketplace useful
- Marketplace generates revenue from day one (affiliate commissions)
- Revenue pays builders who build more features

**Amplifiers (added when the foundation supports them):**

- Certification creates the talent pool
- Talent pool generates more revenue
- Established trust makes contract infrastructure viable (business funding, P2P lending, freelance)
- Contract revenue attracts more members
- More members make collective purchasing viable

Each feature exists independently somewhere — affiliate review sites, angel networks, cooperatives, certification bodies, forums. All proven models. Nowhere do they exist together, under community ownership, with one verified identity connecting them all.

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

See [Identity Verification](identity-verification.md#identity-as-infrastructure-zero-knowledge-proofs) for the full technical architecture.

## Your Profile as a Citizen of the World

The platform offers two ways to exist. Anonymous participation: you're verified, you interact, no one knows who you are. Or you build a public profile — a reputation ledger that shows where you're from, what you've done, how trustworthy your contributions have been.

This isn't social media. There are no followers, no likes, no engagement metrics. Your profile reflects *what you did* — reviews written, accuracy earned, skills certified, communities contributed to. It's your standing as a participant in a new kind of public space, built on trust.

Someone seeing "verified user from Rajasthan, 2 years, 94% review accuracy, certified electrician" — that's authority earned through action, backed by verified identity. It's your portable reputation in the digital world.

The anonymous path loses nothing in access. But the public path builds something that compounds — connections, standing, credibility. The incentive to show up as yourself isn't forced. It's natural.

## What This Is Not

No tokens, no NFTs, no speculation. Open-source, forkable, designed for federation. People invest and expect returns. Parts of this will fail. We'll rebuild them.

Blockchain may be used as infrastructure (anchoring the contribution ledger for immutability) — but never as a product feature and never as something users need to interact with.
