"use client";

import { useState } from "react";
import { colors, contactFaqs } from "../theme";

export default function PlumbingContactFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      className="py-16 lg:py-20"
      style={{ backgroundColor: colors.surfaceContainerLow }}
    >
      <div className="max-w-[720px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-10 lg:mb-14">
          <h2
            className="text-[24px] md:text-[28px] font-extrabold leading-[1.1] tracking-[0.02em] uppercase font-[var(--font-manrope)]"
            style={{ color: colors.primary }}
          >
            Common Questions
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {contactFaqs.map((faq, i) => (
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
                  className="text-[15px] font-bold pr-4 font-[var(--font-manrope)]"
                  style={{ color: colors.onSurface }}
                >
                  {faq.question}
                </h4>
                <span
                  className={`material-symbols-outlined text-[20px] transition-transform duration-300 flex-shrink-0 ${
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
                  className="px-5 lg:px-6 pb-5 lg:pb-6 text-[14px] leading-[1.65] font-[var(--font-inter)]"
                  style={{ color: colors.onSurfaceVariant }}
                >
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
