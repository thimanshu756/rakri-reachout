"use client";

import { useState } from "react";
import { NicheConfig } from "@/lib/niche-config";
import ThemeToggle from "@/components/shared/ThemeToggle";

interface Props {
  businessName: string;
  phone: string;
  config: NicheConfig;
}

export default function PremiumNav({ businessName, phone, config }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const phoneDigits = phone.replace(/[^\d+]/g, "");

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/40 dark:bg-[--niche-dark-surface]/60 backdrop-blur-3xl shadow-xl shadow-black/10 transition-all duration-300">
      <div className="flex justify-between items-center px-6 md:px-8 py-4 md:py-6 w-full max-w-screen-2xl mx-auto">
        {/* Logo */}
        <div
          className="text-xl font-extrabold tracking-tighter uppercase font-heading"
          style={{ color: config.theme.primary }}
        >
          {businessName}
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {config.navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-1 text-xs font-bold uppercase tracking-widest text-stone-400 hover:text-[--niche-primary] dark:text-[--niche-on-surface-variant] dark:hover:text-[--niche-primary] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Phone CTA */}
        <a
          href={`tel:${phoneDigits}`}
          className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-6 py-2.5 rounded-full border transition-all hover:scale-105 active:scale-95"
          style={{
            color: config.theme.primary,
            borderColor: `${config.theme.primary}30`,
          }}
        >
          <span className="material-symbols-outlined text-sm">call</span>
          {phone}
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
            style={{ backgroundColor: config.theme.primary }}
          />
          <span
            className={`block h-0.5 w-6 transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`}
            style={{ backgroundColor: config.theme.primary }}
          />
          <span
            className={`block h-0.5 w-6 transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
            style={{ backgroundColor: config.theme.primary }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white/95 dark:bg-[--niche-dark-surface]/95 backdrop-blur-xl border-t border-black/5 dark:border-white/5 px-6 pb-6">
          {config.navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm font-bold uppercase tracking-widest text-stone-500 dark:text-stone-400 hover:text-[--niche-primary] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`tel:${phoneDigits}`}
            className="mt-4 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-white text-sm"
            style={{ backgroundColor: config.theme.primary }}
          >
            <span className="material-symbols-outlined text-sm">call</span>
            Call {phone}
          </a>
          <div className="mt-3 flex justify-center">
            <ThemeToggle />
          </div>
        </div>
      )}
    </nav>
  );
}
