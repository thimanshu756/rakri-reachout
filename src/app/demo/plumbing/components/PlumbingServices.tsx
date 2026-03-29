"use client";

const services = [
  { num: "01", title: "Emergency Repairs" },
  { num: "02", title: "Drain Cleaning" },
  { num: "03", title: "Water Heaters" },
  { num: "04", title: "Pipe Repair" },
  { num: "05", title: "Bathroom Remodeling" },
  { num: "06", title: "Sewer Service" },
];

export default function PlumbingServices() {
  return (
    <section className="py-24 bg-[#011545] text-white" id="services">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="space-y-4">
            <span
              className="inline-block bg-[#1A2B5A] text-[#F4BD61] px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.05em]"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              OUR SERVICES
            </span>
            <h2
              className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              PROFESSIONAL PLUMBING SERVICES
            </h2>
          </div>
          <button
            className="text-[#7E5700] font-bold flex items-center gap-2 hover:gap-4 transition-all"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            View All Services{" "}
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>

        {/* Accordion Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.num}
              className="group bg-[#1A2B5A] p-8 rounded-xl flex justify-between items-center cursor-pointer transition-all hover:bg-[#1A2B5A]/80 border border-white/5"
            >
              <div className="flex items-center gap-6">
                <span
                  className="text-[#7E5700] font-extrabold text-2xl opacity-50"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  {service.num}
                </span>
                <h3
                  className="text-xl font-bold uppercase tracking-wide"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  {service.title}
                </h3>
              </div>
              <span className="material-symbols-outlined text-[#7E5700]">
                add
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
