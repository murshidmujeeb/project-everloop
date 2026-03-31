# MASTER PROMPT — Everloop Carpet Website Rebranding
### For use with any No-Code Tool (Antigravity / Webflow / Framer / Builder.io / etc.)
### Attach this file alongside: `rebranding-report.md`

---

## YOUR ROLE

You are a senior UI/UX designer and front-end developer executing a complete website rebrand. You have been given two inputs:

1. `rebranding-report.md` — a detailed design specification
2. This master prompt — your execution instructions

Your job is to **redesign the existing Everloop Carpet website** (`https://www.everloop-carpet.com`) by strictly following every rule in the report. Do not invent new content. Do not remove existing content. Only restyle, reorder, and restructure what already exists.

---

## CONTEXT

- **Brand:** Everloop Carpet — a sustainable, engineered carpet company. Tagline: "Engineered for Longevity."
- **Design Inspiration:** Squarespace.com — editorial, minimal, high-contrast, generous whitespace
- **Goal:** Restyle the existing site to match Squarespace's visual quality without changing the brand's identity or content

---

## EXECUTION RULES (READ BEFORE DOING ANYTHING)

1. **Do not create new pages.** Only redesign what already exists on the Everloop site.
2. **Do not invent product names, prices, or company claims.** Use only existing copy.
3. **Follow the report exactly.** Every colour, font, spacing value, and layout decision is specified in `rebranding-report.md`. Do not deviate.
4. **Build mobile-first.** Design for 375px first, then scale up to 768px, 1024px, and 1440px.
5. **No decorative clutter.** Squarespace style = maximum restraint. If it doesn't add meaning, remove it.
6. **Use the exact CSS values from the report.** Spacing, colours, border-radius, font sizes — all defined. Copy them verbatim.
7. **Every section must have breathing room.** Minimum `120px` top/bottom padding on desktop, `64px` on mobile.
8. **Images are placeholders until real ones are provided.** Use the subject descriptions from Section 8 of the report as alt text and placeholder labels.

---

## STEP-BY-STEP BUILD INSTRUCTIONS

Execute these steps in order. Complete each fully before moving to the next.

---

### STEP 1 — Install Typography

```
Font 1 (Headings):  Playfair Display — weights 400, 700
Font 2 (UI/Body):   DM Sans — weights 400, 500, 600

Source: Google Fonts
Import URL:
https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=DM+Sans:wght@400;500;600&display=swap
```

Apply globally:
- All `<h1>` `<h2>` `<h3>` → Playfair Display
- All `<p>` `<nav>` `<button>` `<label>` `<a>` → DM Sans
- Set base `font-size: 16px` on `<body>`
- Set base `line-height: 1.7` on `<body>`

---

### STEP 2 — Apply the Colour System

Create these CSS variables and apply them site-wide. Replace every existing hardcoded colour with the correct variable:

```css
:root {
  --bg-primary:       #FFFFFF;
  --bg-warm:          #F7F5F1;
  --bg-dark:          #1C1C1A;
  --bg-card:          #F0EDE8;

  --text-primary:     #1C1C1A;
  --text-secondary:   #5E5C56;
  --text-muted:       #9C9A94;
  --text-inverse:     #FFFFFF;

  --accent:           #8B7355;
  --accent-light:     #D4C5A9;

  --cta-bg:           #1C1C1A;
  --cta-text:         #FFFFFF;
  --cta-hover:        #3A3A38;
}
```

---

### STEP 3 — Apply the Spacing System

Create these spacing variables and apply to all sections and components:

```css
:root {
  --section-padding-desktop:  120px;
  --section-padding-mobile:   64px;
  --container-max:            1280px;
  --container-padding:        48px;
  --container-padding-mobile: 24px;
  --card-padding:             32px;
  --grid-gap:                 24px;
  --split-gap:                80px;
  --btn-padding:              14px 32px;
  --nav-height:               72px;
}
```

---

### STEP 4 — Build the Navbar

**Requirements:**
- Height: `72px`
- Position: `sticky`, `top: 0`, `z-index: 100`
- Initial state: `background: transparent`
- On scroll past `80px`: transition to `background: #FFFFFF; box-shadow: 0 1px 0 #E5E5E5`
- Left: Everloop logo (existing)
- Centre/Right: Navigation links in DM Sans, `14px`, `font-weight: 500`, `letter-spacing: 0.04em`, colour `#1C1C1A`
- Far right: CTA button — `[Get a Quote]` — solid black, `padding: 10px 24px`, `border-radius: 2px`
- At `< 1024px`: hide nav links, show hamburger icon (3 horizontal lines), clicking opens full-screen overlay menu in `#1C1C1A` background with white links in Playfair Display `32px`

---

