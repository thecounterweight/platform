# MVP — What Gets Built First

This is the minimum viable platform. The smallest thing that delivers real value and generates early revenue.

Everything else in the vision comes after this works.

## Core Components

### 1. Identity Verification

Every user is a verified real human. One person, one account.

Three layers: government identity API (DigiLocker, eIDAS, etc.) proves you're real, face scan proves you're the account holder for high-stakes actions, OTP pins it to a device. The user pays the one-time verification fee. See [Identity Verification](identity-verification.md) for the full proposed design.

The principle is non-negotiable. The implementation is a proposed design — open to improvement.

### 2. Discussion Boards + Chat

Threaded discussion boards and group chat. Every participant is verified real.

- Board creators moderate their boards initially (volunteer — builds reputation and trust)
- As a board's community grows, members elect moderators democratically — simple majority, removable any day
- Once platform revenue is healthy, elected moderators are paid from operations budget
- Group chat for real-time coordination within communities

**Proposed moderation model (community can decide another approach later):**

Two flag types:
- **Regular flag** — When enough verified users flag content (threshold), it's automatically removed. Poster can appeal — appeal triggers a community vote to confirm or reverse.
- **Urgent flag** — Goes directly to elected safety team for immediate removal. For illegal content, doxxing, active threats. Community reviews within 48 hours.

Verified identity makes this viable — one person one flag, no brigading with fake accounts. Serial false-flaggers lose flagging privileges. Downvotes reduce visibility but never remove content — only flags can remove.

**Proposed moderation model (community can decide another approach later):**

Two flag types:
- **Regular flag** — Content accumulates flags from verified users. When threshold is reached, community votes: stays or goes. Simple majority. This handles spam, low-quality content, and policy violations.
- **Urgent flag** — Goes directly to elected safety team for immediate action. For illegal content, doxxing, active threats. Safety team removes first, community reviews within 48 hours (confirms or reverses).

Verified identity makes this viable — one person one flag, no brigading with fake accounts. Serial false-flaggers lose flagging privileges. Downvotes reduce visibility but never remove content — only flags can remove.

This is the daily engagement layer. People come for the conversations.

### 3. Marketplace (Reviews + Discovery)

A trusted review layer on top of existing platforms — plus a space for community sellers to list directly.

**Aggregated listings (day one value):**

Products from major platforms (Amazon, Flipkart, etc.) are pulled via their official affiliate APIs. Users don't need to wait for sellers to list — millions of products are browsable immediately.

**How it works:**

1. Products aggregated from major platforms via affiliate APIs (Amazon Product Advertising API, Flipkart Affiliate API, etc.)
2. Community sellers also list their own goods and services directly (free to list)
3. Verified users review products — only real humans, verified purchase
4. Community evaluators certify quality on top of reviews
5. Users click through to buy on the source platform, or buy directly from community sellers

**Why this works:**

- Solves cold-start — marketplace is useful from day one without waiting for sellers
- Reviews are trustworthy because every reviewer is a verified real human
- Community certification adds an expert quality layer that no existing platform has
- Affiliate commissions generate revenue immediately (Amazon: 1-10%, Flipkart: 4-12%)
- Community sellers join because the audience is already there

**The progression:**

1. Start as the place for trusted reviews (aggregated products)
2. Community sellers list alongside — they have a built-in advantage (community backing, local trust)
3. As community sellers grow, users prefer buying direct (lower prices, community accountability)
4. On-platform transactions added later — transaction fees kick in
5. Existing platform listings become less relevant as the community marketplace matures

**Default sort order:**

Products are ranked by review activity and quality combined:

1. Reviewed products always appear above unreviewed products
2. Among reviewed products, rank by **aggregate score** = sum of all star ratings (e.g., 5 five-star reviews = 25, 3 four-star reviews = 12)
3. Unreviewed products sorted by recency

This rewards both quality (high stars) and engagement (many reviews). A well-reviewed product rises naturally. An unreviewed product sits at the bottom until someone reviews it — which incentivizes reviewing.

