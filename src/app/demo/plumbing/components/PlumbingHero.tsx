"use client";

export default function PlumbingHero() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 bg-[#F5F0E8] overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">
          {/* Left Text */}
          <div className="space-y-8">
            <span
              className="inline-block bg-[#7E5700] text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.05em]"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              #1 TRUSTED PLUMBING SERVICES
            </span>
            <h1
              className="text-5xl md:text-7xl font-extrabold text-[#011545] leading-[1.1] tracking-tight uppercase"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              EXPERT PLUMBING SOLUTIONS YOU CAN COUNT ON
            </h1>
            <p
              className="text-[#45464F] text-lg leading-relaxed max-w-lg"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Premium residential plumbing services delivered with architectural
              precision and world-class care. Experience the gold standard of
              home maintenance.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                className="bg-[#7E5700] text-white px-8 py-4 rounded-lg font-bold text-sm transition-transform hover:scale-[1.02]"
                style={{
                  fontFamily: "var(--font-manrope)",
                  boxShadow: "0 4px 24px rgba(26,43,90,0.06)",
                }}
              >
                Schedule Service
              </button>
              <button
                className="border-2 border-[#011545] text-[#011545] px-8 py-4 rounded-lg font-bold text-sm transition-transform hover:scale-[1.02]"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                Call (555) 123-4567
              </button>
            </div>
            <div className="flex flex-col gap-3 pt-4">
              {[
                "Licensed & Bonded Specialists",
                "Upfront Pricing - No Hidden Fees",
                "24/7 Emergency Response",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span
                    className="material-symbols-outlined text-[#7E5700]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative z-10 overflow-hidden rounded-[40px] border-[12px] border-[#011545] h-[500px] md:h-[600px]">
              <img
                alt="Professional Plumber"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxubVUmGfQBD7sps17xfcPQryuRAHh3zoOGDgB0hcrOQlsqYylvc-bsVmSxnv34Fu_y-ndJp0hJCwEjLdJxKjQcAeQyCesCqseaxmQ8frpDn9hbxeI-SV3hTlxFlATBdXSUidAkfT9KS0SE8FxMUgoqbxb_HJcEvDXcxQwZYjGhOj-4-h8EQzijCJ_-VYrAdtHhHQAf238IL2IBFB1Z17pX5EfToMY8PFeRYmX_emO8_5_QbNXZwjnpMVQbL3lxpoFCu5Pjhr_4iU"
              />
            </div>
            {/* Floating Review Card */}
            <div
              className="absolute -bottom-8 -left-8 md:-left-12 bg-white p-6 rounded-2xl shadow-[0_4px_24px_rgba(26,43,90,0.06)] z-20 flex items-center gap-4 max-w-xs"
              style={{ border: "1px solid rgba(197, 198, 208, 0.15)" }}
            >
              <div className="flex flex-col">
                <div className="flex text-[#7E5700] mb-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <p
                  className="text-[#011545] font-bold"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  4.9/5 Rating
                </p>
                <p
                  className="text-xs text-[#757680]"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Based on 2,400+ reviews
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <div className="bg-[#1A2B5A] py-10">
        <div className="max-w-7xl mx-auto px-8 flex flex-wrap justify-between items-center gap-8">
          {[
            { value: "4,500+", label: "Projects" },
            { value: "13,000+", label: "Customers" },
            { value: "15+ Years", label: "Experience" },
            { value: "30 Min", label: "Response" },
          ].map((stat, i, arr) => (
            <div key={stat.label} className="flex items-center gap-8">
              <div className="flex flex-col">
                <span
                  className="text-3xl font-extrabold text-white"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  {stat.value}
                </span>
                <span
                  className="text-[#8493C9] text-xs uppercase tracking-widest font-bold"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {stat.label}
                </span>
              </div>
              {i < arr.length - 1 && (
                <div className="hidden md:block h-12 w-[1px] bg-[#7E5700]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
