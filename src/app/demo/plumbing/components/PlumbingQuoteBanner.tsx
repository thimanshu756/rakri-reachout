"use client";

export default function PlumbingQuoteBanner() {
  return (
    <section className="bg-[#011545] py-20">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: CTA */}
        <div className="space-y-8">
          <h2
            className="text-4xl md:text-5xl font-extrabold text-white leading-tight uppercase"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            WE ARE PLUMBING SPECIALISTS FOR OVER 15 YEARS
          </h2>
          <button
            className="bg-[#7E5700] text-white px-10 py-4 rounded-lg font-bold uppercase tracking-wider hover:scale-105 transition-transform"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            Schedule Now
          </button>
        </div>

        {/* Right: Quote Card */}
        <div className="bg-[#1A2B5A] p-8 rounded-2xl relative">
          <span className="material-symbols-outlined text-6xl text-[#7E5700] absolute -top-8 -left-4">
            format_quote
          </span>
          <p
            className="text-white text-lg italic leading-relaxed mb-6"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            &ldquo;I have used several plumbing companies over the years, but
            Plumbing Excellence is in a league of their own. Professional, clean,
            and extremely knowledgeable.&rdquo;
          </p>
          <div className="flex items-center gap-4">
            <img
              alt="Client"
              className="w-12 h-12 rounded-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1lbXCKs8e-e_zVQWZuRDNbYUVq90M55hSXNR8Hs6MircoMSUdX6NFSoa1rlfdia0vufFeHN6Yp4JfJP92jIdXw3YT3Nhl0EB0ZQc-P87rCvEHo5w27MJyDtAifUQpUuoIaHhKkseaeLaIaG9DlSZ7D6Np8HZSMCGom7bStCOVng9b9yvgCYR12XWqIs4N9DJ2oAkQjkFXJNqs7xep08FM3GBne8SOczUdzg3-cam0flmeSM-wMe6Fv3N66pcnz7aMHm_o9GE1fDg"
            />
            <div>
              <p className="text-white font-bold">Jonathan Sterling</p>
              <p
                className="text-[#7E5700] text-xs font-bold uppercase tracking-widest"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                Homeowner, Kensington
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
