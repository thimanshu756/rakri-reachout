"use client";

export default function PlumbingContactFooter() {
  return (
    <footer className="bg-[#011545] text-[#FEF9F1] w-full pt-20 pb-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-8 max-w-7xl mx-auto mb-16">
        {/* Brand */}
        <div>
          <div
            className="text-2xl font-black text-[#FEF9F1] mb-6"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            Royal Plumb &amp; Brass
          </div>
          <p
            className="text-[#FEF9F1]/80 leading-[1.65] text-base mb-6"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Premium residential plumbing services since 1994. Building trust
            through precision and prestige.
          </p>
          <div className="flex gap-4">
            {["public", "hub", "groups"].map((icon) => (
              <span
                key={icon}
                className="material-symbols-outlined text-[#FEF9F1]/60 hover:text-[#7E5700] cursor-pointer transition-colors"
              >
                {icon}
              </span>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4
            className="font-bold uppercase tracking-widest text-sm text-[#7E5700] mb-6"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            Quick Links
          </h4>
          <ul className="space-y-4" style={{ fontFamily: "var(--font-inter)" }}>
            {[
              "Emergency Service",
              "Residential Plumbing",
              "Maintenance Plans",
              "Privacy Policy",
            ].map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-[#FEF9F1]/80 hover:text-[#7E5700] transition-colors"
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
            className="font-bold uppercase tracking-widest text-sm text-[#7E5700] mb-6"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            Contact Info
          </h4>
          <ul className="space-y-4" style={{ fontFamily: "var(--font-inter)" }}>
            <li className="flex gap-3 text-[#FEF9F1]/80">
              <span className="material-symbols-outlined text-[#7E5700]">
                location_on
              </span>
              482 Heritage Way, Royal Oak, MI
            </li>
            <li className="flex gap-3 text-[#FEF9F1]/80">
              <span className="material-symbols-outlined text-[#7E5700]">
                call
              </span>
              (800) 555-ROYAL
            </li>
            <li className="flex gap-3 text-[#FEF9F1]/80">
              <span className="material-symbols-outlined text-[#7E5700]">
                mail
              </span>
              service@royalplumb.com
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="pt-10 border-t border-[#ECE8E0]/10 text-center max-w-7xl mx-auto px-8">
        <p
          className="text-[#FEF9F1]/50 text-xs tracking-widest uppercase"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          &copy; {new Date().getFullYear()} Royal Plumb &amp; Brass. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
