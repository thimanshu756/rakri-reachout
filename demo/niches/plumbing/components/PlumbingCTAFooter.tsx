import { colors, shadows, contactInfo } from "../theme";

export default function PlumbingCTAFooter() {
  const phoneDigits = contactInfo.phone.replace(/[^\d+]/g, "");

  return (
    <section
      className="py-20 lg:py-28"
      style={{ backgroundColor: colors.primary }}
    >
      <div className="max-w-[720px] mx-auto px-6 lg:px-12 text-center">
        <h2
          className="text-[28px] md:text-[36px] lg:text-[42px] font-extrabold leading-[1.1] tracking-[0.02em] uppercase mb-6 font-[var(--font-manrope)] text-white"
        >
          Ready to Fix Your Plumbing?
        </h2>
        <p
          className="text-[16px] leading-[1.65] mb-10 font-[var(--font-inter)]"
          style={{ color: "rgba(255,255,255,0.6)" }}
        >
          Get in touch today for a free consultation. Our master plumbers are standing by.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={`tel:${phoneDigits}`}
            className="inline-flex items-center gap-2 px-8 py-3.5 text-[14px] font-bold transition-all hover:scale-[1.02] active:scale-95 font-[var(--font-inter)]"
            style={{
              backgroundColor: colors.secondary,
              color: colors.onSecondary,
              borderRadius: "8px",
              boxShadow: shadows.ambient,
            }}
          >
            <span className="material-symbols-outlined text-[18px]">call</span>
            Call Now
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-[14px] font-bold transition-all hover:scale-[1.02] active:scale-95 font-[var(--font-inter)]"
            style={{
              backgroundColor: "rgba(255,255,255,0.1)",
              color: "white",
              borderRadius: "8px",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            <span className="material-symbols-outlined text-[18px]">calendar_month</span>
            Book Online
          </a>
        </div>
      </div>
    </section>
  );
}
