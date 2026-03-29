"use client";

const items = [
  { icon: "verified_user", title: "OSHA Certified Technicians", desc: "Every member of our team undergoes rigorous safety training and background checks." },
  { icon: "contract", title: "Code Compliance Guarantee", desc: "We strictly adhere to NEC (National Electrical Code) to ensure your property passes all future inspections." },
  { icon: "visibility", title: "Thermal Imaging Inspections", desc: "We use FLIR technology to find hidden hotspots behind your walls before they ignite." },
];

export default function ElecSafety() {
  return (
    <section className="py-24 bg-white overflow-hidden" id="safety">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        <div className="order-2 lg:order-1 relative">
          <div className="absolute inset-0 border-2 border-[#eab308] translate-x-4 translate-y-4 -z-10" />
          <img
            alt="Clean Electrical Panel"
            className="w-full h-[600px] object-cover grayscale brightness-75"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDn3ocu9ZXWXkxHAicm9mS78SdeIwVOop7PKwyvwUBzNbKI06NHrI_UQuOa41D5yYz_iFfl0Tbtmoz3IFz3Y09r-yvoMXjp-sVmsV5zIszLNYDAX00UkXZ_Ma8AT6f4HmhYrFdoQ3WITQtATUQc11PESeCBMZhHWbc34Na8C3bnjSOeTF2p_uczmhE9kyJYnMow87jO2P15TlYomZRnN6vsAY_2-oj5zhdWFzxHf-O7ktV27Ly5wC3hB6NVPnKzIUuuwQ5rTEx4SI0"
          />
        </div>
        <div className="order-1 lg:order-2 space-y-8">
          <p
            className="text-[#785a00] font-bold tracking-[0.3em]"
            style={{ fontFamily: "var(--font-mono-elec)" }}
          >
            SAFETY PROTOCOLS
          </p>
          <h2
            className="text-5xl font-black tracking-tighter uppercase leading-none"
            style={{ fontFamily: "var(--font-inter-elec)" }}
          >
            Your Family&apos;s Safety is <br />
            <span className="text-[#eab308]">Non-Negotiable.</span>
          </h2>
          <div className="space-y-6 pt-4">
            {items.map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#e7eefe] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#151c27]">
                    {item.icon}
                  </span>
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-tight mb-1">
                    {item.title}
                  </h4>
                  <p className="text-[#515f74] text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
