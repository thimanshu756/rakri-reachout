"use client";
const faqs = [
  "How soon can someone be at my house?",
  "Are your chemicals safe for my puppy?",
  "Do you provide a guarantee?",
  "What makes your \"botanical\" approach different?",
  "Do I have to leave the house during treatment?",
];
export default function PestFAQ() {
  return (
    <section className="py-24 px-8 max-w-4xl mx-auto" id="faq">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "var(--font-jakarta)" }}>Frequently Asked Questions</h2>
      </div>
      <div className="space-y-4">
        {faqs.map((q) => (
          <div key={q} className="bg-white rounded-2xl p-6 border border-[#bccbb9]/20 hover:border-[#006e2f]/40 transition-colors cursor-pointer group">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-lg text-[#131e19]">{q}</h3>
              <span className="material-symbols-outlined text-[#006e2f] transition-transform group-hover:rotate-90">add</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
