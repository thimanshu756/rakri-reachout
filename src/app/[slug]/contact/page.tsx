import { notFound } from "next/navigation";
import { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import { getNicheConfig } from "@/lib/niche-config";

// Plumbing contact components
import PlumbingContactNav from "@/app/demo/plumbing/components/PlumbingContactNav";
import PlumbingContactHero from "@/app/demo/plumbing/components/PlumbingContactHero";
import PlumbingContactForm from "@/app/demo/plumbing/components/PlumbingContactForm";
import PlumbingMapSection from "@/app/demo/plumbing/components/PlumbingMapSection";
import PlumbingTrustSection from "@/app/demo/plumbing/components/PlumbingTrustSection";
import PlumbingContactFAQ from "@/app/demo/plumbing/components/PlumbingContactFAQ";
import PlumbingCTAFooter from "@/app/demo/plumbing/components/PlumbingCTAFooter";
import PlumbingContactFooter from "@/app/demo/plumbing/components/PlumbingContactFooter";

// Roof contact components
import RoofContactNav from "@/app/demo/roof/components/RoofContactNav";
import RoofContactHero from "@/app/demo/roof/components/RoofContactHero";
import RoofContactForm from "@/app/demo/roof/components/RoofContactForm";
import RoofContactMap from "@/app/demo/roof/components/RoofContactMap";
import RoofContactWhyChoose from "@/app/demo/roof/components/RoofContactWhyChoose";
import RoofContactFAQ from "@/app/demo/roof/components/RoofContactFAQ";
import RoofContactCTA from "@/app/demo/roof/components/RoofContactCTA";
import RoofContactFooter from "@/app/demo/roof/components/RoofContactFooter";

// Electric contact components
import ElecContactNav from "@/app/demo/electric/components/ElecContactNav";
import ElecContactHero from "@/app/demo/electric/components/ElecContactHero";
import ElecContactForm from "@/app/demo/electric/components/ElecContactForm";
import ElecContactMap from "@/app/demo/electric/components/ElecContactMap";
import ElecContactTrust from "@/app/demo/electric/components/ElecContactTrust";
import ElecContactFAQ from "@/app/demo/electric/components/ElecContactFAQ";
import ElecContactCTA from "@/app/demo/electric/components/ElecContactCTA";
import ElecContactFooter from "@/app/demo/electric/components/ElecContactFooter";

// Pest contact components
import PestContactNav from "@/app/demo/pest/components/PestContactNav";
import PestContactHero from "@/app/demo/pest/components/PestContactHero";
import PestContactForm from "@/app/demo/pest/components/PestContactForm";
import PestContactMap from "@/app/demo/pest/components/PestContactMap";
import PestContactTrust from "@/app/demo/pest/components/PestContactTrust";
import PestContactFAQ from "@/app/demo/pest/components/PestContactFAQ";
import PestContactCTA from "@/app/demo/pest/components/PestContactCTA";
import PestContactFooter from "@/app/demo/pest/components/PestContactFooter";

// HVAC fallback
import PremiumNav from "@/components/demo/PremiumNav";
import BookingPage from "@/components/demo/BookingPage";
import CTABanner from "@/components/demo/CTABanner";
import PremiumFooter from "@/components/demo/PremiumFooter";
import ThemeToggle from "@/components/shared/ThemeToggle";

interface PageProps {
  params: Promise<{ slug: string }>;
}

async function getLead(slug: string) {
  if (slug === "dashboard") return null;
  const lead = await prisma.lead.findUnique({ where: { slug } });
  return lead;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const lead = await getLead(slug);

  if (!lead) {
    return { title: "Page Not Found" };
  }

  const config = getNicheConfig(lead.niche);
  return {
    title: `Contact ${lead.businessName} | ${config.label} in ${lead.city}`,
    description: `Get in touch with ${lead.businessName}. Professional ${config.label.toLowerCase()} services in ${lead.city}. Available 24/7.`,
  };
}

export default async function LeadContactPage({ params }: PageProps) {
  const { slug } = await params;
  const lead = await getLead(slug);

  if (!lead) {
    notFound();
  }

  const { businessName, phone, city, niche } = lead;

  // Plumber
  if (niche === "plumber") {
    return (
      <main className="bg-[#FEF9F1] text-[#1D1C17] antialiased" style={{ fontFamily: "var(--font-inter)" }}>
        <PlumbingContactNav businessName={businessName} />
        <PlumbingContactHero phone={phone} />
        <PlumbingContactForm phone={phone} city={city} />
        <PlumbingMapSection />
        <PlumbingTrustSection />
        <PlumbingContactFAQ />
        <PlumbingCTAFooter />
        <PlumbingContactFooter businessName={businessName} phone={phone} city={city} />
      </main>
    );
  }

  // Roofer
  if (niche === "roofer") {
    return (
      <main className="bg-[#fbf9f6] text-[#1b1c1a] antialiased" style={{ fontFamily: "var(--font-inter-roof)" }}>
        <RoofContactNav businessName={businessName} />
        <RoofContactHero />
        <RoofContactForm phone={phone} city={city} />
        <RoofContactMap />
        <RoofContactWhyChoose />
        <RoofContactFAQ />
        <RoofContactCTA />
        <RoofContactFooter businessName={businessName} />
      </main>
    );
  }

  // Electrician
  if (niche === "electrician") {
    return (
      <main className="bg-[#f9f9ff] text-[#151c27] antialiased" style={{ fontFamily: "var(--font-inter-elec)" }}>
        <ElecContactNav businessName={businessName} phone={phone} />
        <ElecContactHero />
        <ElecContactForm phone={phone} city={city} />
        <ElecContactMap />
        <ElecContactTrust />
        <ElecContactFAQ />
        <ElecContactCTA />
        <ElecContactFooter businessName={businessName} phone={phone} />
      </main>
    );
  }

  // Pest control
  if (niche === "pest_control") {
    return (
      <main className="bg-[#f0fdf4] text-[#3d4a3d] antialiased" style={{ fontFamily: "var(--font-vietnam)" }}>
        <PestContactNav businessName={businessName} />
        <PestContactHero />
        <PestContactForm phone={phone} city={city} />
        <PestContactMap />
        <PestContactTrust />
        <PestContactFAQ />
        <PestContactCTA phone={phone} />
        <PestContactFooter businessName={businessName} />
      </main>
    );
  }

  // HVAC fallback
  const config = getNicheConfig(niche);
  const themeVars = {
    "--niche-primary": config.theme.primary,
    "--niche-secondary": config.theme.secondary,
    "--niche-glow": config.theme.glow,
    "--niche-dot": config.theme.dot,
    "--niche-dark-bg": config.theme.darkBg,
    "--niche-dark-surface": config.theme.darkSurface,
    "--niche-dark-surface-high": config.theme.darkSurfaceHigh,
    "--niche-dark-surface-highest": config.theme.darkSurfaceHigh,
    "--niche-dark-border": config.theme.darkBorder,
    "--niche-light-bg": config.theme.lightBg,
    "--niche-light-surface": config.theme.lightSurface,
    "--niche-light-surface-high": config.theme.lightSurfaceHigh,
    "--niche-light-border": config.theme.lightBorder,
    "--niche-on-surface-variant": "#a8a29e",
  } as React.CSSProperties;

  return (
    <main style={themeVars}>
      <PremiumNav businessName={businessName} phone={phone} config={config} />
      <BookingPage businessName={businessName} phone={phone} city={city} config={config} />
      <CTABanner config={config} />
      <PremiumFooter businessName={businessName} phone={phone} city={city} config={config} />
      <ThemeToggle variant="floating" />
    </main>
  );
}
