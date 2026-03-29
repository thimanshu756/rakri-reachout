import { NicheConfig } from "@/lib/niche-config";

interface Props {
  businessName: string;
  city: string;
  phone: string;
  rating: number;
  reviewCount: number;
  config: NicheConfig;
}

export default function HeroSection({
  businessName,
  city,
  phone,
  rating,
  reviewCount,
  config,
}: Props) {
  const phoneDigits = phone.replace(/[^\d+]/g, "");

  return (
    <section
      className={`relative bg-gradient-to-br ${config.gradient} text-white`}
    >
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:py-36">
        {/* Rating badge */}
        {rating > 0 && (
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur-sm">
            <span className="text-yellow-300">★</span>
            <span>
              {rating} Google Rating
              {reviewCount > 0 && ` — ${reviewCount}+ Reviews`}
            </span>
          </div>
        )}

        <h1 className="max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
          {businessName}
        </h1>
        <p className="mt-2 text-lg font-medium text-white/80 sm:text-xl">
          {city}&apos;s Trusted {config.label} Professionals
        </p>
        <p className="mt-4 max-w-2xl text-lg text-white/90 sm:text-xl">
          {config.heroSubtext}
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href={`tel:${phoneDigits}`}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 text-lg font-bold shadow-lg transition hover:bg-gray-100"
            style={{ color: config.primaryHex }}
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            Call Now: {phone}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-4 text-lg font-bold transition hover:bg-white/10"
          >
            Get Free Quote
          </a>
        </div>
      </div>
    </section>
  );
}
