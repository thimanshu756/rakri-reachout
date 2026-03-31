"use client";
export default function PestContactForm({ phone = "(800) GREEN-01", city = "Portland, OR 97201" }: { phone?: string; city?: string }) {
  return (
    <section className="px-6 py-12 md:py-20 bg-[#eaf7ee]/50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-10 gap-12">
        {/* Form */}
        <div className="lg:col-span-6 bg-white rounded-2xl p-8 md:p-12 shadow-[0_12px_40px_rgba(5,46,22,0.04)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#22c55e]/5 rounded-full -mr-16 -mt-16" />
          <h2 className="text-2xl font-bold text-[#131e19] mb-8" style={{ fontFamily: "var(--font-jakarta)" }}>Schedule your visit</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[{ label: "Full Name", placeholder: "John Doe", type: "text" }, { label: "Email Address", placeholder: "john@example.com", type: "email" }].map((f) => (
                <div key={f.label} className="space-y-1">
                  <label className="text-xs font-bold text-[#4b4641] tracking-wider uppercase">{f.label}</label>
                  <input className="w-full bg-white border-0 border-b-2 border-[#4ae176]/30 py-3 px-0 text-[#131e19] placeholder:text-[#bccbb9] focus:ring-0 focus:border-[#006e2f] transition-colors" placeholder={f.placeholder} type={f.type} />
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[{ label: "Phone Number", placeholder: "(555) 000-0000", type: "tel" }, { label: "Zip Code", placeholder: "12345", type: "text" }].map((f) => (
                <div key={f.label} className="space-y-1">
                  <label className="text-xs font-bold text-[#4b4641] tracking-wider uppercase">{f.label}</label>
                  <input className="w-full bg-white border-0 border-b-2 border-[#4ae176]/30 py-3 px-0 text-[#131e19] placeholder:text-[#bccbb9] focus:ring-0 focus:border-[#006e2f] transition-colors" placeholder={f.placeholder} type={f.type} />
                </div>
              ))}
            </div>
            <div className="py-4 px-6 rounded-2xl bg-[#eaf7ee] border border-[#bccbb9]/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#22c55e]" style={{ fontVariationSettings: "'FILL' 1" }}>pets</span>
                <div>
                  <p className="text-sm font-bold text-[#131e19] leading-none">Do you have pets?</p>
                  <p className="text-xs text-[#3d4a3d] mt-1">We&apos;ll use our extra-gentle botanical formulas.</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input defaultChecked className="sr-only peer" type="checkbox" />
                <div className="w-11 h-6 bg-[#d9e6dd] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#22c55e]" />
              </label>
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-[#4b4641] tracking-wider uppercase">Service Notes</label>
              <textarea className="w-full bg-white border-0 border-b-2 border-[#4ae176]/30 py-3 px-0 text-[#131e19] placeholder:text-[#bccbb9] focus:ring-0 focus:border-[#006e2f] transition-colors" placeholder="Tell us more about the issue..." rows={3} />
            </div>
            <button className="w-full py-4 bg-[#22c55e] text-[#004b1e] rounded-2xl font-bold text-lg shadow-lg shadow-[#22c55e]/20 hover:scale-[1.02] active:scale-95 transition-all" style={{ fontFamily: "var(--font-jakarta)" }} type="submit">Request Inspection</button>
          </form>
        </div>
        {/* Info Cards */}
        <div className="lg:col-span-4 space-y-6">
          {[
            { icon: "call", label: "Call us", val: phone, sub: "Mon - Fri, 8am - 6pm" },
            { icon: "mail", label: "Email us", val: "hello@greenshield.com", sub: "Response within 2 hours" },
            { icon: "location_on", label: "Visit Laboratory", val: city, sub: "" },
          ].map((c) => (
            <div key={c.label} className="bg-white p-6 rounded-2xl shadow-sm border border-[#bccbb9]/10 flex items-start gap-4 hover:bg-[#eaf7ee] transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#b4f0c9]/40 flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-[#006e2f]">{c.icon}</span>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#645d58] mb-1">{c.label}</p>
                <p className="text-lg font-bold text-[#131e19]">{c.val}</p>
                <p className="text-sm text-[#3d4a3d]">{c.sub}</p>
              </div>
            </div>
          ))}
          <div className="bg-[#006e2f]/5 p-8 rounded-2xl border border-[#006e2f]/10">
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-[#006e2f]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              <span className="font-bold text-[#006e2f]" style={{ fontFamily: "var(--font-jakarta)" }}>Green Guarantee</span>
            </div>
            <p className="text-sm text-[#3d4a3d] leading-relaxed">If pests return between treatments, we&apos;ll re-service your home for free. That&apos;s our promise to your family.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
