"use client";

export default function ElecFooter({ businessName = "PowerLine", phone = "(555) 012-3456", city = "Suite 400" }: { businessName?: string; phone?: string; city?: string }) {
  return (
    <footer className="bg-slate-900 w-full pt-16 pb-8 border-t-4 border-yellow-500">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 max-w-7xl mx-auto">
        <div className="space-y-6">
          <span className="text-2xl font-black text-white tracking-tighter uppercase">
            {businessName}
          </span>
          <p className="text-slate-400 text-sm leading-relaxed">
            Engineering excellence in every connection. Licensed master
            electricians serving commercial and high-end residential clients
            since 2009.
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="font-bold uppercase tracking-widest text-white text-sm">
            Services
          </h4>
          <ul className="space-y-2">
            {["Panel Upgrades", "Wiring & Rewiring", "EV Charger Install", "Emergency Repair"].map((l) => (
              <li key={l}>
                <a href="#" className="text-slate-400 hover:text-yellow-500 transition-colors hover:translate-x-1 inline-block">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="font-bold uppercase tracking-widest text-white text-sm">
            Contact
          </h4>
          <ul className="space-y-2 text-sm">
            <li className="text-slate-400 flex items-center gap-2">
              <span className="material-symbols-outlined text-xs">location_on</span> 123 Industrial Way, Suite 400
            </li>
            <li className="text-slate-400 flex items-center gap-2">
              <span className="material-symbols-outlined text-xs">mail</span> office@powerline-elec.com
            </li>
            <li className="text-slate-400 flex items-center gap-2">
              <span className="material-symbols-outlined text-xs">phone</span> {phone}
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="font-bold uppercase tracking-widest text-white text-sm">
            Status
          </h4>
          <div className="bg-slate-800 p-4 border-l-2 border-yellow-500">
            <p className="text-xs text-yellow-500 mb-1" style={{ fontFamily: "var(--font-mono-elec)" }}>NETWORK HEALTH</p>
            <p className="text-sm font-bold text-white">All Crews Dispatched</p>
            <p className="text-[10px] text-slate-500 mt-2">Current Load: 94%</p>
          </div>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-slate-800 max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-400 text-xs">
          &copy; {new Date().getFullYear()} {businessName}. Master Licensed. All Rights Reserved.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-slate-400 hover:text-yellow-500 transition-colors text-xs">Privacy Policy</a>
          <a href="#" className="text-slate-400 hover:text-yellow-500 transition-colors text-xs">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
