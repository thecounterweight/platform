# Builder Compensation

Every contribution is an investment of your skills. You will be compensated.

## How It Works

Every contribution is tracked on a public ledger. When the platform generates revenue, a significant share goes directly to the people who built it.

### Contribution Units

When you contribute work — code, design, legal research, community moderation, translation, documentation, anything — it gets:

1. Reviewed and verified (peer review or team lead confirmation)
2. Assigned a unit value based on complexity, time, and impact
3. Recorded on the public ledger

Your payout share = your units / total units in the pool.

### Example

- Engineer A designs the auth system architecture. 80 hours, highly complex (5x) + critical path (1.5x) = 80 × 5 × 1.5 = **600 units.**
- Designer B creates the brand and landing page. 40 hours, standard (3x) = 40 × 3 = **120 units.**
- Lawyer C researches Indian cooperative law and writes legal docs. 30 hours, complex (4x) + first-of-kind (1.5x) = 30 × 4 × 1.5 = **180 units.**
- Community manager D moderates Discord for 3 months. 120 hours, routine (2x) = 120 × 2 = **240 units.**

Total pool: 1,140 units. Engineer A owns 53% of the builder pool. When revenue flows, they get 53% of the builder allocation.

### Revenue Split

When the platform generates revenue (transaction fees, certification fees, talent pool access fees, affiliate commissions):

**The split changes as the platform grows:**

| Annual revenue | Builders + Investors | Operations | Community reinvestment |
|---------------|---------------------|------------|----------------------|
| Under $5M | 70% | 20% | 10% (reserve) |
| $5M - $50M | 60% | 20% | 20% |
| $50M - $500M | 45% | 20% | 35% |
| $500M+ | Community votes on the split at this threshold |

At early stages, the majority flows to the people who built the platform and the investors who funded it — they took real risk. As the platform matures, more flows to community reinvestment: subsidizing verification fees, grants for community businesses, infrastructure in underserved regions, reducing costs for users.

Beyond $500M, the community is large enough and mature enough to decide the split democratically. No pre-set formula locks in something that might not make sense at a scale we can't predict today.

**Within the builders + investors share:**

| Phase | Builders | Investors |
|-------|----------|-----------|
| Pre-investor (early revenue) | 100% of the pool | 0% |
| Active investor deal (e.g., 30% negotiated) | 70% of the pool | 30% of the pool |
| Active investor deal (max cap) | 60% of the pool | 40% of the pool |
| After investor agreements expire | 100% of the pool | 0% |

Builders get paid first — from the earliest revenue. When investors come in (via the bicameral voting process described in the funding model), they share from the same pool. Investor share is time-bounded — when their agreements expire, it all flows back to builders.

The investor share is never more than 40% of the builders+investors pool. That's the hard cap, non-negotiable.

**Community reinvestment funds:**
- Subsidized identity verification for low-income users
- Grants for community-backed businesses
- Infrastructure expansion to underserved regions
- Reducing fees and costs across the board
- Open-source development of adjacent tools

### Early Contributor Advantage

The earlier you contribute, the more your units are worth relative to the total pool. When there are only 1,000 total units and you hold 200, that's 20%. When the pool grows to 100,000 units, your 200 is 0.2% — but the revenue has also grown massively.

Early risk = early reward.

### What Counts as Contribution

- Code (features, bug fixes, infrastructure, tests)
- Design (UI/UX, branding, user research)
- Legal work (entity structuring, compliance, contract templates)
- Community organizing (onboarding, support, growing communities during the build phase)
- Content (documentation, tutorials, translations)
- PR reviews and quality assurance
- Strategic work (partnerships, fundraising, outreach)

### What Doesn't Earn Builder Units

Some roles create value but aren't platform-building work. They follow a different path:

**Moderators** — Volunteer early. Build reputation and trust through demonstrated good work. Once platform revenue is healthy, the community elects paid moderators from the operations budget (20%). No shortcuts — you earn the role, the community decides who deserves it.

**Evaluators/Certifiers** — Volunteer early to establish credibility and define certification criteria for their field. Once certification fees flow, they're paid per assessment. Early evaluators built the standards everyone else follows.

**Dispute arbitrators** — Same pattern. Volunteer early, demonstrate fairness and judgement. Paid per case from operations budget once revenue supports it.

All these roles are elected, accountable, and removable any day by simple majority. The incentive: volunteer now → build reputation → community elects you → paid position once revenue flows.

### What Prevents Gaming

**Verifiable artifacts required:**

Every unit claim must correspond to visible output. Code has git commits and PRs. Design has files and mockups. Legal has documents produced. Strategy has written proposals and documented decisions. You cannot claim hours without corresponding artifacts.

**Permanently public, retroactively challengeable:**

All unit assignments are public forever. The standard 14-day challenge window applies to current members, but new builders who join later can challenge historical assignments at any time during their first year. If the community later determines early assignments were inflated, they vote to adjust. Nothing is ever permanently locked in.

