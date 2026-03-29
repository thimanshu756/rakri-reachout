import HvacContactNav from "../components/HvacContactNav";
import HvacContactHero from "../components/HvacContactHero";
import HvacContactForm from "../components/HvacContactForm";
import HvacMapSection from "../components/HvacMapSection";
import HvacTrustSection from "../components/HvacTrustSection";
import HvacContactFAQ from "../components/HvacContactFAQ";
import HvacCTAFooter from "../components/HvacCTAFooter";
import HvacContactFooter from "../components/HvacContactFooter";

export const metadata = {
  title: "Contact Precision & Comfort | Premium Residential HVAC",
  description:
    "Get in touch with Precision & Comfort. Available 24/7 for emergencies. Schedule your HVAC service today.",
};

export default function HvacContactPage() {
  return (
    <main className="bg-[#fcf9f4] text-[#1c1c19] antialiased" style={{ fontFamily: "var(--font-inter)" }}>
      <HvacContactNav />
      <HvacContactHero />
      <HvacContactForm />
      <HvacMapSection />
      <HvacTrustSection />
      <HvacContactFAQ />
      <HvacCTAFooter />
      <HvacContactFooter />
    </main>
  );
}
