"use client";

export default function RoofHero() {
  return (
    <section className="relative min-h-[921px] flex items-center pt-24 pb-12 overflow-hidden bg-[#fbf9f6]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="z-10">
          <span
            className="inline-block px-4 py-1.5 bg-[#c0392b]/10 text-[#9e2016] text-xs tracking-widest uppercase mb-6 border-l-4 border-[#9e2016]"
            style={{ fontFamily: "var(--font-epilogue)" }}
          >
            LICENSED &amp; BONDED
          </span>
          <h1
            className="text-5xl md:text-7xl leading-none text-[#1b1c1a] mb-6 tracking-tighter"
            style={{ fontFamily: "var(--font-epilogue)" }}
          >
            YOUR ROOF.
            <br />
            YOUR <span className="text-[#9e2016]">SHIELD.</span>
            <br />
            OUR EXPERTISE.
          </h1>
          <p
            className="text-lg text-[#585f6b] mb-10 max-w-md leading-relaxed"
            style={{ fontFamily: "var(--font-inter-roof)" }}
          >
            Premium architectural roofing systems engineered for the harshest
            climates. We don&apos;t just repair; we reinforce your legacy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button
              className="bg-[#9e2016] text-white px-8 py-4 tracking-widest uppercase text-sm shadow-xl active:scale-95 transition-transform"
              style={{ fontFamily: "var(--font-epilogue)" }}
            >
              Get a Quote
            </button>
            <button
              className="border-2 border-[#151c27] text-[#151c27] px-8 py-4 tracking-widest uppercase text-sm hover:bg-[#151c27] hover:text-white transition-all"
              style={{ fontFamily: "var(--font-epilogue)" }}
            >
              View Gallery
            </button>
          </div>
          <div className="flex items-center gap-8 opacity-60 grayscale">
            <img
              alt="BBB Accredited"
              className="h-8 object-contain"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfKs4GT3k4QnK9l1m4xbTiEC9rQM4i_q7WGeu7NIFwcNTV0nHeuwruxi7kAU8x-sGCsPI8JL63VfxNpJxKQVy81NzPJLnPFqUc8OtqfF6NEU1p6P6ik3Pbc7fU9bOxvpU5CvTzVupso4G6KpGSO17hDwiM3NObJYGAzFwXI06r6fRKS8ryeZLJmI04jdjE8AxcmqC4NdAkhts8QGul1PnwWhuERXZl1LEy_ZM0bFlNIO5I3ZsfFfNEPQgvNnBWP8iSxepP9SKZ-nQ"
            />
            <img
              alt="GAF Master Elite"
              className="h-10 object-contain"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAW7T_cGqvp9X8Jl9bCdHy4EAxAR-7labL7u9dMDeu4ioGEtrNdoIPDBloVUoI-2-zmpsLQR1juy5a14rKlzis8hfA89o56GxvpMKHp5ROSxeQMTdB2L731Qb3khzrc20-Fbo6uITwr5rCSPfQimb6VpsWzT-CoR5cYnwNU8P1424mLFEvK2G_GVh4C0uR_XyCcfoQe2gXSxY7x8xx-mMAxW-TpYXKqWWHK0PSQChn-EZPoGYXRworAxMQOIRriXbzak1MWzx5Jglg"
            />
          </div>
        </div>
        <div className="relative">
          <div
            className="relative z-10 w-full aspect-[4/5] bg-slate-200 overflow-hidden shadow-2xl"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 90%, 0% 100%)",
            }}
          >
            <img
              alt="Roofer at work"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaPJ6Mx5NlNJ5GBE246eAE2nGysRpxteF54PBTePVkUI5maRWuoErHajDpNDaTbBR8oqwl1SHhAc7lZS3SBwj7DJRXwE14JaUax0I4NVFbeGZoxaiAlVslAcKagwKhK3KoVl4DhvyVnfaXKiPS7504YhHgKyqgvXrRsMuZZysRZnTm1bn17x6pGs1a6lsoY1DZscnwy_WY-7ZXJl14aZGu8bAlIMh-mHrcmhir4yxNhvmqwvnIrbj26szVIcgTDNLn0eFitSkr5hc"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#f5f3f0] -z-0" />
          <div className="absolute top-1/2 -right-4 w-1 h-32 bg-[#9e2016]" />
        </div>
      </div>
    </section>
  );
}
