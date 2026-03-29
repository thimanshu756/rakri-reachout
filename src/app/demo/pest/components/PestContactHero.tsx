"use client";
const pests = [
  { icon: "bug_report", label: "Ants" },
  { icon: "pest_control", label: "Roaches" },
  { icon: "nest_eco_leaf", label: "Termites" },
  { icon: "cruelty_free", label: "Rodents" },
  { icon: "nature", label: "Mosquitoes" },
  { icon: "help", label: "Other" },
];
export default function PestContactHero() {
  return (
    <>
      <section className="relative px-6 py-16 md:py-24 max-w-7xl mx-auto pt-32">
        <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#22c55e] rounded-full -z-10 blur-[40px] opacity-40" />
        <div className="absolute top-40 -right-20 w-96 h-96 bg-[#b4f0c9] rounded-full -z-10 blur-[40px] opacity-40" />
        <div className="text-center relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#b4f0c9]/40 text-[#175034] text-xs font-bold uppercase tracking-wider mb-6">
            <span className="material-symbols-outlined text-sm">verified_user</span> Trusted Eco-Care
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#006e2f] mb-8 leading-tight max-w-3xl mx-auto" style={{ fontFamily: "var(--font-jakarta)" }}>
            Get your free pest inspection
          </h1>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[{ icon: "pets", text: "Pet Safe Products" }, { icon: "gpp_good", text: "EPA Approved" }, { icon: "bolt", text: "Same-Day Available" }].map((b) => (
              <div key={b.text} className="flex items-center gap-2 px-6 py-3 rounded-full bg-white shadow-sm border border-[#bccbb9]/20">
                <span className="material-symbols-outlined text-[#22c55e]" style={{ fontVariationSettings: "'FILL' 1" }}>{b.icon}</span>
                <span className="text-sm font-bold text-[#131e19]">{b.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Pest Type Selector */}
      <section className="pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-sm font-bold uppercase tracking-widest text-[#645d58] mb-8">What are you seeing?</p>
          <div className="flex overflow-x-auto pb-4 gap-4 -mx-6 px-6 md:justify-center">
            {pests.map((p) => (
              <button key={p.label} className="flex-shrink-0 w-32 h-32 flex flex-col items-center justify-center gap-3 bg-white rounded-2xl shadow-sm border border-[#bccbb9]/20 hover:border-[#22c55e] transition-all group">
                <span className="material-symbols-outlined text-[#006e2f] text-3xl transition-transform group-hover:scale-110">{p.icon}</span>
                <span className="text-sm font-bold text-[#131e19]">{p.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
