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

      {/* What makes this different */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-6">What makes this different</h2>
        <div className="space-y-4 text-zinc-300 text-lg">
          <p>
            One verified identity connects everything. Every person on the platform
            is a real, unique human — no bots, no duplicates, no manipulation.
            That single fact makes trusted reviews possible, makes democratic
            governance real, makes investment accountable, and makes moderation
            effective.
          </p>
          <p>
            Your data is your sovereignty. Not ours to sell. Not ours to mine.
            Not ours to hand to governments or advertisers.
            We store the minimum needed to prove you&apos;re real — then nothing else
            belongs to us.
          </p>
          <ul className="space-y-3 list-none">
            <li>
              <strong className="text-zinc-100">Verified identity without surveillance.</strong>{" "}
              Government ID APIs prove you&apos;re real. We store a non-reversible hash — not your data.
              One person, one account. Privacy preserved.
            </li>
            <li>
              <strong className="text-zinc-100">
                Reviews you can trust.
              </strong>{" "}
              Every reviewer is a verified human with proof of purchase.
              Ranked by accuracy, not by who paid for placement.
            </li>
            <li>
              <strong className="text-zinc-100">
                No permanent authority.
              </strong>{" "}
              Every role with power — moderators, community leads, pool managers —
              is elected and removable. 60% vote removes anyone, after 7-day
              discussion. Every role re-confirmed every 2 years.
            </li>
            <li>
              <strong className="text-zinc-100">
                Builders get paid.
              </strong>{" "}
              Every contribution tracked on a public ledger. When revenue flows,
              it flows back to the people who built this — proportional to what they contributed.
            </li>
            <li>
              <strong className="text-zinc-100">
                Investment without extraction.
              </strong>{" "}
              Communities back businesses via signed contracts between named individuals.
              Revenue share or equity. The platform facilitates — it doesn&apos;t manage your money.
            </li>
          </ul>
        </div>
      </section>

      {/* What exists now */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-6">Where we are</h2>
        <div className="space-y-4 text-zinc-300 text-lg">
          <p>
            The system is designed. Identity verification, payments, governance,
            investment model, marketplace strategy, builder compensation — all
            documented, reviewed, and internally consistent. Four rounds of
            critical review. Zero contradictions remaining.
          </p>
          <p className="text-zinc-400">
            What gets built first: identity + discussion boards + marketplace
            (aggregated products from existing platforms + community sellers +
            verified reviews). Revenue from day one via affiliate commissions.
            No VC needed to survive.
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
      </footer>
    </div>
  );
}
