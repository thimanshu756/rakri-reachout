"use client";

export default function HvacContactForm() {
  return (
    <section className="py-20 px-8 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left: Contact Form */}
        <div className="lg:w-3/5">
          <div
            className="bg-white p-8 md:p-12 rounded-xl"
            style={{
              boxShadow: "0 4px 24px rgba(161,59,5,0.06)",
              border: "1px solid rgba(139, 114, 104, 0.15)",
            }}
          >
            <h3
              className="font-bold text-2xl text-[#1c1c19] mb-8"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Service Request
            </h3>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label
                  className="block text-xs font-bold text-[#1c1c19] uppercase tracking-wider mb-2"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  Full Name
                </label>
                <input
                  className="w-full bg-[#f8f3ea] border-none rounded-lg p-4 focus:ring-2 focus:ring-[#a13b05] text-[#1c1c19]"
                  placeholder="Johnathan Doe"
                  type="text"
                />
              </div>
              <div>
                <label
                  className="block text-xs font-bold text-[#1c1c19] uppercase tracking-wider mb-2"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  Email
                </label>
                <input
                  className="w-full bg-[#f8f3ea] border-none rounded-lg p-4 focus:ring-2 focus:ring-[#a13b05] text-[#1c1c19]"
                  placeholder="john@example.com"
                  type="email"
                />
              </div>
              <div>
                <label
                  className="block text-xs font-bold text-[#1c1c19] uppercase tracking-wider mb-2"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  Phone
                </label>
                <input
                  className="w-full bg-[#f8f3ea] border-none rounded-lg p-4 focus:ring-2 focus:ring-[#a13b05] text-[#1c1c19]"
                  placeholder="(555) 000-0000"
                  type="tel"
                />
              </div>
              <div className="md:col-span-2">
                <label
                  className="block text-xs font-bold text-[#1c1c19] uppercase tracking-wider mb-2"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  Service Needed
                </label>
                <select className="w-full bg-[#f8f3ea] border-none rounded-lg p-4 focus:ring-2 focus:ring-[#a13b05] text-[#1c1c19] appearance-none">
                  <option>Select a service</option>
                  <option>AC Repair & Installation</option>
                  <option>Heating & Furnace Repair</option>
                  <option>Air Quality Assessment</option>
                  <option>Maintenance Plan</option>
                  <option>Emergency Service</option>
                  <option>Consultation</option>
                </select>
              </div>
              <div>
                <label
                  className="block text-xs font-bold text-[#1c1c19] uppercase tracking-wider mb-2"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  Preferred Date
                </label>
                <input
                  className="w-full bg-[#f8f3ea] border-none rounded-lg p-4 focus:ring-2 focus:ring-[#a13b05] text-[#1c1c19]"
                  type="date"
                />
              </div>
              <div>
                <label
                  className="block text-xs font-bold text-[#1c1c19] uppercase tracking-wider mb-2"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  Preferred Time
                </label>
                <select className="w-full bg-[#f8f3ea] border-none rounded-lg p-4 focus:ring-2 focus:ring-[#a13b05] text-[#1c1c19]">
                  <option>Morning (8am - 12pm)</option>
                  <option>Afternoon (12pm - 4pm)</option>
                  <option>Evening (4pm - 8pm)</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label
                  className="block text-xs font-bold text-[#1c1c19] uppercase tracking-wider mb-2"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  Describe Your HVAC Issue
                </label>
                <textarea
                  className="w-full bg-[#f8f3ea] border-none rounded-lg p-4 focus:ring-2 focus:ring-[#a13b05] text-[#1c1c19]"
                  placeholder="Please provide details about your heating or cooling issue..."
                  rows={4}
                />
              </div>
              <div className="md:col-span-2 pt-4">
                <button
                  className="w-full text-white py-5 rounded-lg font-bold uppercase tracking-widest hover:brightness-110 shadow-lg active:scale-[0.98] transition-all"
                  style={{
                    fontFamily: "var(--font-manrope)",
                    background: "linear-gradient(135deg, #a13b05, #c1521f)",
                  }}
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
              line1: "(555) 234-8900",
              line2: "24/7 Emergency Dispatch",
            },
            {
              icon: "mail",
              title: "Email",
              line1: "service@precisioncomfort.hvac",
              line2: "Response within 2 hours",
            },
            {
              icon: "location_on",
              title: "Main Office",
              line1: "1224 HVAC Plaza Suite 400",
              line2: "Comfort City, ST 90210",
            },
            {
              icon: "schedule",
              title: "Business Hours",
              line1: "Mon - Fri: 8:00 AM - 8:00 PM",
              line2: "24/7 Emergency Support",
              line2Bold: true,
            },
          ].map((card) => (
            <div
              key={card.title}
              className="bg-white p-6 rounded-xl flex gap-5 items-start"
              style={{ border: "1px solid rgba(139, 114, 104, 0.15)", borderLeft: "4px solid #a13b05" }}
            >
              <span className="material-symbols-outlined text-[#a13b05] mt-1">
                {card.icon}
              </span>
              <div>
                <h4
                  className="font-bold text-sm text-[#1c1c19] uppercase tracking-widest mb-1"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  {card.title}
                </h4>
                <p className="text-[#45464F]">{card.line1}</p>
                <p
                  className={`text-sm mt-1 ${
                    card.line2Bold
                      ? "font-bold text-[#a13b05]"
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
