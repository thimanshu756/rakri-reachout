"use client";
export default function PestHero() {
  return (
    <section className="pt-32 pb-20 px-8 max-w-7xl mx-auto relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#4ae176]/10 -z-10 blur-3xl" style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }} />
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#006e2f]/10 text-[#006e2f] rounded-full text-xs font-bold tracking-wide" style={{ fontFamily: "var(--font-vietnam)" }}>
            <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
            LICENSED &amp; CERTIFIED • ECO-FRIENDLY • PET SAFE
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#131e19] leading-tight" style={{ fontFamily: "var(--font-jakarta)" }}>
            Take Back Your Home. Guaranteed.
          </h1>
          <p className="text-lg md:text-xl text-[#3d4a3d] leading-relaxed max-w-xl" style={{ fontFamily: "var(--font-vietnam)" }}>
            Experience peace of mind with our botanically-derived pest protection. We provide same-day service that&apos;s tough on pests but gentle on your family and pets.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-[#22c55e] text-[#004b1e] font-bold px-8 py-4 rounded-xl hover:scale-105 transition-all shadow-lg text-lg" style={{ fontFamily: "var(--font-jakarta)" }}>Get a Free Inspection</button>
            <button className="border-2 border-[#bccbb9] text-[#006e2f] font-bold px-8 py-4 rounded-xl hover:bg-[#eaf7ee] transition-all text-lg" style={{ fontFamily: "var(--font-jakarta)" }}>Call Us Today</button>
          </div>
          <div className="flex flex-wrap gap-6 pt-8 border-t border-[#bccbb9]/20">
            {[{ icon: "task_alt", text: "100% Satisfaction" }, { icon: "calendar_today", text: "Same-Day Service" }, { icon: "eco", text: "Botanical Solutions" }].map((b) => (
              <div key={b.text} className="flex items-center gap-2 text-sm font-semibold text-[#645d58]">
                <span className="material-symbols-outlined text-[#006e2f]">{b.icon}</span> {b.text}
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-[#b4f0c9]/30 -z-10 blur-2xl" style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }} />
          <div className="rounded-[40px] overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
            <img alt="Professional pest control technician" className="w-full h-[600px] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuASA91r7UedRjf8qexrg6nvrlVlTL_qusx5VBNJts1h6Z2qLnxzeY4L35RXeyAyDTrdNE525DQhiekGN02JtgrMYhh6Vk8owZYwXX0RI8rLDjymyoNSOm4DbQT1_ltgFv85i3JxbuqCGuEoJFkAz1SI1lthi-SyAT5kapR7rXPsstoH5V15Qpj2sbpDDYf3kCNanF9GmFsQ3IiB1N1JjQWER9IxUaEfyWPpVepqv9Lc1d-BAsfHnvGwmxOAPzb9ui0x7o6B38cv7IUm" />
          </div>
        </div>
      </div>
    </section>
  );
}
