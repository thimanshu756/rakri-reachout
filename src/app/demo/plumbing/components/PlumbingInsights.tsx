"use client";

const posts = [
  {
    category: "Maintenance Tips",
    title: "5 Signs Your Water Heater Needs Immediate Attention",
    description:
      "Don't wait for a flood. Learn how to spot early warning signs of heater failure before it becomes an emergency.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsYihMxsgh__0aH2Kph-GGdL3mkPFbK7DdgxRNANlIor24kEny6PBVrVvR-PGGcA-c7wjPQlmm8aSR8ynTP10Ay75tmvhZOppDV0si9qKhHyzSGNwY-Kk2SNCOZo2OR9FIRoBxHfxWV91163Rvct6wmATGnRYD8z9SxhPEFhgIKlzYEmhKr9HDH1i9pg_Gon-6Wk_FUIjHfFshBSYijnlY02sDshwmQN0-lhnaN8nz3g_6fJJyiCSfnN9hk2uKItWLP525dT9rVg0",
  },
  {
    category: "Eco-Living",
    title: "Innovative Ways to Reduce Home Water Consumption",
    description:
      "Discover modern fixtures and habits that can save you money and protect the environment simultaneously.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXDGKrCntBRl-Pn5y9_aW5kKQBjbl-HeNwjQEoQfOMJgwEybVRpjUPMsH1RI8u_Vq8srkJK3xJ_9bktrwtYL9S3qKicRTI5QaRsFcchHvtYBngUNdMzxF5B9yu0vnVVq7EcZc0dZEu-3qA1GX8VLqIbxyfaHdi3Ovy9-eCDPfhaRfnl2G1fKtjhIq34-xFbG5pHs06VPmGY0sXqBaXJGMotuxqmwgHV3CzkHTn7RoW9B6TMK9Y8TFqEc6Szy7S7aG3gvmXJ_g6p68",
  },
];

export default function PlumbingInsights() {
  return (
    <section className="py-24 bg-[#F5F0E8]">
      <div className="max-w-7xl mx-auto px-8">
        <h2
          className="text-3xl font-extrabold text-[#011545] uppercase mb-12"
          style={{ fontFamily: "var(--font-manrope)" }}
        >
          Expert Insights
        </h2>
        <div className="grid md:grid-cols-1 gap-8">
          {posts.map((post) => (
            <div
              key={post.title}
              className="bg-white rounded-2xl overflow-hidden flex flex-col md:flex-row hover:scale-[1.01] transition-transform"
              style={{ boxShadow: "0 4px 24px rgba(26,43,90,0.06)" }}
            >
              <div className="md:w-1/3">
                <img
                  alt={post.title}
                  className="h-full w-full object-cover"
                  src={post.src}
                />
              </div>
              <div className="p-8 flex flex-col justify-center flex-1">
                <span
                  className="text-[#7E5700] font-bold text-xs uppercase mb-2"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {post.category}
                </span>
                <h3
                  className="text-2xl font-bold text-[#011545] mb-4"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  {post.title}
                </h3>
                <p
                  className="text-[#45464F] mb-6"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {post.description}
                </p>
                <a
                  className="text-[#7E5700] font-bold flex items-center gap-2"
                  href="#"
                >
                  Read More{" "}
                  <span className="material-symbols-outlined">
                    arrow_right_alt
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
