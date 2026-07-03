# Session Progress — July 2-3, 2026

This file captures all work done across sessions. If we lose context, resume from here.

## What Was Accomplished

### New Documents Created
1. **docs/identity-verification.md** — Three-layer design (gov ID + face scan + OTP), privacy guarantees, anonymity vs verification, cost model, account recovery, age thresholds, three access tiers (verified/vouched/unverified)
2. **docs/payments.md** — Split approach (country-specific rails for marketplace, direct bank transfer for investments), platform never holds money
3. **docs/overview.md** — One-page system overview with diagram, revenue model, tech stack, "Why This Scope" section (load-bearing vs amplifiers)
4. **docs/collective-purchasing.md** — Standalone doc (moved from investment model), platform coordinates but never holds money
5. **docs/assets/system-diagram.svg** — Visual system diagram (4 layers: platform, revenue, distribution, external infrastructure)

### Major Document Rewrites
6. **docs/investment-model.md** — Contract facilitation layer, "Two Paths" (pooled + direct deals), securities legal disclaimer, cross-border investment rules (registered entities only, domestic-first), 3-layer dispute resolution, secondary market honesty
7. **docs/builder-compensation.md** — 7-level complexity rubric (1x-7x), anti-gaming guardrails, maintenance floor (3x min), graduated revenue split (60%/30%/10% under $20M), tiered investor caps, operations can draw from community reinvestment
8. **docs/mvp.md** — Marketplace rewritten (aggregated products via affiliate APIs + community sellers), reviewer commission model with 4 guardrails, default sort order (aggregate score), API dependency risk noted, moderation two-flag system, talent pool access model (anonymized profiles)
9. **docs/vision.md** — "Why This Scope" (load-bearing vs amplifiers), governance updated (60% + 7-day + quorum), collective purchasing framing fixed
10. **docs/funding-model.md** — Legal entity defined (cooperative), open contribution model (anyone, any amount, recorded), constitutional bounds, independent professional body defined (ICAI, arbitration centers, valuers), tiered investor caps, pre-quorum transition trigger
11. **PRINCIPLES.md** — Governance rewritten (60% supermajority, 7-day cooling, 30% quorum, constituency-scoped, limited powers during vote, 2-year automatic confidence vote), dispute resolution clarified, cross-border investment acknowledged as restricted, 75% + 30% quorum for amendments
12. **CONTRIBUTING.md** — Concrete immediate tasks (backend, frontend, marketplace, design, legal), tech stack specified
13. **README.md** — "Publicly owned infrastructure" tagline, governance updated

### Site Updates
14. **site/src/components/Nav.tsx** — Added Identity, Payments, Start Here, and overview to nav dropdown
15. **site/src/lib/docs.ts** — Added all new docs to DOC_META
16. **site/src/app/page.tsx** — Marketplace copy updated, governance updated, tiered investor cap

### GitHub Issues Created (#7-15)
- #7: Set up project scaffold — Next.js + PostgreSQL + auth skeleton
- #8: Discussion boards — CRUD for boards, posts, comments, votes
- #9: Amazon Product Advertising API integration
- #10: Review system — parameter-based ratings + trust score + sort order
- #11: Identity verification — DigiLocker/Aadhaar sandbox integration
- #12: UI mockups — discussion boards and marketplace
- #13: User journey flow diagrams
- #14: Legal research: affiliate commission disclosure requirements
- #15: Flipkart Affiliate API integration

### GitHub Issues Updated (#3-6)
- #3: Database design — reframed for modular monolith, added complexity rubric
- #4: Translation — clarified not MVP, added rubric
- #5: Legal entity — updated for contract facilitation framing
- #6: Moderation — updated with identity verification impact

### GitHub Issues Closed
- #1: Identity verification — resolved by doc + issue #11
- #2: Payment infrastructure — resolved by payments doc

## Key Decisions Made

