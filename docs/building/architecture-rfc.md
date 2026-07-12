# Architecture — v0.2

**Status:** Open for discussion. This is a proposal, not a decision.

If you're a senior engineer and you can do better — please do. Open an issue, write a counter-proposal, tear this apart. The best design wins, not the first one.

---

## What the System Needs to Do

1. **Identity:** Verify unique humans via KYC providers. One person, one account. Opt-in verified attributes. ZK proof credential issuance for ecosystem use.
2. **Discussion:** Posts, comments, voting (upvote/downvote), topic communities. Real-time updates. E2E encrypted DMs and group chat (MLS protocol). Real-time neural translation across languages.
3. **Marketplace:** Aggregated listings from major platforms, verified reviews, search, categories. Wilson score ranking. EigenTrust-based reviewer trust propagation.
4. **Contracts:** Template library, digital signing, immutable storage, payment tracking, reminders. Structured ODR for dispute resolution.
5. **Moderation:** ML triage classifiers (community-norm-trained) flag content for human vote. Anti-brigading graph analysis. CSAM hash-matching (legal mandate).
6. **Payments:** Platform does not process money. It records transactions between verified parties who use existing rails (UPI, SEPA, ACH, direct bank transfer). See [Payments](payments.md).
7. **Governance:** Proposals, voting, elections, no-confidence motions, transparent decision logs.

## Architecture: Modular Monolith

One deployable unit. Clear internal module boundaries. Splits into services later if and when traffic and team size demand it.

**Why monolith:**
- Volunteer team — nobody wants to debug distributed systems for free
- Simpler to develop, test, deploy, and operate
- One database, one deployment pipeline, one thing to monitor
- Module boundaries enforce separation without network overhead
- When a module needs to become a service, the boundary is already clean

**When to split:** When a specific module has fundamentally different scaling needs AND you have a team to own it independently. Not before.

### Module Structure

```
src/
├── modules/
│   ├── identity/       # Verification, auth, sessions, membership, ZK credentials
│   ├── discussion/     # Boards, threads, comments, chat (E2E encrypted), moderation
│   ├── marketplace/    # Product aggregation, reviews, affiliate links, trust scoring
│   ├── governance/     # Proposals, elections, voting, no-confidence
│   ├── contracts/      # Templates, signing, storage, reminders, ODR engine
│   ├── translation/    # Self-hosted neural MT (NLLB/SeamlessM4T), quality feedback
│   ├── moderation/     # ML triage classifiers, community vote orchestration, anti-brigading
│   ├── trust/          # EigenTrust graph computation, reviewer scoring, collusion detection
│   └── shared/         # Common utilities, middleware, types
├── api/                # Route handlers (thin — delegates to modules)
├── db/                 # Schema, migrations (single database)
└── workers/            # Background jobs (email, OTP, webhooks, translation, trust recompute)
```

Each module:
- Owns its database tables by default. Shared tables are allowed when they genuinely simplify things — no artificial abstraction layers to enforce separation that doesn't help.
- Exposes a public API to other modules (function calls, not HTTP)
- Extracted to separate services only when there's a real reason — not preemptively

### Stack

| Layer | Technology | Why |
|-------|-----------|-----|
| Frontend | Next.js (PWA) | Installable, push notifications, no app store gatekeepers. Most contributors know React. |
| Backend | Next.js API routes + standalone workers | One framework, one language (TypeScript), minimal ops burden. |
| Database | PostgreSQL (single instance) | Proven, open-source, handles everything at this scale. |
| Cache | Redis | Sessions, rate limiting, real-time presence. |
| Search | Meilisearch or Typesense | Open-source, self-hostable, fast. Added when marketplace launches. |
| Object Storage | Cloudflare R2 or MinIO | S3-compatible. Profile images, attachments. |
| Real-time | WebSocket (via Socket.io or Ably) | Live updates for discussions and chat. |
| Background Jobs | BullMQ (Redis-backed) | OTP delivery, webhook processing, affiliate sync. |
| Hosting | Vercel (frontend) + Railway or Fly.io (workers/db) | Low ops burden for a volunteer team. Migrate when scale warrants. |
| CI/CD | GitHub Actions | Free for public repos. |
| Monitoring | Uptime + error tracking (Sentry free tier) | Enough for early stage. Prometheus/Grafana when self-hosting. |
| Content Safety | PhotoDNA or equivalent CSAM hash-matching | Legal obligation under IT Act Section 67B. Must be integrated before UGC goes live. |
| Translation | NLLB-200 or SeamlessM4T (self-hosted) | Real-time neural translation. Self-hosted = no user content leaves infrastructure. GPU inference required. |
| Moderation ML | Fine-tuned classifiers (community norms) | Triage layer — flags content for human review. Never auto-removes (except CSAM). Retrained on community vote outcomes. |
| Trust Engine | EigenTrust-style graph propagation | Iterative trust scoring over reviewer graph. Resists review rings and collusion. |
| E2E Encryption | MLS protocol (RFC 9420) | DMs and group chat are end-to-end encrypted. Platform cannot read private messages. Public boards remain unencrypted (content is public). |
| Dispute Resolution | Structured ODR engine | Guided negotiation, precedent surfacing, resolution range suggestions. Escalates to human mediators only when needed. |
| ZK Proofs | circom/snarkjs + Semaphore | On-device proof generation for ecosystem identity. Phase 2 infrastructure. |

