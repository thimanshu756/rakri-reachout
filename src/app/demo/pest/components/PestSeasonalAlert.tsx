"use client";
export default function PestSeasonalAlert() {
  return (
    <section className="py-12 px-8 bg-[#006e2f]/5 border-y border-[#006e2f]/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-[#006e2f] shadow-sm">
            <span className="material-symbols-outlined text-4xl">eco</span>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#131e19]" style={{ fontFamily: "var(--font-jakarta)" }}>Spring Pest Season Is Here.</h2>
            <p className="text-[#3d4a3d]">Warming temperatures trigger new infestations. Act now before they nest.</p>
          </div>
        </div>
        <button className="bg-[#006e2f] text-white font-bold px-8 py-4 rounded-xl hover:scale-105 transition-transform flex items-center gap-3">
          Schedule Your Seasonal Treatment
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
    </section>
  );
}
