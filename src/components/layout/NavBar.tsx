"use client";

import { ThemeToggle } from "@/components/ui/ThemeToggle";

const LINKS = [
  { href: "/#work", label: "work" },
  { href: "/#projects", label: "projects" },
  { href: "/#collections", label: "collections" },
];

export function Navbar() {
  return (
    <nav className="hidden md:block sticky top-12 self-start space-y-8 text-right text-sm text-[var(--text-muted)]">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
        className="inline-block transition-transform duration-200 hover:scale-110 hover:-rotate-12"
        type="button"
      >
        🐵
      </button>


      {LINKS.map((link) => (
        <a key={link.href} href={link.href} className="block w-full hover:text-[var(--text-primary)]">
          {link.label}
        </a>
      ))}
      <ThemeToggle />
    </nav>
  );
}
