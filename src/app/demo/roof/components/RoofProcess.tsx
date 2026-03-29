"use client";

const steps = [
  { num: "1", title: "Free Inspection", desc: "Detailed assessment and photo documentation of your roof's current health." },
  { num: "2", title: "File Claim", desc: "We assist you in reporting the damage to your provider with verified data." },
  { num: "3", title: "Adjustor Meeting", desc: "We meet the insurance adjustor on your roof to ensure no damage is missed." },
  { num: "4", title: "Repair Complete", desc: "Professional installation with premium materials and final safety walkthrough." },
];

export default function RoofProcess() {
  return (
    <section className="py-24 bg-[#f5f3f0]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="text-4xl text-[#1b1c1a] uppercase tracking-tight"
            style={{ fontFamily: "var(--font-epilogue)" }}
          >
            THE HASSLE-FREE PROCESS
          </h2>
        </div>
        <div className="relative flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="absolute top-12 left-0 w-full h-0.5 bg-[#e1bfb9]/30 hidden md:block" />
          {steps.map((step) => (
            <div
              key={step.num}
              className="relative z-10 flex flex-col items-center text-center md:w-1/4"
            >
              <div
                className="w-14 h-14 bg-[#9e2016] text-white flex items-center justify-center text-xl mb-6 shadow-xl"
                style={{ fontFamily: "var(--font-epilogue)" }}
              >
                {step.num}
              </div>
              <h4
                className="text-sm uppercase mb-3"
                style={{ fontFamily: "var(--font-epilogue)" }}
              >
                {step.title}
              </h4>
              <p className="text-xs text-[#585f6b] px-4">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
