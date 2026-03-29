"use client";

const faqs = [
  { q: "How quickly can a technician arrive?", a: "[RESPONSE]: For emergencies, we aim for < 60 mins. Standard service requests are usually handled within 24-48 hours.", expanded: true },
  { q: "Are your estimates guaranteed?", expanded: false },
  { q: "Do you handle commercial projects?", expanded: false },
];

export default function ElecContactFAQ() {
  return (
    <section
      className="bg-[#151c27] py-24 relative overflow-hidden"
      style={{
        backgroundImage: "radial-gradient(#eab308 0.5px, transparent 0.5px), linear-gradient(to right, #eab308 0.5px, transparent 0.5px), linear-gradient(to bottom, #eab308 0.5px, transparent 0.5px)",
        backgroundSize: "20px 20px",
      }}
    >
      <div className="absolute inset-0 bg-[#151c27]/92" />
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-[#eab308] text-4xl font-black uppercase tracking-tighter" style={{ fontFamily: "var(--font-inter-elec)" }}>Common Questions</h2>
          <div className="w-24 h-1 bg-[#eab308] mx-auto mt-4" />
        </div>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#1a2333] border-l-2 border-[#eab308] p-6">
              <div className="flex justify-between items-center cursor-pointer">
                <span className="text-white font-bold uppercase tracking-tight">{faq.q}</span>
                <span className="material-symbols-outlined text-[#eab308]">expand_more</span>
              </div>
              {faq.a && (
                <p className="mt-4 text-slate-400 text-sm border-t border-slate-700 pt-4" style={{ fontFamily: "var(--font-mono-elec)" }}>
                  <span className="text-[#eab308]">[RESPONSE]:</span> {faq.a.replace("[RESPONSE]: ", "")}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
