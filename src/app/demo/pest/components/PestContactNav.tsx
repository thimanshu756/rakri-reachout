"use client";
import { useState } from "react";
export default function PestContactNav({ businessName = "GreenShield Pest" }: { businessName?: string }) {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Solutions", href: "#" },
    { label: "Our Science", href: "#" },
    { label: "Eco-Impact", href: "#" },
    { label: "Contact", href: "#", active: true },
  ];
  return (
    <nav className="fixed top-0 w-full z-50 bg-emerald-50/80 backdrop-blur-md shadow-[0_12px_40px_rgba(5,46,22,0.04)]">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <div className="text-xl font-extrabold text-emerald-900 flex items-center gap-2" style={{ fontFamily: "var(--font-jakarta)" }}>
          <span className="material-symbols-outlined text-[#006e2f] text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
          {businessName}
        </div>
        <div className="hidden md:flex gap-8 items-center font-semibold text-sm tracking-tight" style={{ fontFamily: "var(--font-jakarta)" }}>
          {links.map((l) => (
            <a key={l.label} href={l.href} className={l.active ? "text-emerald-700 border-b-2 border-emerald-500 pb-1 hover:scale-105 transition-transform" : "text-emerald-900/70 hover:text-emerald-900 hover:scale-105 transition-transform"}>{l.label}</a>
          ))}
        </div>
        <button className="bg-[#22c55e] text-[#004b1e] px-6 py-2.5 rounded-2xl font-bold text-sm hover:scale-105 active:scale-95 transition-all shadow-sm" style={{ fontFamily: "var(--font-jakarta)" }}>Get Quote</button>
        <button onClick={() => setOpen(!open)} className="md:hidden text-emerald-900" aria-label="Menu"><span className="material-symbols-outlined">menu</span></button>
      </div>
      {open && (<div className="md:hidden px-8 pb-4 bg-emerald-50/80 backdrop-blur-md">{links.map((l) => (<a key={l.label} href={l.href} onClick={() => setOpen(false)} className="block py-3 text-sm font-semibold text-emerald-900/70">{l.label}</a>))}</div>)}
    </nav>
  );
}
