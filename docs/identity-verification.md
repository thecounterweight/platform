# Identity Verification

How we ensure one person = one account without compromising privacy.

## The Requirement

Every account on the platform must belong to a unique, real human. This is non-negotiable — voting, investment, certification, and community trust all depend on it.

## Proposed Design (Three Layers)

### Layer 1 — Government Identity Verification

Verification is handled through existing KYC providers who already have government API access:

- **India:** Digio, Signzy, IDfy, or similar — they hold DigiLocker/Aadhaar eKYC licenses. We use their APIs. No license needed on our end.
- **EU:** eIDAS-compliant providers (Onfido, Jumio, etc.)
- **UK:** GOV.UK Verify via authorized identity providers
- **US:** ID.me, Persona, or similar
- **Others:** Added as the platform expands — always through a licensed local provider

The platform does not hold a government API license directly. We integrate with providers who do. This removes the regulatory dependency — no 12-18 month license wait, no risk of denial. If one provider is unavailable, we switch to another.

**Cost:** KYC providers charge ₹5-20 per verification in India, $1-3 elsewhere. Passed to the user as a one-time registration fee.

**What this proves:** You are a real person with a government-issued identity. You are unique (no duplicate accounts).

### Layer 2 — Face Scan (Liveness Check)

For high-stakes actions (voting, large investments, governance decisions), communities can require a face scan that matches the government ID photo.

- Proves the person performing the action is the verified account holder
- Prevents account selling to bot farms
- Optional per community — not forced on every interaction
- Processed in real-time, biometric data discarded immediately after pass/fail

**What this proves:** The person using the account right now is the person who registered it.

### Layer 3 — OTP (Device Binding)

One phone number per account. Every login and sensitive action requires OTP verification.

- Pins the account to a physical device
- Makes scaling attacks expensive (each fake account needs a unique SIM)
- Standard SMS or authenticator app

**What this proves:** You control a unique phone number. Bot farms can't operate at scale without massive SIM acquisition.

### Combined Effect

To game the system you would need: a real government ID + a face that matches it + a unique phone number — per account. This is effectively one-human-one-account.

## Privacy Guarantees

These are non-negotiable platform commitments:

| Guarantee | What it means |
|-----------|---------------|
| No storage of raw documents | The platform verifies and discards. No passport scans, no Aadhaar numbers stored. |
| No selling or sharing | Identity data never leaves the platform. Never sold to third parties. Never used for advertising. |
| No profiling | Verification is a yes/no gate. The platform doesn't store your address, age, gender, or anything beyond "verified: yes." |
| Minimum data principle | Only a cryptographic hash is stored — enough to prevent duplicate accounts, nothing more. |
| Non-reversible storage | Even if the database leaks, no one can extract your government ID from the stored hash. |
| Face scan data never stored | Liveness check produces pass/fail. Biometric data is processed in real-time and discarded. |
| Open-source verification logic | Anyone can audit exactly what data flows where. No black boxes. |

## Anonymity vs Verification

The platform knows you're real. Other users don't have to.

- You can post, comment, and participate under a pseudonym.
- The system guarantees to others: "this is a verified unique human" — without revealing who.
- You choose when to attach your real identity to your actions.
- Investment contracts require real names (legal necessity). Community discussion does not.

This is pseudonymous participation with verified-human backing. You get privacy without enabling manipulation.

## Verification = Membership

Completing identity verification automatically makes you a member of The Counterweight Cooperative (or equivalent legal entity in your jurisdiction).

**What happens at verification:**
1. KYC provider confirms your identity
2. You're shown: "By verifying, you become a member of The Counterweight Cooperative. This gives you one vote in governance decisions."
3. You accept
4. You're enrolled as a member with one share

**What membership gives you:**
- Legal co-ownership of the platform (one share in the cooperative)
- One vote in all governance decisions (AGM, elections, amendments, no-confidence)
- Right to stand for elected positions (moderator, safety team, community lead)
- Right to receive surplus distribution if the cooperative ever distributes

**Why this works:**
- No separate "join the cooperative" process — verification IS joining
- Every verified user is an owner by default
- The cooperative's bylaws encode this: "All individuals who complete identity verification are automatically enrolled as members"
- The ownership promise is legally real, not just words on a website

## Cost

Identity verification APIs charge per check (₹5-20 in India, $1-3 elsewhere). A nominal membership fee (₹10-100) is bundled into the same one-time payment. This covers: verification cost + one cooperative share. It also serves as a minor friction barrier against frivolous account creation.

