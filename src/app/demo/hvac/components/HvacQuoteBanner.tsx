"use client";

export default function HvacQuoteBanner() {
  return (
    <section
      className="py-20"
      style={{ background: "linear-gradient(135deg, #a13b05, #c1521f)" }}
    >
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: CTA */}
        <div className="space-y-8">
          <h2
            className="text-4xl md:text-5xl font-extrabold text-white leading-tight"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            Precision Climate Control For Over 12 Years
          </h2>
          <button
            className="bg-[#805600] text-white px-10 py-4 rounded-lg font-bold uppercase tracking-wider hover:scale-105 transition-transform"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            Schedule Now
          </button>
        </div>

        {/* Right: Quote Card */}
        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl relative border border-white/20">
          <span className="material-symbols-outlined text-6xl text-[#fdb741] absolute -top-8 -left-4">
            format_quote
          </span>
          <p
            className="text-white text-lg italic leading-relaxed mb-6"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            &ldquo;The team at Precision &amp; Comfort treated our HVAC overhaul like a
            mastercraft project. Our energy bills have dropped by 30% and the air
            quality is noticeably superior.&rdquo;
          </p>
          <div className="flex items-center gap-4">
            <img
              alt="Marcus Thornton"
              className="w-12 h-12 rounded-full object-cover"
              src="https://ui-avatars.com/api/?name=Marcus+Thornton&background=805600&color=fff&size=96&font-size=0.4&bold=true"
            />
            <div>
              <p className="text-white font-bold">Marcus Thornton</p>
              <div className="flex text-[#fdb741] mb-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className="material-symbols-outlined text-sm"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
