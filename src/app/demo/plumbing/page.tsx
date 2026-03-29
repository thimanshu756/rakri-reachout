import PlumbingNav from "./components/PlumbingNav";
import PlumbingHero from "./components/PlumbingHero";
import PlumbingAbout from "./components/PlumbingAbout";
import PlumbingServices from "./components/PlumbingServices";
import PlumbingWhyChooseUs from "./components/PlumbingWhyChooseUs";
import PlumbingQuoteBanner from "./components/PlumbingQuoteBanner";
import PlumbingFAQ from "./components/PlumbingFAQ";
import PlumbingTestimonials from "./components/PlumbingTestimonials";
import PlumbingInsights from "./components/PlumbingInsights";
import PlumbingCTABanner from "./components/PlumbingCTABanner";
import PlumbingFooter from "./components/PlumbingFooter";

export const metadata = {
  title: "Plumbing Excellence | Premium Residential Services",
  description:
    "Premium residential plumbing services delivered with architectural precision and world-class care. Licensed, bonded, 24/7 emergency response.",
};

export default function PlumbingLandingPage() {
  return (
    <main className="bg-[#FEF9F1] text-[#1D1C17] antialiased" style={{ fontFamily: "var(--font-inter)" }}>
      <PlumbingNav />
      <PlumbingHero />
      <PlumbingAbout />
      <PlumbingServices />
      <PlumbingWhyChooseUs />
      <PlumbingQuoteBanner />
      <PlumbingFAQ />
      <PlumbingTestimonials />
      <PlumbingInsights />
      <PlumbingCTABanner />
      <PlumbingFooter />
    </main>
  );
}
