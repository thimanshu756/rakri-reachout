"use client";

const steps = [
  { num: "01", title: "Call or Text", desc: "Immediate dispatch and scheduling within 24 hours for standard calls." },
  { num: "02", title: "Inspect & Quote", desc: "We provide a precise, itemized breakdown before a single tool is lifted." },
  { num: "03", title: "Done Right", desc: "Professional execution followed by a 20-point safety check and site cleanup.", filled: true },
];

export default function ElecProcess() {
  return (
    <section className="py-24 bg-[#fefce8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-0 relative">
          <div className="hidden md:block absolute top-12 left-0 w-full h-[2px] bg-slate-200 -z-10" />
          {steps.map((s) => (
            <div key={s.num} className="p-8 text-center space-y-4">
              <div
                className={`w-16 h-16 ${s.filled ? "bg-[#eab308]" : "bg-white border-2 border-[#eab308]"} flex items-center justify-center mx-auto text-xl font-black relative z-10`}
                style={{ fontFamily: "var(--font-mono-elec)" }}
              >
                {s.num}
              </div>
              <h3
                className="text-xl font-black uppercase tracking-tighter"
                style={{ fontFamily: "var(--font-inter-elec)" }}
              >
                {s.title}
              </h3>
              <p className="text-[#515f74] text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
