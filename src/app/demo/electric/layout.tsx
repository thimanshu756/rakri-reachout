import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";

const inter = Inter({
  variable: "--font-inter-elec",
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono-elec",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-label-elec",
  subsets: ["latin"],
  weight: ["500"],
});

export default function ElectricLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable}`}>
      {children}
    </div>
  );
}
