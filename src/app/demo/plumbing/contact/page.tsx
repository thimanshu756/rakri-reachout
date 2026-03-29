import PlumbingContactNav from "../components/PlumbingContactNav";
import PlumbingContactHero from "../components/PlumbingContactHero";
import PlumbingContactForm from "../components/PlumbingContactForm";
import PlumbingMapSection from "../components/PlumbingMapSection";
import PlumbingTrustSection from "../components/PlumbingTrustSection";
import PlumbingContactFAQ from "../components/PlumbingContactFAQ";
import PlumbingCTAFooter from "../components/PlumbingCTAFooter";
import PlumbingContactFooter from "../components/PlumbingContactFooter";

export const metadata = {
  title: "Contact Royal Plumb & Brass | Premium Residential Plumbing",
  description:
    "Get in touch with Royal Plumb & Brass. Available 24/7 for emergencies. Schedule your plumbing service today.",
};

export default function PlumbingContactPage() {
  return (
    <main className="bg-[#FEF9F1] text-[#1D1C17] antialiased" style={{ fontFamily: "var(--font-inter)" }}>
      <PlumbingContactNav />
      <PlumbingContactHero />
      <PlumbingContactForm />
      <PlumbingMapSection />
      <PlumbingTrustSection />
      <PlumbingContactFAQ />
      <PlumbingCTAFooter />
      <PlumbingContactFooter />
    </main>
  );
}
