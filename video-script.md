# The Counterweight — Video Script

**Format:** Speaking to camera. ~10 minutes.

---

## 1. Who I am and the problem (1.5 minutes)

I'm Manoj Sihag. I'm from Hardaswali village in Rajasthan, India. Professionally I work as a DevOps engineer at a SaaS company.

I might have a solution for one of our problems.

The internet is filled with bots. There is no platform free of them. Fake reviews, fake discussions, sockpuppets pushing agendas, coordinated manipulation. You can't tell who's real. And every platform that hosts user-generated content has this problem — because none of them verify that the person behind the account is a real, unique human.

I propose we build one. Open-source. A platform where every user is a verified unique human — without the platform ever receiving or storing personally identifiable information.

---

## 2. How identity works (2 minutes)

You verify through a KYC provider on your device. The platform receives only a cryptographic proof that you're real and unique. Not your name. Not your ID number. Not your photo.

To prevent duplicates — one person creating multiple accounts — your phone and our server jointly compute a deduplication hash using a cryptographic protocol called OPRF. The server never sees your ID number. Your phone never sees the server's key. The output is always the same for the same person, but neither side can reverse it back to your identity.

One human, one account. No identity database to breach or sell. No surveillance.

---

## 3. What this enables (2 minutes)

People can chat, discuss, organise — and everyone is a verified unique human. No bots. No fake accounts. Every interaction is with a real person.

You choose how to show up. Anonymous — verified but pseudonymous, full privacy. Or public — a reputation ledger that builds over time. What you've contributed, communities you belong to, certifications you've earned. Full access either way.

Real-time translation across languages. Self-hosted — no user content leaves our infrastructure. Someone posts in Tamil, someone reads it in Hindi. No language barriers.

And the platform is governed democratically. One person, one vote. Platform policies, moderation rules, leadership — decided by user vote. Every position of responsibility is elected and removable. No permanent admins. No one person with unchecked authority.

---

## 4. How this is protected (1.5 minutes)

This isn't a Terms of Service promise. It's written into the platform's constitution.

An irrevocable purpose trust holds a golden share in the company. Independent trustees — not the founder, not investors — can veto any sale, any mission change, any removal of user protections. The trust's purposes are defined at creation and cannot be changed.

Users elect an advisory board whose recommendation binds the trust. If the board says veto a sale, the trust vetoes. If the board says this doesn't violate the mission, the trust stands down. Similar to the structure Patagonia and Signal use.

Once the platform is self-sustaining, an elected board takes over governance. The founder retains operational authority until the board votes otherwise. I can stand for election like anyone else.

---

## 5. How we make money (2 minutes)

We need money to build and run this platform.

We have a marketplace. Products listed from Amazon, Flipkart, and other platforms via affiliate APIs. Plus community sellers listing directly.

Users with proof of purchase — or experts in the subject matter — review these products. Criteria-based, not just star ratings.

Other users can tell the platform they bought based on a recommendation. With proof of purchase. Then they rate the review — how helpful was it. Did this actually help me make a good decision.

Over time this builds trust and quality signals. Good craft and value for money get surfaced. Misleading reviews fade. The system rewards genuinely helpful people — whether their review was positive or negative.

We earn affiliate revenue from purchases made through the platform. No ads. No data selling. That revenue pays our builders and keeps the lights on. Reviewers who genuinely help the community also get a share of it — proportional to how helpful they've been.

---

## 6. What becomes possible with verified identity (1.5 minutes)

Once this identity layer exists, it becomes infrastructure others can build on.

Contracts between verified people. Freelancer agreements, rental contracts, loans between friends, service agreements. Digitally signed, legally enforceable, stored immutably. Built-in dispute resolution. No lawyer needed for a simple rental agreement.

Zero-knowledge proofs. You generate a proof on your device that says "I'm 18+" or "I'm a unique human" without revealing anything else. Third parties verify it mathematically. No data exchange.

Someone builds a lending platform — they verify borrowers are real. A freelance marketplace — portable reputation without revealing identity. Local classifieds where sellers are accountable. Co-op governance with legitimate one-person-one-vote.

Community-serving projects use the identity layer free. Revenue-generating services pay a proportional fee.

---

## 7. Come build this (1 minute)

I can't build this alone.

This is open-source. The architecture, identity design, funding model, compensation model — all public on GitHub. These are starting proposals. Open to being rewritten by whoever shows up.

Every contribution is tracked on a public ledger from day one. When revenue flows, it flows back to everyone who helped build — proportional to what they built, weighted by complexity and how early they joined.

If you're an engineer, designer, lawyer, translator, or anyone who wants to build something that isn't owned by shareholders — the link is below.

Read the docs. Break the design. Or start building.

---

**Estimated runtime: ~10 minutes**
