# MVP — What Gets Built First

The smallest thing that delivers real value and generates early revenue. Everything else comes after this works.

## Core Components

### 1. Identity Verification

One person, one account. Three layers: government identity API (DigiLocker, eIDAS, etc.) proves you're real, face scan proves you're the account holder for high-stakes actions, OTP pins it to a device. User pays the one-time verification fee. See [Identity Verification](identity-verification.md) for the full proposed design.

The principle is non-negotiable. The implementation is open to improvement.

### 2. Discussion Boards + Chat

Threaded discussion boards and group chat. Every participant is verified real.

- Board creators moderate their boards initially (volunteer — builds reputation and trust)
- As a board's community grows, members elect moderators democratically — removable via no-confidence (7-day discussion + 60% vote)
- Once platform revenue is healthy, elected moderators are paid from operations budget
- Group chat for real-time coordination within communities

**Proposed moderation model (community can decide another approach later):**

Two flag types:
- **Regular flag** — Content accumulates flags from verified users. When threshold is reached, it's automatically removed. Poster can appeal — appeal triggers a community vote to confirm or reverse.
- **Urgent flag** — Goes directly to elected safety team for immediate action. For illegal content, doxxing, active threats. Safety team removes first, community reviews within 48 hours (confirms or reverses).

Verified identity makes this viable — one person, one flag. Serial false-flaggers lose flagging privileges. Downvotes reduce visibility but never remove content — only flags can remove.

**Open design question:** How does the flag threshold scale with community size? A fixed number doesn't work — too high for small boards (harmful content stays up too long), too low for large boards (a few people can suppress speech). Likely percentage-based with a minimum floor, but the exact formula needs to be designed during implementation.

This is the daily engagement layer.

### 3. Marketplace (Reviews + Discovery)

A trusted review layer on top of existing platforms.

**Aggregated listings (day one value):**

Products from major platforms (Amazon, Flipkart, etc.) are pulled via their official affiliate APIs. Users don't need to wait for sellers to list — millions of products are browsable immediately.

**How it works:**

1. Products aggregated from major platforms via affiliate APIs (Amazon Product Advertising API, Flipkart Affiliate API, etc.)
2. Verified users review products — only real humans, verified purchase
3. Peer-rated reviews surface the most helpful and accurate information
4. Users click through to buy on the source platform

**Why this works:**

- Solves cold-start — marketplace is useful from day one without waiting for sellers
- Reviews are trustworthy because every reviewer is a verified real human
- Peer-rated reviews add a quality layer that no existing platform has
- Affiliate commissions generate revenue immediately (Amazon: 1-10%, Flipkart: 4-12%)

**The progression:**

1. Start as the place for trusted reviews (aggregated products from major platforms)
2. Revenue diversifies across affiliate commissions, sponsored slots, talent pool, and certification fees
3. Community sellers list alongside later (phase 2) — free to list, small commission on sales
4. On-platform transactions added for community sellers — buyers pay no platform fee

**Default sort order:**

Products are ranked by review activity and quality combined:

1. Reviewed products always appear above unreviewed products
2. Among reviewed products, rank by **aggregate score** = sum of all star ratings (e.g., 5 five-star reviews = 25, 3 four-star reviews = 12)
3. Unreviewed products sorted by recency

Rewards both quality and engagement. Unreviewed products sit at the bottom until someone reviews them — which incentivizes reviewing.

**Revenue from day one:** Affiliate commissions when users click through and purchase on source platforms.

**API dependency risk:** Affiliate API access is granted at the provider's discretion. The platform's revenue model does not depend on any single provider long-term — seller commissions, talent pool fees, certification fees, sponsored slots, and identity layer fees are independent revenue streams. If a provider terminates access, the platform continues with remaining providers and community sellers. Anti-monopoly laws (Competition Act 2002 in India, Article 102 TFEU in EU, Sherman Act in US) provide legal recourse against discriminatory termination of access.

**Reviewer earnings:**

Reviewers earn a share of affiliate commissions when their reviews drive clicks. Guardrails against gaming:

