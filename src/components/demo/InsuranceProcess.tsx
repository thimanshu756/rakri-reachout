import { NicheConfig } from "@/lib/niche-config";

interface Props {
  config: NicheConfig;
}

const STEPS = [
  {
    icon: "search",
    title: "Inspection",
    description: "We document every damaged shingle and leak to build an unshakeable case.",
  },
  {
    icon: "description",
    title: "Documentation",
    description: "Professional damage reports prepared specifically for insurance adjusters.",
  },
  {
    icon: "upload_file",
    title: "Filing",
    description: "We meet with your adjuster on-site to advocate for your home's needs.",
  },
  {
    icon: "done_all",
    title: "Completion",
    description: "A brand new roof installed with $0 out-of-pocket costs beyond your deductible.",
  },
];

export default function InsuranceProcess({ config }: Props) {
  return (
    <section className="py-24 md:py-32 bg-white dark:bg-[--niche-dark-bg]" id="insurance">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter uppercase mb-6 text-stone-900 dark:text-stone-100">
            We Handle Your{" "}
            <span style={{ color: config.theme.primary }}>Insurance Claim</span>
          </h2>
          <p className="text-lg text-stone-500 dark:text-stone-400 max-w-2xl mx-auto">
            Don&apos;t fight the insurance giants alone. Our claims experts
            navigate the bureaucracy for you to ensure full coverage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connector line */}
          <div
            className="hidden md:block absolute top-12 left-[12.5%] w-[75%] h-0.5 bg-stone-200 dark:bg-[--niche-dark-surface-high]"
          />

          {STEPS.map((step, i) => (
            <div key={i} className="relative z-10 text-center px-4">
              <div
                className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 border-8 shadow-xl border-white dark:border-[--niche-dark-bg] ${
                  i === 0 ? "text-white" : "bg-stone-100 dark:bg-[--niche-dark-surface-high] text-stone-600 dark:text-stone-300"
                }`}
                style={i === 0 ? { backgroundColor: config.theme.primary } : undefined}
              >
                <span className="material-symbols-outlined text-3xl">{step.icon}</span>
              </div>
              <h4 className="text-xl font-bold uppercase mb-4 tracking-tight text-stone-900 dark:text-stone-100">
                {step.title}
              </h4>
              <p className="text-sm text-stone-500 dark:text-stone-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
