"use client";

import { colors, services } from "../theme";

export default function PlumbingServices() {
  return (
    <section
      id="services"
      className="py-20 lg:py-28"
      style={{ backgroundColor: colors.surfaceContainerLow }}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 lg:mb-16">
          <div>
            <p
              className="text-[12px] font-bold uppercase tracking-[0.15em] mb-4"
              style={{ color: colors.secondary, fontFamily: "var(--font-inter)" }}
            >
              What We Offer
            </p>
            <h2
              className="text-[28px] md:text-[32px] lg:text-[36px] font-extrabold leading-[1.1] tracking-[0.02em] uppercase"
              style={{ color: colors.primary, fontFamily: "var(--font-manrope)" }}
            >
              Professional Plumbing Services
            </h2>
          </div>
          <a
            href="#contact"
            className="flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.1em] transition-colors"
            style={{ color: colors.secondary, fontFamily: "var(--font-inter)" }}
          >
            View All Services
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </a>
        </div>

        {/* Service list items - 2 columns */}
        <div className="grid md:grid-cols-2 gap-3">
          {services.map((service, i) => (
            <button
              key={i}
              className="group flex items-center justify-between p-5 lg:p-6 text-left transition-all duration-300 hover:-translate-y-0.5"
              style={{
                backgroundColor: colors.surfaceContainerLowest,
                borderRadius: "12px",
                boxShadow: "0 2px 8px rgba(26,43,90,0.03)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 4px 24px rgba(26,43,90,0.06)";
                e.currentTarget.style.backgroundColor = colors.primary;
                const texts = e.currentTarget.querySelectorAll<HTMLElement>("[data-text]");
                texts.forEach((t) => (t.style.color = "#ffffff"));
                const icon = e.currentTarget.querySelector<HTMLElement>("[data-icon]");
                if (icon) icon.style.color = colors.secondaryContainer;
                const num = e.currentTarget.querySelector<HTMLElement>("[data-num]");
                if (num) num.style.color = "rgba(255,255,255,0.3)";
                const arrow = e.currentTarget.querySelector<HTMLElement>("[data-arrow]");
                if (arrow) {
                  arrow.style.backgroundColor = "rgba(255,255,255,0.1)";
                  arrow.style.color = "#ffffff";
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 2px 8px rgba(26,43,90,0.03)";
                e.currentTarget.style.backgroundColor = colors.surfaceContainerLowest;
                const texts = e.currentTarget.querySelectorAll<HTMLElement>("[data-text]");
                texts.forEach((t) => (t.style.color = colors.onSurface));
                const icon = e.currentTarget.querySelector<HTMLElement>("[data-icon]");
                if (icon) icon.style.color = colors.primary;
                const num = e.currentTarget.querySelector<HTMLElement>("[data-num]");
                if (num) num.style.color = colors.outlineVariant;
                const arrow = e.currentTarget.querySelector<HTMLElement>("[data-arrow]");
                if (arrow) {
                  arrow.style.backgroundColor = `${colors.primary}08`;
                  arrow.style.color = colors.primary;
                }
              }}
            >
              <div className="flex items-center gap-4">
                {/* Number */}
                <span
                  data-num
                  className="text-[14px] font-bold"
                  style={{ color: colors.outlineVariant, fontFamily: "var(--font-manrope)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                {/* Icon */}
                <span
                  data-icon
                  className="material-symbols-outlined text-[22px]"
                  style={{ color: colors.primary }}
                >
                  {service.icon}
                </span>
                {/* Title */}
                <span
                  data-text
                  className="text-[15px] font-bold uppercase tracking-tight"
                  style={{ color: colors.onSurface, fontFamily: "var(--font-manrope)" }}
                >
                  {service.title}
                </span>
              </div>
              {/* Arrow */}
              <div
                data-arrow
                className="w-9 h-9 flex items-center justify-center flex-shrink-0 transition-colors"
                style={{
                  backgroundColor: `${colors.primary}08`,
                  borderRadius: "50%",
                  color: colors.primary,
                }}
              >
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
