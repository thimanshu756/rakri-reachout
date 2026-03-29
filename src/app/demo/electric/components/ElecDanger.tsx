"use client";

const stats = [
  { val: "1,000+", title: "House Fires", desc: "Annually caused by faulty wiring in aged residential structures. Don't be a statistic." },
  { val: "40 YR", title: "Old Panels", desc: "Most Federal Pacific and Zinsco panels are fire hazards. Your safety is outdated." },
  { val: "VOID", title: "Insurance Risk", desc: "Unlicensed work can void your homeowner's policy. We provide 100% legal compliance." },
];

export default function ElecDanger() {
  return (
    <section
      className="bg-[#151c27] py-24 text-white relative overflow-hidden"
      style={{
        backgroundImage: "radial-gradient(circle at 2px 2px, rgba(234, 179, 8, 0.05) 1px, transparent 0)",
        backgroundSize: "24px 24px",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((s) => (
            <div
              key={s.title}
              className="p-8 bg-white/5 backdrop-blur-sm border-l-4 border-[#eab308]"
            >
              <span
                className="text-5xl font-black text-[#eab308] block mb-4"
                style={{ fontFamily: "var(--font-mono-elec)" }}
              >
                {s.val}
              </span>
              <h3
                className="text-xl font-black mb-2 uppercase tracking-tighter"
                style={{ fontFamily: "var(--font-inter-elec)" }}
              >
                {s.title}
              </h3>
              <p className="text-[#b9c7df] text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
