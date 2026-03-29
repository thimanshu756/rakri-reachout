"use client";

const services = [
  { icon: "electric_bolt", title: "Panel Upgrades", desc: "Transition from outdated breaker boxes to high-capacity modern systems ready for smart home integration.", spec: "SPEC-001" },
  { icon: "cable", title: "Wiring & Rewiring", desc: "Full copper-standard rewiring to ensure fire safety and eliminate phantom power draws.", spec: "SPEC-002" },
  { icon: "light", title: "Lighting Installation", desc: "Architectural lighting design that emphasizes your home's structure while reducing energy waste.", spec: "SPEC-003" },
  { icon: "ev_station", title: "EV Charger Install", desc: "Level 2 charging stations installed with dedicated circuits for Tesla, Rivian, and all major EVs.", spec: "SPEC-004" },
  { icon: "nest_eco_leaf", title: "Smart Home Wiring", desc: "Seamless integration of smart switches, hubs, and automation for a responsive living environment.", spec: "SPEC-005" },
  { icon: "warning", title: "Emergency Repair", desc: "Rapid response for power loss, sparking outlets, or electrical storm damage 24/7/365.", spec: "SPEC-006" },
];

export default function ElecServices() {
  return (
    <section className="py-24 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="max-w-2xl">
            <p
              className="text-[#785a00] font-bold tracking-[0.3em] mb-4"
              style={{ fontFamily: "var(--font-mono-elec)" }}
            >
              01 / CAPABILITIES
            </p>
            <h2
              className="text-5xl font-black tracking-tighter uppercase leading-none"
              style={{ fontFamily: "var(--font-inter-elec)" }}
            >
              Electrical Services <br />
              You Can <span className="text-[#785a00]">Trust.</span>
            </h2>
          </div>
          <div className="h-[2px] flex-grow bg-slate-100 mx-8 hidden md:block" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-slate-100">
          {services.map((s) => (
            <div
              key={s.spec}
              className="group p-10 border border-slate-100 hover:bg-[#151c27] transition-colors duration-300"
            >
              <div className="w-10 h-10 bg-[#eab308]/10 flex items-center justify-center mb-8 group-hover:bg-[#eab308] transition-colors">
                <span className="material-symbols-outlined text-[#785a00] group-hover:text-[#151c27]">
                  {s.icon}
                </span>
              </div>
              <h3
                className="text-xl font-black mb-4 uppercase tracking-tighter group-hover:text-white"
                style={{ fontFamily: "var(--font-inter-elec)" }}
              >
                {s.title}
              </h3>
              <p className="text-[#515f74] text-sm group-hover:text-slate-400 mb-6">
                {s.desc}
              </p>
              <span
                className="text-xs text-[#785a00] group-hover:text-[#eab308]"
                style={{ fontFamily: "var(--font-mono-elec)" }}
              >
                {s.spec}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
