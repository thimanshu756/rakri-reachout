"use client";

import { useState } from "react";
import { NicheConfig } from "@/lib/niche-config";

interface Props {
  businessName: string;
  phone: string;
  city: string;
  config: NicheConfig;
}

export default function RooferContactPage({
  businessName,
  phone,
  city,
  config,
}: Props) {
  const [isInsurance, setIsInsurance] = useState(true);
  const phoneDigits = phone.replace(/[^\d+]/g, "");
  const waDigits = phoneDigits.replace(/^\+/, "");
  const waLink = `https://wa.me/${waDigits}?text=${encodeURIComponent(
    `Hi, I found ${businessName} online and I'd like to schedule a roof inspection.`
  )}`;

  return (
    <div>
      {/* Hero */}
      <header
        className="relative pt-32 pb-20 px-6 overflow-hidden"
        style={{ backgroundColor: config.theme?.darkBg }}
      >
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-card mb-6">
            <span className="text-yellow-500 mr-2">{"★".repeat(5)}</span>
            <span className="text-sm font-bold tracking-wide uppercase text-white">
              180+ Google Reviews
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-tight">
            Request Your Free{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: `linear-gradient(to right, ${config.secondaryHex}, ${config.primaryHex})`,
              }}
            >
              Roof Inspection
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            We work with ALL insurance companies to ensure your home is protected.
            <span className="block mt-2 font-semibold text-white">
              Licensed, Bonded, and Fully Insured for your peace of mind.
            </span>
          </p>
        </div>
      </header>

      {/* Feature bar */}
      <section className="max-w-7xl mx-auto px-6 -mt-8 relative z-20">
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-8 rounded-xl border shadow-2xl"
          style={{
            backgroundColor: config.theme?.darkSurface,
            borderColor: "rgba(69,70,77,0.1)",
          }}
        >
          {[
            { icon: "verified", label: "Licensed & Bonded" },
            { icon: "assignment_turned_in", label: "Insurance Specialists" },
            { icon: "search_check", label: "Free Inspections" },
            { icon: "shield", label: "Lifetime Warranty" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 px-2"
              style={{ borderRight: i < 3 ? "1px solid rgba(69,70,77,0.1)" : "none" }}
            >
              <span
                className="material-symbols-outlined text-3xl"
                style={{ color: config.secondaryHex }}
              >
                {item.icon}
              </span>
              <p className="text-sm font-bold uppercase tracking-wider text-white">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Two column form */}
      <main className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Form */}
        <section
          className="glass-card p-10 rounded-xl shadow-2xl"
          style={{ borderColor: "rgba(69,70,77,0.15)" }}
        >
          <h2 className="text-3xl font-black text-white mb-2">
            Get Your Free Inspection
          </h2>
          <p className="text-slate-400 mb-8">
            Fill out the form below and an expert will contact you within 2 hours.
          </p>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full border-none rounded-lg p-4 focus:ring-2 text-white"
                  style={{
                    backgroundColor: config.theme?.darkSurfaceHigh,
                    focusRingColor: config.secondaryHex,
                  } as React.CSSProperties}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="(555) 000-0000"
                  className="w-full border-none rounded-lg p-4 focus:ring-2 text-white"
                  style={{ backgroundColor: config.theme?.darkSurfaceHigh } as React.CSSProperties}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full border-none rounded-lg p-4 focus:ring-2 text-white"
                style={{ backgroundColor: config.theme?.darkSurfaceHigh } as React.CSSProperties}
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">
                Service Required
              </label>
              <select
                className="w-full border-none rounded-lg p-4 focus:ring-2 text-white"
                style={{ backgroundColor: config.theme?.darkSurfaceHigh } as React.CSSProperties}
              >
                <option>Roof Replacement</option>
                <option>Storm Damage Repair</option>
                <option>Standard Inspection</option>
                <option>Shingle Repair</option>
                <option>Commercial Roofing</option>
                <option>Gutter Installation</option>
              </select>
            </div>

            {/* Insurance toggle */}
            <div
              className="flex items-center justify-between p-4 rounded-lg border"
              style={{
                backgroundColor: config.theme?.darkSurface,
                borderColor: "rgba(69,70,77,0.1)",
              }}
            >
              <span className="text-sm font-semibold text-white">
                Is This Insurance Related?
              </span>
              <div className="flex gap-4">
                {["YES", "NO"].map((opt) => (
                  <label
                    key={opt}
                    className="inline-flex items-center cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="insurance"
                      className="hidden peer"
                      checked={opt === "YES" ? isInsurance : !isInsurance}
                      onChange={() => setIsInsurance(opt === "YES")}
                    />
                    <span
                      className="px-4 py-1 rounded-full text-xs font-bold transition-all"
                      style={{
                        backgroundColor:
                          (opt === "YES" && isInsurance) ||
                          (opt === "NO" && !isInsurance)
                            ? config.secondaryHex
                            : config.theme?.darkBg,
                        color: "white",
                      }}
                    >
                      {opt}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Photo upload */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">
                Upload Photos of Damage (Optional)
              </label>
              <div
                className="border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors"
                style={{
                  borderColor: "rgba(69,70,77,0.3)",
                  backgroundColor: `${config.theme?.darkSurface}30`,
                }}
              >
                <span className="material-symbols-outlined text-4xl text-slate-400 mb-2">
                  cloud_upload
                </span>
                <p className="text-sm text-slate-400">
                  Drag and drop images or{" "}
                  <span style={{ color: config.secondaryHex }} className="font-bold">
                    browse files
                  </span>
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Tell us more about your roofing needs..."
                className="w-full border-none rounded-lg p-4 focus:ring-2 text-white"
                style={{ backgroundColor: config.theme?.darkSurfaceHigh } as React.CSSProperties}
              />
            </div>

            <button
              type="submit"
              className="w-full py-5 rounded-xl text-white font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3"
              style={{
                background: `linear-gradient(135deg, ${config.secondaryHex} 0%, ${config.primaryHex} 100%)`,
                boxShadow: `0 0 20px ${config.theme?.glow || "rgba(0,0,0,0.3)"}`,
              }}
            >
              Request Free Inspection
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>

            <div className="flex items-center justify-center gap-6 pt-4 text-slate-400 text-sm">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">lock</span>{" "}
                Confidential
              </span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">phone</span>{" "}
                {phone}
              </span>
            </div>
          </form>
        </section>

        {/* Trust column */}
        <section className="space-y-12">
          {/* Phone CTA */}
          <div
            className="p-10 rounded-xl shadow-2xl relative overflow-hidden group"
            style={{ backgroundColor: config.secondaryHex }}
          >
            <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:scale-110 transition-transform duration-700">
              <span
                className="material-symbols-outlined text-[200px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                phone_in_talk
              </span>
            </div>
            <h3 className="text-white/80 font-bold uppercase tracking-widest text-sm mb-2">
              Speak to a Specialist
            </h3>
            <p className="text-4xl font-black text-white mb-6">{phone}</p>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-md px-6 py-3 rounded-lg text-white font-bold transition-all"
            >
              Chat on WhatsApp
            </a>
          </div>

          {/* Hours and Insurance */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div
              className="p-6 rounded-xl"
              style={{
                backgroundColor: config.theme?.darkSurface,
                borderLeft: `4px solid ${config.secondaryHex}`,
              }}
            >
              <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                <span
                  className="material-symbols-outlined"
                  style={{ color: config.secondaryHex }}
                >
                  schedule
                </span>{" "}
                Service Hours
              </h4>
              <ul className="text-sm text-slate-400 space-y-1">
                <li className="flex justify-between">
                  <span>Mon - Fri:</span> <span>7am - 8pm</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday:</span> <span>9am - 4pm</span>
                </li>
                <li
                  className="flex justify-between font-bold"
                  style={{ color: config.secondaryHex }}
                >
                  <span>Emergency:</span> <span>24/7 Available</span>
                </li>
              </ul>
            </div>
            <div
              className="p-6 rounded-xl"
              style={{
                backgroundColor: config.theme?.darkSurface,
                borderLeft: `4px solid ${config.secondaryHex}`,
              }}
            >
              <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                <span
                  className="material-symbols-outlined"
                  style={{ color: config.secondaryHex }}
                >
                  description
                </span>{" "}
                Insurance Claims
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Our experts handle all the paperwork and adjusters for you. We
                maximize your claim for total roof protection.
              </p>
            </div>
          </div>

          {/* Verified badges */}
          <div
            className="p-8 rounded-xl border"
            style={{
              backgroundColor: `${config.theme?.darkSurfaceHigh}50`,
              borderColor: "rgba(69,70,77,0.1)",
            }}
          >
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-white">
              Verified Quality
            </h4>
            <div className="flex flex-wrap gap-6 items-center">
              {[
                { icon: "verified_user", label: "Bonded" },
                { icon: "health_and_safety", label: "Safety 1st" },
                { icon: "workspace_premium", label: "BBB A+" },
              ].map((b) => (
                <div
                  key={b.label}
                  className="flex flex-col items-center bg-white/5 p-4 rounded-lg w-24"
                >
                  <span
                    className="material-symbols-outlined text-3xl"
                    style={{ color: config.secondaryHex }}
                  >
                    {b.icon}
                  </span>
                  <span className="text-[10px] font-bold mt-2 text-center uppercase text-white">
                    {b.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <div
            className="p-8 rounded-xl relative"
            style={{ backgroundColor: config.theme?.darkSurface }}
          >
            <span
              className="material-symbols-outlined absolute top-4 right-6 text-6xl"
              style={{ color: `${config.secondaryHex}20` }}
            >
              format_quote
            </span>
            <p className="text-lg italic text-slate-300 relative z-10 mb-6">
              &ldquo;I was overwhelmed with the insurance process after the hail
              storm. {businessName} handled everything — from the initial inspection
              to meeting the adjuster. My new roof is perfect!&rdquo;
            </p>
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white"
                style={{ backgroundColor: config.theme?.darkSurfaceHigh }}
              >
                MR
              </div>
              <div>
                <p className="font-bold text-white">Michael R.</p>
                <p className="text-xs text-slate-500">Insurance Claim Client</p>
              </div>
            </div>
          </div>

          {/* Areas served */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest flex items-center gap-2 text-white">
              <span
                className="material-symbols-outlined"
                style={{ color: config.secondaryHex }}
              >
                location_on
              </span>{" "}
              Areas Served
            </h4>
            <div className="flex flex-wrap gap-2">
              {[city, "Surrounding Areas"].map((area) => (
                <span
                  key={area}
                  className="px-4 py-1 rounded-full text-xs font-semibold border"
                  style={{
                    backgroundColor: config.theme?.darkSurface,
                    borderColor: "rgba(69,70,77,0.1)",
                    color: "#a3aac4",
                  }}
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
