"use client";

const testimonials = [
  {
    text: "The most professional trade company I've ever hired. From the clean uniforms to the precise installation, everything was perfect.",
    name: "Sarah J.",
    role: "Homeowner",
    rating: 5,
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAfieleqtue6xitkbI_x7QCkYLSjZAlLvuiMbI7kx7wk9k6BW88nNoHetiGRYEzdQEYVL4UatiWG65zFFJl2s4hFRN6MLU3AdYqqsmj1gJxw0owu84y8aNMTxgucWulQuC__pnViyMOBMYM5zILvpHJOU7ZsOiRVa3B76EXW7dH6TUi-0JpHMcasYs_GWjtpZJR3jhy4PBrFrvJ9romyuwVycpOR3TTkrXq29GDqZ1sN7v5DPniVKFQqqhNzGYdtjkmtsnyxktaYUrW",
  },
  {
    text: "They fixed an airflow issue that three other companies couldn't solve. Their diagnostic equipment is truly next level.",
    name: "David R.",
    role: "Real Estate Developer",
    rating: 5,
    src: "https://ui-avatars.com/api/?name=David+R&background=a13b05&color=fff&size=96&font-size=0.4&bold=true",
  },
  {
    text: "Their maintenance plan is a lifesaver. I never have to worry about my furnace in the winter anymore. Highly recommend.",
    name: "Elena M.",
    role: "Architect",
    rating: 5,
    src: "https://ui-avatars.com/api/?name=Elena+M&background=68594d&color=fff&size=96&font-size=0.4&bold=true",
  },
];

export default function HvacTestimonials() {
  return (
    <section className="py-24 bg-white" id="testimonials">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <span
            className="inline-block bg-[#f2ede4] text-[#a13b05] px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.05em]"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            TESTIMONIALS
          </span>
          <h2
            className="text-4xl font-extrabold text-[#1c1c19]"
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
              className="p-8 rounded-xl bg-[#f8f3ea] transition-all hover:scale-[1.02] relative group"
              style={{ boxShadow: "0 4px 24px rgba(161,59,5,0.04)" }}
            >
              <span className="material-symbols-outlined text-[#a13b05]/20 text-5xl absolute top-6 right-8">
                format_quote
              </span>
              <div className="flex text-[#a13b05] mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
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
                className="text-[#1c1c19] italic mb-6 leading-relaxed"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <img
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                  src={t.src}
                />
                <div>
                  <p className="font-bold text-[#1c1c19]">{t.name}</p>
                  <p
                    className="text-[#45464F] text-xs font-medium"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
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
