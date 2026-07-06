# Legal Structure Research: Community Ownership Without Traditional Cooperative

Research into whether a platform can achieve community ownership using legal contracts between members instead of (or alongside) a traditional cooperative or company structure.

## The Core Question

Can The Counterweight — a platform where every verified user is a co-owner — achieve this through bilateral legal contracts rather than incorporating as a cooperative? The constraints:

- International membership (India first, then global)
- No startup capital for expensive legal structures
- Democratic governance (one person, one vote)
- Revenue distribution to members
- Must be able to own assets, sign contracts, hold bank accounts

## Short Answer

**No.** Pure bilateral contracts between members cannot substitute for a legal entity. You need *something* incorporated somewhere. The question is *what* and *where*.

The reason is simple: a bundle of contracts between individuals cannot own property, hold a bank account, sign a lease, register a domain, enter into affiliate agreements, or limit liability. Every payment processor (Razorpay, Stripe) requires a legal entity. Every affiliate program (Amazon, Flipkart) requires a legal entity. You cannot operate a platform on contracts alone.

But — and this is the key insight — **the entity can be minimal while the contracts do the heavy lifting.** The entity holds assets and signs third-party agreements. The membership contracts define ownership, governance, and revenue rights. This is how most DAOs, platform cooperatives, and digital organizations actually work.

---

## Option-by-Option Analysis

### 1. Unincorporated Association

**What it is:** A group of people bound by mutual agreement, without formal incorporation. Common in UK for clubs, societies, voluntary organizations.

**Legal standing:**
- **India:** Recognized under general contract law but has no separate legal personality. Cannot own property in its own name (must be held by trustees). Cannot sue or be sued in its own name. Can open a bank account at some banks (with trustee signatories). Registered under Societies Registration Act 1860 gives slightly better standing but that's technically a different structure.
- **UK:** Well-established legal concept. Can own property via trustees. Can open bank accounts. Members have unlimited personal liability.
- **Internationally:** Varies wildly. No consistent legal framework.

**Feasibility for The Counterweight:** NOT VIABLE as primary structure.
- Cannot sign affiliate agreements in its own name
- Members face unlimited personal liability
- No legal personality means every contract is technically between individual trustees and the counterparty
- Cannot scale to thousands of members without incorporation
- Payment processors will not onboard an unincorporated association

**Verdict:** Dead end. You need incorporation.

---

### 2. DAO Legal Wrappers (Non-Crypto)

**What exists:**
- **Wyoming DAO LLC (2021):** LLC organized as a DAO. Can be member-managed. Smart contracts can govern. Requires at least one Wyoming-registered agent. Annual filing ~$100. Foreign members permitted.
- **Marshall Islands DAO Act (2022):** Recognizes DAOs as legal entities (as LLCs or non-profits). Designed for borderless organizations. Very permissive.
- **Vermont BBLLC:** Blockchain-based LLC. Similar to Wyoming but less developed ecosystem.
- **Tennessee DAO Act (2022):** Similar to Wyoming.
- **Panama Foundation + DAO:** Used by some projects. Foundation holds assets, DAO governs.

**Key insight:** These laws don't require blockchain or cryptocurrency. "DAO" in the legal sense just means "member-governed digital organization with algorithmic/programmatic rules." You can use a Wyoming DAO LLC with traditional software governance — no tokens needed.

**Legal standing (Wyoming DAO LLC):**
- Full legal personality — can own assets, sign contracts, sue/be sued
- Limited liability for members
- Can have unlimited members
- Operating agreement defines governance rules (one person one vote is fine)
- Can distribute profits to members
- Recognized by US banking system
- Foreign members permitted (no citizenship requirement)
- Can operate internationally

**Costs:** ~$100 filing fee + ~$100/year registered agent. Cheapest viable option.

**Limitations:**
- US tax obligations (file Form 1065 partnership return if multi-member)
- May need US bank account (but can use Wise/Mercury for international operations)
- Indian regulatory view on members participating in a foreign LLC is ambiguous under FEMA — members receiving revenue share from a US entity is likely classified as "other current account transaction" (permitted) rather than "capital account transaction" (restricted)
- For Indian operations, you likely still need an Indian entity to handle UPI payments and local compliance

**Feasibility for The Counterweight:** VIABLE as global holding entity, paired with an Indian operating entity.

