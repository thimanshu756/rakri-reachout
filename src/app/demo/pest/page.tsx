import PestNav from "./components/PestNav";
import PestHero from "./components/PestHero";
import PestProblem from "./components/PestProblem";
import PestServices from "./components/PestServices";
import PestEcoBadge from "./components/PestEcoBadge";
import PestSocialProof from "./components/PestSocialProof";
import PestPlans from "./components/PestPlans";
import PestProcess from "./components/PestProcess";
import PestSeasonalAlert from "./components/PestSeasonalAlert";
import PestFAQ from "./components/PestFAQ";
import PestCTABanner from "./components/PestCTABanner";
import PestFooter from "./components/PestFooter";

export const metadata = {
  title: "GreenShield Pest | Eco-Friendly Home Protection",
  description: "Experience peace of mind with botanically-derived pest protection. Same-day service, pet safe, EPA approved.",
};

export default function PestLandingPage() {
  return (
    <main className="bg-[#f0fdf4] text-[#3d4a3d] antialiased" style={{ fontFamily: "var(--font-vietnam)" }}>
      <PestNav />
      <PestHero />
      <PestProblem />
      <PestServices />
      <PestEcoBadge />
      <PestSocialProof />
      <PestPlans />
      <PestProcess />
      <PestSeasonalAlert />
      <PestFAQ />
      <PestCTABanner />
      <PestFooter />
    </main>
  );
}
