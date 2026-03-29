import { colors, shadows, testimonials } from "../theme";

export default function PlumbingClientSay() {
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
            Testimonials
          </p>
          <h2
            className="text-[28px] md:text-[32px] lg:text-[36px] font-extrabold leading-[1.1] tracking-[0.02em] uppercase"
            style={{ color: colors.primary, fontFamily: "var(--font-manrope)" }}
          >
            What Our Clients Say
          </h2>
        </div>

        {/* 4 testimonial cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="p-6 lg:p-7"
              style={{
                backgroundColor: colors.surfaceContainerLowest,
                borderRadius: "12px",
                boxShadow: shadows.ambient,
              }}
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <span
                    key={j}
                    className="material-symbols-outlined text-[16px]"
                    style={{ color: colors.secondary, fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                ))}
              </div>

              {/* Quote */}
              <p
                className="text-[14px] leading-[1.65] mb-5"
                style={{ color: colors.onSurfaceVariant, fontFamily: "var(--font-inter)" }}
              >
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 flex items-center justify-center text-[12px] font-bold text-white"
                  style={{
                    backgroundColor: colors.primary,
                    borderRadius: "50%",
                    fontFamily: "var(--font-manrope)",
                  }}
                >
                  {testimonial.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <p
                    className="text-[13px] font-bold"
                    style={{ color: colors.onSurface, fontFamily: "var(--font-manrope)" }}
                  >
                    {testimonial.name}
                  </p>
                  <p
                    className="text-[11px]"
                    style={{ color: colors.outline, fontFamily: "var(--font-inter)" }}
                  >
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
