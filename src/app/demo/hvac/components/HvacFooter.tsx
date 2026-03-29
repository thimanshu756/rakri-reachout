"use client";

const instagramImages = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD3W40hIfStq0Xh0lAiKI0m9o7sUReWKEQVPl5PuDx9t7Q4YVkRzAcIHzPPh0SA31QgqexJJ6VF09gLT1Adg4aWol4Um4r0CtKcRU6dy5Sa9zKmLJUcgqw5GhyZx4qSfhXBrzBUzVbRIbLlnfL-xx7pghsA-yj2ofw0DVSlAVk1mIJpSYRx5LwlImSHQUmzDl0wk7zViW5Gr2htqu1a_LHVNsoe2tIzlh1xlh3uiVwTHdunwsk_7dypYGHcuorsrW3dBm1LHQn1nzQC",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCsu6FAdi-vlO_ieXix6HLT95LWsIZMOX3svgmTwkVFA9xZKA7hU4dj9kD1wSAWJFZUFBbagk2BQA6-oZxpqDWv7a9qq6KvcZn_R7hTJstExXQnock2IKeFij9bttxe-AJOcuuvE_CjvaJYKBVDkByR1uhFLdo2lc7iznTMqzz6uK4LS25STdMqn0mSFE-2DcEo7L0femt6Y_o3A6D-btDgxx0HsGCtQEOxm6GdQ2WTjyyk10eYyRRhVlpz6ef5k25X6i1mSskZjCj2",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDsNiJtfniwCsDY_sTIOWixfUpL3cZjg5DRYXJNwqvr-TBkUSUS8Gjl6ctaAByRBTGl0lssukFHQkxBMhSx0wiFnKIB11Pr1TMM6N1v6jBrv8WeCYWeIaNU7tnl9-6XWHpEhQLBRV5KA9ul3H4f1pNKk-xOj7Xggdsf6oTM26aFXJ0LgAY0RtXdDBGOfN9W1P2lcG4PK3QJ3OFG_e8nXbRXvVKfsoN-RxwIQSdiGYCXc4gGORxWzPdDokrhI0GLaUGOscnEewDT5Ao_",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDUicKDrMlYTnFOqIOluQ4JPWO4YLbJ74u2lNIaGxm_IIy0699QkMktFKsC9RRCkqouuW02AD0V1yvgunPKh2UtvsQYQwtWnCMuIrJ1c0w9NstV3y0NzaR8BfWSlw3P1JUH49oF3esi6Oi2GPkCfGO-GNJlIT3HR72ir52oLUyjRuK_EDWM_vnfMnmaRs13ph_4vUL4rKXvOnypaTRQ5v1LMPx70DxuOfRJq3LEixkfLtYPmtAOOKAyhgh_ubvha2E5H05yzhTnwLdy",
];

export default function HvacFooter() {
  return (
    <footer className="text-[#fcf9f4] w-full py-16 px-8 leading-[1.65] text-sm" style={{ background: "#a13b05" }}>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto">
        {/* Brand & Working Hours */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <span
              className="material-symbols-outlined text-[#fdb741]"
              style={{ fontVariationSettings: "'FILL' 1", fontSize: "28px" }}
            >
              local_fire_department
            </span>
            <h3
              className="text-xl font-bold text-white"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Precision &amp; Comfort
            </h3>
          </div>
          <div className="flex items-center gap-2 text-[#fdb741] font-bold text-sm">
            <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
              schedule
            </span>
            Working Hours
          </div>
          <ul className="space-y-2 opacity-80" style={{ fontFamily: "var(--font-inter)" }}>
            <li className="flex justify-between">
              <span>Mon - Fri:</span> <span>8am - 8pm</span>
            </li>
            <li className="flex justify-between">
              <span>Sat - Sun:</span> <span>9am - 5pm</span>
            </li>
            <li className="pt-2 text-[#fdb741] font-bold">24/7 Emergency Response</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="space-y-6">
          <h3
            className="text-xl font-bold text-[#fdb741] uppercase"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            Quick Links
          </h3>
          <ul className="space-y-4" style={{ fontFamily: "var(--font-inter)" }}>
            {["Residential Services", "Commercial HVAC", "Maintenance Plans", "Emergency Repair", "Privacy Policy"].map(
              (link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-white/70 hover:text-[#fdb741] transition-colors"
                  >
                    {link}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Contact Us */}
        <div className="space-y-6">
          <h3
            className="text-xl font-bold text-[#fdb741] uppercase"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            Contact Us
          </h3>
          <ul className="space-y-4 opacity-80" style={{ fontFamily: "var(--font-inter)" }}>
            <li className="flex gap-3">
              <span className="material-symbols-outlined text-[#fdb741]">
                location_on
              </span>
              1224 HVAC Plaza Suite 400, Comfort City, ST 90210
            </li>
            <li className="flex gap-3">
              <span className="material-symbols-outlined text-[#fdb741]">
                call
              </span>
              (555) 234-8900
            </li>
            <li className="flex gap-3">
              <span className="material-symbols-outlined text-[#fdb741]">
                mail
              </span>
              service@precisioncomfort.hvac
            </li>
          </ul>
        </div>

        {/* Instagram Grid */}
        <div className="space-y-6">
          <h3
            className="text-xl font-bold text-[#fdb741] uppercase"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            Follow Us
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {instagramImages.map((img, i) => (
              <div
                key={i}
                className="aspect-square rounded overflow-hidden"
              >
                <img
                  alt={`Work ${i + 1}`}
                  className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity"
                  src={img}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl mx-auto">
        <p className="text-white/60">
          &copy; {new Date().getFullYear()} Precision &amp; Comfort HVAC. All Rights Reserved.
        </p>
        <div className="flex gap-4">
          {["share", "group", "favorite"].map((icon) => (
            <div
              key={icon}
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#fdb741] transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm">{icon}</span>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
