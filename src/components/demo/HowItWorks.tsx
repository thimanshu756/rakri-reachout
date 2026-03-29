import { NicheConfig } from "@/lib/niche-config";

interface Props {
  config: NicheConfig;
}

export default function HowItWorks({ config }: Props) {
  const stepColors = [config.theme.primary, config.theme.secondary, config.theme.primary];

  return (
    <section className="py-24 md:py-32 bg-stone-50 dark:bg-[--niche-dark-surface] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter uppercase text-center mb-20 md:mb-32 text-stone-900 dark:text-stone-100">
          3 Steps to Get Started
        </h2>

        <div className="relative grid md:grid-cols-3 gap-12 md:gap-16">
          {/* Connecting dashed line (desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-px border-t-2 border-dashed border-stone-300 dark:border-stone-700 z-0" />

          {config.howItWorks.map((step, i) => (
            <div key={i} className="relative z-10 text-center">
              <div
                className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8 shadow-xl bg-white dark:bg-[--niche-dark-surface-highest]"
                style={{ border: `4px solid ${stepColors[i % stepColors.length]}` }}
              >
                <span
                  className="text-2xl md:text-3xl font-extrabold"
                  style={{ color: stepColors[i % stepColors.length] }}
                >
                  {String(step.step).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-lg md:text-xl font-bold uppercase tracking-widest mb-3 text-stone-900 dark:text-stone-100">
                {step.title}
              </h3>
              <p className="text-stone-500 dark:text-stone-400 text-sm px-4 md:px-6">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