### Design Principles

1. **Boring technology.** PostgreSQL, Redis, TypeScript. No exotic tools that shrink the contributor pool.
2. **One way to do things.** One ORM, one auth pattern, one error handling approach. Documented in CONTRIBUTING.md.
3. **No premature optimization.** Single database, single server, vertical scaling until it hurts. PostgreSQL handles millions of rows fine.
4. **Module boundaries are real.** No importing from another module's internals. Public interface only. This is the future service boundary.
5. **Deployable by one person.** `git push` → deployed. No Kubernetes, no Helm charts, no infrastructure team required.

### What's NOT in the initial architecture

| Capability | Why it waits |
|-----------|-------------|
| Microservices | No team to operate them. Module boundaries give the same separation without the ops cost. |
| Federation | Not designed yet. Single instance first. |
| Multi-region deployment | Platform serves global users from day one. Additional deployment regions (for lower latency) added when user density in a geography justifies the ops cost. |
| Kubernetes | Overkill for a single monolith. Add when you have multiple services AND dedicated ops. |
| API Gateway (Kong/Traefik) | Unnecessary with a monolith. Next.js middleware handles auth and rate limiting. |
| Message broker (NATS/RabbitMQ) | BullMQ handles async jobs. Event-driven architecture added when modules actually need to decouple. |
| Native mobile app | PWA first. Native when there are contributors for it. |

### Database Schema Principles

- Single PostgreSQL database, schemas per module (`identity.*`, `discussion.*`, `marketplace.*`)
- Modules reference each other only via user ID (the universal foreign key)
- Migrations are module-scoped — each module owns its tables
- No cross-schema JOINs in application code (query your own schema, call the other module's API for the rest)

### Authentication & Sessions

- Password + OTP (second factor on new devices)
- Sessions stored in Redis, long-lived on trusted devices
- JWT for API auth between frontend and backend (short-lived, refreshed via session)
- Face scan triggers via KYC provider API for high-stakes actions

### Future: Service Extraction Path

When a module needs to become a service:

1. Module already has a clean public API (function calls)
2. Replace function calls with HTTP or gRPC
3. Give it its own database (it already owns its schema)
4. Deploy independently
5. Add message queue between services if needed

This is a 1-2 week migration per module — not a rewrite. The monolith structure makes this possible without planning for it prematurely.

## Open Questions (Need Community Input)

1. **Hosting choice:** Vercel + Railway vs. a single VPS (Hetzner/DigitalOcean)? Managed services cost more but reduce ops. VPS is cheaper but needs someone maintaining it.

2. **Real-time approach:** WebSocket via Socket.io (self-managed) vs. managed service (Ably, Pusher)? Cost vs. complexity tradeoff.

3. **Search timing:** Add Meilisearch from day one (marketplace needs it) or start with PostgreSQL full-text search and add dedicated search later?

4. **Mobile:** PWA-only or React Native in parallel? Depends entirely on contributor availability.

## How to Contribute

- **Disagree with something?** Open an issue titled `[Architecture] Your concern here`
- **Have a counter-proposal?** Write it up and submit a PR to this file, or create a new doc in /docs
- **Want to own a module?** Comment on the relevant issue. First qualified person to commit gets maintainer status for that module.

This document will be updated as decisions are made and contributors weigh in.
