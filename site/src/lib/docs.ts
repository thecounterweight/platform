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

interface DocEntry {
  title: string;
  description: string;
  folder: "start-here" | "building" | "joining" | "future";
}

const DOC_META: Record<string, DocEntry> = {
  // Start here — everyone reads these
  overview: { title: "Overview", description: "The entire system in one page — start here", folder: "start-here" },
  vision: { title: "Vision", description: "The full picture — what we're building and why", folder: "start-here" },
  mvp: { title: "MVP", description: "What gets built first", folder: "start-here" },
  principles: { title: "Principles", description: "Non-negotiable values that guide everything", folder: "start-here" },
  // Building — contributors writing code
  "identity-verification": { title: "Identity Verification", description: "How one-person-one-account works without compromising privacy", folder: "building" },
  payments: { title: "Payments", description: "How money moves without the platform being a payment processor", folder: "building" },
  "architecture-rfc": { title: "Architecture RFC", description: "Proposed technical design — open for debate", folder: "building" },
  contracts: { title: "Contracts", description: "Contract infrastructure for verified humans", folder: "building" },
  // Joining — deciding whether to contribute or invest
  "builder-compensation": { title: "Builder Compensation", description: "How contributors get paid", folder: "joining" },
  "funding-model": { title: "Funding Model", description: "How we raise capital and who decides the terms", folder: "joining" },
  // Future — later milestones
  "community-certification": { title: "Community Certification", description: "How quality is verified by real experts", folder: "future" },
  "collective-purchasing": { title: "Collective Purchasing", description: "How small shops get bulk pricing power", folder: "future" },
};

export interface DocSection {
  label: string;
  docs: DocMeta[];
}

export function getAllDocs(): DocMeta[] {
  return Object.entries(DOC_META).map(([slug, meta]) => ({
    slug,
    title: meta.title,
    description: meta.description,
  }));
}

export function getDocsBySection(): DocSection[] {
  const sections: { folder: string; label: string }[] = [
    { folder: "start-here", label: "Start Here" },
    { folder: "building", label: "Building" },
    { folder: "joining", label: "Joining" },
    { folder: "future", label: "Future" },
  ];

  return sections.map(({ folder, label }) => ({
    label,
    docs: Object.entries(DOC_META)
      .filter(([, meta]) => meta.folder === folder)
      .map(([slug, meta]) => ({ slug, title: meta.title, description: meta.description })),
  }));
}

export function getDocContent(slug: string): string | null {
  if (slug === "principles") {
    if (!fs.existsSync(PRINCIPLES_PATH)) return null;
    return fs.readFileSync(PRINCIPLES_PATH, "utf-8");
  }

  const meta = DOC_META[slug];
  if (!meta) return null;

  const filePath = path.join(DOCS_DIR, meta.folder, `${slug}.md`);
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
