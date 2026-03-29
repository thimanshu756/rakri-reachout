"use client";

export default function HvacAbout() {
  return (
    <section className="py-24 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-20 items-center">
        {/* Left: Offset images */}
        <div className="relative grid grid-cols-2 gap-4">
          <div className="pt-12">
            <img
              alt="HVAC Team"
              className="rounded-2xl w-full aspect-[4/5] object-cover"
              style={{ boxShadow: "0 4px 24px rgba(161,59,5,0.06)" }}
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnJqjfuUqsBMpVBIHG6qkabdUIejU91gzI8GvrjkMO9CWqh6NfNW2dL_Uq-YWZ4TUvxstNuBXKD8pZJOo4N7SnD945fEPJn0uulTQRYaV2nCDkyKjNL5Em4JRVcK5f9tNJNFqBma4YEw5HhrBcuxE06bjkQA1Wvqqd6oeI7aTzSIJq2sTfM1vBObGwOhJ_f8bqSlGmKY4QDyQB13We7x7wm1voCzCicqQW09dcKAyrLhEWc-k4qeokPzOUN-Sqk3pWmMM554MbOuMv"
            />
          </div>
          <div>
            <img
              alt="HVAC Excellence"
              className="rounded-2xl w-full aspect-[4/5] object-cover"
              style={{ boxShadow: "0 4px 24px rgba(161,59,5,0.06)" }}
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD55TdcRcej81GoFGY2KVRwg3-PjUGPOQBxLpsdznZnwLLE0s80NTX30PWmMT-Iv0YROWDcktAHBZU5zvD-w6nxKT_nUR2nJsxc1JHgAX-ULwdLVT1v1Bu-mhH60AIjevNqrrXG-wwcU7x8SRv1EfArHhIGTgIjLGCi05sjOYXCPdSmwd1aNCHHhNiX0f-Z3dH20rezWI912que2J2I2IAFdxifa1GS5DgvWCzUfboRcrOGdvOY0L6DBxY4hHRZezZIt3H-6QRuS2a4"
            />
          </div>
        </div>

        {/* Right: Text */}
        <div className="space-y-6">
          <span
            className="inline-block bg-[#f2ede4] text-[#a13b05] px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.05em]"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            12+ YEARS OF EXCELLENCE
          </span>
          <h2
            className="text-4xl md:text-5xl font-extrabold text-[#1c1c19] leading-tight"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            Trusted HVAC Expert You Can Count On
          </h2>
          <p
            className="text-[#45464F] leading-relaxed"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            At Precision &amp; Comfort, we believe climate control is the silent engine
            of the home. Our engineers treat every installation as an architectural
            project, ensuring optimal airflow and maximum efficiency.
          </p>
          <ul className="space-y-4 pt-4">
            {[
              "Fully Licensed & Insured Technicians",
              "24/7 Emergency Repair Response",
              "Precision Diagnostic Equipment",
              "Transparent, Up-Front Flat Pricing",
            ].map((item) => (
              <li key={item} className="flex items-center gap-4">
                <span
                  className="material-symbols-outlined text-[#a13b05]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
                <span
                  className="font-bold text-[#1c1c19]"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
          <a
            href="#services"
            className="inline-flex items-center gap-2 text-[#a13b05] font-bold mt-4 hover:gap-3 transition-all"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            Learn More About Us
            <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  );
}
