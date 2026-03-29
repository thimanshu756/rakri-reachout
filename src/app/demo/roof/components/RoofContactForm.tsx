"use client";

export default function RoofContactForm() {
  return (
    <section className="max-w-screen-xl mx-auto px-8 -mt-16 relative z-20 pb-24">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left: Form */}
        <div className="lg:w-[60%] bg-white p-8 md:p-12 shadow-[0_24px_48px_rgba(30,37,48,0.12)] rounded-lg">
          <h2
            className="text-3xl uppercase mb-8 border-l-4 border-[#9e2016] pl-6"
            style={{ fontFamily: "var(--font-epilogue)" }}
          >
            Project Details
          </h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[#404753]">
                  Full Name
                </label>
                <input
                  className="w-full bg-[#f5f3f0] border-none p-4 rounded focus:ring-2 focus:ring-[#9e2016] outline-none border-b-2 border-transparent focus:border-[#9e2016]"
                  placeholder="John Doe"
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[#404753]">
                  Phone Number
                </label>
                <input
                  className="w-full bg-[#f5f3f0] border-none p-4 rounded focus:ring-2 focus:ring-[#9e2016] outline-none border-b-2 border-transparent focus:border-[#9e2016]"
                  placeholder="(555) 000-0000"
                  type="tel"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-[#404753]">
                Property Address
              </label>
              <input
                className="w-full bg-[#f5f3f0] border-none p-4 rounded focus:ring-2 focus:ring-[#9e2016] outline-none border-b-2 border-transparent focus:border-[#9e2016]"
                placeholder="123 Iron Gate Ave, Slate City"
                type="text"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-[#404753]">
                Service Needed
              </label>
              <select className="w-full bg-[#f5f3f0] border-none p-4 rounded focus:ring-2 focus:ring-[#9e2016] outline-none appearance-none">
                <option>Select a service</option>
                <option>Full Roof Replacement</option>
                <option>Minor Leak Repair</option>
                <option>Stone Shingle Installation</option>
                <option>Commercial Maintenance</option>
              </select>
            </div>
            {/* Storm Damage Toggle */}
            <div className="bg-[#f5f3f0] p-6 rounded-lg border-l-4 border-[#e1bfb9]/30">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#9e2016]">
                    cloud_done
                  </span>
                  <span className="font-bold uppercase text-sm tracking-tight">
                    Insurance Claim / Storm Damage?
                  </span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    defaultChecked
                    className="sr-only peer"
                    type="checkbox"
                  />
                  <div className="w-11 h-6 bg-[#e4e2df] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#9e2016]" />
                </label>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  className="w-full bg-white border-none p-3 text-sm rounded outline-none border-b-2 border-transparent focus:border-[#9e2016]"
                  placeholder="Insurance Carrier"
                  type="text"
                />
                <input
                  className="w-full bg-white border-none p-3 text-sm rounded outline-none border-b-2 border-transparent focus:border-[#9e2016]"
                  placeholder="Claim Number (if known)"
                  type="text"
                />
              </div>
            </div>
            {/* Photo Upload */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-[#404753]">
                Upload Damage Photos (Optional)
              </label>
              <div className="border-2 border-dashed border-[#e1bfb9] p-8 rounded-lg flex flex-col items-center justify-center text-center hover:bg-[#f5f3f0] transition-colors cursor-pointer group">
                <span className="material-symbols-outlined text-4xl text-[#404753] mb-2 group-hover:text-[#9e2016] transition-colors">
                  add_a_photo
                </span>
                <p className="text-sm font-semibold">
                  Click to upload or drag &amp; drop
                </p>
                <p className="text-xs text-[#404753] mt-1">
                  PNG, JPG up to 10MB
                </p>
              </div>
            </div>
            <button
              className="w-full bg-[#9e2016] text-white text-lg py-5 uppercase tracking-[0.2em] hover:bg-[#c0392b] transition-all active:scale-95 shadow-lg relative overflow-hidden group"
              style={{ fontFamily: "var(--font-epilogue)" }}
              type="submit"
            >
              <span className="relative z-10">Submit Request</span>
              <div className="absolute top-0 right-0 w-8 h-8 bg-[#c0392b] transform rotate-45 translate-x-4 -translate-y-4 group-hover:translate-x-3 group-hover:-translate-y-3 transition-transform" />
            </button>
          </form>
        </div>

        {/* Right: Info Cards */}
        <div className="lg:w-[40%] space-y-6">
          {[
            {
              icon: "call",
              title: "24/7 Storm Line",
              content: <p className="text-2xl font-black text-[#151c27]">(888) 555-ROOF</p>,
            },
            {
              icon: "mail",
              title: "General Inquiries",
              content: <p className="text-xl font-bold text-[#151c27]">help@strongroof.co</p>,
            },
            {
              icon: "location_on",
              title: "Headquarters",
              content: (
                <p className="text-[#151c27] font-semibold">
                  4550 Architectural Way, Suite 200
                  <br />
                  Denver, CO 80202
                </p>
              ),
            },
            {
              icon: "schedule",
              title: "Office Hours",
              content: (
                <div className="grid grid-cols-2 gap-x-4 text-sm font-semibold">
                  <span className="text-[#404753]">Mon-Fri:</span>
                  <span>7AM - 7PM</span>
                  <span className="text-[#404753]">Saturday:</span>
                  <span>9AM - 3PM</span>
                  <span className="text-[#404753]">Sunday:</span>
                  <span className="text-[#9e2016]">Emergency Only</span>
                </div>
              ),
            },
          ].map((card) => (
            <div
              key={card.title}
              className="bg-white p-6 shadow-md border-l-8 border-[#9e2016] group hover:shadow-xl transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#f5f3f0] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#151c27]">
                    {card.icon}
                  </span>
                </div>
                <div>
                  <h3
                    className="text-sm uppercase text-[#404753] tracking-widest mb-1"
                    style={{ fontFamily: "var(--font-epilogue)" }}
                  >
                    {card.title}
                  </h3>
                  {card.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
