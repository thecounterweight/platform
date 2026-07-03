# Session Progress — July 2-3, 2026

This file captures all work done across two sessions. If we lose context, resume from here.

## What Was Accomplished

### New Documents Created
1. **docs/identity-verification.md** — Three-layer design (gov ID + face scan + OTP), privacy guarantees, anonymity vs verification, cost model, account recovery, age thresholds
2. **docs/payments.md** — Split approach (country-specific rails for marketplace, direct bank transfer for investments), platform never holds money
3. **docs/overview.md** — One-page system overview with diagram, revenue model, tech stack, "Why This Scope" section
4. **docs/collective-purchasing.md** — Standalone doc (moved from investment model)
5. **docs/assets/system-diagram.svg** — Visual system diagram (4 layers: platform, revenue, distribution, external infrastructure)

### Major Document Rewrites
6. **docs/investment-model.md** — Reframed as contract facilitation layer, "Two Paths" (pooled + direct deals), removed all "the fund" noun usage, pool size recommendations, securities avoidance framing
7. **docs/builder-compensation.md** — 7-level complexity rubric (1x-7x), anti-gaming guardrails (verifiable artifacts, retroactive challenges, market-rate check), ledger technology progression (YAML → blockchain anchoring)
8. **docs/mvp.md** — Marketplace rewritten (aggregated products via affiliate APIs + community sellers), reviewer commission model with 4 guardrails, revenue from day one
9. **docs/vision.md** — Removed emotional language, added "Why This Scope" section, payments clarified, marketplace updated, blockchain clarification
10. **CONTRIBUTING.md** — Concrete immediate tasks (backend, frontend, marketplace, design, legal), tech stack specified
11. **README.md** — "Start Here" → overview, system diagram at top, "publicly owned infrastructure" tagline

### Site Updates
12. **site/src/components/Nav.tsx** — Added Identity, Payments, Start Here, and overview to nav dropdown
13. **site/src/lib/docs.ts** — Added all new docs to DOC_META
14. **site/src/app/page.tsx** — Marketplace copy updated, "investment pool managers" not "fund managers"

### GitHub Issues Created (#7-15)
- #7: Set up project scaffold — Next.js + PostgreSQL + auth skeleton
- #8: Discussion boards — CRUD for boards, posts, comments, votes
- #9: Amazon Product Advertising API integration
- #10: Review system — parameter-based ratings + trust score
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

1. **Investment model:** Contract facilitation layer, not fund management. Two paths (pooled + direct deals).
2. **Payments:** Platform never holds money. Country-specific rails for small transactions, direct bank transfer for investments.
3. **Identity:** Gov ID API + face scan (high-stakes) + OTP. User pays verification fee. Privacy: hash only, no raw data stored.
4. **Marketplace strategy:** Aggregated products from Amazon/Flipkart via affiliate APIs. Revenue from day one. Community sellers list free alongside.
5. **Reviewer commissions:** Share of affiliate revenue. Guardrails: parameter-based reviews, commission on clicks not sentiment, post-purchase feedback, trust score.
6. **Builder unit gaming:** Verifiable artifacts required, permanently public + retroactively challengeable, market-rate sanity check, time multiplier reduces incentive.
7. **Blockchain:** Not as product/speculation. Yes as infrastructure for contribution ledger immutability at scale.
8. **Age threshold:** No platform minimum. 18+ for contracts (legal necessity). Comply with local law where it applies.
9. **Scope justification:** Pieces need each other (flywheel). Infrastructure must cover communication, commerce, finance, governance.
10. **Pitch framing:** "Publicly owned infrastructure" — community-owned, not government-owned.

## Logical Gaps Resolved
- #1 Identity verification ✓
- #2 Payment compliance ✓
- #3 Pre-quorum investor deadlock ✓ (independent expert body)
- #4 Equity/securities legality ✓ (contract facilitation)
- #5 Builder unit gaming ✓

## Logical Gaps Remaining (discuss later)
- #6: Moderation at scale
- #7: Secondary market liquidity
- #8: Translation quality
- #9: Evaluator bootstrapping
- #10: Dispute resolution
- #11: Federation design
- #12: Collective purchasing logistics
- #13: Video call cost at scale
- #14: Data portability format
- #15: Platform sustainability if growth stalls

## Active Discussion (Paused)

**Who else should get paid?**

Currently compensated: builders, reviewers, evaluators, investors.

Potentially missing:
1. **Moderators (ongoing)** — Proposed: pay from operations budget (20%), not builder pool
2. **Dispute arbitrators** — Skilled work, currently uncompensated
3. **Community organizers** — Drive growth, could earn builder units during growth phase
4. **Referrers** — Risky (incentivizes spam), probably skip
5. **Content creators** — Indirect value, monetizing posts risks karma farming

**Resolved:**
- Moderators: volunteer early (reputation/trust), elected + paid from operations once revenue is healthy
- Evaluators: same pattern — volunteer early, paid per certification once fees flow
- Arbitrators: same pattern — volunteer, paid per case from operations later
- Referrers: skip (incentivizes spam)
- Content creators: skip (monetizing posts risks karma farming)

## Additional Decisions (July 3)

11. **Graduated revenue split** — Builder+investor share reduces as revenue grows. Under $20M: 60% (30% operations). $20M-$100M: 55% (20% operations). $100M-$500M: 35% (20% operations). $500M+: community votes. Investor cap: 30% of total revenue under $20M, 40% at $20M+.
12. **Community reinvestment** — Grows with scale. Funds: subsidized verification, business grants, infrastructure expansion, fee reduction, open-source adjacent tools.
13. **Investor capital vs revenue** — Investor money is operational runway (infrastructure, development). Not subject to revenue split. Revenue split applies only to platform revenue once it exists.
14. **Moderator/evaluator compensation path** — Volunteer → reputation → elected → paid from operations budget. Not builder units.
15. **Blockchain as infrastructure** — Contribution ledger anchored to chain at scale for immutability. Never as product, never as speculation.
16. **Pitch framing** — "Publicly owned infrastructure." Community-owned, not government-owned.
17. **Light mode default** — Site/app uses light mode default, dark mode optional.
18. **No platform age minimum** — 18+ for contracts only. Comply with local law where it applies.

## Commits (this session)
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
