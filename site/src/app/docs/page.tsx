import { getAllDocs } from "@/lib/docs";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentation — The Counterweight",
  description: "Vision, principles, architecture, compensation, and funding models for The Counterweight.",
};

export default function DocsIndex() {
  const docs = getAllDocs();

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-2">Documentation</h1>
      <p className="text-zinc-400 mb-10">
        Everything is open. Read it, challenge it, improve it.
      </p>
      <div className="space-y-4">
        {docs.map((doc) => (
          <Link
            key={doc.slug}
            href={`/docs/${doc.slug}`}
            className="block border border-zinc-800 rounded-lg p-5 hover:border-zinc-600 transition-colors"
          >
            <h2 className="text-lg font-semibold text-zinc-100">{doc.title}</h2>
            <p className="text-sm text-zinc-400 mt-1">{doc.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
