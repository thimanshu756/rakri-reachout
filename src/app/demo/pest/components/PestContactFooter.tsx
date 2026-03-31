"use client";
export default function PestContactFooter({ businessName = "{businessName}" }: { businessName?: string }) {
  return (
    <footer className="bg-emerald-900 w-full pt-16 pb-8">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 gap-6 w-full max-w-7xl mx-auto text-sm leading-relaxed text-emerald-50" style={{ fontFamily: "var(--font-vietnam)" }}>
        <div className="text-lg font-bold text-emerald-100" style={{ fontFamily: "var(--font-jakarta)" }}>{businessName}</div>
        <div className="flex flex-wrap justify-center gap-6">
          {["EPA Compliance", "Privacy Policy", "Service Terms", "Sustainability Report"].map((l) => (
            <a key={l} href="#" className="text-emerald-200/60 hover:text-white transition-colors">{l}</a>
          ))}
        </div>
        <div className="text-emerald-200/60 text-xs md:text-sm text-center md:text-right">
          &copy; {new Date().getFullYear()} {businessName} Control. Formulated by Nature, Validated by Science.
        </div>
      </div>
    </footer>
  );
}
