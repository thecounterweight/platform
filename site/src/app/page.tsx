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
        <p className="mt-4 text-lg md:text-xl text-zinc-500 italic">
          Just a pebble trying to start an avalanche.
        </p>
        <p className="mt-6 text-xl md:text-2xl text-zinc-300 max-w-2xl">
          Publicly owned infrastructure. Community-governed. Open-source.
          No billionaire owners. No VC. No ads. No data mining.
        </p>
        <Counter />
      </section>

      {/* The problem */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-6">The problem is structural</h2>
        <div className="space-y-4 text-zinc-300 text-lg">
          <p>
            Every platform we use is owned by someone who profits from our attention,
            our data, or both. Reviews are fake. Moderation is arbitrary. Governance
            is whatever the founder decides today. We are the product — and our options are limited.
          </p>
          <p>
            This isn&apos;t fixable with better policies or nicer executives. The
            incentive structure is the problem. If the platform is owned by capital,
            its incentives will serve capital.
          </p>
        </div>
      </section>

      {/* One decision, everything follows */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-6">One decision changes everything</h2>
        <div className="space-y-4 text-zinc-300 text-lg">
          <p>
            Every person on the platform is a verified, unique human. One person,
            one account. No bots. No duplicates. No sock puppets. We prove this
            via government ID APIs and store only a non-reversible hash — your
            data is your sovereignty, not ours.
          </p>
          <p>
            That single architectural choice cascades:
          </p>
          <ul className="space-y-3 list-none">
            <li>
              <strong className="text-zinc-100">Reviews become trustable.</strong>{" "}
              Every reviewer is a real human with proof of purchase. Ranked by
              accuracy over time. No one can buy placement.
            </li>
            <li>
              <strong className="text-zinc-100">Governance becomes real.</strong>{" "}
              Every role with power — moderators, community leads, pool managers —
              is elected by real people and removable by them. 60% vote, 7-day
              discussion. Re-confirmed every 2 years. No permanent authority.
            </li>
            <li>
              <strong className="text-zinc-100">Investment becomes accountable.</strong>{" "}
              Communities back businesses via signed contracts between named individuals.
              Every transaction recorded. The platform facilitates — it never holds your money.
            </li>
            <li>
              <strong className="text-zinc-100">Builders get paid fairly.</strong>{" "}
              Every contribution tracked on a public ledger. When revenue flows,
              it flows to the people who built this — proportional, transparent,
              no middleman deciding who deserves what.
            </li>
            <li>
              <strong className="text-zinc-100">Moderation actually works.</strong>{" "}
              When every account is a real person with something to lose, the
              calculus of bad behavior changes. No disposable accounts. No bot armies.
            </li>
          </ul>
        </div>
      </section>

      {/* Where we are */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-6">Where we are</h2>
        <div className="space-y-4 text-zinc-300 text-lg">
          <p>
            Everything above is proposed, documented, and internally consistent —
            identity verification, payments, governance, investment model,
            marketplace strategy, builder compensation. The design is open.
            Ready to be challenged, broken, and rebuilt by the people who
            will use it.
          </p>
          <p>
            What gets built first: identity + discussion boards + marketplace
            (aggregated products from existing platforms + community sellers +
            verified reviews). Revenue from day one via affiliate commissions.
            No VC needed to survive.
          </p>
          <p>
            The identity layer is open infrastructure. Anyone can run their own
            instance — a lending platform, a freelance marketplace, a co-op
            management tool, a local classifieds board. If it needs &quot;every
            user is a real person,&quot; it plugs into the same network. Free for
            community-serving projects. Revenue-generating services pay a
            proportional fee back — sustaining the infrastructure without
            extracting from it.
          </p>
          <p className="text-zinc-400">
            This isn&apos;t a whitepaper waiting for funding. It&apos;s a scaffold and documentation waiting for contributors to build it.
          </p>
        </div>
      </section>

      {/* Read more tiles */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-6">Go deeper</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <a href="/docs/overview" className="border border-zinc-800 rounded-lg p-5 hover:border-zinc-600 transition-colors block">
            <h3 className="font-semibold text-zinc-100">Start Here</h3>
            <p className="text-sm text-zinc-400 mt-1">One-page overview of the entire system.</p>
          </a>
          <a href="/docs/mvp" className="border border-zinc-800 rounded-lg p-5 hover:border-zinc-600 transition-colors block">
            <h3 className="font-semibold text-zinc-100">The MVP</h3>
            <p className="text-sm text-zinc-400 mt-1">What we build first and why.</p>
          </a>
          <a href="/docs/builder-compensation" className="border border-zinc-800 rounded-lg p-5 hover:border-zinc-600 transition-colors block">
            <h3 className="font-semibold text-zinc-100">Get Paid</h3>
            <p className="text-sm text-zinc-400 mt-1">How builders earn. Early risk, early reward.</p>
          </a>
          <a href="/docs/investment-model" className="border border-zinc-800 rounded-lg p-5 hover:border-zinc-600 transition-colors block">
            <h3 className="font-semibold text-zinc-100">Invest Together</h3>
            <p className="text-sm text-zinc-400 mt-1">Communities back businesses via contracts.</p>
          </a>
          <a href="/docs/funding-model" className="border border-zinc-800 rounded-lg p-5 hover:border-zinc-600 transition-colors block">
            <h3 className="font-semibold text-zinc-100">Funding</h3>
            <p className="text-sm text-zinc-400 mt-1">No VC. Terms decided democratically.</p>
          </a>
          <a href="/docs/principles" className="border border-zinc-800 rounded-lg p-5 hover:border-zinc-600 transition-colors block">
            <h3 className="font-semibold text-zinc-100">Principles</h3>
            <p className="text-sm text-zinc-400 mt-1">What we believe. What doesn&apos;t move.</p>
          </a>
        </div>
        <p className="mt-6 text-center">
          <a href="/docs" className="text-sm text-zinc-400 underline hover:text-zinc-200 transition-colors">
            All documentation →
          </a>
        </p>
      </section>

      {/* CTAs for different people */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-6">Get involved</h2>
        <div className="grid md:grid-cols-3 gap-4">
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
            <h3 className="font-semibold text-zinc-100">Invest</h3>
            <p className="text-sm text-zinc-400 mt-2">
              Any amount. Recorded permanently. Terms decided together.
            </p>
            <a
              href="/docs/funding-model"
              className="inline-block mt-3 text-sm text-zinc-100 underline hover:text-white"
            >
              Read the funding model
            </a>
          </div>
          <div className="border border-zinc-800 rounded-lg p-5">
            <h3 className="font-semibold text-zinc-100">Join the conversation</h3>
            <p className="text-sm text-zinc-400 mt-2">
              Ask questions. Poke holes. Shape the design.
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
          Leave your name to show support. Email is optional — only used for launch updates, never shared.
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
