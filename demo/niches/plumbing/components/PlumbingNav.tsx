"use client";

import { useState } from "react";
import { colors, glassNav, navLinks, contactInfo } from "../theme";

export default function PlumbingNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const phoneDigits = contactInfo.phone.replace(/[^\d+]/g, "");

  return (
    <nav
      className="fixed top-0 w-full z-50 transition-all duration-300"
      style={{
        background: glassNav.background,
        backdropFilter: glassNav.backdropFilter,
        WebkitBackdropFilter: glassNav.backdropFilter,
        boxShadow: "0 1px 0 rgba(197, 198, 208, 0.15)",
      }}
    >
      <div className="flex justify-between items-center px-6 lg:px-12 py-4 w-full max-w-[1280px] mx-auto">
        {/* Logo */}
        <a
          href="#"
          className="font-[var(--font-manrope)] text-xl font-extrabold tracking-tight"
          style={{ color: colors.primary }}
        >
          Plumbing Excellence
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-2 text-[13px] font-medium transition-colors"
              style={{ color: colors.onSurfaceVariant, fontFamily: "var(--font-inter)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = colors.primary)}
              onMouseLeave={(e) => (e.currentTarget.style.color = colors.onSurfaceVariant)}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side: Phone + CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`tel:${phoneDigits}`}
            className="flex items-center gap-2 text-[13px] font-semibold transition-colors"
            style={{ color: colors.onSurfaceVariant, fontFamily: "var(--font-inter)" }}
          >
            <span className="material-symbols-outlined text-[18px]">call</span>
            {contactInfo.phone}
          </a>
          <a
            href="#contact"
            className="px-6 py-2.5 text-[13px] font-bold text-white transition-all hover:scale-[1.02] active:scale-95"
            style={{
              background: `linear-gradient(135deg, ${colors.primary}, ${colors.primaryContainer})`,
              borderRadius: "8px",
              fontFamily: "var(--font-inter)",
            }}
          >
            Get Free Quote
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-[2px] w-6 transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`}
            style={{ backgroundColor: colors.primary }}
          />
          <span
            className={`block h-[2px] w-6 transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`}
            style={{ backgroundColor: colors.primary }}
          />
          <span
            className={`block h-[2px] w-6 transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
            style={{ backgroundColor: colors.primary }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="lg:hidden px-6 pb-6"
          style={{
            background: glassNav.background,
            backdropFilter: glassNav.backdropFilter,
            WebkitBackdropFilter: glassNav.backdropFilter,
            borderTop: "1px solid rgba(197, 198, 208, 0.15)",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-[14px] font-medium transition-colors"
              style={{ color: colors.onSurfaceVariant, fontFamily: "var(--font-inter)" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={`tel:${phoneDigits}`}
            className="mt-4 flex items-center justify-center gap-2 py-3 text-[14px] font-bold text-white"
            style={{
              background: `linear-gradient(135deg, ${colors.primary}, ${colors.primaryContainer})`,
              borderRadius: "8px",
            }}
          >
            <span className="material-symbols-outlined text-[18px]">call</span>
            Call {contactInfo.phone}
          </a>
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-3 flex items-center justify-center py-3 text-[14px] font-bold transition-colors"
            style={{
              color: colors.primary,
              border: `2px solid ${colors.primary}`,
              borderRadius: "8px",
            }}
          >
            Get Free Quote
          </a>
        </div>
      )}
    </nav>
  );
}
