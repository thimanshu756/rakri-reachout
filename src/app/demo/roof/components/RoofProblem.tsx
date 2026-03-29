"use client";

const stats = [
  {
    value: "$10K+",
    label: "AVG. WATER DAMAGE COST",
    desc: "A single missing shingle can lead to structural rot and mold within 30 days.",
  },
  {
    value: "40%",
    label: "CLAIMS DENIED LATER",
    desc: "Insurance companies often deny claims if damage isn't documented within 48 hours of a storm.",
  },
  {
    value: "24 HRS",
    label: "FAST DAMAGE SPREAD",
    desc: "Water travels along rafters, making leaks appear far from the actual source of damage.",
  },
];

export default function RoofProblem() {
  return (
    <section className="bg-[#151c27] text-white py-24 relative overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-32 bg-[#fbf9f6]"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 90%, 0% 100%)" }}
      />
      <div className="max-w-7xl mx-auto px-6 relative z-10 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center md:text-left ${
                i === 1
                  ? "border-y md:border-y-0 md:border-x border-slate-800 py-12 md:py-0 md:px-12"
                  : ""
              }`}
            >
              <h2
                className="text-5xl text-[#9e2016] mb-2"
                style={{ fontFamily: "var(--font-epilogue)" }}
              >
                {stat.value}
              </h2>
              <p
                className="text-sm tracking-widest uppercase mb-4"
                style={{ fontFamily: "var(--font-epilogue)" }}
              >
                {stat.label}
              </p>
              <p className="text-slate-400 text-sm">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
