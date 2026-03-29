"use client";

const faqs = [
  {
    q: "How long does a replacement take?",
    a: "Most residential roofs are completed in 1-2 days. Larger custom projects may take up to 4 days. We provide a specific timeline for every project during the proposal phase.",
  },
  {
    q: "Will insurance cover my repair?",
    a: "If there is evidence of wind, hail, or storm damage, coverage is highly likely. We specialize in insurance restoration and help document the evidence needed for a successful claim.",
  },
  {
    q: "What warranty do you offer?",
    a: "We offer a lifetime manufacturer warranty on GAF materials and a 10-year workmanship guarantee on all installations.",
  },
];

export default function RoofFAQ() {
  return (
    <section className="py-24 bg-white" id="faq">
      <div className="max-w-3xl mx-auto px-6">
        <h2
          className="text-3xl text-center uppercase mb-12"
          style={{ fontFamily: "var(--font-epilogue)" }}
        >
          FREQUENT QUESTIONS
        </h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details key={faq.q} className="group bg-[#f5f3f0]">
              <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                <span
                  className="text-sm uppercase tracking-widest"
                  style={{ fontFamily: "var(--font-epilogue)" }}
                >
                  {faq.q}
                </span>
                <span className="material-symbols-outlined transition-transform group-open:rotate-180">
                  expand_more
                </span>
              </summary>
              <div className="px-6 pb-6 text-sm text-[#585f6b] leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
