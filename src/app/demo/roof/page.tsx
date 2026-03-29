import RoofNav from "./components/RoofNav";
import RoofHero from "./components/RoofHero";
import RoofProblem from "./components/RoofProblem";
import RoofServices from "./components/RoofServices";
import RoofBeforeAfter from "./components/RoofBeforeAfter";
import RoofSocialProof from "./components/RoofSocialProof";
import RoofPricing from "./components/RoofPricing";
import RoofProcess from "./components/RoofProcess";
import RoofFAQ from "./components/RoofFAQ";
import RoofCTA from "./components/RoofCTA";
import RoofFooter from "./components/RoofFooter";

export const metadata = {
  title: "StrongRoof Co. | Built for Permanence",
  description:
    "Premium architectural roofing systems engineered for the harshest climates. Licensed & bonded. 24/7 emergency response.",
};

export default function RoofLandingPage() {
  return (
    <main
      className="bg-[#fbf9f6] text-[#1b1c1a] antialiased"
      style={{ fontFamily: "var(--font-inter-roof)" }}
    >
      <RoofNav />
      <RoofHero />
      <RoofProblem />
      <RoofServices />
      <RoofBeforeAfter />
      <RoofSocialProof />
      <RoofPricing />
      <RoofProcess />
      <RoofFAQ />
      <RoofCTA />
      <RoofFooter />
    </main>
  );
}
