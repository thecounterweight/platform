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

### Deduplication — How "One Person, One Account" Actually Works

The one-account guarantee requires detecting if someone has already registered. Different strategies for different situations:

**Primary (India — 95% of users): HMAC of Aadhaar number**

1. User verifies via KYC provider (Digio/Signzy). Provider returns the Aadhaar number as part of verification.
2. Platform immediately computes HMAC-SHA256(server_secret_key, aadhaar_number).
3. Raw Aadhaar number is discarded — never stored, never logged.
4. The HMAC is checked against existing records. Match = duplicate account attempt, rejected.
5. No match = new user, HMAC stored.

Why HMAC and not plain hash: Aadhaar is 12 digits (10^12 possibilities) — a plain SHA-256 hash is brute-forceable in hours. HMAC with a secret key means the hash cannot be reversed without the key. Key is stored in a hardware security module (HSM) or secrets manager, separate from the database.

**Fallback (no Aadhaar, international users): Face deduplication (1:N matching)**

For users verifying with non-Aadhaar documents (Voter ID, Passport, PAN, international IDs):

1. User completes verification + face scan via KYC provider.
2. Provider performs 1:N face matching — checking the new face against ALL previously registered faces in their system.
3. Match found = duplicate account attempt, rejected.
4. No match = new user, enrolled in provider's face registry.

