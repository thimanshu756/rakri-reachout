"use client";

import { useState } from "react";

export default function PlumbingContactNav({ businessName = "Royal Plumb & Brass" }: { businessName?: string }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: "Services", href: "#" },
    { label: "About", href: "#" },
    { label: "Emergency", href: "#" },
    { label: "Contact", href: "#", active: true },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#FEF9F1]/80 backdrop-blur-md shadow-[0_4px_24px_rgba(26,43,90,0.06)]">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div
          className="text-xl font-extrabold text-[#011545]"
          style={{ fontFamily: "var(--font-manrope)" }}
        >
          {businessName}
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`font-bold tracking-[0.02em] uppercase text-sm transition-transform hover:scale-[1.02] cursor-pointer active:scale-95 ${
                link.active
                  ? "text-[#7E5700] border-b-2 border-[#7E5700] pb-1"
                  : "text-[#011545] hover:text-[#7E5700]"
              }`}
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-[#7E5700] cursor-pointer hover:scale-[1.02] transition-transform">
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              call
            </span>
            <span
              className="hidden lg:inline font-bold text-sm tracking-wide"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              EMERGENCY LINE
            </span>
          </div>
          <button
            className="bg-[#011545] text-white px-6 py-2.5 rounded-lg font-bold uppercase text-xs tracking-wider hover:scale-[1.02] transition-transform duration-200 active:scale-95 shadow-md"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            Book Now
          </button>
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
        <div className="md:hidden px-8 pb-6 bg-[#FEF9F1]/80 backdrop-blur-md">
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
        </div>
      )}
    </nav>
  );
}
