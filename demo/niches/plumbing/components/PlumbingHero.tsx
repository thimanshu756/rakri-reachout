"use client";

import { colors, stats, contactInfo } from "../theme";

export default function PlumbingHero() {
  const phoneDigits = contactInfo.phone.replace(/[^\d+]/g, "");

  return (
    <>
      {/* Hero: Split layout */}
      <section className="relative pt-[72px]">
        <div className="grid lg:grid-cols-2 min-h-[600px]">
          {/* Left: Navy bg with text */}
          <div
            className="flex flex-col justify-center px-8 lg:px-16 py-16 lg:py-24"
            style={{ backgroundColor: colors.primary }}
          >
            {/* Eyebrow */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 self-start"
              style={{
                backgroundColor: "rgba(255,255,255,0.08)",
                borderRadius: "24px",
              }}
            >
              <span
                className="material-symbols-outlined text-[14px]"
                style={{ color: colors.secondaryContainer, fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span
                className="text-[11px] font-bold uppercase tracking-[0.15em]"
                style={{ color: colors.secondaryContainer, fontFamily: "var(--font-inter)" }}
              >
                Trusted Plumbing Expert
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-[2.2rem] md:text-[2.8rem] lg:text-[3.2rem] font-extrabold leading-[1.05] tracking-[0.02em] uppercase mb-6"
              style={{ color: "#ffffff", fontFamily: "var(--font-manrope)" }}
            >
              Expert Plumbing Solutions You Can Count On
            </h1>

            {/* Subtext */}
            <p
              className="text-[15px] md:text-[16px] leading-[1.65] mb-8 max-w-lg"
              style={{ color: "rgba(255,255,255,0.65)", fontFamily: "var(--font-inter)" }}
            >
              Premium residential plumbing services delivered with architectural precision and world-class care. Experience the gold standard of home maintenance.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="#contact"
                className="px-7 py-3 text-[14px] font-bold transition-all hover:scale-[1.02] active:scale-95"
                style={{
                  backgroundColor: colors.secondary,
                  color: "#ffffff",
                  borderRadius: "8px",
                  fontFamily: "var(--font-inter)",
                }}
              >
                Schedule Service
              </a>
              <a
                href={`tel:${phoneDigits}`}
                className="px-7 py-3 text-[14px] font-bold transition-all hover:scale-[1.02] active:scale-95"
                style={{
                  backgroundColor: "rgba(255,255,255,0.1)",
                  color: "#ffffff",
                  borderRadius: "8px",
                  border: "1px solid rgba(255,255,255,0.2)",
                  fontFamily: "var(--font-inter)",
                }}
              >
                Call {contactInfo.phone}
              </a>
            </div>

            {/* Trust badges */}
            <div className="space-y-3">
              {[
                "Licensed & Bonded Specialists",
                "Upfront Pricing — No Hidden Fees",
                "24/7 Emergency Response",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span
                    className="material-symbols-outlined text-[18px]"
                    style={{ color: colors.secondaryContainer, fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                  <span
                    className="text-[13px] font-medium"
                    style={{ color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-inter)" }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Plumber image */}
          <div
            className="relative flex items-end justify-center overflow-hidden"
            style={{ backgroundColor: colors.secondary }}
          >
            {/* Gradient overlay */}
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(135deg, ${colors.secondary} 0%, #A06D10 50%, ${colors.secondary} 100%)`,
              }}
            />
            {/* Plumber illustration placeholder */}
            <div className="relative z-10 flex flex-col items-center justify-center w-full h-full min-h-[400px] lg:min-h-full">
              <img
                src="https://lh3.googleusercontent.com/aida/ADBb0uiV_hBdJiG4PuM_6Gz2QAikBcOHnxAZk18Ig8_Q5ortkwzgBVH2mPuBuVrDt35F54bSZzpFtx_gc2tBUWmNXXtAkVcMRjqOjjgBEQfIbTzHtksOS5FeOrkcaG_E1ToM17AdSSgzONyXjnoOLczv9dOv0gHQdZ-cMqjIx41vYuQ6GaH4ulk6OgkyCkvF6SaIBVnja_mgQhq5w8loxXReAhKlI5p93zOER0uNGGq66JuOq1nuToDp7Y58Sw"
                alt="Professional Plumber"
                className="w-full h-full object-cover absolute inset-0"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = "none";
                  const parent = target.parentElement;
                  if (parent) {
                    const fallback = document.createElement("div");
                    fallback.className = "flex flex-col items-center justify-center w-full h-full";
                    fallback.innerHTML = `<span class="material-symbols-outlined" style="font-size:96px;color:rgba(255,255,255,0.2)">plumbing</span><p style="color:rgba(255,255,255,0.3);font-size:14px;margin-top:12px">Professional Plumber</p>`;
                    parent.appendChild(fallback);
                  }
                }}
              />
              {/* Rating badge overlay */}
              <div
                className="absolute bottom-8 right-8 z-20 px-5 py-3 flex items-center gap-3"
                style={{
                  backgroundColor: "rgba(255,255,255,0.95)",
                  borderRadius: "12px",
                  boxShadow: "0 4px 24px rgba(26,43,90,0.12)",
                }}
              >
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined text-[16px]"
                      style={{ color: colors.secondary, fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <div>
                  <p className="text-[14px] font-bold" style={{ color: colors.onSurface, fontFamily: "var(--font-manrope)" }}>
                    4.9/5 Rating
                  </p>
                  <p className="text-[11px]" style={{ color: colors.outline, fontFamily: "var(--font-inter)" }}>
                    2,400+ reviews
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{ backgroundColor: colors.background }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-10 lg:py-14">
          <div className="flex flex-wrap justify-between items-center gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center flex-1 min-w-[120px]">
                <p
                  className="text-[28px] lg:text-[34px] font-extrabold"
                  style={{ color: colors.primary, fontFamily: "var(--font-manrope)" }}
                >
                  {stat.value}
                </p>
                <p
                  className="text-[11px] font-bold uppercase tracking-[0.1em]"
                  style={{ color: colors.onSurfaceVariant, fontFamily: "var(--font-inter)" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
