"use client";

const stats = [
  { value: "180+", label: "Roofs This Year" },
  { value: "4.9", label: "Google Rating" },
  { value: "20+", label: "Years Experience" },
  { value: "$0", label: "Down Payment" },
];

const testimonials = [
  {
    text: "StrongRoof made the insurance claim seamless. I didn't have to talk to my adjustor once, and the roof was finished in two days.",
    initials: "MD",
    name: "Marcus Davis",
    role: "Homeowner, Dallas",
  },
  {
    text: "The crew was professional and left my yard cleaner than it was when they arrived. Highly recommend for storm repairs.",
    initials: "SK",
    name: "Sarah Jenkins",
    role: "Business Owner",
  },
  {
    text: "I've worked with many contractors, but none have the technical precision of StrongRoof. Their detailed reports are impressive.",
    initials: "RT",
    name: "Robert Thompson",
    role: "Architect",
  },
];

export default function RoofSocialProof() {
  return (
    <section className="bg-[#151c27] py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-24 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <h3
                className="text-white text-4xl mb-2"
                style={{ fontFamily: "var(--font-epilogue)" }}
              >
                {s.value}
              </h3>
              <p
                className="text-[#9e2016] text-[10px] tracking-widest uppercase"
                style={{ fontFamily: "var(--font-epilogue)" }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white/5 backdrop-blur-md p-8 border border-white/10 relative"
            >
              <div
                className="text-[#9e2016] text-5xl absolute -top-4 -left-2 opacity-20"
                style={{ fontFamily: "var(--font-epilogue)" }}
              >
                &ldquo;
              </div>
              <p className="text-slate-300 italic mb-8 relative z-10">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 bg-[#9e2016] text-white flex items-center justify-center text-lg"
                  style={{ fontFamily: "var(--font-epilogue)" }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-white font-bold text-sm">{t.name}</p>
                  <p className="text-slate-500 text-[10px] uppercase tracking-widest">
                    {t.role}
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
