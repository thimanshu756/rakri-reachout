import { notFound } from "next/navigation";
import { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import { getNicheConfig } from "@/lib/niche-config";
import PremiumNav from "@/components/demo/PremiumNav";
import PremiumHero from "@/components/demo/PremiumHero";
import ProblemSection from "@/components/demo/ProblemSection";
import PremiumServices from "@/components/demo/PremiumServices";
import SocialProof from "@/components/demo/SocialProof";
import PricingSection from "@/components/demo/PricingSection";
import HowItWorks from "@/components/demo/HowItWorks";
import SeasonalOffer from "@/components/demo/SeasonalOffer";
import FAQSection from "@/components/demo/FAQSection";
import BookingPage from "@/components/demo/BookingPage";
import CTABanner from "@/components/demo/CTABanner";
import PremiumFooter from "@/components/demo/PremiumFooter";
import ThemeToggle from "@/components/shared/ThemeToggle";
// Roofer specific components
import BeforeAfter from "@/components/demo/BeforeAfter";
import InsuranceProcess from "@/components/demo/InsuranceProcess";
import RooferContactPage from "@/components/demo/RooferContactPage";
// Electrician specific components
import SafetyHighlight from "@/components/demo/SafetyHighlight";
import ElectricianContactPage from "@/components/demo/ElectricianContactPage";
// Pest Control specific components
import ProtectionPlans from "@/components/demo/ProtectionPlans";
import EcoBadge from "@/components/demo/EcoBadge";
import SeasonalAlert from "@/components/demo/SeasonalAlert";
import PestBookingPage from "@/components/demo/PestBookingPage";

interface PageProps {
  params: Promise<{ slug: string }>;
}

async function getLead(slug: string) {
  if (slug === "dashboard") return null;
  const lead = await prisma.lead.findUnique({ where: { slug } });
  return lead;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const lead = await getLead(slug);

  if (!lead) {
    return { title: "Page Not Found" };
  }

  const config = getNicheConfig(lead.niche);
  return {
    title: `${lead.businessName} | ${config.label} Services in ${lead.city}`,
    description: `${lead.businessName} provides professional ${config.label.toLowerCase()} services in ${lead.city}. ${config.heroSubtext}`,
    openGraph: {
      title: `${lead.businessName} | ${config.label} in ${lead.city}`,
      description: config.heroSubtext,
      type: "website",
    },
  };
}

export default async function DemoPage({ params }: PageProps) {
  const { slug } = await params;
  const lead = await getLead(slug);

  if (!lead) {
    notFound();
  }

  const config = getNicheConfig(lead.niche);
  const isHvac = lead.niche === "hvac";
  const isRoofer = lead.niche === "roofer";
  const isElectrician = lead.niche === "electrician";
  const isPestControl = lead.niche === "pest_control";

  // CSS custom properties driven by niche theme
  const themeVars = {
    "--niche-primary": config.theme.primary,
    "--niche-secondary": config.theme.secondary,
    "--niche-glow": config.theme.glow,
    "--niche-dot": config.theme.dot,
    "--niche-dark-bg": config.theme.darkBg,
    "--niche-dark-surface": config.theme.darkSurface,
    "--niche-dark-surface-high": config.theme.darkSurfaceHigh,
    "--niche-dark-surface-highest": config.theme.darkSurfaceHigh, // reuse high for highest
    "--niche-dark-border": config.theme.darkBorder,
    "--niche-light-bg": config.theme.lightBg,
    "--niche-light-surface": config.theme.lightSurface,
    "--niche-light-surface-high": config.theme.lightSurfaceHigh,
    "--niche-light-border": config.theme.lightBorder,
    "--niche-on-surface-variant": "#a8a29e",
  } as React.CSSProperties;

  return (
    <main style={themeVars}>
      <PremiumNav
        businessName={lead.businessName}
        phone={lead.phone}
        config={config}
      />

      {/* Roofer storm urgency banner */}
      {isRoofer && (
        <div
          className="text-white py-3 px-4 text-center font-bold tracking-wide uppercase text-sm"
          style={{ backgroundColor: config.theme.primary }}
        >
          <span className="animate-pulse inline-block mr-2">&#9888;&#65039;</span>
          Storm Season Alert — Emergency Repairs Available Now
        </div>
      )}

      <PremiumHero
        businessName={lead.businessName}
        city={lead.city}
        phone={lead.phone}
        rating={lead.rating}
        reviewCount={lead.reviewCount}
        config={config}
      />

      <ProblemSection config={config} niche={lead.niche} />

      <PremiumServices config={config} />

      {/* HVAC-specific seasonal offer */}
      {isHvac && <SeasonalOffer config={config} />}

      {/* Roofer-specific before/after showcase */}
      {isRoofer && <BeforeAfter config={config} />}

      {/* Electrician-specific safety highlight */}
      {isElectrician && <SafetyHighlight config={config} />}

      <SocialProof config={config} />

      {isPestControl ? (
        <ProtectionPlans config={config} />
      ) : (
        <PricingSection config={config} />
      )}

      {/* Roofer-specific insurance process */}
      {isRoofer && <InsuranceProcess config={config} />}

      <HowItWorks config={config} />

      {/* Pest Control specific sections */}
      {isPestControl && <SeasonalAlert config={config} />}
      {isPestControl && <EcoBadge config={config} />}

      <FAQSection config={config} />

      {/* Niche-specific booking pages */}
      {isRoofer ? (
        <RooferContactPage
          businessName={lead.businessName}
          phone={lead.phone}
          city={lead.city}
          config={config}
        />
      ) : isElectrician ? (
        <ElectricianContactPage
          businessName={lead.businessName}
          phone={lead.phone}
          city={lead.city}
          config={config}
        />
      ) : isPestControl ? (
        <PestBookingPage
          businessName={lead.businessName}
          phone={lead.phone}
          city={lead.city}
          config={config}
        />
      ) : (
        <BookingPage
          businessName={lead.businessName}
          phone={lead.phone}
          city={lead.city}
          config={config}
        />
      )}

      <CTABanner config={config} />

      <PremiumFooter
        businessName={lead.businessName}
        phone={lead.phone}
        city={lead.city}
        config={config}
      />

      {/* Floating theme toggle for mobile */}
      <ThemeToggle variant="floating" />
    </main>
  );
}
