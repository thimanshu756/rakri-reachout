"use client";

import { useState } from "react";
import { NicheConfig } from "@/lib/niche-config";

interface Props {
  config: NicheConfig;
}

export default function FAQSection({ config }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 md:py-32 bg-white dark:bg-[--niche-dark-bg]">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter uppercase text-center mb-14 md:mb-20 text-stone-900 dark:text-stone-100">
          Frequently Asked
        </h2>

        <div className="space-y-3 md:space-y-4">
          {config.faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-[--niche-dark-surface] overflow-hidden transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left group"
              >
                <h4 className="font-bold text-sm md:text-base text-stone-800 dark:text-stone-200 pr-4">
                  {faq.question}
                </h4>
                <span
                  className={`material-symbols-outlined transition-transform duration-300 flex-shrink-0 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                  style={{ color: config.theme.primary }}
                >
                  expand_more
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-5 md:px-6 pb-5 md:pb-6 text-sm text-stone-500 dark:text-stone-400 leading-relaxed">
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
