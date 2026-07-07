# The Counterweight

**Every review you read might be fake. Every platform you join will eventually be sold.**

We're building the alternative: a platform where every participant is a verified real human, and an irrevocable purpose trust makes it structurally impossible to sell, gut, or enshittify.

→ [Website](https://thecounterweight.org) · [Contributing](CONTRIBUTING.md) · [Overview](docs/overview.md)

## What it does

- **Trusted reviews.** Every reviewer is a verified human with proof of purchase. Ranked by statistical accuracy (Wilson score), not gaming. Trust propagates through a graph — fake review rings can't bootstrap credibility.
- **Discussion without bots.** Threaded boards where every participant is a real person with one account. End-to-end encrypted private messaging.
- **Real-time translation.** Post in Hindi, read in English. Self-hosted neural translation — no user content leaves our infrastructure.
- **Can't be sold. Ever.** An irrevocable purpose trust holds a golden share. Independent trustees (not the founder) can veto any sale, mission change, or removal of user protections.

## Why verified identity changes everything

One architectural decision makes things possible that aren't possible otherwise:

- Reviews are trustable because reviewers have a single reputation they can't reset
- Governance works because one person = one vote (no sock puppets)
- Moderation works because getting banned means losing your only account
- Contracts work because every party is a known, accountable person

Your raw ID is never stored — only an irreversible cryptographic hash. You can participate under a pseudonym. Zero-knowledge proofs let you prove attributes to external services without revealing who you are.

## For builders

Early contributors earn **30-120x their raw hours** in revenue-share units. No equity, but deliberately more generous than equity to compensate for the risk.

| Complexity | Multiplier | Example |
|-----------|-----------|---------|
| Routine | 3x | Docs, minor fixes |
| Standard | 7x | Feature implementation |
| Complex | 12x | Architecture, integrations |
| Highly complex | 20x | Payment systems, identity |
| Specialist | 30x | ZK circuits, crypto protocols |

Bonuses stack additively: Year 1 (+100%), first-10 contributor (+100%), critical path (+50%), first-of-kind (+50%). Maximum ceiling: 120x.

Every contribution is recorded from day one on a public ledger. When revenue flows, it flows back to everyone who built this.

→ [Builder Compensation](docs/builder-compensation.md) · [Open Issues](https://github.com/thecounterweight/platform/issues)

## What ships first

```
Milestone 1:  Discussion boards + phone verification + real-time translation + E2E encrypted chat
Milestone 2:  Government ID verification + verified attributes
Milestone 3:  Marketplace + trusted reviews + affiliate revenue
Phase 2:      Certification, talent pool, contracts, collective purchasing, ZK proofs for ecosystem
```

Revenue starts at Milestone 3 (affiliate commissions). Each phase funds the next.

## The system

```
┌─────────────────────────────────────────────────────────────┐
│                    VERIFIED IDENTITY                         │
│         One person, one account. Privacy-preserving.         │
│         ZK proofs for ecosystem. Open infrastructure.        │
└──────────┬──────────────────────────────────────┬───────────┘
           │                                      │
           ▼                                      ▼
┌─────────────────────────────┐  ┌────────────────────────────┐
│      THE COUNTERWEIGHT      │  │     OPEN ECOSYSTEM         │
│         (our platform)      │  │  (anyone can build on it)  │
├─────────────────────────────┤  ├────────────────────────────┤
│                             │  │                            │
│  Discussion + Translation   │  │  P2P Lending               │
│  Marketplace + Reviews      │  │  Freelance Marketplaces    │
│  E2E Encrypted Messaging    │  │  Local Classifieds         │
│  Contracts + ODR            │  │  Co-op Management          │
│  Certification + Talent     │  │  Mutual Aid Networks       │
│  Democratic Governance      │  │  Citizen Journalism        │
│                             │  │                            │
│                             │  │  Verify via ZK proofs —    │
│                             │  │  platform never knows      │
└─────────────────────────────┘  │  where you authenticate.   │
                                 └────────────────────────────┘
```

## Start here

| You are... | Start with |
|------------|-----------|
| Curious about the idea | [Overview](docs/overview.md) — the entire system in one page |
| Ready to build | [Contributing](CONTRIBUTING.md) — pick an issue, ship code |
| Interested in the vision | [Vision](docs/vision.md) — where this goes at scale |
| Evaluating the architecture | [Architecture RFC](docs/architecture-rfc.md) — tear it apart |

## Documentation

| Document | Purpose |
|----------|---------|
| [Vision](docs/vision.md) | Full picture + ecosystem |
| [MVP](docs/mvp.md) | What gets built first |
| [Identity Verification](docs/identity-verification.md) | One person, one account + ZK proofs |
| [Payments](docs/payments.md) | Money moves without platform holding it |
| [Builder Compensation](docs/builder-compensation.md) | How contributors get paid (generously) |
| [Contracts](docs/contracts.md) | Contract infrastructure for verified humans |
| [Funding Model](docs/funding-model.md) | Purpose trust, no VC, terms decided democratically |
| [Collective Purchasing](docs/collective-purchasing.md) | Bulk pricing for small shops |
| [Community Certification](docs/community-certification.md) | Quality verified by experts |
| [Architecture RFC](docs/architecture-rfc.md) | Technical design (open for debate) |

## Community

- [GitHub Discussions](https://github.com/thecounterweight/platform/discussions) — ask questions, shape the design
- [Discord](https://discord.gg/MAeXwTcxh) — real-time chat
- [Reddit](https://reddit.com/r/TheCounterweight) — broader conversation

## License

AGPL-3.0 — fork it, modify it, run your own instance. But keep it open-source. No proprietary forks.
