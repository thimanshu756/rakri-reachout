"use client";

export default function ElecContactHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-[#fefce8]">
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(#eab308 0.5px, transparent 0.5px), linear-gradient(to right, #eab308 0.5px, transparent 0.5px), linear-gradient(to bottom, #eab308 0.5px, transparent 0.5px)", backgroundSize: "20px 20px", opacity: 0.05 }} />
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <span className="material-symbols-outlined text-[#eab308] text-5xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
        <h1 className="text-6xl font-black text-[#151c27] uppercase tracking-tighter mb-4 leading-none" style={{ fontFamily: "var(--font-inter-elec)" }}>Contact Us</h1>
        <p className="text-xl text-[#515f74] font-medium max-w-2xl mx-auto mb-12">
          Master licensed. Code compliant. Available 24/7 for electrical emergencies.
        </p>
        {/* Emergency Card */}
        <div className="bg-[#151c27] text-white p-6 rounded-lg border-l-4 border-[#eab308] flex flex-col md:flex-row items-center justify-between gap-6 max-w-3xl mx-auto">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-[#eab308] text-4xl">warning</span>
            <div className="text-left">
              <span className="block text-[#eab308] uppercase text-sm tracking-widest font-bold" style={{ fontFamily: "var(--font-mono-elec)" }}>Is this an electrical emergency?</span>
              <span className="text-lg font-bold">Immediate dispatch available 24/7.</span>
            </div>
          </div>
          <button className="bg-[#eab308] text-[#151c27] px-8 py-3 font-black uppercase tracking-tighter hover:scale-105 transition-transform animate-pulse">
            EMERGENCY LINE
          </button>
        </div>
      </div>
    </section>
  );
}
