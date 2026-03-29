"use client";

import { useState } from "react";

export default function HvacContactNav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: "Services", href: "/demo/hvac#services" },
    { label: "About", href: "/demo/hvac#about" },
    { label: "Emergency", href: "#" },
    { label: "Contact", href: "#", active: true },
  ];

  return (
    <nav
      className="fixed top-0 w-full z-50 shadow-sm"
      style={{
        background: "rgba(252, 249, 244, 0.8)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        boxShadow: "0 4px 24px rgba(161,59,5,0.06)",
      }}
    >
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <a
          href="/demo/hvac"
          className="flex items-center gap-2 text-xl font-extrabold text-[#a13b05]"
          style={{ fontFamily: "var(--font-manrope)" }}
        >
          <span
            className="material-symbols-outlined"
            style={{ fontVariationSettings: "'FILL' 1", fontSize: "24px" }}
          >
            local_fire_department
          </span>
          Precision &amp; Comfort
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`font-bold tracking-[0.02em] uppercase text-sm transition-transform hover:scale-[1.02] cursor-pointer active:scale-95 ${
                link.active
                  ? "text-[#a13b05] border-b-2 border-[#a13b05] pb-1"
                  : "text-[#1c1c19] hover:text-[#a13b05]"
              }`}
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-[#a13b05] cursor-pointer hover:scale-[1.02] transition-transform">
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
            className="text-white px-6 py-2.5 rounded-lg font-bold uppercase text-xs tracking-wider hover:scale-[1.02] transition-transform duration-200 active:scale-95 shadow-md"
            style={{
              fontFamily: "var(--font-manrope)",
              background: "linear-gradient(135deg, #a13b05, #c1521f)",
            }}
          >
            Book Now
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-[#1c1c19]"
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined">{mobileOpen ? "close" : "menu"}</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="md:hidden px-8 pb-6"
          style={{
            background: "rgba(252, 249, 244, 0.95)",
            backdropFilter: "blur(12px)",
          }}
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm font-bold uppercase tracking-[0.02em] text-[#1c1c19] hover:text-[#a13b05]"
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
