# Funding Model

## How We Raise Money

Revenue-share agreements. Not equity. Not donations. Investors put money in, get a share of platform revenue for a fixed period, then it ends. The platform stays community-owned.

**Legal entity:** TBD — exploring cooperative models across jurisdictions. Defining the legal structure is one of the first decisions we need legal expertise for.

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
| Investor block | 50% | Everyone putting money into that round | One person, one vote among investors |
| User block | 50% | Verified platform members (non-investors in this round) | One person, one vote among users |

Each block votes internally and produces a single position by **supermajority** (two-thirds). The two positions must align for terms to pass.

**Why blocks, not individual votes?**

If it were a simple majority across everyone, investors could buy a handful of user votes to swing terms in their favor. By aggregating each side into a single block position, you can't game the other side. You have to convince your own block, and then negotiate with the other.

## Deadlock

If the two blocks can't agree, nothing happens. No money moves. Investors don't get returns. The platform doesn't get funded.

There is no fallback. No override. No tiebreaker. Both sides have skin in the game — investors want returns, users want the platform to grow. That mutual need is what breaks deadlocks. If it doesn't, the round simply doesn't happen until terms emerge that both sides accept.

## Appeals

Any party — investor block or user block — can appeal a decision to an independent body of experts (financial, legal, cooperative governance). The appeal body reviews whether the terms are reasonable and fair to both sides. Their recommendation is non-binding but public, creating pressure toward fairness. The vote still has to pass through both blocks — the appeal body can't override democracy, but they can shine a light on bad-faith positions.

## Quorum

Decisions this large need broad participation, not just whoever shows up.

| Round size | Minimum voters required |
|-----------|------------------------|
| First $1M | 10,000 people |
| $1M–$10M | 50,000 people |
| $10M+ | 100,000 people |

These are total voters across both blocks. If quorum isn't met, the vote doesn't count.

## Early Capital (Pre-Quorum)

If someone offers money before the platform has enough users to meet quorum — we take it. The money goes to work immediately (infrastructure, development, operations).

The agreement: revenue share is guaranteed, but the exact terms (percentage, duration, cap) are decided later — when quorum is met and a proper vote can happen. The investor accepts this condition upfront.

This means:
- Early capital isn't blocked by lack of users
- Investors can't dictate terms unilaterally just because they showed up first
- Terms are still decided democratically once the community is large enough
- The investor's risk (undefined terms) is offset by being earliest in — which historically means better terms when the vote happens

If the bicameral vote cannot agree on terms for a pre-quorum investor's deal — i.e., both blocks fail to reach supermajority — the decision is referred to an independent body with expertise in investment, finance, and cooperative economics. Their ruling is binding. This ensures early investors aren't left in limbo indefinitely.

No revenue-share payments begin until terms are decided — either by vote or by the independent body.

## Tiered Rounds

Early investors take more risk (nothing is built, no revenue, no users). Later investors join a proven platform. Terms should reflect that.

- **Round 1** — highest risk, likely higher share percentage and longer duration
- **Later rounds** — lower risk, likely lower share percentage and shorter duration

Each round's terms are voted on independently. Previous rounds don't set precedent — the community and investors negotiate fresh each time.

## What Investors Get

- A share of platform revenue for the agreed duration
- Returns proportional to their investment within the round
- Voting power on financial decisions (stake-weighted within the investor block)
- Full transparency — revenue numbers are public, distributions are auditable

## How Funds Are Used

Raised capital goes toward infrastructure, operations, and development — what the platform needs to run and grow. Builders (engineers, designers, lawyers, etc.) draw from this as needed for:

- Server infrastructure and hosting
- Development tools and services
- Legal and compliance costs
- Operational expenses

Spending is transparent and publicly auditable. The community can see where every dollar goes.

**Payment infrastructure:** Proposed design exists. Country-specific rails for marketplace (UPI, SEPA, ACH), direct bank transfer for investment contracts. The platform records transactions but does not process or hold money. See [Payments](payments.md).

## What Investors Don't Get

- Equity or ownership
- Permanent revenue share
- Governance power over non-financial decisions
- The ability to sell or transfer their revenue-share position (prevents speculation)

## Why This Is Fair

- **For investors**: real returns tied to real revenue. Higher risk rounds get better terms. Democratic say in the terms themselves.
- **For users**: the platform stays community-owned. No permanent extraction. Users have equal blocking power on any deal that's too generous to investors.
- **For the platform**: capital flows in without giving up ownership. Time-bounded obligations mean the platform eventually runs fully self-sustaining.

## Revenue Share Ceiling

Total revenue share across all active rounds can never exceed 40% of platform revenue at any point in time. This is a hard cap — non-negotiable, not subject to vote.

If existing rounds already consume 35% and a new round wants 15%, it doesn't happen. The platform's ability to operate, pay builders, and fund community programs is protected.

## Open Questions

- Should revenue share positions be transferable? (Current stance: no — prevents speculation and secondary markets forming around the platform's revenue)
- What's the minimum and maximum investment per person per round? (Prevents one investor from dominating the investor block)
- If someone is both an investor and a user, which block do they vote in? (Likely: investor block for rounds they're invested in, user block for others)
- How is the independent expert body selected? How do we prevent capture?
- What happens if the platform shuts down? (Likely: investors lose remaining — same as any failed venture. Remaining funds go to wind-down costs, not payouts)
- How are disputes about revenue calculation resolved?

---

*This is a starting point. The community discusses, debates, and shapes the final model together.*
