import { Epilogue, Inter } from "next/font/google";

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
  weight: ["800"],
});

const inter = Inter({
  variable: "--font-inter-roof",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RoofLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${epilogue.variable} ${inter.variable}`}>
      {children}
    </div>
  );
}
