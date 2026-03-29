"use client";

const faqs = [
  { question: "How often should I service my HVAC system?", answer: "We recommend a professional tune-up at least twice a year — once in the spring for your AC and once in the fall for your heating system. Regular maintenance extends system life and maintains peak efficiency." },
  { question: "What are the signs I need a new AC?", answer: "If your system is older than 10-15 years, requires frequent repairs, or if your energy bills have spiked significantly, it may be time for a precision replacement." },
  { question: "Do you offer emergency weekend services?", answer: "Absolutely. Our emergency response team is available 24/7, including all weekends and holidays. We guarantee a technician at your door within 60 minutes for critical failures." },
  { question: "Can smart thermostats save me money?", answer: "Yes! A properly configured smart thermostat can reduce your energy bills by 10-23%. We install and program leading brands like Nest, Ecobee, and Honeywell for optimal savings." },
];

export default function HvacFAQ() {
  return (
    <section className="py-24" style={{ background: "#f5f0e6" }} id="faq">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-3 gap-16">
        {/* Left Column */}
        <div className="md:col-span-1 space-y-4">
          <span
            className="inline-block bg-white text-[#a13b05] px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.05em]"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            LEARN MORE
          </span>
          <h2
            className="text-4xl font-extrabold text-[#1c1c19] leading-tight"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            Frequently Asked Questions
          </h2>
          <p
            className="text-[#45464F]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Have more questions about our services? Our team is always here to
            provide clarity on your home&apos;s climate needs.
          </p>

          {/* Chat Widget */}
          <div
            className="mt-6 bg-white p-5 rounded-xl flex items-center gap-4"
            style={{
              boxShadow: "0 4px 24px rgba(161,59,5,0.06)",
              border: "1px solid rgba(139, 114, 104, 0.15)",
            }}
          >
            <span
              className="material-symbols-outlined text-[#a13b05]"
              style={{ fontVariationSettings: "'FILL' 1", fontSize: "32px" }}
            >
              forum
            </span>
            <div>
              <p
                className="text-[#1c1c19] text-sm font-medium"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Need faster help? Our expert chat is live now.
              </p>
              <a
                href="#"
                className="text-[#a13b05] font-bold text-sm hover:underline"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                Chat With Us
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: FAQ Items */}
        <div className="md:col-span-2 space-y-4">
          {faqs.map((faq, i) => (
            <details
              key={faq.question}
              className="bg-white rounded-xl group"
              style={{
                boxShadow: "0 4px 24px rgba(161,59,5,0.06)",
                border: "1px solid rgba(139, 114, 104, 0.15)",
              }}
              {...(i === 1 ? { open: true } : {})}
            >
              <summary className="p-6 flex justify-between items-center cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <span
                  className="font-bold text-[#1c1c19]"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  {faq.question}
                </span>
                <span className="material-symbols-outlined text-[#a13b05] transition-transform group-open:rotate-45">
                  add
                </span>
              </summary>
              <div className="px-6 pb-6">
                <p
                  className="text-[#45464F] leading-relaxed"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
