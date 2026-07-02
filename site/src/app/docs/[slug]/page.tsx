import { getDocContent, getDocMeta, getAllSlugs } from "@/lib/docs";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const meta = getDocMeta(slug);
  if (!meta) return {};
  return {
    title: `${meta.title} — The Counterweight`,
    description: meta.description,
  };
}

export default async function DocPage({ params }: Props) {
  const { slug } = await params;
  const content = getDocContent(slug);
  const meta = getDocMeta(slug);

  if (!content || !meta) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/docs" className="text-zinc-500 hover:text-zinc-300 text-sm mb-6 inline-block">
        &larr; All docs
      </Link>
      <article className="prose prose-invert prose-zinc max-w-none prose-headings:font-bold prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-p:text-zinc-300 prose-li:text-zinc-300 prose-strong:text-zinc-100 prose-a:text-zinc-100 prose-a:underline hover:prose-a:text-white prose-table:text-zinc-300 prose-th:text-zinc-100 prose-td:border-zinc-700 prose-th:border-zinc-700">
        <ReactMarkdown>{content}</ReactMarkdown>
      </article>
    </div>
  );
}
