"use client";

import { NicheConfig } from "@/lib/niche-config";

interface Props {
  businessName: string;
  phone: string;
  city: string;
  config: NicheConfig;
}

/**
 * Premium contact/booking page component.
 * Two-column layout: booking form (left) + trust sidebar (right).
 * Adapts to niche via NicheConfig theme tokens.
 */
export default function BookingPage({ businessName, phone, city, config }: Props) {
  const phoneDigits = phone.replace(/[^\d+]/g, "");
  const waDigits = phoneDigits.replace(/^\+/, "");
  const waLink = `https://wa.me/${waDigits}?text=${encodeURIComponent(
    `Hi, I found ${businessName} online and I'd like to schedule a service.`
  )}`;

  return (
    <section id="contact" className="py-24 md:py-32 bg-white dark:bg-[--niche-dark-bg]">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-8">
        {/* Hero mini */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-6">
            <span
              className="material-symbols-outlined text-sm"
              style={{ color: config.theme.primary, fontVariationSettings: "'FILL' 1" }}
            >
              star
            </span>
            <span className="text-xs font-bold tracking-widest uppercase text-stone-500 dark:text-stone-400">
              Trusted by homeowners in {city}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-stone-900 dark:text-stone-100 mb-4">
            Schedule Your{" "}
            <span style={{ color: config.theme.primary }}>{config.label}</span>{" "}
            Service
          </h2>
          <p className="text-lg text-stone-500 dark:text-stone-400 max-w-2xl mx-auto">
            Same-day appointments. Free estimates. Professional technicians ensuring your comfort 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* LEFT: Booking Form */}
          <div className="lg:col-span-7">
            <div
              className="glass-card p-8 md:p-10 rounded-xl"
              style={{ boxShadow: `0 0 40px -10px ${config.theme.glow}` }}
            >
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-stone-900 dark:text-stone-100 mb-2">
                  Book Your Service
                </h3>
                <p className="text-stone-500 dark:text-stone-400">
                  Fill out the form and a specialist will contact you immediately.
                </p>
              </div>

              <form className="space-y-5 md:space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wide text-stone-500 dark:text-stone-400 block">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full bg-stone-100 dark:bg-stone-900 border-0 border-b-2 border-stone-300 dark:border-stone-700 focus:border-[--niche-primary] focus:ring-0 text-stone-900 dark:text-stone-100 transition-all px-4 py-3 rounded-t-lg"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wide text-stone-500 dark:text-stone-400 block">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="(555) 000-0000"
                      className="w-full bg-stone-100 dark:bg-stone-900 border-0 border-b-2 border-stone-300 dark:border-stone-700 focus:border-[--niche-primary] focus:ring-0 text-stone-900 dark:text-stone-100 transition-all px-4 py-3 rounded-t-lg"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wide text-stone-500 dark:text-stone-400 block">
                      Service Type
                    </label>
                    <select className="w-full bg-stone-100 dark:bg-stone-900 border-0 border-b-2 border-stone-300 dark:border-stone-700 focus:border-[--niche-primary] focus:ring-0 text-stone-900 dark:text-stone-100 transition-all px-4 py-3 rounded-t-lg">
                      {config.services.map((s) => (
                        <option key={s.title}>{s.title}</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wide text-stone-500 dark:text-stone-400 block">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      className="w-full bg-stone-100 dark:bg-stone-900 border-0 border-b-2 border-stone-300 dark:border-stone-700 focus:border-[--niche-primary] focus:ring-0 text-stone-900 dark:text-stone-100 transition-all px-4 py-3 rounded-t-lg"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wide text-stone-500 dark:text-stone-400 block">
                    Message (Optional)
                  </label>
                  <textarea
                    placeholder="Describe your issue..."
                    rows={3}
                    className="w-full bg-stone-100 dark:bg-stone-900 border-0 border-b-2 border-stone-300 dark:border-stone-700 focus:border-[--niche-primary] focus:ring-0 text-stone-900 dark:text-stone-100 transition-all px-4 py-3 rounded-t-lg resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 md:py-5 rounded-xl font-bold text-white text-lg md:text-xl transition-all hover:scale-[1.02] active:scale-95 mt-2"
                  style={{
                    background: `linear-gradient(135deg, ${config.theme.primary}, ${config.theme.secondary})`,
                    boxShadow: `0 0 20px ${config.theme.glow}`,
                  }}
                >
                  Book My Service
                </button>

                <div className="flex items-center justify-center gap-4 text-sm text-stone-500 dark:text-stone-400">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">lock</span>
                    Private &amp; secure
                  </span>
                  <span className="opacity-20">|</span>
                  <span>
                    Or call{" "}
                    <a
                      href={`tel:${phoneDigits}`}
                      className="font-bold"
                      style={{ color: config.theme.primary }}
                    >
                      {phone}
                    </a>
                  </span>
                </div>
              </form>
            </div>
          </div>

          {/* RIGHT: Trust sidebar */}
          <div className="lg:col-span-5 space-y-6 md:space-y-8">
            {/* Emergency call box */}
            <div
              className="p-6 md:p-8 rounded-xl text-white relative overflow-hidden group"
              style={{
                backgroundColor: config.theme.primary,
                boxShadow: `0 0 40px -10px ${config.theme.glow}`,
              }}
            >
              <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined" style={{ fontSize: "120px" }}>
                  support_agent
                </span>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3 flex items-center gap-2">
                <span className="material-symbols-outlined">support_agent</span>
                Priority Line
              </h3>
              <p className="text-3xl md:text-4xl font-extrabold tracking-tight mb-5">
                {phone}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${phoneDigits}`}
                  className="flex-1 bg-white/20 backdrop-blur-sm py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-white/30 transition-colors"
                >
                  <span className="material-symbols-outlined text-sm">phone_in_talk</span>
                  Call Now
                </a>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-green-600 py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-green-700 transition-colors"
                >
                  <span className="material-symbols-outlined text-sm">chat</span>
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Business hours */}
            <div className="glass-card p-6 md:p-8 rounded-xl space-y-5">
              <div>
                <h4
                  className="text-xs font-bold uppercase tracking-[0.2em] mb-4"
                  style={{ color: config.theme.primary }}
                >
                  Business Hours
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between text-stone-600 dark:text-stone-400">
                    <span>Mon - Fri</span>
                    <span className="font-bold text-stone-800 dark:text-stone-200">7:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between text-stone-600 dark:text-stone-400">
                    <span>Saturday</span>
                    <span className="font-bold text-stone-800 dark:text-stone-200">8:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between" style={{ color: config.theme.primary }}>
                    <span>Emergency</span>
                    <span className="font-bold">24/7 Response</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Trust badges grid */}
            <div className="grid grid-cols-3 gap-3 md:gap-4">
              {config.trustBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="glass-card aspect-square rounded-xl flex flex-col items-center justify-center text-center p-3"
                >
                  <span
                    className="material-symbols-outlined text-2xl md:text-3xl mb-2"
                    style={{ color: config.theme.primary }}
                  >
                    {badge.icon}
                  </span>
                  <span className="text-[9px] md:text-[10px] uppercase font-bold tracking-tighter text-stone-700 dark:text-stone-300">
                    {badge.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Mini testimonial */}
            {config.testimonials[0] && (
              <div className="glass-card p-5 md:p-6 rounded-xl italic text-stone-500 dark:text-stone-400 relative">
                <span
                  className="material-symbols-outlined absolute -top-3 -left-2 text-4xl md:text-5xl opacity-20"
                  style={{ color: config.theme.primary }}
                >
                  format_quote
                </span>
                <p className="relative z-10 mb-3 text-sm leading-relaxed">
                  &ldquo;{config.testimonials[0].text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold text-white"
                    style={{ backgroundColor: config.theme.primary }}
                  >
                    {config.testimonials[0].initials}
                  </div>
                  <span className="text-xs font-bold not-italic text-stone-700 dark:text-stone-300">
                    — {config.testimonials[0].name}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