## Account Recovery

If you lose access (phone lost, number changed):

1. Re-verify with government ID through the same API.
2. Complete a face scan matching your original verification.
3. Bind a new phone number.

This prevents someone from creating a second account under the guise of "recovery" — you must prove you're the same person.

## Age Threshold

- Community features (discussion, marketplace, reviews, certification): No platform-imposed age minimum.
- Investment and contract features (backing businesses, pooled funds, signing agreements): 18+ or legal age of contract in the user's jurisdiction.
- Where local law imposes age restrictions on platform access (e.g., France requires parental consent for under-15 on social platforms), the platform complies with those requirements.

Age is verified through the government ID layer during registration. Jurisdictional restrictions are applied based on the user's verified location.

## People Without Government ID

An estimated 850 million people globally lack government-issued ID. The platform must still be useful to them without compromising the trust guarantees that verified identity provides.

**Access tiers:**

| Tier | Requirement | Can do | Cannot do |
|------|-------------|--------|-----------|
| Verified | Government ID + OTP | Everything — review, vote, invest, sell, certify, govern | — |
| Vouched | N verified members vouch + OTP | Discussion, chat, browse marketplace, buy (not sell) | Review, vote, invest, sell, certify, govern |
| Unverified | Email/phone only | Browse, read, search | Participate in any way that requires trust |

**Why three tiers:**

The platform's value comes from verified identity — trusted reviews, one-person-one-vote, no bots. Weakening this weakens everything. But reading, browsing, and buying don't require the same trust guarantees as reviewing, voting, or investing. People without ID can still benefit from the platform. They just can't do things that require others to trust their uniqueness.

**Vouched tier:** If N verified members (community decides the threshold — likely 3-5) personally vouch for someone, that person gains limited participation rights. This isn't full verification — it's a social trust layer. Vouchers are accountable: if the vouched person turns out to be a duplicate or bot, vouchers lose reputation.

**Path to full access:** As governments expand digital ID systems (India went from ~50% to ~95% Aadhaar coverage in a decade), more people gain access to full verification. The platform doesn't solve the ID gap — it works within it while remaining useful to those affected.

## Optional Profile Data

Verification only produces a pass/fail and a hash. No personal details are extracted or stored from the ID.

Users can optionally share additional information to make the platform more useful:

| Data | Why it's useful | Default |
|------|----------------|---------|
| Age / date of birth | Age-gated communities, content filtering | Not shared |
| Location (city/state) | Local communities, collective purchasing, nearby sellers | Not shared |
| Gender | Community context where relevant | Not shared |
| Language preferences | i18n, content matching | Shared (set during signup) |

**Rules:**
- All optional data is user-provided, not extracted from verification
- Users control who sees what (public, community-only, or private)
- Can be changed or removed at any time
- Never used for advertising or sold to third parties
- Never required for core platform features (discussion, reviews, voting)

The platform works fully without any optional data. Sharing is a user choice, not a platform requirement.

## Data Protection Compliance (DPDPA 2023, GDPR)

The platform does not process or store biometric data or government ID documents directly. KYC providers (Digio, Signzy, etc.) handle all identity document processing. They are the Data Processors for biometric/ID data and carry their own compliance burden.

**What the platform stores:**
- A non-reversible hash (for deduplication)
- Verification status (pass/fail)
- Timestamp
- Optional profile data (only what the user explicitly provides)

**What the platform does NOT store:**
- Government ID numbers, documents, or images
- Face scan data or biometric templates
- Any data extracted from the ID document

**Compliance requirements (implemented before Milestone 2 launch):**
- Privacy policy on the site — what data is collected, why, how long it's retained, who processes it
- Explicit consent at verification — users informed what's processed and by whom before proceeding
- Data Fiduciary registration under DPDPA 2023 (required once handling user data at scale)
- Data Processing Agreement with KYC provider
- Right to erasure — users can request deletion of their account and associated data
- In EU: GDPR compliance via eIDAS-compliant providers who handle their own DPIAs

The KYC provider handles the heavy lifting (biometric processing, document verification, secure storage during processing). The platform's data footprint is minimal by design — we store the result, not the evidence.

## What This Is

This is a proposed design. If someone contributes a better approach that achieves the same guarantees (one-human-one-account, privacy-preserving, scalable), we adopt it. The principle is fixed. The implementation is open to improvement.
