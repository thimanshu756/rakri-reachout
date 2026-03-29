"use client";

import { colors, shadows } from "../theme";

const pillars = [
  {
    title: "Unmatched Precision",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=300&h=200&fit=crop",
    fallbackIcon: "precision_manufacturing",
  },
  {
    title: "Smart Diagnostics",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop",
    fallbackIcon: "troubleshoot",
  },
  {
    title: "Fixed for Life",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=300&h=200&fit=crop",
    fallbackIcon: "verified",
  },
  {
    title: "VIP Support",
    image: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=300&h=200&fit=crop",
    fallbackIcon: "support_agent",
  },
];

export default function PlumbingWhyChooseUs() {
  return (
    <section
      className="py-20 lg:py-28"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-14 lg:mb-20">
          <p
            className="text-[12px] font-bold uppercase tracking-[0.15em] mb-4"
            style={{ color: colors.secondary, fontFamily: "var(--font-inter)" }}
          >
            Why Choose Us
          </p>
          <h2
            className="text-[28px] md:text-[32px] lg:text-[36px] font-extrabold leading-[1.1] tracking-[0.02em] uppercase"
            style={{ color: colors.primary, fontFamily: "var(--font-manrope)" }}
          >
            Commitment to Quality
          </h2>
        </div>

        {/* Pillars Grid with images */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="group overflow-hidden transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              style={{
                backgroundColor: colors.surfaceContainerLowest,
                borderRadius: "12px",
                boxShadow: shadows.ambient,
              }}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    const t = e.currentTarget;
                    t.style.display = "none";
                    t.parentElement!.style.backgroundColor = colors.surfaceContainerHighest;
                    t.parentElement!.innerHTML = `<div class="flex items-center justify-center w-full h-full"><span class="material-symbols-outlined" style="font-size:48px;color:${colors.primary}20">${pillar.fallbackIcon}</span></div>`;
                  }}
                />
              </div>
              {/* Title + Arrow */}
              <div className="flex items-center justify-between p-4 lg:p-5">
                <h3
                  className="text-[14px] lg:text-[15px] font-bold"
                  style={{ color: colors.onSurface, fontFamily: "var(--font-manrope)" }}
                >
                  {pillar.title}
                </h3>
                <span
                  className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1"
                  style={{ color: colors.primary }}
                >
                  arrow_forward
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
