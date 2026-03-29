"use client";
const faqs = [
  { q: "How long do treatments take to dry?", a: "Our botanical formulas typically dry within 30-45 minutes. We recommend keeping pets and children off treated areas until fully dry for maximum safety.", expanded: true },
  { q: "Are your products really eco-friendly?" },
  { q: "What happens if it rains after treatment?" },
];
export default function PestContactFAQ() {
  return (
    <section className="py-20 px-6 bg-[#006e2f]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-12" style={{ fontFamily: "var(--font-jakarta)" }}>Common Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#004b1e]/20 rounded-2xl p-6 border border-white/10">
              <div className="flex justify-between items-center cursor-pointer">
                <h4 className="font-bold text-white" style={{ fontFamily: "var(--font-jakarta)" }}>{faq.q}</h4>
                <span className="material-symbols-outlined text-white">expand_more</span>
              </div>
              {faq.a && <p className="mt-4 text-emerald-50/80 text-sm leading-relaxed">{faq.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
