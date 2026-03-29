"use client";

export default function HvacCTAFooter() {
  return (
    <section className="py-20 px-8 relative overflow-hidden bg-[#805600]">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10 flex flex-wrap gap-20 p-10 pointer-events-none">
        <span className="material-symbols-outlined text-9xl" style={{ fontVariationSettings: "'FILL' 1" }}>
          local_fire_department
        </span>
        <span className="material-symbols-outlined text-9xl absolute right-20 bottom-0" style={{ fontVariationSettings: "'FILL' 1" }}>
          local_fire_department
        </span>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2
          className="font-extrabold text-3xl md:text-5xl text-white uppercase tracking-tight mb-10 leading-tight"
          style={{ fontFamily: "var(--font-manrope)" }}
        >
          Ready to perfect your home&apos;s comfort?
        </h2>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button
            className="text-white px-10 py-5 rounded-lg font-bold uppercase tracking-widest hover:scale-[1.05] transition-transform duration-300 shadow-xl"
            style={{
              fontFamily: "var(--font-manrope)",
              background: "linear-gradient(135deg, #a13b05, #c1521f)",
            }}
          >
            Call Now
          </button>
          <button
            className="border-2 border-white text-white px-10 py-5 rounded-lg font-bold uppercase tracking-widest hover:bg-white/10 transition-colors"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            Book Online
          </button>
        </div>
      </div>
    </section>
  );
}
