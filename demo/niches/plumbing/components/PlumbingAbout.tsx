"use client";

import { colors, shadows } from "../theme";

export default function PlumbingAbout() {
  const features = [
    { icon: "verified", text: "Master Plumber Certified Team" },
    { icon: "troubleshoot", text: "Advanced Leak Detection Technology" },
    { icon: "workspace_premium", text: "Lifetime Craftsmanship Warranty" },
  ];

  return (
    <section
      id="about"
      className="py-20 lg:py-28"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Images grid */}
          <div className="grid grid-cols-2 gap-4">
            <div
              className="aspect-[3/4] overflow-hidden"
              style={{ borderRadius: "12px" }}
            >
              <img
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=533&fit=crop"
                alt="Safe work environment"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const t = e.currentTarget;
                  t.style.display = "none";
                  t.parentElement!.style.backgroundColor = colors.surfaceContainerHighest;
                  t.parentElement!.innerHTML = `<div class="flex items-center justify-center w-full h-full"><span class="material-symbols-outlined" style="font-size:48px;color:${colors.primary}20">plumbing</span></div>`;
                }}
              />
            </div>
            <div
              className="aspect-[3/4] overflow-hidden mt-8"
              style={{ borderRadius: "12px" }}
            >
              <img
                src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=400&h=533&fit=crop"
                alt="Professional plumbing work"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const t = e.currentTarget;
                  t.style.display = "none";
                  t.parentElement!.style.backgroundColor = colors.surfaceContainerHighest;
                  t.parentElement!.innerHTML = `<div class="flex items-center justify-center w-full h-full"><span class="material-symbols-outlined" style="font-size:48px;color:${colors.primary}20">engineering</span></div>`;
                }}
              />
            </div>
          </div>

          {/* Right: Text content */}
          <div>
            <p
              className="text-[12px] font-bold uppercase tracking-[0.15em] mb-4"
              style={{ color: colors.secondary, fontFamily: "var(--font-inter)" }}
            >
              About Our Company
            </p>
            <h2
              className="text-[28px] md:text-[32px] lg:text-[36px] font-extrabold leading-[1.1] tracking-[0.02em] uppercase mb-6"
              style={{ color: colors.primary, fontFamily: "var(--font-manrope)" }}
            >
              Trusted Plumbing Expert You Can Count On
            </h2>
            <p
              className="text-[15px] leading-[1.65] mb-8"
              style={{ color: colors.onSurfaceVariant, fontFamily: "var(--font-inter)" }}
            >
              Since 2009, we have been the standard-bearers for residential plumbing excellence. We don&apos;t just fix pipes; we ensure the structural integrity and comfort of your home&apos;s most vital systems.
            </p>

            {/* Feature items with checkmarks */}
            <div className="space-y-5">
              {features.map((feature) => (
                <div key={feature.text} className="flex items-center gap-4">
                  <div
                    className="w-11 h-11 flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: `${colors.primary}10`,
                      borderRadius: "50%",
                    }}
                  >
                    <span
                      className="material-symbols-outlined text-[20px]"
                      style={{ color: colors.primary, fontVariationSettings: "'FILL' 1" }}
                    >
                      {feature.icon}
                    </span>
                  </div>
                  <span
                    className="text-[15px] font-semibold"
                    style={{ color: colors.onSurface, fontFamily: "var(--font-inter)" }}
                  >
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
