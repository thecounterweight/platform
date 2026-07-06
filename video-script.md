# The Counterweight — Video Script

**Format:** Speaking to camera. ~20 minutes. Each sentence earns its place.

---

## 1. Opening (30 seconds)

Should we build a utility platform that's owned by its users?

I'm proposing one. It's called The Counterweight. One architectural decision at the foundation — verified identity — makes trust work differently on the internet. I want to show you how it works and see if you want to build it with me.

---

## 2. The Core Idea (3 minutes)

The platform I'm proposing will be owned by its users. By design, not by promise. Every decision about how the platform works is made by the people on it. That's written into the project's constitution.

What makes this possible is one architectural decision: every person on the platform is a verified, unique human being. One person, one account. Proven via government ID APIs. We store only a non-reversible hash — not your data, not your name, not your face. A mathematical proof that you exist and that you haven't registered before. That's it.

Your data is your sovereignty. We store the minimum needed to prove you're real. Everything else remains yours.

Democratic governance on the internet has been extremely difficult because of Sybil attacks — one person creates a thousand accounts and outvotes everyone. Decentralized social networks, federated protocols, blockchain projects — they solved communication, data portability, censorship resistance. They didn't focus on identity.

This platform does. And everything else follows from it.

---

## 3. What We Build First (4 minutes)

What does this enable?

### Discussions become real.

Every voice in a conversation belongs to a real person. Every opinion comes from someone with a real stake. And there's no compulsion to put your name behind every opinion — you can go anonymous as well. The system knows you're real, but others don't have to know who you are. That alone changes how we talk to each other online.

### Reviews become trustable — and that's how we survive.

If we're not selling data and not running ads, how does this platform sustain itself?

We aggregate products from Amazon, Flipkart, and other platforms. Users come to us for reviews they can trust — because every reviewer has proof of purchase and a reputation that accumulates over time. When they click through and buy, we earn an affiliate commission.

That's it. No on-platform payments to process. No inventory to manage. Trusted reviews, and the revenue that follows.

Reviewers are ranked by accuracy — how often their assessments align with actual buyer experience. Other verified buyers rate reviews as helpful, accurate, or misleading — so the best information rises naturally. There may be one or two clearly-labeled sponsored slots, but beyond that, the algorithm is influenced only by quality.

### Revenue from day one.

The marketplace aggregates products from Amazon, Flipkart, and other platforms via affiliate APIs. When someone buys through our links, we earn a commission. Same products. Better reviews. Revenue flows immediately. We get the funding to survive.

Community sellers list alongside aggregated products. Free to list. They pay a small commission only when a sale happens — the platform brought them the customer. Buyers never pay a platform fee.

That's the core loop: identity makes reviews trustable, trustable reviews make the marketplace useful, the marketplace generates revenue, revenue pays the people who build it. Each piece sustains the next.

---

## 4. Funding (3 minutes)

A platform like this needs to sustain itself without compromising its principles. Here's how.

### How we raise money to build this.

Anyone can invest any amount. It's recorded permanently — amount, timestamp, identity. The money goes to work immediately: infrastructure, development, operations.

What investors get is a time-bounded share of revenue. Not equity. Not ownership. A percentage of revenue for a defined period, then it ends. The platform stays community-owned. Early investors take more risk — they get structurally better terms for showing up when nothing existed.

Once the platform has enough members, the terms of every funding round — the percentage, the duration, the cap — are decided by a bicameral vote. Investors and users each get equal say. Both sides must agree or the round doesn't happen.

Early on, before governance is active, investors are protected by constitutional caps and a simple guarantee: if the two sides can't agree on terms, an independent body makes a binding decision based on evidence. No early investor gets left in limbo.

No venture capital. No equity. No one can acquire ownership that overrides the collective. The legal entity is a cooperative — members govern it democratically. No individual owns it. No individual can sell it.

### How builders get paid.

Every contribution is tracked on a public ledger — code, design, documentation, legal research, moderation. Early contributors take more risk, so they earn multiplied compensation. When revenue flows, it flows to the people who built this — proportional to what they contributed.

