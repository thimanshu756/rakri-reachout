"use client";

export default function PlumbingContactHero({ phone = "(800) 555-ROYAL" }: { phone?: string }) {
  return (
    <section className="relative pt-40 pb-20 px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#7E5700]/5 via-transparent to-transparent opacity-50" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <span
            className="material-symbols-outlined text-[#7E5700] text-4xl"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            local_florist
          </span>
        </div>

        <h1
          className="font-extrabold text-5xl md:text-6xl tracking-tight text-[#011545] uppercase mb-6 leading-tight"
          style={{ fontFamily: "var(--font-manrope)" }}
        >
          Get In Touch
        </h1>
        <p
          className="text-[#45464F] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Available 24/7 for emergencies. Describe your plumbing issue and
          we&apos;ll respond within 30 minutes.
        </p>

        {/* Emergency Card */}
        <div className="inline-flex flex-col md:flex-row items-center gap-8 bg-[#011545] p-8 rounded-xl border-2 border-[#7E5700] shadow-2xl hover:scale-[1.01] transition-transform duration-300">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-[#7E5700]/10 flex items-center justify-center border border-[#7E5700]/30">
              <span
                className="material-symbols-outlined text-[#7E5700] text-3xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                call
              </span>
            </div>
            <div className="text-left">
              <p
                className="text-[#7E5700] font-bold tracking-widest text-xs mb-1 uppercase"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                Plumbing Emergency?
              </p>
              <p
                className="text-white font-extrabold text-2xl tracking-tighter"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                {phone}
              </p>
            </div>
          </div>
          <button
            className="bg-[#7E5700] text-white px-10 py-4 rounded-lg font-bold uppercase text-sm tracking-widest hover:brightness-110 active:scale-95 transition-all shadow-lg"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            Call Now
          </button>
        </div>
      </div>
    </section>
  );
}
