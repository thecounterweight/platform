# Builder Compensation

Contributions are tracked on a public ledger. When the platform generates revenue, a share goes to the people who built it.

### Contribution Units

When you contribute work — code, design, legal research, community moderation, translation, documentation, anything — it gets:

1. Reviewed and verified (peer review or team lead confirmation)
2. Assigned a unit value based on complexity, time, and impact
3. Recorded on the public ledger

Your payout share = your units / total units in the pool.

### Formula

`units = hours × complexity × (1 + sum of applicable bonuses)`

Complexity reflects skill level required. Bonuses are additive (not multiplicative) — they stack by adding, not compounding. This prevents early contributors from accumulating disproportionate permanent control of the builder pool.

### Example

- Engineer A designs the auth system architecture. 80 hours, highly complex (20x), Year 1 (+100%), first-10 (+100%), critical path (+50%) = 80 × 20 × (1 + 1 + 1 + 0.5) = 80 × 20 × 3.5 = **5,600 units.**
- Designer B creates the brand and landing page. 40 hours, standard (7x), Year 1 (+100%), first-10 (+100%) = 40 × 7 × (1 + 1 + 1) = 40 × 7 × 3 = **840 units.**
- Lawyer C researches purpose trust structuring and writes legal docs. 30 hours, complex (12x), Year 1 (+100%), first-of-kind (+50%) = 30 × 12 × (1 + 1 + 0.5) = 30 × 12 × 2.5 = **900 units.**
- Community manager D moderates Discord for 3 months. 120 hours, routine (3x), Year 1 (+100%) = 120 × 3 × (1 + 1) = 120 × 3 × 2 = **720 units.**

Total pool: 8,060 units. Engineer A owns 69% of the builder pool. When revenue flows, they get 69% of the builder allocation.

### Revenue Split

When the platform generates revenue (affiliate commissions, seller commissions, sponsored slots, certification fees, talent pool access fees, contract fees, dispute resolution fees, identity layer fees):

**Before revenue is healthy:** The 60/30/10 split applies once revenue can meaningfully support all three pools. In the early stage — when revenue is minimal — operations takes priority. The goal is survival: keep infrastructure running, retain contributors, and build toward the threshold where the full split becomes meaningful. Early revenue goes primarily to operations until the platform is self-sustaining. Builder and investor payouts begin once operations are covered. The exact threshold where the full 60/30/10 activates is a governance decision — proposed as the point where monthly revenue consistently covers operating costs with margin.

**The starting split:** 60% builders + investors | 30% operations | 10% community reinvestment.

This is the initial formula, encoded in the constitutional documents. It activates once monthly revenue consistently covers operating costs. Before that, operations takes priority — the goal is survival first, distribution second.

**Key constraints:**
- Operations takes priority until the platform is self-sustaining
- Investors share from the builders+investors pool (time-bounded, capped at 30% under $20M revenue, 40% at $20M+)
- When investor agreements expire, their share flows back to builders
- The split evolves as the platform grows — governance decides how, within constitutional bounds

**At scale:** The community votes on the split. No pre-set formula can predict what makes sense at a scale we haven't reached. The constitutional constraint is that builders are never zeroed out and investors are always time-bounded — the specific percentages are a governance decision once the platform is mature enough to make it democratically.

**Community reinvestment funds:**
- Subsidized identity verification for low-income users
- Infrastructure expansion to underserved regions
- Reducing fees and costs across the board
- Open-source development of adjacent tools

### Early Contributor Advantage

Early contributors benefit in two ways: (1) time and founding bonuses add +100-200% to their unit calculations, and (2) being early means a larger share of a smaller pool. When there are only 8,000 total units and you hold 5,600, that's 69%. When the pool grows to 500,000 units, your 5,600 is 1.1% — but the revenue has also grown massively.

The additive model ensures the ratio between early and late contributors doing equivalent work stays at ~4x — meaningful advantage without permanent dominance. The complexity scale itself is generous regardless of timing: a specialist joining late still earns 30x raw hours.

### What Counts as Contribution

- Code (features, bug fixes, infrastructure, tests)
- Design (UI/UX, branding, user research)
- Legal work (entity structuring, compliance, contract templates)
- Community organizing (onboarding, support, growing communities during the build phase)
- Content (documentation, tutorials, translations)
- PR reviews and quality assurance
- Strategic work (partnerships, fundraising, outreach)

### Community roles (moderation, evaluation, mediation)

Before revenue, these roles earn units like any other contribution. Moderating discussions, defining certification standards, mediating disputes — it's real work that makes the platform viable. Same formula applies: hours × complexity × bonuses.

