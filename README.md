# The Counterweight

A platform where every user is verified through government ID — one account per human. An irrevocable purpose trust prevents sale or mission change (same mechanism as Patagonia, legally binding, independent trustees).

→ [Website](https://thecounterweight.org) · [Contributing](CONTRIBUTING.md) · [Overview](docs/start-here/overview.md)

## What it does

- **Verified reviews.** Every reviewer is verified through government ID. Ranked by Wilson score interval (statistical accuracy). Trust scoring via EigenTrust graph propagation — colluding accounts amplify low-trust signals, not high-trust ones.
- **Discussion.** Threaded boards where every participant has one verified account. E2E encrypted private messaging (MLS protocol).
- **Real-time translation.** Self-hosted neural translation (NLLB-200/SeamlessM4T). No user content leaves infrastructure.
- **Purpose trust.** An irrevocable purpose trust holds a golden share. Independent trustees can veto sale, mission change, or removal of user protections.

## Why verified identity

Verified identity is the dependency for:

- **Reviews** — reviewers have one persistent reputation. Can't create a fresh account after being flagged.
- **Governance** — one person, one vote. Sybil attacks are prevented at the identity layer.
- **Moderation** — banning is meaningful when each person has one account.
- **Contracts** — both parties are identified and legally accountable.

Data handling: raw ID numbers are never stored. The platform keeps an HMAC (irreversible without a secret key stored separately in HSM). Pseudonymous participation is supported. Zero-knowledge proofs allow proving attributes to external services without revealing identity data.

## For builders

Early contributors earn **30-120x their raw hours** in revenue-share units. No equity — higher multipliers compensate for the risk of being early.

| Complexity | Multiplier | Example |
|-----------|-----------|---------|
| Routine | 3x | Docs, minor fixes |
| Standard | 7x | Feature implementation |
| Complex | 12x | Architecture, integrations |
| Highly complex | 20x | Payment systems, identity |
| Specialist | 30x | ZK circuits, crypto protocols |

Bonuses stack additively: Year 1 (+100%), first-10 contributor (+100%), critical path (+50%), first-of-kind (+50%). Maximum ceiling: 120x.

Every contribution is recorded from day one on a public ledger. When revenue flows, it flows back to everyone who built this.

→ [Builder Compensation](docs/joining/builder-compensation.md) · [Open Issues](https://github.com/thecounterweight/platform/issues)

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
| Curious about the idea | [Overview](docs/start-here/overview.md) — the entire system in one page |
| Ready to build | [Contributing](CONTRIBUTING.md) — pick an issue, ship code |
| Interested in the vision | [Vision](docs/start-here/vision.md) — where this goes at scale |
| Evaluating the architecture | [Architecture RFC](docs/building/architecture-rfc.md) — tear it apart |

## Documentation

| Document | Purpose |
|----------|---------|
| **Start Here** | |
| [Overview](docs/start-here/overview.md) | The entire system in one page |
| [Vision](docs/start-here/vision.md) | Full picture + ecosystem |
| [MVP](docs/start-here/mvp.md) | What gets built first |
| **Building** | |
| [Identity Verification](docs/building/identity-verification.md) | One person, one account + ZK proofs |
| [Payments](docs/building/payments.md) | Money moves without platform holding it |
| [Contracts](docs/building/contracts.md) | Contract infrastructure for verified humans |
| [Architecture RFC](docs/building/architecture-rfc.md) | Technical design (open for debate) |
| **Joining** | |
| [Builder Compensation](docs/joining/builder-compensation.md) | How contributors get paid (generously) |
| [Funding Model](docs/joining/funding-model.md) | Purpose trust, no VC, terms decided democratically |
| **Future** | |
| [Collective Purchasing](docs/future/collective-purchasing.md) | Bulk pricing for small shops |
| [Community Certification](docs/future/community-certification.md) | Quality verified by experts |

## Community

- [GitHub Discussions](https://github.com/thecounterweight/platform/discussions) — ask questions, shape the design
- [Discord](https://discord.gg/MAeXwTcxh) — real-time chat
- [Reddit](https://reddit.com/r/TheCounterweight) — broader conversation

## License

AGPL-3.0 — fork it, modify it, run your own instance. But keep it open-source. No proprietary forks.
