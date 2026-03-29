"use client";

import { useState } from "react";

export default function PlumbingNav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
    { label: "Emergency", href: "#emergency", active: true },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-[#C5C6D0]/15 shadow-sm">
      <div className="flex justify-between items-center w-full px-8 py-4 max-w-full mx-auto">
        {/* Logo */}
        <a
          href="#"
          className="text-2xl font-extrabold text-[#011545] uppercase"
          style={{ fontFamily: "var(--font-manrope)" }}
        >
          Plumbing Excellence
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <div
            className="flex items-center space-x-8 font-bold tracking-[0.02em] uppercase text-sm"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`transition-transform hover:scale-105 ${
                  link.active
                    ? "text-[#7E5700]"
                    : "text-[#011545] hover:text-[#7E5700]"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-6 ml-8">
            <div className="flex items-center gap-2 text-[#011545] font-bold">
              <span
                className="material-symbols-outlined text-[#7E5700]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                call
              </span>
              <span>(555) 123-4567</span>
            </div>
            <button
              className="bg-[#7E5700] text-white px-6 py-3 rounded-full text-xs font-bold tracking-wider hover:scale-105 transition-transform"
              style={{
                fontFamily: "var(--font-manrope)",
                boxShadow: "0 4px 24px rgba(26,43,90,0.06)",
              }}
            >
              Get Free Quote
            </button>
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-[#011545]"
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden px-8 pb-6 bg-white/80 backdrop-blur-md border-t border-[#C5C6D0]/15">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm font-bold uppercase tracking-[0.02em] text-[#011545] hover:text-[#7E5700]"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-2 py-3 text-[#011545] font-bold">
            <span
              className="material-symbols-outlined text-[#7E5700]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              call
            </span>
            <span>(555) 123-4567</span>
          </div>
          <button
            className="w-full mt-2 bg-[#7E5700] text-white px-6 py-3 rounded-full text-xs font-bold tracking-wider"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            Get Free Quote
          </button>
        </div>
      )}
    </nav>
  );
}
