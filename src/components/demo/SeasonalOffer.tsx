import { NicheConfig } from "@/lib/niche-config";

interface Props {
  config: NicheConfig;
}

/**
 * HVAC-specific seasonal promotion banner.
 * Shows a time-limited offer with gradient background and urgency messaging.
 * Only rendered for HVAC niche leads.
 */
export default function SeasonalOffer({ config }: Props) {
  return (
    <section className="relative py-14 md:py-16 overflow-hidden">
      {/* Full-width gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, ${config.theme.primary}cc 0%, ${config.theme.secondary}cc 100%)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-white">
        <div>
          <span className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-3">
            Seasonal Promotion
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter uppercase mb-2">
            AC Tune-Up Special — $89{" "}
            <span className="line-through opacity-50 text-xl md:text-2xl font-normal">$149</span>
          </h2>
          <p className="text-white/80 text-base md:text-lg">
            Ensure your system runs at peak efficiency before the summer heat. Save $60 today.
          </p>
        </div>

        <div className="flex items-center gap-6 flex-shrink-0">
          {/* Countdown-style urgency */}
          <div className="text-center hidden sm:block">
            <p className="text-2xl font-extrabold">14</p>
            <p className="text-[8px] font-extrabold uppercase tracking-widest">Days Left</p>
          </div>
          <div className="hidden sm:block w-px h-10 bg-white/20" />
          <a
            href="#contact"
            className="bg-white px-8 py-4 rounded-xl font-extrabold uppercase tracking-widest text-xs shadow-xl hover:scale-105 transition-transform"
            style={{ color: config.theme.primary }}
          >
            Claim My Discount
          </a>
        </div>
      </div>
    </section>
  );
}
