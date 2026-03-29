# Stitch Design Implementation — 5 Phases (50 tasks)

## Overview
Implementing 10 premium Stitch-designed screens (5 niches × landing + contact page) into Next.js with dark/light mode toggle. Each HTML file is 500+ lines with custom Tailwind config, glassmorphism effects, gradient text, Material Symbols icons, and niche-specific color systems.

## HTML Files Downloaded
All at `/tmp/stitch-designs/`:
- `plumber-landing.html` (33KB), `plumber-contact.html` (23KB)
- `hvac-landing.html` (31KB), `hvac-contact.html` (25KB)
- `roofer-landing.html` (32KB), `roofer-contact.html` (26KB)
- `electrician-landing.html` (33KB), `electrician-contact.html` (21KB)
- `pest-landing.html` (33KB), `pest-contact.html` (25KB)

## Shared Foundation (before Phase 1)
These are shared components/config needed by all 5 niches:

### F.1 — Dark/Light Theme System
- Add `next-themes` package
- Create ThemeProvider wrapper in layout.tsx
- Create ThemeToggle component (nav + floating)
- Update globals.css with CSS variables for dark/light
- Update tailwind.config.ts with `darkMode: "class"`

### F.2 — Shared Premium Components
- PremiumNav (fixed, glassmorphism, theme toggle, responsive hamburger)
- PremiumFooter (dark footer with credits)
- GlassCard (reusable glassmorphism card)
- GradientText (gradient text component)
- AnimatedCounter (scroll-triggered counter)
- CTABanner (final conversion banner with urgency)
- FAQAccordion (expandable FAQ)
- PricingCard (3-tier pricing with "popular" highlight)
- ContactForm (premium form with validation)

### F.3 — Niche Theme Config Update
- Update niche-config.ts with full color tokens per niche (dark + light variants)
- Each niche needs: bg-dark, bg-light, primary, primaryGlow, gradientFrom, gradientTo, glassBg, glassBorder, surface colors for both modes

---

## Phase 1: Plumber (Mike's Plumbing) — 10 tasks

| # | Task | Source | Output |
|---|------|--------|--------|
| 1.1 | Setup dark/light theme system (next-themes, ThemeProvider, CSS vars) | Foundation | `layout.tsx`, `globals.css`, `tailwind.config.ts` |
| 1.2 | Build ThemeToggle component (nav version + floating version) | Foundation | `src/components/shared/ThemeToggle.tsx` |
| 1.3 | Build PremiumNav (glassmorphism fixed nav, logo, links, phone CTA, theme toggle, mobile menu) | `plumber-landing.html` lines 103-113 | `src/components/shared/PremiumNav.tsx` |
| 1.4 | Build PremiumHero (gradient bg, ambient glow blobs, glass badge, gradient headline, dual CTA, trust pills) | `plumber-landing.html` lines 114-158 | `src/components/demo/PremiumHero.tsx` |
| 1.5 | Build ProblemSection (stat counter cards, pain points, CTA arrow) | `plumber-landing.html` lines 160-186 | `src/components/demo/ProblemSection.tsx` |
| 1.6 | Build PremiumServices (gradient title, 6 glass cards with icon + hover lift + glow) | `plumber-landing.html` lines 188-250 | `src/components/demo/PremiumServices.tsx` |
| 1.7 | Build SocialProof (dark section, 4 animated counters, 3 glassmorphism testimonials) | `plumber-landing.html` ~lines 250-350 | `src/components/demo/SocialProof.tsx` |
| 1.8 | Build PricingSection (3 cards: basic/popular/premium with glow on popular) + HowItWorks (3 steps) + FAQ accordion | `plumber-landing.html` ~lines 350-450 | `src/components/demo/PricingSection.tsx`, `HowItWorks.tsx`, `FAQSection.tsx` |
| 1.9 | Build CTABanner (final conversion: gradient bg, urgency text, dual CTA, trust checks) + PremiumFooter | `plumber-landing.html` ~lines 450-524 | `src/components/demo/CTABanner.tsx`, `shared/PremiumFooter.tsx` |
| 1.10 | Build plumber contact/booking page (hero banner, 2-column form+trust, why-us, map, final CTA) | `plumber-contact.html` full | `src/components/demo/BookingPage.tsx` |

---

## Phase 2: HVAC (ComfortPro) — 10 tasks