Once revenue flows and these become paid positions (from operations budget or per-assessment fees), they stop accruing units and get compensated directly instead. No double compensation — but early volunteers aren't penalized for doing non-code work.

All these roles are elected, accountable, and removable via no-confidence (7-day discussion + 60% vote).

### What Prevents Gaming

**Verifiable artifacts required:**

Every unit claim must correspond to visible output. Code has git commits and PRs. Design has files and mockups. Legal has documents produced. Strategy has written proposals and documented decisions. You cannot claim hours without corresponding artifacts.

**Permanently public, time-bounded challenges:**

All unit assignments are public forever. Any member can challenge an assignment within 90 days of it being recorded. After 90 days, the assignment is final — the community cannot vote to reduce it retroactively.

**Exception:** Fraud (fabricated artifacts, claimed hours not worked, misrepresented complexity) can be challenged at any time with no expiry. This requires evidence of misrepresentation, not just disagreement about whether the work was worth that much.

**Market-rate sanity check:**

Unit claims should pass a gut check: would this work cost roughly this much on the open market? If someone claims 50 hours of highly-complex work for something a freelancer would do in 10 hours at standard complexity, that's a flag. Not a hard rule — a reference point for peer reviewers.


**Peer review is still required** — you can't assign units to yourself. Contribution quality matters, not just hours.

### Unit Assignment Rubric (Starting Proposal)

This is a starting framework. The builder community will ratify or adjust it.

**Complexity levels (the only multiplier — reflects market rate of the skill required):**

| Level | Multiplier | Description |
|-------|-----------|-------------|
| Trivial | 1x | Typo fixes, formatting, simple config changes |
| Routine | 3x | Basic docs, minor bug fixes, small UI tweaks following existing patterns |
| Standard | 7x | Feature implementation following existing patterns, regular design work, moderate bug fixes |
| Complex | 12x | New feature design, integration across systems, legal research, non-trivial security work, architecture decisions |
| Highly complex | 20x | Payment systems, identity verification, complex legal structuring, platform-level architecture that constrains everything downstream |
| Specialist | 30x | ZK circuit design, cryptographic protocol implementation, formal verification, work requiring PhD-level expertise where <100 people globally are qualified |

The complexity multiplier reflects what this work would cost on the open market. Contributors don't get equity or stock options, and take real risk that units may be worth nothing. The complexity scale compensates for that. A specialist joining in Year 4 with no bonuses still gets 30x — above market rate because it accounts for the risk of working without guaranteed compensation.

**Bonuses (additive — stack by adding percentages, not compounding):**

| Factor | Bonus | When it applies |
|--------|-------|-----------------|
| Year 1 contributor | +100% | All work done in the platform's first year of development |
| Year 2 contributor | +50% | All work done in year 2 |
| Year 3 contributor | +25% | All work done in year 3 |
| Year 4+ | +0% | Standard — no time bonus |
| First 10 contributors | +100% | All work by the first 10 people to contribute |
| Contributors 11-20 | +50% | All work by contributors 11-20 |
| Contributors 21-50 | +25% | All work by contributors 21-50 |
| After 50 | +0% | No founding bonus |
| Critical path (blocks others) | +50% | Work that unblocks other contributors |
| First-of-kind (no pattern to follow) | +50% | First implementation of a new system |
| Ongoing maintenance | +50% (floor: complexity 7x minimum) | Monitoring, upgrades, incident response |

The maintenance floor exists because unglamorous work that keeps the platform alive is at least as valuable as building new things.

**How bonuses combine:** Add all applicable bonus percentages, then multiply once.

`units = hours × complexity × (1 + sum of bonuses)`

**Examples:**

