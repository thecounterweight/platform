# Contributing

## Quick Start

1. Find an issue labeled `good first issue` or `help wanted`
2. Comment on it to claim it
3. Fork the repo, create a branch, do the work
4. Submit a PR referencing the issue
5. Get reviewed, iterate, get merged
6. Your contribution is recorded on the public ledger from day one

## What We Need Right Now

### Immediate Tasks (Start This Weekend)

**Backend:**
- [ ] Set up the project scaffold — Next.js app with PostgreSQL, auth skeleton, API structure
- [ ] Identity verification service — integrate with DigiLocker/Aadhaar eKYC sandbox API
- [ ] Discussion boards — CRUD for boards, posts, comments, upvotes. Real-time updates via WebSockets
- [ ] User profiles — verified badge, pseudonym support, contribution history

**Frontend:**
- [ ] Discussion board UI — board list, threaded posts, reply, vote
- [ ] Marketplace UI — product cards, category browse, review submission form with parameter-based ratings
- [ ] User profile pages — verified status, reviews written, trust score display
- [ ] Mobile-responsive PWA shell — installable, offline-capable

**Marketplace:**
- [ ] Amazon Product Advertising API integration — fetch products by category, cache locally
- [ ] Flipkart Affiliate API integration — same
- [ ] Review system — parameter-based reviews, trust score calculation, post-purchase feedback loop
- [ ] Affiliate link tracking — attribute clicks to reviewers for commission calculation

**Design:**
- [ ] System architecture diagram (visual — the text diagram in overview.md, but as a proper image)
- [ ] User journey flows (signup → verification → first review → first commission)
- [ ] UI mockups for discussion boards and marketplace

**Legal (Any Jurisdiction):**
- [ ] Research: does the affiliate review + commission model comply with your country's advertising/disclosure laws?
- [ ] Research: what entity structure works for community investment pools in your country?
- [ ] Draft: revenue share contract template for your jurisdiction

**Domain Experts:**
- [ ] Define certification criteria for your field (what does "senior frontend engineer" actually mean? What should the test cover?)
- [ ] Volunteer as one of the first evaluators

### Skills Needed

**Engineering:** TypeScript, Next.js, PostgreSQL, WebSockets, API integrations
**Design:** UI/UX, user research, visual design
**Legal:** Securities law, cooperative law, data protection — any country
**Domain expertise:** Any field where you can define what "certified quality" means

## How Decisions Are Made

**Small decisions** (library choice, implementation detail): Whoever's doing the work decides.

**Medium decisions** (module architecture, design approach): Post in the relevant discussion channel. No objections in 48 hours = approved. Disagreement = GitHub Discussion + vote after one week.

**Large decisions** (overall architecture, governance model, compensation structure): Formal RFC in GitHub Discussions. Minimum one-week discussion. Vote by active contributors (at least 1 contribution in past 30 days). Simple majority wins.

## What "Active Contributor" Means

You're an active contributor if you've made at least one meaningful contribution in the past 30 days. This earns you voting rights on project decisions.

Contributions include: code, design, documentation, legal research, community moderation, PR reviews, or any other tracked work.

## Code Standards

- TypeScript with strict mode (Next.js + PWA)
- Tests required for new features
- PRs require at least one approval before merge
- CI must pass (lint + tests)
- Write code that others can read. If it needs a comment to explain, it might need a rewrite.

## PR Process

1. Keep PRs focused. One feature or fix per PR.
2. Write a clear description: what you did, why, how to test it.
3. Link the relevant issue.
4. Respond to review feedback. Disagreements are fine — discuss, don't ignore.
5. Once approved and CI passes — squash and merge.

## Compensation

All contributions are tracked. When revenue flows, contributors get paid proportionally. Read [Builder Compensation](docs/builder-compensation.md) for the full details.

Reviewing PRs counts as contribution. Moderation counts. Documentation counts. Not just code.

## Communication

- **Real-time chat:** Discord (link in README)
- **Persistent discussions:** GitHub Discussions
- **Video calls:** Jitsi Meet (links posted in Discord for scheduled sessions)

Rule of thumb: chat on Discord, decide on GitHub. If a Discord conversation reaches a conclusion — someone writes it up as a GitHub Discussion or issue. Otherwise it's lost.

## Code of Conduct

- Treat people with respect. Disagree with ideas, not people.
- No harassment, discrimination, or personal attacks. Zero tolerance.
- This is a global, multicultural project. Assume good intent across language and cultural barriers.
- If someone's behavior is a problem — report to maintainers. It'll be handled.

## Questions?

Open an issue or ask in Discord. There are no stupid questions. We'd rather you ask than get stuck silently.
