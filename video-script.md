# The Counterweight — Video Script

**Format:** Speaking to camera. ~10 minutes.

---

## 1. What we're building (3 minutes)

I'm Manoj Sihag. I'm proposing a platform where every user is verified through government ID — one account per human. Your identity data never reaches our servers. It stays on your device. The platform cannot misuse data it never received — and an irrevocable purpose trust makes this architecture permanent.

It's called The Counterweight.

The problem: the internet is filling up with generated content, fake accounts, and bot interactions. It's increasingly difficult to know whether the person you're reading, reviewing, or transacting with is real. Platforms have no incentive to fix this — engagement-based revenue models don't distinguish between real and synthetic activity. Democratic governance on platforms has never worked because one person can control thousands of accounts.

So we verify identity. One account per human. A KYC provider verifies you and issues a signed credential directly to your device. The platform receives only an irreversible deduplication hash — your identity data never touches our servers.

What verified identity enables: reviews tied to persistent reputations that can't be reset. One-person-one-vote governance. Moderation where getting banned is a real cost. Contracts between parties who are both identified and accountable.

Real-time neural translation (self-hosted, no user content leaves infrastructure) means cross-language discussion works — someone in Tamil Nadu and someone in Rajasthan read each other natively.

You choose how to exist on the platform. Anonymous — verified but pseudonymous, full access. Or you build a public profile: a reputation ledger showing location, review accuracy, trust score, certifications, time on platform. Granularity you control.

Revenue comes from affiliate commissions on product reviews. No ads. No data selling.

---

## 2. Your rights (2 minutes)

Verification grants constitutional rights — encoded in the company's Articles of Association, not a Terms of Service page.

Specifically: one vote in governance, right to stand for elected positions, legal standing to sue if the company violates its commitments.

Your data: identity information never reaches platform servers. It lives on your device in a signed credential from the KYC provider — tamper-proof, under your control. The platform stores only a deduplication hash. When a feature needs to verify an attribute — age bracket, district — your app presents a signed claim from the credential. The platform checks the signature, doesn't store the result. Stateless verification.

An irrevocable purpose trust holds a golden share. Independent trustees — not the founder — can veto any sale, any mission change, any removal of user protections. The architecture already prevents data misuse (we don't have it), and the trust ensures no future leadership can change that architecture. Same structure Patagonia uses.

---

## 3. User governed (1.5 minutes)

Every verified user gets one vote. Verified identity prevents sybil attacks on governance — one person cannot create multiple accounts to outvote others.

Policies, features, moderation rules — decided by user vote. Leaders are elected and removable via no-confidence motion (7-day discussion, 60% majority). No permanent admins.

Moderation: content gets flagged, community votes on removal. ML classifiers triage at scale (prioritize what humans review) but never make removal decisions autonomously.

Constitutional changes require 75% supermajority.

---

## 4. What becomes possible on top (2 minutes)

The identity layer is open infrastructure. Once millions of people are verified, others can build on it without anyone sharing data.

Zero-knowledge proofs. You generate a cryptographic proof on your device that says "I'm 18+" or "I'm a unique human" or "I'm in Maharashtra." Third parties verify the proof mathematically. No data exchange. The platform never knows where you authenticated.

So someone builds a lending platform — they verify a ZK proof that the borrower is real and unique. Someone builds a freelance marketplace — portable reputation without revealing identity. Local classifieds where sellers are accountable. Co-op governance with legitimate one-person-one-vote. Citizen journalism where sources are provably real but anonymous.

Community-serving projects use the identity layer free. Revenue-generating services pay a proportional fee. That fee ceiling is a constitutional bound.

At that point the platform is infrastructure. The identity layer is useful far beyond what we build on it ourselves.

---

## 5. Builders and close (1.5 minutes)

Everything is documented, open-source, and ready to be challenged. Architecture, identity design, funding model — all public on GitHub.

We need engineers — backend, frontend, security. The open problems: identity verification without storing personal data, trust scoring that resists collusion, real-time translation, end-to-end encrypted group messaging.

Contributors get paid. Contributions tracked on a public ledger. When revenue flows, it flows proportional to what you built. Early contributors get higher multipliers to compensate for risk. Full compensation model is in the docs.

I can't build this alone. The link is below. Read the docs, break the design, or start building.

---

**Estimated runtime: 10 minutes**