**Market-rate sanity check:**

Unit claims should pass a gut check: would this work cost roughly this much on the open market? If someone claims 50 hours of highly-complex work for something a freelancer would do in 10 hours at standard complexity, that's a flag. Not a hard rule — a reference point for peer reviewers.

**Time-weighted multiplier reduces the incentive:**

The 3x Year 1 multiplier already rewards early builders disproportionately. The system accounts for early risk = early reward by design. This reduces the incentive to inflate units because being early is already structurally advantageous.

**Peer review is still required** — you can't assign units to yourself. Contribution quality matters, not just hours.

### Unit Assignment Rubric (Starting Proposal)

This is a starting framework. The builder community will ratify or adjust it.

**Complexity levels:**

| Level | Multiplier | Description |
|-------|-----------|-------------|
| Trivial | 1x | Typo fixes, formatting, simple config changes |
| Routine | 2x | Basic docs, minor bug fixes, small UI tweaks following existing patterns |
| Standard | 3x | Feature implementation following existing patterns, regular design work, moderate bug fixes |
| Complex | 4x | New feature design, integration across systems, legal research, non-trivial security work |
| Highly complex | 5x | Payment systems, identity verification, complex legal structuring, cryptographic design |
| Architectural | 6x | System-level design, defining interfaces between major components, data model design, infrastructure decisions |
| Foundational | 7x | Platform-level architecture and technical vision, economic model design, decisions that constrain everything downstream and are expensive to reverse |

**Additional multipliers (stack with complexity):**

| Factor | Multiplier |
|--------|-----------|
| Critical path (blocks others without it) | 1.5x |
| First-of-kind (no existing pattern to follow) | 1.5x |

All multipliers stack. Examples:

- 10 hours of fixing typos and formatting = 10 × 1 = **10 units**
- 10 hours of writing documentation (routine) = 10 × 2 = **20 units**
- 10 hours of implementing a feature following existing patterns (standard) = 10 × 3 = **30 units**
- 20 hours of legal research for a new jurisdiction (complex + first-of-kind) = 20 × 4 × 1.5 = **120 units**
- 15 hours of payment system design (highly complex + critical path) = 15 × 5 × 1.5 = **112.5 units**
- 20 hours of defining the service communication layer (architectural + critical path) = 20 × 6 × 1.5 = **180 units**
- 20 hours of platform architecture (foundational + critical path + first-of-kind) = 20 × 7 × 1.5 × 1.5 = **315 units**

The key distinction between levels 4 and 5: level 4 requires deep expertise. Level 5 shapes what everyone else builds on top of — get it wrong and everything downstream is wrong.

All assignments are public and challengeable for 14 days. If challenged, peer vote decides.

### Before Revenue Exists

In the early days, there's no cash. Your work is recorded from day one. The moment revenue starts flowing, it flows back to everyone who helped build — including those who showed up when it was just an idea and a repo.

Early-stage infrastructure (hosting, APIs, domains) is funded by early investor capital — that's operational runway, separate from the revenue split. Once revenue exists, operations takes its 20% first. Builder payouts come from the remaining 70% pool. The platform keeps the lights on before distributing to anyone.

This isn't a promise that can be broken later. It's structural — written into the platform's constitution and enforced by the open-source code itself.

### How the Ledger Works

| Stage | Technology | Why |
|-------|-----------|-----|
| Now (1-20 builders) | YAML file in the git repo | Simple, transparent. Every unit assignment is a PR — reviewable, challengeable. Git history provides immutability. |
| Growth (20-100 builders) | YAML in git + periodic hash anchored to a public blockchain | Same simple workflow, but with cryptographic proof that records existed at a specific time — independent of any single entity. |
| Scale (100+ builders, real revenue flowing) | Dedicated on-chain ledger or regular anchoring | Full trustless guarantee. No single party (not even the repo owner) can alter historical records. |

The blockchain anchoring is infrastructure, not product. Contributors never interact with it. It exists so that no one — not a future maintainer, not a compromised account, not even GitHub going down — can erase or alter your recorded contributions.

### Time-Weighted Multiplier

Units earned earlier are worth more — because early builders took more risk.

| When earned | Multiplier on units |
|-------------|-------------------|
| Year 1 | 3x |
| Year 2 | 2x |
| Year 3 | 1.5x |
| Year 4+ | 1x |

So if you earn 100 units in year 1, they count as 300 in the pool. Someone earning 100 units in year 4 holds exactly 100. This protects early builders from being diluted into irrelevance as the pool grows.

This is a starting proposal — the builder community will ratify or adjust the multipliers.

## The Honest Truth

This is a bet. If the platform never generates revenue, the units are worth nothing. That's the risk of being early.

But if it works — early builders are compensated well for the risk they took. The time-weighted multiplier ensures that the people who showed up when nothing existed aren't drowned out by those who show up once it's safe. Early risk earns a permanent structural advantage.
