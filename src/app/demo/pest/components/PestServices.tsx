"use client";
const services = [
  { icon: "house_siding", title: "Termite Defense", desc: "Advanced liquid barrier technology and baiting systems to eliminate the colony at its source." },
  { icon: "bug_report", title: "Ant & Roach", desc: "Interior and exterior treatments that create a long-lasting protective shield around your living space." },
  { icon: "noise_aware", title: "Rodent Control", desc: "Strategic exclusion and monitoring to keep mice and rats out of your walls and pantries permanently." },
  { icon: "air", title: "Mosquito Shield", desc: "Seasonal misting that targets breeding grounds so you can enjoy your yard without the itch." },
  { icon: "bed", title: "Bed Bug Relief", desc: "Comprehensive thermal and botanical treatments to ensure your sleep is safe and sound once again." },
  { icon: "pest_control_rodent", title: "Wildlife Removal", desc: "Humane relocation of raccoons, squirrels, and bats with entry-point sealing services included." },
];
export default function PestServices() {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto" id="services">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="max-w-xl">
          <span className="text-[#006e2f] font-bold tracking-widest text-xs uppercase block mb-2">Our Expertise</span>
          <h2 className="text-4xl font-bold text-[#131e19]" style={{ fontFamily: "var(--font-jakarta)" }}>Specialized Treatment for Every Home Intruder</h2>
        </div>
        <p className="text-[#3d4a3d] max-w-sm">We use lab-tested, scientific methods to target the specific biology of common pests.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s) => (
          <div key={s.title} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all group border border-[#bccbb9]/10">
            <div className="w-16 h-16 bg-[#b4f0c9]/40 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#22c55e] group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-3xl">{s.icon}</span>
            </div>
            <h3 className="text-2xl font-bold mb-3">{s.title}</h3>
            <p className="text-[#3d4a3d] leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
