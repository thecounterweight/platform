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
        <p className="mt-6 text-xl md:text-2xl text-zinc-400 max-w-2xl">
          The world is tilted. Money, power, voice — it all flows one direction.
          We&apos;re the weight on the other side.
        </p>
        <Counter />
      </section>

      {/* What this is */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-6">What we&apos;re building</h2>
        <div className="space-y-4 text-zinc-300 text-lg">
          <p>
            A platform owned by its users. Not by shareholders. Not by
            advertisers. By the people on it.
          </p>
          <ul className="space-y-3 list-none">
            <li>
              <strong className="text-zinc-100">Every person is real.</strong>{" "}
              One human, one account. No bots. No fake reviews. No manipulation.
            </li>
            <li>
              <strong className="text-zinc-100">Your data stays yours.</strong>{" "}
              No ads. No tracking. No selling to third parties. Ever.
            </li>
            <li>
              <strong className="text-zinc-100">
                A marketplace without middlemen.
              </strong>{" "}
              Sell goods and services with proportional fees — not 30% cuts.
              Community experts certify quality. Verified purchase reviews only.
            </li>
            <li>
              <strong className="text-zinc-100">
                Collective purchasing power.
              </strong>{" "}
              Small shops buy direct from manufacturers at bulk prices. The same
              power big chains have — without losing independence.
            </li>
            <li>
              <strong className="text-zinc-100">
                Communities invest together.
              </strong>{" "}
              Pool money. Fund local businesses. Returns flow back. The community
              grows stronger.
            </li>
            <li>
              <strong className="text-zinc-100">
                When someone falls, the community catches them.
              </strong>{" "}
              Mutual aid funded by the system itself. Not charity. Structure.
            </li>
            <li>
              <strong className="text-zinc-100">
                You choose your leaders.
              </strong>{" "}
              And you can remove them. Any day. Simple majority.
            </li>
            <li>
              <strong className="text-zinc-100">
                Fair voting.
              </strong>{" "}
              One person, one vote on governance and leadership. Investment
              decisions weighted by stake — your money, your proportional say.
            </li>
          </ul>
        </div>
      </section>

      {/* How to help */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-6">What we need</h2>
        <div className="grid md:grid-cols-2 gap-4 text-zinc-300">
          <div className="border border-zinc-800 rounded-lg p-4">
            <h3 className="font-semibold text-zinc-100">Engineers</h3>
            <p className="text-sm mt-1">
              Backend, frontend, mobile, security, infrastructure. Hard problems
              worth solving.
            </p>
          </div>
          <div className="border border-zinc-800 rounded-lg p-4">
            <h3 className="font-semibold text-zinc-100">Designers</h3>
            <p className="text-sm mt-1">
              UX/UI, product thinking. Make something complex feel simple.
            </p>
          </div>
          <div className="border border-zinc-800 rounded-lg p-4">
            <h3 className="font-semibold text-zinc-100">Lawyers</h3>
            <p className="text-sm mt-1">
              Securities, cooperatives, data protection. Any jurisdiction.
            </p>
          </div>
          <div className="border border-zinc-800 rounded-lg p-4">
            <h3 className="font-semibold text-zinc-100">Economists</h3>
            <p className="text-sm mt-1">
              Investment models, risk analysis, sustainability.
            </p>
          </div>
          <div className="border border-zinc-800 rounded-lg p-4">
            <h3 className="font-semibold text-zinc-100">Trust & Safety</h3>
            <p className="text-sm mt-1">
              Moderation design, abuse prevention. Build safety without
              surveillance.
            </p>
          </div>
          <div className="border border-zinc-800 rounded-lg p-4">
            <h3 className="font-semibold text-zinc-100">Everyone else</h3>
            <p className="text-sm mt-1">
              If you know what&apos;s broken because you live it — your
              perspective matters most.
            </p>
          </div>
        </div>
        <p className="mt-6 text-zinc-400">
          Every contribution is tracked publicly. When revenue flows,
          contributors get paid proportionally.{" "}
          <a
            href="https://github.com/thecounterweight/platform/blob/main/docs/builder-compensation.md"
            className="text-zinc-100 underline hover:text-white"
          >
            See how it works.
          </a>
        </p>
      </section>

      {/* Funding */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-6">How we fund this</h2>
        <div className="space-y-4 text-zinc-300 text-lg">
          <p>
            No venture capital. No equity. Investors get a time-bounded share of
            platform revenue — then it ends. The platform stays community-owned.
          </p>
          <p>
            Terms are decided democratically. Investors vote as one block, users
            vote as another. Both must agree by supermajority. Neither side can
            override the other.
          </p>
          <p className="text-zinc-400">
            Total revenue share across all rounds is capped at 40%. Non-negotiable.{" "}
            <a
              href="https://github.com/thecounterweight/platform/blob/main/docs/funding-model.md"
              className="text-zinc-100 underline hover:text-white"
            >
              Full funding model.
            </a>
          </p>
        </div>
      </section>

      {/* Signup */}
      <section className="max-w-3xl mx-auto px-6 py-16 w-full">
        <h2 className="text-2xl font-bold mb-6">Join us</h2>
        <SignupForm />
      </section>

      {/* Links */}
      <footer className="max-w-3xl mx-auto px-6 py-16 w-full border-t border-zinc-800">
        <div className="flex flex-wrap gap-6 text-zinc-400">
          <a
            href="https://github.com/thecounterweight/platform"
            className="hover:text-zinc-100 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://reddit.com/r/TheCounterweight"
            className="hover:text-zinc-100 transition-colors"
          >
            Reddit
          </a>
          <a
            href="https://github.com/thecounterweight/platform/blob/main/PRINCIPLES.md"
            className="hover:text-zinc-100 transition-colors"
          >
            Principles
          </a>
          <a
            href="https://github.com/thecounterweight/platform/blob/main/docs/vision.md"
            className="hover:text-zinc-100 transition-colors"
          >
            Full Vision
          </a>
          <a
            href="https://github.com/thecounterweight/platform/blob/main/docs/architecture-rfc.md"
            className="hover:text-zinc-100 transition-colors"
          >
            Architecture RFC
          </a>
        </div>
        <p className="mt-6 text-sm text-zinc-600">
          Open-source. AGPL-3.0. Fork it, improve it, make it yours.
        </p>
      </footer>
    </div>
  );
}
