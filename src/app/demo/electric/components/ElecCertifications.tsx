"use client";

export default function ElecCertifications() {
  return (
    <section className="py-12 bg-[#fefce8] border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6 overflow-hidden">
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
          {[
            { icon: "verified", label: "OSHA Certified" },
            { icon: "shield", label: "$2M Insured" },
            { icon: "history_edu", label: "Master Licensed" },
            { icon: "workspace_premium", label: "5-Star BBB" },
          ].map((c) => (
            <div key={c.label} className="flex items-center gap-2 font-black uppercase text-xs tracking-widest">
              <span className="material-symbols-outlined">{c.icon}</span> {c.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
