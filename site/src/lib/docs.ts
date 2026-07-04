import fs from "fs";
import path from "path";

// On Vercel, cwd is the site/ directory but the full repo is cloned.
// Try both relative paths to handle local dev and Vercel deployment.
function resolveDocsDir(): string {
  const fromParent = path.join(process.cwd(), "..", "docs");
  const fromCwd = path.join(process.cwd(), "docs");
  if (fs.existsSync(fromParent)) return fromParent;
  if (fs.existsSync(fromCwd)) return fromCwd;
  return fromParent;
}

function resolvePrinciplesPath(): string {
  const fromParent = path.join(process.cwd(), "..", "PRINCIPLES.md");
  const fromCwd = path.join(process.cwd(), "PRINCIPLES.md");
  if (fs.existsSync(fromParent)) return fromParent;
  if (fs.existsSync(fromCwd)) return fromCwd;
  return fromParent;
}

const DOCS_DIR = resolveDocsDir();
const PRINCIPLES_PATH = resolvePrinciplesPath();

export interface DocMeta {
  slug: string;
  title: string;
  description: string;
}

const DOC_META: Record<string, { title: string; description: string }> = {
  overview: { title: "Overview", description: "The entire system in one page — start here" },
  vision: { title: "Vision", description: "The full picture — what we're building and why" },
  mvp: { title: "MVP", description: "What gets built first" },
  principles: { title: "Principles", description: "Non-negotiable values that guide everything" },
  "identity-verification": { title: "Identity Verification", description: "How one-person-one-account works without compromising privacy" },
  payments: { title: "Payments", description: "How money moves without the platform being a payment processor" },
  "architecture-rfc": { title: "Architecture RFC", description: "Proposed technical design — open for debate" },
  "builder-compensation": { title: "Builder Compensation", description: "How contributors get paid" },
  "investment-model": { title: "Investment Model", description: "How community economics work" },
  "funding-model": { title: "Funding Model", description: "How we raise capital and who decides the terms" },
  "community-certification": { title: "Community Certification", description: "How quality is verified by real experts" },
  "collective-purchasing": { title: "Collective Purchasing", description: "How small shops get bulk pricing power" },
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

export function getAsset(filename: string): string | null {
  const filePath = path.join(DOCS_DIR, "assets", filename);
  if (!fs.existsSync(filePath)) return null;
  return fs.readFileSync(filePath, "utf-8");
}
