"use client";

import { useState } from "react";

export default function RoofNav({ businessName = "StrongRoof Co.", phone = "(555) 010-9988" }: { businessName?: string; phone?: string }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <>
      {/* Storm Alert Banner */}
      <div className="bg-[#9e2016] text-white py-3 px-4 text-center z-[60] relative">
        <p
          className="text-sm md:text-base tracking-widest flex items-center justify-center gap-2"
          style={{ fontFamily: "var(--font-epilogue)" }}
        >
          <span
            className="material-symbols-outlined text-xl"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            warning
          </span>
          STORM SEASON ALERT — EMERGENCY REPAIRS AVAILABLE NOW
        </p>
      </div>

      {/* Navigation */}
      <nav className="fixed top-12 md:top-11 w-full z-50 bg-white/85 backdrop-blur-xl shadow-[0_8px_32px_rgba(30,37,48,0.08)]">
        <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
          <div
            className="text-xl font-black uppercase tracking-tighter text-[#1b1c1a]"
            style={{ fontFamily: "var(--font-epilogue)" }}
          >
            {businessName}
          </div>
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-700 font-medium hover:text-[#9e2016] transition-colors"
                style={{ fontFamily: "var(--font-inter-roof)" }}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <a
              className="hidden lg:block font-bold text-[#151c27] hover:text-[#9e2016] transition-colors"
              href="tel:5550109988"
            >
              {phone}
            </a>
            <button
              className="bg-[#9e2016] hover:bg-[#c0392b] text-white px-6 py-2.5 text-xs tracking-widest uppercase transition-all active:scale-95 relative"
              style={{ fontFamily: "var(--font-epilogue)" }}
            >
              Free Inspection
              <span className="absolute top-0 right-0 w-10 h-[3px] bg-[#9e2016] -rotate-3" />
            </button>
          </div>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-[#1b1c1a]"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
        {mobileOpen && (
          <div className="md:hidden px-6 pb-6 bg-white/85 backdrop-blur-xl">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-slate-700 font-medium hover:text-[#9e2016]"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}
