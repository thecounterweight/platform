# Identity Verification

How we ensure one person = one account without compromising privacy.

## The Requirement

Every account on the platform must belong to a unique, real human. This is non-negotiable — voting, investment, certification, and community trust all depend on it.

## Proposed Design (Three Layers)

### Layer 1 — Government Identity Verification

Most governments provide digital identity APIs to verified institutions:

- **India:** DigiLocker, Aadhaar eKYC
- **EU:** eIDAS framework
- **UK:** GOV.UK Verify
- **US:** ID.me, state DMV integrations
- **Others:** Added as the platform expands to each country

The platform registers as a relying party in each jurisdiction and verifies users through these official APIs. This is the same mechanism airlines, banks, and fintech companies use.

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

## Cost

Identity verification APIs charge per check (₹5-20 in India, $1-3 elsewhere). The user pays the verification fee as a one-time cost during registration. This also serves as a minor friction barrier against frivolous account creation.

## Account Recovery

If you lose access (phone lost, number changed):

1. Re-verify with government ID through the same API.
2. Complete a face scan matching your original verification.
3. Bind a new phone number.

This prevents someone from creating a second account under the guise of "recovery" — you must prove you're the same person.

## Age Threshold

- Basic community features (discussion, marketplace browsing): 16+
- Investment features (backing businesses, pooled funds): 18+ (or legal age of contract in jurisdiction)
- Evaluator/certifier roles: 18+

Age is verified through the government ID layer during registration.

## People Without Government ID

This is an open question for the community to decide. Options include:

- Community vouching (N existing verified members vouch for a person) for basic access
- NGO-issued identity documents accepted in specific regions
- Limited access tier (can participate in discussion, cannot invest or vote)

The principle is clear: one real person, one account. The method for people outside government ID systems needs community input and may vary by region.

## What This Is

This is a proposed design. If someone contributes a better approach that achieves the same guarantees (one-human-one-account, privacy-preserving, scalable), we adopt it. The principle is fixed. The implementation is open to improvement.