**Revenue from day one:** Affiliate commissions when users click through and purchase on source platforms. No need to wait for scale.

**Reviewer earnings:**

Reviewers earn a share of affiliate commissions when their reviews drive clicks. Guardrails against gaming:

1. **Parameter-based reviews** — Each product category has specific parameters (e.g., phone: battery, camera, build, value for money). Reviewers must rate and justify each parameter. Vague "great product!" reviews don't qualify for commission.
2. **Commission on clicks, not sentiment** — Positive or negative doesn't matter. A detailed "don't buy this" review earns the same as a positive one. The incentive is usefulness, not positivity.
3. **Post-purchase feedback** — After buying through a reviewer's link, the buyer is asked: "Was this review accurate?" Consistent inaccuracy drops the reviewer's commission rate.
4. **Trust score** — New reviewers don't earn immediately. After a threshold of reviews (e.g., 10), trust score activates based on: parameter accuracy vs buyer feedback, return rates of recommended products, consistency over time. Higher trust = higher commission share. Misleading reviews tank your score.

Net effect: you earn by being useful and accurate, not by selling. Gaming requires consistently fooling buyers on specific measurable parameters — which tanks your trust score after a few attempts.

### 4. Skill Certification

Domain experts interview and assess people's skills. Real evaluations by real experts — not keyword-matching algorithms.

- **Certifiers** are domain experts with demonstrable knowledge, experience, or skills. Provable credentials. They're recruited personally at first, community-elected later.
- **Process:** Expert interviews the candidate, assesses their skill level, records the result on-platform.
- **Certification interviews** happen via external video tools (Google Meet, Zoom) initially. On-platform video comes later.

### 5. Talent Pool

Companies pay a fee to access pre-vetted, expert-certified professionals.

This is the strongest early revenue source. Companies currently pay recruiters 15-25% of annual salary. We offer the same vetting quality at a fraction of the cost. The certified professional gets hired. The platform gets a fee. The expert who certified them gets a share.

## What's NOT in the MVP

| Feature | Why it waits |
|---------|-------------|
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

Community seller listings are free. Always.

- Aggregated products (from Amazon, Flipkart, etc.) are pulled automatically via affiliate APIs — no manual listing needed.
- Community sellers list their own products for free. Verified real people already prevents spam — no bots, no duplicate scam listings.
- If abuse happens (someone listing thousands of items), cap free listings at a reasonable number per person. Beyond that, charge. But the default is free.

## Revenue Model (MVP Phase)

| Source | When it kicks in |
|--------|-----------------|
| Affiliate commissions (Amazon, Flipkart, etc.) | As soon as users review and click through to buy |
| Talent pool access fees (companies) | As soon as certified professionals exist |
| Certification fees (small, from candidates or company-sponsored) | Once certifiers are active |
| Transaction fees (proportional, small) | When on-platform payments are added later |

## Technical Approach

- **Web app (PWA)** — Progressive Web App built with Next.js. Works on mobile browsers, installable to home screen, push notifications, app-like feel. No app store gatekeepers.
- **Native mobile app** comes later when there are contributors for it.
- **Modular monolith** — clear module boundaries designed for eventual service separation, but ships as one deployable unit for speed.

## How It Grows

1. Discussion boards launch. People have a space with verified real humans. No bots, no manipulation.
2. Marketplace activates with aggregated products. People review and certify. Affiliate revenue starts immediately.
3. Community sellers list alongside aggregated products. Trusted reviews drive buyers to them.
4. Skill certification starts. Domain experts evaluate people. Talent pool forms.
5. Companies start paying for talent access. Revenue grows.
6. Revenue funds the next phase — on-platform payments, collective purchasing, investment infrastructure.

## What Success Looks Like (MVP)

- Active discussion communities with real engagement
- A marketplace with enough listings to be browsable
- At least 3-5 domains with active certifiers
- Companies paying for talent pool access
- Enough revenue to cover infrastructure costs and start paying builders
