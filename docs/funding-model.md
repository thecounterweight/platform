# Funding Model

## How We Raise Money

Revenue-share agreements. Not equity. Not donations. Investors put money in, get a share of platform revenue for a fixed period, then it ends. The platform stays community-owned.

**Legal entity:** A founder-owned company (initially LLC or Private Limited) with an irrevocable purpose trust holding a golden share. The trust structurally prevents sale, mission abandonment, or removal of user protections — regardless of who runs the company or who invests.

**Why not user-owned (member LLC / cooperative):**

We explored user-owned models extensively (see [Legal Structure Research](../research/legal-structure-research.md)). They fail at internet scale:
- No precedent exists for a million-member LLC — untested legal territory
- Tax filing complexity: US LLCs issue K-1s to every member annually
- Investor compatibility: near-zero (who puts capital into an entity governed by a million strangers?)
- Operational paralysis: even simple decisions require member votes or delegation infrastructure
- FEMA ambiguity: Indian members receiving distributions from a US LLC may face capital account restrictions

The trust model (Patagonia, Signal, Mozilla) provides equivalent structural protection without these problems.

**How the structure works:**

1. **Operating company** — Founded and owned by the founder. Normal corporate operations. Can raise capital, hire, sign contracts, hold bank accounts.
2. **Irrevocable purpose trust** — Holds a golden share with veto power. The trust's purposes are defined at creation and cannot be changed by the founder, the company, or any future owner.
3. **User-elected advisory board** — Elected by verified users. The trust is bound to act on the board's recommendation when exercising its veto — this is not advisory in the "we'll consider it" sense. If the board says "veto this sale," the trust vetoes. If the board says "this doesn't violate the mission," the trust stands down. The trust deed encodes this obligation.

**Who are the trustees:**

The trust must be independent of the founder to have any credibility. Trustee selection:
- **At formation:** 3 trustees — one institutional (law firm or university with relevant expertise), one from the first user-elected advisory board, one independent professional (e.g., retired judge, chartered accountant, or established non-profit director). The founder is explicitly excluded from trusteeship.
- **Ongoing:** Trustees serve 5-year terms. Replacements are nominated by the remaining trustees and confirmed by the user-elected advisory board (majority vote). The founder cannot nominate or veto trustees.
- **Removal:** A trustee can be removed for breach of duty by the other trustees unanimously, or by 75% supermajority of verified users.

This is the most important structural decision — if the founder picks pliant trustees, the whole thing is theater. Institutional trustees (a law firm with reputational skin in the game, a university) provide independence that individuals alone cannot.

**What the trust's golden share vetoes (irrevocable):**
- Sale or acquisition of the company
- IPO or public listing
- Removal of constitutional user protections (data sovereignty, no-ads, transparency, governance rights)
- Mission change away from community-serving platform
- Dissolution without supermajority user approval

**What the constitutional documents guarantee users (enforceable — in Articles/OA, not just ToS):**
- One person, one vote in governance elections
- Revenue-share rights (as defined in the constitution)
- Right to stand for elected positions
- Data sovereignty (export, delete, no sale to third parties)
- Transparency of all financial and governance decisions
- Right to sue if the company violates constitutional clauses (legal standing via Articles, not ToS)

**What the founder retains:**
- Operational authority (product, hiring, day-to-day decisions)
- Ability to raise capital normally (investors buy equity in the operating company)
- Compensation as a contributor (per the builder unit system — same formula as everyone else, no special terms)
- Subject to the constitutional constraints — cannot override the trust

**Founder compensation constraint:**

The founder earns builder units like any other contributor — same complexity scale, same additive bonuses. There is no separate founder salary, equity package, or special compensation mechanism. If the founder also performs operational work (CEO-equivalent), that work earns units at the appropriate complexity level through the same peer-review process as everyone else.

The founder cannot unilaterally set their own compensation. Their unit claims are subject to the same public ledger, 14-day challenge window, and peer review as all contributors. The operations budget (which covers salaries once the platform hires staff) is governed by the constitutional formula and elected leadership approval for expenses above threshold.

This is the difference between "founder-owned" and "founder-enriched." The founder has operational control to build the thing effectively. They do not have a special economic lane.

**Anti-capture protections:**
- Trust is irrevocable — founder cannot dissolve it or change its purposes
- Golden share cannot be sold, transferred, or diluted
- Founder is excluded from trusteeship
- If the founder dies, goes bankrupt, or wants to sell — the trust vetoes any mission-violating transfer
- Constitutional amendments require 75% supermajority of verified users
- Unamendable clauses mirror Principles 0, 4, 9
- Trustees are independent (institutional + user-elected + professional)
- Advisory board recommendation binds the trust (not merely consultative)

