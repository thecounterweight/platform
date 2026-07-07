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
          A platform where every user is verified through government ID.
          One account per human. An irrevocable purpose trust prevents sale.
        </p>
        <p className="mt-6 text-base text-zinc-300 max-w-xl">
          No data monetization. Constitutional rights for users. Open-source.
        </p>
        <Counter />
      </section>

      {/* What this is */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-6">What this is</h2>
        <div className="space-y-4 text-zinc-300 text-lg">
          <p>
            Every user is verified through a KYC provider (Digio, Signzy, or similar). The platform
            stores an irreversible hash for deduplication — raw ID numbers are never kept. No profiling,
            no data monetization. The purpose trust prevents any future leadership from changing these
            data practices.
          </p>
          <p>
            Real-time neural translation (self-hosted, no user content leaves infrastructure) enables
            cross-language discussion. Product reviews are tied to persistent verified identities and
            ranked by statistical accuracy (Wilson score interval). Governance operates on one-person-one-vote.
          </p>
          <p>
            Revenue comes from affiliate commissions on product reviews. No ads. No data selling.
          </p>
        </div>
      </section>

      {/* Two paths */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-6">Your identity, your choice</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-zinc-800 rounded-lg p-6">
            <h3 className="font-semibold text-zinc-100 mb-3">Anonymous</h3>
            <p className="text-sm text-zinc-400">
              You&apos;re verified but no one sees who you are. Full access, full privacy.
              The system guarantees you&apos;re a real person — without revealing which one.
            </p>
          </div>
          <div className="border border-zinc-800 rounded-lg p-6">
            <h3 className="font-semibold text-zinc-100 mb-3">Public profile</h3>
            <p className="text-sm text-zinc-400">
              A reputation ledger — location, review accuracy, trust score, certifications, time on platform.
              Accumulates from activity. Granularity you control.
            </p>
          </div>
        </div>
      </section>

      {/* Structural guarantees */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-6">Structural guarantees</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-zinc-100">Can&apos;t be sold</h3>
            <p className="text-zinc-400 mt-1">
              An irrevocable purpose trust holds a golden share. Independent trustees — not the founder — can
              veto any sale, mission change, or removal of user protections. Legally binding. Same structure
              Patagonia uses.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-zinc-100">Constitutional rights</h3>
            <p className="text-zinc-400 mt-1">
              Verification gives you legally enforceable rights encoded in the company&apos;s Articles of Association.
              One vote in governance. Revenue share. Right to stand for elected positions. Legal standing to
              sue if the company violates its commitments.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-zinc-100">Your data stays yours</h3>
            <p className="text-zinc-400 mt-1">
              Raw ID number never stored — only an irreversible hash for deduplication. No profiling.
              No data monetization. Optional attributes are categorical only (district not address, age bracket not DOB).
              Revocable any time. The purpose trust prevents any future leadership from changing this.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-zinc-100">User governed</h3>
            <p className="text-zinc-400 mt-1">
              One person, one vote. Moderators elected and removable. 60% majority, 7-day discussion.
              No permanent admins. Constitutional changes require 75% supermajority.
            </p>
          </div>
        </div>
      </section>

      {/* What becomes possible */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-6">The identity layer is open infrastructure</h2>
        <div className="space-y-4 text-zinc-300 text-lg">
          <p>
            Once millions of people are verified, others can build on it. Zero-knowledge proofs let you prove
            attributes (&ldquo;I&apos;m 18+&rdquo;, &ldquo;I&apos;m a unique human&rdquo;, &ldquo;I&apos;m in Maharashtra&rdquo;)
            to third-party services without revealing your identity. The platform never knows where you authenticate.
          </p>
          <div className="grid md:grid-cols-2 gap-3 text-sm text-zinc-400">
            <div className="border border-zinc-800 rounded-lg px-4 py-3">P2P lending with verified borrowers</div>
            <div className="border border-zinc-800 rounded-lg px-4 py-3">Freelance marketplaces with portable reputation</div>
            <div className="border border-zinc-800 rounded-lg px-4 py-3">Local classifieds with accountable sellers</div>
            <div className="border border-zinc-800 rounded-lg px-4 py-3">Co-op governance with real one-person-one-vote</div>
            <div className="border border-zinc-800 rounded-lg px-4 py-3">Citizen journalism with verified sources</div>
            <div className="border border-zinc-800 rounded-lg px-4 py-3">Mutual aid networks by geography</div>
          </div>
          <p className="text-zinc-400 text-base">
            Community-serving projects verify proofs for free. Revenue-generating services pay a proportional fee.
          </p>
        </div>
      </section>

      {/* Tech */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-6">Stack</h2>
        <div className="text-zinc-300 text-lg space-y-2">
          <p>Next.js (PWA) + TypeScript + PostgreSQL + Redis + BullMQ. Modular monolith — clear module boundaries, ships as one unit.</p>
          <p className="text-zinc-400 text-base">
            Full architecture doc in <a href="/docs/architecture-rfc" className="underline hover:text-zinc-200">the RFC</a>. Boring technology, deployable by one person.
          </p>
        </div>
      </section>

      {/* Who */}
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
          One-person project looking for contributors. Design documented, scaffold ready, issues open.
          Contributors earn 30-120x their hours in revenue-share units — details in the{" "}
          <a href="/docs/builder-compensation" className="underline hover:text-zinc-200">compensation docs</a>.
        </p>
      </section>

      {/* Go deeper */}
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
          <a href="/docs/identity-verification" className="border border-zinc-800 rounded-lg p-5 hover:border-zinc-600 transition-colors block">
            <h3 className="font-semibold text-zinc-100">Identity</h3>
            <p className="text-sm text-zinc-400 mt-1">How one-person-one-account works.</p>
          </a>
          <a href="/docs/architecture-rfc" className="border border-zinc-800 rounded-lg p-5 hover:border-zinc-600 transition-colors block">
            <h3 className="font-semibold text-zinc-100">Architecture</h3>
            <p className="text-sm text-zinc-400 mt-1">Modular monolith. Boring tech. Ships fast.</p>
          </a>
          <a href="/docs/funding-model" className="border border-zinc-800 rounded-lg p-5 hover:border-zinc-600 transition-colors block">
            <h3 className="font-semibold text-zinc-100">Funding</h3>
            <p className="text-sm text-zinc-400 mt-1">Purpose trust, no VC, terms decided democratically.</p>
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

      {/* Signup */}
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
