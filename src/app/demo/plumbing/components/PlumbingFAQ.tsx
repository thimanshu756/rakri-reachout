"use client";

const faqs = [
  "Do you offer emergency 24/7 services?",
  "How long does a typical repair take?",
  "Are your plumbers licensed and insured?",
  "What is your service area?",
];

export default function PlumbingFAQ() {
  return (
    <section className="py-24 bg-[#F5F0E8]" id="faq">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-3 gap-16">
        {/* Left Column */}
        <div className="md:col-span-1 space-y-4">
          <span
            className="inline-block bg-white text-[#7E5700] px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.05em]"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            LEARN MORE
          </span>
          <h2
            className="text-4xl font-extrabold text-[#011545] uppercase leading-tight"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            Frequently Asked Questions
          </h2>
          <p
            className="text-[#45464F]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Everything you need to know about our residential services and
            booking process.
          </p>
        </div>

        {/* Right Column: FAQ Items */}
        <div className="md:col-span-2 space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq}
              className="bg-white p-6 rounded-xl flex justify-between items-center group cursor-pointer"
              style={{
                boxShadow: "0 4px 24px rgba(26,43,90,0.06)",
                border: "1px solid rgba(197, 198, 208, 0.15)",
              }}
            >
              <span
                className="font-bold text-[#011545]"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                {faq}
              </span>
              <span className="material-symbols-outlined text-[#7E5700] transition-transform group-hover:rotate-180">
                expand_more
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
