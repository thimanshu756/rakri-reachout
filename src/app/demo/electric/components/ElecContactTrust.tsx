"use client";

const items = [
  { icon: "verified_user", title: "Master Licensed", desc: "Certified experts for every voltage level and complexity." },
  { icon: "rule", title: "100% Code Pass", desc: "Every installation exceeds municipal safety requirements." },
  { icon: "monetization_on", title: "Upfront Pricing", desc: "No hidden surcharges. Transparent technical estimates." },
  { icon: "emergency", title: "24/7 Emergency", desc: "Rapid response fleet active throughout the city." },
];

export default function ElecContactTrust() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(#eab308 0.5px, transparent 0.5px), linear-gradient(to right, #eab308 0.5px, transparent 0.5px), linear-gradient(to bottom, #eab308 0.5px, transparent 0.5px)", backgroundSize: "20px 20px", opacity: 0.03 }} />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <div className="w-16 h-2 bg-[#eab308] mb-4" />
          <h2 className="text-4xl font-black text-[#151c27] uppercase tracking-tighter leading-tight" style={{ fontFamily: "var(--font-inter-elec)" }}>Why Homeowners Trust Us</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item) => (
            <div key={item.title} className="bg-[#151c27] p-8 rounded-lg border-t-4 border-[#eab308] transition-all hover:-translate-y-2">
              <span className="material-symbols-outlined text-[#eab308] text-4xl mb-4">{item.icon}</span>
              <h4 className="text-white font-black uppercase text-lg mb-2">{item.title}</h4>
              <p className="text-slate-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