- 10 hours of fixing typos (trivial, Year 4, contributor #60): 10 × 1 × 1 = **10 units**
- 10 hours of writing docs (routine, Year 2, contributor #30): 10 × 3 × (1 + 0.5 + 0.25) = 10 × 3 × 1.75 = **52.5 units**
- 10 hours implementing a feature (standard, Year 1, contributor #8): 10 × 7 × (1 + 1 + 1) = 10 × 7 × 3 = **210 units**
- 20 hours of legal research (complex, Year 1, contributor #5, first-of-kind): 20 × 12 × (1 + 1 + 1 + 0.5) = 20 × 12 × 3.5 = **840 units**
- 15 hours of payment system design (highly complex, Year 1, contributor #3, critical path): 15 × 20 × (1 + 1 + 1 + 0.5) = 15 × 20 × 3.5 = **1,050 units**
- 10 hours of ZK circuit design (specialist, Year 1, contributor #2, critical path, first-of-kind): 10 × 30 × (1 + 1 + 1 + 0.5 + 0.5) = 10 × 30 × 4 = **1,200 units**

**Maximum possible multiplier:** 30 × (1 + 1 + 1 + 0.5 + 0.5) = 30 × 4 = **120x raw hours.** This is the absolute ceiling for specialist-grade, Year 1, first-10, critical path, first-of-kind work. In practice, most strong early contributions land at 40-80x. A specialist joining late with no bonuses still gets 30x raw hours — deliberately above market rate.

**Why this generous:** Contributors take real risk — units might be worth nothing. There's no equity, no stock options, no secondary market. The complexity scale prices in the risk premium on top of market rate.

**Why additive and not multiplicative:** Multiplicative compounding (where each bonus multiplies every other) creates exponential concentration. Five early contributors could permanently own 80%+ of the builder pool. Additive bonuses reward early risk (4x advantage over later contributors doing the same work) without creating an unchallengeable aristocracy.

All assignments are public and challengeable for 14 days. If challenged, peer vote decides.

### Before Revenue Exists

In the early days, there's no cash. Your work is recorded from day one. The moment revenue starts flowing, it flows back to everyone who helped build — including those who showed up when it was just an idea and a repo.

Early-stage infrastructure (hosting, APIs, domains) is funded by early investor capital — that's operational runway, separate from the revenue split. Once revenue exists, operations takes its 30% first (at the under-$20M tier). The remaining 60% goes to the builders + investors pool (see sub-split table above). Before any investors come in, builders get 100% of this pool. The platform keeps the lights on before distributing to anyone.

Written into the platform's constitution.

### How the Ledger Works

| Stage | Technology | Why |
|-------|-----------|-----|
| Now (1-20 builders) | YAML file in the git repo | Simple, transparent. Every unit assignment is a PR — reviewable, challengeable. Git history provides immutability. |
| Growth (20-100 builders) | YAML in git + periodic hash anchored to a public blockchain | Same simple workflow, but with cryptographic proof that records existed at a specific time — independent of any single entity. |
| Scale (100+ builders, real revenue flowing) | Dedicated on-chain ledger or regular anchoring | Full trustless guarantee. No single party (not even the repo owner) can alter historical records. |

The blockchain anchoring is infrastructure, not product. Contributors never interact with it. It exists so that no one — not a future maintainer, not a compromised account, not even GitHub going down — can erase or alter your recorded contributions.

### Time and Founding Bonuses

Time and founding bonuses are already factored into the unit formula above (they're part of the additive bonus sum). There is no separate post-hoc multiplier applied to units.

Summary of timing advantage:

| When | Effective bonus on equivalent work |
|------|-----------------------------------|
| Year 1, first-10 contributor | +200% (3x effective) |
| Year 1, contributor #15 | +150% (2.5x effective) |
| Year 2, contributor #60 | +50% (1.5x effective) |
| Year 4+, contributor #60 | +0% (1x — base rate) |

This means a Year 1 first-10 contributor earning base 100 units gets 300 units. A Year 4 post-50 contributor doing the same work gets 100 units. Ratio: 3:1. The timing bonus rewards risk. The complexity scale rewards skill. Both are generous — combined, they make this competitive with startup founding equity.

This is a starting proposal — the builder community will ratify or adjust the multipliers.

## Risk

If the platform never generates revenue, the units are worth nothing. If it works, early builders are compensated well for the risk they took. The time-weighted multiplier ensures early contributors aren't diluted into irrelevance by later joiners.

## Legal Status of Contributors

Contributors are **volunteers contributing to an open-source project** — not employees, contractors, or workers-for-hire.

- No employment relationship exists between contributors and the platform or its founder.
- Units are speculative. They represent a potential future share of revenue that may never exist.
- No one is promised payment, guaranteed compensation, or owed wages.
- Contributors choose what to work on, when to work, and how much to contribute. There is no direction, schedule, or obligation.
- Contributors can stop at any time with no consequence. Units earned remain theirs.

This is the same model used by open-source projects that offer future equity or revenue share to early contributors (e.g., contributor agreements in cooperatively-governed projects). The key distinction from employment: there is no obligation to work, no guaranteed compensation, and no direction of work by an employer.

If the platform later hires paid staff (from operations budget), those are separate employment relationships with proper contracts, labor law compliance, and guaranteed wages. The unit system described above is for voluntary contributors only.
