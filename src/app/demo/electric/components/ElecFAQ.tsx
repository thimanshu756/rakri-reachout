"use client";

const faqs = [
  { q: "Are you fully licensed and insured?", a: "Yes. We hold Master Electrician License #88291-B and maintain $2M in general liability insurance alongside full Workers Comp for all field technicians." },
  { q: "How fast is your emergency response?", a: "Our average on-site arrival time for critical emergencies (smoke, arching, total power loss) is 45 minutes within our primary service radius." },
  { q: "How long does an EV charger install take?", a: "A standard installation typically takes 3-5 hours, depending on the distance from your main panel to the garage or driveway." },
  { q: "Do you handle city permits?", a: "Absolutely. We handle the entire bureaucratic process, from initial permit filing to scheduling final inspections with city officials." },
  { q: "What areas do you serve?", a: "We provide full-service electrical work across the entire Metropolitan area and surrounding suburbs within a 50-mile radius." },
];

export default function ElecFAQ() {
  return (
    <section className="py-24 bg-white" id="faq">
      <div className="max-w-3xl mx-auto px-6">
        <h2
          className="text-4xl font-black text-center mb-16 uppercase tracking-tighter"
          style={{ fontFamily: "var(--font-inter-elec)" }}
        >
          Technical FAQs
        </h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group bg-[#fefce8] p-6 transition-all border-l-4 border-transparent open:border-[#eab308]"
            >
              <summary className="flex justify-between items-center font-bold uppercase tracking-tight cursor-pointer list-none">
                {faq.q}
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform">
                  expand_more
                </span>
              </summary>
              <p className="mt-4 text-[#515f74] text-sm leading-relaxed">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
