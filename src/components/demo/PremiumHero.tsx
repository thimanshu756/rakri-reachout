import { NicheConfig } from "@/lib/niche-config";

interface Props {
  businessName: string;
  city: string;
  phone: string;
  rating: number;
  reviewCount: number;
  config: NicheConfig;
}

export default function PremiumHero({
  businessName,
  city,
  phone,
  rating,
  reviewCount,
  config,
}: Props) {
  const phoneDigits = phone.replace(/[^\d+]/g, "");

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-[--niche-light-bg] dark:bg-[--niche-dark-bg]">
      {/* Ambient glow blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute top-1/4 -left-20 w-96 h-96 rounded-full blur-[120px] opacity-10"
          style={{ backgroundColor: config.theme.primary }}
        />
        <div
          className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] rounded-full blur-[150px] opacity-5"
          style={{ backgroundColor: config.theme.secondary }}
        />
      </div>

      {/* Dot pattern */}
      <div className="absolute inset-0 hero-grid opacity-30 dark:opacity-100" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Rating badge */}
          {rating > 0 && (
            <div className="inline-flex items-center gap-2 glass-card px-5 py-2.5 rounded-full">
              <span className="flex items-center gap-0.5" style={{ color: config.theme.secondary }}>
                {Array.from({ length: Math.floor(rating) }).map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                ))}
                {rating % 1 >= 0.5 && (
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star_half
                  </span>
                )}
              </span>
              <span className="text-xs font-bold tracking-widest uppercase text-stone-500 dark:text-stone-400">
                {rating} from {reviewCount}+ Reviews
              </span>
            </div>
          )}

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[0.9] text-gradient">
            {config.heroHeadline}
          </h1>

          {/* Business name & city */}
          <p className="text-xl md:text-2xl font-medium text-stone-500 dark:text-stone-400 max-w-2xl mx-auto leading-relaxed">
            <span className="font-bold text-stone-800 dark:text-stone-200">{businessName}</span> — {config.heroSubtext} Serving {city} and surrounding areas.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a
              href="#contact"
              className="btn-glow px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs text-white transition-all hover:scale-105 active:scale-95"
              style={{
                background: `linear-gradient(135deg, ${config.theme.primary} 0%, ${config.theme.secondary} 100%)`,
                boxShadow: `0 0 20px ${config.theme.glow}`,
              }}
            >
              Schedule Service Today
            </a>
            <a
              href={`tel:${phoneDigits}`}
              className="px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs border transition-all hover:bg-black/5 dark:hover:bg-white/5 text-stone-700 dark:text-stone-300 border-stone-300 dark:border-stone-700"
            >
              Call: {phone}
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-8 pt-8 border-t border-stone-200 dark:border-stone-800">
            {config.trustBadges.map((badge) => (
              <div key={badge.label} className="flex items-center gap-2">
                <span
                  className="material-symbols-outlined text-2xl"
                  style={{ color: config.theme.primary }}
                >
                  {badge.icon}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-stone-500 dark:text-stone-400">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