| # | Task |
|---|------|
| 2.1 | Extract HVAC color tokens from `hvac-landing.html` tailwind config, add to niche-config |
| 2.2 | Identify HVAC-specific design differences (warm gradients, temperature icons, seasonal offer) |
| 2.3 | Adapt PremiumHero for HVAC (warm orange gradients, comfort messaging, seasonal badge) |
| 2.4 | Adapt ProblemSection for HVAC (energy cost stats, maintenance stats) |
| 2.5 | Adapt PremiumServices for HVAC (6 HVAC services, orange accent cards) |
| 2.6 | Build SeasonalOffer component (HVAC-specific: AC tune-up banner with timer feel) |
| 2.7 | Adapt SocialProof for HVAC (350+ families, comfort testimonials) |
| 2.8 | Adapt PricingSection for HVAC ($89 tune-up, $29/mo plan, $149 emergency) |
| 2.9 | Adapt FAQ + CTABanner for HVAC messaging |
| 2.10 | Build HVAC contact/booking page from `hvac-contact.html` |

---

## Phase 3: Roofer (StrongRoof Co.) — 10 tasks

| # | Task |
|---|------|
| 3.1 | Extract Roofer color tokens from `roofer-landing.html`, add to niche-config |
| 3.2 | Identify Roofer-specific sections (before/after, insurance process, storm urgency) |
| 3.3 | Adapt PremiumHero for Roofer (dark slate, red CTAs, storm alert banner) |
| 3.4 | Adapt ProblemSection for Roofer ($10K damage stats, insurance denial stats) |
| 3.5 | Adapt PremiumServices for Roofer (6 roofing services, red accent, bold style) |
| 3.6 | Build BeforeAfter component (Roofer-specific: side-by-side comparison placeholders) |
| 3.7 | Build InsuranceProcess component (4-step claim process, Roofer-specific) |
| 3.8 | Adapt SocialProof + Pricing for Roofer (FREE inspection, $299 repair, $4999 replacement) |
| 3.9 | Adapt FAQ + CTABanner for Roofer (storm urgency messaging) |
| 3.10 | Build Roofer contact/booking page from `roofer-contact.html` (insurance toggle, photo upload) |

---

## Phase 4: Electrician (PowerLine Electric) — 10 tasks

| # | Task |
|---|------|
| 4.1 | Extract Electrician color tokens from `electrician-landing.html`, add to niche-config |
| 4.2 | Identify Electrician-specific design (circuit patterns, neon glow, yellow on navy) |
| 4.3 | Adapt PremiumHero for Electrician (navy bg, circuit pattern, yellow neon CTA, safety badge) |
| 4.4 | Adapt ProblemSection for Electrician (fire safety stats, panel overload stats) |
| 4.5 | Adapt PremiumServices for Electrician (6 electrical services, yellow glow cards) |
| 4.6 | Build SafetyHighlight component (Electrician-specific: dark section, 3 safety points) |
| 4.7 | Adapt SocialProof for Electrician (250+ jobs, code pass rate) |
| 4.8 | Adapt PricingSection for Electrician ($79 service call, $1499 panel, $899 EV charger) |
| 4.9 | Adapt FAQ + CTABanner for Electrician (neon glow aesthetic) |
| 4.10 | Build Electrician contact/booking page from `electrician-contact.html` (emergency banner) |

---

## Phase 5: Pest Control (GreenShield) — 10 tasks

| # | Task |
|---|------|
| 5.1 | Extract Pest Control color tokens from `pest-landing.html`, add to niche-config |
| 5.2 | Identify Pest Control-specific sections (protection plans, eco badge, seasonal alert) |
| 5.3 | Adapt PremiumHero for Pest Control (dark green, organic pattern, shield badge) |
| 5.4 | Adapt ProblemSection for Pest Control (termite damage stats, bacteria stats) |
| 5.5 | Adapt PremiumServices for Pest Control (6 pest services, green glow cards) |
| 5.6 | Build ProtectionPlans component (One-Time/Quarterly/Annual with "Most Popular" badge) |
| 5.7 | Build EcoBadge component (EPA approved, pet-safe, child-friendly) |
| 5.8 | Build SeasonalAlert component (spring pest season banner) |
| 5.9 | Adapt SocialProof + FAQ + CTABanner for Pest Control |
| 5.10 | Build Pest Control contact/booking page from `pest-contact.html` |

---

## Key Architecture Decisions

### Dynamic Rendering Strategy
Each component receives `nicheTheme` prop with all color tokens. The `[slug]/page.tsx` route:
1. Reads lead from MongoDB
2. Gets niche theme config
3. Passes theme to all components
4. Components render with dynamic colors via CSS variables or Tailwind arbitrary values

### Dark/Light Mode
- `next-themes` with `class` strategy
- CSS variables for theme-dependent colors
- Each niche has `dark` and `light` color sets
- Toggle in nav (desktop) + floating button (mobile)

### Component Reuse
~70% of components are shared across niches. Niche-specific components:
- Plumber: standard (all shared)
- HVAC: SeasonalOffer
- Roofer: BeforeAfter, InsuranceProcess
- Electrician: SafetyHighlight
- Pest Control: ProtectionPlans, EcoBadge, SeasonalAlert
