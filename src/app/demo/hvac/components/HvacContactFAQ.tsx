"use client";

const contactFaqs = [
  {
    question: "What is your typical response time?",
    answer:
      "For emergencies, our average response time is under 60 minutes. Standard appointments are typically scheduled within 24 hours of your call.",
  },
  {
    question: "Can I get an estimate over the phone?",
    answer:
      "We can provide a general range over the phone, but for an accurate quote, we prefer to send a technician to assess the situation in person at no charge.",
  },
  {
    question: "What does your warranty cover?",
    answer:
      "Our comprehensive warranty covers all labor and craftsmanship. If anything we installed or repaired fails within the warranty period, we fix it completely free of charge.",
  },
];

export default function HvacContactFAQ() {
  return (
    <section className="py-24 px-8" style={{ background: "linear-gradient(135deg, #a13b05, #c1521f)" }}>
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
              className="border-b border-white/20 pb-6 group cursor-pointer"
            >
              <div className="flex justify-between items-center mb-4">
                <h4
                  className="font-bold text-lg text-white uppercase tracking-wide"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  {faq.question}
                </h4>
                <span className="material-symbols-outlined text-[#fdb741] group-hover:rotate-180 transition-transform">
                  expand_more
                </span>
              </div>
              <p
                className="text-[#f4c4a0] leading-relaxed"
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
