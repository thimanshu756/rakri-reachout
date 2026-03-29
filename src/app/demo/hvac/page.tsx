import HvacNav from "./components/HvacNav";
import HvacHero from "./components/HvacHero";
import HvacAbout from "./components/HvacAbout";
import HvacServices from "./components/HvacServices";
import HvacWhyChooseUs from "./components/HvacWhyChooseUs";
import HvacQuoteBanner from "./components/HvacQuoteBanner";
import HvacFAQ from "./components/HvacFAQ";
import HvacTestimonials from "./components/HvacTestimonials";
import HvacInsights from "./components/HvacInsights";
import HvacCTABanner from "./components/HvacCTABanner";
import HvacFooter from "./components/HvacFooter";

export const metadata = {
  title: "Precision & Comfort | Premium Residential HVAC Services",
  description:
    "Experience architectural precision in residential heating and cooling. We engineer sanctuary-level climate control for the modern home.",
};

export default function HvacLandingPage() {
  return (
    <main className="bg-[#fcf9f4] text-[#1c1c19] antialiased" style={{ fontFamily: "var(--font-inter)" }}>
      <HvacNav />
      <HvacHero />
      <HvacAbout />
      <HvacServices />
      <HvacWhyChooseUs />
      <HvacQuoteBanner />
      <HvacTestimonials />
      <HvacFAQ />
      <HvacInsights />
      <HvacCTABanner />
      <HvacFooter />
    </main>
  );
}
