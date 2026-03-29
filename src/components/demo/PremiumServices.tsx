"use client";

import { NicheConfig } from "@/lib/niche-config";

interface Props {
  config: NicheConfig;
}

export default function PremiumServices({ config }: Props) {
  return (
    <section id="services" className="py-24 md:py-32 bg-white dark:bg-[--niche-dark-bg]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter uppercase mb-4 text-stone-900 dark:text-stone-100">
            {config.label} Excellence
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: config.theme.primary }} />
        </div>

        {/* Service cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {config.services.map((service, i) => (
            <div
              key={i}
              className="group relative p-8 md:p-10 rounded-xl bg-stone-50 dark:bg-[--niche-dark-surface-high] hover:bg-stone-100 dark:hover:bg-[--niche-dark-surface-highest] transition-all duration-300 hover:-translate-y-2 border-t-2 border-transparent"
              style={{
                // @ts-expect-error CSS custom property for hover state
                "--hover-border": `${config.theme.primary}60`,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderTopColor = `${config.theme.primary}60`)}
              onMouseLeave={(e) => (e.currentTarget.style.borderTopColor = "transparent")}
            >
              <div
                className="mb-6 w-14 h-14 rounded-full flex items-center justify-center transition-colors"
                style={{ backgroundColor: `${config.theme.primary}15` }}
              >
                <span
                  className="material-symbols-outlined text-3xl transition-colors"
                  style={{ color: config.theme.primary }}
                >
                  {service.icon}
                </span>
              </div>
              <h3 className="text-lg md:text-xl font-bold uppercase tracking-tight mb-3 text-stone-900 dark:text-stone-100">
                {service.title}
              </h3>
              <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
