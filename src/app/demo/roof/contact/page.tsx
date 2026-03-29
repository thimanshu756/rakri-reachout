import RoofContactNav from "../components/RoofContactNav";
import RoofContactHero from "../components/RoofContactHero";
import RoofContactForm from "../components/RoofContactForm";
import RoofContactMap from "../components/RoofContactMap";
import RoofContactWhyChoose from "../components/RoofContactWhyChoose";
import RoofContactFAQ from "../components/RoofContactFAQ";
import RoofContactCTA from "../components/RoofContactCTA";
import RoofContactFooter from "../components/RoofContactFooter";

export const metadata = {
  title: "Contact StrongRoof Co. | Architectural Integrity",
  description:
    "Request your free roof inspection. 24/7 emergency storm damage response. Licensed & bonded roofing experts.",
};

export default function RoofContactPage() {
  return (
    <main
      className="bg-[#fbf9f6] text-[#1b1c1a] antialiased"
      style={{ fontFamily: "var(--font-inter-roof)" }}
    >
      <RoofContactNav />
      <RoofContactHero />
      <RoofContactForm />
      <RoofContactMap />
      <RoofContactWhyChoose />
      <RoofContactFAQ />
      <RoofContactCTA />
      <RoofContactFooter />
    </main>
  );
}
