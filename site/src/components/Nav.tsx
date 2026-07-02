import Link from "next/link";

export function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="/" className="font-semibold text-zinc-100 hover:text-white transition-colors">
          The Counterweight
        </Link>
        <div className="flex items-center gap-5 text-sm text-zinc-400">
          <Link href="/docs" className="hover:text-zinc-100 transition-colors">
            Docs
          </Link>
          <a href="https://github.com/thecounterweight/platform" className="hover:text-zinc-100 transition-colors">
            GitHub
          </a>
          <a href="https://discord.gg/MAeXwTcxh" className="hover:text-zinc-100 transition-colors">
            Discord
          </a>
          <a href="https://reddit.com/r/TheCounterweight" className="hover:text-zinc-100 transition-colors">
            Reddit
          </a>
        </div>
      </div>
    </nav>
  );
}
