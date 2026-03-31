"use client";
export default function PestContactCTA({ phone = "(800) GREEN-01" }: { phone?: string }) {
  return (
    <section className="px-6 py-20 bg-[#f0fdf4]">
      <div className="max-w-5xl mx-auto rounded-[40px] bg-[#22c55e] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-[#22c55e]/30">
        <div className="absolute -top-24 -left-24 w-64 h-64 border-[40px] border-white/10 rounded-full" />
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full" />
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8 relative z-10" style={{ fontFamily: "var(--font-jakarta)" }}>Ready for a pest-free home?</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
          <button className="px-10 py-5 bg-white text-[#006e2f] font-extrabold rounded-full hover:scale-105 transition-transform active:scale-95 shadow-xl" style={{ fontFamily: "var(--font-jakarta)" }}>Schedule Online</button>
          <button className="px-10 py-5 bg-[#006e2f]/20 text-white border border-white/30 font-extrabold rounded-full backdrop-blur-sm hover:bg-[#006e2f]/30 transition-all active:scale-95" style={{ fontFamily: "var(--font-jakarta)" }}>Call {phone}</button>
        </div>
      </div>
    </section>
  );
}
