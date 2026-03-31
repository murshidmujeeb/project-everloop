# EVERLOOP CARPET — Rebranding Report
### Inspired by Squarespace Design Language
**Prepared:** March 2026 | **Source:** everloop-carpet.com → squarespace.com

---

## Executive Summary

This report analyses Squarespace's homepage design system and translates each design decision directly onto Everloop Carpet's existing website. The goal is not to rebuild — it is to **restyle and reorganise** what already exists (hero, product grid, about section, USPs, contact) using Squarespace's editorial, minimalist aesthetic. Every recommendation maps to a specific Squarespace pattern observed in their live site.

---

## 1. Inspired Typography

### What Squarespace Does
Squarespace runs a two-typeface system: a **geometric sans-serif** for UI and body copy, and a **high-contrast editorial serif** for large headings. The heading serif is typically set at enormous scale — 72–96px on desktop — with tight leading. Navigation and small labels use all-caps tracking (`letter-spacing: 0.12em`).

### Apply to Everloop Carpet

| Element | Current State | Squarespace-Inspired Change |
|---|---|---|
| Hero Headline | Generic web font, moderate size | **Playfair Display** or **Cormorant Garamond** — 80px desktop / 48px mobile, `font-weight: 700`, `line-height: 1.05` |
| Sub-headline / Tagline | Plain paragraph text | **"Engineered for Longevity"** — set in `letter-spacing: 0.15em`, uppercase, `font-size: 13px`, muted colour |
| Navigation Links | Standard weight | `font-family: Inter` or `DM Sans`, `font-size: 14px`, `font-weight: 500`, `letter-spacing: 0.04em` |
| Section Headings (H2) | Inconsistent sizing | Serif, 48px, `font-weight: 700`, left-aligned or centred depending on layout |
| Body / Description | Variable | `Inter` or `DM Sans`, `font-size: 16–17px`, `line-height: 1.7`, `color: #4a4a4a` |
| CTA Button Labels | Generic | Uppercase, `letter-spacing: 0.08em`, `font-size: 13px`, `font-weight: 600` |
| Product Card Titles | No clear system | Serif for product name (18px), sans-serif for category label (11px, all-caps, tracked) |

**Google Fonts Pairing (free, production-ready):**
```
Primary Serif:   Playfair Display — headings, hero text
Primary Sans:    DM Sans — nav, body, labels, buttons
Monospace:       (not needed)
```

---

## 2. Inspired UI Layout

### What Squarespace Does
Squarespace's homepage follows a strict editorial vertical rhythm:
1. Full-viewport sticky nav (transparent → white on scroll)
2. Full-bleed hero with centred headline + single CTA
3. Scrolling card carousel ("Grow your business")
4. Split alternating text-image rows
5. Stats bar (social proof numbers)
6. Feature grid cards (3-column)
7. Numbered steps section ("How to build a website")
8. FAQ accordion
9. Full-width CTA banner with video background
10. Multi-column footer

### Apply to Everloop Carpet — Page-by-Page Layout Map

#### Homepage Layout (Squarespace-Inspired)

```
┌─────────────────────────────────────────┐
│  NAVBAR  Logo  [Products] [About] [Contact]  [Get a Quote →]  │
│  Sticky, transparent → white on scroll                         │
├─────────────────────────────────────────┤
│  HERO (100vh)                           │
│  Full-bleed room photography            │
│  ─────────────────────────────────────  │
│  LOOP. LAST. LIVE.         ← serif 80px │
│  Carpet engineered for a lifetime       │
│  [Explore Collections →]                │
├─────────────────────────────────────────┤
│  SOCIAL PROOF BAR  (dark bg #1a1a1a)    │
│  [ 15+ Years ] [ 100% Recyclable ] [ Lifetime Warranty ]       │
├─────────────────────────────────────────┤
│  COLLECTIONS CAROUSEL (horizontal scroll)│
│  Card 1 · Card 2 · Card 3 · Card 4      │
│  Each: full-image top, name, material   │
├─────────────────────────────────────────┤
│  SPLIT ROW — Left: image | Right: text  │
│  "Designed for Circularity"             │
│  [Learn About Our Process →]            │
├─────────────────────────────────────────┤
│  SPLIT ROW — Left: text | Right: image  │
│  "Crafted to Outlast Trends"            │
├─────────────────────────────────────────┤
│  3-COLUMN FEATURE GRID                  │
│  [Recycled Fibre] [Loop Construction] [Easy Returns] │
├─────────────────────────────────────────┤
│  NUMBERED STEPS — "How It Works"        │
│  01 → 02 → 03 → 04                     │
├─────────────────────────────────────────┤
│  FULL-WIDTH CTA BANNER                  │
│  "Your floor, built to last."  [Get a Quote] │
├─────────────────────────────────────────┤
│  FOOTER — 4 columns + copyright        │
└─────────────────────────────────────────┘
```

