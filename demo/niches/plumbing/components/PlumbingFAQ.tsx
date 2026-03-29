"use client";

import { useState } from "react";
import { colors, faqs } from "../theme";

export default function PlumbingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="py-20 lg:py-28"
      style={{ backgroundColor: colors.surfaceContainerLow }}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Headline */}
          <div>
            <p
              className="text-[12px] font-bold uppercase tracking-[0.15em] mb-4"
              style={{ color: colors.secondary, fontFamily: "var(--font-inter)" }}
            >
              Got Questions?
            </p>
            <h2
              className="text-[28px] md:text-[32px] lg:text-[36px] font-extrabold leading-[1.1] tracking-[0.02em] uppercase mb-6"
              style={{ color: colors.primary, fontFamily: "var(--font-manrope)" }}
            >
              Frequently Asked Questions
            </h2>
            <p
              className="text-[15px] leading-[1.65]"
              style={{ color: colors.onSurfaceVariant, fontFamily: "var(--font-inter)" }}
            >
              Everything you need to know about our residential services and booking process.
            </p>
          </div>

          {/* Right: Accordion */}
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="overflow-hidden transition-all duration-300"
                style={{
                  backgroundColor: colors.surfaceContainerLowest,
                  borderRadius: "12px",
                  boxShadow: "0 2px 8px rgba(26,43,90,0.03)",
                }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 lg:p-6 text-left"
                >
                  <h4
                    className="text-[15px] font-bold pr-4"
                    style={{ color: colors.onSurface, fontFamily: "var(--font-manrope)" }}
                  >
                    {faq.question}
                  </h4>
                  <span
                    className={`material-symbols-outlined text-[20px] transition-transform duration-300 shrink-0 ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                    style={{ color: colors.primary }}
                  >
                    expand_more
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p
                    className="px-5 lg:px-6 pb-5 lg:pb-6 text-[14px] leading-[1.65]"
                    style={{ color: colors.onSurfaceVariant, fontFamily: "var(--font-inter)" }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