The platform never stores face embeddings or biometric templates. The KYC provider maintains the face registry and performs dedup checks — returning only pass/fail to the platform. This creates provider lock-in for these users (face embeddings aren't portable between providers), but since Aadhaar-based dedup covers 95% of Indian users, the lock-in affects only edge cases.

**Why not use one method for everyone:**
- HMAC-of-ID-number is simpler, cheaper, provider-portable, and privacy-preserving — but requires a single universal ID number per country.
- Face dedup works across any document type but is more expensive (₹2-5 per 1:N check), creates provider lock-in, and depends on third-party biometric storage.
- The combination gives robust coverage: primary method is portable and cheap, fallback handles edge cases.

**International expansion:** Each country gets a primary dedup ID where one exists (SSN in US, National Insurance number in UK, BSN in Netherlands). Face dedup is the universal fallback for countries without a single dominant identifier.

**Provider switching (primary path):** The HMAC is stored in your database, computed with your key. If you switch KYC providers, deduplication continues working — the HMAC doesn't depend on which provider verified the user. Only face-dedup users are affected by provider changes.

### Layer 2 — Face Scan (Liveness Check)

For high-stakes actions (voting, large investments, governance decisions), communities can require a face scan that matches the government ID photo.

- Proves the person performing the action is the verified account holder
- Prevents account selling to bot farms
- Optional per community — not forced on every interaction
- Processed in real-time, biometric data discarded immediately after pass/fail

**What this proves:** The person using the account right now is the person who registered it.

### Layer 3 — OTP (Bot Friction + Second Factor)

One phone number per account at registration. OTP is a second factor, not the primary auth.

- Makes scaling attacks expensive (each fake account needs a unique SIM)
- Acts as second factor for login on new devices (not primary authentication)
- Standard SMS or authenticator app

**What this does NOT do:** OTP alone does not grant account access. A recycled or swapped SIM cannot be used to take over an account.

**Login model:**
- Primary auth: password or passkey (set at registration)
- Second factor: OTP on new devices only
- Sessions: long-lived on trusted devices — no OTP required for every login
- Sensitive actions (voting, investment, governance): face scan (Layer 2)

**SIM recycling / swap protection:**
- Login from new device requires password + OTP (not OTP alone)
- If OTP delivery fails (number recycled), account remains accessible via password on existing sessions
- Rebinding to a new phone number requires full re-verification (gov ID + face scan)

**Shared phone households:**
- Account is tied to person (gov ID), not to phone
- Phone is the current login channel, not the identity anchor
- If someone later gets their own device, they rebind via gov ID + face scan

**What this proves:** Bot farms can't operate at scale without massive SIM acquisition. Legitimate users aren't locked out by SIM issues because identity lives in Layer 1, not Layer 3.

### Combined Effect

To game the system you would need: a real government ID + a face that matches it + a unique phone number — per account. This is effectively one-human-one-account.

## Privacy Guarantees

These are non-negotiable platform commitments:

| Guarantee | What it means |
|-----------|---------------|
| No storage of raw documents | The platform verifies and discards. No passport scans, no Aadhaar numbers stored. Raw ID numbers are processed in memory and immediately discarded after HMAC computation. |
| No selling or sharing | Identity data never leaves the platform. Never sold to third parties. Never used for advertising. |
| No profiling | Verification is a yes/no gate. The platform doesn't store your address, age, gender, or anything beyond "verified: yes." |
| Minimum data principle | Only an HMAC (keyed hash) of your ID number is stored — enough to prevent duplicate accounts, nothing more. The raw number is never persisted. |
| Non-reversible storage | Even if the database leaks, no one can reverse the HMAC to your ID number without the secret key (stored separately in HSM/secrets manager). |
| Face data: platform never stores | For face-dedup users, the KYC provider maintains face embeddings for 1:N matching. The platform receives only pass/fail — no biometric data touches our systems. |
| Liveness checks not retained | Liveness checks for high-stakes actions produce pass/fail. Biometric data is processed in real-time by the provider and discarded. |
| Open-source verification logic | Anyone can audit exactly what data flows where. No black boxes. |

## Anonymity vs Verification

The platform knows you're real. Other users don't have to.

- You can post, comment, and participate under a pseudonym.
- The system guarantees to others: "this is a verified unique human" — without revealing who.
- You choose when to attach your real identity to your actions.
- Investment contracts require real names (legal necessity). Community discussion does not.

This is pseudonymous participation with verified-human backing. You get privacy without enabling manipulation.

## Verification = Membership

Completing identity verification automatically makes you a member of The Counterweight LLC (Wyoming, USA). You sign a digital Joinder Agreement as part of the verification flow — this is the legal contract that grants you membership.

**What happens at verification:**
1. KYC provider confirms your identity
2. You're shown the Joinder Agreement: "By signing, you become a member of The Counterweight LLC. This gives you one vote in governance decisions and a share of platform revenue."
3. You sign digitally (enforceable under the US ESIGN Act)
4. You're enrolled as a member

**What membership gives you:**
- Legal co-ownership of the platform (membership in the LLC)
- One vote in all governance decisions (elections, amendments, no-confidence)
- Right to stand for elected positions (moderator, safety team, community lead)
- Revenue-share rights as defined in the Operating Agreement
- No citizenship or residency requirement — works for any nationality

**Why this works:**
- No separate "join" process — verification IS joining
- Every verified user is an owner by default
- The Operating Agreement encodes this: "All individuals who complete identity verification and sign the Joinder Agreement are automatically enrolled as members"
- The ownership promise is legally real — enforced by Wyoming LLC law, not just words on a website
- International by design — no FEMA restrictions, no per-country cooperative registration needed

## Cost

Identity verification APIs charge per check (₹5-20 in India, $1-3 elsewhere). A nominal membership fee (₹10-100) is bundled into the same one-time payment. This covers: verification cost + LLC membership enrollment. It also serves as a minor friction barrier against frivolous account creation.

## Account Recovery

**Phone lost or number changed (still have password):**
1. Log in with password on a new device.
2. Bind a new phone number (requires face scan to confirm identity).

**Password forgotten (still have phone):**
1. OTP to existing number + face scan → reset password.

**Both lost (phone and password):**
1. Re-verify with government ID through the same API.
2. Complete a face scan matching your original verification.
3. Set new password, bind new phone number.

In all cases, you must prove you're the same person. A recycled SIM alone never grants access — the new SIM owner cannot log in without the password, and cannot reset the password without passing a face scan against the original verified identity.

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

Verification produces a pass/fail and allows the platform to compute a deduplication HMAC. No personal details are extracted or stored from the ID. The raw ID number is processed in memory and immediately discarded — only the irreversible HMAC is retained.

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
- HMAC of the primary ID number (for deduplication — irreversible without the secret key, which is stored separately in HSM)
- Verification status (pass/fail)
- Timestamp
- Optional profile data (only what the user explicitly provides)

**What the platform does NOT store:**
- Raw government ID numbers (processed in memory, discarded immediately after HMAC computation)
- Government ID documents or images
- Face scan data or biometric templates (provider retains these for face-dedup users only)
- Any other data extracted from the ID document

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
