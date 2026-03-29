"use client";

const trustCards = [
  {
    icon: "schedule",
    title: "30-Minute Response",
    description:
      "Our dispatch team is on standby to ensure help reaches you within minutes of your call.",
  },
  {
    icon: "payments",
    title: "Upfront Pricing",
    description:
      "Transparent quoting process with zero hidden fees. You know the cost before we start.",
  },
  {
    icon: "verified",
    title: "Licensed Master Plumbers",
    description:
      "Every technician is highly trained, licensed, and background-checked for your peace of mind.",
  },
  {
    icon: "shield",
    title: "1-Year Work Guarantee",
    description:
      "We stand by our craftsmanship. If anything fails within 365 days, we'll fix it for free.",
  },
];

export default function PlumbingTrustSection() {
  return (
    <section className="py-24 px-8 bg-[#FEF9F1] relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header */}
        <div className="flex flex-col items-center mb-16">
          <span className="material-symbols-outlined text-[#7E5700] text-2xl mb-4">
            local_florist
          </span>
          <h2
            className="font-extrabold text-3xl md:text-4xl text-[#011545] uppercase tracking-wider"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            Why Homeowners Trust Us
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustCards.map((card) => (
            <div
              key={card.title}
              className="bg-white p-8 rounded-xl hover:shadow-xl transition-shadow duration-300"
              style={{ border: "1px solid rgba(197, 198, 208, 0.15)" }}
            >
              <div className="inline-flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-[#011545] text-4xl mb-1">
                  {card.icon}
                </span>
                <div className="h-0.5 w-8 bg-[#7E5700] ml-[-10px] mt-8" />
              </div>
              <h4
                className="font-bold text-lg text-[#011545] mb-3"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                {card.title}
              </h4>
              <p
                className="text-[#45464F] text-sm leading-relaxed"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
