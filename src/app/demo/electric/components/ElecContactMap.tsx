"use client";

export default function ElecContactMap() {
  return (
    <section className="bg-[#fefce8] relative py-12 px-6">
      <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(#eab308 0.5px, transparent 0.5px), linear-gradient(to right, #eab308 0.5px, transparent 0.5px), linear-gradient(to bottom, #eab308 0.5px, transparent 0.5px)", backgroundSize: "20px 20px", opacity: 0.05 }} />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="h-[400px] w-full bg-[#F5F0D8] rounded-xl border-4 border-dashed border-[#eab308] flex flex-col items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <img alt="city map" className="w-full h-full object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHGBbzbRWf02lC4WOhWvyzM6r15xVYW3K2REjfGk0u93sdTaLSp0Y2wH6j-yhKAF_FvxOHA3p8ZJpWVlUOD8W4as1Bvr4YrTCeG-qdb01Auobrm0kl-d4U_EC-DhwOEP0ASz3SRGyC3dsgBh6T9smvDBL9_boz0SS0b-bGSKbzlBVwzIUW-wPv6clEFA0uhIyVEZ_8Z642-OrlUUCR3MMfhCxkdVfP15ZPQ9z9yf14IBIB-uPiqjsyrTvQbwDquVaeZHeLxTCkXXk" />
          </div>
          <div className="relative flex flex-col items-center">
            <span className="material-symbols-outlined text-[#151c27] text-6xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
            <h3 className="text-xl font-black text-[#151c27] uppercase tracking-widest" style={{ fontFamily: "var(--font-mono-elec)" }}>Service Area</h3>
            <p className="font-bold text-[#151c27] bg-[#eab308] px-4 py-1 mt-2">GREATER METRO REGION</p>
          </div>
        </div>
      </div>
    </section>
  );
}
