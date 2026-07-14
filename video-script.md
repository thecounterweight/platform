# The Counterweight — Video Script

**Format:** Speaking to camera. ~10 minutes.

---

## 1. Who I am and the problem (2 minutes)

I'm Manoj Sihag. I'm from a village called Hardaswali in Rajasthan, India. Professionally I work as a DevOps engineer at a SaaS company.

I've noticed some issues with the internet platforms we use today.

First — they're full of bots. Fake reviews, fake discussions, sockpuppets pushing agendas, coordinated manipulation. You can't tell what's real anymore.

Second — these platforms were not built to serve us. They were built to maximise shareholder value. Our data gets sold, our content gets harvested, and we have no say in any of it.

I might have a solution for a few of these.

I'm proposing that we build our own multi-utility platform. Open-source. A platform where every user is a verified unique human — without the platform ever receiving or storing your personal information. And a platform that is governed by its users.

---

## 2. How identity works (1.5 minutes)

You verify through a KYC provider on your device. The platform receives only a cryptographic proof that you're real and unique. Not your name. Not your ID number. Not your photo.

To prevent one person from creating multiple accounts, your phone and our server jointly compute a deduplication hash using a cryptographic protocol called OPRF. The server never sees your ID number. Your phone never sees the server's key. The output is always the same for the same person, but neither side can reverse it back to your identity.

One human, one account. No identity database to breach or sell.

---

## 3. Governance and how it's protected (2 minutes)

One person, one vote. Platform policies, moderation rules, leadership — decided by user vote. Every position of responsibility is elected and removable.

How do we make sure this can't be undone?

We start a company that holds the platform. The company transfers a golden share to an independent, irrevocable purpose trust. The trust can veto any sale, any mission change, any removal of user protections. Its purposes are defined at creation and cannot be changed — not by the founder, not by investors, not by anyone.

Users elect an advisory board whose recommendation binds the trust. If the board says veto a sale, the trust vetoes. If the board says this doesn't violate the mission, the trust stands down.

I explored making users legal co-owners through an LLC or a cooperative. It doesn't work at internet scale — no precedent exists for a million-member LLC, and the filing complexity alone would kill it. The trust model gives the same structural protection without requiring every user to be a legal co-owner.

---

## 4. What you do here — discussion (1.5 minutes)

I mentioned multi-utility. Here's the first one.

A place where people can discuss, chat, and organise with other real people. Not bots. Every person in the room is verified real.

You choose how to show up — anonymous or public. Anonymous means verified but pseudonymous, full privacy, full access. Public means a reputation ledger that builds over time — what you've contributed, communities you belong to, certifications you've earned.

Real-time translation across languages. Self-hosted — no user content leaves our infrastructure. Someone posts in Tamil, someone reads it in Hindi. No language silos.

Group chat, voice, video. No separate app needed. Communities organise where they already are.

---

## 5. How we make money — the marketplace (2 minutes)

We need money to build and run this platform.

The second utility — a marketplace. We aggregate products from Amazon, Flipkart, and other online sellers through their affiliate APIs. Plus community sellers listing directly.

People rate and review these products — with proof of purchase, or as an expert on the subject matter. Criteria-based, not just star ratings.

Other users can tell the platform they bought based on a recommendation — with proof of purchase. And then rate how true or helpful it was. Did this actually help me make a good decision?

Over time, this builds trust and quality signals that guide buyers. Good craft and value for money get surfaced. Misleading reviews fade.

The platform earns affiliate revenue. Reviewers who genuinely help the community — whether with positive or negative reviews — also get a share. No ads. No data selling.

---

## 6. What else becomes possible (1 minute)

Once verified identity is the foundation, we can build many things on top of it.

Contracts between verified people — freelancer agreements, rental contracts, loans, services. Digitally signed, legally enforceable. Built-in dispute resolution.

Zero-knowledge proofs — prove you're 18+, or a unique human, or located somewhere, without revealing anything else. Others can build on this identity layer without anyone sharing data.

Go through the docs if you're curious. The full architecture is public.

---

## 7. How it gets built (1 minute)

This is open-source. The architecture, identity design, governance model, compensation model — all public on GitHub. These are starting proposals. Open to being rewritten by whoever shows up.

Every contribution is tracked on a public ledger from day one. When revenue flows, it flows back to everyone who helped build — proportional to what they built, weighted by complexity and how early they joined.

I can't build this alone. If you're an engineer, designer, lawyer, translator — or anyone who wants to build something that isn't owned by shareholders — the link is below.

Read the docs. Break the design. Or start building.

---

**Estimated runtime: ~10 minutes**
