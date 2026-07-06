# The Counterweight — Video Script

**Format:** Speaking to camera. ~18 minutes.

---

## 1. Opening (30 seconds)

Should we build a review and discussion platform that's owned by its users?

I'm Manoj Sihag. I'm proposing one. It's called The Counterweight. I can't build it alone, so I want to show you the design and you can decide if it's worth building together.

---

## 2. The Problem (1.5 minutes)

You can't trust product reviews on the internet. Every major platform has a fake review problem — paid reviewers, bot accounts, sellers gaming the algorithm. You've experienced this. You buy something based on five-star reviews and it's garbage.

Discussion platforms have a different problem — anonymous accounts, brigading, bot farms drowning out real people. You can't have a democratic vote when one person controls a thousand accounts.

Both problems have the same root cause: platforms don't know if their users are real, unique humans. And the platforms that do know don't have any incentive to fix it — they make money from engagement, not from accuracy.

---

## 3. The Core Idea (2 minutes)

What if every person on a platform were a verified, unique human — and the platform were owned by those people collectively?

One architectural decision: every user verifies their identity through a government ID API. We compute an irreversible cryptographic hash — a mathematical proof that you exist and haven't registered before. Your raw ID number is never stored. You can still participate under a pseudonym.

Why does this matter? Democratic governance on the internet has never worked because of Sybil attacks — one person creates a thousand accounts and outvotes everyone. We solve that at the identity layer.

The legal entity is a Wyoming LLC where every verified user is a member. You sign a Joinder Agreement at verification — this is a real legal contract that grants you co-ownership, one vote in governance, and a share of platform revenue.

The rest follows from this.

---

## 4. What We Build First (4 minutes)

### Discussion.

You're talking to real people. You know it, they know it. You can still be anonymous — the system knows you're real, but others don't have to know who you are. There's a stake behind every voice.

Moderation by community vote — flag content, upvote or downvote, 60% majority decides. No corporate content team making opaque decisions. No permanent admins. Every moderator is elected and removable.

### Reviews.

If we're not selling data and not running ads, how does this platform sustain itself?

We aggregate products from Amazon, Flipkart, and other platforms. Users come to us for reviews they can trust — every reviewer has proof of purchase and a reputation that accumulates over time. When they click through and buy, we earn an affiliate commission.

Reviewers are ranked by accuracy — how often their assessments align with actual buyer experience. Other verified buyers rate reviews as helpful, accurate, or misleading. The best information rises naturally. Maybe one or two clearly-labeled sponsored slots, but the algorithm is influenced only by quality.

### The core loop.

Identity makes reviews trustable. Trustable reviews make the marketplace useful. The marketplace generates revenue. Revenue pays the people who build it. Each piece sustains the next.

---

## 5. Funding and Ownership (3 minutes)

The legal entity is a Wyoming LLC — it costs $260/year, forms in two days, and allows international membership. Every verified user signs a Joinder Agreement and becomes a member with legal co-ownership rights.

The Operating Agreement — the LLC's constitution — encodes: one person one vote, revenue split formula, anti-sale clause, amendment process. No individual can sell it. No entity can acquire it. Changes require 75% supermajority.

Anyone can invest any amount. What investors get is a time-bounded share of revenue. A percentage for a defined period, then it ends. The platform stays community-owned. Early investors take more risk, so they get better terms.

Once the platform has enough members, the terms of every funding round are decided by a bicameral vote. Investors and users each get equal say. Both sides must agree or the round doesn't happen.

### How builders get paid.

Contributions are tracked on a public ledger — code, design, documentation, legal research, moderation. Early contributors get multiplied compensation. When revenue flows, it flows proportional to what you contributed.

The revenue split between builders, investors, operations, and community reinvestment is defined in the Operating Agreement. Ratios change as revenue grows — more goes to community reinvestment at scale. Details are in the docs.

---

## 6. What Becomes Possible Next (3 minutes)

Once the foundation is working — identity, reviews, revenue — the same architecture enables more.

### Skill certification.

Domain experts interview and assess people's skills. Real evaluations by real experts — not keyword-matching algorithms. Companies pay to access certified professionals. The talent pool becomes a revenue stream that funds everything else.

### Collective purchasing.

Small shops pool demand, buy direct from manufacturers at bulk prices. The platform coordinates. Participants save 15-20% on inventory costs. This is the stickiest feature — once shopkeepers are saving real money, they don't leave.

### Community investment.

The platform facilitates signed agreements between verified people. Transactions are recorded. Returns are traceable. The platform never holds your money — it makes it possible for people to trust each other enough to transact directly.

### The ecosystem.

The identity layer is open infrastructure. Anyone can build on top: peer-to-peer lending, freelance marketplaces with portable reputation, local classifieds where sellers are accountable, co-op governance tools.

Community-serving projects use the identity layer free. Revenue-generating services pay a proportional fee back.

---

## 7. Where We Are (2 minutes)

Everything I've described is documented, open, and ready to be challenged. Identity verification. Payments. Governance. Investment model. Marketplace strategy. Builder compensation. Architecture. All public.

The landing page is live. The documentation is complete. No platform code is written yet — that's what we're looking for builders to do.

The tech stack: Next.js, TypeScript, PostgreSQL, Redis, BullMQ. Modular monolith — clear module boundaries, one deployable unit. Boring technology that works. A contributor can clone the repo and start building today.

I've done a comprehensive review of the design — legal risks, technical gaps, business model stress tests. Twenty-one issues found and addressed. The remaining open questions are documented. This is honest about what it doesn't know.

---

## 8. What I Need (1.5 minutes)

I need engineers. Backend, frontend, security, infrastructure. The problems are interesting — identity verification without surveillance, parameter-based review systems, real-time discussion at scale, CSAM scanning obligations, face deduplication.

I need designers. Someone who can make a complex system feel simple. Mobile-first. Works on a cheap phone on a slow connection.

I need lawyers. US LLC law, Indian company law, data protection. Any jurisdiction.

I need domain experts who can define what "quality" means in their field and volunteer as the first evaluators.

Contributions are tracked. When revenue flows, contributors get paid proportional to what they built. Year one contributors earn 3x multiplied compensation. Details are in the docs — read them, decide if the terms are fair.

---

## 9. Close (30 seconds)

This is The Counterweight. A review and discussion platform where every user is real and every user is an owner. Open-source. Documented. Looking for builders.

If you think this should exist — the link is below. Read the docs. Break the design. Or just leave your name.

---

**Estimated runtime: 16-18 minutes**
