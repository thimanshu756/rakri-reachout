"use client";
const features = [
  { icon: "pets", title: "Pet Safe", desc: "Non-toxic to cats and dogs once dry." },
  { icon: "water_drop", title: "No Runoff", desc: "Precision application tech prevents seepage." },
  { icon: "approval", title: "EPA Approved", desc: "Meeting the highest federal safety standards." },
  { icon: "diversity_3", title: "Animal Friendly", desc: "Targeted focus preserves beneficial insects." },
];
export default function PestEcoBadge() {
  return (
    <section className="py-24 px-8 bg-[#eaf7ee] overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 relative">
          <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-[#006e2f]/5 -z-10" style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }} />
          <img alt="Happy family in kitchen" className="rounded-[40px] shadow-xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuApnG6wmAZYJBqMeCLJGuwK1_WR9n5ZWR8yDYK5zWT6sumkKCo1Ety2waZOak_OaEoVE0qPMNiOShxPfcwQ6qBcz3B4QtPp2ac26uruIqvB4fcbK_onGC6cDFFy56w6_jHHfGJB4MnOITfcH8xj8pwEkE8Uf9Ha7ViJuUtlKkaHoRj6TqrGrMbuBcCafjAKyfTtL0ZfjHP_lhDoaLh0pBXVP4xJfUWub3j7mtf1XWggzkx9CxZNKkBy9UNlTT2ZK4h-Lc0xVZfmR6q1" />
        </div>
        <div className="order-1 lg:order-2 space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-[#131e19] leading-tight" style={{ fontFamily: "var(--font-jakarta)" }}>Safe for Your Family. <br />Tough on Pests.</h2>
          <p className="text-lg leading-relaxed text-[#3d4a3d]">We&apos;ve pioneered a &ldquo;Laboratory to Living Room&rdquo; approach that prioritizes ecological balance. Our treatments are derived from natural compounds that target pest nervous systems without affecting mammals.</p>
          <div className="grid grid-cols-2 gap-6">
            {features.map((f) => (
              <div key={f.title} className="flex items-start gap-4">
                <div className="text-[#006e2f] mt-1"><span className="material-symbols-outlined">{f.icon}</span></div>
                <div>
                  <h4 className="font-bold text-[#131e19]">{f.title}</h4>
                  <p className="text-sm text-[#3d4a3d]">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
