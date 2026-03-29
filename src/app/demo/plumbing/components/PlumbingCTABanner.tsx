"use client";

export default function PlumbingCTABanner() {
  return (
    <section className="py-24 bg-[#F5F0E8] px-8" id="emergency">
      <div
        className="max-w-7xl mx-auto border border-[#011545]/20 bg-white p-12 md:p-20 rounded-[40px] text-center overflow-hidden relative"
        style={{ boxShadow: "0 4px 24px rgba(26,43,90,0.06)" }}
      >
        <div className="relative z-10 space-y-8">
          <h2
            className="text-4xl md:text-6xl font-extrabold text-[#011545] uppercase tracking-tight"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            NEED FAST PLUMBING SERVICE?
            <br />
            WE&apos;RE READY 24/7!
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <button
              className="bg-[#7E5700] text-white px-10 py-5 rounded-full font-extrabold text-lg flex items-center gap-3 hover:scale-105 transition-transform shadow-lg"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                call
              </span>
              (555) 123-4567
            </button>
            <button
              className="border-2 border-[#011545] text-[#011545] px-10 py-5 rounded-full font-extrabold text-lg hover:scale-105 transition-transform"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Schedule Online
            </button>
          </div>
        </div>
        {/* Background circle */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#F2EDE5] rounded-full -mr-32 -mt-32 opacity-50" />
      </div>
    </section>
  );
}
