"use client";

import { NicheConfig } from "@/lib/niche-config";

interface Props {
  businessName: string;
  phone: string;
  city: string;
  config: NicheConfig;
}

const BADGES = [
  { icon: "verified", label: "Fully Licensed" },
  { icon: "eco", label: "Eco-Friendly" },
  { icon: "pets", label: "Pet-Safe" },
  { icon: "workspace_premium", label: "Guaranteed" },
];

const SERVICE_AREAS = ["Downtown", "Highland Park", "North Hills", "West End", "Riverdale"];

export default function PestBookingPage({
  businessName,
  phone,
  city,
  config,
}: Props) {
  const phoneDigits = phone.replace(/[^\d+]/g, "");
  const waDigits = phoneDigits.replace(/^\+/, "");
  const waLink = `https://wa.me/${waDigits}?text=${encodeURIComponent(
    `Hi, I found ${businessName} online and I'd like to schedule a pest inspection.`
  )}`;

  return (
    <div>
      {/* Hero */}
      <header className="relative pt-32 pb-24 overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background: `linear-gradient(135deg, ${config.theme.darkBg} 0%, ${config.theme.darkSurface} 100%)`,
          }}
        />
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 backdrop-blur-sm border"
            style={{
              backgroundColor: `${config.theme.secondary}20`,
              borderColor: `${config.theme.secondary}30`,
              color: config.theme.secondary,
            }}
          >
            <span
              className="material-symbols-outlined text-sm"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              star
            </span>
            <span className="font-bold text-sm tracking-wide">
              300+ HAPPY HOMES PROTECTED
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Get Your Free{" "}
            <span style={{ color: config.theme.secondary }}>Pest Inspection</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium" style={{ color: `${config.theme.primary}90` }}>
            Same-day service. Family &amp; pet safe. 100% satisfaction guaranteed.
            We don&apos;t just treat pests; we protect your sanctuary.
          </p>
        </div>
      </header>

      {/* Two-Column Booking Area */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 -mt-16 mb-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Booking Form */}
          <div className="lg:col-span-7 glass-card p-8 md:p-12 rounded-2xl shadow-2xl bg-white dark:bg-transparent border border-stone-200 dark:border-stone-800">
            <div className="mb-8">
              <h2
                className="text-3xl font-bold mb-2"
                style={{ color: config.theme.primary }}
              >
                Schedule Free Inspection
              </h2>
              <p className="text-stone-500 font-medium">
                Quick 2-minute booking to secure your spot.
              </p>
            </div>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="text-sm font-semibold" style={{ color: `${config.theme.primary}cc` }}>
                    Full Name
                  </label>
                  <input
                    className="w-full bg-stone-100 dark:bg-stone-900 border-none focus:ring-2 rounded-xl px-4 py-4 placeholder:text-stone-400 transition-all"
                    style={{ "--tw-ring-color": config.theme.secondary } as React.CSSProperties}
                    placeholder="John Doe"
                    type="text"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-semibold" style={{ color: `${config.theme.primary}cc` }}>
                    Phone Number
                  </label>
                  <input
                    className="w-full bg-stone-100 dark:bg-stone-900 border-none focus:ring-2 rounded-xl px-4 py-4 placeholder:text-stone-400 transition-all"
                    style={{ "--tw-ring-color": config.theme.secondary } as React.CSSProperties}
                    placeholder="(555) 000-0000"
                    type="tel"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-sm font-semibold" style={{ color: `${config.theme.primary}cc` }}>
                  Email Address
                </label>
                <input
                  className="w-full bg-stone-100 dark:bg-stone-900 border-none focus:ring-2 rounded-xl px-4 py-4 placeholder:text-stone-400 transition-all"
                  style={{ "--tw-ring-color": config.theme.secondary } as React.CSSProperties}
                  placeholder="john@example.com"
                  type="email"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-1">
                  <label className="text-sm font-semibold" style={{ color: `${config.theme.primary}cc` }}>
                    Pest Type
                  </label>
                  <select className="w-full bg-stone-100 dark:bg-stone-900 border-none focus:ring-2 rounded-xl px-4 py-4 transition-all">
                    <option>Termites</option>
                    <option>Ants</option>
                    <option>Roaches</option>
                    <option>Rodents</option>
                    <option>Mosquitoes</option>
                    <option>Bed Bugs</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-semibold" style={{ color: `${config.theme.primary}cc` }}>
                    Property
                  </label>
                  <select className="w-full bg-stone-100 dark:bg-stone-900 border-none focus:ring-2 rounded-xl px-4 py-4 transition-all">
                    <option>House</option>
                    <option>Apartment</option>
                    <option>Commercial</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-semibold" style={{ color: `${config.theme.primary}cc` }}>
                    Severity
                  </label>
                  <select className="w-full bg-stone-100 dark:bg-stone-900 border-none focus:ring-2 rounded-xl px-4 py-4 transition-all">
                    <option>Just Noticed</option>
                    <option>Moderate</option>
                    <option>Severe</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-sm font-semibold" style={{ color: `${config.theme.primary}cc` }}>
                  Preferred Inspection Date
                </label>
                <input
                  className="w-full bg-stone-100 dark:bg-stone-900 border-none focus:ring-2 rounded-xl px-4 py-4 transition-all"
                  style={{ "--tw-ring-color": config.theme.secondary } as React.CSSProperties}
                  type="date"
                />
              </div>

              <div className="space-y-1">
                <label className="text-sm font-semibold" style={{ color: `${config.theme.primary}cc` }}>
                  Additional Message
                </label>
                <textarea
                  className="w-full bg-stone-100 dark:bg-stone-900 border-none focus:ring-2 rounded-xl px-4 py-4 placeholder:text-stone-400 transition-all"
                  style={{ "--tw-ring-color": config.theme.secondary } as React.CSSProperties}
                  placeholder="Tell us about your concern..."
                  rows={3}
                />
              </div>

              <button
                className="w-full text-white font-bold py-5 rounded-xl shadow-lg hover:shadow-xl hover:scale-[0.98] transition-all flex justify-center items-center gap-3 text-lg"
                style={{
                  background: `linear-gradient(135deg, ${config.theme.primary}, ${config.theme.secondary})`,
                  boxShadow: `0 10px 30px ${config.theme.glow}`,
                }}
              >
                Book My Inspection
                <span className="material-symbols-outlined">chevron_right</span>
              </button>

              <div className="flex items-center justify-center gap-4 text-sm font-medium text-stone-400">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">lock</span> Private
                </span>
                <span className="text-stone-300">|</span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">call</span> {phone}
                </span>
              </div>
            </form>
          </div>

          {/* Right: Trust Panel */}
          <div className="lg:col-span-5 space-y-6">
            {/* Urgent Contact */}
            <div
              className="p-8 rounded-2xl text-white"
              style={{
                background: `linear-gradient(135deg, ${config.theme.darkBg}, ${config.theme.darkSurface})`,
              }}
            >
              <h3 className="text-xl font-bold mb-4">Immediate Assistance</h3>
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="p-3 rounded-xl"
                  style={{ backgroundColor: `${config.theme.secondary}20` }}
                >
                  <span
                    className="material-symbols-outlined text-3xl"
                    style={{ color: config.theme.secondary }}
                  >
                    phone_iphone
                  </span>
                </div>
                <div>
                  <p
                    className="text-sm font-bold uppercase tracking-widest"
                    style={{ color: config.theme.secondary }}
                  >
                    Call or Text 24/7
                  </p>
                  <a href={`tel:${phoneDigits}`} className="text-2xl font-bold tracking-tight">
                    {phone}
                  </a>
                </div>
              </div>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-4 bg-white/10 hover:bg-white/20 transition-colors rounded-xl font-bold border border-white/10"
              >
                <span className="material-symbols-outlined text-green-400">chat</span>
                Message on WhatsApp
              </a>
            </div>

            {/* Hours & Badges */}
            <div className="bg-stone-100 dark:bg-stone-900 p-8 rounded-2xl space-y-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-bold uppercase tracking-tighter" style={{ color: `${config.theme.primary}80` }}>
                    Mon - Fri
                  </span>
                  <span className="font-bold text-stone-900 dark:text-white">7AM - 6PM</span>
                </div>
                <div className="flex flex-col gap-1 text-right">
                  <span className="text-xs font-bold uppercase tracking-tighter" style={{ color: `${config.theme.primary}80` }}>
                    Sat
                  </span>
                  <span className="font-bold text-stone-900 dark:text-white">8AM - 4PM</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-y-6">
                {BADGES.map((badge) => (
                  <div key={badge.label} className="flex items-center gap-3">
                    <span
                      className="material-symbols-outlined"
                      style={{
                        color: config.theme.primary,
                        fontVariationSettings: "'FILL' 1",
                      }}
                    >
                      {badge.icon}
                    </span>
                    <span className="text-sm font-bold text-stone-900 dark:text-white">
                      {badge.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Mini testimonial */}
              <div className="bg-white dark:bg-stone-800 p-6 rounded-xl border border-stone-200 dark:border-stone-700 shadow-sm relative italic text-stone-500 dark:text-stone-400 font-medium">
                <span
                  className="material-symbols-outlined absolute -top-3 -left-3 p-2 rounded-full text-sm text-white"
                  style={{ backgroundColor: config.theme.primary }}
                >
                  format_quote
                </span>
                &ldquo;Best service in the city! They were at my house within 3 hours
                and resolved the issue completely.&rdquo;
                <span className="block mt-2 not-italic font-bold text-stone-700 dark:text-stone-300 text-xs">
                  — Sarah J., {city}
                </span>
              </div>
            </div>

            {/* Service Areas */}
            <div className="p-6 bg-stone-100 dark:bg-stone-900 rounded-2xl">
              <h4
                className="text-sm font-bold mb-4 flex items-center gap-2 uppercase tracking-wide"
                style={{ color: config.theme.primary }}
              >
                <span className="material-symbols-outlined text-sm">location_on</span>
                Serving Your Neighborhood
              </h4>
              <div className="flex flex-wrap gap-2">
                {SERVICE_AREAS.map((area) => (
                  <span
                    key={area}
                    className="px-3 py-1 bg-white dark:bg-stone-800 text-xs font-bold rounded-full shadow-sm text-stone-700 dark:text-stone-300"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eco Strip */}
      <div
        className="text-white py-6 overflow-hidden"
        style={{ backgroundColor: config.theme.primary }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex justify-center items-center gap-4">
          <span className="material-symbols-outlined" style={{ color: config.theme.secondary }}>
            eco
          </span>
          <span className="font-bold text-lg md:text-xl text-center tracking-tight">
            100% Family &amp; Pet Safe Products — EPA Approved Solutions Only
          </span>
          <span className="material-symbols-outlined hidden md:block" style={{ color: config.theme.secondary }}>
            pets
          </span>
        </div>
      </div>

      {/* Protection Plans Mini */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight mb-4 text-stone-900 dark:text-white">
            Choose Your Shield
          </h2>
          <p className="text-stone-500 font-medium">
            Ongoing protection tailored to your home&apos;s needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {config.pricing.map((plan, i) => (
            <div
              key={i}
              className={`p-8 rounded-2xl transition-all ${
                plan.popular
                  ? "text-white scale-105 shadow-2xl relative"
                  : "bg-white dark:bg-stone-900 shadow-sm hover:shadow-md border border-transparent hover:border-stone-300 dark:hover:border-stone-700"
              }`}
              style={
                plan.popular
                  ? {
                      background: `linear-gradient(135deg, ${config.theme.darkBg}, ${config.theme.darkSurface})`,
                      boxShadow: `0 20px 60px ${config.theme.glow}`,
                    }
                  : undefined
              }
            >
              {plan.popular && (
                <span
                  className="absolute -top-4 left-1/2 -translate-x-1/2 text-white text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest"
                  style={{ backgroundColor: config.theme.primary }}
                >
                  Most Popular
                </span>
              )}
              <h3 className={`text-xl font-bold mb-2 ${plan.popular ? "text-white" : "text-stone-900 dark:text-white"}`}>
                {plan.name}
              </h3>
              <div className={`text-3xl font-extrabold mb-6 ${plan.popular ? "text-white" : ""}`} style={!plan.popular ? { color: config.theme.primary } : undefined}>
                {plan.price}
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, j) => (
                  <li
                    key={j}
                    className={`flex items-center gap-2 text-sm ${
                      plan.popular ? "text-white/80" : "text-stone-500"
                    }`}
                  >
                    <span
                      className="material-symbols-outlined text-sm"
                      style={{ color: plan.popular ? config.theme.secondary : config.theme.primary }}
                    >
                      check_circle
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={`block text-center font-bold underline decoration-4 underline-offset-4 ${
                  plan.popular ? "text-white/90 decoration-white/20" : ""
                }`}
                style={!plan.popular ? { color: config.theme.primary, textDecorationColor: `${config.theme.secondary}40` } : undefined}
              >
                View Plans
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Why Us */}
      <section className="bg-stone-100 dark:bg-stone-900 py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-2 lg:grid-cols-4 gap-12">
          {config.trustBadges.map((badge) => (
            <div key={badge.label} className="text-center group">
              <div
                className="w-16 h-16 bg-white dark:bg-stone-800 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm transition-all duration-300"
                style={{ "--hover-bg": config.theme.primary } as React.CSSProperties}
              >
                <span
                  className="material-symbols-outlined transition-colors"
                  style={{ color: config.theme.primary, fontSize: "32px" }}
                >
                  {badge.icon}
                </span>
              </div>
              <h4 className="font-bold text-stone-900 dark:text-white mb-2">{badge.label}</h4>
            </div>
          ))}
          {/* Extra badge for Same-Day */}
          <div className="text-center group">
            <div className="w-16 h-16 bg-white dark:bg-stone-800 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
              <span
                className="material-symbols-outlined"
                style={{ color: config.theme.primary, fontSize: "32px" }}
              >
                schedule
              </span>
            </div>
            <h4 className="font-bold text-stone-900 dark:text-white mb-2">Same-Day</h4>
            <p className="text-xs text-stone-500 font-medium">Urgent response within hours.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 my-24">
        <div
          className="p-12 md:p-20 rounded-[2.5rem] relative overflow-hidden text-center"
          style={{
            background: `linear-gradient(135deg, ${config.theme.darkBg}, ${config.theme.darkSurface})`,
          }}
        >
          <div
            className="absolute top-0 right-0 w-64 h-64 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"
            style={{ backgroundColor: `${config.theme.secondary}15` }}
          />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              This Website Was Built
              <br />
              Just For You.
            </h2>
            <p className="text-lg max-w-2xl mx-auto mb-12 font-medium opacity-90" style={{ color: `${config.theme.primary}90` }}>
              Imagine having a high-converting platform like this for real —
              bringing motivated customers to your door every single day.
            </p>
            <div className="flex flex-col items-center gap-6">
              <a
                href="#contact"
                className="text-white font-bold px-12 py-5 rounded-2xl text-xl hover:scale-105 transition-all shadow-xl"
                style={{
                  backgroundColor: config.theme.primary,
                  boxShadow: `0 10px 30px ${config.theme.glow}`,
                }}
              >
                Let&apos;s Talk — Schedule Free Call
              </a>
              <p
                className="font-bold tracking-widest uppercase text-xs flex items-center gap-2"
                style={{ color: config.theme.secondary }}
              >
                <span className="material-symbols-outlined text-sm">verified_user</span>
                Only 4 spots left this week
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
