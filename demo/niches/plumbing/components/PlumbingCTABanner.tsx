import { colors, contactInfo } from "../theme";

export default function PlumbingCTABanner() {
  const phoneDigits = contactInfo.phone.replace(/[^\d+]/g, "");

  return (
    <section
      className="py-20 lg:py-28"
      style={{ backgroundColor: colors.primary }}
    >
      <div className="max-w-[800px] mx-auto px-6 lg:px-12 text-center">
        <h2
          className="text-[28px] md:text-[36px] lg:text-[42px] font-extrabold leading-[1.1] tracking-[0.02em] uppercase mb-4 text-white"
          style={{ fontFamily: "var(--font-manrope)" }}
        >
          Need Fast Plumbing Service?
          <br />
          We&apos;re Ready 24/7!
        </h2>
        <p
          className="text-[16px] leading-[1.65] mb-10"
          style={{ color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-inter)" }}
        >
          Our master plumbers are standing by for any residential plumbing emergency.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={`tel:${phoneDigits}`}
            className="inline-flex items-center gap-2 px-7 py-3.5 text-[14px] font-bold transition-all hover:scale-[1.02] active:scale-95"
            style={{
              backgroundColor: colors.secondary,
              color: "#ffffff",
              borderRadius: "8px",
              fontFamily: "var(--font-inter)",
            }}
          >
            <span className="material-symbols-outlined text-[18px]">call</span>
            {contactInfo.phone}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-[14px] font-bold transition-all hover:scale-[1.02] active:scale-95"
            style={{
              backgroundColor: "rgba(255,255,255,0.1)",
              color: "#ffffff",
              borderRadius: "8px",
              border: "1px solid rgba(255,255,255,0.2)",
              fontFamily: "var(--font-inter)",
            }}
          >
            Schedule Online
          </a>
        </div>
      </div>
    </section>
  );
}
