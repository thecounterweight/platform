# Architecture RFC — v0.1

**Status:** Open for discussion. This is a proposal, not a decision.

If you're a senior engineer and you can do better — please do. Open an issue, write a counter-proposal, tear this apart. The best design wins, not the first one.

---

## What the System Needs to Do

1. **Identity:** Verify unique humans without becoming a surveillance tool. One person, one account.
2. **Discussion:** Posts, comments, voting (agree/disagree), topic communities. Real-time updates.
3. **Marketplace:** Listings (goods/services), search, categories, verified reviews, expert certification, collective purchasing coordination.
4. **Payments:** Peer-to-peer money transfer, community treasury with transparent ledger. Multi-currency, multi-country.
5. **Governance:** Proposals, voting, elections, no-confidence motions, transparent decision logs.
6. **Communication:** Text messaging, voice/video calls. Encrypted.
7. **Translation:** Real-time contextual translation across all content. Post in any language, read in any language.
8. **Contracts:** Template library, digital signatures, storage, dispute tracking.

## Non-Negotiable Requirements

Whatever architecture we choose must satisfy:

- **Horizontally scalable.** Add servers, handle more users. No single bottleneck.
- **Federated-ready.** Communities can run sovereign instances that communicate with the network. No single server holds everything.
- **Self-hostable.** Any community can deploy their own instance. Connect to the network or run standalone.
- **No single point of failure.** Database replication, multi-region capability, graceful degradation.
- **No vendor lock-in.** Every component can be swapped. No proprietary dependency that can be pulled from under us.
- **Data sovereignty.** User data stays in their region unless explicitly moved.
- **Open-source throughout.** Every component is auditable.
- **Works in India and globally.** No dependency on services that are blocked or unreliable in key regions (e.g., Supabase is blocked in India as of 2024-25).

## Proposed Architecture

### High-Level Overview

```
Clients (Mobile App / Web App)
         │
         ▼
    API Gateway (rate limiting, auth, routing)
         │
         ▼
┌────────┬────────┬──────────┬──────────┬──────────┐
│  Auth  │ Forum  │Marketplace│ Payments │Governance│  ← Independent services
│Service │Service │  Service  │ Service  │ Service  │
└───┬────┴───┬────┴────┬─────┴────┬─────┴────┬─────┘
    │        │         │          │          │
    ▼        ▼         ▼          ▼          ▼
  [DB]     [DB]      [DB]       [DB]       [DB]      ← Isolated databases per service
```

### Proposed Stack

| Layer | Technology | Why |
|-------|-----------|-----|
| Frontend (mobile) | React Native or Flutter | Cross-platform. One codebase, iOS + Android + Web. Large contributor pool. |
| Frontend (web) | Next.js / React | Most contributors know React. SSR for SEO. |
| API Gateway | Kong or Traefik | Open-source, proven, handles auth/rate-limiting/routing. |
| Services | Node.js (TypeScript) or Go | TypeScript for speed of development and contributor familiarity. Go for performance-critical paths. |
| Databases | PostgreSQL (per service) | Proven, open-source, scalable, excellent ecosystem. |
| Message Broker | NATS or RabbitMQ | Event-driven communication between services. Decoupled. |
| Cache | Redis | Fast reads, session management, rate limiting. |
| Search | Meilisearch | Open-source, self-hostable, fast. For marketplace and forum search. |
| Object Storage | MinIO (self-hosted) or Cloudflare R2 | S3-compatible. No vendor lock-in. |
| Real-time | WebSocket service (Socket.io or custom) | Live updates for discussions, notifications. |
| Translation | Self-hosted AI models or API integration | Open question — community to decide approach. |
| Hosting | Starting with India (Oracle Cloud Mumbai, DigitalOcean Bangalore) + Cloudflare CDN. More regions added as the movement grows globally. | Data sovereignty, reliability, performance. |
| CI/CD | GitHub Actions | Free for public repos. |
| Monitoring | Prometheus + Grafana | Open-source observability. |

### Why Microservices (Not Monolith)

For the MVP, a modular monolith might ship faster. But the architecture should be designed for eventual separation because:

- Different services scale differently (marketplace traffic ≠ governance traffic)
- Different teams can own different services
- A community can self-host only the services they need
- Failure isolation — marketplace going down shouldn't kill the discussion board

**Pragmatic approach:** Start as a modular monolith (clear module boundaries, separate databases) with the intent to split into services when team size and traffic demand it.

## Open Questions (Need Community Input)

1. **Identity verification:** What method? Government ID? Web-of-trust? Zero-knowledge proofs? Biometric? Multiple options per region? This is the hardest unsolved problem.

2. **Federation protocol:** ActivityPub (Mastodon uses this)? Matrix protocol? Custom sync? How do sovereign instances discover and communicate with each other?

3. **Translation approach:** Run local AI models (LLaMA variants)? Use API services? How do we handle context and cultural nuance? Cost at scale?

4. **Payment integration:** Country-specific rails (UPI for India, SEPA for Europe) vs unified layer? How do we handle cross-border? Compliance per jurisdiction?

5. **Moderation architecture:** Centralized rules + local enforcement? Fully local? How does moderation work across federated instances?

6. **Mobile vs PWA vs both:** Native app gives better UX and push notifications but requires app store approval. PWA avoids gatekeepers but has iOS limitations.

7. **Database per service vs shared database:** True isolation is cleaner but harder to query across services. What's the pragmatic balance for an early-stage project?

## How to Contribute to This RFC

- **Disagree with something?** Open an issue titled `[Architecture] Your concern here`
- **Have a counter-proposal?** Write it up and submit a PR to this file, or create a new doc in /docs
- **Want to own a service?** Comment on the relevant issue. First qualified person to commit gets maintainer status for that module.

This RFC will be ratified by contributor vote once enough people have weighed in. Until then, it's a living document.
