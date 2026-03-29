"use client";

import { NicheConfig } from "@/lib/niche-config";

interface Props {
  businessName: string;
  phone: string;
  city: string;
  config: NicheConfig;
}

export default function ElectricianContactPage({
  businessName,
  phone,
  city,
  config,
}: Props) {
  const phoneDigits = phone.replace(/[^\d+]/g, "");
  const waDigits = phoneDigits.replace(/^\+/, "");
  const waLink = `https://wa.me/${waDigits}?text=${encodeURIComponent(
    `Hi, I found ${businessName} online and I'd like to get an electrical quote.`
  )}`;

  return (
    <div>
      {/* Hero */}
      <header
        className="relative pt-32 pb-16 px-6 overflow-hidden circuit-bg"
        style={{ backgroundColor: config.theme.darkBg }}
      >
        <div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-[120px] pointer-events-none"
          style={{ backgroundColor: `${config.theme.primary}1a` }}
        />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8"
            style={{
              backgroundColor: config.theme.darkSurface,
              border: `1px solid ${config.theme.primary}33`,
            }}
          >
            <span style={{ color: config.theme.primary }} className="text-sm font-bold tracking-widest">
              {"★".repeat(5)}
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
              250+ Verified Reviews
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6">
            Get Your{" "}
            <span style={{ color: config.theme.primary }}>Electrical Quote</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Master licensed. Code-compliant guaranteed. Available 24/7 for all your
            residential and commercial power needs.
          </p>
        </div>
      </header>

      {/* Main Content: Two-Column Layout */}
      <main
        className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-16"
        style={{ backgroundColor: config.theme.darkBg }}
      >
        {/* LEFT: Request Quote Form */}
        <section className="lg:col-span-7">
          <div
            className="glass-card rounded-2xl p-8 md:p-12 shadow-2xl relative"
          >
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-3xl font-black" style={{ color: config.theme.primary }}>
                Request Free Quote
              </h2>
              <span className="flex items-center gap-1.5 text-slate-400 text-sm font-medium">
                <span className="material-symbols-outlined text-sm">lock</span> Secure
              </span>
            </div>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full border-none rounded-xl px-4 py-4 text-white focus:ring-2 outline-none"
                    style={{
                      backgroundColor: config.theme.darkBg,
                      ["--tw-ring-color" as string]: `${config.theme.primary}80`,
                    }}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="(555) 000-0000"
                    className="w-full border-none rounded-xl px-4 py-4 text-white focus:ring-2 outline-none"
                    style={{ backgroundColor: config.theme.darkBg }}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full border-none rounded-xl px-4 py-4 text-white focus:ring-2 outline-none"
                  style={{ backgroundColor: config.theme.darkBg }}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400">
                    Service Type
                  </label>
                  <select
                    className="w-full border-none rounded-xl px-4 py-4 text-white focus:ring-2 appearance-none outline-none"
                    style={{ backgroundColor: config.theme.darkBg }}
                  >
                    {config.services.map((s) => (
                      <option key={s.title}>{s.title}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400">
                    Urgency
                  </label>
                  <select
                    className="w-full border-none rounded-xl px-4 py-4 text-white focus:ring-2 appearance-none outline-none"
                    style={{ backgroundColor: config.theme.darkBg }}
                  >
                    <option>Non-Emergency</option>
                    <option>Same Day Service</option>
                    <option>Immediate Emergency</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  Message / Project Details
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe your electrical needs..."
                  className="w-full border-none rounded-xl px-4 py-4 text-white focus:ring-2 outline-none resize-none"
                  style={{ backgroundColor: config.theme.darkBg }}
                />
              </div>

              <button
                type="submit"
                className="w-full py-5 rounded-2xl text-black font-bold text-lg hover:scale-[1.02] active:scale-95 transition-all neon-glow"
                style={{
                  backgroundColor: config.theme.primary,
                  boxShadow: `0 10px 30px -10px ${config.theme.glow}`,
                }}
              >
                Get My Free Quote
              </button>
            </form>
          </div>
        </section>

        {/* RIGHT: Trust Indicators */}
        <aside className="lg:col-span-5 space-y-8">
          {/* Direct Contact Card */}
          <div
            className="rounded-2xl p-8"
            style={{
              backgroundColor: config.theme.darkSurface,
              borderLeft: `4px solid ${config.theme.primary}`,
            }}
          >
            <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2">
              Speak to a Master Electrician
            </p>
            <a
              href={`tel:${phoneDigits}`}
              className="text-4xl font-black text-white hover:transition-colors block mb-6"
            >
              {phone}
            </a>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 rounded-xl font-bold transition-all border"
              style={{
                backgroundColor: config.theme.darkSurfaceHigh,
                borderColor: `${config.theme.darkBorder}`,
                color: "white",
              }}
            >
              <span className="material-symbols-outlined">chat</span> WhatsApp Us
            </a>
          </div>

          {/* Business Details */}
          <div className="grid grid-cols-2 gap-4">
            <div
              className="p-6 rounded-2xl"
              style={{
                backgroundColor: config.theme.darkSurface,
                border: `1px solid ${config.theme.darkBorder}`,
              }}
            >
              <span
                className="material-symbols-outlined mb-3"
                style={{ color: config.theme.primary }}
              >
                verified
              </span>
              <h4 className="text-sm font-bold text-white mb-1">Master License</h4>
              <p className="text-xs text-slate-400">#ELC-99283</p>
            </div>
            <div
              className="p-6 rounded-2xl"
              style={{
                backgroundColor: config.theme.darkSurface,
                border: `1px solid ${config.theme.darkBorder}`,
              }}
            >
              <span
                className="material-symbols-outlined mb-3"
                style={{ color: config.theme.primary }}
              >
                shield
              </span>
              <h4 className="text-sm font-bold text-white mb-1">Fully Insured</h4>
              <p className="text-xs text-slate-400">$2M Liability Cover</p>
            </div>
          </div>

          {/* Credentials & Safety */}
          <div
            className="p-8 rounded-2xl"
            style={{
              backgroundColor: config.theme.darkSurface,
              border: `1px solid ${config.theme.darkBorder}`,
            }}
          >
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-white">
              <span
                className="material-symbols-outlined"
                style={{ color: config.theme.primary }}
              >
                health_and_safety
              </span>{" "}
              Safety First Policy
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              All our work strictly adheres to the National Electrical Code (NEC).
              We conduct 12-point safety inspections with every service call.
            </p>
            <div className="space-y-3">
              {[
                "Open 24/7 for Emergencies",
                "Licensed & Bonded Technicians",
                "Upfront Honest Pricing",
              ].map((point) => (
                <div key={point} className="flex items-center gap-3 text-sm text-white">
                  <span
                    className="material-symbols-outlined text-base"
                    style={{
                      color: config.theme.primary,
                      fontVariationSettings: "'FILL' 1",
                    }}
                  >
                    check_circle
                  </span>
                  {point}
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <div
            className="rounded-2xl p-8 italic relative"
            style={{
              backgroundColor: `${config.theme.primary}0d`,
              border: `1px solid ${config.theme.primary}1a`,
            }}
          >
            <span
              className="absolute top-4 right-6 text-6xl font-serif"
              style={{ color: `${config.theme.primary}33` }}
            >
              &ldquo;
            </span>
            <p className="text-white leading-relaxed relative z-10 mb-4">
              &ldquo;Called for a main panel upgrade. They were professional, clean, and
              finished ahead of schedule. Best electrical experience I&apos;ve had in 20
              years.&rdquo;
            </p>
            <div className="flex items-center gap-3 not-italic">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm"
                style={{
                  backgroundColor: config.theme.darkSurfaceHigh,
                  color: config.theme.primary,
                }}
              >
                RS
              </div>
              <div>
                <p className="text-sm font-bold text-white">Robert Sterling</p>
                <p className="text-xs text-slate-400">Property Manager</p>
              </div>
            </div>
          </div>
        </aside>
      </main>

      {/* Emergency Banner */}
      <section
        className="border-y py-8"
        style={{
          backgroundColor: config.theme.darkBg,
          borderColor: "rgba(255,255,255,0.05)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center animate-pulse">
              <span className="material-symbols-outlined text-red-500">bolt</span>
            </div>
            <div>
              <h3 className="text-xl font-black text-white">Electrical Emergency?</h3>
              <p className="text-slate-400 text-sm">
                Don&apos;t touch it — Call us immediately for safe resolution.
              </p>
            </div>
          </div>
          <a
            href={`tel:${phoneDigits}`}
            className="text-2xl font-black flex items-center gap-2 hover:scale-105 transition-transform"
            style={{ color: config.theme.primary }}
          >
            {phone}
          </a>
        </div>
      </section>

      {/* Why Us Section */}
      <section
        className="py-24 px-6"
        style={{ backgroundColor: config.theme.darkBg }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {config.trustBadges.map((badge, i) => (
            <div key={i} className="space-y-4">
              <div
                className="w-14 h-14 flex items-center justify-center rounded-2xl"
                style={{ backgroundColor: config.theme.darkSurface }}
              >
                <span
                  className="material-symbols-outlined text-3xl"
                  style={{ color: config.theme.primary }}
                >
                  {badge.icon}
                </span>
              </div>
              <h4 className="text-xl font-bold text-white">{badge.label}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                {config.trustPoints?.find((tp) => tp.title === badge.label)?.description || "Professional service you can count on."}
              </p>
            </div>
          ))}
          {/* Extra trust point if only 3 badges */}
          {config.trustBadges.length < 4 && (
            <div className="space-y-4">
              <div
                className="w-14 h-14 flex items-center justify-center rounded-2xl"
                style={{ backgroundColor: config.theme.darkSurface }}
              >
                <span
                  className="material-symbols-outlined text-3xl"
                  style={{ color: config.theme.primary }}
                >
                  electric_bolt
                </span>
              </div>
              <h4 className="text-xl font-bold text-white">Code Compliant</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Strict adherence to national and local electrical codes.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Service Areas Map Placeholder */}
      <section
        className="relative h-[400px] w-full overflow-hidden"
        style={{ backgroundColor: config.theme.darkSurface }}
      >
        <div className="absolute inset-0 circuit-bg opacity-20 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t pointer-events-none" style={{
          backgroundImage: `linear-gradient(to top, ${config.theme.darkBg}, transparent, ${config.theme.darkBg}80)`,
        }} />
        <div className="absolute bottom-12 left-8 md:left-24 max-w-sm glass-card p-8 rounded-2xl shadow-2xl" style={{
          border: `1px solid ${config.theme.primary}33`,
        }}>
          <h4 className="text-2xl font-bold mb-4 text-white">Service Areas</h4>
          <div className="flex flex-wrap gap-2">
            {[city, "Surrounding Areas"].map((area) => (
              <span
                key={area}
                className="px-3 py-1 rounded-full text-xs font-medium border"
                style={{
                  backgroundColor: config.theme.darkSurfaceHigh,
                  borderColor: config.theme.darkBorder,
                  color: "white",
                }}
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="max-w-5xl mx-auto px-6 py-24 text-center"
        style={{ backgroundColor: config.theme.darkBg }}
      >
        <div
          className="p-12 md:p-20 rounded-[2.5rem] relative overflow-hidden neon-glow"
          style={{
            backgroundColor: config.theme.darkSurface,
            border: `2px solid ${config.theme.primary}4d`,
          }}
        >
          <div
            className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[100px] pointer-events-none"
            style={{ backgroundColor: `${config.theme.primary}1a` }}
          />
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 relative z-10">
            Impressed? This Is Just a Demo.
          </h2>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto relative z-10 leading-relaxed">
            We can build your real agency-quality business website in just 3 days.
            Let&apos;s modernize your online presence.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
            <button
              className="px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-all shadow-xl text-black"
              style={{ backgroundColor: config.theme.primary }}
            >
              Schedule Free Call
            </button>
            <div
              className="flex items-center gap-2 font-bold"
              style={{ color: config.theme.primary }}
            >
              <span className="material-symbols-outlined">bolt</span> 3 spots left
              this week
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
