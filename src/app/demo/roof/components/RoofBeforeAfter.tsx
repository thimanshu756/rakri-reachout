"use client";

export default function RoofBeforeAfter() {
  return (
    <section className="py-24 bg-[#f5f3f0]" id="projects">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Images */}
        <div className="space-y-6">
          <div className="relative group">
            <div
              className="absolute top-4 left-4 z-20 bg-[#151c27] text-white px-3 py-1 text-[10px] tracking-widest uppercase"
              style={{ fontFamily: "var(--font-epilogue)" }}
            >
              BEFORE
            </div>
            <img
              alt="Damaged roof"
              className="w-full h-64 object-cover grayscale brightness-50"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwR3lAqUTw9so1R6xgjJChGK_2ltzMquTbva2BWFTFzXcc-zEfk9O-j_S_VaLPW227wR-znVUWF77_7jVInqL9ThgOc89VWdmevIlDSgFPeQEMnwXQudwhnAbWicumYC-DEOeN-bLUtg2lm8lD5qr34H0CYTpioT1BgCUTuVU4_S31k5ZhZAogkbImTp54fvNx3QBqu3nJEeIx-6sLUf96sg_SYRK1NowC4ntomKMESl_Q6-7NWv2ykkjlPDFIldg-XrZ4c1LyVEY"
            />
          </div>
          <div className="relative group">
            <div
              className="absolute top-4 left-4 z-20 bg-[#9e2016] text-white px-3 py-1 text-[10px] tracking-widest uppercase"
              style={{ fontFamily: "var(--font-epilogue)" }}
            >
              AFTER
            </div>
            <img
              alt="Repaired roof"
              className="w-full h-96 object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxINVqawxReoXga45iS5-6zNK_7OU7ApiKxJKreJKtZvFVttB1PN6RdwOT_YPckXqGqGmV6UtjWtjYZBWE6xG6bj95XNUYORjS7CMdgvbtQYZNU9BzF8wgp9Lcm41H6v1-bdSVDcpvBirz16Ub0DOOp5CFhAj0yrf8xIx5JKr1ylQGokoNQv5GtjzxtS9yKNYbExODjnlZRTLyGfX7ZmumiWH6-z8ULmKANG_5sMWCsonCusiDV2ChRUwWMf0R5oMbMWICAMqwwCA"
            />
            {/* Roof accent line */}
            <span className="absolute top-0 right-0 w-10 h-[3px] bg-[#9e2016] -rotate-3" />
          </div>
        </div>

        {/* Text */}
        <div>
          <span
            className="text-[#9e2016] text-xs tracking-widest uppercase mb-4 block"
            style={{ fontFamily: "var(--font-epilogue)" }}
          >
            CASE STUDY: HIGHLAND ESTATES
          </span>
          <h2
            className="text-4xl md:text-5xl text-[#1b1c1a] uppercase tracking-tight mb-8"
            style={{ fontFamily: "var(--font-epilogue)" }}
          >
            RESTORED TO PERFECTION
          </h2>
          <div className="grid grid-cols-2 gap-8 mb-10">
            {[
              { val: "3 Days", label: "Installation Time" },
              { val: "50-Year", label: "Full Warranty" },
              { val: "$0", label: "Out of Pocket" },
              { val: "130 MPH", label: "Wind Rating" },
            ].map((s) => (
              <div key={s.label}>
                <p
                  className="text-[#9e2016] text-3xl mb-1"
                  style={{ fontFamily: "var(--font-epilogue)" }}
                >
                  {s.val}
                </p>
                <p className="text-xs font-bold text-[#585f6b] uppercase tracking-widest">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
          <p className="text-[#585f6b] leading-relaxed mb-8">
            Following a severe windstorm, this 3,500 sq ft residence required a
            full system replacement. StrongRoof managed the entire claim process,
            securing 100% coverage for the homeowner while upgrading the shingles
            to Class 4 impact resistance.
          </p>
          <button
            className="bg-[#151c27] text-white px-8 py-4 tracking-widest uppercase text-sm active:scale-95 transition-transform"
            style={{ fontFamily: "var(--font-epilogue)" }}
          >
            See More Results
          </button>
        </div>
      </div>
    </section>
  );
}
