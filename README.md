# The Counterweight

A platform where every user is verified through government ID — one account per human. Your identity data never reaches our servers. An irrevocable purpose trust prevents sale or mission change.

→ [Website](https://thecounterweight.org) · [Contributing](CONTRIBUTING.md) · [Overview](docs/start-here/overview.md)

## What you do here

Every person is verified. No bots. No fake accounts. You interact only with real people.

You choose how to show up — anonymous (pseudonymous, full privacy) or public profile (where you're from, what you've contributed, certifications, communities). Full access either way.

You read and write public content. You discuss. You organize. Real-time neural translation (self-hosted, no user content leaves infrastructure) means cross-language participation works natively.

## How it makes money

A marketplace. Products aggregated from major platforms via affiliate APIs, plus community sellers listing directly.

You review with proof of purchase or as an expert. Others who bought based on your recommendation rate it — with proof of purchase. We calculate a score based on how helpful you've been. You get paid proportionally. We earn affiliate commissions. No ads. No data selling.

## You govern this

One person, one vote. Policies, features, moderation rules — decided by user vote. Leaders elected and removable. No permanent admins. Constitutional changes require 75% supermajority.

Verification gives you legally enforceable rights encoded in the company's Articles of Association. One vote in governance. Right to stand for elected positions. Legal standing to sue if the company violates its commitments.

An irrevocable purpose trust holds a golden share. Independent trustees can veto any sale, mission change, or removal of user protections. Same structure Patagonia uses.

## Identity architecture

Identity data stays on your device. A KYC provider verifies you and issues a signed credential directly to your phone. Your phone and our server jointly compute a deduplication hash via OPRF (RFC 9497) — the server never sees your ID number, your phone never sees the key. The platform stores only that hash. There is no identity database to breach.

Pseudonymous participation supported. Attributes (age bracket, district) stay on-device and are verified statelessly when needed. Zero-knowledge proofs allow proving attributes to external services without revealing identity data — the platform never knows where you authenticate.

## What becomes possible on top

Once millions are verified, the identity layer becomes open infrastructure. Others build on it:

- P2P lending with verified borrowers
- Freelance marketplaces with portable reputation
- Local classifieds with accountable sellers
- Co-op governance with real one-person-one-vote
- Citizen journalism with verified sources
- Contracts between identified, accountable parties

Community-serving projects use the identity layer free. Revenue-generating services pay a proportional fee (ceiling is a constitutional bound).

## For builders

Open-source. Every contribution tracked on a public ledger. Revenue distributes proportional to what you built. Complexity is accounted for — specialist work earns more per hour than routine fixes. Early contributors get higher multipliers to compensate for risk.

→ [Builder Compensation](docs/joining/builder-compensation.md) · [Open Issues](https://github.com/thecounterweight/platform/issues)

## What ships first

```
Milestone 1:  Discussion boards + phone verification + real-time translation + E2E encrypted chat
Milestone 2:  Government ID verification + device-local credentials + OPRF deduplication
Milestone 3:  Marketplace + trusted reviews + affiliate revenue
Phase 2:      Certification, talent pool, contracts, collective purchasing, ZK proofs for ecosystem
```

Revenue starts at Milestone 3 (affiliate commissions). Each phase funds the next.

## Start here

| You are... | Start with |
|------------|-----------|
| Curious about the idea | [Overview](docs/start-here/overview.md) — the entire system in one page |
| Ready to build | [Contributing](CONTRIBUTING.md) — pick an issue, ship code |
| Interested in the vision | [Vision](docs/start-here/vision.md) — where this goes at scale |
| Evaluating the architecture | [Architecture RFC](docs/building/architecture-rfc.md) — technical design, open for critique |

## Documentation

| Document | Purpose |
|----------|---------|
| **Start Here** | |
| [Overview](docs/start-here/overview.md) | The entire system in one page |
| [Vision](docs/start-here/vision.md) | Full picture + ecosystem |
| [MVP](docs/start-here/mvp.md) | What gets built first |
| **Building** | |
| [Identity Verification](docs/building/identity-verification.md) | Device-local credentials + OPRF + ZK proofs |
| [Payments](docs/building/payments.md) | Money moves without platform holding it |
| [Contracts](docs/building/contracts.md) | Contract infrastructure for verified humans |
| [Architecture RFC](docs/building/architecture-rfc.md) | Technical design (open for debate) |
| **Joining** | |
| [Builder Compensation](docs/joining/builder-compensation.md) | How contributors get paid |
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
