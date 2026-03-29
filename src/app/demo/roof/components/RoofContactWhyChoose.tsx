"use client";

const items = [
  { icon: "policy", title: "Insurance Claim Experts", desc: "We handle the adjusters so you don't have to." },
  { icon: "verified", title: "Lifetime Warranty", desc: "Built to outlast the storm, guaranteed." },
  { icon: "search_check", title: "Free Inspections", desc: "Honest assessment with zero commitment." },
  { icon: "payments", title: "$0 Down Available", desc: "Flexible financing for every household." },
];

export default function RoofContactWhyChoose() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-screen-xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2
            className="text-4xl uppercase tracking-tight"
            style={{ fontFamily: "var(--font-epilogue)" }}
          >
            THE STRONGROOF{" "}
            <span className="text-[#9e2016]">STANDARD</span>
          </h2>
          <div className="w-32 h-1 bg-[#9e2016] mx-auto mt-4" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item) => (
            <div
              key={item.title}
              className="p-8 border-b-2 border-[#f5f3f0] hover:border-[#9e2016] transition-colors text-center group"
            >
              <span className="material-symbols-outlined text-4xl text-[#151c27] mb-4 group-hover:scale-110 transition-transform block">
                {item.icon}
              </span>
              <h3
                className="text-lg uppercase mb-2"
                style={{ fontFamily: "var(--font-epilogue)" }}
              >
                {item.title}
              </h3>
              <p className="text-sm text-[#404753]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
