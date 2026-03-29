"use client";

import { useEffect, useRef, useState } from "react";
import { NicheConfig } from "@/lib/niche-config";

interface Props {
  config: NicheConfig;
}

function AnimatedCounter({ target, color }: { target: string; color: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [display, setDisplay] = useState(target);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const numeric = parseFloat(target.replace(/[^0-9.]/g, ""));
    const suffix = target.replace(/[0-9.]/g, "");
    if (isNaN(numeric)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 1500;
          const startTime = performance.now();

          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            start = Math.round(eased * numeric);

            if (numeric >= 100) {
              setDisplay(`${start}${suffix}`);
            } else if (numeric >= 1) {
              setDisplay(`${(eased * numeric).toFixed(numeric % 1 ? 1 : 0)}${suffix}`);
            } else {
              setDisplay(target);
            }

            if (progress < 1) requestAnimationFrame(animate);
            else setDisplay(target);
          };

          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <p ref={ref} className="text-4xl md:text-5xl font-extrabold mb-2" style={{ color }}>
      {display}
    </p>
  );
}

export default function SocialProof({ config }: Props) {
  const statColors = [
    config.theme.primary,
    config.theme.secondary,
    config.theme.primary,
    config.theme.secondary,
  ];

  return (
    <section id="results" className="py-24 md:py-32 bg-stone-50 dark:bg-[--niche-dark-surface] overflow-hidden relative">
      {/* Dot pattern overlay */}
      <div className="absolute inset-0 hero-grid opacity-20 dark:opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-20 items-center">
          {/* Left: Stats */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter uppercase mb-10 text-stone-900 dark:text-stone-100">
              Keeping{" "}
              <span style={{ color: config.theme.primary }}>
                {config.stats[0]?.value}
              </span>{" "}
              {config.stats[0]?.label === "Happy Customers" ? "Customers" : config.stats[0]?.label}
              <br />
              Satisfied
            </h2>

            <div className="grid grid-cols-2 gap-8 md:gap-12">
              {config.stats.map((stat, i) => (
                <div key={i}>
                  <AnimatedCounter target={stat.value} color={statColors[i % statColors.length]} />
                  <p className="text-[10px] font-bold uppercase tracking-widest text-stone-500 dark:text-stone-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Testimonials */}
          <div className="space-y-5 md:space-y-6">
            {config.testimonials.map((testimonial, i) => (
              <div
                key={i}
                className={`glass-card p-6 md:p-8 rounded-xl border-l-4 ${i > 0 ? "opacity-75 hover:opacity-100" : ""} transition-opacity`}
                style={{ borderLeftColor: i === 0 ? config.theme.primary : config.theme.secondary }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-3" style={{ color: config.theme.secondary }}>
                  {Array.from({ length: 5 }).map((_, j) => (
                    <span
                      key={j}
                      className="material-symbols-outlined text-sm"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>

                <p className="italic text-stone-600 dark:text-stone-400 mb-4 leading-relaxed text-sm md:text-base">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white"
                    style={{ backgroundColor: config.theme.primary }}
                  >
                    {testimonial.initials}
                  </div>
                  <p className="font-bold uppercase tracking-widest text-xs text-stone-800 dark:text-stone-200">
                    — {testimonial.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
