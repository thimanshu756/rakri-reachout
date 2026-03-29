"use client";
export default function PestCTABanner() {
  return (
    <section className="px-8 pb-24">
      <div className="max-w-7xl mx-auto bg-[#004b1e] rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden">
        <div className="absolute -top-32 -left-32 w-80 h-80 bg-[#006e2f]/20" style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }} />
        <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-[#22c55e]/10" style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }} />
        <div className="relative z-10 max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight" style={{ fontFamily: "var(--font-jakarta)" }}>Your Home Deserves to Be Pest-Free.</h2>
          <p className="text-xl text-emerald-50/80">Join the 300+ local families who trust GreenShield for their botanical pest protection.</p>
          <div className="flex flex-wrap justify-center gap-6 pt-4">
            <button className="bg-[#22c55e] text-[#004b1e] font-bold px-10 py-5 rounded-xl hover:scale-105 transition-all text-lg shadow-xl shadow-[#006e2f]/20" style={{ fontFamily: "var(--font-jakarta)" }}>Get Your Free Inspection</button>
            <button className="border-2 border-white/30 text-white font-bold px-10 py-5 rounded-xl hover:bg-white/10 transition-all text-lg backdrop-blur-sm" style={{ fontFamily: "var(--font-jakarta)" }}>Call Us Now</button>
          </div>
          <p className="text-emerald-100/40 text-sm italic">Certified Service Provider • EPA Compliant • Satisfaction Guaranteed</p>
        </div>
      </div>
    </section>
  );
}
