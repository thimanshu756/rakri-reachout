"use client";
export default function PestPlans() {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto" id="plans">
      <div className="text-center mb-16 space-y-4">
        <span className="text-[#006e2f] font-bold tracking-widest text-xs uppercase block">Subscription Care</span>
        <h2 className="text-4xl font-bold text-[#131e19]" style={{ fontFamily: "var(--font-jakarta)" }}>Sustainable Protection Plans</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {/* Basic */}
        <div className="bg-white p-10 rounded-2xl border border-[#bccbb9]/20 flex flex-col hover:-translate-y-2 transition-transform">
          <h3 className="text-2xl font-bold mb-2">Basic Guard</h3>
          <p className="text-[#3d4a3d] mb-6 text-sm">Targeted exterior-only treatment.</p>
          <div className="text-4xl font-extrabold mb-8" style={{ fontFamily: "var(--font-jakarta)" }}>$29<span className="text-lg font-normal text-[#3d4a3d]/60">/mo</span></div>
          <ul className="space-y-4 mb-12 flex-grow">
            {["Seasonal Perimeter Treatment", "Web Removal (Exterior)", "Email Support"].map((i) => (
              <li key={i} className="flex items-center gap-3 text-sm font-medium"><span className="material-symbols-outlined text-[#006e2f] text-xl">check_circle</span> {i}</li>
            ))}
          </ul>
          <button className="w-full py-4 rounded-xl border-2 border-[#006e2f] text-[#006e2f] font-bold hover:bg-[#006e2f]/5 transition-colors">Choose Plan</button>
        </div>
        {/* Popular */}
        <div className="bg-white p-10 rounded-2xl border-2 border-[#006e2f] shadow-[0_20px_50px_rgba(34,197,94,0.15)] flex flex-col hover:-translate-y-2 transition-transform relative">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#006e2f] text-white text-[10px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-full">Most Popular</div>
          <h3 className="text-2xl font-bold mb-2">Quarterly Protection</h3>
          <p className="text-[#3d4a3d] mb-6 text-sm">Full interior &amp; exterior peace of mind.</p>
          <div className="text-4xl font-extrabold mb-8" style={{ fontFamily: "var(--font-jakarta)" }}>$39<span className="text-lg font-normal text-[#3d4a3d]/60">/mo</span></div>
          <ul className="space-y-4 mb-12 flex-grow">
            {["Everything in Basic", "Interior Barrier Service", "Rodent Prevention System", "Priority Scheduling"].map((i) => (
              <li key={i} className="flex items-center gap-3 text-sm font-medium"><span className="material-symbols-outlined text-[#006e2f] text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span> {i}</li>
            ))}
          </ul>
          <button className="w-full py-4 rounded-xl bg-[#006e2f] text-white font-bold shadow-lg shadow-[#006e2f]/20 hover:scale-[1.02] transition-transform">Get Started Now</button>
        </div>
        {/* Elite */}
        <div className="bg-white p-10 rounded-2xl border border-[#bccbb9]/20 flex flex-col hover:-translate-y-2 transition-transform">
          <h3 className="text-2xl font-bold mb-2">Shield Elite</h3>
          <p className="text-[#3d4a3d] mb-6 text-sm">All-inclusive total home defense.</p>
          <div className="text-4xl font-extrabold mb-8" style={{ fontFamily: "var(--font-jakarta)" }}>$59<span className="text-lg font-normal text-[#3d4a3d]/60">/mo</span></div>
          <ul className="space-y-4 mb-12 flex-grow">
            {["Everything in Quarterly", "Mosquito & Tick Control", "Termite Monitoring", "Free Call-outs Anytime"].map((i) => (
              <li key={i} className="flex items-center gap-3 text-sm font-medium"><span className="material-symbols-outlined text-[#006e2f] text-xl">check_circle</span> {i}</li>
            ))}
          </ul>
          <button className="w-full py-4 rounded-xl border-2 border-[#006e2f] text-[#006e2f] font-bold hover:bg-[#006e2f]/5 transition-colors">Choose Plan</button>
        </div>
      </div>
    </section>
  );
}
