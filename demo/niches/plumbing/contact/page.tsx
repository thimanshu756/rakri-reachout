import PlumbingNav from "../components/PlumbingNav";
import PlumbingContactHero from "../components/PlumbingContactHero";
import PlumbingContactForm from "../components/PlumbingContactForm";
import PlumbingContactInfo from "../components/PlumbingContactInfo";
import PlumbingTrustSection from "../components/PlumbingTrustSection";
import PlumbingContactFAQ from "../components/PlumbingContactFAQ";
import PlumbingCTAFooter from "../components/PlumbingCTAFooter";
import PlumbingFooter from "../components/PlumbingFooter";

export const metadata = {
  title: "Contact Us | Plumbing Excellence",
  description:
    "Get in touch with Plumbing Excellence. Available 24/7 for emergencies. Schedule your plumbing service today.",
};

export default function PlumbingContactPage() {
  return (
    <main>
      <PlumbingNav />
      <PlumbingContactHero />
      <PlumbingContactForm />
      <PlumbingContactInfo />
      <PlumbingTrustSection />
      <PlumbingContactFAQ />
      <PlumbingCTAFooter />
      <PlumbingFooter />
    </main>
  );
}
