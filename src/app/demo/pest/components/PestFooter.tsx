"use client";
export default function PestFooter({ businessName = "GreenShield Pest", phone = "(800) GREEN-01" }: { businessName?: string; phone?: string }) {
  return (
    <footer className="w-full rounded-t-[40px] mt-20 bg-emerald-900 text-emerald-50">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 py-20 max-w-7xl mx-auto">
        <div>
          <a href="#" className="text-2xl font-bold text-white mb-4 block" style={{ fontFamily: "var(--font-jakarta)" }}>{businessName}</a>
          <p className="text-emerald-100/60 text-sm mb-6" style={{ fontFamily: "var(--font-vietnam)" }}>Pioneering eco-friendly pest solutions for the modern home. Science-backed, nature-derived.</p>
          <div className="flex gap-4">
            {["social_leaderboard", "retweet", "mail"].map((i) => (<span key={i} className="material-symbols-outlined cursor-pointer hover:text-white transition-colors">{i}</span>))}
          </div>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 text-lg">Services</h4>
          <ul className="space-y-3 text-emerald-100/80">
            {["Termite Defense", "Ant & Roach Control", "Rodent Exclusion", "Mosquito Barrier"].map((l) => (<li key={l}><a href="#" className="hover:text-white hover:translate-x-1 transition-transform inline-block">{l}</a></li>))}
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
          <ul className="space-y-3 text-emerald-100/80 font-medium">
            {["About Our Labs", "Protection Plans", "Service Areas", "Customer Success"].map((l) => (<li key={l}><a href="#" className="hover:text-white hover:translate-x-1 transition-transform inline-block">{l}</a></li>))}
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 text-lg">Support</h4>
          <ul className="space-y-3 text-emerald-100/80">
            {["FAQ", "Privacy Policy", "Terms of Service"].map((l) => (<li key={l}><a href="#" className="hover:text-white hover:translate-x-1 transition-transform inline-block">{l}</a></li>))}
            <li className="pt-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#6bff8f]">call</span>
              <span className="font-bold text-white">{phone}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5 py-8 px-12 max-w-7xl mx-auto text-center md:text-left text-xs text-emerald-100/40">
        &copy; {new Date().getFullYear()} {businessName}. All Rights Reserved. EPA Certified Eco-Friendly Provider.
      </div>
    </footer>
  );
}
