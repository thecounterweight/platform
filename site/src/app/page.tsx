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
          One account per human. Your identity data never reaches our servers —
          it stays on your device. The platform cannot misuse data it never received.
          An irrevocable purpose trust makes this architecture permanent.
        </p>
        <p className="mt-6 text-base text-zinc-300 max-w-xl">
          Constitutional rights for users. Open-source. Structurally impossible to sell.
        </p>
        <Counter />
      </section>

      {/* What you do here */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-6">What you do here</h2>
        <div className="space-y-4 text-zinc-300 text-lg">
          <p>
            Once verified, you&apos;re in a space where every person is real. No bots. No fake accounts.
            Every interaction is with a verified human.
          </p>
          <p>
            You choose how to show up. Anonymous — verified but pseudonymous, full access, full privacy.
            Or you build a public profile: a reputation ledger showing where you&apos;re from, review accuracy,
            trust score, certifications, time on platform. Granularity you control — change what&apos;s visible
            any time.
          </p>
          <p>
            You read and write public content. You discuss. You organize. Real-time neural translation
            (self-hosted — no user content leaves our infrastructure) means someone posting in Tamil and
            someone reading in Hindi see each other natively. No language silos.
          </p>
        </div>
      </section>

      {/* Marketplace */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-6">How we make money</h2>
        <div className="space-y-4 text-zinc-300 text-lg">
          <p>
            We have a marketplace. Products aggregated from different sources — major platforms via
            affiliate APIs, plus community sellers listing directly.
          </p>
          <p>
            You review products either with proof of purchase, or as an expert after reading the published
            material. Reviews are tied to your persistent identity — you can&apos;t reset your reputation
            and start over.
          </p>
          <p>
            When someone buys based on your recommendation, they can rate your review — with proof of
            purchase. We calculate a score based on how helpful you&apos;ve been to the community over time.
            You get paid proportionally. People whose recommendations consistently help others earn more.
            The algorithm is open-source, the scores are auditable.
          </p>
          <p>
            We earn affiliate commissions on purchases made through the platform. No ads. No data selling.
          </p>
        </div>
      </section>

      {/* User ownership */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-6">You govern this</h2>
        <div className="space-y-4 text-zinc-300 text-lg">
          <p>
            One person, one vote. Policies, features, moderation rules — decided by user vote.
            Leaders are elected and removable via no-confidence motion (7-day discussion, 60% majority).
            No permanent admins. Constitutional changes require 75% supermajority.
          </p>
          <p>
            Verification gives you legally enforceable rights encoded in the company&apos;s Articles of
            Association. One vote in governance. Right to stand for elected positions. Legal standing to
            sue if the company violates its commitments.
          </p>
          <p>
            An irrevocable purpose trust holds a golden share. Independent trustees — not the founder —
            can veto any sale, any mission change, any removal of user protections. No future leadership
            can change the architecture or sell the platform. Same structure Patagonia uses.
          </p>
          <p className="text-zinc-400">
            Users don&apos;t hold equity — no one does. The trust structure gives you equivalent
            structural protection without requiring you to be a shareholder of an entity you&apos;d
            never meaningfully control.
          </p>
        </div>
      </section>

      {/* What becomes possible */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-6">What becomes possible on top</h2>
        <div className="space-y-4 text-zinc-300 text-lg">
          <p>
            Once millions of people are verified, the identity layer becomes open infrastructure.
            Zero-knowledge proofs let you prove attributes (&ldquo;I&apos;m 18+&rdquo;,
            &ldquo;I&apos;m a unique human&rdquo;, &ldquo;I&apos;m in Maharashtra&rdquo;)
            to third-party services without revealing your identity. The platform never knows
            where you authenticate.
          </p>
          <div className="grid md:grid-cols-2 gap-3 text-sm text-zinc-400">
            <div className="border border-zinc-800 rounded-lg px-4 py-3">P2P lending with verified borrowers</div>
            <div className="border border-zinc-800 rounded-lg px-4 py-3">Freelance marketplaces with portable reputation</div>
            <div className="border border-zinc-800 rounded-lg px-4 py-3">Local classifieds with accountable sellers</div>
            <div className="border border-zinc-800 rounded-lg px-4 py-3">Co-op governance with real one-person-one-vote</div>
            <div className="border border-zinc-800 rounded-lg px-4 py-3">Citizen journalism with verified sources</div>
            <div className="border border-zinc-800 rounded-lg px-4 py-3">Contracts between verified parties</div>
          </div>
          <p className="text-zinc-400 text-base">
            Community-serving projects use the identity layer free. Revenue-generating services pay a
            proportional fee. That fee ceiling is a constitutional bound.
          </p>
        </div>
      </section>

      {/* Builders */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-6">How it gets built</h2>
        <div className="space-y-4 text-zinc-300 text-lg">
          <p>
            Open-source. Everything is documented — architecture, identity design, funding model,
            compensation. All public on GitHub.
          </p>
          <p>
            Contributors get paid. Every contribution is tracked on a public ledger. When revenue flows,
            it flows proportional to what you built. Complexity of work is accounted for. Early contributors
            get higher multipliers to compensate for risk. Details in the{" "}
            <a href="/docs/builder-compensation" className="underline hover:text-zinc-200">compensation docs</a>.
          </p>
        </div>
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
            <p className="text-sm text-zinc-400 mt-1">Technical design — open for debate.</p>
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
