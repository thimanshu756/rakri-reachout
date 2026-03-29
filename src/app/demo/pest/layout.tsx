import { Plus_Jakarta_Sans, Be_Vietnam_Pro } from "next/font/google";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const beVietnam = Be_Vietnam_Pro({
  variable: "--font-vietnam",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function PestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${plusJakarta.variable} ${beVietnam.variable}`}>
      {children}
    </div>
  );
}
