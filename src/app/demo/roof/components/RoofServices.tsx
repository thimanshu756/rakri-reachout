"use client";

const services = [
  { icon: "home_work", title: "Roof Replacement", desc: "Full tear-offs and high-performance installations using GAF and Owens Corning materials." },
  { icon: "thunderstorm", title: "Storm Damage Repair", desc: "Rapid response for wind, hail, and tree damage with direct insurance billing support." },
  { icon: "search_check", title: "Free Inspection", desc: "Comprehensive 50-point safety and integrity check with full digital photo report." },
  { icon: "layers", title: "Shingle & Tile", desc: "Specialized installation for luxury slate, clay tile, and impact-resistant asphalt shingles." },
  { icon: "apartment", title: "Commercial", desc: "TPO, EPDM, and modified bitumen systems for apartments and industrial complexes." },
  { icon: "waves", title: "Gutter & Flashing", desc: "Seamless aluminum gutters and custom copper flashing for superior water diversion." },
];

export default function RoofServices() {
  return (
    <section className="py-24 bg-[#fbf9f6]" id="services">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span
            className="text-[#9e2016] text-xs tracking-widest uppercase mb-4 block"
            style={{ fontFamily: "var(--font-epilogue)" }}
          >
            WHAT WE DO
          </span>
          <h2
            className="text-4xl md:text-5xl text-[#1b1c1a] uppercase tracking-tight"
            style={{ fontFamily: "var(--font-epilogue)" }}
          >
            PRECISION SOLUTIONS
          </h2>
          <div className="w-24 h-1 bg-[#9e2016] mt-6" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white p-8 group hover:shadow-xl transition-all border-b-4 border-transparent hover:border-[#9e2016]"
            >
              <div className="w-16 h-16 bg-[#f5f3f0] flex items-center justify-center mb-6 group-hover:bg-[#c0392b]/10 transition-colors">
                <span className="material-symbols-outlined text-3xl text-[#151c27]">
                  {s.icon}
                </span>
              </div>
              <h3
                className="text-xl mb-4 uppercase"
                style={{ fontFamily: "var(--font-epilogue)" }}
              >
                {s.title}
              </h3>
              <p className="text-[#585f6b] text-sm leading-relaxed mb-6">
                {s.desc}
              </p>
              <a
                className="text-[#9e2016] font-bold text-xs uppercase tracking-widest flex items-center gap-2"
                href="#"
              >
                Details{" "}
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
