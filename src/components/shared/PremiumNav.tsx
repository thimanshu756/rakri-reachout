"use client";

import { useState } from "react";
import { NicheConfig } from "@/lib/niche-config";
import ThemeToggle from "./ThemeToggle";

interface Props {
  businessName: string;
  phone: string;
  config: NicheConfig;
}

export default function PremiumNav({ businessName, phone, config }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const phoneDigits = phone.replace(/[^\d+]/g, "");

  return (
    <header className="fixed top-0 w-full z-50 bg-slate-950/60 dark:bg-slate-950/60 light:bg-white/80 backdrop-blur-xl border-b border-slate-800/20 dark:border-slate-800/20 shadow-2xl">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto font-[family-name:var(--font-manrope)] font-bold tracking-tight">
        {/* Logo */}
        <a
          className="text-xl md:text-2xl font-extrabold bg-clip-text text-transparent"
          style={{
            backgroundImage: `linear-gradient(135deg, ${config.theme.primary}, ${config.theme.secondary})`,
          }}
          href="#"
        >
          {businessName}
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {config.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-300 dark:text-slate-300 hover:opacity-80 transition-colors text-sm"
              style={{ ["--tw-text-opacity" as string]: 1 }}
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle variant="nav" />
          <a
            href={`tel:${phoneDigits}`}
            className="ml-2 px-5 py-2 rounded-xl font-bold text-sm transition-all active:scale-95 btn-glow"
            style={{
              backgroundColor: config.theme.primary,
              color: config.theme.darkBg,
              ["--niche-glow" as string]: config.theme.glow,
            }}
          >
            Call: {phone}
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-slate-300"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-800/20 bg-slate-950/95 backdrop-blur-xl animate-slide-up">
          <div className="px-6 py-4 space-y-4">
            {config.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-slate-300 font-semibold py-2"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={`tel:${phoneDigits}`}
              className="block w-full text-center px-5 py-3 rounded-xl font-bold"
              style={{ backgroundColor: config.theme.primary, color: config.theme.darkBg }}
            >
              Call: {phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
