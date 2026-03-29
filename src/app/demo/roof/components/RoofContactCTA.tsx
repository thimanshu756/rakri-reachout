"use client";

export default function RoofContactCTA() {
  return (
    <section
      className="bg-[#9e2016] pt-24 pb-20 relative overflow-hidden"
      style={{ clipPath: "polygon(0 8%, 100% 0, 100% 100%, 0 100%)" }}
    >
      <div className="max-w-screen-xl mx-auto px-8 relative z-10 text-center">
        <h2
          className="text-4xl md:text-6xl text-white uppercase leading-none mb-8 tracking-tighter"
          style={{ fontFamily: "var(--font-epilogue)" }}
        >
          DON&apos;T WAIT —<br />
          PROTECT YOUR HOME TODAY
        </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button
            className="bg-white text-[#9e2016] py-4 px-10 uppercase text-sm tracking-widest hover:bg-[#f5f3f0] transition-all"
            style={{ fontFamily: "var(--font-epilogue)" }}
          >
            Call Now
          </button>
          <button
            className="border-2 border-white text-white py-4 px-10 uppercase text-sm tracking-widest hover:bg-white/10 transition-all"
            style={{ fontFamily: "var(--font-epilogue)" }}
          >
            Schedule Inspection
          </button>
        </div>
      </div>
      {/* Background texture */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent" />
    </section>
  );
}
