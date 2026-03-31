"use client";

const instagramImages = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuANOKCFLjLh2EJkSeKScdpI5D4efOrtwhsexCs--esMlOWF-mus7Zk_2FBBgaLoPHSWJJEpuuy8NuhcQ-K32rtk5o43TVvmitzidD3ZYs9-cMMqe57GYDqVPbzwFu_cK2-e59gz8U-AzhGCLclMl9CmTd02s_2glcETRDBFu0nL47MsoD2LU2sX4azalasmFmmRVnkxK2gBs9Hm7ldwn5s5QgwI6obZV2Unm5AtQViDEOhqzRrH26KH9vy7qiDxmi3J7wsm-BwNtTw",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBrsmQKMwwokasxqnoZ3H118ffL77hG1oZ_rgtIYjNtInUUaoOlGCw7e_U8AJDpUbvZm-GOjmnamCNk1vmGobBnShpQVTkRR2QXMYJm4T0U114Ks67ZPr5UnbYBQNmA_B_5pi-QiSUteZKwfajDJ1-fFfgtzLWs9oIZHTG5oyDeKqAIlFExT2XUaicLrbq2TE6nHMi2qqnA1g4RaHcN9faxnFlQvoMG9Dp_-BRQrTKPTXwlZJ1ByBXEar1F039sdlStmIqVEUsPV0w",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBuw8Si64rvxmkRXZEJ_YQ4IG7Ww3c_3pBwQk8wZsartHB3ei0mk4eWvhOibGIHs_r2_y_qdISbliUj8MnDUEKs1mqZfnozIupVOfGmjieh5EuCc7SD7CQrKoo5QsDsGod4KEXoTy1t8gUAaviORedMHSZWMc4ZjqFWoHWnV9PWGVsjsmYPTe1ixYpECTu3Ptu97QZoPLs7x5CPacj60Xr2-EfAT2xnlxHnvpn1yh0anaqBP1DhsTw4mUAJlOZdJbgvrNwliqH8XiQ",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuByLYpUrKxjeIGnCnSgbdbqHZicSHGHM5JXGe4D1OmiEx_WTKVg7VQD9OgBBTuRze_ZIHzuIDZPNfOD7UceAjcQfAHUuf--OOzm8VPFiqmNcyr6TgU1hhEwV9foQdLcR7XMOneA9U6SGmTsJ7lUnBi3ul3NE7KyCZls0EzqLsUVUoMidBp4e8_rg9V5r3gahlPcvZ-ewWHr9VDGYnap-kCTT-DaoguAi8hA8ROFlF8s3uoHwaBAEKnWvGTfTBZp9rDPPH80h9qJW14",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBXZYMsVRzBQzRwuQ3Nhb3FclPvFD14Nj9y1Y_NY1zuJrMnq6ywH9aNSeeeaP-wXhiDwDMUYYjIIQmAzjH-oJhewWsQpQHBLLwZPtw19QjoWxMYSlv-JtV5VMPa2lukD5EKv-lhA_uUxCFBS9DfvJdan8cnl9kdwJ5mMfK6DVFmRD2QO7_6iyBWZIytTb6rTV_BD8YWX9oH2zYzG9AuhTblffTB_XfDroYXduH4zPBcFHuqZkgj1sZQuN4Ydot9BhEQffHFnqQurr0",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCvoF0As-t2aUfneATLqqhI9whRAVfg-wl1jv4vYIp2fLaQXVfynTqzY-lIEORcc81TgUe0VMkuHuWg4E0stKU9YrQBxg1DdHnRGghOSKfu21p8LrKSdgMD1tiza-ZHc-MjX4qQjmbU4R6g-nRnd6eyzgARZSlA7ovkcNT-QUSQI5VIaeSrEpuJAxSodhQ-jx77ViwzWXyt1BiHy6Yb7vDoEduy_rKMhWWOgVsATKXKxwbGhDt3bKvMMm8UVpTRnpAtJBXt2unrSpQ",
];

export default function PlumbingFooter({ businessName = "Plumbing Excellence", phone = "(555) 123-4567", city = "Kensington, NY" }: { businessName?: string; phone?: string; city?: string }) {
  return (
    <footer className="bg-[#011545] text-[#FEF9F1] w-full py-16 px-8 leading-[1.65] text-sm">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto">
        {/* Working Hours */}
        <div className="space-y-6">
          <h3
            className="text-xl font-bold text-[#7E5700] uppercase"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            Working Hours
          </h3>
          <ul className="space-y-2 opacity-80" style={{ fontFamily: "var(--font-inter)" }}>
            <li className="flex justify-between">
              <span>Mon - Fri:</span> <span>8:00 AM - 6:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Saturday:</span> <span>9:00 AM - 4:00 PM</span>
            </li>
            <li className="flex justify-between text-[#7E5700] font-bold">
              <span>Sunday:</span> <span>Emergency Only</span>
            </li>
            <li className="pt-2 italic">24/7 Emergency Service Available</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="space-y-6">
          <h3
            className="text-xl font-bold text-[#7E5700] uppercase"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            Quick Links
          </h3>
          <ul className="space-y-4" style={{ fontFamily: "var(--font-inter)" }}>
            {["Services", "Residential Plumbing", "Commercial Service", "About Our Team"].map(
              (link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-[#7E5700] transition-colors"
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
            className="text-xl font-bold text-[#7E5700] uppercase"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            Contact Us
          </h3>
          <ul className="space-y-4 opacity-80" style={{ fontFamily: "var(--font-inter)" }}>
            <li className="flex gap-3">
              <span className="material-symbols-outlined text-[#7E5700]">
                location_on
              </span>
              {city}
            </li>
            <li className="flex gap-3">
              <span className="material-symbols-outlined text-[#7E5700]">
                mail
              </span>
              info@plumbingexcellence.com
            </li>
            <li className="flex gap-3">
              <span className="material-symbols-outlined text-[#7E5700]">
                call
              </span>
              {phone}
            </li>
          </ul>
        </div>

        {/* Instagram Grid */}
        <div className="space-y-6">
          <h3
            className="text-xl font-bold text-[#7E5700] uppercase"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            Instagram Grid
          </h3>
          <div className="grid grid-cols-3 gap-2">
            {instagramImages.map((img, i) => (
              <div
                key={i}
                className="aspect-square bg-slate-800 rounded overflow-hidden"
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
        <div className="flex flex-col gap-2">
          <span
            className="text-xl font-bold text-[#7E5700] uppercase"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            {businessName}
          </span>
          <p className="text-slate-400">
            &copy; {new Date().getFullYear()} Premium Residential Plumbing. All
            rights reserved.
          </p>
        </div>
        <div className="flex gap-6" style={{ fontFamily: "var(--font-inter)" }}>
          {["Privacy Policy", "Terms of Service", "Emergency Contact", "Careers"].map(
            (link) => (
              <a
                key={link}
                href="#"
                className="text-slate-400 hover:text-[#7E5700] transition-colors"
              >
                {link}
              </a>
            )
          )}
        </div>
        <div className="flex gap-4">
          {["public", "alternate_email", "share"].map((icon) => (
            <div
              key={icon}
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#7E5700] transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm">{icon}</span>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
