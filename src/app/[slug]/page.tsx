import { notFound } from "next/navigation";
import { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import { getNicheConfig } from "@/lib/niche-config";

// Plumbing components
import PlumbingNav from "@/app/demo/plumbing/components/PlumbingNav";
import PlumbingHero from "@/app/demo/plumbing/components/PlumbingHero";
import PlumbingAbout from "@/app/demo/plumbing/components/PlumbingAbout";
import PlumbingServices from "@/app/demo/plumbing/components/PlumbingServices";
import PlumbingWhyChooseUs from "@/app/demo/plumbing/components/PlumbingWhyChooseUs";
import PlumbingQuoteBanner from "@/app/demo/plumbing/components/PlumbingQuoteBanner";
import PlumbingFAQ from "@/app/demo/plumbing/components/PlumbingFAQ";
import PlumbingTestimonials from "@/app/demo/plumbing/components/PlumbingTestimonials";
import PlumbingInsights from "@/app/demo/plumbing/components/PlumbingInsights";
import PlumbingCTABanner from "@/app/demo/plumbing/components/PlumbingCTABanner";
import PlumbingFooter from "@/app/demo/plumbing/components/PlumbingFooter";

// Roof components
import RoofNav from "@/app/demo/roof/components/RoofNav";
import RoofHero from "@/app/demo/roof/components/RoofHero";
import RoofProblem from "@/app/demo/roof/components/RoofProblem";
import RoofServices from "@/app/demo/roof/components/RoofServices";
import RoofBeforeAfter from "@/app/demo/roof/components/RoofBeforeAfter";
import RoofSocialProof from "@/app/demo/roof/components/RoofSocialProof";
import RoofPricing from "@/app/demo/roof/components/RoofPricing";
import RoofProcess from "@/app/demo/roof/components/RoofProcess";
import RoofFAQ from "@/app/demo/roof/components/RoofFAQ";
import RoofCTA from "@/app/demo/roof/components/RoofCTA";
import RoofFooter from "@/app/demo/roof/components/RoofFooter";

// Electric components
import ElecNav from "@/app/demo/electric/components/ElecNav";
import ElecHero from "@/app/demo/electric/components/ElecHero";
import ElecDanger from "@/app/demo/electric/components/ElecDanger";
import ElecServices from "@/app/demo/electric/components/ElecServices";
import ElecSafety from "@/app/demo/electric/components/ElecSafety";
import ElecSocialProof from "@/app/demo/electric/components/ElecSocialProof";
import ElecPricing from "@/app/demo/electric/components/ElecPricing";
import ElecProcess from "@/app/demo/electric/components/ElecProcess";
import ElecFAQ from "@/app/demo/electric/components/ElecFAQ";
import ElecCertifications from "@/app/demo/electric/components/ElecCertifications";
import ElecCTA from "@/app/demo/electric/components/ElecCTA";
import ElecFooter from "@/app/demo/electric/components/ElecFooter";

// Pest components
import PestNav from "@/app/demo/pest/components/PestNav";
import PestHero from "@/app/demo/pest/components/PestHero";
import PestProblem from "@/app/demo/pest/components/PestProblem";
import PestServices from "@/app/demo/pest/components/PestServices";
import PestEcoBadge from "@/app/demo/pest/components/PestEcoBadge";
import PestSocialProof from "@/app/demo/pest/components/PestSocialProof";
import PestPlans from "@/app/demo/pest/components/PestPlans";
import PestProcess from "@/app/demo/pest/components/PestProcess";
import PestSeasonalAlert from "@/app/demo/pest/components/PestSeasonalAlert";
import PestFAQ from "@/app/demo/pest/components/PestFAQ";
import PestCTABanner from "@/app/demo/pest/components/PestCTABanner";
import PestFooter from "@/app/demo/pest/components/PestFooter";

// HVAC components
import HvacNav from "@/app/demo/hvac/components/HvacNav";
import HvacHero from "@/app/demo/hvac/components/HvacHero";
import HvacAbout from "@/app/demo/hvac/components/HvacAbout";
import HvacServices from "@/app/demo/hvac/components/HvacServices";
import HvacWhyChooseUs from "@/app/demo/hvac/components/HvacWhyChooseUs";
import HvacQuoteBanner from "@/app/demo/hvac/components/HvacQuoteBanner";
import HvacFAQ from "@/app/demo/hvac/components/HvacFAQ";
import HvacTestimonials from "@/app/demo/hvac/components/HvacTestimonials";
import HvacInsights from "@/app/demo/hvac/components/HvacInsights";
import HvacCTABanner from "@/app/demo/hvac/components/HvacCTABanner";
import HvacFooter from "@/app/demo/hvac/components/HvacFooter";

// Fallback (old generic components)
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
    title: `${lead.businessName} | ${config.label} Services in ${lead.city}`,
    description: `${lead.businessName} provides professional ${config.label.toLowerCase()} services in ${lead.city}. ${config.heroSubtext}`,
    openGraph: {
      title: `${lead.businessName} | ${config.label} in ${lead.city}`,
      description: config.heroSubtext,
      type: "website",
    },
  };
}

