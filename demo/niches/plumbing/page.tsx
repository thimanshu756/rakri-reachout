import PlumbingNav from "./components/PlumbingNav";
import PlumbingHero from "./components/PlumbingHero";
import PlumbingAbout from "./components/PlumbingAbout";
import PlumbingServices from "./components/PlumbingServices";
import PlumbingWhyChooseUs from "./components/PlumbingWhyChooseUs";
import PlumbingTestimonials from "./components/PlumbingTestimonials";
import PlumbingFAQ from "./components/PlumbingFAQ";
import PlumbingClientSay from "./components/PlumbingClientSay";
import PlumbingInsights from "./components/PlumbingInsights";
import PlumbingCTABanner from "./components/PlumbingCTABanner";
import PlumbingFooter from "./components/PlumbingFooter";

export const metadata = {
  title: "Plumbing Excellence | Premium Residential Plumbing Services",
  description:
    "Premium residential plumbing services delivered with architectural precision and world-class care. Licensed, bonded, 24/7 emergency response.",
};

export default function PlumbingLandingPage() {
  return (
    <main>
      <PlumbingNav />
      <PlumbingHero />
      <PlumbingAbout />
      <PlumbingServices />
      <PlumbingWhyChooseUs />
      <PlumbingTestimonials />
      <PlumbingFAQ />
      <PlumbingClientSay />
      <PlumbingInsights />
      <PlumbingCTABanner />
      <PlumbingFooter />
    </main>
  );
}
