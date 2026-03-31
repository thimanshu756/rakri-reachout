"use client";

export default function ElecContactFooter({ businessName = "{businessName}", phone = "(800) 555-8658" }: { businessName?: string; phone?: string }) {
  return (
    <footer className="bg-[#151c27] text-slate-400 py-12 px-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative">
      <div className="absolute top-0 left-0 w-full h-[2px] bg-[#eab308] opacity-20" />
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-white text-lg">bolt</span>
          <span className="text-lg font-bold text-white" style={{ fontFamily: "var(--font-inter-elec)" }}>{businessName}</span>
        </div>
        <p className="text-xs uppercase tracking-widest" style={{ fontFamily: "var(--font-mono-elec)" }}>&copy; {new Date().getFullYear()} {businessName}. ALL RIGHTS RESERVED.</p>
      </div>
      <div className="flex flex-wrap gap-8">
        {["Privacy Policy", "Terms of Service", "Safety Protocols", "Emergency Guide"].map((l) => (
          <a key={l} href="#" className="text-xs uppercase tracking-widest hover:text-[#eab308] transition-opacity" style={{ fontFamily: "var(--font-mono-elec)" }}>{l}</a>
        ))}
      </div>
      <div className="text-right">
        <p className="text-[#eab308] font-black text-lg" style={{ fontFamily: "var(--font-mono-elec)" }}>{phone}</p>
        <p className="text-[10px] uppercase tracking-[0.2em]">Service Status: Online</p>
      </div>
    </footer>
  );
}
