import { colors, testimonials } from "../theme";

export default function PlumbingTestimonials() {
  const featured = testimonials[0];

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden"
    >
      <div className="grid lg:grid-cols-2">
        {/* Left: Dark navy panel */}
        <div
          className="px-8 lg:px-16 py-16 lg:py-24 flex flex-col justify-center"
          style={{ backgroundColor: colors.primary }}
        >
          <p
            className="text-[12px] font-bold uppercase tracking-[0.15em] mb-6"
            style={{ color: colors.secondaryContainer, fontFamily: "var(--font-inter)" }}
          >
            Client Testimonials
          </p>
          <h2
            className="text-[28px] md:text-[32px] lg:text-[40px] font-extrabold leading-[1.1] tracking-[0.02em] uppercase mb-8 text-white"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            We Are Plumbing Specialists For Over 15 Years
          </h2>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3 text-[14px] font-bold transition-all hover:scale-[1.02] active:scale-95 self-start"
            style={{
              backgroundColor: colors.secondary,
              color: "#ffffff",
              borderRadius: "8px",
              fontFamily: "var(--font-inter)",
            }}
          >
            Schedule Now
          </a>
        </div>

        {/* Right: Featured testimonial */}
        <div
          className="px-8 lg:px-16 py-16 lg:py-24 flex items-center"
          style={{ backgroundColor: colors.surfaceContainerLow }}
        >
          <div>
            {/* Quote icon */}
            <span
              className="material-symbols-outlined text-[40px] mb-6 block"
              style={{ color: `${colors.primary}15` }}
            >
              format_quote
            </span>

            {/* Quote text */}
            <p
              className="text-[17px] lg:text-[19px] leading-[1.65] mb-8 italic"
              style={{ color: colors.onSurfaceVariant, fontFamily: "var(--font-inter)" }}
            >
              &ldquo;{featured.text}&rdquo;
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 flex items-center justify-center text-[14px] font-bold text-white"
                style={{
                  backgroundColor: colors.primary,
                  borderRadius: "50%",
                  fontFamily: "var(--font-manrope)",
                }}
              >
                {featured.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div>
                <p
                  className="text-[15px] font-bold"
                  style={{ color: colors.onSurface, fontFamily: "var(--font-manrope)" }}
                >
                  {featured.name}
                </p>
                <p
                  className="text-[13px]"
                  style={{ color: colors.outline, fontFamily: "var(--font-inter)" }}
                >
                  {featured.location}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
