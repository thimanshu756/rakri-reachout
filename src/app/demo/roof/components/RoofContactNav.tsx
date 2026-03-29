"use client";

import { useState } from "react";

export default function RoofContactNav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: "Services", href: "#" },
    { label: "Project Gallery", href: "#" },
    { label: "About Us", href: "#" },
    { label: "Contact", href: "#", active: true },
  ];

  return (
    <header className="bg-[#fbf9f6]/85 backdrop-blur-xl sticky top-0 z-50 shadow-[0_8px_32px_rgba(30,37,48,0.08)]">
      <div className="flex justify-between items-center w-full px-8 py-4 max-w-screen-2xl mx-auto">
        <div
          className="text-xl font-black uppercase tracking-tighter text-[#1b1c1a]"
          style={{ fontFamily: "var(--font-epilogue)" }}
        >
          STRONGROOF CO.
        </div>
        <nav className="hidden md:flex gap-8 items-center">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={
                link.active
                  ? "text-[#9e2016] border-b-4 border-[#9e2016] pb-1 font-semibold"
                  : "text-[#1b1c1a] hover:text-[#9e2016] transition-colors font-semibold"
              }
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button
          className="bg-[#9e2016] text-white px-6 py-2 uppercase text-sm tracking-wider hover:bg-[#c0392b] transition-all active:scale-95 duration-150"
          style={{ fontFamily: "var(--font-epilogue)" }}
        >
          Free Inspection
        </button>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-[#1b1c1a]"
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
      {mobileOpen && (
        <div className="md:hidden px-8 pb-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-[#1b1c1a] font-semibold hover:text-[#9e2016]"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
