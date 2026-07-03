# The Counterweight — Platform

The application code. Next.js + TypeScript + PostgreSQL + Prisma.

## Quick Start

```bash
# Install dependencies
pnpm install

# Copy env and configure your database
cp .env.example .env
# Edit .env with your PostgreSQL connection string

# Generate Prisma client
pnpm prisma generate

# Run migrations
pnpm prisma migrate dev

# Start dev server
pnpm dev
```

Open http://localhost:3000.

## Project Structure

```
src/
├── app/              # Next.js App Router (pages + API routes)
│   └── api/          # REST endpoints
├── modules/          # Business logic, organized by workstream
│   ├── identity/     # User verification, tiers, account management
│   ├── discussion/   # Boards, posts, threading, moderation
│   ├── marketplace/  # Products, reviews, affiliate tracking
│   └── governance/   # Proposals, voting, elections (deferred)
├── lib/              # Shared utilities (db client, etc.)
└── generated/        # Prisma client (gitignored, auto-generated)

prisma/
└── schema.prisma     # Database schema — module owners extend this
```

## Workstreams

Each module in `src/modules/` maps to a workstream in [CONTRIBUTING.md](../CONTRIBUTING.md). Pick one, read the service file's header comment for context, and start building.

## Tech Decisions

| Choice | Why |
|--------|-----|
| Next.js App Router | SSR, API routes, one framework for full stack |
| Prisma | Type-safe DB access, good DX, easy for contributors to pick up |
| pnpm | Fast, strict, disk-efficient |
| Modular monolith | Clear boundaries now, split into services when traffic demands it |
| PostgreSQL | Proven, open-source, excellent ecosystem |

These are starting points, not sacred. If a principal architect proposes something better with good reasoning, we change it.
