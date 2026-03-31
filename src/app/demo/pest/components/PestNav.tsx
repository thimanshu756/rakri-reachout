"use client";
import { useState } from "react";

export default function PestNav({ businessName = "GreenShield Pest" }: { businessName?: string }) {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Services", href: "#services", active: true },
    { label: "Plans", href: "#plans" },
    { label: "Results", href: "#results" },
    { label: "FAQ", href: "#faq" },
  ];
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-[0_12px_40px_rgba(5,46,22,0.04)]">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <div className="text-xl font-extrabold text-emerald-900 flex items-center gap-2" style={{ fontFamily: "var(--font-jakarta)" }}>
          <span className="material-symbols-outlined text-[#006e2f]">shield</span>
          {businessName}
        </div>
        <div className="hidden md:flex gap-8 items-center text-sm font-medium tracking-tight" style={{ fontFamily: "var(--font-jakarta)" }}>
          {links.map((l) => (
            <a key={l.label} href={l.href} className={l.active ? "text-emerald-700 font-bold border-b-2 border-emerald-600 pb-1 hover:scale-105 transition-transform" : "text-slate-600 hover:text-emerald-900 hover:scale-105 transition-transform"}>{l.label}</a>
          ))}
        </div>
        <div className="flex gap-4 items-center">
          <button className="hidden lg:block text-emerald-700 font-bold px-4 py-2 hover:scale-105 transition-transform">Call Us</button>
          <button className="bg-[#22c55e] text-[#004b1e] font-bold px-6 py-2.5 rounded-lg hover:scale-105 transition-all shadow-sm active:scale-95" style={{ fontFamily: "var(--font-jakarta)" }}>Get Protected</button>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-emerald-900" aria-label="Menu"><span className="material-symbols-outlined">menu</span></button>
      </div>
      {open && (
        <div className="md:hidden px-8 pb-4 bg-white/80 backdrop-blur-md">
          {links.map((l) => (<a key={l.label} href={l.href} onClick={() => setOpen(false)} className="block py-3 text-sm font-medium text-slate-600 hover:text-emerald-900">{l.label}</a>))}
        </div>
      )}
    </nav>
  );
}
