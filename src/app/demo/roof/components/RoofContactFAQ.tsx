"use client";

const faqs = [
  "Do you handle the insurance claim process?",
  "How fast can you get a tarp on my roof?",
  "Is the inspection really free?",
];

export default function RoofContactFAQ() {
  return (
    <section className="bg-[#151c27] py-24">
      <div className="max-w-4xl mx-auto px-8">
        <h2
          className="text-3xl uppercase text-white text-center mb-12"
          style={{ fontFamily: "var(--font-epilogue)" }}
        >
          COMMON QUESTIONS
        </h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq}
              className="bg-white/5 border border-white/10 p-6 flex justify-between items-center group cursor-pointer hover:bg-white/10 transition-all"
            >
              <p className="text-white font-bold">{faq}</p>
              <span className="material-symbols-outlined text-[#9e2016] group-hover:translate-x-1 transition-transform">
                chevron_right
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