---

### 3. Platform Cooperatives with International Membership

**Real-world examples:**

- **Stocksy United:** Canadian worker cooperative (BC Cooperative Association Act). Members are international photographers. Incorporated in British Columbia. International members sign membership agreements — they are "associate members" or full members depending on jurisdiction. The Canadian entity is the legal container; membership contracts handle the cross-border relationship.

- **Resonate:** Initially a multi-stakeholder cooperative incorporated in Ireland (Industrial and Provident Societies Act). Has international members. Ireland was chosen because EU jurisdiction, English-speaking, cooperative-friendly law.

- **Up & Go:** US worker cooperative (New York cooperative corporation).

- **Platform6:** UK cooperative development body. Uses Community Benefit Society structure.

**How they handle international membership:** The cooperative is in one jurisdiction. International members join by signing a membership agreement with that entity. They are either:
- Full members (if the jurisdiction's cooperative law allows foreign members — most do)
- Associate/user members (if restrictions exist)

**The pattern:** Pick a cooperative-friendly jurisdiction, incorporate there, let the membership agreement define rights regardless of where members live.

**Key lesson from Stocksy:** They chose Canada because Canadian cooperative law explicitly allows international members, has no cap on membership size, and permits profit distribution to members. The operating agreement (membership contract) is what gives members their rights — the cooperative structure just provides the legal container.

---

### 4. Contractual Joint Ventures / Partnership Deeds

**What it is:** A network of bilateral contracts creating mutual rights and obligations between parties. No separate legal entity.

**Can it create collective ownership?** Theoretically yes — you can have a contract that says "you own 1/N of this thing." But:

- **India:** A partnership (Indian Partnership Act 1932) is limited to 50 partners (for non-banking businesses). Beyond 50, you need a company or LLP.
- **LLP (India):** Limited Liability Partnership Act 2008. No cap on partners. Foreign partners permitted (with FEMA compliance — requires RBI approval for FDI in LLP in most sectors, though automatic route available for some). But LLPs are not designed for thousands of members.
- **Bilateral contract networks:** Every member signs a contract with... whom? With 10,000 members, you need 10,000 contracts with a central entity, not 50 million bilateral contracts. So you're back to needing an entity.

**Feasibility for The Counterweight:** NOT VIABLE as standalone structure.
- No legal personality for the collective
- Cannot own assets collectively without a trust or entity
- Partnership cap (50 in India) kills it for scale
- LLP requires RBI approval for foreign partners and isn't designed for mass membership
- Even if purely contractual, you need a counterparty entity

**Verdict:** Contracts are necessary but insufficient. They define rights. An entity enforces and holds them.

---

### 5. UK Community Interest Company (CIC)

**What it is:** A limited company designed for social enterprises. Has an "asset lock" — assets must be used for community benefit and cannot be distributed to members on winding up.

**Legal standing:**
- Full legal personality — owns assets, signs contracts, sues/is sued
- Limited liability for members
- Can be limited by guarantee (no share capital — members pay £1) or limited by shares
- Regulated by CIC Regulator (light touch)
- Must file annual Community Interest Statement

**International membership:**
- Non-UK residents can be members and directors. No restriction.
- No cap on number of members.

**Democratic governance:**
- Can have one-member-one-vote in articles of association
- Directors elected by members
- Articles define governance rules with full flexibility

**Revenue distribution:**
- CIC limited by shares: can pay dividends, capped at 35% of distributable profits (the "dividend cap")
- CIC limited by guarantee: cannot distribute profits to members at all
- The dividend cap is a hard limit — you cannot distribute more than 35% to members as dividends
- But: you can pay members for services rendered (e.g., revenue share for reviewers is "payment for service," not dividend)

**Asset lock:** On winding up, remaining assets go to another CIC, charity, or community — not to members. This aligns with The Counterweight's "no one can sell it" principle.

**Costs:**
- £27 to register (Companies House)
- ~£100/year for registered office service
- Annual filing (free via Companies House)
- No minimum capital requirement

**Limitations:**
- The 35% dividend cap may be too restrictive for revenue share to investors
- "Payment for services" route for member revenue share is fine for contributors/reviewers but may not cover pure investors
- UK-centric regulatory environment (CIC Regulator)
- Post-Brexit, less seamless for EU operations (but no legal barrier to international members)

**Feasibility for The Counterweight:** PARTIALLY VIABLE.
- Excellent for the "community ownership" wrapper (cheap, internationally accessible, democratic, asset-locked)
- The dividend cap is a problem for investor revenue share
- Works well as the community governance entity; less well as the entity that distributes investment returns
- Could be paired with a separate vehicle for investment activities

---

### 6. UK Community Benefit Society (CBS / BenCom)

**What it is:** Registered under Co-operative and Community Benefit Societies Act 2014. A type of registered society (formerly "Industrial and Provident Society"). Specifically designed for organizations conducted for community benefit.

**Legal standing:**
- Full legal personality
- Limited liability
- Can issue withdrawable share capital (unique feature — members buy shares, can withdraw them)
- Regulated by FCA (Financial Conduct Authority)

**International membership:**
- No legal restriction on foreign members
- Members can be anywhere in the world

**Democratic governance:**
- One member, one vote is the legal default
- Cannot weight votes by shareholding
- Inherently democratic

**Revenue distribution:**
- Can pay interest on share capital (capped — usually 2-3% above base rate, decided by the society)
- Cannot distribute profits as dividends
- Can pay members for services
- Surplus must be used for community benefit

**Asset lock:** Available (optional but common for BenComs). Prevents asset stripping.

**Costs:**
- ~£40 FCA registration fee
- Need model rules (templates available from Co-operatives UK for ~£100-200 or free from Plunkett Foundation)
- Annual return to FCA (~£40)

**Limitations:**
- Interest on shares is minimal (not suitable for significant investor returns)
- Explicitly designed to NOT distribute surplus to members
- Good for governance, bad for the revenue-distribution model The Counterweight wants
- FCA regulation adds compliance overhead

**Feasibility for The Counterweight:** PARTIALLY VIABLE for governance layer; NOT VIABLE for revenue distribution.

---

### 7. US LLC with Operating Agreement

**What it is:** A flexible US entity where the Operating Agreement (OA) defines all governance, profit distribution, and member rights. The LLC itself is just a shell — all the substance is in the OA.

**Delaware LLC:**
- No cap on members
- Operating agreement is the supreme governance document
- Can specify one-person-one-vote
- Can specify any profit distribution formula
- Foreign members permitted
- No requirement for members to be US persons
- $300/year franchise tax
- No state income tax (pass-through to members)

**Delaware Series LLC:**
- A single LLC that contains multiple "series" — each series is a separate liability shield
- Could theoretically have one series per jurisdiction or per activity
- Reduces filing fees (one LLC, multiple series)
- Not recognized in all states or internationally
- Adds complexity without clear benefit for The Counterweight

**Wyoming LLC:**
- $100 filing fee, $60/year
- Most privacy-friendly state
- DAO LLC variant available (see section 2)
- Same flexibility as Delaware but cheaper

**How it works at scale (thousands of members):**
- Legally, a 10,000-member LLC is fine. There's no cap.
- Practically, the operating agreement must be signed by every member (or members join by signing an "adoption agreement" / "joinder" that binds them to the existing OA)
- Governance happens per the OA — can be fully digital, one-person-one-vote
- Profit distribution per the OA — can be equal share, contribution-weighted, or any formula
- Federal tax: files Form 1065. With 10,000 members, issues 10,000 K-1s. This is a real administrative burden.
- International members: receive K-1s, may need US ITIN, subject to US withholding tax on their share (typically 30% for non-US persons, reducible by treaty)

**The tax problem for international members:**
- US partnership taxation means every member (regardless of where they live) has US-source income
- Non-US members face 30% withholding (reducible to 15% under some treaties)
- This is a significant cost that makes it unattractive for small revenue shares
- A member receiving $50/year in revenue share loses $15 to US withholding — not worth the paperwork

**Feasibility for The Counterweight:** VIABLE for structure but PROBLEMATIC for international tax.
- The legal flexibility is perfect
- The operating agreement can encode everything The Counterweight wants
- But US tax obligations on international members make it expensive and bureaucratic at scale
- Works much better if most members are US-based (they are not)

---

### 8. Foundation Model (Netherlands Stichting, Cayman Foundation Company)

**Netherlands Stichting:**
- A foundation with no members and no shareholders (by default)
- Used by Ethereum Foundation, GNOME Foundation, many blockchain projects
- Governed by a board (bestuur)
- Can have "participants" or "beneficiaries" defined by its statutes
- Cannot distribute profits to founders or board members
- Can employ people, hold assets, sign contracts, operate commercially
- Can be structured to give governance power to a defined community (via statutes that require board to follow community votes)

**The problem for The Counterweight:** A Stichting has no members in the legal sense. It's board-governed. You can make the board responsive to community votes via the statutes, but legally the board has power, not the community. The community has no direct legal rights — only the rights the board chooses to honor.

This is why Ethereum Foundation can make unilateral decisions — it's a Stichting, there are no members to override it.

**Cayman Foundation Company:**
- Introduced 2017
- Hybrid: has the features of a company (legal personality, can contract) with the governance features of a foundation (can be memberless, can have beneficiaries)
- Used by many crypto projects as a governance wrapper
- Expensive: ~$5,000-10,000 to set up, ~$2,000-5,000/year maintenance
- Good for large DAOs with significant treasury; overkill for a bootstrapped platform

**Feasibility for The Counterweight:** NOT RECOMMENDED.
- Stichting: community has no legal ownership rights (board-governed)
- Cayman: too expensive for bootstrapped platform
- Both: designed for "benevolent dictatorship" scenarios, not democratic community ownership
- Fundamental mismatch: The Counterweight wants members to BE owners with legal rights, not beneficiaries of a board's goodwill

---

### 9. Section 8 Company (India)

**What it is:** A non-profit company under Section 8 of the Companies Act 2013 (formerly Section 25). Formed for promoting commerce, art, science, sports, education, research, social welfare, religion, charity, protection of environment, or any other useful object.

**Legal standing:**
- Full legal personality (it's a company)
- Can own property, sign contracts, sue/be sued
- Can open bank accounts
- Limited liability for members

**International membership:**
- Foreign nationals can be members and directors
- No restriction on international membership
- FDI in Section 8 companies is generally permitted under automatic route (for non-sensitive sectors)

**Democratic governance:**
- Articles of Association define governance
- Can specify one-member-one-vote
- Directors elected by members
- All Companies Act governance protections apply

**Revenue distribution:**
- **CANNOT distribute profits or surplus to members.** This is the fundamental legal requirement of Section 8.
- All income must be applied toward the objects of the company
- On winding up, assets go to another Section 8 company or similar body

**Can it pay members?**
- Can pay salaries/wages for services rendered
- Can reimburse expenses
- Can pay "sitting fees" to directors
- BUT cannot distribute profits as dividends or revenue share
- "Payment for services" is the only route — and MCA/ROC scrutiny increases if payments look like disguised profit distribution

**Costs:**
- ~INR 15,000-25,000 to register (including government fees and professional charges)
- Annual compliance: ~INR 10,000-20,000 (ROC filings, audit, etc.)
- Needs minimum 2 directors, no minimum capital

**Feasibility for The Counterweight:** PARTIALLY VIABLE — only as governance/asset-holding entity.
- Cannot distribute revenue to members (kills the revenue-share model)
- Can pay builders/contributors for services (this works)
- Can hold assets, sign affiliate agreements, hold domain
- Can have international members
- Can have democratic governance
- Cheap to set up

**The Workaround:** Use Section 8 as the governance entity that owns the platform. Revenue distribution happens through a *separate* mechanism — direct contracts between the platform (Section 8 entity acting as facilitator) and members for "services rendered." This is legally tenuous at scale. MCA may view systematic payments to all members as disguised profit distribution.

**Verdict:** Good governance container. Bad revenue distribution vehicle. Could work paired with another structure.

---

### 10. Multi-State Cooperative Society (India)

**What it is:** A cooperative society registered under the Multi-State Co-operative Societies Act, 2002. Can operate in more than one Indian state.

**Legal standing:**
- Full legal personality
- Can own property, sign contracts, sue/be sued
- Can hold bank accounts
- Limited liability

**International membership:**
- The MSCS Act does NOT explicitly prohibit foreign members
- However, FEMA (Foreign Exchange Management Act) restricts foreign investment in cooperatives
- RBI has not issued any general permission for foreign investment in cooperative societies
- A foreign national residing in India could potentially become a member (as an Indian resident)
- A foreign national outside India sending money to become a member of an Indian cooperative likely violates FEMA regulations on capital account transactions
- **Practical answer: international membership is effectively blocked for non-resident foreigners**

**Democratic governance:**
- One member, one vote (mandatory under the Act)
- Board elected by members
- Annual General Meeting required
- Strong democratic protections built into the law

**Revenue distribution:**
- Can distribute surplus to members (as dividend on patronage or shareholding)
- Typically limited to a percentage decided by the general body
- Must maintain reserves (at least 25% of net profit to reserve fund)
- Can pay patronage bonus

**Costs:**
- Registration: ~INR 25,000-50,000 (Central Registrar of Cooperative Societies)
- Minimum 50 members from each of at least 2 states
- Minimum authorized share capital varies (typically INR 5-10 lakh)
- Annual audit mandatory
- Annual compliance: INR 30,000-50,000+

**Limitations:**
- **Requires 50 members from each of at least 2 states at formation** — chicken-and-egg problem for a new platform
- FEMA blocks foreign membership effectively
- Heavy regulatory oversight (Central Registrar can supersede the board)
- Government can appoint nominees to the board
- Not nimble — AGM requirements, reserve fund mandates, audit requirements
- Bureaucratic formation process (3-6 months typically)

**Feasibility for The Counterweight:** NOT VIABLE as primary international structure.
- FEMA kills international membership
- 50-member-per-state requirement is a barrier at formation
- Good for an eventual Indian-specific entity if needed for regulatory reasons
- Cannot be the global ownership container

---

## Comparable Organizations: What Entity Do They Use?

### Wikipedia / Wikimedia Foundation
- **Entity:** US 501(c)(3) non-profit corporation (Florida, later moved to San Francisco)
- **Membership:** No formal membership. Community participants are volunteers, not legal co-owners. The Board of Trustees governs. Some trustees are elected by the community, others appointed.
- **Revenue distribution:** None. All revenue goes to operations.
- **Lesson:** This is NOT community ownership. It's a board-governed foundation that listens to community input. The community has no legal ownership rights.

### Mozilla
- **Entity:** Mozilla Foundation (US 501(c)(3) non-profit) + Mozilla Corporation (wholly-owned taxable subsidiary)
- **Membership:** No members. Foundation board governs. Corporation makes money (Firefox revenue from Google search deal).
- **Revenue distribution:** Corporation can retain earnings or pay to Foundation. Community members have zero legal rights.
- **Lesson:** Foundation + Corporation is the "benevolent dictator" model. Works for open source but is NOT community ownership.

### Signal
- **Entity:** Signal Foundation (US 501(c)(3) non-profit) + Signal Messenger LLC (wholly-owned subsidiary)
- **Membership:** No members. Board governs.
- **Lesson:** Same as Mozilla. Non-profit wrapper, no community ownership.

### Linux Foundation
- **Entity:** US 501(c)(6) trade association (non-profit mutual benefit corporation)
- **Membership:** Corporate members pay annual dues ($5,000-$500,000). Individual "supporters" have no governance rights. Board is mostly appointed by Platinum/Gold corporate members.
- **Lesson:** Corporate-funded trade association. Not community ownership at all.

### ICA (International Co-operative Alliance) Recommendation
- The ICA recommends using **national cooperative law in a primary jurisdiction** combined with **inter-cooperative agreements** for international scope
- Their model: each country has its own cooperative, all linked by a federation agreement
- Alternatively: use a jurisdiction with permissive cooperative law that allows international members (UK, Canada, parts of EU)
- The ICA's own structure: registered in Belgium as an international non-profit association (AISBL)

---

## The Reciprocal Membership / Federation Model

**How it works in practice:**

1. Primary entity in a permissive jurisdiction (e.g., UK BenCom, Canadian cooperative, Wyoming DAO LLC)
2. This entity owns the IP, domain, and platform infrastructure
3. As the platform grows in specific countries, local entities are formed (Indian Section 8, EU SCE, etc.)
4. Each local entity handles jurisdiction-specific compliance (payments, tax, regulatory)
5. All local entities are linked by an **inter-entity agreement** that ensures:
   - Members of any entity are recognized by all entities
   - Governance rights flow through regardless of which entity you joined
   - Revenue pooling and distribution follows global rules
   - No single entity can unilaterally change terms

**Who does this:**
- Mondragon Corporation (Basque cooperative federation — 80+ cooperatives linked by agreements)
- Co-operatives UK + national federations
- ICA itself
- IFFCO (Indian Farmers Fertiliser Cooperative — federated model across states)

**Advantage:** Regulatory arbitrage. Each entity operates legally in its jurisdiction. The network agreement creates the global ownership layer.

**Disadvantage:** Complex. Multiple entities = multiple sets of compliance. Expensive at scale.

**For The Counterweight:** This is the **eventual** model (as mentioned in the funding-model.md). But it requires money, members, and legal resources you don't have yet. Not viable for bootstrapping.

---

## RANKED VIABLE OPTIONS for The Counterweight

### Rank 1: Wyoming DAO LLC (or standard Wyoming LLC) — RECOMMENDED FOR BOOTSTRAPPING

| Criterion | Assessment |
|-----------|-----------|
| Legal standing | Full legal personality. Can own assets, sign contracts, hold bank accounts, sue/be sued. |
| International membership | Permitted. No citizenship requirement for members. |
| Democratic governance | Operating Agreement can specify one-person-one-vote. Fully flexible. |
| Revenue distribution | Can distribute profits in any manner specified by the Operating Agreement. |
| Cost | ~$100 formation + $60/year + ~$100/year registered agent = ~$260 year one |
| Complexity | Low. File online. Operating Agreement is the only complex document. |
| Time to form | 1-2 business days (Wyoming is fast) |

**Tax consideration:** Members sign a joinder agreement. Non-US members' revenue share is subject to 30% withholding (reducible by treaty — India-US treaty reduces to 15% for some income types). For small amounts (<$100/year per member), withholding can be handled by not filing individual K-1s for de minimis amounts — but this needs accountant guidance.

**Practical approach for The Counterweight:**
1. Form Wyoming LLC (or DAO LLC if you want the signal)
2. Operating Agreement encodes governance rules, revenue split, membership rights
3. Members join by signing a digital joinder agreement (this IS the "membership contract" you asked about)
4. LLC holds domain, signs affiliate agreements, holds bank account (Mercury or Wise work well)
5. For Indian payments (UPI via Razorpay), open an Indian subsidiary or use Razorpay's international entity support

**Why this works for you specifically:**
- You're bootstrapped. This costs $260/year.
- You want international membership. LLC allows it.
- You want democratic governance. Operating Agreement defines it.
- You want revenue distribution. LLC distributes to members per OA.
- You want "no one can sell it." OA can include transfer restrictions and anti-acquisition clauses.
- You want to grow into a federation model later. The LLC can be the holding entity that spawns subsidiaries.

---

### Rank 2: UK Community Benefit Society (BenCom) — RECOMMENDED FOR "COOPERATIVE PURITY" SIGNAL

| Criterion | Assessment |
|-----------|-----------|
| Legal standing | Full legal personality. FCA-regulated. |
| International membership | Permitted. No restriction on foreign members. |
| Democratic governance | One-member-one-vote is the legal default. Cannot be overridden. |
| Revenue distribution | Limited — interest on shares only (capped). Cannot distribute profits. Can pay for services. |
| Cost | ~£200 total year one (registration + rules template) |
| Complexity | Medium. Need model rules. FCA registration. Annual return. |
| Time to form | 2-4 weeks (FCA processing) |

**The revenue distribution problem:** BenCom cannot distribute profits to members. You'd need to structure all member payments as "payment for services" (reviewing, contributing, moderating). This works for active contributors but not for pure revenue-share investors.

**Workaround:** BenCom as governance entity + separate LLC or LLP for investment/revenue-share activities. Adds complexity.

**Why you might choose this anyway:**
- The "cooperative" signal matters to your audience
- One-member-one-vote is legally enforced (not just contractually)
- Asset lock prevents capture
- FCA regulation adds credibility
- UK legal system is well-understood internationally

---

### Rank 3: Indian Section 8 Company + Foreign LLC (Dual Structure)

| Criterion | Assessment |
|-----------|-----------|
| Legal standing | Both entities have full legal personality. |
| International membership | Section 8: yes. LLC: yes. |
| Democratic governance | Both: per articles/OA. |
| Revenue distribution | Section 8: NO (non-profit). LLC: YES. |
| Cost | ~INR 25,000 (Section 8) + ~$260 (Wyoming LLC) = ~$600 total |
| Complexity | Medium-High. Two entities, two jurisdictions, inter-entity agreement. |
| Time to form | Section 8: 2-3 months (MCA approval). LLC: 1-2 days. |

**How it works:**
1. Wyoming LLC is the global entity — owns IP, receives international revenue, distributes to members worldwide
2. Indian Section 8 is the local operating entity — handles UPI payments, Indian regulatory compliance, holds Indian assets
3. Inter-entity agreement links them: Section 8 is a member of the LLC, LLC licenses IP to Section 8
4. Indian members interact with Section 8 for day-to-day, but their ownership rights flow through to the LLC via the agreement

**When this makes sense:** When Indian regulatory requirements demand a local entity (which they will, once you handle real money through UPI/Razorpay at scale). Not needed at bootstrap — Razorpay can work with a foreign entity for small scale.

---

### Rank 4: Canadian Cooperative (British Columbia or Ontario)

| Criterion | Assessment |
|-----------|-----------|
| Legal standing | Full legal personality. |
| International membership | Explicitly permitted in BC cooperative law. |
| Democratic governance | One-member-one-vote (mandatory for cooperatives). |
| Revenue distribution | Can distribute patronage dividends. Can distribute surplus. |
| Cost | ~$350 CAD filing + annual reporting. |
| Complexity | Medium. Need bylaws. Annual AGM. Audit if over threshold. |
| Time to form | 2-4 weeks. |

**Why this is ranked lower than Wyoming LLC:**
- More expensive than Wyoming
- Less flexible governance (must follow cooperative principles)
- AGM requirements create operational overhead with international members in many timezones
- Canadian tax implications for international members (withholding on patronage dividends)
- Less familiar legal system for Indian founder/members

**Who uses this:** Stocksy (BC cooperative with international members). It works, but they're a funded company, not bootstrapped.

---

### Rank 5: Delaware or Wyoming LLC + Indian LLP (Eventual Scale)

For when The Counterweight has significant revenue and needs formal structures in both jurisdictions. The Indian LLP handles domestic operations (no 50-member-per-state requirement like MSCS). The US LLC handles global membership and governance. Not for bootstrapping — for the $1M+ revenue stage.

---

## SPECIFIC RECOMMENDATION FOR THE COUNTERWEIGHT

### Phase 1: Bootstrap (Now — until first revenue)

**Form a Wyoming LLC.**

- Cost: $260/year
- Operating Agreement encodes:
  - All verified users are members
  - One person, one vote for governance
  - Revenue split as defined in your funding model
  - Anti-acquisition clause (cannot sell the LLC)
  - Transfer restrictions (membership is personal, non-transferable)
  - Amendment requires supermajority of members
- Members join by digitally signing a Joinder Agreement (this is your "legal contract upon joining")
- The LLC holds the domain, signs affiliate agreements, holds the bank account
- Use Mercury (US) or Wise for banking
- Razorpay can work with a foreign entity for Indian payment collection (verify their international merchant onboarding)

**The Joinder Agreement IS your "membership contract."** It grants:
- Membership in the LLC
- Governance voting rights as defined in the OA
- Revenue share rights as defined in the OA
- All rights automatically, upon verification

This is legally enforceable. The LLC structure gives it legal standing that a pure bilateral contract would lack.

### Phase 2: Indian Operations (When UPI payment volume requires it)

**Register an Indian entity** — likely a Section 8 Company (if you can structure payments as "services") or a Private Limited Company (if you need more flexibility on distributions).

- Section 8 is cheaper and non-profit aligned
- Private Limited allows profit distribution but creates tax and ownership complications
- LLP is another option — no cap on partners, allows foreign partners (with FEMA compliance), allows profit distribution

Link the Indian entity to the Wyoming LLC via an operating agreement.

### Phase 3: Federation (When operating in multiple regulated markets)

**Add entities per jurisdiction as needed.** UK BenCom for EU/UK operations. Each linked to the Wyoming LLC (which becomes the "root" entity). This is the Mondragon model adapted for digital platforms.

---

## THE KEY LEGAL MECHANISM: Operating Agreement + Joinder

To directly answer the original question — **"Can you just have each user sign a legal contract upon joining that grants them ownership rights, governance votes, and revenue share?"**

**Yes, and that's exactly what an LLC Operating Agreement + Joinder does.** The only addition versus pure bilateral contracts is that there's an LLC wrapper (costs $260/year) that gives the arrangement:

1. Legal personality (can own things, sign things)
2. Limited liability (members aren't personally liable)
3. Judicial recognition (courts know how to enforce LLC operating agreements)
4. Banking access (banks open accounts for LLCs)
5. Counterparty credibility (Razorpay/Amazon/Flipkart will contract with an LLC)

The Operating Agreement IS the constitution. The Joinder IS the membership contract. You get exactly what you want — contractual community ownership — with the minimal legal wrapper needed to make it enforceable and operational.

---

## What Does NOT Work

| Approach | Why it fails |
|----------|-------------|
| Pure bilateral contracts (no entity) | Cannot own assets, hold bank accounts, sign affiliate deals, limit liability |
| Indian cooperative (MSCS) | FEMA blocks foreign members, 50-per-state requirement at formation |
| Indian Section 8 alone | Cannot distribute revenue to members |
| Foundation model (Stichting/Cayman) | No legal membership rights — board-governed, not community-owned |
| UK CIC alone | 35% dividend cap too restrictive; cannot distribute to passive investors |
| Unincorporated association | No legal personality, unlimited liability, cannot contract |
| Indian Nidhi Company | Cannot have foreign members, restricted to mutual benefit of members only, heavy RBI-adjacent compliance |

---

## Summary Table

| Structure | Legal Standing | Int'l Members | Democratic | Revenue Dist. | Cost (Year 1) | Recommended? |
|-----------|---------------|---------------|------------|---------------|----------------|--------------|
| Wyoming LLC/DAO LLC | Full | Yes | Yes (via OA) | Yes (any formula) | ~$260 | YES — primary |
| UK BenCom | Full | Yes | Yes (mandatory) | Limited (interest only) | ~$300 | Maybe — for signal |
| Indian Section 8 | Full | Yes | Yes (via articles) | NO | ~$350 | Phase 2 (local ops) |
| Canadian Cooperative | Full | Yes | Yes (mandatory) | Yes (patronage dividends) | ~$500 | Alternative to Wyoming |
| Delaware LLC | Full | Yes | Yes (via OA) | Yes | ~$600 | More expensive Wyoming |
| Netherlands Stichting | Full | No members | Board only | NO | ~$3,000+ | NO |
| Cayman Foundation | Full | Beneficiaries only | Board only | Limited | ~$10,000+ | NO |
| Indian MSCS | Full | No (FEMA) | Yes (mandatory) | Yes (surplus) | ~$1,500+ | NO (int'l blocked) |
| Indian Nidhi | Full | No | Yes | Members only | ~$800 | NO |
| Unincorporated Assoc. | None/Minimal | N/A | N/A | N/A | Free | NO |

---

## Next Steps

1. **Validate Wyoming LLC formation** — confirm that a non-US person (Indian citizen) can be the initial organizer/member. Answer: Yes, they can. No US citizenship or residency required.

2. **Draft the Operating Agreement** — this is the critical document. It must encode:
   - Membership via identity verification
   - One-person-one-vote governance
   - Revenue distribution formula
   - Anti-acquisition / anti-sale clause
   - Amendment process (supermajority)
   - Dispute resolution (arbitration)

3. **Draft the Joinder Agreement** — the document users sign upon verification. It must:
   - Grant them LLC membership
   - Bind them to the Operating Agreement
   - Be enforceable under Wyoming law (choice of law clause)
   - Be signable digitally (ESIGN Act compliance)

4. **Verify Razorpay compatibility** — confirm Razorpay can onboard a Wyoming LLC for Indian payment collection, or whether you need an Indian entity first.

5. **Get a lawyer to review** — specifically, a US attorney familiar with Wyoming LLC law and international membership. Budget: $500-2,000 for OA review. This is the one thing worth spending money on.

---

*Research compiled July 2026. Based on laws as of knowledge cutoff. Laws change. Get legal counsel before acting.*