1. **Parameter-based reviews** — Each product category has specific parameters (e.g., phone: battery, camera, build, value for money). Reviewers must rate and justify each parameter. Vague "great product!" reviews don't qualify for commission.
2. **Commission on clicks, not sentiment** — Positive or negative doesn't matter. A detailed "don't buy this" review earns the same as a positive one. The incentive is usefulness, not positivity.
3. **Peer-rated reviews** — Other verified buyers of the same product can rate any review as helpful, accurate, or misleading. This peer validation feeds directly into the reviewer's trust score. Gaming requires multiple verified purchasers to collude — far harder than creating fake accounts.
4. **Trust score** — Anyone who bought a product can review it immediately. Commission and review weight grow as trust builds. Trust score is based on: peer ratings from other verified buyers, parameter accuracy vs buyer feedback, return rates of recommended products, consistency over time. Higher trust = higher commission share and more prominent placement. Misleading reviews tank your score.

You earn by being useful and accurate. Gaming requires consistently fooling buyers on specific measurable parameters — which tanks your trust score after a few attempts.

## What's NOT in the MVP

| Feature | Why it waits |
|---------|-------------|
| Skill certification + Talent pool | Requires active community and certifiers — added once MVP has traction |
| Community seller listings | Needs trust infrastructure and moderation in place first |
| On-platform payments | Requires payment rail integration per country, compliance, dispute resolution |
| Delivery/logistics | Massive infrastructure — let existing platforms handle this for now |
| Collective purchasing | Needs critical mass of shopkeepers in same geography |
| Community investment funds | Legal complexity, requires established trust and governance |
| Political coordination | Emerges naturally once membership hits critical mass |
| Video calls (on-platform) | Use external tools initially — build later when we have the team |
| Legal infrastructure (contracts, templates, dispute resolution) | Critical for investment and business funding phases — built when those features activate |
| Translation | Complex AI problem — add once core platform is stable |
| Federation | Single instance first — federation is a goal, not yet designed |

## Marketplace Listing Policy

- Aggregated products (from Amazon, Flipkart, etc.) are pulled automatically via affiliate APIs — no manual listing needed.
- Community seller listings (phase 2) — free to list, small commission on completed sales.

## Revenue Model (MVP Phase)

| Source | When it kicks in |
|--------|-----------------|
| Affiliate commissions (Amazon, Flipkart, etc.) | As soon as users review and click through to buy |

**Phase 2 revenue (post-MVP):**

| Source | When it kicks in |
|--------|-----------------|
| Talent pool access fees (companies) | Once certified professionals exist |
| Certification fees (small, from candidates or company-sponsored) | Once certifiers are active |
| Seller commissions | When community sellers are added |

## Technical Approach

- **Web app (PWA)** — Progressive Web App built with Next.js. Works on mobile browsers, installable to home screen, push notifications, app-like feel. No app store gatekeepers.
- **Native mobile app** comes later when there are contributors for it.
- **Modular monolith** — clear module boundaries designed for eventual service separation, but ships as one deployable unit for speed.

## How It Grows

**MVP (what ships first):**

1. Discussion boards launch. People have a space where every participant is a verified real human.
2. Marketplace activates with aggregated products. People review products. Affiliate revenue starts immediately.

**Phase 2 (funded by MVP revenue):**

3. Skill certification starts. Domain experts evaluate people. Talent pool forms.
4. Community sellers list alongside aggregated products.
5. Companies start paying for talent access. Revenue diversifies.
6. Revenue funds the next phase — on-platform payments, collective purchasing, investment infrastructure.

## What Success Looks Like (MVP)

- Active discussion communities with real engagement
- A marketplace with enough aggregated listings to be browsable
- Verified reviews driving affiliate clicks and commissions
- Enough revenue to cover infrastructure costs and start paying builders

## Phase 2: Skill Certification + Talent Pool

Once the MVP has traction and revenue:

### Skill Certification

Domain experts interview and assess people's skills. Real evaluations by real experts — not keyword-matching algorithms.

- **Certifiers** are domain experts with demonstrable knowledge, experience, or skills. Provable credentials. They're recruited personally at first, community-elected later.
- **Process:** Expert interviews the candidate, assesses their skill level, records the result on-platform.
- **Certification interviews** happen via external video tools (Google Meet, Zoom) initially. On-platform video comes later.

### Talent Pool

Companies pay a fee to access pre-vetted, expert-certified professionals.

**How access works:** Companies see anonymized profiles — skills, certifications, experience level, domain. No personal contact details exposed. Contact happens through the platform. The professional chooses whether to respond. No bulk export, no scraping, no extracting the database.

Companies currently pay recruiters 15-25% of annual salary. The goal is comparable vetting quality at a fraction of the cost. The professional gets hired, the platform gets a fee, the certifier gets a share.
