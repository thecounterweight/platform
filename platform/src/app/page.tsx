export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="text-center max-w-lg px-6">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900">
          The Counterweight
        </h1>
        <p className="mt-4 text-lg text-zinc-600">
          Platform under construction. Identity + Discussion + Marketplace coming soon.
        </p>
        <div className="mt-8 flex justify-center gap-4 text-sm">
          <a
            href="https://thecounterweight.org"
            className="text-zinc-900 underline hover:text-zinc-600"
          >
            About the project
          </a>
          <a
            href="https://github.com/thecounterweight/platform"
            className="text-zinc-900 underline hover:text-zinc-600"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