### STEP 5 — Build the Hero Section

**Requirements:**
- Height: `100vh`, minimum `600px`
- Background: existing hero/banner image from Everloop site, `object-fit: cover`, `object-position: center`
- Overlay: `linear-gradient(to right, rgba(28,28,26,0.60) 0%, rgba(28,28,26,0.15) 65%, transparent 100%)`
- Content positioned: left-aligned, vertically centred, `padding-left: var(--container-padding)`

**Content layout inside hero (top to bottom):**
```
[LABEL]     "SUSTAINABLE CARPETING"
            DM Sans, 12px, font-weight: 600, letter-spacing: 0.18em,
            color: var(--accent-light), text-transform: uppercase
            margin-bottom: 20px

[HEADLINE]  Use existing hero headline from Everloop site
            Playfair Display, clamp(44px, 6.5vw, 80px), font-weight: 700,
            color: #FFFFFF, line-height: 1.05, max-width: 700px
            margin-bottom: 24px

[SUBLINE]   Use existing hero subtext / tagline from Everloop site
            DM Sans, 18px, font-weight: 400, color: rgba(255,255,255,0.80)
            max-width: 500px, margin-bottom: 40px

[BUTTON]    "Explore Collections"
            background: #FFFFFF, color: #1C1C1A,
            padding: 16px 36px, border-radius: 2px,
            DM Sans 13px, font-weight: 600, letter-spacing: 0.08em,
            text-transform: uppercase
```

**Scroll indicator:** Small downward arrow or "Scroll" text at bottom-centre, `color: rgba(255,255,255,0.5)`, animates with `translateY` loop

---

### STEP 6 — Build the Stats Bar (NEW SECTION)

Place this immediately below the hero.

**Requirements:**
- Background: `#1C1C1A`
- Padding: `48px var(--container-padding)`
- Layout: 3 columns, horizontally centred, `gap: 80px`, centred text

