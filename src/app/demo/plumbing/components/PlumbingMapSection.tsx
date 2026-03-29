"use client";

export default function PlumbingMapSection() {
  return (
    <section className="py-20 bg-[#F8F3EB] px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative w-full h-[400px] rounded-xl bg-[#DED9D2] flex flex-col items-center justify-center border-2 border-dashed border-[#7E5700]/30 overflow-hidden group">
          {/* Background map image */}
          <div className="absolute inset-0 opacity-10 grayscale hover:grayscale-0 transition-all duration-700">
            <img
              className="w-full h-full object-cover"
              alt="Service area map"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQzmFi5y1NshAGqEnFEURzyc1BaFztM8PNH1_NZa-LpJ4eZzXgm3lDdmv68wq1-96S8xua59luBj0ekx5hZrzSb6elZDHy7a91fJBtl8upv9BUBv65KxuDgK92_K80k5a3iz-CyawCl89syraLQjrU3aFPGhpGpuY9Ix1oBVmQ88e27TLTJO9c-BEnMut5nNX9QepEZZigf4iQQfbnqsMB6MC0tQkk-G8cBwIuce3g9ImZNFvVH-fzPeM1suJwT7lEF5Z4ad3tORs"
            />
          </div>
          <div className="relative z-10 flex flex-col items-center">
            <span
              className="material-symbols-outlined text-[#011545] text-6xl mb-4"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              location_on
            </span>
            <h3
              className="font-bold text-xl text-[#011545] tracking-widest uppercase mb-2"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Service Area Map
            </h3>
            <p
              className="text-[#45464F] max-w-md text-center px-4"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Providing premium plumbing services across the Greater Michigan
              Metropolitan area.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