**What happens if the founder leaves:**
- Company continues operating under whoever the board/members elect
- Trust continues protecting the mission regardless
- Golden share is held by the trust, not the founder personally
- No disruption — the trust is independent of any individual

**Federation model (designed-in, executed later):**

Start with one entity. Add local entities only when a specific trigger forces it.

| Trigger | Action |
|---------|--------|
| Indian payment processor requires local entity | Register Indian subsidiary, linked to parent by agreement |
| Tax withholding on distributions exceeds 15% for a jurisdiction | Add local entity to reduce withholding |
| Local law requires platform registration (e.g., EU Digital Services Act) | Register local entity to comply |
| Supermajority of users votes to restructure | Restructure as voted |

**How federation works when activated:**
- Each local entity handles jurisdiction-specific compliance (payments, tax, regulatory)
- All entities are linked by inter-entity agreements ensuring: shared governance rules, revenue distribution per the global formula
- The root entity remains the governance parent unless a supermajority votes to restructure
- No single local entity can unilaterally change terms or break from the network

The principle: the entity exists to build and operate the platform. The trust exists to prevent the entity from betraying its users. Users govern through elected positions and constitutional rights — not through direct ownership of a legal entity they'd never meaningfully control anyway.

## Revenue Authority — Who Decides Where Money Goes

The revenue split formula is pre-defined in the Operating Agreement. Day-to-day spending decisions within that formula don't require member votes.

**What's automatic (no vote needed):**
- Revenue distribution per the formula (60/30/10 → 55/20/25 → 35/20/45 as revenue grows)
- Operational spending within the "operations" pool (hosting, OTP, tools, compliance)
- Builder payouts proportional to tracked units from the "builders" pool

**What requires elected leadership approval:**
- Any single expense above a threshold (proposed: $5,000 initially, adjusted by vote as revenue grows)
- Hiring or contracting decisions
- New partnership agreements
- Vendor selection for major services

**What requires member vote:**
- Changes to the revenue split formula (75% supermajority)
- Changes to the Operating Agreement (75% supermajority)
- Spending from the "community reinvestment" pool (simple majority)
- Capital allocation decisions above $50,000

**Founder authority (pre-first-election):**
Until the membership exceeds 1,000 verified members, the founding member has operational authority within the defined formula. This means:
- Can make operational spending decisions within the operations pool
- Can approve builder payouts per the unit system
- Cannot change the formula, the OA, or constitutional provisions
- Must publish monthly transparency reports (what was spent, where, why)

Once membership exceeds 1,000, an elected board takes over operational authority. The founder becomes a regular member (or stands for election like anyone else). The transition is automatic — encoded in the OA, not discretionary.

**Transparency (always, regardless of who has authority):**
- All spending is published monthly
- Revenue numbers are public and real-time
- Any member can audit the full financial history at any time
- No spending is secret, no decisions are private

## The Deal Structure

Every funding round has three variables:
1. **Revenue share percentage** — what portion of revenue goes to investors
2. **Duration** — how long the share lasts
3. **Cap** — maximum total return, after which the share stops regardless of time remaining. The cap is negotiated per deal — higher risk justifies a higher cap. There is no universal number; the bicameral vote decides what's fair for each investment.

These are not set by founders or a board. They're voted on.

## Who Decides the Terms

Two blocks. Equal weight. Both must agree.

| Block | Weight | Who's in it | Internal voting |
|-------|--------|-------------|-----------------|
| Investor block | 50% | Everyone putting money into that round | Stake-weighted voting among investors |
| User block | 50% | Verified platform members (non-investors in this round) | One person, one vote among users |

Each block votes internally and produces a single position by **supermajority** (two-thirds). The two positions must align for terms to pass.

**Why blocks, not individual votes?**

If it were a simple majority across everyone, investors could buy a handful of user votes to swing terms in their favor. By aggregating each side into a single block position, you can't game the other side. You have to convince your own block, and then negotiate with the other.

## Deadlock

If the two blocks can't agree, nothing happens. No money moves. Investors don't get returns. The platform doesn't get funded.

There is no fallback. No override. No tiebreaker. Both sides have skin in the game — investors want returns, users want the platform to grow. That mutual need is what breaks deadlocks. If it doesn't, the round simply doesn't happen until terms emerge that both sides accept.

## Appeals and the Independent Body

Any party can invoke an independent professional body when negotiations deadlock or when one side believes terms are unfair.

**What qualifies as an independent body:**

These already exist in every country. No need to invent one:

- Chartered accountants / CPAs (ICAI in India, ACCA in UK, AICPA in US)
- Registered valuers (IBBI-registered in India)
- Mediation centers (Indian Council of Arbitration mediation wing, SIAC mediation, ICC mediation, CEDR)
- Institute of Company Secretaries (ICSI)
- Court-accredited mediators
- SEBI-registered independent advisors (India)
- University commerce/law departments (as neutral academic assessors)

