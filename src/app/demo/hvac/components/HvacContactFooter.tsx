"use client";

export default function HvacContactFooter() {
  return (
    <footer className="text-[#fcf9f4] w-full pt-20 pb-10" style={{ background: "#a13b05" }}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-8 max-w-7xl mx-auto mb-16">
        {/* Brand */}
        <div>
          <div
            className="flex items-center gap-2 text-2xl font-black text-[#fcf9f4] mb-6"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            <span
              className="material-symbols-outlined text-[#fdb741]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              local_fire_department
            </span>
            Precision &amp; Comfort
          </div>
          <p
            className="text-[#fcf9f4]/80 leading-[1.65] text-base mb-6"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Premium residential HVAC services since 2012. Engineering
            sanctuary-level climate control for the modern home.
          </p>
          <div className="flex gap-4">
            {["public", "hub", "groups"].map((icon) => (
              <span
                key={icon}
                className="material-symbols-outlined text-[#fcf9f4]/60 hover:text-[#fdb741] cursor-pointer transition-colors"
              >
                {icon}
              </span>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4
            className="font-bold uppercase tracking-widest text-sm text-[#fdb741] mb-6"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            Quick Links
          </h4>
          <ul className="space-y-4" style={{ fontFamily: "var(--font-inter)" }}>
            {[
              "Emergency Service",
              "Residential HVAC",
              "Maintenance Plans",
              "Privacy Policy",
            ].map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-[#fcf9f4]/80 hover:text-[#fdb741] transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4
            className="font-bold uppercase tracking-widest text-sm text-[#fdb741] mb-6"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            Contact Info
          </h4>
          <ul className="space-y-4" style={{ fontFamily: "var(--font-inter)" }}>
            <li className="flex gap-3 text-[#fcf9f4]/80">
              <span className="material-symbols-outlined text-[#fdb741]">
                location_on
              </span>
              1224 HVAC Plaza Suite 400, Comfort City, ST
            </li>
            <li className="flex gap-3 text-[#fcf9f4]/80">
              <span className="material-symbols-outlined text-[#fdb741]">
                call
              </span>
              (555) 234-8900
            </li>
            <li className="flex gap-3 text-[#fcf9f4]/80">
              <span className="material-symbols-outlined text-[#fdb741]">
                mail
              </span>
              service@precisioncomfort.hvac
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="pt-10 border-t border-white/10 text-center max-w-7xl mx-auto px-8">
        <p
          className="text-[#fcf9f4]/50 text-xs tracking-widest uppercase"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          &copy; {new Date().getFullYear()} Precision &amp; Comfort HVAC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
