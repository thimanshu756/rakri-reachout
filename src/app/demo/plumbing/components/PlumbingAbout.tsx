"use client";

export default function PlumbingAbout() {
  return (
    <section className="py-24 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-20 items-center">
        {/* Left: Offset images */}
        <div className="relative grid grid-cols-2 gap-4">
          <div className="pt-12">
            <img
              alt="Plumbing Work"
              className="rounded-2xl w-full aspect-[4/5] object-cover"
              style={{ boxShadow: "0 4px 24px rgba(26,43,90,0.06)" }}
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvGG56VRayvKkflTN0F7UXQpfxQyx-WzeX5bErnqSWhz86VJrFIjN8s-fesC93GSqO1QVHa8DST-MU8t2xFhmRU1sVBV96qaHiXlefCZwWoQnpj73wnSFJ_a55CFgvosgDPzyjAd8e5PKGvWTyHT2UyGtE5w-wTaJef5O2webJ3m-45xrZKb71_O_HKJ2JQZWdsPC15g8N3fNGE6A5jyEFSXICYAO8V1BbrfJwJZjdNORTGcsc6nF-8veX2sJkK0hDc5JU16dMnog"
            />
          </div>
          <div>
            <img
              alt="Technician"
              className="rounded-2xl w-full aspect-[4/5] object-cover"
              style={{ boxShadow: "0 4px 24px rgba(26,43,90,0.06)" }}
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyf3y9G1Es2-1sB1WSlNIVS8DEQZSZJBKAG7ONe-94f0Q1N2bXc4ptL_2_ijUmwY5TfWNvKFUfB3gfvOrWbXczg3v4_7EQ0oVTcB_NNfwnky0nMIztEwh-m4krULMCVEEcvQnAQAhgkvZ3J5SaagXJcwWM1osx1t_wmGEtvxCbBSHEzvdAo5_pX9JPMCKSeJcLMNo4wd6cuEn5B22gGTet7x9Ixx8q6AiiDq0Do5R1aZovxYLCivi4kJy8pVMj6shm8zFVoo_nqIc"
            />
          </div>
        </div>

        {/* Right: Text */}
        <div className="space-y-6">
          <span
            className="inline-block bg-[#F2EDE5] text-[#7E5700] px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.05em]"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            ABOUT OUR COMPANY
          </span>
          <h2
            className="text-4xl md:text-5xl font-extrabold text-[#011545] uppercase"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            TRUSTED PLUMBING EXPERT YOU CAN COUNT ON
          </h2>
          <p
            className="text-[#45464F] leading-relaxed"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Since 2009, we have been the standard-bearers for residential
            plumbing excellence. We don&apos;t just fix pipes; we ensure the
            structural integrity and comfort of your home&apos;s most vital
            systems.
          </p>
          <ul className="space-y-4 pt-4">
            {[
              "Master Plumber Certified Team",
              "Advanced Leak Detection Technology",
              "Lifetime Craftsmanship Warranty",
            ].map((item) => (
              <li key={item} className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-[#7E5700] flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-sm">
                    check
                  </span>
                </div>
                <span
                  className="font-bold text-[#011545]"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
