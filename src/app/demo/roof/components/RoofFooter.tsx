"use client";

export default function RoofFooter({ businessName = "StrongRoof Co.", city = "Dallas, TX" }: { businessName?: string; city?: string }) {
  return (
    <footer className="bg-[#151c27] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div>
            <h3
              className="text-2xl font-black uppercase tracking-tighter mb-6"
              style={{ fontFamily: "var(--font-epilogue)" }}
            >
              {businessName}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              The premier choice for residential and commercial roofing solutions
              since 2004. Built for permanence.
            </p>
          </div>
          <div>
            <h4
              className="text-xs tracking-widest uppercase mb-8 text-[#9e2016]"
              style={{ fontFamily: "var(--font-epilogue)" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-4 text-sm text-slate-400">
              {["Residential Roofing", "Commercial Repair", "Storm Damage", "Emergency Services"].map(
                (link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <h4
              className="text-xs tracking-widest uppercase mb-8 text-[#9e2016]"
              style={{ fontFamily: "var(--font-epilogue)" }}
            >
              Service Areas
            </h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li>Dallas, TX</li>
              <li>Fort Worth, TX</li>
              <li>Plano, TX</li>
              <li>Frisco, TX</li>
            </ul>
          </div>
          <div>
            <h4
              className="text-xs tracking-widest uppercase mb-8 text-[#9e2016]"
              style={{ fontFamily: "var(--font-epilogue)" }}
            >
              Contact
            </h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#9e2016] text-lg">
                  location_on
                </span>
                123 Industrial Way, Suite 100
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#9e2016] text-lg">
                  mail
                </span>
                info@strongroof.co
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#9e2016] text-lg">
                  schedule
                </span>
                24/7 Emergency Response
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs">
            &copy; {new Date().getFullYear()} {businessName}. Built for
            Permanence.
          </p>
          <div className="flex gap-8 text-slate-500 text-xs">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