**Their role:**
1. Review contribution records, time held, market rates, and risk taken
2. Produce a decision based on statistical and financial analysis
3. Decision is public and detailed (reasoning visible to all)

**When invoked during active governance (post-quorum):** The body's output is a recommendation. Both parties vote on it (stake-weighted within their group). If both sides reject it, they negotiate further or invoke a different body.

**When invoked during deadlock on pre-quorum terms:** The body's decision is binding. Early investors cannot be left in limbo because two sides can't agree. The independent body breaks the deadlock with a defensible, evidence-based determination that both parties must accept.

**How the body is selected:** Either party can propose a body. Both must agree on which one. If they can't agree on the body either, each side picks one and the two bodies collaborate on a joint recommendation.

## Quorum

Decisions this large need broad participation, not just whoever shows up.

| Round size | Minimum voters required |
|-----------|------------------------|
| First $1M | 10,000 people |
| $1M–$10M | 50,000 people |
| $10M+ | 100,000 people |

These are total voters across both blocks. If quorum isn't met, the vote doesn't count.

**Transition trigger:** Once the platform has enough verified members to meet the quorum for a given round size, new funding rounds of that size must go through the bicameral voting process. The pre-quorum regime ends automatically when the membership threshold is met.

## Early Capital (Pre-Entity)

No legal entity exists yet. Contributions at this stage are structured as **risk capital** — not loans, not donations. Contributors knowingly put money toward building the platform with the understanding that it may fail entirely.

**How it works:**

1. Contributor pays via the platform's contribute page (UPI, card, netbanking via Razorpay).
2. Payment is verified automatically and recorded in real-time.
3. By contributing, they agree to the contribution agreement terms: if the platform generates revenue, the contributor receives returns per governance-decided terms. If the platform fails, the contribution is lost.

**The contribution agreement guarantees:**
- The contribution is recorded permanently and publicly
- When the legal entity forms, it recognizes this contribution under its revenue-share framework
- Terms (revenue share %, duration, cap) will be decided by the governance process described below, within constitutional bounds
- Earlier contributors receive a time-held advantage over later contributors

**What this is not:**
- Not a loan — there is no repayment obligation, no interest, no maturity date
- Not a donation — contributors have a conditional claim on future revenue
- Not equity — no ownership of anything is transferred

**Public record:**

All contributions are visible in real-time on the platform's contribute page — contributor name (or pseudonym), amount (unless hidden by contributor's choice), and timestamp. Total raised is always public. Payment processing handled by Razorpay — every transaction has an auditable trail.

Anyone can audit the full history at any time. No trust required — verify it yourself.

**Risk disclosure:**
- This is risk capital. If the platform fails, the contribution is lost entirely. The founder has no personal repayment obligation.
- No entity exists yet to guarantee anything
- Returns are conditional on the platform generating revenue
- Specific terms have not been finalized and will be decided by democratic governance within constitutional bounds
- Contributors should only contribute what they can afford to lose entirely

## Early Capital (Pre-Quorum, Post-Entity)

Once the legal entity is formed, it assumes all pre-entity obligations. New contributions go directly to the entity. Pre-entity contributions convert to the entity's revenue-share framework.

Anyone can contribute any amount, at any time. Every contribution is recorded permanently — amount, timestamp, contributor identity. The money goes to work immediately (infrastructure, development, operations).

**What contributors know upfront (constitutional bounds, non-negotiable):**
- Investor share will never exceed 30% of total revenue under $20M, or 40% of total revenue at $20M+
- All agreements are time-bounded (max duration set before governance activates)
- Returns are proportional to contribution
- Time-held factor gives structural advantage to earlier contributors

**What gets decided later (once governance activates):**
- Exact revenue share percentage within the 40% cap
- Exact duration
- Payout schedule

**How terms get decided:**

Contributors vote on their own terms — proportional to stake. Builders vote on builder terms. Both share the same pool, so it's a negotiation between two parties with opposing interests. Neither side can unilaterally set terms that gut the other.

**Constitutional bounds prevent self-dealing:** Contributors can't vote themselves 100% of revenue because the 40% cap exists before anyone invests. They vote on specifics within bounds, not on whether bounds exist.

**If deadlocked** — either side can invoke an independent professional body (see above). The body analyzes contribution records, market rates, time held, and risk taken, and produces a binding decision backed by statistical and financial analysis. This isn't a recommendation — it's a final, defensible determination that both parties must accept. This protects early investors from being left in limbo indefinitely.

**Accumulation vs payout:** Investor share accumulates from the moment revenue starts flowing. Actual payouts begin once the platform can sustain its operations — ensuring the platform doesn't pay out money it needs to survive. The accumulated share is owed and paid out once operations are stable.

## Tiered Rounds