---

## 3. Inspired Plugins / Functionality

### What Squarespace Uses

| Squarespace Feature | What It Does | Everloop Equivalent |
|---|---|---|
| **Fluid Engine** | Drag-drop grid editor | Gutenberg / Elementor / Webflow (depending on your platform) |
| **Acuity Scheduling** | Booking widget embedded in page | Calendly embed for "Book a Consultation" |
| **Blueprint AI** | Auto-generates site from prompts | Not needed — use report to guide manual redesign |
| **Squarespace Extensions** | 3rd-party plugins marketplace | If on WordPress: WooCommerce + relevant add-ons |
| **Video Backgrounds** | Looping `.webm` behind hero text | Any CMS supports `<video autoplay muted loop>` in hero |
| **Lazy-load Images** | Native `loading="lazy"` | Enable in WordPress via plugin or native (WP 5.5+) |
| **FAQ Accordion** | Expand/collapse Q&A | jQuery accordion or HTML `<details>` element |
| **Cookie Consent Banner** | EU/GDPR compliant pop-up | CookieYes or Complianz plugin |
| **Analytics** | Built-in traffic dashboard | Google Analytics 4 + Google Search Console |
| **Email Marketing** | Integrated campaign builder | Mailchimp embed or Klaviyo |
| **Social Feed Widget** | Instagram grid on site | Smash Balloon (WordPress) or Elfsight |

**Priority for Everloop:** Implement the Calendly booking embed, lazy-load images, FAQ accordion, and cookie consent as the first four plugin-level additions — these match Squarespace's highest-value UX additions for a product/service site.

---

## 4. Inspired Colour Theme

### What Squarespace Uses
Squarespace's 2025 homepage palette is intentionally minimal. It creates contrast through **black vs. white** rather than multiple accent colours, with one warm mid-tone applied sparingly.

| Role | Squarespace Value | Description |
|---|---|---|
| Background (primary) | `#FFFFFF` | Pure white — sections breathe |
| Background (accent) | `#F5F5F0` | Warm off-white for alternating sections |
| Background (dark) | `#1A1A1A` | Near-black for stat bars, CTAs |
| Primary text | `#1A1A1A` | Not pure black — softer |
| Secondary text | `#6B6B6B` | Subheadings, labels, captions |
| Muted text | `#9A9A9A` | Timestamps, footnotes |
| Primary CTA button | `#1A1A1A` (bg) + `#FFFFFF` (text) | Solid black button |
| Hover state | Slight opacity reduction or border reveal | No hard colour change |
| Link colour | `#1A1A1A` with underline on hover | No blue links |

### Recommended Everloop Carpet Palette (Squarespace-Inspired + On-Brand)

```css
/* ── EVERLOOP CARPET — REBRAND PALETTE ─────────────── */
--color-bg-primary:    #FFFFFF;       /* Main page background */
--color-bg-warm:       #F7F5F1;       /* Alternate section bg — warm cream */
--color-bg-dark:       #1C1C1A;       /* Hero overlays, stat bar, footer */
--color-bg-card:       #F0EDE8;       /* Product card background */

--color-text-primary:  #1C1C1A;       /* Headings, main body */
--color-text-secondary:#5E5C56;       /* Supporting copy, captions */
--color-text-muted:    #9C9A94;       /* Labels, timestamps */
--color-text-inverse:  #FFFFFF;       /* Text on dark backgrounds */

--color-accent:        #8B7355;       /* Warm tan — used sparingly on links/icons */
--color-accent-light:  #D4C5A9;       /* Borders, dividers, soft highlights */

--color-cta-bg:        #1C1C1A;       /* Primary button background */
--color-cta-text:      #FFFFFF;       /* Primary button text */
--color-cta-hover-bg:  #3A3A38;       /* Button hover state */
```

**Why this works for carpet:** The warm off-whites (`#F7F5F1`, `#F0EDE8`) and the tan accent (`#8B7355`) evoke natural fibre, woven texture, and sustainability — perfect for a carpet brand — while the Squarespace-style black/white contrast keeps it modern and editorial.

---

