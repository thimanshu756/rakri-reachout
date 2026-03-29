"use client";

const trustCards = [
  {
    icon: "schedule",
    title: "60-Minute Response",
    description:
      "Our dispatch team is on standby to ensure help reaches you within the hour for all emergency calls.",
  },
  {
    icon: "payments",
    title: "Upfront Pricing",
    description:
      "Transparent quoting process with zero hidden fees. You know the cost before we start any work.",
  },
  {
    icon: "verified",
    title: "Certified Technicians",
    description:
      "Every technician is EPA-certified, NATE-certified, and background-checked for your peace of mind.",
  },
  {
    icon: "shield",
    title: "Comprehensive Warranty",
    description:
      "We stand by our craftsmanship with industry-leading warranties on all installations and repairs.",
  },
];

export default function HvacTrustSection() {
  return (
    <section className="py-24 px-8 bg-[#fcf9f4] relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header */}
        <div className="flex flex-col items-center mb-16">
          <span
            className="material-symbols-outlined text-[#a13b05] text-2xl mb-4"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            local_fire_department
          </span>
          <h2
            className="font-extrabold text-3xl md:text-4xl text-[#1c1c19] tracking-wider"
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
              style={{ border: "1px solid rgba(139, 114, 104, 0.15)" }}
            >
              <div className="inline-flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-[#a13b05] text-4xl mb-1">
                  {card.icon}
                </span>
                <div className="h-0.5 w-8 bg-[#a13b05] ml-[-10px] mt-8" />
              </div>
              <h4
                className="font-bold text-lg text-[#1c1c19] mb-3"
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
