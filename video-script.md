# The Counterweight — Video Script

**Format:** Speaking to camera. ~10 minutes.

---

## 1. The problem (1.5 minutes)

I'm Manoj Sihag. I'm building a platform called The Counterweight.

The internet is filling up with generated content, fake accounts, and bot interactions. It's increasingly difficult to know whether the person you're reading, reviewing, or transacting with is real. Platforms have no incentive to fix this — engagement-based revenue models don't distinguish between real and synthetic activity.

So we verify identity. Every user is verified through government ID. One account per human.

Your identity data never reaches our servers. A KYC provider verifies you and issues a signed credential directly to your device. Your phone and our server jointly compute a deduplication hash using a protocol where the server never sees your ID number and your phone never sees the key. The platform stores only that hash. There is no identity database to breach, sell, or misuse — and an irrevocable purpose trust makes this architecture permanent.

---

## 2. What you do here (2.5 minutes)

Once verified, you're in a space where every person is real. No bots. No fake accounts. Every interaction is with a verified human.

You choose how to show up. Anonymous — verified but pseudonymous, full access, full privacy. Or you build a public profile: a reputation ledger showing where you're from, review accuracy, trust score, certifications, time on platform. Granularity you control — change what's visible any time.

You read and write public content. You discuss. You organize. Real-time neural translation (self-hosted — no user content leaves our infrastructure) means someone posting in Tamil and someone reading in Hindi see each other natively. No language silos.

Governance operates on one-person-one-vote. Policies, features, moderation rules — decided by user vote. Leaders are elected and removable. No permanent admins. Constitutional changes require 75% supermajority.

Verification also grants you constitutional rights — encoded in the company's Articles of Association, not a Terms of Service page. One vote in governance. Right to stand for elected positions. Legal standing to sue if the company violates its commitments. An irrevocable purpose trust holds a golden share — independent trustees can veto any sale, any mission change, any removal of user protections. Same structure Patagonia uses.

---

## 3. How we make money (2.5 minutes)

We have a marketplace. Products aggregated from different sources — major platforms via affiliate APIs, plus community sellers listing directly.

You review products either with proof of purchase, or as an expert after reading the published material about the product. Reviews are tied to your persistent identity — you can't reset your reputation and start over.

When someone buys based on your recommendation, they can rate your review — again with proof of purchase. We calculate a score based on how helpful you've been to the community over time — statistically ranked by accuracy, not popularity or recency.

You get paid proportionally to that score. People whose recommendations consistently help others earn more. People whose reviews are inaccurate or unhelpful earn less. The system is transparent — the algorithm is open-source, the scores are auditable.

We earn affiliate commissions on purchases made through the platform. No ads. No data selling. Revenue flows from the actual value the marketplace creates — connecting buyers with trustworthy recommendations from verified humans.

Other revenue streams at scale: talent pool (expert-certified professionals, companies pay to access), certification fees, and identity layer fees from third-party services.

---

## 4. What becomes possible on top (2 minutes)

Once millions of people are verified, the identity layer becomes open infrastructure. Others can build on it without anyone sharing data.

Zero-knowledge proofs. You generate a cryptographic proof on your device that says "I'm 18+" or "I'm a unique human" or "I'm in Maharashtra." Third parties verify the proof mathematically. No data exchange. The platform never knows where you authenticated.

Someone builds a lending platform — they verify a ZK proof that the borrower is real and unique. Someone builds a freelance marketplace — portable reputation without revealing identity. Local classifieds where sellers are accountable. Co-op governance with legitimate one-person-one-vote. Citizen journalism where sources are provably real but anonymous.

Community-serving projects use the identity layer free. Revenue-generating services pay a proportional fee. That fee ceiling is a constitutional bound — changeable only by 75% supermajority.

Contracts between verified parties also become possible — business funding, freelancer agreements, rental contracts. Both parties are identified and accountable. Legally enforceable digital signatures.

---

## 5. How it gets built (1.5 minutes)

This is open-source. The proposed architecture, identity design, funding model, and compensation are all public on GitHub. These are starting points — open to being rewritten.

We need people who can build it. Engineers — backend, frontend, security, cryptography. Designers. Legal contributors. Open problems: OPRF-based identity verification, trust scoring that resists collusion, real-time translation, end-to-end encrypted group messaging.

Contributors get paid. Every contribution is tracked on a public ledger. When revenue flows, it flows proportional to what you built. Complexity of work is accounted for — a specialist implementing ZK circuits earns more per hour than a simple bug fix. Early contributors get higher multipliers to compensate for the risk of building before there's revenue. Full compensation model is in the docs.

I can't build this alone. The link is below. Read the docs, break the design, or start building.

---

**Estimated runtime: ~10 minutes**
