import { Manrope, Inter, Epilogue, JetBrains_Mono, Space_Grotesk, Plus_Jakarta_Sans, Be_Vietnam_Pro } from "next/font/google";

// Plumbing fonts (Manrope + Inter already in root layout, but we need the variables)
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Roof fonts
const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
  weight: ["800"],
});

const interRoof = Inter({
  variable: "--font-inter-roof",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Electric fonts
const interElec = Inter({
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

// Pest fonts
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

const allFontVars = [
  manrope.variable,
  inter.variable,
  epilogue.variable,
  interRoof.variable,
  interElec.variable,
  jetbrainsMono.variable,
  spaceGrotesk.variable,
  plusJakarta.variable,
  beVietnam.variable,
].join(" ");

export default function SlugLayout({ children }: { children: React.ReactNode }) {
  return <div className={allFontVars}>{children}</div>;
}
