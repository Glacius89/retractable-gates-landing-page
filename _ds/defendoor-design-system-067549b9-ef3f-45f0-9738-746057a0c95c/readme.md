# DEFENDoor Design System

A brand + UI design system for **DEFENDoor**, a South African manufacturer of custom, high-quality **retractable security gates** for homes and businesses. Head office in Randburg, Johannesburg, with branches in Cape Town and Durban, servicing a ~25km radius. In business 31 years (since 1995), 4.8★ across 107 Google reviews.

- Website: https://defendoor.co.za/ (product line: https://defendoor.co.za/retractable-security-gates/)
- Contact: **0860 333 363** · sales@defendoor.co.za
- Privacy policy: https://defendoor.co.za/privacy-policy/

This system was built from a landing-page design brief plus supplied brand assets (logo, favicon, hero, feature/gallery/model/client images, a Fevertree Finance logo, and a fintech landing-page layout reference). No codebase or Figma file was provided — the brief and image set are the ground truth.

## Sources provided
- Brand spec (colors, fonts, copy, models, reviews, FAQ) — captured verbatim into `ui_kits/landing-page/data.js` and the tokens.
- `uploads/DEFENDoor-logo.svg` — **exported empty** (embedded raster has no image data; renders blank). Wordmark is therefore set in Open Sans Extrabold; the "D" mark comes from `favicon.png`. See CAVEATS.
- `uploads/favicon.png` — blue circular "D" mark, used as the brand icon (`assets/brand/favicon.png`).
- Product/feature/gallery/model/client imagery → `assets/`.
- `uploads/fintech-landingpage-structure-example.jpg` — layout reference (`assets/reference/`).

---

## Components
Reusable React primitives (bundled under `window.DEFENDoorDesignSystem_067549`):

**Forms** (`components/forms/`)
- **Button** — CTA button; green `primary` is the conversion button, plus `secondary`/`outline`/`ghost`/`dark`.
- **Input** — labelled text field; `as="textarea"` for multi-line.

**Content** (`components/content/`)
- **SectionHeading** — eyebrow + title + subtitle section opener (`onDark` variant).
- **Badge** — guarantee / status pill.
- **Rating** — 5-star rating with fractional fill (e.g. 4.8).
- **StatBlock** — big-number statistic.
- **Accordion** — single-open FAQ list.

**Marketing** (`components/marketing/`)
- **FeatureCard** — product feature with image.
- **ModelCard** — retractable-gate model card with specs, guarantee pill and CTA.
- **ReviewCard** — Google review card.
- **LogoWall** — grayscale-until-hover client trust strip.

## UI Kits
- **`ui_kits/landing-page/`** — the full lead-gen landing page (sticky CTA, hero, trust strip, features, 4 models, gallery carousel, reviews, guarantee + finance, FAQ, lead form with thank-you state, footer). See its `README.md`.

## Foundations (Design System tab cards)
- Colors: `foundations/color-primary.html`, `color-action.html`, `color-neutrals.html`, `color-semantic.html`
- Type: `foundations/type-scale.html`, `type-body.html`
- Spacing: `foundations/spacing-scale.html`, `radii-shadows.html`
- Brand: `foundations/brand-logo.html`, `brand-imagery.html`

## Tokens & entry point
- `styles.css` (root) — `@import` list only; the single file consumers link.
- `tokens/colors.css` · `typography.css` · `spacing.css` · `fonts.css` · `base.css`

---

## CONTENT FUNDAMENTALS
**Voice:** confident, protective, plain-spoken — a trusted local craftsman, not a corporate SaaS. Benefit-led and reassuring rather than technical-first, but always able to back claims with hard specs (steel thickness, lock counts, rivet material).

**Person:** speaks to the customer as **"you / your"** ("Protecting **what you love**", "the peace of mind **you** deserve") and refers to the company as **"we / our"** ("**We** manufacture custom solutions"). Warm and personal — reviews name the owner ("Hugo").

**Tone & casing:** Title Case for headings and CTAs; UPPERCASE only for small eyebrows, badges/guarantees ("5 YEAR GUARANTEE") and labels. Sentence case for body. South African English & spelling (customise, colour, aluminium, suburb). Currency implied in ZAR.

**Vocabulary that recurs:** *solid steel, all-steel, high-security, star key hook locks, custom-built, formidable, engineered durability/strength, peace of mind, nearly impenetrable, free demo & quote, protecting what you love.*

**CTAs are action + benefit:** "Get My Free Quote", "Arrange a Free Demo & Quote", "Request a Quote". Never generic "Submit".

**Emoji:** none. Not part of the brand. Use icons (see ICONOGRAPHY) instead.

