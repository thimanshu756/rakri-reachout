"use client";

export default function RoofCTA({ phone = "(555) 010-9988" }: { phone?: string }) {
  return (
    <section className="relative bg-gradient-to-br from-[#9e2016] to-[#c0392b] text-white py-24 overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-24 bg-white"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 90%, 0% 100%)" }}
      />
      <div className="max-w-7xl mx-auto px-6 text-center pt-12">
        <h2
          className="text-5xl md:text-7xl uppercase mb-8 tracking-tighter"
          style={{ fontFamily: "var(--font-epilogue)" }}
        >
          STORM DAMAGE?
          <br />
          DON&apos;T WAIT.
        </h2>
        <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
          Get your roof protected before the next storm hits. Immediate emergency
          tarping and inspections available.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            className="bg-white text-[#9e2016] px-10 py-5 uppercase tracking-widest text-sm flex items-center justify-center gap-2 hover:bg-[#fbf9f6] transition-colors"
            href="tel:5550109988"
            style={{ fontFamily: "var(--font-epilogue)" }}
          >
            <span className="material-symbols-outlined">call</span> Call {phone}
          </a>
          <a
            className="border-2 border-white text-white px-10 py-5 uppercase tracking-widest text-sm hover:bg-white hover:text-[#9e2016] transition-all"
            href="#"
            style={{ fontFamily: "var(--font-epilogue)" }}
          >
            Schedule Inspection
          </a>
        </div>
      </div>
    </section>
  );
}
