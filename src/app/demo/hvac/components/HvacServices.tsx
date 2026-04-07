"use client";

const services = [
  {
    title: "Air Conditioning Systems",
    description:
      "From precision-tuned central air to cutting-edge ductless systems, we engineer cool comfort tailored to your home's unique architecture and airflow needs.",
    tags: ["#HVACServices", "#Efficiency"],
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCWKsY3-UOJmblQk4l-20Tu3lpTf6OFyXBsSL-6eA3WA0Ki_avxJ2As_NZ2A5X9IxTSF67x9pFGa9ec7kZrNVtgwuW3w3byMeFtrrzKMs7mIhdHvvq6NYy2FAHZIQmnCo129npUF9FkRdMS8jyDdtO-YzvqBmZstlH0qj9a9AyyLx0CtcNgNNDQgU7ms4Fe0Zn_CbiXeciOhaSrpGWJ96jE66bGYZ-HZoNQ6vkzqdyszSg8-2eI-J2CkbenAA30VgRHiznbQOQ14M9s",
  },
  {
    title: "Heating & Furnaces",
    tags: ["Active Service"],
    description:
      "From modern heat pumps to high-output gas furnaces, we ensure your home remains a sanctuary during the harshest winters. Our technicians calibrate every system for peak thermal efficiency.",
    link: "View Heating Packages",
    featured: true,
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0hTaTxTnLR4JY75EIZ8Wf5_O0B_2oRqvbVwjujaS_0sl_ro_4u7t3Ufc5ALCqJ7c71PW7qcAcbpvjsm2Bh-FA2ZvL7dpOCwyAmEe4PfaOBSlWOayL7rU5Zmd-LJnLqlinhs8JROWpn1jYvgkePMuFj6Jdu90QMDv8O_Y0OytqchAPsbp0QgRd8jcFVaxmS-xjob5CKP80pI4G08Yq941GIAHdLu0GejucAq9gVOJnZorC4lqx5ogbMisMBa_e6mvPTDl72V1w9J88",
  },
  {
    title: "Indoor Air Quality",
    description:
      "Integrated filtration, UV purification, and humidity control systems that transform your living space into a true sanctuary free from allergens and pollutants.",
    tags: ["#CleanAir"],
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMfK8xnrqGQcFWn1dztWyHf1SN8qBhV4g_NUMCDEZ2XQIDKPi58QTzbIpn_uqdiPLVAQH9ynokf5mEGxBDTobzGGqTcU5BJ0cAbV10xv62nkIScc1rtoKNTW-pqlCLCAdf6pogvjmPCoa18a2ZhMWuC-q-0s0fRRiISg8yntwyjBkvIsUtlf8livu5HKbkKQFTRV-XP1r75_QYxdRMF9ALxiIO5hBjfEF7IN69f0GobHqEJpQYxmVglbBUJjFmBRL2jr6grNDBlH0C",
  },
];

export default function HvacServices() {
  return (
    <section className="py-24 bg-[#fcf9f4]" id="services">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <span
            className="inline-block bg-[#f2ede4] text-[#a13b05] px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.05em]"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            OUR SERVICES
          </span>
          <h2
            className="text-4xl md:text-5xl font-extrabold text-[#1c1c19] tracking-tight"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            Comprehensive Heating &amp; Cooling Services
          </h2>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className={`rounded-xl overflow-hidden group transition-all hover:scale-[1.02] ${
                service.featured ? "md:row-span-1" : ""
              }`}
              style={{
                boxShadow: "0 4px 24px rgba(161,59,5,0.06)",
                border: "1px solid rgba(139, 114, 104, 0.15)",
              }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src={service.src}
                />
                <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors">
                  <span className="material-symbols-outlined text-[#a13b05]">add_circle</span>
                </button>
                {/* Tags */}
                <div className="absolute bottom-4 left-4 flex gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-3 py-1 rounded-full text-xs font-bold ${
                        tag === "Active Service"
                          ? "bg-[#a13b05] text-white"
                          : "bg-white/90 text-[#1c1c19]"
                      }`}
                      style={{ fontFamily: "var(--font-manrope)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 bg-white">
                <h3
                  className="text-xl font-bold text-[#1c1c19] mb-2"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  {service.title}
                </h3>
                {service.description && (
                  <p
                    className="text-[#45464F] text-sm leading-relaxed mb-4"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {service.description}
                  </p>
                )}
                {service.link && (
                  <a
                    href="#"
                    className="inline-flex items-center gap-1 text-[#a13b05] font-bold text-sm hover:gap-2 transition-all"
                    style={{ fontFamily: "var(--font-manrope)" }}
                  >
                    {service.link}
                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
