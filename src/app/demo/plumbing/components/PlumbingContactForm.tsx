"use client";

export default function PlumbingContactForm({ phone = "(800) 555-ROYAL", city = "Royal Oak, MI 48067" }: { phone?: string; city?: string }) {
  return (
    <section className="py-20 px-8 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left: Contact Form */}
        <div className="lg:w-3/5">
          <div
            className="bg-white p-8 md:p-12 rounded-xl"
            style={{
              boxShadow: "0 4px 24px rgba(26,43,90,0.06)",
              border: "1px solid rgba(197, 198, 208, 0.15)",
            }}
          >
            <h3
              className="font-bold text-2xl text-[#011545] mb-8"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Service Request
            </h3>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label
                  className="block text-xs font-bold text-[#011545] uppercase tracking-wider mb-2"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  Full Name
                </label>
                <input
                  className="w-full bg-[#F8F3EB] border-none rounded-lg p-4 focus:ring-2 focus:ring-[#011545] text-[#1D1C17]"
                  placeholder="Johnathan Doe"
                  type="text"
                />
              </div>
              <div>
                <label
                  className="block text-xs font-bold text-[#011545] uppercase tracking-wider mb-2"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  Email
                </label>
                <input
                  className="w-full bg-[#F8F3EB] border-none rounded-lg p-4 focus:ring-2 focus:ring-[#011545] text-[#1D1C17]"
                  placeholder="john@example.com"
                  type="email"
                />
              </div>
              <div>
                <label
                  className="block text-xs font-bold text-[#011545] uppercase tracking-wider mb-2"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  Phone
                </label>
                <input
                  className="w-full bg-[#F8F3EB] border-none rounded-lg p-4 focus:ring-2 focus:ring-[#011545] text-[#1D1C17]"
                  placeholder="(555) 000-0000"
                  type="tel"
                />
              </div>
              <div className="md:col-span-2">
                <label
                  className="block text-xs font-bold text-[#011545] uppercase tracking-wider mb-2"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  Service Needed
                </label>
                <select className="w-full bg-[#F8F3EB] border-none rounded-lg p-4 focus:ring-2 focus:ring-[#011545] text-[#1D1C17] appearance-none">
                  <option>Select a service</option>
                  <option>Residential Plumbing Repair</option>
                  <option>Maintenance Plan</option>
                  <option>Emergency Service</option>
                  <option>Consultation</option>
                </select>
              </div>
              <div>
                <label
                  className="block text-xs font-bold text-[#011545] uppercase tracking-wider mb-2"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  Preferred Date
                </label>
                <input
                  className="w-full bg-[#F8F3EB] border-none rounded-lg p-4 focus:ring-2 focus:ring-[#011545] text-[#1D1C17]"
                  type="date"
                />
              </div>
              <div>
                <label
                  className="block text-xs font-bold text-[#011545] uppercase tracking-wider mb-2"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  Preferred Time
                </label>
                <select className="w-full bg-[#F8F3EB] border-none rounded-lg p-4 focus:ring-2 focus:ring-[#011545] text-[#1D1C17]">
                  <option>Morning (8am - 12pm)</option>
                  <option>Afternoon (12pm - 4pm)</option>
                  <option>Evening (4pm - 8pm)</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label
                  className="block text-xs font-bold text-[#011545] uppercase tracking-wider mb-2"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  Describe Your Plumbing Issue
                </label>
                <textarea
                  className="w-full bg-[#F8F3EB] border-none rounded-lg p-4 focus:ring-2 focus:ring-[#011545] text-[#1D1C17]"
                  placeholder="Please provide details..."
                  rows={4}
                />
              </div>
              <div className="md:col-span-2 pt-4">
                <button
                  className="w-full bg-[#7E5700] text-white py-5 rounded-lg font-bold uppercase tracking-widest hover:brightness-110 shadow-lg active:scale-[0.98] transition-all"
                  style={{ fontFamily: "var(--font-manrope)" }}
                  type="submit"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Right: Info Cards */}
        <div className="lg:w-2/5 flex flex-col gap-6">
          {[
            {
              icon: "phone_iphone",
              title: "Phone",
              line1: phone,
              line2: "24/7 Emergency Dispatch",
            },
            {
              icon: "mail",
              title: "Email",
              line1: "service@royalplumb.com",
              line2: "Response within 2 hours",
            },
            {
              icon: "location_on",
              title: "Main Office",
              line1: city,
              line2: "",
            },
            {
              icon: "schedule",
              title: "Business Hours",
              line1: "Mon - Fri: 7:00 AM - 7:00 PM",
              line2: "24/7 Emergency Support",
              line2Bold: true,
            },
          ].map((card) => (
            <div
              key={card.title}
              className="bg-white p-6 rounded-xl border-l-4 border-l-[#7E5700] flex gap-5 items-start"
              style={{ border: "1px solid rgba(197, 198, 208, 0.15)", borderLeft: "4px solid #7E5700" }}
            >
              <span className="material-symbols-outlined text-[#011545] mt-1">
                {card.icon}
              </span>
              <div>
                <h4
                  className="font-bold text-sm text-[#011545] uppercase tracking-widest mb-1"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  {card.title}
                </h4>
                <p className="text-[#45464F]">{card.line1}</p>
                <p
                  className={`text-sm mt-1 ${
                    card.line2Bold
                      ? "font-bold text-[#7E5700]"
                      : "text-[#45464F]"
                  }`}
                >
                  {card.line2}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
