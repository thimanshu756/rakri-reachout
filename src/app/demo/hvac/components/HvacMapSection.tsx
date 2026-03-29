"use client";

export default function HvacMapSection() {
  return (
    <section className="py-20 bg-[#f8f3ea] px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative w-full h-[400px] rounded-xl bg-[#ded9d2] flex flex-col items-center justify-center border-2 border-dashed border-[#a13b05]/30 overflow-hidden group">
          {/* Background map image */}
          <div className="absolute inset-0 opacity-10 grayscale hover:grayscale-0 transition-all duration-700">
            <img
              className="w-full h-full object-cover"
              alt="Service area map"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsQY_u1f7tcAicFbPamD7N2a-k-kq7YAtcyw8XznnnPPxXfAiK67va4AK6FSLZeCj9gUw-gRwbQX8k_fdTXWHj1zqJZzgvWRksxRZEUPbyEVN10_TdTshDRxPrFuvGNw3zUKtyfwTDl8s_OJm0v2kABHWhfttGcPgEPtOGdFMg8itwvBYZANEP5_Ctq9DwhUv8qm-tYR-bwyV"
            />
          </div>
          <div className="relative z-10 flex flex-col items-center">
            <span
              className="material-symbols-outlined text-[#a13b05] text-6xl mb-4"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              location_on
            </span>
            <h3
              className="font-bold text-xl text-[#1c1c19] tracking-widest uppercase mb-2"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Service Area Map
            </h3>
            <p
              className="text-[#45464F] max-w-md text-center px-4"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Providing premium HVAC services across the Greater Metropolitan
              area and surrounding communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
