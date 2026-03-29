"use client";

const cards = [
  {
    title: "Unmatched Precision",
    alt: "Technical close-up of high-grade plumbing components",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBbcDiT6s0sLPEp3DJlTQcr1hFdm4w8EfeESRzGg1-YFBLacdd_skwmgBCvljYmoVtU9iFZYmuqOwyok2zV8DRb9yTR6AZb6jt94b-5e2Et-ahI6LME4MNFq6lJbib6ecIowlGHzD7pQ69IPqw0-lJMnkyQJQQpltFV-gzHvx8fD8UPAxPpYxb4qbyqistV_66a3MRIwjdZTZ9OBbCD6z9qcptSHAox8WxxXHGG7tDgLzUSYTiFwlOiSVfEcv2AmCM2yjUk-9odrT0",
  },
  {
    title: "Smart Diagnostics",
    alt: "Plumbing technician using advanced digital diagnostic equipment",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAcEZiK4oYtJCIXcLA4MILv-9ovMLCrwsTs_qmj1jX8VHb3TwflTmT5a9DSn0hqi1vTX1XvJdQYuMjcKCnepjiphjCApzfpoXgSBPakHQHFNXTzetiTWlQgux4P1c8tc2Jp64te6AAIxnSffmrD7Sbve05ULsJCn8eNqoJ15g7LUYIo_v0TPiMOEwBtsqOQ0Pr5V5cVqIIL_30weLRKozPr5ynQMP0GSoDmWn7xigbNSOIVANU5Jkns5jaMTb76_xcphih_IoIqk94",
  },
  {
    title: "Fixed for Life",
    alt: "Hands of a technician tightening a joint with a professional wrench",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDER3QlWhqpkyRkq8dn0WLOV7dszdlnnRbCucwRy560oXWGd0cdCm4lQICXTi6ljMAOfBqd4eQcQQYz5nUUbtmDaMnZdqAA0ah-jvQ_78ZxoUHuJbcEhpEbAGCDgZK0vKABfkTDzJpOlcN0__-6qwVtlW9yrRLg5nZDCOpBaolQL5D-fP2FyL4ExAsVzojGoD2l0UEZZc7f389Kn7QvaqCVEax5eL2yGkrTi7nMeT1sC9KLLLOHp96BFSAZkdynEWVLYruxZnbfoNs",
  },
  {
    title: "VIP Support",
    alt: "Modern customer service representative in professional office",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjV7SEdYnSfeex3vjWXCZTmFYAEhv-LFGr_RxHdwkETOmlTkFvTfCgvgUKLpaCWZ7wOWeyZ6VJpzyjgqAmbMljcwEE02ODWKgqa_EYjHrbFXRkG7FviK9crkgsmHs6tqUUHzo3ym-PXMt77tdtcC2zn0lFwcZE7P-VAOnxoycSXd7zhHCN2XpZTgGShMSC4dqiEYiszc2_I-giVwhk2ALO9YSuxCQdSHUTNuu-8Fi2szhrcVwv4HwxeP_Qy43lqzQAwzBFh84EhqY",
  },
];

export default function PlumbingWhyChooseUs() {
  return (
    <section className="py-24 bg-[#F5F0E8]">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <span
            className="inline-block bg-white text-[#7E5700] px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.05em]"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            WHY CHOOSE US
          </span>
          <h2
            className="text-4xl font-extrabold text-[#011545] uppercase"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            Commitment to Quality
          </h2>
        </div>

        {/* Image Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="relative group overflow-hidden rounded-xl h-[360px]"
              style={{ boxShadow: "0 4px 24px rgba(26,43,90,0.06)" }}
            >
              <img
                alt={card.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src={card.src}
              />
              <div className="absolute bottom-0 left-0 w-full bg-[#011545]/90 p-6 flex justify-between items-center backdrop-blur-sm">
                <span className="text-white font-bold">{card.title}</span>
                <span className="material-symbols-outlined text-[#7E5700]">
                  arrow_outward
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
