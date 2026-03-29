"use client";
const stats = [
  { val: "300+", label: "Homes Protected" },
  { val: "4.8", label: "Google Rating" },
  { val: "15yr", label: "Service History" },
  { val: "24h", label: "Average Response" },
];
const testimonials = [
  { text: "I was worried about my toddlers and cats, but GreenShield used botanical sprays that smelled like cedar and cleared up our ant problem in one visit.", initials: "SM", name: "Sarah Miller", role: "Homeowner, Portland", scale: false },
  { text: "Their quarterly service is the best investment we've made. No more summer mosquito invasions or winter rodent scares. Professional and punctual.", initials: "JD", name: "James Davis", role: "Business Owner", scale: true },
  { text: "We had a recurring wasp problem that three other companies couldn't fix. GreenShield found the hidden nest in our siding and it's been gone for months.", initials: "RT", name: "Rebecca Thompson", role: "Seattle Resident", scale: false },
];
export default function PestSocialProof() {
  return (
    <section className="bg-[#004b1e] py-24 px-8 text-white" id="results">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-4xl font-extrabold text-[#6bff8f] mb-2" style={{ fontFamily: "var(--font-jakarta)" }}>{s.val}</div>
              <div className="text-emerald-100/60 text-sm uppercase" style={{ fontFamily: "var(--font-vietnam)" }}>{s.label}</div>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className={`bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 ${t.scale ? "scale-105 shadow-2xl z-10" : ""}`}>
              <div className="flex gap-1 text-[#6bff8f] mb-6">
                {Array.from({ length: 5 }).map((_, i) => (<span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>))}
              </div>
              <p className="text-lg italic leading-relaxed text-emerald-50 mb-8">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#d9e6dd] flex items-center justify-center text-[#006e2f] font-bold">{t.initials}</div>
                <div>
                  <div className="font-bold">{t.name}</div>
                  <div className="text-sm text-emerald-100/60">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
