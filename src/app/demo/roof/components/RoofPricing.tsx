"use client";

export default function RoofPricing() {
  return (
    <section className="py-24 bg-white" id="pricing">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span
            className="text-[#9e2016] text-xs tracking-widest uppercase mb-4 block"
            style={{ fontFamily: "var(--font-epilogue)" }}
          >
            INVESTMENT
          </span>
          <h2
            className="text-4xl md:text-5xl text-[#1b1c1a] uppercase tracking-tight"
            style={{ fontFamily: "var(--font-epilogue)" }}
          >
            TRANSPARENT PRICING
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Inspection */}
          <div className="bg-[#f5f3f0] p-10 flex flex-col items-center text-center">
            <h3
              className="text-xl mb-6 uppercase tracking-widest"
              style={{ fontFamily: "var(--font-epilogue)" }}
            >
              INSPECTION
            </h3>
            <p
              className="text-5xl text-[#151c27] mb-6"
              style={{ fontFamily: "var(--font-epilogue)" }}
            >
              FREE
            </p>
            <ul className="space-y-4 mb-10 text-[#585f6b] text-sm">
              <li>50-Point Inspection</li>
              <li>Digital Photo Report</li>
              <li>Satellite Measurement</li>
              <li>Insurance Consultation</li>
            </ul>
            <button
              className="w-full border-2 border-[#151c27] text-[#151c27] py-3 text-xs uppercase tracking-widest hover:bg-[#151c27] hover:text-white transition-all"
              style={{ fontFamily: "var(--font-epilogue)" }}
            >
              Book Free
            </button>
          </div>

          {/* Repair - Popular */}
          <div className="bg-[#151c27] p-10 flex flex-col items-center text-center relative overflow-hidden">
            <div
              className="absolute top-8 -right-8 bg-[#9e2016] text-white text-[10px] tracking-widest px-10 py-1 rotate-45"
              style={{ fontFamily: "var(--font-epilogue)" }}
            >
              POPULAR
            </div>
            <h3
              className="text-xl mb-6 uppercase tracking-widest text-white"
              style={{ fontFamily: "var(--font-epilogue)" }}
            >
              REPAIR
            </h3>
            <p
              className="text-5xl text-[#9e2016] mb-6"
              style={{ fontFamily: "var(--font-epilogue)" }}
            >
              <span className="text-lg text-slate-400">From</span> $299
            </p>
            <ul className="space-y-4 mb-10 text-slate-400 text-sm">
              <li>Shingle Replacement</li>
              <li>Leak Detection</li>
              <li>Flashing Repair</li>
              <li>Pipe Boot Seal</li>
            </ul>
            <button
              className="w-full bg-[#9e2016] text-white py-3 text-xs uppercase tracking-widest hover:bg-[#c0392b] transition-all"
              style={{ fontFamily: "var(--font-epilogue)" }}
            >
              Schedule Now
            </button>
          </div>

          {/* Replacement */}
          <div className="bg-[#f5f3f0] p-10 flex flex-col items-center text-center">
            <h3
              className="text-xl mb-6 uppercase tracking-widest"
              style={{ fontFamily: "var(--font-epilogue)" }}
            >
              REPLACEMENT
            </h3>
            <p
              className="text-5xl text-[#151c27] mb-6"
              style={{ fontFamily: "var(--font-epilogue)" }}
            >
              <span className="text-lg text-[#585f6b]">From</span> $4,999
            </p>
            <ul className="space-y-4 mb-10 text-[#585f6b] text-sm">
              <li>Lifetime Warranty</li>
              <li>Full Debris Removal</li>
              <li>Synthetic Underlayment</li>
              <li>Permit Management</li>
            </ul>
            <button
              className="w-full border-2 border-[#151c27] text-[#151c27] py-3 text-xs uppercase tracking-widest hover:bg-[#151c27] hover:text-white transition-all"
              style={{ fontFamily: "var(--font-epilogue)" }}
            >
              Get Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
