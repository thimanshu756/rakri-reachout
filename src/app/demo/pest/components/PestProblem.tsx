"use client";
const stats = [
  { val: "$5B", title: "Annual Termite Damage", desc: "Termites cause more damage to American homes than fires, floods, and storms combined every single year." },
  { val: "33", title: "Types of Bacteria", desc: "Common cockroaches carry 33 kinds of bacteria, six kinds of parasitic worms, and at least seven other pathogens." },
  { val: "75/Day", title: "Rodent Droppings", desc: "A single mouse can produce up to 75 droppings in just 24 hours, contaminating your food and living spaces rapidly." },
];
export default function PestProblem() {
  return (
    <section className="bg-[#004b1e] py-24 px-8 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "var(--font-jakarta)" }}>The Real Cost of Pest Neglect</h2>
          <p className="text-emerald-100/70 max-w-2xl mx-auto">Early intervention is the only way to protect your biggest investment from invisible threats.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((s) => (
            <div key={s.title} className="bg-white/5 backdrop-blur-sm p-10 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors group">
              <div className="text-5xl font-extrabold text-[#6bff8f] mb-4 group-hover:scale-110 transition-transform" style={{ fontFamily: "var(--font-jakarta)" }}>{s.val}</div>
              <h3 className="text-xl font-bold mb-2">{s.title}</h3>
              <p className="text-emerald-50/60 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