**Verbatim copy to reuse** (from the brief):
- "Security solutions you can trust."
- "Protecting what you love."
- "31 Years of proven security expertise."
- "Protecting your family and business since 1995."
- "Trusted by top brands."
- "Arrange a free demo & quote."
- "Always insist on seeing a sample door before you make any purchasing decisions."
- "All-steel construction, stainless steel rivets, and bolted into place."

## VISUAL FOUNDATIONS
**Palette:** a trustworthy, cool, steel-and-water scheme. Primary **steel blue `#3d7ca9`** (chrome, headings, links), **teal `#199494`** secondary (eyebrows, small accents), **cool grey `#778087`** tertiary, pale **sky `#c7e0f1`** accent (soft fills, borders), and a single high-contrast **action green `#38bc85`** reserved for CTAs only. Deep navy `#1e3d54` anchors dark bands. Green is never used for anything but actions, so CTAs always pop.

**Type:** Open Sans throughout (`"open sans", Helvetica, Arial, sans-serif`), loaded from Google Fonts. Headings are **Extrabold (800)** with tight tracking (`-0.02em`); body is Regular/400 at a generous 1.65 line-height. Big, confident hero display (up to 56px). No secondary display face.

**Layout:** centered `1180px` max container, generous `~88px` section rhythm. Alternating section backgrounds — white → soft sky (`--surface-subtle`) → white → **dark navy band** (reviews, lead form) — mirroring the fintech reference. One or two background colours per view, max.

**Backgrounds & imagery:** real, warm, aspirational lifestyle photography (upscale homes, pools, evening light) — warm-toned scenes behind cool-toned gates. No illustrations, no patterns, no textures. Hero and dark bands use a **navy scrim gradient** over photos for legible white text. No decorative multi-hue gradients.

**Cards:** white, `16px` radius (`--radius-lg`), 1px `--border-subtle` hairline, soft **cool-tinted** shadow (`rgba(30,61,84,·)`). Featured model card gets a blue border + larger shadow + "Most Popular" badge. Images sit flush at the card top with the corners clipped.

**Corner radii:** `sm 6 / md 10 / lg 16 (cards) / xl 24 (large panels) / pill (buttons & badges)`. Buttons and badges are fully pill-shaped.

**Shadows:** one soft, cool, blue-tinted family (`--shadow-xs → lg`), plus a dedicated green **`--shadow-cta`** glow under primary buttons.

**Motion:** restrained and functional. Standard `220ms` ease; cards lift `translateY(-4px)` on hover; buttons **scale to 0.97 on press**; accordion rows expand via `grid-template-rows`; header transitions to a blurred translucent state on scroll. No bounces, no infinite/decorative loops.

**Hover / press states:** buttons darken (green→`--cta-600`) and press-shrink; links go from primary → `--primary-800`; logo-wall images go full-colour from grayscale; inputs get a primary border + 3px focus ring (`--focus-ring`).

**Transparency & blur:** used sparingly — the scrolled header (`rgba(255,255,255,.94)` + backdrop blur) and the mobile sticky bar. Photo scrims use navy alpha, not blur.

**Fixed elements:** sticky header (always), and on mobile a fixed bottom Call + Get Quote bar.

## ICONOGRAPHY
No icon font or icon library was provided. The brand's own visual language leans on **photography and the ✓ checkmark** far more than on icons.
- **Approach used here:** a small number of hand-inlined, single-stroke SVG glyphs (phone, chevron/arrow, checkmark) drawn at 2–2.4px stroke to match a clean, utilitarian feel. These live inline in the UI-kit section files (`Header.jsx` phone, `Gallery.jsx` arrows, `LeadForm.jsx` success tick) — not as a shared Icon component, since the set is tiny.
- **Spec bullets** use a literal green **✓** (not an icon) — matching the model-comparison sheet supplied in the brief.
- **Emoji / unicode:** not used as UI icons (aside from the ✓ tick and the ★ in ratings, which is drawn as an SVG in `Rating`).
- **If you need a broader icon set** for new work, substitute **Lucide** (https://lucide.dev, ~2px stroke) — it matches the stroke weight used here. Flag any such addition to the brand owner.

---

## CAVEATS
- **Logo:** the working full-colour lockup is `assets/brand/defendoor-logo.jpg` (669×174, supplied as JPEG on a white background) — used in the header and on light surfaces. Because it has no transparency, on **dark bands** (footer) the favicon "D" mark is paired with the wordmark typeset in Open Sans Extrabold. A transparent PNG/SVG version would let the full lockup be used on dark backgrounds too. (The original `DEFENDoor-logo.svg` exported empty and is kept only for reference.)
- **Fonts:** Open Sans is loaded from Google Fonts (no font binaries were provided) — this matches the brand-specified family exactly, so no substitution was needed.
- **Client logos** are JPEGs on white backgrounds; they display grayscale-until-hover in the LogoWall. Transparent PNGs would look cleaner.
