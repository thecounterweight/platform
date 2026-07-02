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
            A platform and a movement. Owned by its users. Not by shareholders.
            Not by advertisers. By the people on it.
          </p>
          <ul className="space-y-3 list-none">
            <li>
              <strong className="text-zinc-100">Every person is real.</strong>{" "}
              One human, one account. No bots. No fake reviews. No manipulation.
              How we verify this without surveillance is one of the first
              problems we&apos;re solving together.
            </li>
            <li>
              <strong className="text-zinc-100">Your data stays yours.</strong>{" "}
              No ads. No tracking. No selling to third parties. Ever.
            </li>
            <li>
              <strong className="text-zinc-100">
                Democratic governance at every level.
              </strong>{" "}
              Platform moderators, movement leaders, fund managers — all elected,
              all removable by simple majority. Any day.
            </li>
            <li>
              <strong className="text-zinc-100">
                Fair voting.
              </strong>{" "}
              One person, one vote on governance and leadership. Investment
              decisions weighted by stake — your money, your proportional say.
            </li>
            <li>
              <strong className="text-zinc-100">
                Built-in translation.
              </strong>{" "}
              Language should never be a barrier to participation.
            </li>
            <li>
              <strong className="text-zinc-100">
                Discussion, chat, and video meetings.
              </strong>{" "}
              Threaded discussions. Group chat. Video calls for coordination.
              No need for five separate apps.
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
                Collective purchasing power.
              </strong>{" "}
              Small shops buy direct from manufacturers at bulk prices. The same
              power big chains have — without losing independence.
            </li>
            <li>
              <strong className="text-zinc-100">
                A marketplace without middlemen.
              </strong>{" "}
              List goods and services for free. Proportional transaction fees — not 30% cuts.
              Community experts certify quality. Verified purchase reviews only.
            </li>
          </ul>
        </div>
      </section>

      {/* Read more tiles */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-6">Read more</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <a href="/docs/vision" className="border border-zinc-800 rounded-lg p-5 hover:border-zinc-600 transition-colors block">
            <h3 className="font-semibold text-zinc-100">Full Vision</h3>
            <p className="text-sm text-zinc-400 mt-1">The complete picture — platform, marketplace, movement.</p>
          </a>
          <a href="/docs/mvp" className="border border-zinc-800 rounded-lg p-5 hover:border-zinc-600 transition-colors block">
            <h3 className="font-semibold text-zinc-100">What&apos;s First</h3>
            <p className="text-sm text-zinc-400 mt-1">The MVP — what we build before anything else.</p>
          </a>
          <a href="/docs/builder-compensation" className="border border-zinc-800 rounded-lg p-5 hover:border-zinc-600 transition-colors block">
            <h3 className="font-semibold text-zinc-100">Get Paid</h3>
            <p className="text-sm text-zinc-400 mt-1">How builders earn from day one. Early risk, early reward.</p>
          </a>
          <a href="/docs/investment-model" className="border border-zinc-800 rounded-lg p-5 hover:border-zinc-600 transition-colors block">
            <h3 className="font-semibold text-zinc-100">Invest Together</h3>
            <p className="text-sm text-zinc-400 mt-1">Communities pool capital, fund businesses, share returns.</p>
          </a>
          <a href="/docs/funding-model" className="border border-zinc-800 rounded-lg p-5 hover:border-zinc-600 transition-colors block">
            <h3 className="font-semibold text-zinc-100">Funding</h3>
            <p className="text-sm text-zinc-400 mt-1">How we raise capital. No VC. Terms decided democratically.</p>
          </a>
          <a href="/docs/community-certification" className="border border-zinc-800 rounded-lg p-5 hover:border-zinc-600 transition-colors block">
            <h3 className="font-semibold text-zinc-100">Certification</h3>
            <p className="text-sm text-zinc-400 mt-1">Real experts verify quality. No fake reviews. No pay-to-rank.</p>
          </a>
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
            href="/docs/builder-compensation"
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
              href="/docs/funding-model"
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

      {/* Footer */}
      <footer className="max-w-3xl mx-auto px-6 py-12 w-full border-t border-zinc-800">
        <div className="flex flex-wrap gap-6 text-sm text-zinc-500">
          <a href="/docs/principles" className="hover:text-zinc-300 transition-colors">Principles</a>
          <a href="/docs/vision" className="hover:text-zinc-300 transition-colors">Vision</a>
          <a href="/docs/mvp" className="hover:text-zinc-300 transition-colors">MVP</a>
          <a href="/docs/builder-compensation" className="hover:text-zinc-300 transition-colors">Builder Compensation</a>
          <a href="/docs/funding-model" className="hover:text-zinc-300 transition-colors">Funding Model</a>
        </div>
        <p className="mt-4 text-sm text-zinc-600">
          Open-source. AGPL-3.0. Fork it, improve it, make it yours.
        </p>
      </footer>
    </div>
  );
}
