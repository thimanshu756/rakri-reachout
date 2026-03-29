import ElecNav from "./components/ElecNav";
import ElecHero from "./components/ElecHero";
import ElecDanger from "./components/ElecDanger";
import ElecServices from "./components/ElecServices";
import ElecSafety from "./components/ElecSafety";
import ElecSocialProof from "./components/ElecSocialProof";
import ElecPricing from "./components/ElecPricing";
import ElecProcess from "./components/ElecProcess";
import ElecFAQ from "./components/ElecFAQ";
import ElecCertifications from "./components/ElecCertifications";
import ElecCTA from "./components/ElecCTA";
import ElecFooter from "./components/ElecFooter";

export const metadata = {
  title: "PowerLine Electric | Professional Electrical Engineering",
  description:
    "Premium electrical engineering for residential and commercial assets. Master licensed, 24/7 emergency response.",
};

export default function ElectricLandingPage() {
  return (
    <main
      className="bg-[#fefce8] text-[#151c27] antialiased"
      style={{ fontFamily: "var(--font-inter-elec)" }}
    >
      <ElecNav />
      <ElecHero />
      <ElecDanger />
      <ElecServices />
      <ElecSafety />
      <ElecSocialProof />
      <ElecPricing />
      <ElecProcess />
      <ElecFAQ />
      <ElecCertifications />
      <ElecCTA />
      <ElecFooter />
    </main>
  );
}
