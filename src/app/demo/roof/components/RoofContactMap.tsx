"use client";

export default function RoofContactMap() {
  return (
    <section className="relative">
      <div
        className="absolute top-0 left-0 w-full h-16 bg-[#f5f3f0] -mt-1 z-10"
        style={{ clipPath: "polygon(0 8%, 100% 0, 100% 100%, 0 100%)" }}
      />
      <div className="w-full h-[400px] bg-[#e4e2df] flex flex-col items-center justify-center relative grayscale contrast-125">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDx8bAcBlFGFO1aos-LA9EWrnmxvhzhblFcC5B9tamTcbTw1CqVm0mQQPNnheZR5oxgh9mvdflPn4z0TALPn71Z_kebw0NVd2xfsLg2_PkTbQr_6bJIlZ9pON81E5j0pt3F5LR3BHPwK5SzoXBV2mGRCKubrYlmLsdwVihFZdpdQ9MVKZ1zP7IrslkCvBGFsxHESQwrIXRWm9y5NOB_3Y9R8evn-A81yg3Do0C2vjStlAuEm80wtO_I6vmelcAX4OuccwI33UreAMM')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-20 flex flex-col items-center">
          <span
            className="material-symbols-outlined text-7xl text-[#151c27]"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            location_on
          </span>
          <p
            className="text-2xl uppercase tracking-tighter mt-4 text-[#151c27]"
            style={{ fontFamily: "var(--font-epilogue)" }}
          >
            Service Coverage Area
          </p>
          <p className="text-[#404753] font-bold">
            Colorado Front Range &amp; Surrounding Plains
          </p>
        </div>
      </div>
      <div
        className="absolute bottom-0 left-0 w-full h-16 bg-white -mb-1 z-10"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 90%, 0% 100%)" }}
      />
    </section>
  );
}
