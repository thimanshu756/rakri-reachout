"use client";

export default function ElecContactForm() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-12">
        {/* Form */}
        <div className="lg:col-span-6 bg-white p-8 rounded-xl shadow-[0_4px_16px_rgba(15,23,42,0.08)]">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-1 h-8 bg-[#eab308]" />
            <h2 className="text-2xl font-black uppercase tracking-tight" style={{ fontFamily: "var(--font-inter-elec)" }}>Service Inquiry</h2>
          </div>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-[10px] uppercase text-[#515f74] tracking-widest font-bold" style={{ fontFamily: "var(--font-mono-elec)" }}>Full Name</label>
                <input className="w-full bg-[#fefce8] border-none focus:ring-2 focus:ring-[#eab308] p-4 font-bold text-[#151c27]" placeholder="Enter name" type="text" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase text-[#515f74] tracking-widest font-bold" style={{ fontFamily: "var(--font-mono-elec)" }}>Email Address</label>
                <input className="w-full bg-[#fefce8] border-none focus:ring-2 focus:ring-[#eab308] p-4 font-bold text-[#151c27]" placeholder="email@provider.com" type="email" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-[10px] uppercase text-[#515f74] tracking-widest font-bold" style={{ fontFamily: "var(--font-mono-elec)" }}>Service Needed</label>
                <select className="w-full bg-[#fefce8] border-none focus:ring-2 focus:ring-[#eab308] p-4 font-bold text-[#151c27]">
                  <option>Residential Repair</option>
                  <option>Commercial Upgrade</option>
                  <option>Panel Replacement</option>
                  <option>EV Charger Install</option>
                  <option>Emergency Service</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase text-[#515f74] tracking-widest font-bold" style={{ fontFamily: "var(--font-mono-elec)" }}>Phone Number</label>
                <input className="w-full bg-[#fefce8] border-none focus:ring-2 focus:ring-[#eab308] p-4 font-bold text-[#151c27]" placeholder="(000) 000-0000" type="tel" />
              </div>
            </div>
            <div className="space-y-4 pt-4 border-t border-[#e7eefe]">
              <div className="flex items-center justify-between">
                <label className="font-bold uppercase tracking-tight">Is This an Emergency?</label>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input className="sr-only peer" type="checkbox" />
                  <div className="w-11 h-6 bg-[#e7eefe] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#eab308]" />
                </label>
              </div>
              <p className="text-xs text-[#785a00] font-bold" style={{ fontFamily: "var(--font-mono-elec)" }}>FOR URGENT ELECTRICAL ISSUES, CALL OUR EMERGENCY LINE IMMEDIATELY.</p>
            </div>
            <div className="space-y-1">
              <label className="text-[10px] uppercase text-[#515f74] tracking-widest font-bold" style={{ fontFamily: "var(--font-mono-elec)" }}>Message Details</label>
              <textarea className="w-full bg-[#fefce8] border-none focus:ring-2 focus:ring-[#eab308] p-4 font-bold text-[#151c27]" placeholder="Describe the project or issue..." rows={4} />
            </div>
            <button className="w-full bg-[#eab308] py-5 font-black uppercase tracking-widest text-[#151c27] hover:opacity-90 transition-all" type="submit">
              Submit Request
            </button>
          </form>
        </div>

        {/* Info Cards */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          {[
            { header: "Phone", icon: "call", content: <><p className="text-2xl font-bold text-[#151c27]" style={{ fontFamily: "var(--font-mono-elec)" }}>(800) 555-8658</p><p className="text-xs text-[#515f74] mt-1">Direct access to master technicians.</p></> },
            { header: "Email", icon: "mail", content: <><p className="text-xl font-bold text-[#151c27]" style={{ fontFamily: "var(--font-mono-elec)" }}>dispatch@powerline.pro</p><p className="text-xs text-[#515f74] mt-1">Response within 60 minutes.</p></> },
            { header: "Headquarters", icon: "location_on", content: <><p className="font-bold text-[#151c27]">1200 Industrial Circuit Blvd</p><p className="text-sm text-[#515f74]">Suite 405, Austin, TX 78701</p></> },
            { header: "Operational Hours", icon: "schedule", content: <div className="flex flex-col gap-2" style={{ fontFamily: "var(--font-mono-elec)" }}><div className="flex justify-between text-sm"><span className="text-[#515f74]">MON-FRI</span><span className="font-bold">07:00 - 19:00</span></div><div className="flex justify-between text-sm"><span className="text-[#515f74]">SAT-SUN</span><span className="font-bold text-[#eab308]">EMERGENCY ONLY</span></div></div> },
          ].map((card) => (
            <div key={card.header} className="bg-white rounded-lg shadow-sm border border-[#e7eefe] overflow-hidden">
              <div className="bg-[#151c27] py-2 px-4 flex justify-between items-center">
                <span className="text-[10px] text-[#eab308] font-black tracking-widest uppercase" style={{ fontFamily: "var(--font-mono-elec)" }}>{card.header}</span>
                <span className="material-symbols-outlined text-white text-sm">{card.icon}</span>
              </div>
              <div className="p-6">{card.content}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
