"use client";

import { useState, useEffect } from "react";
import { NicheConfig } from "@/lib/niche-config";

interface Props {
  config: NicheConfig;
  message?: string;
  discount?: string;
}

export default function SeasonalAlert({
  config,
  message = "Spring Pest Season Is Here",
  discount = "Book this week and save 20% on initial treatment.",
}: Props) {
  const [timeLeft, setTimeLeft] = useState({ hours: 4, minutes: 22, seconds: 15 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const totalSeconds = prev.hours * 3600 + prev.minutes * 60 + prev.seconds - 1;
        if (totalSeconds <= 0) return { hours: 4, minutes: 22, seconds: 15 };
        return {
          hours: Math.floor(totalSeconds / 3600),
          minutes: Math.floor((totalSeconds % 3600) / 60),
          seconds: totalSeconds % 60,
        };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (n: number) => n.toString().padStart(2, "0");

  return (
    <section
      className="py-8 px-6 md:px-8"
      style={{
        background: `linear-gradient(135deg, ${config.theme.primary} 0%, ${config.theme.secondary} 100%)`,
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-white text-2xl">
              emergency_home
            </span>
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
              {message}
            </h3>
            <p className="text-white/80 text-sm md:text-base mt-1">
              {discount}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-6 md:gap-8">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-extrabold text-white tabular-nums">
              {pad(timeLeft.hours)}:{pad(timeLeft.minutes)}:{pad(timeLeft.seconds)}
            </div>
            <div className="text-[10px] uppercase tracking-widest text-white/60 font-bold mt-1">
              Limited Offer
            </div>
          </div>
          <a
            href="#contact"
            className="bg-white px-6 md:px-8 py-3 rounded-xl font-bold hover:bg-white/90 transition-all shadow-lg text-sm md:text-base whitespace-nowrap"
            style={{ color: config.theme.primary }}
          >
            Claim Discount
          </a>
        </div>
      </div>
    </section>
  );
}
