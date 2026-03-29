"use client";

import { colors, shadows, insights } from "../theme";

const insightImages = [
  "https://images.unsplash.com/photo-1585128903994-9788298932a4?w=500&h=300&fit=crop",
  "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=500&h=300&fit=crop",
];

export default function PlumbingInsights() {
  return (
    <section
      className="py-20 lg:py-28"
      style={{ backgroundColor: colors.surfaceContainerLow }}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-14 lg:mb-20">
          <p
            className="text-[12px] font-bold uppercase tracking-[0.15em] mb-4"
            style={{ color: colors.secondary, fontFamily: "var(--font-inter)" }}
          >
            Knowledge Base
          </p>
          <h2
            className="text-[28px] md:text-[32px] lg:text-[36px] font-extrabold leading-[1.1] tracking-[0.02em] uppercase"
            style={{ color: colors.primary, fontFamily: "var(--font-manrope)" }}
          >
            Expert Insights
          </h2>
        </div>

        {/* Article Cards - horizontal layout */}
        <div className="space-y-6">
          {insights.map((article, i) => (
            <div
              key={i}
              className="group grid md:grid-cols-[280px_1fr] lg:grid-cols-[360px_1fr] overflow-hidden transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
              style={{
                backgroundColor: colors.surfaceContainerLowest,
                borderRadius: "12px",
                boxShadow: shadows.ambient,
              }}
            >
              {/* Image */}
              <div className="aspect-video md:aspect-auto overflow-hidden">
                <img
                  src={insightImages[i]}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    const t = e.currentTarget;
                    t.style.display = "none";
                    t.parentElement!.style.backgroundColor = colors.surfaceContainerHighest;
                    t.parentElement!.innerHTML = `<div class="flex items-center justify-center w-full h-full min-h-[160px]"><span class="material-symbols-outlined" style="font-size:48px;color:${colors.primary}15">${i === 0 ? "heat_pump" : "water_drop"}</span></div>`;
                  }}
                />
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8 flex flex-col justify-center">
                <p
                  className="text-[11px] font-bold uppercase tracking-[0.15em] mb-3"
                  style={{ color: colors.secondary, fontFamily: "var(--font-inter)" }}
                >
                  {article.category}
                </p>
                <h3
                  className="text-[18px] lg:text-[20px] font-bold mb-3"
                  style={{ color: colors.onSurface, fontFamily: "var(--font-manrope)" }}
                >
                  {article.title}
                </h3>
                <p
                  className="text-[14px] leading-[1.65] mb-5"
                  style={{ color: colors.onSurfaceVariant, fontFamily: "var(--font-inter)" }}
                >
                  {article.description}
                </p>
                <span
                  className="inline-flex items-center gap-1 text-[13px] font-bold transition-colors"
                  style={{ color: colors.primary, fontFamily: "var(--font-inter)" }}
                >
                  Read More
                  <span className="material-symbols-outlined text-[16px] transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