1. **Investment model:** Contract facilitation layer, not fund management. Two paths (pooled + direct deals). Pooled requires legal review per jurisdiction before activation.
2. **Payments:** Platform never holds money. Country-specific rails for small transactions, direct bank transfer for investments.
3. **Identity:** Gov ID API + face scan (high-stakes) + OTP. User pays verification fee. Privacy: hash only, no raw data stored. Three tiers: verified (full access), vouched (limited), unverified (browse only).
4. **Marketplace strategy:** Aggregated products from Amazon/Flipkart via affiliate APIs. Revenue from day one. Community sellers coexist (not replace). API risk acknowledged with anti-monopoly recourse.
5. **Reviewer commissions:** Share of affiliate revenue. Guardrails: parameter-based reviews, commission on clicks not sentiment, post-purchase feedback, trust score.
6. **Builder unit gaming:** Verifiable artifacts required, permanently public + retroactively challengeable, market-rate sanity check, time multiplier reduces incentive. Maintenance floor at 3x minimum.
7. **Blockchain:** Not as product/speculation. Yes as infrastructure for contribution ledger immutability at scale.
8. **Age threshold:** No platform minimum. 18+ for contracts (legal necessity). Comply with local law where it applies.
9. **Scope justification:** Load-bearing pieces (identity → reviews → marketplace → revenue → builders) ship as MVP. Amplifiers (certification, talent pool, investment, collective purchasing, governance at scale, translation, federation) added when foundation supports them.
10. **Pitch framing:** "Publicly owned infrastructure" — community-owned, not government-owned.
11. **Graduated revenue split:** Under $20M: 60% builders+investors / 30% operations / 10% community reinvestment. $20M-$100M: 55/20/25. $100M-$500M: 35/20/45. $500M+: community votes. These are rules, not projections — no timeline assumed.
12. **Investor caps (tiered):** Under $20M: max 30% of total revenue. $20M+: max 40% of total revenue. Time-bounded.
13. **Operations flexibility:** 30% under $20M, 20% at scale. Can draw from community reinvestment with community approval.
14. **Governance:** No-confidence = 60% majority + 7-day discussion + 30% quorum + constituency-scoped. Limited powers during vote period. 2-year automatic confidence vote for all leaders.
15. **Legal entity:** Cooperative or equivalent (members collectively own, no individual equity). Jurisdiction-dependent structure.
16. **Independent body:** Existing professional institutions (ICAI, arbitration centers, registered valuers). Recommend but don't decide. Both parties vote on recommendation.
17. **Funding model:** Open contribution (anyone, any amount, recorded permanently). Constitutional bounds set before anyone invests. Contributors vote on specifics within bounds (stake-weighted). Builders as counterweight (shared pool).
18. **Cross-border investment:** Registered entities only, FDI-permitted sectors, domestic-first. Activates country-pair by country-pair.
19. **Dispute resolution:** 3 layers — direct resolution → community arbitration → legal system. Arbitration doesn't replace legal rights.
20. **Collective purchasing:** Platform coordinates, never holds money. Participants pay manufacturers directly.
21. **Talent pool:** Anonymized profiles, contact through platform only, no bulk export.
22. **Marketplace sort order:** Reviewed products above unreviewed. Ranked by aggregate score (sum of star ratings).
23. **Principle amendments:** 75% approval + 30% quorum of all verified members.
24. **Pre-quorum transition:** Automatic when platform has enough verified members to meet quorum for a given round size.

## Logical Gaps Resolved
- #1 Identity verification ✓ (three-layer design + three access tiers)
- #2 Payment compliance ✓ (platform never holds money)
- #3 Pre-quorum investor deadlock ✓ (open contribution + constitutional bounds + independent body)
- #4 Equity/securities legality ✓ (contract facilitation + legal review per jurisdiction)
- #5 Builder unit gaming ✓ (four guardrails + maintenance floor)
- #6 Moderation at scale ✓ (two-flag system, threshold scaling noted as open design question)
- #7 Secondary market liquidity ✓ (honest about illiquidity, tools provided, revenue share is time-bounded)
- #8 Translation quality ✓ (Wikipedia model: AI first pass + community correction)
- #9 Governance stability ✓ (60% + 7-day + quorum + limited powers + 2-year confidence)
- #10 Legal entity ✓ (cooperative, jurisdiction-dependent)
- #11 Cross-border legality ✓ (registered entities only, domestic-first)
- #12 Collective purchasing money flow ✓ (participants pay directly)
- #13 Investor cap consistency ✓ (tiered: 30% under $20M, 40% at $20M+)

## Logical Gaps Remaining (implementation-time design)
- Moderation threshold scaling formula
- Escrow for marketplace disputes (via licensed partner)
- "Revenue" definition for split calculation (gross vs net)
- Federation protocol design
- Video call cost at scale
- Data portability format
- Exact certification fee rates and governance

## Deep Review Results

**Round 1:** 30 issues found. 7 critical, 6 high. All addressed.
**Round 2:** 25 issues found. 5 critical, 9 high. All critical/high addressed.
**Round 3:** 12 issues found. 1 critical, 2 high. All addressed.
**Round 4:** Clean run. No critical or high issues. 2 minor (redundant cap at $20M+ tier, one "40%" reference in pre-quorum context).

## Valuation Estimate (Best Case, 20 Years)

- 400M verified users (200M India, 150M SE Asia/Africa/LATAM, 50M EU/others)
- $7B annual revenue across all streams
- 8-12x revenue multiple
- **Estimated economic value: $70-85 billion**
- Comparable to: MercadoLibre ($100B), Jio Platforms ($115B), PDD Holdings ($150B)

## Commits (all sessions)
- 1dd29dd: Consistent investment language: two paths, no fund-as-noun
- 44fccee: Add identity verification doc
- ff78d42: Age threshold fix
- 6ff0228: Update architecture RFC: identity no longer unsolved
- ef4006e: Add payments doc
- 4dbd150: Marketplace strategy: aggregated products via affiliate APIs
- f4e5268: Reviewer commission model with guardrails
- c4533de: Builder unit gaming prevention
- cbd9c17: Overview page + contributing guide + README restructure
- 6ef6a9b: SVG system diagram
- 6ddfe1d: Link diagram in README and overview
- c82b5d2: Blockchain as infrastructure clarification
- e93949d: "Why This Scope" section
- 555e009: Session progress file
- 33792f8: Compensation clarity for moderators/evaluators/arbitrators
- 92fd523: Investor capital is operational runway
- b976838: Graduated revenue split (gut feeling version)
- 68e3a7d: Revenue split thresholds based on market-rate analysis
- a95812b: Translation approach: AI first pass + community correction
- c528ed1: Secondary market: honest about illiquidity
- e746067: Proposed moderation: two-flag system
- db907e3: Revenue split consistency: clarify builders+investors pool sharing
- 4a2b0fc: Marketplace sort order: aggregate score
- 19c9c00: Deep review fixes: governance, legal, scope, operations, identity tiers
- 7d4b8b1: Second review fixes: investor caps, governance quorum, contradictions
- 1a80126: Third review fixes: align investor caps, quorum trigger, stale references
