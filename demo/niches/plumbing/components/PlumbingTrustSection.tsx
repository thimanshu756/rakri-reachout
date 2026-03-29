import { colors, shadows } from "../theme";

export default function PlumbingTrustSection() {
  const trustItems = [
    {
      icon: "timer",
      title: "30-Minute Response",
      description: "Our dispatch team is on standby to ensure help reaches you within minutes of your call.",
    },
    {
      icon: "payments",
      title: "Upfront Pricing",
      description: "Transparent quoting process with zero hidden fees. You know the cost before we start.",
    },
    {
      icon: "verified",
      title: "Licensed Master Plumbers",
      description: "Every technician is highly trained, licensed, and background-checked for your peace of mind.",
    },
    {
      icon: "workspace_premium",
      title: "1-Year Work Guarantee",
      description: "We stand by our craftsmanship. If anything fails within 365 days, we'll fix it for free.",
    },
  ];

  return (
    <section
      className="py-20 lg:py-28"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-14 lg:mb-20">
          <p
            className="text-[12px] font-bold uppercase tracking-[0.15em] mb-4 font-[var(--font-inter)]"
            style={{ color: colors.secondary }}
          >
            Our Promise
          </p>
          <h2
            className="text-[28px] md:text-[32px] lg:text-[36px] font-extrabold leading-[1.1] tracking-[0.02em] uppercase font-[var(--font-manrope)]"
            style={{ color: colors.primary }}
          >
            Why Homeowners Trust Us
          </h2>
        </div>

        {/* Trust Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, i) => (
            <div
              key={i}
              className="text-center p-8 transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: colors.surfaceContainerLowest,
                borderRadius: "12px",
                boxShadow: shadows.ambient,
              }}
            >
              <div
                className="w-14 h-14 flex items-center justify-center mx-auto mb-5"
                style={{
                  backgroundColor: `${colors.primary}08`,
                  borderRadius: "50%",
                }}
              >
                <span
                  className="material-symbols-outlined text-[26px]"
                  style={{ color: colors.primary, fontVariationSettings: "'FILL' 1" }}
                >
                  {item.icon}
                </span>
              </div>

              <h3
                className="text-[15px] font-bold mb-3 font-[var(--font-manrope)]"
                style={{ color: colors.onSurface }}
              >
                {item.title}
              </h3>

              <p
                className="text-[13px] leading-[1.65] font-[var(--font-inter)]"
                style={{ color: colors.onSurfaceVariant }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
