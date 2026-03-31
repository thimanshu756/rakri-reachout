"use client";

import { useState } from "react";

export default function ElecContactNav({ businessName = "PowerLine Electric", phone = "(800) 555-VOLT" }: { businessName?: string; phone?: string }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const links = [
    { label: "Services", href: "#" },
    { label: "Results", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "Contact", href: "#", active: true },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-6 h-16 bg-white border-b-2 border-[#eab308]">
      <div className="flex items-center gap-2">
        <span className="material-symbols-outlined text-[#eab308]" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
        <span className="text-xl font-black text-[#151c27] uppercase tracking-tighter" style={{ fontFamily: "var(--font-inter-elec)" }}>{businessName}</span>
      </div>
      <div className="hidden md:flex items-center gap-8">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className={l.active
              ? "font-bold uppercase tracking-tighter text-[#785a00] border-b-2 border-[#785a00] pb-1"
              : "font-bold uppercase tracking-tighter text-[#515f74] hover:text-[#785a00] transition-colors"
            }
            style={{ fontFamily: "var(--font-inter-elec)" }}
          >
            {l.label}
          </a>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <div className="hidden lg:flex items-center gap-2 text-sm font-bold text-[#151c27]" style={{ fontFamily: "var(--font-mono-elec)" }}>
          <span className="material-symbols-outlined text-[#eab308] text-lg">bolt</span>
          <span>{phone}</span>
        </div>
        <button className="bg-[#151c27] text-[#eab308] px-4 py-2 text-xs font-black uppercase tracking-tight hover:opacity-90 transition-all">
          GET QUOTE
        </button>
      </div>
      <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-[#151c27]" aria-label="Toggle menu">
        <span className="material-symbols-outlined">menu</span>
      </button>
      {mobileOpen && (
        <div className="absolute top-16 left-0 w-full bg-white border-b border-slate-100 px-6 pb-4 md:hidden">
          {links.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setMobileOpen(false)} className="block py-3 font-bold uppercase tracking-tighter text-[#515f74]">{l.label}</a>
          ))}
        </div>
      )}
    </nav>
  );
}
