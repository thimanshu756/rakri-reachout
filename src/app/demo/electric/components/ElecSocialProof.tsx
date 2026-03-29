"use client";

const stats = [
  { val: "2500+", label: "Jobs Completed" },
  { val: "4.9★", label: "Google Rating" },
  { val: "15+ YRS", label: "Expertise" },
  { val: "100%", label: "Code Pass Rate" },
];

const testimonials = [
  { text: "PowerLine upgraded our 1950s panel in a single day. Their attention to detail and neatness was something I've never seen in a contractor. Truly professional.", author: "— Sarah J., Residential Client", offset: false },
  { text: "Emergency service was a lifesaver. Had a main breaker fail at 2AM and they were at my door in 30 minutes. Fixed the issue and did a safety sweep.", author: "— Michael R., Emergency Call", offset: true },
  { text: "Cleanest wiring I've ever seen. As a retired engineer, I appreciate the precision of their conduit work. Highly recommended for complex installs.", author: "— David K., Engineering Firm", offset: false },
];

export default function ElecSocialProof() {
  return (
    <section className="py-24 bg-[#151c27] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <span
                className="block text-4xl font-black text-[#eab308]"
                style={{ fontFamily: "var(--font-mono-elec)" }}
              >
                {s.val}
              </span>
              <span
                className="text-xs uppercase tracking-widest text-[#b9c7df]"
                style={{ fontFamily: "var(--font-mono-elec)" }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className={`bg-white/5 backdrop-blur-md p-8 border border-white/10 relative ${t.offset ? "md:-translate-y-4" : ""}`}
            >
              <div className="text-[#eab308] mb-4">
                <span className="material-symbols-outlined">format_quote</span>
              </div>
              <p className="text-sm italic leading-relaxed mb-6">
                &ldquo;{t.text}&rdquo;
              </p>
              <div
                className="text-xs uppercase tracking-widest"
                style={{ fontFamily: "var(--font-mono-elec)" }}
              >
                {t.author}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
