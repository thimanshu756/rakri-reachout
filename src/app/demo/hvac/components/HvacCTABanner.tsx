"use client";

export default function HvacCTABanner({ phone = "(555) 234-5678" }: { phone?: string }) {
  return (
    <section className="py-24 px-8" style={{ background: "#f5f0e6" }} id="emergency">
      <div
        className="max-w-7xl mx-auto bg-white p-12 md:p-20 rounded-[40px] text-center overflow-hidden relative"
        style={{
          boxShadow: "0 4px 24px rgba(161,59,5,0.06)",
          border: "1px solid rgba(139, 114, 104, 0.2)",
        }}
      >
        <div className="relative z-10 space-y-8">
          <h2
            className="text-4xl md:text-6xl font-extrabold text-[#1c1c19] tracking-tight"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            Need Fast HVAC Service?
            <br />
            We&apos;re Ready 24/7!
          </h2>
          <p
            className="text-[#45464F] max-w-2xl mx-auto text-lg"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Don&apos;t let a breakdown ruin your home&apos;s comfort. Our master
            technicians are on standby for any residential emergency.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button
              className="text-white px-10 py-5 rounded-full font-extrabold text-lg flex items-center gap-3 hover:scale-105 transition-transform shadow-lg"
              style={{
                fontFamily: "var(--font-manrope)",
                background: "linear-gradient(135deg, #a13b05, #c1521f)",
              }}
            >
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                call
              </span>
              (555) 234-8900
            </button>
            <button
              className="border-2 border-[#1c1c19] text-[#1c1c19] px-10 py-5 rounded-full font-extrabold text-lg hover:scale-105 transition-transform"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Schedule Online
            </button>
          </div>
        </div>
        {/* Background circle */}
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full -mr-32 -mt-32 opacity-50" style={{ background: "#f2ede4" }} />
      </div>
    </section>
  );
}
