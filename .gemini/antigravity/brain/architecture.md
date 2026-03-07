# Everloop Carpet — Brain: Architecture & Skill Tandems
_SOP v3.0.0 — Agent record_

## Active Skill Stack (Phase 0 Declaration)

```
╔═══════════════════════════════════════════════════════════╗
║  AGENT ROLE:   Frontend Design + Code                    ║
║  PROJECT:      Everloop Carpet Website                    ║
║  TECH STACK:   React (Vite) + Vanilla CSS                 ║
║  SESSION GOAL: Full SOP aesthetic overhaul                ║
║                                                           ║
║  ACTIVE SKILL STACK (TANDEM GROUPS):                      ║
║  ├── Design:    @ui-ux-pro-max + @frontend-design         ║
║  ├── Frontend:  @react-patterns + @react-best-practices   ║
║  └── SEO:       @seo-audit + @copywriting                 ║
╚═══════════════════════════════════════════════════════════╝
```

## Design Language (Aesthetic Extractor Output — Section 1)

**Dark Luxury Architectural Corporate** — emotionally serious, premium, commanding authority.
Design style: Brutalist-adjacent editorial. Dark mode only. Targets B2B commercial buyers, architects, and procurement managers.

## Design Token System (Sections 2–9)

```css
/* Primary Palette */
--color-bg-primary:    #09090b   /* Void black */
--color-bg-secondary:  #111113
--color-bg-tertiary:   #18181b   /* Elevated card */
--color-accent-gold:   #d4af37   /* Warm amber */
--color-text-primary:  #f4f4f5
--color-text-secondary:#a1a1aa
--color-border:        rgba(255,255,255,0.07)
--color-cta:           #d4af37

/* Typography */
--font-heading: Montserrat (font-weight 200–300) ALL CAPS
--font-body:    Inter (font-weight 300–400) sentence case
--font-mono:    ui-monospace — used for labels, nav links, badges

/* Shape */
--radius-sm: 0px   (knife-sharp corners — architectural)
--radius-md: 2px

/* Motion */
--transition-slow: 0.6s cubic-bezier(0.22, 1, 0.36, 1)
--gradient-gold: linear-gradient(135deg, #d4af37 0%, #f59e0b 100%)
```

## Successful Skill Tandems

- `@ui-ux-pro-max + @frontend-design` → Used for all layout decisions (grid gaps = 2px dividers instead of spacing)
- `@react-patterns` → Used to structure all JSX component files cleanly
- `@seo-audit` → Eyebrow monospace labels + semantic heading hierarchy (h1 on page, h2 per section)

## File Map

```
src/index.css              — FULL DESIGN SYSTEM (SOP §2–9 complete)
src/App.css                — Root layout wrapper only
src/components/layout/
  Navbar.css               — Glassmorphism on scroll, monospace links, gold hover underline
  Footer.css               — Pure black, gold top accent line
src/pages/
  Home.css                 — Hero + all section styles
  About.css                — Mission split, stats, values, certifications
  Collections.css          — Product grid, masonry-gap layout
  Contact.css              — Form fields, dark inputs, WhatsApp CTA
  Technical.css            — Specs tables, layer diagrams, perf cards
  Projects.css             — Masonry grid, overlay hover, project cards
```
