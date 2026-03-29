"use client";
const steps = [
  { num: "1", title: "Free Inspection", desc: "Our experts perform a 40-point home scan to identify existing infestations and high-risk entry points." },
  { num: "2", title: "Custom Plan", desc: "We develop a treatment protocol tailored to your home's architecture and the local climate ecosystem." },
  { num: "3", title: "Ongoing Protection", desc: "Regular seasonal treatments ensure a permanent barrier against pests as the weather and threats change." },
];
export default function PestProcess() {
  return (
    <section className="py-24 px-8 bg-[#e4f1e8] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-[#131e19]" style={{ fontFamily: "var(--font-jakarta)" }}>The GreenShield Journey</h2>
          <p className="mt-4 text-[#3d4a3d]">Three simple steps to a pest-free sanctuary.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-16 relative z-10">
          {steps.map((s) => (
            <div key={s.num} className="text-center space-y-6">
              <div className="w-20 h-20 bg-[#006e2f] rounded-full mx-auto flex items-center justify-center text-white text-3xl font-bold shadow-xl border-4 border-white">{s.num}</div>
              <h3 className="text-2xl font-bold">{s.title}</h3>
              <p className="text-[#3d4a3d] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
