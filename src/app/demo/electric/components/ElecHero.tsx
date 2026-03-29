"use client";

export default function ElecHero() {
  return (
    <header className="pt-32 pb-20 px-6 bg-[#fefce8]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div
            className="inline-flex items-center bg-[#eab308] text-[#604700] px-3 py-1 text-xs font-black uppercase tracking-[0.2em]"
            style={{ fontFamily: "var(--font-inter-elec)" }}
          >
            Master Licensed • 15+ Years
          </div>
          <h1
            className="text-6xl md:text-8xl font-black text-[#151c27] tracking-tighter leading-[0.9] uppercase"
            style={{ fontFamily: "var(--font-inter-elec)" }}
          >
            Safe. Reliable. <br />
            Always{" "}
            <span
              className="text-[#eab308]"
              style={{ textShadow: "0 0 15px rgba(234, 179, 8, 0.4)" }}
            >
              On.
            </span>
          </h1>
          <div className="h-1 w-24 bg-[#eab308]" />
          <p className="text-lg text-[#515f74] max-w-lg leading-relaxed">
            Premium electrical engineering for residential and commercial assets.
            We don&apos;t just wire buildings; we build infrastructure that lasts
            a lifetime.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button
              className="bg-[#eab308] text-[#604700] px-8 py-4 text-sm font-black uppercase tracking-widest hover:translate-y-[-2px] transition-transform shadow-lg shadow-[#eab308]/20"
              style={{ fontFamily: "var(--font-inter-elec)" }}
            >
              Book Service Call
            </button>
            <button
              className="border-2 border-[#151c27] text-[#151c27] px-8 py-4 text-sm font-black uppercase tracking-widest hover:bg-[#151c27] hover:text-white transition-all"
              style={{ fontFamily: "var(--font-inter-elec)" }}
            >
              24/7 Emergency Line
            </button>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#eab308] -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform" />
          <img
            alt="Electrician working"
            className="w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWWLhtPgWjE_9_7s8JqIRCAQm29b-EK6q_t-q-QlHykYcl0H4r2S2djHpwypt5sOxerKZGdqISUvwKagTz0e8NdvkBOT7wJMW4V6kTDzl1PkkZ0Lru1BOe7RHnTGo3EZdLL5ZIkFunNtACPqRPIcZb_2n41ogBcHwR0T3owqUVEiMHFZY90krmgu6z-Lj5R_bq1VuBALO4PDTmkSYVVecj2aYrwuWrvG-qNccuEUPfDGYm9fpDfdVWsbkiGRuOisw8byN251-NO44"
          />
          <div className="absolute bottom-0 left-0 bg-[#151c27] text-white p-6">
            <p
              className="text-xs tracking-widest text-[#eab308] mb-1"
              style={{ fontFamily: "var(--font-mono-elec)" }}
            >
              CURRENT PROJECT
            </p>
            <p className="font-bold text-sm">
              Industrial Panel Upgrade - Sector 7G
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
