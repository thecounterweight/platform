"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
      <h1 className="text-2xl font-bold">Something broke</h1>
      <p className="mt-4 text-zinc-400">
        We hit an unexpected error. This shouldn&apos;t happen.
      </p>
      <button
        onClick={reset}
        className="mt-6 px-4 py-2 bg-white text-zinc-950 font-semibold rounded-lg hover:bg-zinc-200 transition-colors"
      >
        Try again
      </button>
    </div>
  );
}
