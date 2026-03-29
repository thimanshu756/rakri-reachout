import { NicheConfig } from "@/lib/niche-config";

interface Props {
  config: NicheConfig;
}

export default function BeforeAfter({ config }: Props) {
  return (
    <section className="py-24 md:py-32 bg-stone-50 dark:bg-[--niche-dark-bg] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter uppercase text-stone-900 dark:text-stone-100">
            See the{" "}
            <span style={{ color: config.theme.primary }}>Transformation</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image placeholders */}
          <div className="space-y-6">
            <div className="relative group aspect-video overflow-hidden rounded-xl bg-stone-200 dark:bg-[--niche-dark-surface-high]">
              <div className="w-full h-full flex items-center justify-center text-stone-400 dark:text-stone-500">
                <span className="material-symbols-outlined text-6xl">broken_image</span>
              </div>
              <div className="absolute top-6 left-6 bg-stone-900/90 dark:bg-slate-900/90 px-6 py-2 font-black uppercase tracking-widest text-sm text-white border border-white/20 rounded">
                Before
              </div>
            </div>
            <div className="relative group aspect-video overflow-hidden rounded-xl bg-stone-200 dark:bg-[--niche-dark-surface-high]">
              <div className="w-full h-full flex items-center justify-center text-stone-400 dark:text-stone-500">
                <span className="material-symbols-outlined text-6xl">roofing</span>
              </div>
              <div
                className="absolute top-6 left-6 px-6 py-2 font-black uppercase tracking-widest text-sm text-white rounded"
                style={{ backgroundColor: config.theme.primary }}
              >
                After
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center lg:pl-8">
            <div className="mb-12">
              <h3 className="text-3xl font-bold mb-4 uppercase text-stone-900 dark:text-stone-100">
                Full Restoration Project
              </h3>
              <p className="text-stone-500 dark:text-stone-400 text-lg leading-relaxed">
                Following a severe hailstorm, we provided a complete restoration.
                The result is a roof that not only looks superior but increases
                the home value by an estimated 12%.
              </p>
            </div>

            <ul className="space-y-6">
              {[
                { title: "Material Upgrade", desc: "Upgraded to GAF Timberline HDZ with LayerLock technology." },
                { title: "Insurance Funded", desc: "Zero out-of-pocket costs for the homeowner after deductible." },
                { title: "Lifetime Warranty", desc: "Full manufacturer and workmanship warranty included." },
              ].map((item) => (
                <li key={item.title} className="flex items-start gap-4">
                  <span
                    className="material-symbols-outlined mt-0.5"
                    style={{ color: config.theme.primary }}
                  >
                    check_circle
                  </span>
                  <div>
                    <h4 className="font-bold uppercase tracking-tight text-stone-900 dark:text-stone-100">
                      {item.title}
                    </h4>
                    <p className="text-sm text-stone-500 dark:text-stone-400">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
