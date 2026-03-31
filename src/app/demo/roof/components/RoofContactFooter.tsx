"use client";

export default function RoofContactFooter({ businessName = "{businessName}" }: { businessName?: string }) {
  return (
    <footer className="bg-[#151c27] w-full border-t-4 border-[#9e2016]">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 py-20 w-full max-w-screen-2xl mx-auto">
        <div className="space-y-6">
          <div
            className="text-lg font-black text-[#fbf9f6] uppercase tracking-tighter"
            style={{ fontFamily: "var(--font-epilogue)" }}
          >
            {businessName}
          </div>
          <p className="text-[#404753] text-sm leading-relaxed">
            Precision ironwork meets the permanence of stone. Your authority in
            architectural integrity and emergency storm recovery.
          </p>
        </div>
        <div>
          <h4
            className="text-white uppercase text-sm mb-6 tracking-widest"
            style={{ fontFamily: "var(--font-epilogue)" }}
          >
            Navigation
          </h4>
          <ul className="space-y-3">
            {["Home", "Services", "Gallery"].map((link) => (
              <li key={link}>
                <a
                  className="text-[#404753] hover:text-[#fbf9f6] text-sm hover:translate-x-1 transition-transform block"
                  href="#"
                >
                  {link}
                </a>
              </li>
            ))}
            <li>
              <a className="text-[#fbf9f6] font-bold text-sm block" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4
            className="text-white uppercase text-sm mb-6 tracking-widest"
            style={{ fontFamily: "var(--font-epilogue)" }}
          >
            Resources
          </h4>
          <ul className="space-y-3">
            {[
              "Privacy Policy",
              "Terms of Service",
              "Service Areas",
              "Emergency Repairs",
            ].map((link) => (
              <li key={link}>
                <a
                  className="text-[#404753] hover:text-[#fbf9f6] text-sm hover:translate-x-1 transition-transform block"
                  href="#"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4
            className="text-white uppercase text-sm mb-6 tracking-widest"
            style={{ fontFamily: "var(--font-epilogue)" }}
          >
            Credentialed
          </h4>
          <div className="flex gap-4 opacity-50">
            {["verified_user", "construction", "foundation"].map((icon) => (
              <span
                key={icon}
                className="material-symbols-outlined text-white text-3xl"
              >
                {icon}
              </span>
            ))}
          </div>
          <p className="text-[#404753] text-xs mt-6 leading-tight uppercase font-bold">
            &copy; {new Date().getFullYear()} {businessName} ARCHITECTURAL
            INTEGRITY &amp; STONE-AND-IRON AUTHORITY.
          </p>
        </div>
      </div>
    </footer>
  );
}