Early investors take more risk (nothing is built, no revenue, no users). Later investors join a proven platform. Terms should reflect that.

- **Round 1** — highest risk, likely higher share percentage and longer duration
- **Later rounds** — lower risk, likely lower share percentage and shorter duration

Each round's terms are voted on independently. Previous rounds don't set precedent — the community and investors negotiate fresh each time.

## What Investors Get

- A share of platform revenue for the agreed duration
- Returns proportional to their investment within the round
- Stake-weighted voting on investor terms (share %, duration, payout schedule) and capital allocation (which businesses to fund)
- Full transparency — revenue numbers are public, distributions are auditable

Investors do not get voting power over platform operations, infrastructure, builder compensation, or feature decisions. Those are decided by the users and builders who run the platform.

## How Funds Are Used

Raised capital goes toward infrastructure, operations, and development — what the platform needs to run and grow. Builders (engineers, designers, lawyers, etc.) draw from this as needed for:

- Server infrastructure and hosting
- Development tools and services
- Legal and compliance costs
- Operational expenses

Spending is transparent and publicly auditable. The community can see where every dollar goes.

**Important distinction:** Investor capital is operational runway — it funds infrastructure and development until the platform is self-sustaining. It is not subject to the revenue split. The graduated split (see [Builder Compensation](builder-compensation.md)) applies only to platform revenue once it exists. Early investor money keeps the lights on so revenue can start flowing in the first place.

**Early-stage priority:** The 60/30/10 revenue split activates once revenue can meaningfully support all three pools. Until then, early revenue goes primarily to operations — keeping infrastructure running and retaining contributors. Builder and investor payouts begin once operations are sustainably covered. The threshold where the full split activates is a governance decision, proposed as the point where monthly revenue consistently covers operating costs with margin.

**Payment infrastructure:** Proposed design exists. Country-specific rails for marketplace (UPI, SEPA, ACH), direct bank transfer for investment contracts. The platform records transactions but does not process or hold money. See [Payments](payments.md).

## What Investors Don't Get

- Equity or ownership
- Permanent revenue share
- Governance power over platform operations, infrastructure, builder compensation, or feature decisions
- The ability to sell or transfer their platform revenue-share position (prevents speculation on the platform's revenue stream)

**Note:** This applies to platform investors (people investing in the platform itself). Community business contracts (people backing a bakery or startup via direct contracts) are separate — those positions are governed by the individual contract terms between the parties. See [Contracts](contracts.md).

## Why This Structure

- **For investors**: returns tied to real revenue. Higher risk rounds get better terms. Say in the terms themselves.
- **For users**: platform stays community-owned. Users have equal blocking power on any deal.
- **For the platform**: capital flows in without giving up ownership. Time-bounded obligations mean it eventually runs self-sustaining.

## Revenue Share Ceiling

Investor share is capped at two levels:

| Revenue tier | Max investor share (of total revenue) |
|---|---|
| Under $20M | 30% |
| $20M+ | 40% |

These are hard caps — non-negotiable, not subject to vote.

The increase from 30% to 40% at scale accommodates growth-stage investors who contribute larger capital at lower risk. Early investors' share doesn't grow — the pool expands to include new participants. Per-investor returns are naturally diluted as more contributors join.

If existing rounds already consume the cap and a new round wants more, it doesn't happen until cap space frees up. Since all deals are time-bounded, cap space opens naturally as earlier rounds expire. And hitting the cap implies significant revenue already exists — the platform should be self-sustaining from operations at that point, not dependent on new investment. The cap protects the platform's ability to pay builders and fund community programs.

## Legal Compliance

The platform facilitates only what is legal in each jurisdiction. Revenue-share agreements, investment rounds, and fund usage activate per country only after jurisdiction-specific legal review.

The platform does not:
- Act as a broker, dealer, or investment advisor
- Pool capital or hold investor funds
- Guarantee returns or promise specific yields
- Solicit investment from the general public

All agreements are between named, verified individuals. The platform provides contract infrastructure and transparent record-keeping. It is not a party to any investment agreement.

If local law classifies any activity on the platform as a regulated financial service, that activity is paused in that jurisdiction until compliance is achieved or the feature is restructured.

## Open Questions

- Should revenue share positions be transferable? (Current stance: no — prevents speculation and secondary markets forming around the platform's revenue)
- What's the minimum and maximum investment per person per round? (Prevents one investor from dominating the investor block)
- If someone is both an investor and a user, which block do they vote in? (Likely: investor block for rounds they're invested in, user block for others)
- How do we prevent capture of the independent body selection process?
- What happens if the platform shuts down? (Likely: investors lose remaining — same as any failed venture. Remaining funds go to wind-down costs, not payouts)
- How are disputes about revenue calculation resolved?

---

*Starting point. Open to discussion and revision.*
