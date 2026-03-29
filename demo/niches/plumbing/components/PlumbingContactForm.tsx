"use client";

import { useState } from "react";
import { colors, shadows } from "../theme";

export default function PlumbingContactForm() {
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const timeBlocks = [
    { label: "Morning", sublabel: "8am - 12pm", icon: "light_mode" },
    { label: "Afternoon", sublabel: "12pm - 4pm", icon: "wb_sunny" },
    { label: "Evening", sublabel: "4pm - 8pm", icon: "dark_mode" },
  ];

  const serviceOptions = [
    "Residential Plumbing Repair",
    "Maintenance Plan",
    "Emergency Service",
    "Consultation",
  ];

  const inputStyle: React.CSSProperties = {
    backgroundColor: colors.surfaceContainerLow,
    color: colors.onSurface,
    border: "1px solid rgba(197, 198, 208, 0.15)",
    borderRadius: "8px",
    fontFamily: "var(--font-inter)",
    fontSize: "14px",
    outline: "none",
  };

  return (
    <section
      className="py-12 lg:py-16"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-[720px] mx-auto px-6 lg:px-12">
        <div
          className="p-8 lg:p-10"
          style={{
            backgroundColor: colors.surfaceContainerLowest,
            borderRadius: "12px",
            boxShadow: shadows.ambient,
            border: "1px solid rgba(197, 198, 208, 0.15)",
          }}
        >
          <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
            {/* Name / Email / Phone */}
            <div className="grid md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label
                  className="text-[12px] font-bold uppercase tracking-[0.1em] block font-[var(--font-inter)]"
                  style={{ color: colors.onSurfaceVariant }}
                >
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 transition-all focus:ring-2 focus:ring-offset-0"
                  style={{
                    ...inputStyle,
                    // @ts-expect-error CSS variable
                    "--tw-ring-color": `${colors.primary}40`,
                  }}
                />
              </div>
              <div className="space-y-2">
                <label
                  className="text-[12px] font-bold uppercase tracking-[0.1em] block font-[var(--font-inter)]"
                  style={{ color: colors.onSurfaceVariant }}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 transition-all focus:ring-2 focus:ring-offset-0"
                  style={{
                    ...inputStyle,
                    // @ts-expect-error CSS variable
                    "--tw-ring-color": `${colors.primary}40`,
                  }}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label
                  className="text-[12px] font-bold uppercase tracking-[0.1em] block font-[var(--font-inter)]"
                  style={{ color: colors.onSurfaceVariant }}
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="(555) 000-0000"
                  className="w-full px-4 py-3 transition-all focus:ring-2 focus:ring-offset-0"
                  style={{
                    ...inputStyle,
                    // @ts-expect-error CSS variable
                    "--tw-ring-color": `${colors.primary}40`,
                  }}
                />
              </div>
              <div className="space-y-2">
                <label
                  className="text-[12px] font-bold uppercase tracking-[0.1em] block font-[var(--font-inter)]"
                  style={{ color: colors.onSurfaceVariant }}
                >
                  Service Needed
                </label>
                <select
                  className="w-full px-4 py-3 transition-all focus:ring-2 focus:ring-offset-0"
                  style={{
                    ...inputStyle,
                    // @ts-expect-error CSS variable
                    "--tw-ring-color": `${colors.primary}40`,
                  }}
                >
                  {serviceOptions.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Date */}
            <div className="space-y-2">
              <label
                className="text-[12px] font-bold uppercase tracking-[0.1em] block font-[var(--font-inter)]"
                style={{ color: colors.onSurfaceVariant }}
              >
                Preferred Date
              </label>
              <input
                type="date"
                className="w-full px-4 py-3 transition-all focus:ring-2 focus:ring-offset-0"
                style={{
                  ...inputStyle,
                  // @ts-expect-error CSS variable
                  "--tw-ring-color": `${colors.primary}40`,
                }}
              />
            </div>

            {/* Time Block Pills */}
            <div className="space-y-2">
              <label
                className="text-[12px] font-bold uppercase tracking-[0.1em] block font-[var(--font-inter)]"
                style={{ color: colors.onSurfaceVariant }}
              >
                Preferred Time
              </label>
              <div className="grid grid-cols-3 gap-3">
                {timeBlocks.map((block) => (
                  <button
                    key={block.label}
                    type="button"
                    onClick={() => setSelectedTime(block.label)}
                    className="flex flex-col items-center gap-1 py-4 px-3 transition-all hover:scale-[1.02]"
                    style={{
                      backgroundColor:
                        selectedTime === block.label
                          ? colors.primary
                          : colors.surfaceContainerLow,
                      color:
                        selectedTime === block.label
                          ? colors.onPrimary
                          : colors.onSurfaceVariant,
                      borderRadius: "8px",
                      border:
                        selectedTime === block.label
                          ? "none"
                          : "1px solid rgba(197, 198, 208, 0.15)",
                    }}
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      {block.icon}
                    </span>
                    <span className="text-[13px] font-bold font-[var(--font-inter)]">
                      {block.label}
                    </span>
                    <span className="text-[11px] opacity-70 font-[var(--font-inter)]">
                      {block.sublabel}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label
                className="text-[12px] font-bold uppercase tracking-[0.1em] block font-[var(--font-inter)]"
                style={{ color: colors.onSurfaceVariant }}
              >
                Describe Your Plumbing Issue
              </label>
              <textarea
                placeholder="Tell us about your plumbing needs..."
                rows={4}
                className="w-full px-4 py-3 resize-none transition-all focus:ring-2 focus:ring-offset-0"
                style={{
                  ...inputStyle,
                  // @ts-expect-error CSS variable
                  "--tw-ring-color": `${colors.primary}40`,
                }}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-4 text-[15px] font-bold text-white transition-all hover:scale-[1.02] active:scale-95 font-[var(--font-inter)]"
              style={{
                background: `linear-gradient(135deg, ${colors.primary}, ${colors.primaryContainer})`,
                borderRadius: "8px",
                boxShadow: shadows.ambient,
              }}
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
