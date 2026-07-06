# MVP — What Gets Built First

The smallest thing that delivers real value and generates early revenue. Everything else comes after this works.

The MVP ships in three milestones. Each one is independently useful and proves a specific thesis before the next begins.

---

## Milestone 1: Verified Discussion (ships first)

**Proves:** People will use a discussion space where every participant is a verified real person.

**Timeline:** 4-6 weeks with a small team.

### Verification (phone/OTP)

One person, one phone number. OTP verification pins an account to a device. This is not the full identity system — it's enough to prevent duplicates and make every participant a real person with something to lose.

Full government ID verification (DigiLocker, eIDAS) comes in Milestone 2 via a KYC provider (Digio, Signzy, IDfy, or similar) — no government license needed on our end.

### Discussion Boards + Chat

Threaded discussion boards and group chat. Every participant is phone-verified.

### Multi-language UI

i18n support — the interface works in Hindi, English, and whatever languages the first users need. This is not auto-translation between languages (that's a harder problem for later). Users post in whatever language they write; the UI chrome is localized.

- Board creators moderate their boards initially (volunteer — builds reputation and trust)
- As a board's community grows, members elect moderators democratically — removable via no-confidence (7-day discussion + 60% vote)
- Once platform revenue is healthy, elected moderators are paid from operations budget
- Group chat for real-time coordination within communities

**Moderation (Milestone 1 — simple version):**

Board creators moderate. They can remove content and ban users from their board. All actions are logged publicly. This is sufficient for the first 1,000 users.

**Moderation (scales with growth):**

Community vote system — any verified user can flag content, which opens a vote:

- **Upvote** — keep the content.
- **Downvote** — remove it.

Vote threshold before action is taken (minimum votes required):
- Small boards (<100 members): 10 votes
- Medium boards (100–1000 members): 3% of active members
- Large boards (1000+ members): 1% of active members

Once the threshold is reached: **60% downvotes = content removed.** 60% upvotes = flag dismissed, content stays. Consistent with the platform's governance majority rule.

One person, one vote. Verified identity makes this viable — no sock puppets, no brigading with alt accounts.

**Urgent flag** — For illegal content, doxxing, active threats. Goes directly to elected safety team for immediate removal. Community reviews within 48 hours (confirms or reverses the decision).

---

## Milestone 2: Identity Upgrade (when Milestone 1 has traction)

**Proves:** People will go through full government ID verification voluntarily.

**Depends on:** Integration with a KYC provider (Digio, Signzy, IDfy, or similar). These companies already hold DigiLocker/Aadhaar eKYC licenses — we use their APIs. No government license needed on our end. Integration timeline: 2-4 weeks.

### Full Identity Verification

KYC provider handles government ID verification (DigiLocker in India via provider API, eIDAS in EU). Face scan for high-stakes actions. Non-reversible hash stored — no personal data retained.

Existing phone-verified users are invited to upgrade. Three-tier access:
- **Verified** — full government ID. Full platform access.
- **Phone-verified** — can discuss, can't review products or vote in governance.
- **Unverified** — browse only.

The user pays the one-time verification fee. See [Identity Verification](identity-verification.md) for the full proposed design.

The principle is non-negotiable. The implementation is open to improvement.

---

## Milestone 3: Marketplace + Reviews (when affiliate APIs are approved)

**Proves:** Verified reviews drive affiliate revenue.

**Depends on:** Affiliate API approval from Amazon/Flipkart (requires existing site with traffic — which Milestones 1 and 2 provide).

### Marketplace (Reviews + Discovery)

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

## Revenue Model

**Milestone 1–2: No revenue. Runs lean.**

Volunteer contributors. Minimal infrastructure costs (~₹5,000/month for hosting + OTP service). Funded by the founder or early supporters. This is the community-building phase — the product is the discussion platform, not the revenue.

**Milestone 3 (early): Revenue starts, doesn't cover costs.**

Affiliate commissions begin when users review products and click through. At small scale (5,000–10,000 users), this generates ₹1,000–5,000/month. Useful signal that the model works. Not enough to sustain anything.

**Milestone 3 (at scale, 50K+ active users): Revenue covers infrastructure.**

At this scale, affiliate click-throughs generate enough to cover hosting, OTP, and operational costs. The platform stops needing external support.

**Phase 2: Revenue diversifies and compensates builders.**

| Source | When it kicks in |
|--------|-----------------|
| Affiliate commissions | Milestone 3 (meaningful at 50K+ users) |
| Talent pool access fees (companies) | Once certified professionals exist |
| Certification fees | Once certifiers are active |
| Seller commissions | When community sellers are added |
| Identity layer fees | When commercial instances use the verification network |

Builder compensation activates when revenue consistently exceeds operating costs. Until then, contributions are tracked and owed — paid retroactively when the money exists.

## Technical Approach

- **Web app (PWA)** — Progressive Web App built with Next.js. Works on mobile browsers, installable to home screen, push notifications, app-like feel. No app store gatekeepers.
- **Native mobile app** comes later when there are contributors for it.
- **Modular monolith** — clear module boundaries designed for eventual service separation, but ships as one deployable unit for speed.

## How It Grows

**Milestone 1 (ships first — 4-6 weeks):**
1. Discussion boards launch with phone verification and multi-language UI.
2. First ~1,000 users join. Community forms. Content is created.

**Milestone 2 (when Milestone 1 has traction):**
3. Government ID verification goes live. Users upgrade from phone-verified to full-verified.

**Milestone 3 (when affiliate APIs are approved):**
4. Marketplace activates with aggregated products. Verified users review products. Affiliate revenue starts.

**Phase 2 (funded by MVP revenue):**
5. Skill certification starts. Domain experts evaluate people. Talent pool forms.
6. Community sellers list alongside aggregated products.
7. Companies start paying for talent access. Revenue diversifies.
8. Revenue funds the next phase — on-platform payments, collective purchasing, investment infrastructure.

## What Success Looks Like

**Milestone 1:** Active discussion communities. Real engagement. Users returning daily.

**Milestone 2:** Majority of active users upgrade to full verification voluntarily.

**Milestone 3:** Reviews driving affiliate clicks. Revenue covering infrastructure costs.

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
