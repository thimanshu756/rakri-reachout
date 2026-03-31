"use client";

import { useState } from "react";

export default function ElecNav({ businessName = "PowerLine Electric", phone = "(555) 012-3456" }: { businessName?: string; phone?: string }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const links = [
    { label: "Services", href: "#services" },
    { label: "Safety", href: "#safety" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white border-b-2 border-slate-100">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <span
            className="text-xl font-black tracking-tighter text-slate-900 uppercase"
            style={{ fontFamily: "var(--font-inter-elec)" }}
          >
            {businessName}
          </span>
        </div>
        <div className="hidden md:flex gap-8 items-center">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-slate-600 font-bold text-sm uppercase tracking-tighter hover:text-slate-900 transition-colors"
              style={{ fontFamily: "var(--font-inter-elec)" }}
            >
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex flex-col items-end">
            <span
              className="text-xs text-[#785a00] uppercase font-bold tracking-widest"
              style={{ fontFamily: "var(--font-mono-elec)" }}
            >
              24/7 Service
            </span>
            <span className="text-sm font-bold text-[#151c27]">
              Emergency: {phone}
            </span>
          </div>
          <button
            className="bg-[#eab308] text-[#604700] px-4 py-2 text-xs font-black uppercase tracking-widest hover:brightness-110 transition-all active:opacity-80"
            style={{ fontFamily: "var(--font-inter-elec)" }}
          >
            Book Now
          </button>
        </div>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-slate-900"
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
      {mobileOpen && (
        <div className="md:hidden px-6 pb-4 bg-white border-t border-slate-100">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm font-bold uppercase tracking-tighter text-slate-600"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
