"use client";
const items = [
  { icon: "family_restroom", title: "Family Safety", desc: "Formulas designed for homes with curious kids and playful pets." },
  { icon: "eco", title: "Eco-Friendly", desc: "Planet-positive ingredients that are tough on pests but kind to nature." },
  { icon: "schedule", title: "Same-Day Service", desc: "In most cases, we can be at your door within hours of your call." },
  { icon: "verified", title: "Guaranteed Result", desc: "If the bugs come back, so do we — at no additional cost to you." },
];
export default function PestContactTrust() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#131e19] mb-4" style={{ fontFamily: "var(--font-jakarta)" }}>A safer way to stay pest-free</h2>
        <p className="text-[#645d58] max-w-2xl mx-auto">We combine modern entomology with natural botanical extracts to protect what matters most.</p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((i) => (
          <div key={i.title} className="bg-white p-8 rounded-2xl border border-[#bccbb9]/10 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-[#b4f0c9]/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="material-symbols-outlined text-[#006e2f] text-3xl">{i.icon}</span>
            </div>
            <h3 className="font-bold text-[#131e19] mb-3" style={{ fontFamily: "var(--font-jakarta)" }}>{i.title}</h3>
            <p className="text-sm text-[#3d4a3d] leading-relaxed">{i.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