export default async function LeadLandingPage({ params }: PageProps) {
  const { slug } = await params;
  const lead = await getLead(slug);

  if (!lead) {
    notFound();
  }

  const { businessName, phone, city, rating, reviewCount, niche } = lead;

  // Plumber niche → Stitch plumbing design
  if (niche === "plumber") {
    return (
      <main className="bg-[#FEF9F1] text-[#1D1C17] antialiased" style={{ fontFamily: "var(--font-inter)" }}>
        <PlumbingNav businessName={businessName} phone={phone} />
        <PlumbingHero phone={phone} rating={rating} reviewCount={reviewCount} />
        <PlumbingAbout />
        <PlumbingServices />
        <PlumbingWhyChooseUs />
        <PlumbingQuoteBanner />
        <PlumbingFAQ />
        <PlumbingTestimonials />
        <PlumbingInsights />
        <PlumbingCTABanner phone={phone} />
        <PlumbingFooter businessName={businessName} phone={phone} city={city} />
      </main>
    );
  }

  // Roofer niche → Stitch roof design
  if (niche === "roofer") {
    return (
      <main className="bg-[#fbf9f6] text-[#1b1c1a] antialiased" style={{ fontFamily: "var(--font-inter-roof)" }}>
        <RoofNav businessName={businessName} phone={phone} />
        <RoofHero />
        <RoofProblem />
        <RoofServices />
        <RoofBeforeAfter />
        <RoofSocialProof />
        <RoofPricing />
        <RoofProcess />
        <RoofFAQ />
        <RoofCTA phone={phone} />
        <RoofFooter businessName={businessName} city={city} />
      </main>
    );
  }

  // Electrician niche → Stitch electric design
  if (niche === "electrician") {
    return (
      <main className="bg-[#fefce8] text-[#151c27] antialiased" style={{ fontFamily: "var(--font-inter-elec)" }}>
        <ElecNav businessName={businessName} phone={phone} />
        <ElecHero />
        <ElecDanger />
        <ElecServices />
        <ElecSafety />
        <ElecSocialProof />
        <ElecPricing />
        <ElecProcess />
        <ElecFAQ />
        <ElecCertifications />
        <ElecCTA phone={phone} />
        <ElecFooter businessName={businessName} phone={phone} city={city} />
      </main>
    );
  }

  // Pest control niche → Stitch pest design
  if (niche === "pest_control") {
    return (
      <main className="bg-[#f0fdf4] text-[#3d4a3d] antialiased" style={{ fontFamily: "var(--font-vietnam)" }}>
        <PestNav businessName={businessName} />
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
        <PestFooter businessName={businessName} phone={phone} />
      </main>
    );
  }

  // HVAC niche → Stitch HVAC design
  if (niche === "hvac") {
    return (
      <main className="bg-[#FEF9F1] text-[#1D1C17] antialiased" style={{ fontFamily: "var(--font-inter)" }}>
        <HvacNav businessName={businessName} phone={phone} />
        <HvacHero phone={phone} rating={rating} reviewCount={reviewCount} />
        <HvacAbout />
        <HvacServices />
        <HvacWhyChooseUs />
        <HvacQuoteBanner />
        <HvacFAQ />
        <HvacTestimonials />
        <HvacInsights />
        <HvacCTABanner phone={phone} />
        <HvacFooter businessName={businessName} phone={phone} city={city} />
      </main>
    );
  }

  // Fallback → old generic components
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
      <PremiumHero
        businessName={businessName}
        city={city}
        phone={phone}
        rating={rating}
        reviewCount={reviewCount}
        config={config}
      />
      <ProblemSection config={config} niche={niche} />
      <PremiumServices config={config} />
      <SeasonalOffer config={config} />
      <SocialProof config={config} />
      <PricingSection config={config} />
      <HowItWorks config={config} />
      <FAQSection config={config} />
      <BookingPage businessName={businessName} phone={phone} city={city} config={config} />
      <CTABanner config={config} />
      <PremiumFooter businessName={businessName} phone={phone} city={city} config={config} />
      <ThemeToggle variant="floating" />
    </main>
  );
}