**Content (use Everloop's actual credentials — fill from existing site copy):**
```
Column 1:   [NUMBER/STAT]     e.g. "15+ Years"
            [LABEL]           e.g. "Industry Experience"

Column 2:   [NUMBER/STAT]     e.g. "100%"
            [LABEL]           e.g. "Recycled Backing"

Column 3:   [NUMBER/STAT]     e.g. "Lifetime"
            [LABEL]           e.g. "Return Credit Programme"
```

**Styling:**
- Number: Playfair Display, `48px`, `font-weight: 700`, `color: #FFFFFF`
- Label: DM Sans, `13px`, `font-weight: 500`, `letter-spacing: 0.12em`, `text-transform: uppercase`, `color: #9C9A94`
- Dividers between columns: `1px solid rgba(255,255,255,0.12)` vertical line

**Responsive:** Stack to single column on `< 768px`, remove vertical dividers, add `32px` gap between items

---

### STEP 7 — Build the Collections Carousel

**Requirements:**
- Section background: `#FFFFFF`
- Section padding: `var(--section-padding-desktop) 0`
- Section heading (above carousel):
  - Label: "OUR COLLECTIONS" — DM Sans, 12px, uppercase, letter-spacing 0.15em, `color: var(--accent)`, `margin-bottom: 12px`
  - Title: Use existing collections section heading from Everloop site — Playfair Display, `clamp(28px, 4vw, 48px)`, centred
  - Sub: Use existing supporting text — DM Sans, 17px, `color: var(--text-secondary)`, centred, `max-width: 560px`, `margin: 0 auto 56px`

**Carousel container:**
```css
.carousel {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: 24px;
  padding: 0 var(--container-padding) 40px;
  scrollbar-width: none;       /* hide scrollbar */
  -ms-overflow-style: none;
}
.carousel::-webkit-scrollbar { display: none; }
```

**Each card:**
```css
.collection-card {
  scroll-snap-align: start;
  flex: 0 0 360px;             /* fixed card width */
  background: var(--bg-card);
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.collection-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0,0,0,0.08);
}
```

**Inside each card (top to bottom):**
```
[IMAGE]       Square 360×360px, object-fit: cover
[CONTENT]     padding: 24px
  Category:   DM Sans, 11px, uppercase, letter-spacing 0.14em, color: var(--accent), margin-bottom: 8px
  Name:       Playfair Display, 22px, color: var(--text-primary), margin-bottom: 8px
  Material:   DM Sans, 14px, color: var(--text-secondary)
  Arrow link: "View Collection →" — DM Sans, 13px, color: var(--text-primary), margin-top: 20px
```

Use all existing product/collection entries from the Everloop site. Do not invent new ones.

**Responsive:** On `< 768px`, cards shrink to `calc(85vw)` — creates a peek effect showing the next card

---

### STEP 8 — Build Split Rows (Alternating)

Create **two** split rows using existing About/Story and Sustainability content from the Everloop site.

**Row layout:**
```css
.split-row {
  display: flex;
  align-items: center;
  gap: var(--split-gap);        /* 80px */
  padding: var(--section-padding-desktop) var(--container-padding);
  max-width: var(--container-max);
  margin: 0 auto;
}
.split-row .image-col { flex: 1; }
.split-row .text-col  { flex: 1; }
.split-row .image-col img {
  width: 100%;
  aspect-ratio: 3/4;
  object-fit: cover;
  border-radius: 0;             /* square crop — Squarespace style */
}
```

**Row 1 — Image LEFT, Text RIGHT:**
- Background: `#FFFFFF`
- Image: [Placeholder — recycled fibre manufacturing, portrait crop]
- Text content: use existing Everloop "About" or "Our Process" copy
  - Label → Title (Playfair Display, `clamp(28px, 4vw, 44px)`) → Body (DM Sans, 17px, line-height 1.7) → CTA link `"Learn About Our Process →"` in DM Sans, 14px, underline on hover

**Row 2 — Image RIGHT, Text LEFT:**
- Background: `#F7F5F1`
- Image: [Placeholder — finished room installation, portrait crop]
- Text content: use existing Everloop quality/sustainability copy
- Same typographic structure as Row 1

**Responsive:** On `< 768px`, stack vertically — image always on top, text below. `gap: 32px`

---

### STEP 9 — Build the Feature Card Grid

**Requirements:**
- Section background: `#F7F5F1`
- Section padding: `var(--section-padding-desktop) var(--container-padding)`
- Centred section heading above grid: same heading pattern as Step 7 (Label + Title + Sub)
- Use existing USP/feature content from Everloop site

**Grid:**
```css
.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 56px;
}
@media (max-width: 900px) {
  .feature-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 600px) {
  .feature-grid { grid-template-columns: 1fr; }
}
```

**Each card:**
```css
.feature-card {
  background: #FFFFFF;
  padding: 40px 32px;
  border-radius: 4px;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0,0,0,0.07);
}
```

**Inside each card:**
```
[ICON]        SVG line icon, 40×40px, stroke: var(--accent), stroke-width: 1.5
              margin-bottom: 24px
[HEADING]     Playfair Display, 22px, color: var(--text-primary), margin-bottom: 12px
[BODY]        DM Sans, 15px, line-height: 1.65, color: var(--text-secondary)
```

Use existing USPs from Everloop — e.g. recycled materials, loop construction, return programme, durability, etc.

---

### STEP 10 — Build the "How It Works" Numbered Steps

**Requirements:**
- Section background: `#FFFFFF`
- Section padding: `var(--section-padding-desktop) var(--container-padding)`
- Centred heading above steps

**Steps layout:** 4 columns on desktop, 2 on tablet, 1 on mobile

**Each step:**
```
[NUMBER]      "01" "02" "03" "04"
              Playfair Display, 72px, font-weight: 700,
              color: var(--accent-light), line-height: 1,
              margin-bottom: 16px

[TITLE]       Playfair Display, 22px, color: var(--text-primary)
              margin-bottom: 12px

[BODY]        DM Sans, 15px, color: var(--text-secondary), line-height: 1.65
```

Use existing process/steps content from Everloop site. If 4 steps don't exist, use: Browse → Sample → Measure → Install.

Thin `1px` vertical divider between steps in colour `var(--accent-light)` — desktop only.

---

### STEP 11 — Build the FAQ Accordion (NEW SECTION)

**Requirements:**
- Section background: `#F7F5F1`
- Section padding: `var(--section-padding-desktop) var(--container-padding)`
- Max-width: `760px`, centred
- Heading: "Common Questions" — Playfair Display, centred, `clamp(28px, 4vw, 44px)`

**Each accordion item:**
```css
.faq-item {
  border-bottom: 1px solid var(--accent-light);
  padding: 24px 0;
}
.faq-trigger {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-family: 'DM Sans', sans-serif;
  font-size: 17px;
  font-weight: 500;
  color: var(--text-primary);
}
.faq-trigger .icon {
  font-size: 20px;
  transition: transform 0.2s ease;   /* rotates + to × when open */
}
.faq-body {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  line-height: 1.7;
  color: var(--text-secondary);
  padding-top: 0;
}
.faq-item.open .faq-body { max-height: 300px; padding-top: 16px; }
.faq-item.open .icon { transform: rotate(45deg); }
```

Use existing FAQ content from Everloop site. If none exists, use these topics: carpet care, recycled materials, return programme, installation process, warranty.

---

### STEP 12 — Build the Dark CTA Banner

**Requirements:**
- Full-width section, background: `#1C1C1A`
- Padding: `120px var(--container-padding)`
- All content centred

**Content:**
```
[HEADLINE]    Use existing CTA / contact headline from Everloop site
              Playfair Display, clamp(36px, 5vw, 64px), color: #FFFFFF,
              max-width: 700px, margin: 0 auto 32px, text-align: center

[SUBLINE]     Use existing CTA subtext
              DM Sans, 17px, color: rgba(255,255,255,0.65), text-align: center
              max-width: 480px, margin: 0 auto 48px

[BUTTON]      "Get a Quote" — ghost button:
              border: 1.5px solid rgba(255,255,255,0.5),
              color: #FFFFFF, background: transparent,
              padding: 16px 40px, border-radius: 2px,
              DM Sans 13px, letter-spacing: 0.08em, uppercase
              On hover: background: rgba(255,255,255,0.08)
```

---

### STEP 13 — Build the Footer

**Requirements:**
- Background: `#1C1C1A`
- Top border: `1px solid rgba(255,255,255,0.08)`
- Padding: `80px var(--container-padding) 40px`
- Layout: 4 columns on desktop, 2 on tablet, 1 on mobile

**Column structure:**
```
Col 1 — Brand
  Logo (white version)
  Brand tagline: "Engineered for Longevity"
  DM Sans, 14px, color: rgba(255,255,255,0.50)

Col 2 — Collections
  Heading: "Collections" — DM Sans, 11px, uppercase, tracked, color: rgba(255,255,255,0.35)
  Links: existing collection names — DM Sans, 14px, color: rgba(255,255,255,0.60)
  Hover: color: #FFFFFF

Col 3 — Company
  Heading: "Company"
  Links: About, Sustainability, Process, Contact

Col 4 — Follow Us
  Heading: "Follow"
  Social icon links (existing social accounts from site)
```

**Bottom bar (below columns):**
- `border-top: 1px solid rgba(255,255,255,0.08)`
- `padding-top: 32px`, `margin-top: 64px`
- Left: `© 2026 Everloop Carpet. All rights reserved.`
- Right: `Privacy Policy · Terms of Use`
- DM Sans, 12px, `color: rgba(255,255,255,0.35)`

---

### STEP 14 — Final Global Styles Pass

Apply these rules across the entire site:

```css
/* Remove all default browser styling */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

/* Smooth scrolling */
html { scroll-behavior: smooth; }

/* All images responsive by default */
img { max-width: 100%; height: auto; display: block; }

/* Links — no blue, no underline by default */
a { color: inherit; text-decoration: none; }
a:hover { text-decoration: underline; }

/* Buttons — reset default */
button { cursor: pointer; border: none; background: none; font-family: inherit; }

/* Selection colour */
::selection { background: var(--accent-light); color: var(--text-primary); }

/* Scrollbar (desktop) */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: #f0ede8; }
::-webkit-scrollbar-thumb { background: var(--accent); border-radius: 3px; }
```

---

### STEP 15 — Responsive Breakpoint Verification

Check every section at each of these widths before considering the build complete:

| Width | Check |
|---|---|
| `375px` | Single column, readable text, tap-friendly buttons (min 44px height), no horizontal scroll |
| `768px` | 2-column grids where applicable, nav still visible or hamburger |
| `1024px` | Hamburger appears, layout transitions to desktop style |
| `1440px` | Max-width container centred, no content beyond 1280px |

---

## WHAT NOT TO DO

- ❌ Do not use any colour outside the defined palette
- ❌ Do not use `border-radius` greater than `4px` on any element
- ❌ Do not add drop shadows heavier than `0 12px 32px rgba(0,0,0,0.08)`
- ❌ Do not use gradients except the hero overlay specified above
- ❌ Do not animate anything except: nav scroll transition, card hover, carousel scroll, FAQ accordion, scroll indicator
- ❌ Do not use more than 2 font families (Playfair Display + DM Sans only)
- ❌ Do not add placeholder images from stock photo services — use described subject labels as `alt` text and a solid `#F0EDE8` background as the placeholder fill
- ❌ Do not use blue link colours anywhere
- ❌ Do not use `border-radius` on images — all images are square/rectangular crops

---

## OUTPUT EXPECTED

When complete, the rebuilt Everloop Carpet website should:

1. Feel visually identical in quality to a premium Squarespace-built site
2. Contain exactly the same content as the original Everloop site — no new copy
3. Pass a mobile responsiveness check at 375px, 768px, 1024px, 1440px
4. Load all sections without layout breaks
5. Have consistent typography, spacing, and colour throughout — zero visual inconsistency

---

*Attach `rebranding-report.md` alongside this prompt. The report contains all the design rationale and detailed reference values. This prompt contains the execution steps. Use both together.*
