import { NicheConfig } from "@/lib/niche-config";

interface Props {
  config: NicheConfig;
  niche?: string;
}

const PROBLEM_HEADLINES: Record<string, string> = {
  plumber: "Is Your Business Invisible Online?",
  hvac: "Why HVAC Maintenance Matters",
  roofer: "A Damaged Roof Doesn't Wait",
  electrician: "Electrical Issues Are Not DIY Projects",
  pest_control: "Pests Don't Take Days Off",
};

export default function ProblemSection({ config, niche }: Props) {
  const colors = [config.theme.primary, config.theme.secondary, "#ef4444"];

  return (
    <section className="py-24 md:py-32 bg-stone-50 dark:bg-[--niche-dark-surface]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16 md:mb-20">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4 text-stone-900 dark:text-stone-100">
              {PROBLEM_HEADLINES[niche || ""] || `Why ${config.label} Matters`}
            </h2>
            <p className="text-stone-500 dark:text-stone-400 text-lg">
              The numbers don&apos;t lie — acting now saves you time and money.
            </p>
          </div>
          <a
            href="#contact"
            className="flex items-center gap-2 font-bold uppercase tracking-widest text-sm group"
            style={{ color: config.theme.primary }}
          >
            Let&apos;s fix that
            <span className="material-symbols-outlined transition-transform group-hover:translate-x-2">
              arrow_forward
            </span>
          </a>
        </div>

        {/* Stats grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {config.problemStats.map((stat, i) => (
            <div
              key={i}
              className="p-10 md:p-12 glass-card rounded-xl border-t-2 transition-transform hover:-translate-y-1"
              style={{ borderTopColor: `${colors[i % colors.length]}40` }}
            >
              <p
                className="text-5xl md:text-6xl font-extrabold mb-3"
                style={{ color: colors[i % colors.length] }}
              >
                {stat.stat}
              </p>
              <p className="text-xs font-bold uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-4">
                {stat.title}
              </p>
              <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
