"use client";

import { colors, contactInfo } from "../theme";

const instagramImages = [
  "https://images.unsplash.com/photo-1585128903994-9788298932a4?w=150&h=150&fit=crop",
  "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=150&h=150&fit=crop",
  "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=150&h=150&fit=crop",
  "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=150&h=150&fit=crop",
  "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=150&h=150&fit=crop",
  "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=150&h=150&fit=crop",
];

export default function PlumbingFooter() {
  const phoneDigits = contactInfo.phone.replace(/[^\d+]/g, "");

  return (
    <footer style={{ backgroundColor: colors.inverseSurface }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-14 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Working Hours */}
          <div>
            <h4
              className="text-[12px] font-bold uppercase tracking-[0.15em] mb-5"
              style={{ color: colors.secondaryContainer, fontFamily: "var(--font-inter)" }}
            >
              Working Hours
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between text-[13px]" style={{ fontFamily: "var(--font-inter)" }}>
                <span style={{ color: "rgba(255,255,255,0.5)" }}>Mon - Fri</span>
                <span style={{ color: "rgba(255,255,255,0.7)" }}>8:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between text-[13px]" style={{ fontFamily: "var(--font-inter)" }}>
                <span style={{ color: "rgba(255,255,255,0.5)" }}>Saturday</span>
                <span style={{ color: "rgba(255,255,255,0.7)" }}>9:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between text-[13px]" style={{ fontFamily: "var(--font-inter)" }}>
                <span style={{ color: "rgba(255,255,255,0.5)" }}>Sunday</span>
                <span style={{ color: "rgba(255,255,255,0.7)" }}>Emergency Only</span>
              </div>
              <p
                className="text-[12px] font-semibold pt-2"
                style={{ color: colors.secondaryContainer, fontFamily: "var(--font-inter)" }}
              >
                24/7 Emergency Service Available
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-[12px] font-bold uppercase tracking-[0.15em] mb-5"
              style={{ color: colors.secondaryContainer, fontFamily: "var(--font-inter)" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Services", "Residential Plumbing", "Commercial Service", "About Our Team"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[13px] transition-colors"
                    style={{ color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-inter)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4
              className="text-[12px] font-bold uppercase tracking-[0.15em] mb-5"
              style={{ color: colors.secondaryContainer, fontFamily: "var(--font-inter)" }}
            >
              Contact Us
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[16px] mt-0.5" style={{ color: colors.secondaryContainer }}>
                  location_on
                </span>
                <span className="text-[13px]" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-inter)" }}>
                  {contactInfo.address}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[16px]" style={{ color: colors.secondaryContainer }}>
                  mail
                </span>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-[13px] transition-colors"
                  style={{ color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-inter)" }}
                >
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[16px]" style={{ color: colors.secondaryContainer }}>
                  call
                </span>
                <a
                  href={`tel:${phoneDigits}`}
                  className="text-[13px] transition-colors"
                  style={{ color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-inter)" }}
                >
                  {contactInfo.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Instagram Grid */}
          <div className="lg:col-span-2">
            <h4
              className="text-[12px] font-bold uppercase tracking-[0.15em] mb-5"
              style={{ color: colors.secondaryContainer, fontFamily: "var(--font-inter)" }}
            >
              Instagram / Our Work
            </h4>
            <div className="grid grid-cols-3 gap-2">
              {instagramImages.map((img, i) => (
                <div
                  key={i}
                  className="aspect-square overflow-hidden"
                  style={{ borderRadius: "6px" }}
                >
                  <img
                    src={img}
                    alt={`Work sample ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    onError={(e) => {
                      const t = e.currentTarget;
                      t.style.display = "none";
                      t.parentElement!.style.backgroundColor = "rgba(255,255,255,0.05)";
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="max-w-[1280px] mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-4"
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div className="flex items-center gap-2">
          <span
            className="text-[15px] font-extrabold tracking-tight"
            style={{ color: colors.secondaryContainer, fontFamily: "var(--font-manrope)" }}
          >
            Plumbing Excellence
          </span>
        </div>
        <p
          className="text-[12px]"
          style={{ color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-inter)" }}
        >
          &copy; {new Date().getFullYear()} Plumbing Excellence. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          {["Privacy Policy", "Terms of Service", "Emergency Contact", "Careers"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-[11px] transition-colors"
              style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-inter)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
