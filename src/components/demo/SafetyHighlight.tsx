import { NicheConfig } from "@/lib/niche-config";

interface SafetyPoint {
  title: string;
  description: string;
  icon: string;
}

interface Props {
  config: NicheConfig;
  safetyPoints?: SafetyPoint[];
}

const DEFAULT_SAFETY_POINTS: SafetyPoint[] = [
  {
    title: "Code-compliant guaranteed",
    description:
      "Every wire, every nut, and every panel is installed exactly to NEC (National Electrical Code) standards.",
    icon: "verified_user",
  },
  {
    title: "Licensed & fully insured",
    description:
      "We carry comprehensive liability insurance and master licensure for total peace of mind.",
    icon: "gavel",
  },
  {
    title: "Post-work safety inspection",
    description:
      "We don't just finish the job; we run a full diagnostic suite before we ever leave your property.",
    icon: "fact_check",
  },
];

export default function SafetyHighlight({ config, safetyPoints }: Props) {
  const points = safetyPoints || DEFAULT_SAFETY_POINTS;

  return (
    <section
      className="py-24 bg-white dark:bg-[--niche-dark-bg]"
      id="safety"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-8 leading-tight">
              Your Family&apos;s Safety Is{" "}
              <span style={{ color: config.theme.primary }}>
                Non-Negotiable.
              </span>
            </h2>
            <div className="space-y-10 relative">
              {/* Vertical pulse line */}
              <div
                className="absolute left-6 top-8 bottom-8 w-px hidden md:block"
                style={{ backgroundColor: `${config.theme.primary}33` }}
              />
              {points.map((point, i) => (
                <div key={i} className="flex gap-6 relative">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 z-10"
                    style={{
                      backgroundColor: `${config.theme.primary}1a`,
                      border: `1px solid ${config.theme.primary}4d`,
                    }}
                  >
                    <span
                      className="material-symbols-outlined"
                      style={{ color: config.theme.primary }}
                    >
                      {point.icon}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                      {point.title}
                    </h4>
                    <p className="text-gray-600 dark:text-[#a3aac4]">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual placeholder */}
          <div className="glass-card rounded-xl overflow-hidden p-4">
            <div
              className="w-full h-80 rounded-lg flex items-center justify-center bg-gray-100 dark:bg-[--niche-dark-surface-high]"
            >
              <div className="text-center">
                <span
                  className="material-symbols-outlined text-8xl mb-4"
                  style={{
                    color: config.theme.primary,
                    fontVariationSettings: "'FILL' 1",
                  }}
                >
                  health_and_safety
                </span>
                <p className="text-gray-400 dark:text-[#a3aac4] text-sm uppercase tracking-widest">
                  Safety First
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
