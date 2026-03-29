import ElecContactNav from "../components/ElecContactNav";
import ElecContactHero from "../components/ElecContactHero";
import ElecContactForm from "../components/ElecContactForm";
import ElecContactMap from "../components/ElecContactMap";
import ElecContactTrust from "../components/ElecContactTrust";
import ElecContactFAQ from "../components/ElecContactFAQ";
import ElecContactCTA from "../components/ElecContactCTA";
import ElecContactFooter from "../components/ElecContactFooter";

export const metadata = {
  title: "Contact Us | PowerLine Electric",
  description:
    "Get in touch with PowerLine Electric. Master licensed, code compliant, available 24/7 for electrical emergencies.",
};

export default function ElectricContactPage() {
  return (
    <main
      className="bg-[#f9f9ff] text-[#151c27] antialiased"
      style={{ fontFamily: "var(--font-inter-elec)" }}
    >
      <ElecContactNav />
      <ElecContactHero />
      <ElecContactForm />
      <ElecContactMap />
      <ElecContactTrust />
      <ElecContactFAQ />
      <ElecContactCTA />
      <ElecContactFooter />
    </main>
  );
}
