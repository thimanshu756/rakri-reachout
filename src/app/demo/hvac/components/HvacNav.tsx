"use client";

import { useState } from "react";

export default function HvacNav({ businessName = "ComfortPro HVAC", phone = "(555) 234-5678" }: { businessName?: string; phone?: string }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Why Us", href: "#whyus" },
    { label: "FAQ", href: "#faq" },
    { label: "Testimonials", href: "#testimonials" },
  ];

  return (
    <nav
      className="fixed top-0 w-full z-50 border-b shadow-sm"
      style={{
        background: "rgba(252, 249, 244, 0.8)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderColor: "rgba(139, 114, 104, 0.15)",
      }}
    >
      <div className="flex justify-between items-center w-full px-8 py-4 max-w-full mx-auto">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 font-extrabold text-[#a13b05] min-w-0 shrink-0 max-w-[280px] lg:max-w-[320px]"
          style={{ fontFamily: "var(--font-manrope)" }}
        >
          <span
            className="material-symbols-outlined text-[#a13b05] shrink-0"
            style={{ fontVariationSettings: "'FILL' 1", fontSize: "28px" }}
          >
            local_fire_department
          </span>
          <span className=" text-lg lg:text-xl leading-tight">{businessName}</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          <div
            className="flex items-center space-x-8 font-bold tracking-[0.02em] uppercase text-sm"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#1c1c19] hover:text-[#a13b05] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-6 ml-8">
            {/* Verified Badge */}
            <div className="hidden xl:flex items-center gap-1.5 text-[#805600] text-xs font-bold">
              <span
                className="material-symbols-outlined text-[#805600]"
                style={{ fontVariationSettings: "'FILL' 1", fontSize: "18px" }}
              >
                verified
              </span>
              <span style={{ fontFamily: "var(--font-manrope)" }}>Trusted HVAC Experts Since 2012</span>
            </div>
            <div className="flex items-center gap-2 text-[#1c1c19] font-bold">
              <span
                className="material-symbols-outlined text-[#a13b05]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                call
              </span>
              <span className="text-sm">{phone}</span>
            </div>
    
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-[#1c1c19]"
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined">{mobileOpen ? "close" : "menu"}</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="lg:hidden px-8 pb-6"
          style={{
            background: "rgba(252, 249, 244, 0.95)",
            backdropFilter: "blur(12px)",
            borderTop: "1px solid rgba(139, 114, 104, 0.15)",
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
          <div className="flex items-center gap-2 py-3 text-[#1c1c19] font-bold">
            <span
              className="material-symbols-outlined text-[#a13b05]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              call
            </span>
            <span>{phone}</span>
          </div>
      
        </div>
      )}
    </nav>
  );
}
