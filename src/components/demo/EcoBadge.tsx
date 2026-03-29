import { NicheConfig } from "@/lib/niche-config";

interface Props {
  config: NicheConfig;
}

const ECO_POINTS = [
  {
    icon: "eco",
    title: "Pet & Child Safe",
    description: "Non-toxic when dry. No harsh chemical smells.",
  },
  {
    icon: "water_drop",
    title: "No Groundwater Runoff",
    description: "Precision application techniques protect the environment.",
  },
  {
    icon: "verified_user",
    title: "EPA Approved",
    description: "All products meet or exceed EPA safety standards.",
  },
  {
    icon: "pets",
    title: "Animal Friendly",
    description: "Safe for all household pets and local wildlife.",
  },
];

export default function EcoBadge({ config }: Props) {
  return (
    <section className="py-24 md:py-32 bg-white dark:bg-[--niche-dark-surface]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <span
              className="text-xs font-bold tracking-widest uppercase"
              style={{ color: config.theme.primary }}
            >
              Our Commitment
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mt-4 mb-8 text-stone-900 dark:text-white leading-tight">
              Safe for Your Family.{" "}
              <br />
              Tough on Pests.
            </h2>
            <p className="text-lg text-stone-500 dark:text-stone-400 leading-relaxed mb-10">
              We believe you shouldn&apos;t have to trade safety for results. Our
              approach uses botanical-based derivatives and targeted applications
              that minimize environmental footprint while maximizing elimination.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {ECO_POINTS.map((point) => (
                <div key={point.title} className="flex items-start gap-4">
                  <span
                    className="material-symbols-outlined text-2xl mt-0.5"
                    style={{
                      color: config.theme.primary,
                      fontVariationSettings: "'FILL' 1",
                    }}
                  >
                    {point.icon}
                  </span>
                  <div>
                    <h4 className="font-bold text-stone-900 dark:text-white">
                      {point.title}
                    </h4>
                    <p className="text-sm text-stone-500 dark:text-stone-400 mt-1">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual - Eco Badge Card */}
          <div className="relative">
            <div
              className="absolute -inset-4 rounded-3xl blur-3xl opacity-10"
              style={{ backgroundColor: config.theme.primary }}
            />
            <div className="relative glass-card rounded-3xl p-12 text-center border border-stone-200 dark:border-stone-800 bg-white dark:bg-transparent">
              <div
                className="w-24 h-24 rounded-full mx-auto mb-8 flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${config.theme.primary} 0%, ${config.theme.secondary} 100%)`,
                  boxShadow: `0 0 40px ${config.theme.glow}`,
                }}
              >
                <span className="material-symbols-outlined text-white text-5xl">
                  shield
                </span>
              </div>
              <h3 className="text-2xl font-extrabold text-stone-900 dark:text-white mb-4">
                GreenShield Certified
              </h3>
              <p className="text-stone-500 dark:text-stone-400 mb-8">
                100% Family &amp; Pet Safe Products
              </p>
              <div className="flex justify-center gap-6 flex-wrap">
                {["EPA Approved", "Pet Safe", "Child Safe"].map((badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider"
                    style={{
                      color: config.theme.primary,
                      backgroundColor: `${config.theme.primary}15`,
                    }}
                  >
                    <span className="material-symbols-outlined text-sm">check</span>
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
