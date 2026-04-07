"use client";

export default function HvacHero({ phone = "(555) 234-5678", rating = 4.8, reviewCount = 350 }: { phone?: string; rating?: number; reviewCount?: number }) {
  const heroImages = [
    "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&h=600&fit=crop",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBu_d1iz1ZPsQl2AM4b0MhkIPfxGGeGSKq3fZ-oojPpWp2ccQpJnDsMj8ZFT1o5YesbazsA4L4f6c4vUQrexj_H7rkCEHgFdFGuKGu6PFvc9rEm4XSFdAoErGFH64tRqegrsX9OYFATlIhAB3NlNFSqLDnfCp-x10NVyeiwkAa4VrpWmX2vIZQ8xmvt6dpugsZZn06gpz4qNHlf9CarOo9mLSFzr1qUNddjwMooxkZkN2IUDtaDWJHqVWasdUNz-Il40MZzQHWIaEZo",
    "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=600&fit=crop",
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden relative" style={{ background: "#f5f0e6" }}>
        {/* Diagonal texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg, rgba(161,59,5,0.03) 0px, rgba(161,59,5,0.03) 1px, transparent 1px, transparent 12px)",
          }}
        />
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Text */}
            <div className="space-y-8">
              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#1c1c19] leading-[1.1] tracking-tight"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                Your Home&apos;s Comfort, Perfected.
              </h1>
              <p
                className="text-[#45464F] text-lg leading-relaxed max-w-lg"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Experience architectural precision in residential heating and cooling.
                We engineer sanctuary-level climate control for the modern home.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  className="text-white px-8 py-4 rounded-lg font-bold text-sm transition-transform hover:scale-[1.02]"
                  style={{
                    fontFamily: "var(--font-manrope)",
                    background: "linear-gradient(135deg, #a13b05, #c1521f)",
                    boxShadow: "0 4px 24px rgba(161,59,5,0.15)",
                  }}
                >
                  Book Service Today
                </button>
                <button
                  className="border-2 border-[#1c1c19] text-[#1c1c19] px-8 py-4 rounded-lg font-bold text-sm transition-transform hover:scale-[1.02]"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  View Pricing
                </button>
              </div>
            </div>

            {/* Right: 4 Image Grid */}
            <div className="grid grid-cols-2 gap-3">
              {heroImages.map((src, i) => (
                <div
                  key={i}
                  className="overflow-hidden rounded-2xl aspect-square"
                  style={{ boxShadow: "0 4px 24px rgba(161,59,5,0.06)" }}
                >
                  <img
                    alt={`HVAC service ${i + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    src={src}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <div
        className="py-10"
        style={{ background: "linear-gradient(135deg, #a13b05, #c1521f)" }}
      >
        <div className="max-w-7xl mx-auto px-8 flex flex-wrap justify-between items-center gap-8">
          {[
            { icon: "calendar_today", value: "Same-Day", label: "Availability" },
            { value: "350+", label: "Families Served" },
            { value: "4.8", label: "Star Rating" },
            { value: "12+", label: "Years Experience" },
            { value: "$1,200", label: "Avg. Annual Savings" },
          ].map((stat, i, arr) => (
            <div key={stat.label} className="flex items-center gap-8">
              <div className="flex items-center gap-3">
                {stat.icon && (
                  <span
                    className="material-symbols-outlined text-white/80"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {stat.icon}
                  </span>
                )}
                <div className="flex flex-col">
                  <span
                    className="text-2xl md:text-3xl font-extrabold text-white"
                    style={{ fontFamily: "var(--font-manrope)" }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="text-[#f4c4a0] text-xs uppercase tracking-widest font-bold"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {stat.label}
                  </span>
                </div>
              </div>
              {i < arr.length - 1 && (
                <div className="hidden md:block h-12 w-[1px] bg-white/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
