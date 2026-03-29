import { NicheConfig } from "@/lib/niche-config";

interface Props {
  config: NicheConfig;
}

export default function CTABanner({ config }: Props) {
  return (
    <section className="py-28 md:py-40 bg-stone-50 dark:bg-[--niche-dark-surface] relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          background: `linear-gradient(to top, ${config.theme.primary}, transparent)`,
        }}
      />

      <div className="max-w-4xl mx-auto px-6 md:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter uppercase mb-6 md:mb-8 leading-[0.9] text-gradient">
          Love This Website?
          <br />
          <span className="text-stone-800 dark:text-stone-200" style={{ WebkitTextFillColor: "unset" }}>
            We Built It For You.
          </span>
        </h2>

        <p className="text-lg md:text-xl text-stone-500 dark:text-stone-400 mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed">
          Let&apos;s build your real website and start getting customers online today.
          Premium conversion-focused designs for local home services.
        </p>

        <div className="space-y-5 md:space-y-6">
          <a
            href="#contact"
            className="inline-block px-10 md:px-12 py-5 md:py-6 rounded-xl font-extrabold uppercase tracking-[0.15em] text-sm text-white transition-all hover:scale-105 active:scale-95"
            style={{
              background: `linear-gradient(135deg, ${config.theme.primary}, ${config.theme.secondary})`,
              boxShadow: `0 0 30px ${config.theme.glow}`,
            }}
          >
            Schedule Free Call
          </a>

          {/* Trust checks */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 pt-6 md:pt-8">
            {["Zero Hidden Fees", "Satisfaction Guarantee", "24/7 Support"].map((check) => (
              <div key={check} className="flex items-center gap-2">
                <span
                  className="material-symbols-outlined text-lg"
                  style={{ color: config.theme.primary, fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-stone-500 dark:text-stone-400">
                  {check}
                </span>
              </div>
            ))}
          </div>

          <p
            className="text-sm font-bold uppercase tracking-widest animate-pulse"
            style={{ color: config.theme.primary }}
          >
            Only 2 project slots available this month
          </p>
        </div>
      </div>
    </section>
  );
}