## 5. Inspired Box Properties (Spacing System)

### What Squarespace Does
Squarespace uses a generous **8px base grid** with large section breathing room. Their key spacing decisions:

- Section vertical padding: `120px` top and bottom (desktop), `64px` (mobile)
- Container max-width: `1280px` with `48px` horizontal padding
- Card internal padding: `32px`
- Button padding: `14px 32px`
- Grid gap between cards: `24px` (desktop), `16px` (mobile)
- Navbar height: `72px` (sticky)
- Hero minimum height: `100vh`

### Apply to Everloop Carpet

```css
/* ── SPACING SYSTEM ─────────────────────────────────── */

/* Container */
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 48px;          /* Desktop */
}
@media (max-width: 768px) {
  .container { padding: 0 24px; }
}

/* Section rhythm */
.section {
  padding: 120px 0;         /* Desktop sections */
}
.section--compact {
  padding: 80px 0;          /* Tighter sections (e.g. stat bar) */
}
@media (max-width: 768px) {
  .section     { padding: 64px 0; }
  .section--compact { padding: 48px 0; }
}

/* Cards */
.card {
  padding: 32px;
  border-radius: 4px;       /* Squarespace uses nearly zero rounding */
  gap: 24px;                /* Grid gap between cards */
}

/* Buttons */
.btn-primary {
  padding: 14px 32px;
  border-radius: 2px;       /* Barely rounded — very Squarespace */
  letter-spacing: 0.08em;
}

/* Navbar */
.navbar {
  height: 72px;
  padding: 0 48px;
}

/* Hero */
.hero {
  min-height: 100vh;
  padding: 0;               /* Full bleed — no padding inside hero */
}

/* Heading margin */
h2.section-title {
  margin-bottom: 16px;
}
p.section-sub {
  margin-bottom: 48px;
}

/* Split row image-text gap */
.split-row {
  gap: 80px;                /* Space between image and text in split rows */
  align-items: center;
}

/* Card grid */
.card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
@media (max-width: 900px) {
  .card-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 600px) {
  .card-grid { grid-template-columns: 1fr; }
}
```

---

## 6. Inspired Responsiveness

### What Squarespace Does
Squarespace uses a **three-breakpoint mobile-first approach:**

| Breakpoint | Trigger | Key Changes |
|---|---|---|
| Desktop | `> 1024px` | Full layout, horizontal carousels, 3-col grids |
| Tablet | `768px–1024px` | 2-col grids, narrower nav, slightly smaller type |
| Mobile | `< 768px` | Single column, hamburger nav, stacked split rows, 48px section padding |

**Key Squarespace responsive patterns observed:**

1. **Hamburger menu at `< 1024px`** — nav collapses, hamburger icon top-right, full-screen overlay menu
2. **Hero text shrinks linearly** — `clamp(40px, 7vw, 96px)` — no hard breakpoint jump
3. **Cards stack vertically** — 3-col → 2-col → 1-col across breakpoints
4. **Split rows stack** — on mobile, image always comes first (above text)
5. **Carousels become swipeable** — touch-scroll with hidden scrollbar on mobile
6. **Buttons go full-width** — on mobile, CTAs stretch to `width: 100%`
7. **Section padding halves** — `120px` → `64px`
8. **Font size uses fluid scaling** — CSS `clamp()` instead of media query font overrides

### Apply to Everloop Carpet

```css
/* Fluid hero headline — scales smoothly between 40px and 80px */
.hero-title {
  font-size: clamp(40px, 6.5vw, 80px);
  line-height: 1.05;
}

/* Fluid section title */
.section-title {
  font-size: clamp(28px, 4vw, 52px);
}

/* Nav collapses at 1024px */
@media (max-width: 1024px) {
  .nav-links   { display: none; }
  .nav-hamburger { display: block; }
  .nav-overlay { display: flex; flex-direction: column; }
}

/* Stack split rows on mobile */
@media (max-width: 768px) {
  .split-row {
    flex-direction: column;
    gap: 32px;
  }
  .split-row .image { order: 1; }
  .split-row .text  { order: 2; }
}

/* Full-width buttons on mobile */
@media (max-width: 600px) {
  .btn-primary { width: 100%; text-align: center; }
}
```

---

## 7. Inspired UI Elements

### What Squarespace Uses — and Direct Everloop Equivalents

