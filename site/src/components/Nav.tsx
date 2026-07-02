"use client";

import Link from "next/link";
import { useState } from "react";

const docLinks = [
  { href: "/docs/vision", label: "Vision" },
  { href: "/docs/mvp", label: "What's First" },
  { href: "/docs/principles", label: "Principles" },
  { href: "/docs/architecture-rfc", label: "Architecture" },
  { href: "/docs/builder-compensation", label: "Get Paid" },
  { href: "/docs/investment-model", label: "Invest Together" },
  { href: "/docs/funding-model", label: "Funding" },
  { href: "/docs/community-certification", label: "Certification" },
];

const externalLinks = [
  { href: "https://github.com/thecounterweight/platform", label: "GitHub" },
  { href: "https://discord.gg/MAeXwTcxh", label: "Discord" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="/" className="font-semibold text-zinc-100 hover:text-white transition-colors">
          The Counterweight
        </Link>
        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-5 text-sm text-zinc-400">
          {docLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-zinc-100 transition-colors">
              {link.label}
            </Link>
          ))}
          <span className="w-px h-4 bg-zinc-700" />
          {externalLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-zinc-100 transition-colors">
              {link.label}
            </a>
          ))}
        </div>
        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-zinc-400 hover:text-zinc-100"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-zinc-800 bg-zinc-950 px-6 py-4 space-y-3">
          {docLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="border-t border-zinc-800 pt-3 mt-3 space-y-3">
            {externalLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
