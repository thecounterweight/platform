import fs from "fs";
import path from "path";

const DOCS_DIR = path.join(process.cwd(), "..", "docs");
const PRINCIPLES_PATH = path.join(process.cwd(), "..", "PRINCIPLES.md");

export interface DocMeta {
  slug: string;
  title: string;
  description: string;
}

const DOC_META: Record<string, { title: string; description: string }> = {
  vision: { title: "Vision", description: "The full picture — what we're building and why" },
  mvp: { title: "MVP", description: "What gets built first" },
  principles: { title: "Principles", description: "Non-negotiable values that guide everything" },
  "architecture-rfc": { title: "Architecture RFC", description: "Proposed technical design — open for debate" },
  "builder-compensation": { title: "Builder Compensation", description: "How contributors get paid" },
  "investment-model": { title: "Investment Model", description: "How community economics work" },
  "funding-model": { title: "Funding Model", description: "How we raise capital and who decides the terms" },
  "community-certification": { title: "Community Certification", description: "How quality is verified by real experts" },
};

export function getAllDocs(): DocMeta[] {
  return Object.entries(DOC_META).map(([slug, meta]) => ({
    slug,
    ...meta,
  }));
}

export function getDocContent(slug: string): string | null {
  if (slug === "principles") {
    if (!fs.existsSync(PRINCIPLES_PATH)) return null;
    return fs.readFileSync(PRINCIPLES_PATH, "utf-8");
  }

  const filePath = path.join(DOCS_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  return fs.readFileSync(filePath, "utf-8");
}

export function getDocMeta(slug: string): DocMeta | null {
  const meta = DOC_META[slug];
  if (!meta) return null;
  return { slug, ...meta };
}

export function getAllSlugs(): string[] {
  return Object.keys(DOC_META);
}
