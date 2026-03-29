import { colors, shadows, contactInfo } from "../theme";

export default function PlumbingContactInfo() {
  const phoneDigits = contactInfo.phone.replace(/[^\d+]/g, "");

  const infoCards = [
    {
      icon: "call",
      title: contactInfo.phone,
      subtitle: "24/7 Emergency Dispatch",
      href: `tel:${phoneDigits}`,
    },
    {
      icon: "mail",
      title: contactInfo.email,
      subtitle: "Response within 2 hours",
      href: `mailto:${contactInfo.email}`,
    },
    {
      icon: "location_on",
      title: "Main Office",
      subtitle: contactInfo.address,
    },
    {
      icon: "schedule",
      title: contactInfo.hours.weekday,
      subtitle: contactInfo.hours.emergency,
    },
  ];

  return (
    <section
      className="py-12 lg:py-16"
      style={{ backgroundColor: colors.surfaceContainerLow }}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        {/* Info Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {infoCards.map((card, i) => {
            const Wrapper = card.href ? "a" : "div";
            return (
              <Wrapper
                key={i}
                {...(card.href ? { href: card.href } : {})}
                className="p-6 text-center transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: colors.surfaceContainerLowest,
                  borderRadius: "12px",
                  boxShadow: shadows.ambient,
                }}
              >
                <div
                  className="w-12 h-12 flex items-center justify-center mx-auto mb-4"
                  style={{
                    backgroundColor: `${colors.primary}08`,
                    borderRadius: "50%",
                  }}
                >
                  <span
                    className="material-symbols-outlined text-[24px]"
                    style={{ color: colors.primary }}
                  >
                    {card.icon}
                  </span>
                </div>
                <p
                  className="text-[15px] font-bold mb-1 font-[var(--font-manrope)]"
                  style={{ color: colors.onSurface }}
                >
                  {card.title}
                </p>
                <p
                  className="text-[13px] font-[var(--font-inter)]"
                  style={{ color: colors.onSurfaceVariant }}
                >
                  {card.subtitle}
                </p>
              </Wrapper>
            );
          })}
        </div>

        {/* Service Area Map Placeholder */}
        <div
          className="overflow-hidden"
          style={{
            backgroundColor: colors.surfaceContainerHighest,
            borderRadius: "12px",
            boxShadow: shadows.ambient,
          }}
        >
          <div className="p-8 lg:p-12 text-center">
            <span
              className="material-symbols-outlined text-[64px] mb-4 block"
              style={{ color: `${colors.primary}15` }}
            >
              map
            </span>
            <h3
              className="text-[18px] font-bold mb-2 font-[var(--font-manrope)]"
              style={{ color: colors.onSurface }}
            >
              Our Service Area
            </h3>
            <p
              className="text-[14px] leading-[1.65] max-w-lg mx-auto font-[var(--font-inter)]"
              style={{ color: colors.onSurfaceVariant }}
            >
              Providing premium plumbing services across the Greater Metropolitan area. We serve Kensington, Westside Heights, Downtown, East Village, and surrounding communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
