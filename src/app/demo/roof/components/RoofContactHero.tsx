"use client";

export default function RoofContactHero() {
  return (
    <section
      className="bg-[#f5f3f0] pt-24 pb-32 relative overflow-hidden"
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 92%, 0 100%)" }}
    >
      <div className="max-w-screen-xl mx-auto px-8 relative z-10">
        <div className="w-20 h-1 bg-[#9e2016] mb-6" />
        <h1
          className="text-6xl md:text-8xl text-[#151c27] leading-none tracking-tighter uppercase mb-12"
          style={{ fontFamily: "var(--font-epilogue)" }}
        >
          REQUEST YOUR <br />
          <span className="text-[#9e2016]">FREE INSPECTION</span>
        </h1>
        {/* Emergency Banner */}
        <div className="bg-[#9e2016] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl max-w-4xl border-t-4 border-[#c0392b]">
          <div className="flex items-center gap-4">
            <span
              className="material-symbols-outlined text-4xl text-white"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              warning
            </span>
            <div>
              <p
                className="text-xl text-white leading-tight"
                style={{ fontFamily: "var(--font-epilogue)" }}
              >
                STORM DAMAGE? GET EMERGENCY HELP NOW
              </p>
              <p className="text-[#ffe5e1] text-sm">
                24/7 Rapid Response Team standing by.
              </p>
            </div>
          </div>
          <button
            className="bg-white text-[#9e2016] px-8 py-4 uppercase tracking-widest text-sm hover:bg-[#fbf9f6] transition-all animate-pulse"
            style={{ fontFamily: "var(--font-epilogue)" }}
          >
            Call Dispatch
          </button>
        </div>
      </div>
      {/* Background icon */}
      <div className="absolute right-0 top-0 opacity-10 pointer-events-none">
        <span
          className="material-symbols-outlined text-[30rem]"
          style={{ fontVariationSettings: "'wght' 100" }}
        >
          architecture
        </span>
      </div>
    </section>
  );
}
