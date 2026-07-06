import { SignupForm } from "@/components/SignupForm";
import { Counter } from "@/components/Counter";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center px-6 pt-24 pb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-4xl">
          The Counterweight
        </h1>
        <p className="mt-4 text-lg md:text-xl text-zinc-400 max-w-2xl">
          A review and discussion platform where every participant is a verified real person.
          No bots. No fake reviews. No one selling your attention.
        </p>
        <p className="mt-6 text-base text-zinc-500 max-w-xl">
          Structurally protected from sale or capture. Open-source. Currently looking for builders.
        </p>
        <Counter />
      </section>

      {/* What it does */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-6">What we&apos;re building</h2>
        <div className="space-y-4 text-zinc-300 text-lg">
          <p>
            A platform where every user is verified as a unique real human — structurally prevented from being sold, captured, or stripped of user protections.
          </p>
          <ul className="space-y-3 list-none">
            <li>
              <strong className="text-zinc-100">Trusted reviews.</strong>{" "}
              Every reviewer has proof of purchase and a reputation ranked by accuracy. No fake accounts, no paid reviews disguised as organic.
            </li>
            <li>
              <strong className="text-zinc-100">Discussion boards.</strong>{" "}
              Threaded conversations where every participant has something to lose. Moderation by community vote — not corporate policy.
            </li>
            <li>
              <strong className="text-zinc-100">Democratic governance.</strong>{" "}
              Moderators and leads are elected and removable. 60% vote, 7-day discussion. No permanent admins.
            </li>
            <li>
              <strong className="text-zinc-100">Builder compensation.</strong>{" "}
              Contributions tracked on a public ledger. When revenue flows, it flows to the people who built this — proportional and transparent.
            </li>
          </ul>
        </div>
      </section>

      {/* Why it works */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-6">Why verified identity changes everything</h2>
        <div className="space-y-4 text-zinc-300 text-lg">
          <p>
            One architectural decision — every user is a verified unique human — makes
            things possible that aren&apos;t possible otherwise:
          </p>
          <p>
            Democratic governance works because one person = one vote (no sock puppets).
            Reviews are trustable because reviewers have a single reputation they can&apos;t reset.
            Moderation works because getting banned means losing your only account.
            Investment works because every party to a contract is a known, accountable person.
          </p>
          <p className="text-zinc-400">
            Your raw ID number is never stored — only an irreversible cryptographic hash
            for deduplication. You can participate under a pseudonym. The system knows
            you&apos;re real; other users don&apos;t have to know who you are.
          </p>
        </div>
      </section>

      {/* What's being built now */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-8">What ships first</h2>
        <div className="border border-zinc-800 rounded-lg p-6 md:p-8">
          {/* Milestone 1 */}
          <div className="mb-6">
            <p className="text-zinc-500 text-xs uppercase tracking-wide mb-2">Milestone 1 — ships first</p>
            <div className="grid md:grid-cols-3 gap-3">
              <div className="px-4 py-3 border border-zinc-700 rounded-lg text-center">
                <p className="font-medium text-zinc-200 text-sm">Phone/OTP Verification</p>
                <p className="text-xs text-zinc-500 mt-1">One person, one account</p>
              </div>
              <div className="px-4 py-3 border border-zinc-700 rounded-lg text-center">
                <p className="font-medium text-zinc-200 text-sm">Discussion Boards</p>
                <p className="text-xs text-zinc-500 mt-1">Threaded, real-time, moderated</p>
              </div>
              <div className="px-4 py-3 border border-zinc-700 rounded-lg text-center">
                <p className="font-medium text-zinc-200 text-sm">Multi-language UI</p>
                <p className="text-xs text-zinc-500 mt-1">Hindi, English, more</p>
              </div>
            </div>
          </div>
          {/* Arrow */}
          <div className="flex justify-center mb-6">
            <div className="w-px h-6 bg-zinc-700"></div>
          </div>
          {/* Milestone 2 */}
          <div className="mb-6">
            <p className="text-zinc-500 text-xs uppercase tracking-wide mb-2">Milestone 2 — when Milestone 1 has traction</p>
            <div className="grid md:grid-cols-1 gap-3 max-w-sm mx-auto">
              <div className="px-4 py-3 border border-zinc-700 rounded-lg text-center">
                <p className="font-medium text-zinc-200 text-sm">Government ID Verification</p>
                <p className="text-xs text-zinc-500 mt-1">Full verified identity via KYC provider</p>
              </div>
            </div>
          </div>
          {/* Arrow */}
          <div className="flex justify-center mb-6">
            <div className="w-px h-6 bg-zinc-700"></div>
          </div>
          {/* Milestone 3 */}
          <div className="mb-6">
            <p className="text-zinc-500 text-xs uppercase tracking-wide mb-2">Milestone 3 — when affiliate APIs are approved</p>
            <div className="grid md:grid-cols-2 gap-3 max-w-md mx-auto">
              <div className="px-4 py-3 border border-zinc-700 rounded-lg text-center">
                <p className="font-medium text-zinc-200 text-sm">Marketplace</p>
                <p className="text-xs text-zinc-500 mt-1">Aggregated products + reviews</p>
              </div>
              <div className="px-4 py-3 border border-zinc-700 rounded-lg text-center">
                <p className="font-medium text-zinc-200 text-sm">Revenue</p>
                <p className="text-xs text-zinc-500 mt-1">Affiliate commissions</p>
              </div>
            </div>
          </div>
          {/* Arrow */}
          <div className="flex justify-center mb-6">
            <div className="w-px h-6 bg-zinc-700"></div>
          </div>
          {/* Phase 2 */}
          <div>
            <p className="text-zinc-500 text-xs uppercase tracking-wide mb-2">Phase 2 — funded by revenue</p>
            <div className="grid md:grid-cols-4 gap-3">
              <div className="px-3 py-2 border border-zinc-800 rounded-lg text-center">
                <p className="font-medium text-zinc-300 text-xs">Certification</p>
              </div>
              <div className="px-3 py-2 border border-zinc-800 rounded-lg text-center">
                <p className="font-medium text-zinc-300 text-xs">Talent Pool</p>
              </div>
              <div className="px-3 py-2 border border-zinc-800 rounded-lg text-center">
                <p className="font-medium text-zinc-300 text-xs">Governance</p>
              </div>
              <div className="px-3 py-2 border border-zinc-800 rounded-lg text-center">
                <p className="font-medium text-zinc-300 text-xs">Investment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-6">Stack</h2>
        <div className="text-zinc-300 text-lg space-y-2">
          <p>Next.js (PWA) + TypeScript + PostgreSQL + Redis + BullMQ. Modular monolith — clear module boundaries, ships as one unit.</p>
          <p className="text-zinc-400 text-base">
            Full architecture doc in <a href="/docs/architecture-rfc" className="underline hover:text-zinc-200">the RFC</a>. Boring technology, deployable by one person.
          </p>
        </div>
      </section>

      {/* Who's behind this */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-6">Who&apos;s building this</h2>
        <div className="flex items-start gap-4">
          <div>
            <p className="text-zinc-200 text-lg font-medium">Manoj Sihag</p>
            <p className="text-zinc-400 text-base mt-1">
              DevOps engineer building community infrastructure.
            </p>
            <a
              href="https://github.com/manojsihag"
              className="inline-block mt-2 text-sm text-zinc-400 underline hover:text-zinc-200"
            >
              GitHub
            </a>
          </div>
        </div>
        <p className="mt-6 text-zinc-400 text-base">
          This is a one-person project looking for contributors. The design is documented, the scaffold is ready, the first issues are open.
        </p>
      </section>

      {/* Read more */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-6">Go deeper</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <a href="/docs/overview" className="border border-zinc-800 rounded-lg p-5 hover:border-zinc-600 transition-colors block">
            <h3 className="font-semibold text-zinc-100">Overview</h3>
            <p className="text-sm text-zinc-400 mt-1">The entire system in one page.</p>
          </a>
          <a href="/docs/mvp" className="border border-zinc-800 rounded-lg p-5 hover:border-zinc-600 transition-colors block">
            <h3 className="font-semibold text-zinc-100">The MVP</h3>
            <p className="text-sm text-zinc-400 mt-1">What we build first and why.</p>
          </a>
          <a href="/docs/builder-compensation" className="border border-zinc-800 rounded-lg p-5 hover:border-zinc-600 transition-colors block">
            <h3 className="font-semibold text-zinc-100">Get Paid</h3>
            <p className="text-sm text-zinc-400 mt-1">How builders earn. Early risk, early reward.</p>
          </a>
          <a href="/docs/architecture-rfc" className="border border-zinc-800 rounded-lg p-5 hover:border-zinc-600 transition-colors block">
            <h3 className="font-semibold text-zinc-100">Architecture</h3>
            <p className="text-sm text-zinc-400 mt-1">Modular monolith. Boring tech. Ships fast.</p>
          </a>
          <a href="/docs/identity-verification" className="border border-zinc-800 rounded-lg p-5 hover:border-zinc-600 transition-colors block">
            <h3 className="font-semibold text-zinc-100">Identity</h3>
            <p className="text-sm text-zinc-400 mt-1">How one-person-one-account works.</p>
          </a>
          <a href="/docs/principles" className="border border-zinc-800 rounded-lg p-5 hover:border-zinc-600 transition-colors block">
            <h3 className="font-semibold text-zinc-100">Principles</h3>
            <p className="text-sm text-zinc-400 mt-1">What doesn&apos;t move.</p>
          </a>
        </div>
        <p className="mt-6 text-center">
          <a href="/docs" className="text-sm text-zinc-400 underline hover:text-zinc-200 transition-colors">
            All documentation →
          </a>
        </p>
      </section>

      {/* Get involved */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-6">Get involved</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border border-zinc-800 rounded-lg p-5">
            <h3 className="font-semibold text-zinc-100">Build</h3>
            <p className="text-sm text-zinc-400 mt-2">
              Pick an issue. Ship code. Earn units from day one.
            </p>
            <a
              href="https://github.com/thecounterweight/platform/issues"
              className="inline-block mt-3 text-sm text-zinc-100 underline hover:text-white"
            >
              Browse open issues
            </a>
          </div>
          <div className="border border-zinc-800 rounded-lg p-5">
            <h3 className="font-semibold text-zinc-100">Challenge the design</h3>
            <p className="text-sm text-zinc-400 mt-2">
              Read the docs. Poke holes. Shape the architecture.
            </p>
            <a
              href="https://github.com/thecounterweight/platform/discussions"
              className="inline-block mt-3 text-sm text-zinc-100 underline hover:text-white"
            >
              GitHub Discussions
            </a>
          </div>
        </div>
      </section>

      {/* I'm in */}
      <section className="max-w-3xl mx-auto px-6 py-16 w-full">
        <h2 className="text-2xl font-bold mb-2">I&apos;m in</h2>
        <p className="text-zinc-400 mb-6">
          Leave your name to follow the build. Email is optional — only used for launch updates, never shared.
        </p>
        <SignupForm />
      </section>

      {/* Footer */}
      <footer className="max-w-3xl mx-auto px-6 py-12 w-full border-t border-zinc-800">
        <div className="flex flex-wrap gap-6 text-sm text-zinc-500">
          <a href="/docs/principles" className="hover:text-zinc-300 transition-colors">Principles</a>
          <a href="/docs/overview" className="hover:text-zinc-300 transition-colors">Overview</a>
          <a href="/docs/mvp" className="hover:text-zinc-300 transition-colors">MVP</a>
          <a href="/docs/builder-compensation" className="hover:text-zinc-300 transition-colors">Builder Compensation</a>
          <a href="/docs/funding-model" className="hover:text-zinc-300 transition-colors">Funding Model</a>
          <a href="https://github.com/thecounterweight/platform" className="hover:text-zinc-300 transition-colors">GitHub</a>
        </div>
        <p className="mt-4 text-sm text-zinc-600">
          Open-source. AGPL-3.0. Fork it, improve it, make it yours.
        </p>
        <p className="mt-2 text-sm text-zinc-600">
          Permanently archived at{" "}
          <a href="https://web.archive.org/web/*/thecounterweight.org" className="hover:text-zinc-300 transition-colors underline">archive.org</a>
          {" "}and{" "}
          <a href="https://archive.softwareheritage.org/browse/origin/?origin_url=https://github.com/thecounterweight/platform" className="hover:text-zinc-300 transition-colors underline">Software Heritage</a>.
        </p>
      </footer>
    </div>
  );
}
