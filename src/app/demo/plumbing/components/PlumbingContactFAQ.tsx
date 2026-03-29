"use client";

const contactFaqs = [
  {
    question: "How quickly can you arrive for an emergency?",
    answer:
      "Our emergency teams are strategically positioned throughout the metro area. We aim for a response time under 30 minutes for all critical plumbing failures like burst pipes or main line clogs.",
  },
  {
    question: "Do you provide free estimates over the phone?",
    answer:
      "We provide ballpark ranges over the phone, but for a binding Upfront Quote, we prefer a physical inspection to ensure we account for all specific architectural nuances of your home.",
  },
  {
    question: "Are your parts and labor warrantied?",
    answer:
      "Yes. All labor is backed by our signature 1-year guarantee. Manufacturer warranties on fixtures and equipment installed by us often extend up to 10 years depending on the brand.",
  },
];

export default function PlumbingContactFAQ() {
  return (
    <section className="py-24 bg-[#011545] px-8">
      <div className="max-w-4xl mx-auto">
        <h2
          className="font-extrabold text-3xl text-white uppercase tracking-widest text-center mb-16"
          style={{ fontFamily: "var(--font-manrope)" }}
        >
          Common Questions
        </h2>
        <div className="space-y-6">
          {contactFaqs.map((faq) => (
            <div
              key={faq.question}
              className="border-b border-[#ECE8E0]/20 pb-6 group cursor-pointer"
            >
              <div className="flex justify-between items-center mb-4">
                <h4
                  className="font-bold text-lg text-white uppercase tracking-wide"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  {faq.question}
                </h4>
                <span className="material-symbols-outlined text-[#7E5700] group-hover:rotate-180 transition-transform">
                  expand_more
                </span>
              </div>
              <p
                className="text-[#8493C9] leading-relaxed"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
