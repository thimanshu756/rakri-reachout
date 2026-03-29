import { NicheConfig } from "@/lib/niche-config";

interface Props {
  config: NicheConfig;
}

export default function ProtectionPlans({ config }: Props) {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-[--niche-light-bg] dark:bg-[--niche-dark-bg]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="text-xs font-bold tracking-widest uppercase"
            style={{ color: config.theme.primary }}
          >
            Pricing Options
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mt-4 text-stone-900 dark:text-white">
            Choose Your Shield
          </h2>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {config.pricing.map((plan, i) => (
            <div
              key={i}
              className={`rounded-2xl transition-all ${
                plan.popular
                  ? "p-10 scale-105 shadow-2xl relative text-white"
                  : "p-8 glass-card hover:shadow-lg border border-stone-200 dark:border-stone-800 bg-white dark:bg-transparent"
              }`}
              style={
                plan.popular
                  ? {
                      background: `linear-gradient(135deg, ${config.theme.primary} 0%, ${config.theme.secondary} 100%)`,
                      boxShadow: `0 20px 60px ${config.theme.glow}`,
                    }
                  : undefined
              }
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-xs font-black px-4 py-1 rounded-full uppercase tracking-widest"
                  style={{ color: config.theme.primary }}
                >
                  Most Popular
                </div>
              )}

              <h3
                className={`text-xl font-bold mb-2 ${
                  plan.popular ? "text-white" : "text-stone-900 dark:text-white"
                }`}
              >
                {plan.name}
              </h3>
              <div
                className={`text-4xl font-extrabold mb-6 ${
                  plan.popular ? "text-white" : ""
                }`}
                style={!plan.popular ? { color: config.theme.primary } : undefined}
              >
                {plan.price}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, j) => (
                  <li
                    key={j}
                    className={`flex items-center gap-2 text-sm ${
                      plan.popular ? "text-white/90" : "text-stone-600 dark:text-stone-400"
                    }`}
                  >
                    <span
                      className="material-symbols-outlined text-sm"
                      style={{
                        color: plan.popular ? "rgba(255,255,255,0.8)" : config.theme.secondary,
                      }}
                    >
                      check_circle
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-xl font-bold transition-all hover:scale-[0.98] active:scale-95 ${
                  plan.popular
                    ? "bg-white text-stone-900 shadow-lg"
                    : "border-2 hover:text-white"
                }`}
                style={
                  !plan.popular
                    ? {
                        borderColor: config.theme.primary,
                        color: config.theme.primary,
                      }
                    : undefined
                }
                onMouseEnter={(e) => {
                  if (!plan.popular) {
                    e.currentTarget.style.backgroundColor = config.theme.primary;
                    e.currentTarget.style.color = "white";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!plan.popular) {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = config.theme.primary;
                  }
                }}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
