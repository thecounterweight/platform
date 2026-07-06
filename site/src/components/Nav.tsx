"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const docLinks = [
  { href: "/docs/overview", label: "Start Here" },
  { href: "/docs/vision", label: "Vision" },
  { href: "/docs/mvp", label: "What's First" },
  { href: "/docs/principles", label: "Principles" },
  { href: "/docs/identity-verification", label: "Identity" },
  { href: "/docs/payments", label: "Payments" },
  { href: "/docs/architecture-rfc", label: "Architecture" },
  { href: "/docs/builder-compensation", label: "Get Paid" },
  { href: "/docs/contracts", label: "Contracts" },
  { href: "/docs/funding-model", label: "Funding" },
  { href: "/docs/community-certification", label: "Certification" },
  { href: "/docs/collective-purchasing", label: "Bulk Buying" },
];

const externalLinks = [
  { href: "https://github.com/thecounterweight/platform", label: "GitHub" },
  { href: "https://discord.gg/MAeXwTcxh", label: "Discord" },
];

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [docsOpen, setDocsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDocsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="/" className="font-semibold text-zinc-100 hover:text-white transition-colors">
          The Counterweight
        </Link>
        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6 text-sm text-zinc-400">
          {/* Docs dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setDocsOpen(!docsOpen)}
              className="hover:text-zinc-100 transition-colors flex items-center gap-1"
            >
              Docs
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                <path d={docsOpen ? "M3 7.5L6 4.5L9 7.5" : "M3 4.5L6 7.5L9 4.5"} />
              </svg>
            </button>
            {docsOpen && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-zinc-900 border border-zinc-800 rounded-lg shadow-xl py-2">
                {docLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setDocsOpen(false)}
                    className="block px-4 py-2 text-sm text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          {externalLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-zinc-100 transition-colors">
              {link.label}
            </a>
          ))}
        </div>
        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-zinc-400 hover:text-zinc-100"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-zinc-800 bg-zinc-950 px-6 py-4 space-y-3">
          {docLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
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
