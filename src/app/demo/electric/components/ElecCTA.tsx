"use client";

export default function ElecCTA({ phone = "(555) 012-3456" }: { phone?: string }) {
  return (
    <section
      className="py-24 bg-[#151c27] text-white relative"
      style={{
        backgroundImage: "radial-gradient(circle at 2px 2px, rgba(234, 179, 8, 0.05) 1px, transparent 0)",
        backgroundSize: "24px 24px",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <div className="inline-block p-4 border-2 border-[#eab308] mb-8">
          <span
            className="material-symbols-outlined text-4xl text-[#eab308]"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            emergency_home
          </span>
        </div>
        <h2
          className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-none"
          style={{ fontFamily: "var(--font-inter-elec)" }}
        >
          Electrical Emergency? <br />
          <span className="text-[#eab308]">Call Now.</span>
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <a
            className="bg-[#eab308] text-[#604700] px-10 py-5 text-lg font-black uppercase tracking-widest hover:scale-105 transition-transform"
            href="tel:5550123456"
          >
            {phone}
          </a>
          <button className="border-2 border-white text-white px-10 py-5 text-lg font-black uppercase tracking-widest hover:bg-white hover:text-[#151c27] transition-all">
            Request Priority Dispatch
          </button>
        </div>
        <p
          className="mt-8 text-xs text-[#b9c7df] uppercase tracking-widest"
          style={{ fontFamily: "var(--font-mono-elec)" }}
        >
          Average Arrival: 45 Minutes
        </p>
      </div>
    </section>
  );
}
