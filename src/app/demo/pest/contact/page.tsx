import PestContactNav from "../components/PestContactNav";
import PestContactHero from "../components/PestContactHero";
import PestContactForm from "../components/PestContactForm";
import PestContactMap from "../components/PestContactMap";
import PestContactTrust from "../components/PestContactTrust";
import PestContactFAQ from "../components/PestContactFAQ";
import PestContactCTA from "../components/PestContactCTA";
import PestContactFooter from "../components/PestContactFooter";

export const metadata = {
  title: "Contact GreenShield Pest | Eco-Friendly Protection",
  description: "Get your free pest inspection. Pet-safe, EPA approved, same-day service available.",
};

export default function PestContactPage() {
  return (
    <main className="bg-[#f0fdf4] text-[#3d4a3d] antialiased" style={{ fontFamily: "var(--font-vietnam)" }}>
      <PestContactNav />
      <PestContactHero />
      <PestContactForm />
      <PestContactMap />
      <PestContactTrust />
      <PestContactFAQ />
      <PestContactCTA />
      <PestContactFooter />
    </main>
  );
}
