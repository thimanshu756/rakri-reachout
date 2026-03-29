"use client";

export default function ElecContactCTA() {
  return (
    <section className="bg-[#eab308] py-16 px-6 relative">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
        <div>
          <h2 className="text-3xl md:text-5xl font-black text-[#151c27] uppercase tracking-tighter leading-none mb-2" style={{ fontFamily: "var(--font-inter-elec)" }}>Safe Wiring. Expert Service. Guaranteed.</h2>
          <p className="text-[#4f4633] font-bold">Call now or submit the form — we respond within 1 hour.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-[#151c27] text-white px-10 py-4 font-black uppercase tracking-widest hover:scale-105 transition-transform">Call Now</button>
          <button className="border-2 border-[#151c27] text-[#151c27] px-10 py-4 font-black uppercase tracking-widest hover:bg-[#151c27] hover:text-white transition-all">Book Service</button>
        </div>
      </div>
    </section>
  );
}
