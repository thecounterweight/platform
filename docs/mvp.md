# MVP — What Gets Built First

This is the minimum viable platform. The smallest thing that delivers real value and generates early revenue.

Everything else in the vision comes after this works.

## Core Components

### 1. Identity Verification

Every user is a verified real human. One person, one account.

Verification method is an open design problem — likely some combination of face scan, one-time password, and identity document. Different approaches may work for different regions. The principle is non-negotiable; the method is what we figure out together.

### 2. Discussion Boards + Chat

Threaded discussion boards and group chat. Every participant is verified real.

- Board creators moderate their boards initially
- As a board's community grows, members elect moderators democratically — simple majority, removable any day
- Group chat for real-time coordination within communities

This is the daily engagement layer. People come for the conversations.

### 3. Marketplace (Discovery + Reviews)

A space where people list goods and services. **No on-platform transactions in the MVP.** The platform doesn't handle purchasing or delivery — that's a massive infrastructure problem solved later.

How it works:

1. Sellers list what they offer (goods, services, skills, time)
2. Buyers browse, discover, and purchase through whatever channel works (existing platforms, direct contact, in person)
3. Buyers upload proof of purchase back to the platform
4. Buyers rate and review — verified purchase reviews only

Every review is from a real human with proof they actually bought the thing. That alone makes this more trustworthy than any existing review platform.

**Future revenue angle:** As the platform grows and demonstrably influences purchasing decisions, we negotiate referral fees with companies that benefit from our reviews driving their sales. This is a scale play — not day-one revenue.

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

Listings are free. Always.

- Verified real people already prevents spam — no bots, no duplicate scam listings.
- Charging to list kills the cold start. We need sellers to make the marketplace useful.
- If abuse happens (someone listing thousands of items), cap free listings at a reasonable number per person. Beyond that, charge. But the default is free.

## Revenue Model (MVP Phase)

| Source | When it kicks in |
|--------|-----------------|
| Talent pool access fees (companies) | As soon as certified professionals exist |
| Certification fees (small, from candidates or company-sponsored) | Once certifiers are active |
| Transaction fees (proportional, small) | When on-platform payments are added later |
| Referral/influence fees from companies | Scale play — needs tens of thousands of users driving purchases |

## Technical Approach

- **Web app (PWA)** — Progressive Web App built with Next.js. Works on mobile browsers, installable to home screen, push notifications, app-like feel. No app store gatekeepers.
- **Native mobile app** comes later when there are contributors for it.
- **Modular monolith** — clear module boundaries designed for eventual service separation, but ships as one deployable unit for speed.

## How It Grows

1. Discussion boards launch. People have a space with verified real humans. No bots, no manipulation.
2. Marketplace activates. People list goods and services. Reviews accumulate. Trust builds.
3. Skill certification starts. Domain experts evaluate people. Talent pool forms.
4. Companies start paying for talent access. First revenue.
5. As traffic grows, referral deals and transaction fees become viable.
6. Revenue funds the next phase — on-platform payments, collective purchasing, investment infrastructure.

## What Success Looks Like (MVP)

- Active discussion communities with real engagement
- A marketplace with enough listings to be browsable
- At least 3-5 domains with active certifiers
- Companies paying for talent pool access
- Enough revenue to cover infrastructure costs and start paying builders
