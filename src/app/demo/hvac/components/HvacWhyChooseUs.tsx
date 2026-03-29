"use client";

const advantages = [
  {
    title: "Your Comfort, Our Commitment",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAqiMonGqUicRlxtKoB-xX-hWGX-P9M_cltaPaEhdLAwmK4ox5QbYW91YoUqHRhJu1DDNfpXst4m-9LHrv4PKpg8kH-WbJjqQReJfkcbwxwJGK0xU2zfBjagJ4JlJEiE29H6bDeszUxZl2du3XeN816twY6rfSya4JVf0hTdMm6fzvUXXIL_QwU4rfXHJtFw_cBv8z3W1KDtfxaaKJOd1X2wd7P9fuDc_YffCL6sK9Yhu68Hm7gDfQsff1ndxe8TYE4mSeY6tQsWE2J",
  },
  {
    title: "Experience Comfort Like Never",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4Qdohjf7-df47WXivApboKipgesIwFHw_82aZjzBWQa4-TEE2Hq447zMHCLRBjx2d06NuiYO_AEsa147KiA3wfuHtXJ2HDOZLlOYqPaQumPnh4pckVvPg0ojKnzwKYukfp-p9DbFkv5mdE-vwmdZwfEXlGhL8X4o8z3nK1K6YliEIMQZt-fHQv46U8ioh5LUPGEKAyMb4ikctZuPsA-c6kF3jrmd6z4dvSEiGHMF0Z0sCU6aa7zNKidBYvWjsFnNRbYVUxBlvs32z",
  },
  {
    title: "Smart Comfort For Every Season",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMWkDfkZXHL8auPOyma90fzmwNlU6aeiJ8xp1gfXjFhZ9JfIY8x-dNnn0gJK2FxQ_zPCq18Ni2jkLjUm5iHIyLOFb1H6oveccyICIaxVm1t9beiFk-0EfS-N-8VoUI5O4c0JaloiBob60G1XSOKABRfMkFKVYlkvlDVjxXDAC5t8fDKJ7IDSndu9ocljp7sJsX-5ZEEVym2T2Wfo-Zxq54ONF8jhrvhdOhrbfYCNtY_7uYu-UPrIrIOS38x8m0LqlcCQhwacoDD1f",
  },
  {
    title: "Energy Efficient Solutions",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlRihllP-v1uzNkGyJHEOiIF9JvGZ22v2Uobsw74fqDGFq4w0lTxr_yY6nmHKB2nGC4ck1x4kKE0_LumMs5Gedl2sGgbF7uSiu3ONS63pmWQUG2YfbPebexQ4haXU8WLeQxjPVmF82DKt_71s-3_aitAmrg0ZQVdDnQhELQcbtEOzKh8ccaPqcR5rzC2Es3yyR5wwiASJUclwolTcdkauyr2xxdEg1mB6XPGPjVfa2i0FCeLG34qFxYx1O8zsWypCMk2Mb6s7aIzuW",
  },
];

export default function HvacWhyChooseUs() {
  return (
    <section className="py-24" style={{ background: "#f5f0e6" }} id="whyus">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <span
            className="inline-block bg-white text-[#a13b05] px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.05em]"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            WHY CHOOSE US
          </span>
          <h2
            className="text-4xl font-extrabold text-[#1c1c19]"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            Experience the Precision &amp; Comfort Difference
          </h2>
        </div>

        {/* Image Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((card) => (
            <div
              key={card.title}
              className="relative group overflow-hidden rounded-xl h-[360px]"
              style={{ boxShadow: "0 4px 24px rgba(161,59,5,0.06)" }}
            >
              <img
                alt={card.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src={card.src}
              />
              <div className="absolute bottom-0 left-0 w-full bg-[#a13b05]/90 p-6 flex justify-between items-center backdrop-blur-sm">
                <span
                  className="text-white font-bold"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  {card.title}
                </span>
                <span className="material-symbols-outlined text-[#fdb741]">
                  arrow_forward
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button
            className="text-white px-10 py-4 rounded-lg font-bold uppercase tracking-wider hover:scale-105 transition-transform"
            style={{
              fontFamily: "var(--font-manrope)",
              background: "linear-gradient(135deg, #a13b05, #c1521f)",
              boxShadow: "0 4px 24px rgba(161,59,5,0.15)",
            }}
          >
            Request Your Free Quote
          </button>
        </div>
      </div>
    </section>
  );
}
