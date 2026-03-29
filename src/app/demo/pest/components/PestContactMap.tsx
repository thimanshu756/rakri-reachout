"use client";
export default function PestContactMap() {
  return (
    <section className="w-full h-[400px] relative">
      <div className="absolute inset-0 bg-[#deebe3] overflow-hidden">
        <img className="w-full h-full object-cover mix-blend-multiply opacity-20 grayscale" alt="Service area map" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-GqnB_2jMri7NVgQQvJncEUXOXHvXm32vMdPyZ341ZTk8jP5VxuqOzeymL_Bi3b6pU21laQcswIDlbZrBDjYPW_taEM4G3CgDYUuhJIlWC5r3hrtEEN_gN6TjE1E8oQUz8KU7ePdNz3kf7vHqTBMGvw7oZSBhzyHbSRFoDfn3H27Z6zIU1JMLHmbKhb5T1vCe4QUCTDHtjhy6jJf_TmvL0ZUMsCBJSzP5dvDGTdlDkSMNuNFWgw9YOtm9WqYgfSiq9faiSrjsngx3" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-[#006e2f]/20 rounded-full animate-ping" />
            <div className="relative w-16 h-16 bg-[#22c55e] rounded-full shadow-lg flex items-center justify-center border-4 border-white">
              <span className="material-symbols-outlined text-white text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
