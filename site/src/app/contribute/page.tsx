import type { Metadata } from "next";
import { LedgerStats } from "@/components/LedgerStats";

export const metadata: Metadata = {
  title: "Contribute — The Counterweight",
  description: "Support the development of The Counterweight. Risk capital with a conditional return. Public, auditable, transparent.",
};

export default function ContributePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 w-full">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Contribute</h1>
        <p className="text-zinc-400 text-lg mb-8">
          Support the development of The Counterweight. Every contribution is recorded publicly, permanently, and verifiably.
        </p>

        <LedgerStats />

        {/* What this is */}
        <div className="border border-zinc-800 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">What this is</h2>
          <div className="space-y-3 text-zinc-300">
            <p>
              This is <strong className="text-zinc-100">risk capital</strong> — not a loan, not a donation, not equity.
            </p>
            <ul className="space-y-2 text-sm">
              <li>If the platform generates revenue → you get returns under governance-decided terms.</li>
              <li>If the platform fails → your contribution is lost. No one owes you anything.</li>
              <li>Earlier contributors get better terms (time-held advantage).</li>
              <li>Revenue share capped at 30% (under $20M) or 40% ($20M+).</li>
            </ul>
            <p className="text-sm text-zinc-500">
              Only contribute what you can afford to lose entirely.
            </p>
          </div>
        </div>

        {/* How to pay */}
        <div className="border border-zinc-800 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">How to pay</h2>

          {/* UPI */}
          <div className="mb-6">
            <h3 className="font-medium text-zinc-200 mb-2">UPI (India)</h3>
            <div className="bg-zinc-900 rounded-lg p-4">
              <p className="font-mono text-lg text-zinc-100 select-all">7340176100@ybl</p>
              <p className="text-xs text-zinc-500 mt-2">Copy this UPI ID and pay any amount via any UPI app (GPay, PhonePe, Paytm, etc.)</p>
            </div>
          </div>

          {/* Bank transfer */}
          <div className="mb-6">
            <h3 className="font-medium text-zinc-200 mb-2">Bank transfer (India / International)</h3>
            <p className="text-sm text-zinc-400">
              For larger amounts or international transfers, email{" "}
              <a href="mailto:manojsihag888@gmail.com" className="text-zinc-200 underline hover:text-white">
                manojsihag888@gmail.com
              </a>{" "}
              for bank details.
            </p>
          </div>
        </div>

        {/* After paying */}
        <div className="border border-zinc-800 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">After paying</h2>
          <div className="space-y-3 text-zinc-300 text-sm">
            <p>Send the following to <a href="mailto:manojsihag888@gmail.com" className="text-zinc-200 underline hover:text-white">manojsihag888@gmail.com</a>:</p>
            <ol className="list-decimal list-inside space-y-2">
              <li>Your name (or pseudonym — your choice)</li>
              <li>Amount contributed</li>
              <li>Date of transaction</li>
              <li>Transaction reference / screenshot</li>
            </ol>
            <p className="text-zinc-400 mt-4">
              Within 48 hours, your contribution will be committed to the{" "}
              <a href="https://github.com/thecounterweight/ledger" className="text-zinc-200 underline hover:text-white">
                public ledger
              </a>
              {" "}— GPG-signed, tamper-evident, permanently archived.
            </p>
          </div>
        </div>

        {/* The agreement */}
        <div className="border border-zinc-800 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">The agreement</h2>
          <div className="space-y-3 text-zinc-300 text-sm">
            <p>By contributing, you agree to the terms in the{" "}
              <a href="https://github.com/thecounterweight/platform/blob/main/docs/contribution-agreement-template.md" className="text-zinc-200 underline hover:text-white">
                Contribution Agreement
              </a>. The key points:
            </p>
            <ul className="space-y-2">
              <li>This is risk capital. No repayment obligation exists.</li>
              <li>Returns are conditional on the platform generating revenue.</li>
              <li>Specific terms (%, duration, cap) will be decided by democratic governance within constitutional bounds.</li>
              <li>Your contribution is recorded permanently on the public ledger.</li>
              <li>When a legal entity is formed, it recognizes your contribution.</li>
            </ul>
          </div>
        </div>

        {/* Transparency */}
        <div className="border border-zinc-800 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Full transparency</h2>
          <div className="space-y-3 text-zinc-300 text-sm">
            <p>Everything is public:</p>
            <ul className="space-y-2">
              <li>
                <a href="https://github.com/thecounterweight/ledger" className="text-zinc-200 underline hover:text-white">
                  Public ledger
                </a>{" "}
                — every contribution and every expenditure, GPG-signed
              </li>
              <li>
                <a href="https://github.com/thecounterweight/platform/blob/main/docs/funding-model.md" className="text-zinc-200 underline hover:text-white">
                  Funding model
                </a>{" "}
                — how terms are decided
              </li>
              <li>
                <a href="https://github.com/thecounterweight/platform/blob/main/docs/contribution-agreement-template.md" className="text-zinc-200 underline hover:text-white">
                  Contribution agreement
                </a>{" "}
                — what you&apos;re signing
              </li>
            </ul>
            <p className="text-zinc-400 mt-3">
              Verify it yourself. Clone the ledger repo. Check <code className="text-zinc-300">git log --show-signature</code>. The hash chain guarantees nothing has been altered.
            </p>
          </div>
        </div>

        {/* Questions */}
        <div className="text-center text-sm text-zinc-500">
          <p>
            Questions? Ask on{" "}
            <a href="https://github.com/thecounterweight/platform/discussions" className="text-zinc-300 underline hover:text-white">
              GitHub Discussions
            </a>{" "}
            or email{" "}
            <a href="mailto:manojsihag888@gmail.com" className="text-zinc-300 underline hover:text-white">
              manojsihag888@gmail.com
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
