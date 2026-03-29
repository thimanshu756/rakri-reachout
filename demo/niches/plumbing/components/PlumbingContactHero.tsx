import { colors, contactInfo } from "../theme";

export default function PlumbingContactHero() {
  const phoneDigits = contactInfo.phone.replace(/[^\d+]/g, "");

  return (
    <section
      className="pt-28 lg:pt-36 pb-12 lg:pb-16"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 text-center">
        <p
          className="text-[12px] font-bold uppercase tracking-[0.15em] mb-4 font-[var(--font-inter)]"
          style={{ color: colors.secondary }}
        >
          Contact Us
        </p>
        <h1
          className="text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-extrabold leading-[1.05] tracking-[0.02em] uppercase mb-6 font-[var(--font-manrope)]"
          style={{ color: colors.primary }}
        >
          Get In Touch
        </h1>
        <p
          className="text-[16px] md:text-[18px] leading-[1.65] max-w-2xl mx-auto mb-8 font-[var(--font-inter)]"
          style={{ color: colors.onSurfaceVariant }}
        >
          Available 24/7 for emergencies. Describe your plumbing issue and we&apos;ll respond within 30 minutes.
        </p>
        <a
          href={`tel:${phoneDigits}`}
          className="inline-flex items-center gap-2 px-8 py-3.5 text-[14px] font-bold text-white transition-all hover:scale-[1.02] active:scale-95 font-[var(--font-inter)]"
          style={{
            background: `linear-gradient(135deg, ${colors.primary}, ${colors.primaryContainer})`,
            borderRadius: "8px",
          }}
        >
          <span className="material-symbols-outlined text-[18px]">call</span>
          {contactInfo.phone}
        </a>
      </div>
    </section>
  );
}