#### 7.1 Sticky Transparent Navbar
- **Squarespace:** Nav starts transparent over hero image, transitions to `background: white; box-shadow: 0 1px 0 #E5E5E5` on scroll past 80px
- **Everloop:** Apply `position: sticky; top: 0` to existing nav; add JavaScript `scroll` listener to toggle `.scrolled` class

#### 7.2 Full-Bleed Hero with Overlay
- **Squarespace:** Full `100vh` hero, image covers entirely via `object-fit: cover`, a semi-transparent gradient overlay at bottom-left, headline + subline + CTA centred
- **Everloop:** Use existing homepage hero image; add CSS gradient overlay `linear-gradient(to right, rgba(28,28,26,0.55) 0%, transparent 60%)`; position headline left-aligned

#### 7.3 Horizontal Scrolling Card Carousel
- **Squarespace:** "Grow your business" section — horizontal scroll with `overflow-x: auto; scroll-snap-type: x mandatory`, each card `scroll-snap-align: start`
- **Everloop:** Use this for the **Collections** section — let users scroll through carpet collections horizontally on desktop, swipe on mobile

#### 7.4 Stat / Trust Bar
- **Squarespace:** Dark background bar with 3 large numbers (`14M+`, `$36B+`, `200+`) in large sans-serif with small labels below
- **Everloop:** Apply same pattern using Everloop's own numbers, for example:
  ```
  [ 15+ Years ] · [ 100% Recycled Backing ] · [ Lifetime Return Credit ]
  ```

#### 7.5 Split Image-Text Rows (Alternating)
- **Squarespace:** Two-column `50/50` rows, image fills left col, text right; next row reverses. Image has no border-radius (square crop)
- **Everloop:** Use for "About Our Process" and "Designing for Longevity" content blocks

#### 7.6 3-Column Feature Icon Cards
- **Squarespace:** White cards, minimal icon (line style), short heading, 2-line description
- **Everloop:** Use for USP section — Recycled Materials / Loop Construction / Return Programme

#### 7.7 Numbered Steps Section
- **Squarespace "How to build a website":** Large step numbers (01, 02, 03…) in a serif or bold sans, followed by short step title and a one-line description
- **Everloop:** "How It Works" — 01 Browse Collections → 02 Request Sample → 03 Get Measured → 04 Installation

#### 7.8 FAQ Accordion
- **Squarespace:** Bordered rows, `+` icon on right toggles open; smooth `max-height` transition; no custom library — pure CSS/JS
- **Everloop:** Add "Common Questions" section — covers care, recycling, installation, warranty

#### 7.9 Full-Width Dark CTA Banner
- **Squarespace:** `background: #1A1A1A`, centred headline in white serif, one white-bordered ghost button
- **Everloop:** "Ready to find your perfect carpet?" with `[Request a Sample]` button

#### 7.10 Multi-Column Footer
- **Squarespace:** 5 columns — Products / Solutions / Resources / Company / Follow; copyright + terms at very bottom on dark background
- **Everloop footer columns:**
  ```
  Collections | Company | Support | Follow Us
  ```

#### 7.11 Hover Micro-interactions
- **Squarespace:** Cards lift with `transform: translateY(-4px); box-shadow: 0 12px 32px rgba(0,0,0,0.08)` on hover — no colour change
- **Everloop:** Apply same to all collection cards and feature cards

```css
.card {
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
}
```

---

## 8. Image Placeholder Recommendations

### What Squarespace Uses
Squarespace's homepage exclusively uses:
- **Full-bleed lifestyle photography** (real environments, real people using products)
- **No stock photo clichés** — everything feels editorial
- **Video loops** in hero (.webm, autoplay, muted, looped)
- **Square or portrait crop** for product/collection cards
- **Dark, moody, high-contrast** options for hero; **bright, airy** for mid-page sections
- **Minimal white-space images** for the feature/tool cards

### Recommended Everloop Carpet Image Placeholders