How revenue gets split — between builders, investors, operations, and community reinvestment — is written into the constitution. The ratios are decided democratically and protected by supermajority. The details are in the docs.

---

## 5. What Becomes Possible Next (3 minutes)

Once the foundation is working — identity, reviews, revenue — the same architecture enables more.

### Governance becomes real.

Every role with power on this platform — moderators, community leads, project leads — is elected and removable. Sixty percent vote, after a seven-day discussion period. Every role re-confirmed every two years. No one accumulates power that can't be taken away.

### Moderation works differently.

If someone gets banned, they've lost their only account. Their reviews, their reputation, their connections — gone. The consequence is proportional because the identity is real. One identity, one reputation, one stake in the community.

### Investment becomes accountable.

The platform facilitates signed agreements between verified people. Every transaction is recorded. Every return is traceable. The platform never holds your money — it makes it possible for people to trust each other enough to transact directly.

---

## 6. The Ecosystem (2 minutes)

Now here's where it gets bigger than one platform.

The identity layer is open infrastructure. We provide the foundation — verified identity, governance primitives, payment rails. Anyone can build on top of it.

What becomes possible when verified identity is a shared primitive: Peer-to-peer lending with enforceable contracts. Freelance marketplaces with portable reputation. Local classifieds where every seller is accountable. Co-op management with legitimate one-person-one-vote governance. Mutual aid networks. Citizen journalism with verifiable reporters. Whistleblowing — verified but anonymous.

Each of these is someone else's project. Running on their own server. Using the shared identity network. We don't control them. We don't decide what gets built.

Community-serving projects use the identity layer free. Revenue-generating services pay a proportional fee back to the network. The fee ceiling is a constitutional bound. The specific rate is decided democratically. The infrastructure sustains itself from the commercial value it enables.

Any project that needs "every user is real" can plug in. Trust by design becomes available as a shared primitive.

---

## 7. Where We Are (2 minutes)

Everything I've described is proposed, documented, and internally consistent — as far as I can tell. Identity verification. Payments. Governance. Investment model. Marketplace strategy. Builder compensation. The ecosystem model. All of it is public, all of it is open, all of it is ready to be challenged.

I've run four rounds of critical review against the entire system — looking for contradictions, legal risks, economic flaws, governance failures. I haven't found unresolved contradictions, but I'm one person. That's why this is open. The design questions that remain are implementation-level — they'll be resolved by the people who build each piece.

The code scaffold exists. Next.js, TypeScript, PostgreSQL, Prisma. Four modules — identity, marketplace, discussion, governance. API routes. Database schema. A contributor can clone the repo and start building today.

But I want to be honest with you. This is a proposal. Not a finished product. Not a company. Not a funded startup. It's an idea that I believe is strong enough to attract the people who can make it real. I could be wrong. But the design is open — you can read every document, poke every hole, and tell me where I'm wrong. That's the point.

---

## 8. What I Need (1.5 minutes)

I need engineers. Backend, frontend, security, infrastructure. The problems here are hard and interesting — identity verification without surveillance, parameter-based review systems, real-time discussion at scale, affiliate API integration, trust score algorithms.

I need designers. Someone who can make a complex system feel simple. Mobile-first. Works on a cheap phone on a slow connection.

I need lawyers. Securities law, cooperative law, data protection. Any jurisdiction. This platform will operate globally and it needs legal infrastructure designed in from the start.

I need economists. People who can stress-test the revenue model, the investor caps, the compensation structure.

I need domain experts. People who can define what "quality" means in their field and volunteer as the first evaluators.

And I need people who just believe this should exist. Who'll leave their name and say — I'm in. Build this and I'll use it.

Every contribution is tracked. When revenue flows, contributors get paid proportional to what they built. Early contributors take more risk. They get multiplied compensation. The details are documented and public.

---

## 9. Close (1 minute)

This is The Counterweight. Publicly owned infrastructure. Community-governed. Open-source. Verified identity at the foundation. Everything else built on top by the people who use it.

If you think this should exist — the link is below. Read the docs. Break the design. Pick up an issue. Or just leave your name and say you're in.

If you think this should exist — help us build it.

---

**Total estimated runtime at natural speaking pace: 18-22 minutes**
