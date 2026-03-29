"use client";

const posts = [
  {
    title: "5 Signs Your Heat Pump Needs a Seasonal Tune-Up",
    description:
      "Discover the subtle indicators that your high-efficiency system is working harder than it should before the peak season hits...",
    category: "Maintenance",
    date: "May 12, 2024",
    author: "Tech Lead James",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBIFQtj3y9XJxHjVa32gTuW2zeNUQyt7X18urGc9u717BjEwpXysXUKe5qM7V8LfRwNN-a5tmtbwwmx74kNgIkxG4fimqubUbOAAKBOt25ny9jFccxWqUGl5fmTJdPaBKQIsOAW04PQfWmc76-iOkQP6H96HgLLRye8EDX2GmDsh9phB4kv20y2tFr7m5VijSpCHPzFJqv48qzNyz0skdvRACdfGVuM7D8ekf_eTad64AAMqWVEhvwMqkT6cYU-0zLxBUgAR8DH0NME",
  },
  {
    title: "The Architect's Guide to Better Indoor Air Quality",
    description:
      "How integrated filtration systems can transform your living space into a true sanctuary free from allergens and pollution...",
    category: "Air Quality",
    date: "May 05, 2024",
    author: "Specialist Sarah",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtVcY0rwZ_Ceicn10ZnpyfIjBo5Cqj77CelWFS4FH9d29GemGd0UQSAuKgNesVkkcnBFLwkBph-_ZYDVXnef3VaYDQWt8sWrxVXcIyeAiOKdOAeXGOZJofekLfLNC9JcmQPLWI1VeIWM1OWQ3b8pt-c_akf715eDS6dOfXPpdhtbIOmHnVzHgnQtDUjzsYbA5OtoYw7A3xvy89KycTQO0joxO9C4t3MNMN29ywmQkpgYdT7I8BjbG8NXfKaZAE8tHzPFa5LfUwvJG4",
  },
  {
    title: "Maximizing SEER2 Ratings in New Construction",
    description:
      "What every new homeowner needs to know about the latest energy regulations and choosing the right equipment for long-term ROI...",
    category: "Energy",
    date: "April 28, 2024",
    author: "Founder Eric",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBDIqrtaFRb-8VgsLa1IaY8qWwU5Ykgr0NG9T-JTXi_FA4im5CfQrvFVBFcHRkMlfBv7CKP80pI4G08Yq941GIAHdLu0GejucAq9gVOJnZorC4lqx5ogbMisMBa_e6mvPTDl72V1w9J88",
  },
];

export default function HvacInsights() {
  return (
    <section className="py-24 bg-[#fcf9f4]">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="space-y-3">
            <h2
              className="text-3xl font-extrabold text-[#1c1c19]"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Stay Ahead With Smart HVAC Advice
            </h2>
            <p
              className="text-[#45464F] max-w-lg"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Expert insights to help you maintain efficiency and air quality all year round.
            </p>
          </div>
          <button
            className="text-[#a13b05] font-bold flex items-center gap-2 hover:gap-3 transition-all shrink-0"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            View All Articles
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>

        {/* 3-Column Card Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post.title}
              className="bg-white rounded-xl overflow-hidden hover:scale-[1.02] transition-transform group"
              style={{
                boxShadow: "0 4px 24px rgba(161,59,5,0.06)",
                border: "1px solid rgba(139, 114, 104, 0.15)",
              }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src={post.src}
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="text-[#a13b05] font-bold text-xs uppercase"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {post.category}
                  </span>
                  <span className="text-[#8b7268] text-xs">
                    {post.date}
                  </span>
                </div>
                <h3
                  className="text-lg font-bold text-[#1c1c19] mb-2 leading-snug"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  {post.title}
                </h3>
                <p
                  className="text-[#45464F] text-sm mb-4 leading-relaxed"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {post.description}
                </p>
                <div className="flex items-center justify-between">
                  <span
                    className="text-[#8b7268] text-xs"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {post.author}
                  </span>
                  <a
                    className="text-[#a13b05] font-bold text-sm flex items-center gap-1"
                    href="#"
                  >
                    Read More
                    <span className="material-symbols-outlined text-sm">arrow_right_alt</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