| Section | Image Type | Squarespace Equivalent | Suggested Subject |
|---|---|---|---|
| **Hero** | Full-bleed landscape, `100vw × 100vh` | Plants/lifestyle hero | Richly textured carpet in a warm, naturally lit living room. Low camera angle. Person barefoot on carpet. |
| **Hero (video loop)** | `.webm`, 10–15s, no sound | Squarespace plant grow video | Aerial slow-pan over carpet texture; or someone walking on loop-pile carpet in slow motion |
| **Stats Bar** | No image — dark bg only | — | — |
| **Collection Card 1** | Square `600×600px` | Product card images | Close-up overhead of loop-pile texture — neutral cream tones |
| **Collection Card 2** | Square `600×600px` | — | Terracotta/rust-toned loop carpet in a modern dining room |
| **Collection Card 3** | Square `600×600px` | — | Charcoal grey carpet in a minimalist bedroom |
| **Collection Card 4** | Square `600×600px` | — | Natural wool carpet, raw texture close-up |
| **Split Row 1 (About)** | Tall portrait `700×900px` | — | Manufacturing shot — recycled fibres, machinery, hands touching raw material |
| **Split Row 2 (Quality)** | Tall portrait `700×900px` | — | Finished room installation, editorial photography, bright daylight |
| **Feature Card Icons** | SVG line icons `48×48px` | Squarespace tool icons | Leaf (recyclable), loop diagram (construction), arrow circle (returns), shield (warranty) |
| **CTA Banner** | Full-width dark overlay `1440×600px` | Conversion-centred banner | Overhead shot of carpet being laid — person's hands, dark moody tone |
| **Footer** | None — dark bg | — | — |

### Image Style Guidelines (Squarespace-Inspired)
- **Colour grading:** Warm midtones, slightly desaturated highlights — not oversaturated
- **Composition:** Lots of negative space for text overlay; subject in lower-third for hero
- **Lighting:** Natural, soft, directional — avoid studio flat lighting
- **People:** Lifestyle candid — not posed stock photo stiffness
- **Cropping:** Square for cards; landscape 16:9 for hero; portrait 3:4 for split rows
- **Format:** Use `.webp` for all static images (smaller file, same quality); `.webm` + `.mp4` for video
- **Dimensions:** Deliver @2x resolution for retina — cards at `1200×1200px`, hero at `2880×1800px`

---

## 9. Section-by-Section Redesign Summary

The table below maps every existing Everloop Carpet content block to its Squarespace-inspired redesigned version. No content is removed — only restyled and reordered.

| # | Existing Section | Redesigned Version | Squarespace Pattern |
|---|---|---|---|
| 1 | Top navbar | Sticky transparent nav → white on scroll, DM Sans, hamburger at 1024px | SQSP global nav |
| 2 | Hero / banner | 100vh full-bleed image, serif 80px headline, `[Explore Collections →]` CTA | SQSP hero section |
| 3 | (new) | Dark stats bar — 3 trust metrics in white on `#1C1C1A` | SQSP counter bar |
| 4 | Product listings | Horizontal scroll carousel, square cards, hover lift effect | SQSP "Grow your business" carousel |
| 5 | About / story | Split row — image left, serif heading + body + CTA right | SQSP alternating split rows |
| 6 | Sustainability | Split row (reversed) — text left, image right | SQSP alternating split rows |
| 7 | Key features / USPs | 3-col icon cards on `#F7F5F1` bg | SQSP "Everything you need" feature grid |
| 8 | Process | Numbered steps 01–04, serif numbers, sans body | SQSP "How to build a website" |
| 9 | (new) | FAQ accordion — care, returns, installation, warranty | SQSP FAQ section |
| 10 | Contact / CTA | Full-width dark banner, white serif headline, ghost button | SQSP conversion banner |
| 11 | Footer | 4-column dark footer, DM Sans, social icons, legal links | SQSP multi-column footer |

---

## 10. Quick Implementation Checklist

- [ ] Install Google Fonts: `Playfair Display` + `DM Sans`
- [ ] Apply spacing CSS variables (8px grid, 120px section padding)
- [ ] Apply colour palette CSS variables
- [ ] Make navbar sticky + transparent-to-white scroll transition
- [ ] Upgrade hero to full-bleed `100vh` with gradient text overlay
- [ ] Add stats bar block below hero
- [ ] Convert product grid to horizontal scroll carousel (CSS snap)
- [ ] Restyle split rows with 50/50 layout and correct image crop
- [ ] Replace current feature list with 3-column icon card grid
- [ ] Add numbered "How It Works" steps section
- [ ] Add FAQ accordion section
- [ ] Add dark full-width CTA banner above footer
- [ ] Restyle footer to 4-column dark layout
- [ ] Add card hover lift micro-interaction
- [ ] Convert images to `.webp` format
- [ ] Enable lazy loading on all images
- [ ] Add Calendly or booking embed for consultations
- [ ] Test all breakpoints: 375px / 768px / 1024px / 1440px

---

*This report is a design specification — it does not change Everloop Carpet's brand identity, product range, or existing content. It adapts the visual and structural presentation to match the editorial quality and spatial generosity of the Squarespace design system.*
