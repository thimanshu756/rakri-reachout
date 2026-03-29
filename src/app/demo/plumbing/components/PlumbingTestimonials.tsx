"use client";

const testimonials = [
  {
    text: "The response time was incredible. They fixed my burst pipe in under an hour during a Sunday evening. Truly life-savers!",
    name: "Sarah Jenkins",
    location: "Westside Heights",
  },
  {
    text: "Impeccable attention to detail during our bathroom remodel. The finishes are perfect.",
    name: "Robert Miller",
    location: "Downtown Lofts",
  },
  {
    text: "Fair pricing and very respectful of my property. They used boot covers and cleaned up perfectly.",
    name: "Elena Rodriguez",
    location: "East Village",
  },
];

export default function PlumbingTestimonials() {
  return (
    <section className="py-24 bg-white" id="testimonials">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <span
            className="inline-block bg-[#F2EDE5] text-[#7E5700] px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.05em]"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            TESTIMONIALS
          </span>
          <h2
            className="text-4xl font-extrabold text-[#011545] uppercase"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            What Our Clients Say
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="p-8 rounded-xl bg-[#F8F3EB] transition-all hover:scale-[1.02] hover:shadow-[0_4px_24px_rgba(26,43,90,0.06)] relative group"
            >
              <span className="material-symbols-outlined text-[#7E5700]/20 text-5xl absolute top-6 right-8">
                format_quote
              </span>
              <div className="flex text-[#7E5700] mb-4">
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
              <p
                className="text-[#011545] italic mb-6 leading-relaxed"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                &ldquo;{t.text}&rdquo;
              </p>
              <div>
                <p className="font-bold text-[#011545]">{t.name}</p>
                <p
                  className="text-[#45464F] text-xs font-medium"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {t.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
