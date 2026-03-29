import { NicheConfig } from "@/lib/niche-config";

interface Props {
  config: NicheConfig;
}

export default function PricingSection({ config }: Props) {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-white dark:bg-[--niche-dark-bg]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter uppercase mb-4 text-stone-900 dark:text-stone-100">
            Investment in Quality
          </h2>
          <p className="text-stone-500 dark:text-stone-400">
            Transparent pricing with no hidden fees.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
          {config.pricing.map((tier, i) => (
            <div
              key={i}
              className={`p-10 md:p-12 rounded-xl flex flex-col relative transition-transform hover:-translate-y-1 ${
                tier.popular
                  ? "bg-stone-100 dark:bg-[--niche-dark-surface-highest] ring-2"
                  : "bg-stone-50 dark:bg-[--niche-dark-surface-high]"
              }`}
              style={tier.popular ? { boxShadow: `0 0 0 2px ${config.theme.primary}` } : undefined}
            >
              {/* Popular badge */}
              {tier.popular && (
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 text-white text-[10px] font-extrabold uppercase tracking-[0.2em] px-6 py-2 rounded-full"
                  style={{
                    backgroundColor: config.theme.primary,
                    boxShadow: `0 4px 16px ${config.theme.glow}`,
                  }}
                >
                  Most Popular
                </div>
              )}

              <h3 className="text-xl font-bold uppercase tracking-widest mb-2 text-stone-900 dark:text-stone-100">
                {tier.name}
              </h3>

              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-3xl md:text-4xl font-extrabold text-stone-900 dark:text-stone-100">
                  {tier.price}
                </span>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {tier.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-stone-600 dark:text-stone-400">
                    <span
                      className="material-symbols-outlined text-lg"
                      style={{ color: config.theme.primary }}
                    >
                      check_circle
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest text-xs text-center transition-all hover:scale-[1.02] active:scale-95 block ${
                  tier.popular
                    ? "text-white"
                    : "border text-stone-700 dark:text-stone-300 border-stone-300 dark:border-stone-600 hover:bg-stone-100 dark:hover:bg-white/5"
                }`}
                style={
                  tier.popular
                    ? {
                        background: `linear-gradient(135deg, ${config.theme.primary}, ${config.theme.secondary})`,
                        boxShadow: `0 0 20px ${config.theme.glow}`,
                      }
                    : undefined
                }
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
