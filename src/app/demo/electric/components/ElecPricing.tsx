"use client";

export default function ElecPricing() {
  return (
    <section className="py-24 bg-[#fefce8]" id="pricing">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#785a00] font-bold tracking-[0.3em] mb-4" style={{ fontFamily: "var(--font-mono-elec)" }}>PRICING TIERS</p>
          <h2 className="text-5xl font-black tracking-tighter uppercase" style={{ fontFamily: "var(--font-inter-elec)" }}>Transparent Engineering Rates</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Service Call */}
          <div className="bg-white p-10 border-t-4 border-slate-200">
            <h3 className="font-black uppercase tracking-widest text-xs mb-6 text-[#515f74]">Service Call</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-black">$79</span>
              <span className="text-[#515f74] text-sm">Flat Rate</span>
            </div>
            <ul className="space-y-4 mb-10 text-sm text-[#515f74]">
              {["Comprehensive Diagnostics", "Safety Assessment", "Upfront Quote Provided"].map((i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-xs text-[#785a00]">check</span> {i}
                </li>
              ))}
            </ul>
            <button className="w-full border-2 border-[#151c27] py-3 font-black uppercase text-xs tracking-widest hover:bg-[#151c27] hover:text-white transition-all">Select</button>
          </div>
          {/* Panel Upgrade - Popular */}
          <div className="bg-white p-10 border-t-4 border-[#eab308] shadow-2xl relative z-10">
            <div className="absolute -top-4 right-6 bg-[#eab308] text-[#604700] px-3 py-1 text-[10px] font-black uppercase">Most Popular</div>
            <h3 className="font-black uppercase tracking-widest text-xs mb-6 text-[#515f74]">Panel Upgrade</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-[#515f74] text-sm">From</span>
              <span className="text-4xl font-black">$1,499</span>
            </div>
            <ul className="space-y-4 mb-10 text-sm text-[#515f74]">
              {["200 Amp Modern Capacity", "Surge Protection Included", "Permitting & Inspections"].map((i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-xs text-[#785a00]">check</span> {i}
                </li>
              ))}
            </ul>
            <button className="w-full bg-[#eab308] text-[#604700] py-3 font-black uppercase text-xs tracking-widest hover:brightness-110">Book Now</button>
          </div>
          {/* EV Charger */}
          <div className="bg-white p-10 border-t-4 border-slate-200">
            <h3 className="font-black uppercase tracking-widest text-xs mb-6 text-[#515f74]">EV Charger Install</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-[#515f74] text-sm">From</span>
              <span className="text-4xl font-black">$899</span>
            </div>
            <ul className="space-y-4 mb-10 text-sm text-[#515f74]">
              {["Dedicated 240V Circuit", "Hardwired or Plug-in", "3-Year Warranty"].map((i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-xs text-[#785a00]">check</span> {i}
                </li>
              ))}
            </ul>
            <button className="w-full border-2 border-[#151c27] py-3 font-black uppercase text-xs tracking-widest hover:bg-[#151c27] hover:text-white transition-all">Select</button>
          </div>
        </div>
      </div>
    </section>
  );
}
