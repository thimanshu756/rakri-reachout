# RakriAI — Professional Websites for Local Businesses

## Project Overview
Next.js 16 App Router application that generates professional demo websites for local service businesses (plumbing, electrician, roofer, pest control, HVAC). Includes a lead management dashboard, outreach tools, and niche-specific demo pages.

## Tech Stack
- **Framework**: Next.js 16 (App Router, React 19)
- **Styling**: Tailwind CSS v4 (`@import "tailwindcss"` syntax)
- **Fonts**: Manrope (headlines via `--font-manrope`) + Inter (body via `--font-inter`)
- **Icons**: Material Symbols Outlined (loaded globally via Google Fonts CDN)
- **Database**: Prisma + PostgreSQL
- **Deployment**: Vercel

## Stitch Skills (IMPORTANT)
This project has 7 Stitch agent skills installed in `.agents/skills/`. **Use these skills during UI design and implementation workflows:**

| Skill | When to Use |
|---|---|
| `enhance-prompt` | Before generating Stitch designs — enriches rough prompts with UI/UX keywords |
| `stitch-design` | Full UI design workflow — generates screens via Stitch MCP, manages DESIGN.md |
| `design-md` | Extract design system from existing Stitch screens into DESIGN.md |
| `react-components` | Convert Stitch screens to production React components (Atomic Design) |
| `shadcn-ui` | Integrate shadcn/ui components into React apps |
| `remotion` | Generate walkthrough videos from Stitch screens |
| `stitch-loop` | Autonomous multi-page build loop with baton-passing pattern |

**Workflow chain**: `enhance-prompt` → `stitch-design` → `react-components`

Refer to each skill's `SKILL.md` for detailed instructions.

## Project Structure
```
src/
├── app/
│   ├── [slug]/page.tsx       # Dynamic lead demo pages (DB-driven)
│   ├── api/                  # REST API routes (leads, auth, email)
│   ├── dashboard/            # Lead management dashboard
│   ├── demo/plumbing/        # Static plumbing demo (Stitch design)
│   │   ├── page.tsx          # Landing page
│   │   ├── contact/page.tsx  # Contact page
│   │   └── components/       # All plumbing components
│   └── layout.tsx            # Root layout (fonts, theme provider)
├── components/
│   ├── demo/                 # Shared demo components (generic niches)
│   ├── dashboard/            # Dashboard UI components
│   └── shared/               # ThemeProvider, ThemeToggle
├── lib/                      # Prisma client, niche configs
demo/                         # Outreach scripts, lead CSVs, niche prototypes
```

## Design Patterns

### Niche Demo Pages (e.g., `/demo/plumbing`)
- Each niche has its own `theme.ts` with colors, data, and design tokens
- Components use **inline styles** for theme colors (not Tailwind color utilities) to avoid dark mode conflicts
- Use `style={{ fontFamily: "var(--font-manrope)" }}` for headlines, `var(--font-inter)` for body
- Material Symbols icons: `<span className="material-symbols-outlined">icon_name</span>`
- Filled icons: add `style={{ fontVariationSettings: "'FILL' 1" }}`
- Follow Stitch design system principles: no borders between sections (use bg color shifts), ghost borders (`1px solid rgba(197, 198, 208, 0.15)`), ambient shadows (`0 4px 24px rgba(26,43,90,0.06)`)

### Dynamic Lead Pages (`/[slug]`)
- DB-driven via Prisma, uses `getNicheConfig()` for niche-specific themes
- CSS custom properties for theming (`--niche-primary`, etc.)
- Components accept `config` prop from niche config

## Commands
- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run lint` — ESLint check

## Key Colors (Plumbing Niche)
- Primary: `#011545` (Navy)
- Secondary: `#7E5700` (Golden Brass)
- Background: `#FEF9F1` (Warm Cream)
- Surface tiers: `#F8F3EB`, `#F2EDE5`, `#ECE8E0`, `#E7E2DA`
