# Apple — Style Reference
> Museum vitrine on white marble. Products are sculpture; the interface is the gallery wall that steps back to let them speak.

**Theme:** light

Apple.com operates as a digital product vitrine: vast, gallery-like whitespace frames each device as the subject, with the entire interface receding behind it. A near-white canvas (#f5f5f7) supports white product surfaces, creating barely-perceptible elevation rather than shadow-defined hierarchy. One signature blue (#2997ff) is the only chromatic element allowed to break the achromatic default — it marks every link, every filled button, and every interactive moment. Typography is SF Pro exclusively, running from a whisper-weight 300 for subtitles to weight 700 for display headlines, with aggressively negative letter-spacing at large sizes that tightens the wordmark into an editorial sculpture. Layout rhythm alternates between centered text-above-product hero bands and horizontal media card grids, each section breathing with 80–120px of vertical air.

## Colors

| Name | Value | Role |
|------|-------|------|
| Apple Blue | `#2997ff` | Link color, active states, accent icons — the sole chromatic element in the system; appears wherever a text element invites interaction |
| Deep Link Blue | `#0066cc` | Visited and hover state for links; deeper saturation signals state change without introducing a new hue family |
| Button Blue | `#0071e3` | Blue supporting accent for decorative details and low-frequency emphasis. Do not promote it to the primary CTA color |
| Graphite | `#1d1d1f` | Primary text, headings, product names — the near-black of editorial print rather than pure #000, with a subtle warmth that feels premium on retina displays |
| Slate | `#333333` | Secondary body text, descriptions under headlines, icon strokes — one step lighter than Graphite for reading rhythm |
| Steel | `#474747` | Supporting neutral for secondary UI, dividers, and muted labels. Do not promote it to the primary CTA color |
| Fog | `#707070` | Helper text, legal copy, sub-labels — quiet enough to disappear into the page when not needed |
| Ash | `#858585` | Disabled button text, tertiary metadata — the lightest functional gray still legible at 12px |
| Cloud | `#f5f5f7` | Page canvas, alternating section backgrounds — not pure white, slightly cool-tinted to feel like a paper substrate |
| Bone | `#e2e2e5` | Subtle button hover surfaces, card backgrounds, disabled states — the first perceptible step off the canvas |
| Paper | `#ffffff` | Card surfaces, nav bar, modal overlays — pure white reserved for elements that need to sit ON the canvas |
| Ink | `#000000` | Apple logo, high-contrast icons, dark-section text — used only where maximum punch is needed |

## Typography

### SF Pro Text — Body copy, navigation, buttons, footer, captions. The workhorse family: handles 90% of all text on the site. Weight 300 is used selectively for product subtitles ('Now supercharged by M4') to create a whisper-tone beneath the bold display headline.
- **Substitute:** Inter, system-ui
- **Weights:** 300, 400, 600
- **Sizes:** 12, 14, 17, 18, 24, 26, 34, 44
- **Line height:** 1.00, 1.18, 1.24, 1.29, 1.33, 1.47, 1.50, 2.12, 2.41
- **Letter spacing:** -0.003em at 17px, -0.010em at 24–28px, -0.016em at 44px — tracking tightens progressively as size increases

### SF Pro Display — Display headlines, product names (iPhone, iPad air, MacBook Neo), hero section titles. The optical-size variant designed for 20px+ rendering with tighter apertures and higher contrast strokes.
- **Substitute:** Inter Display, system-ui
- **Weights:** 400, 600, 700
- **Sizes:** 21, 28, 40, 56
- **Line height:** 1.07, 1.10, 1.14, 1.19
- **Letter spacing:** -0.005em at 21px, -0.011em at 28px, -0.015em at 40px, -0.022em at 56px — aggressive negative tracking sculpts the wordmark into an editorial display lockup
- **OpenType features:** `"numr"`

### Type Scale

| Role | Size | Line Height | Letter Spacing |
|------|------|-------------|----------------|
| caption | 12px | 1.33 | 0.08px |
| body-sm | 14px | 1.43 | — |
| body | 17px | 1.47 | -0.05px |
| body-lg | 21px | 1.38 | -0.11px |
| subheading | 28px | 1.14 | -0.28px |
| heading | 40px | 1.1 | -0.6px |
| heading-lg | 44px | 1.18 | -0.7px |
| display | 56px | 1.07 | -1.23px |

## Spacing & Layout

**Base unit:** 4px

**Density:** comfortable

- **Page max-width:** 980px
- **Section gap:** 80px
- **Card padding:** 15px
- **Element gap:** 10px

### Border Radius

- **cards:** 8px
- **inputs:** 8px
- **buttons:** 980px

## Components

### Top Notification Bar
**Role:** Regional context and store redirect

Full-width #f5f5f7 band above the nav. Left: instructional micro-copy in #1d1d1f at 12px. Center: country selector dropdown with 1px border. Right: filled #1d1d1f button (Continue) and a close X icon. Height ~44px, no border, seamless with the canvas.

### Sticky Navigation Bar
**Role:** Primary site navigation

Background rgba(251, 251, 253, 0.8) with backdrop blur when scrolled. Apple logo left, then 8 product category links in #1d1d1f at 12px weight 400, search icon and bag icon right. Height 44px, 8px horizontal padding per item, no visible border.

### Product Hero Section
**Role:** Primary marketing surface per product line

Full-viewport-width band, background matches canvas. Top: product name in SF Pro Display 56px weight 700, #1d1d1f, centered. Below: subtitle in SF Pro Text 21px weight 300, #1d1d1f. Below that: two buttons side by side (filled + outlined). Below buttons: product render image, 60-70% of viewport width, centered.

### Filled Pill Button
**Role:** Primary interactive element in hero sections

Background #0071e3, text #ffffff, SF Pro Text 17px weight 400. Border-radius 980px. Padding 8px 15px. No border, no shadow. Hover: background darkens to #0066cc.

### Outlined Pill Button
**Role:** Secondary action paired with the filled button

Background transparent, text #0066cc or #2997ff, 1px border in matching color. Border-radius 980px. Padding 8px 15px. No fill on hover — the border darkens slightly.

### Product Lineup Showcase
**Role:** Multi-device comparison within one product family

Section with #f5f5f7 canvas. Renders 4+ product variants side by side, each at ~20% viewport width, overlapping slightly with subtle parallax. No cards, no borders — the devices themselves define the layout edges.

### Colored Product Section
**Role:** Product hero with brand-tinted background

Full-width band with a wash of the product's signature color (e.g. iPad Air section uses a soft cyan #9fc6f4). Headline in #1d1d1f, product image centered. Buttons inherit the same filled/outlined treatment but the outlined button's border switches to #1d1d1f for contrast against the tinted background.

### Featured Media Card (Large)
**Role:** Hero tile for streaming content

Aspect ratio ~3:2, background is a full-bleed photograph or poster. Overlay: Apple TV watermark top-right in #ffffff at 24px. Bottom-left: 'Stream now' outlined pill button (white text, 1px white border). Beside button: title in #ffffff SF Pro Text 17px weight 600, one-line description in weight 300 below.

### Media Card Grid
**Role:** Secondary content discovery

Horizontal row of 3-4 cards, each ~25% viewport width, 8px gap between. Card content: poster image filling card, 'Listen now' / 'Watch now' / 'Play now' pill button anchored bottom-right in #ffffff. Card background matches poster — no separate card surface.

### iPhone Showcase Title Block
**Role:** Product family introduction

Centered text stack. Product name 'iPhone' in SF Pro Display 56px weight 600, #1d1d1f. Tagline 'Meet the latest iPhone lineup.' in SF Pro Text 21px weight 400, #1d1d1f. No buttons in this variant — just the title serving as a section header.

## Do's and Don'ts

### Do
- Use SF Pro Display at 56px weight 700 with letter-spacing -1.23px for all primary product headlines — this combination is the visual signature
- Apply #2997ff exclusively for link text and outlined interactive elements; never use it for large backgrounds or decorative blocks
- Use 980px border-radius for every button shape — the pill is non-negotiable, no rounded rectangles allowed
- Center all hero section text and product imagery on a vertical axis; the layout reads as a magazine spread, not a dashboard
- Alternate between #f5f5f7 canvas and #ffffff card surfaces for visual rhythm; avoid introducing new neutrals mid-page
- Set body text at 17px line-height 1.47 — this is the optimal reading size for long-form product descriptions
- Use weight 300 in SF Pro Text for product subtitles ('Now supercharged by M4') to create a whisper layer beneath the bold product name

### Don't
- Don't introduce shadows on interface elements; shadows are reserved exclusively for product renders, never for cards, buttons, or nav
- Don't use pure #000000 for body text; #1d1d1f is the system text black — pure black feels digital, #1d1d1f feels editorial
- Don't use any border-radius value between 8px and 980px; the system only knows sharp (0), gentle (8px), and pill (980px)
- Don't break the centered hero composition with left-aligned text or off-center product images; the vertical axis is sacred
- Don't use multiple blues in one section; pick #2997ff for text/links and #0071e3 for the filled button, never mix them on the same element
- Don't add gradients to the background; the system is committed to flat color fields — product images carry all the color storytelling
- Don't set display headlines with positive letter-spacing or normal tracking; the negative tracking (-0.022em at 56px) is what makes the wordmark feel premium

## Elevation

- **Product imagery:** `rgba(0, 0, 0, 0.22) 3px 5px 30px 0px`

## Surfaces

- **Canvas** (`#f5f5f7`) — Base page background; cool-tinted off-white that recedes behind product imagery
- **Section Band** (`#e2e2e5`) — Alternating section tint to break visual rhythm without introducing a color family
- **Card** (`#ffffff`) — Media cards, nav bar, elevated content blocks — pure white sits ON the canvas

## Imagery

Product photography dominates the visual system, presented as large hero renders on pure canvas backgrounds with no environmental context. Devices are shot at slight three-quarter angles to show depth, never flat-on or top-down. Lifestyle and human imagery appears only in the media/streaming section (TV shows, Music artists, Fitness instructors), where it functions as editorial poster art. Iconography is SF Symbols-style: thin 1-2px stroke, monochrome, inheriting text color. No illustrations, no abstract graphics, no decorative shapes — the system treats whitespace as the primary visual element.

## Layout

Full-bleed sections stacked vertically, each section owns its own background color field. The page is built from alternating horizontal bands: white/canvas product hero → white/canvas product lineup → tinted product section → dark media card section. Maximum content width is ~980px for text, but product imagery extends wider (up to ~80% of viewport). Navigation is a single 44px sticky top bar with no mega-menu, no sidebar. The grid system is implicit rather than visible — cards in the media section use a 4-column flexible grid that collapses to 2-column on mobile, with 8px gaps. Section vertical spacing is generous (80-120px between bands), creating a museum-walk rhythm where each product or content group feels like a separate gallery room.

## Similar Brands

- **Bang & Olufsen** — Same product-as-sculpture gallery approach; devices on pure white canvas with editorial whitespace and near-zero chrome
- **Dyson** — Same full-bleed product hero pattern with centered headline above large device render, pill-shaped CTAs
- **Sonos** — Same product family lineup showcase (multiple device variants side by side) on alternating tinted section backgrounds
- **Stripe** — Same typography precision with aggressive negative tracking at display sizes, and single accent color discipline
- **Teenage Engineering** — Same commitment to whitespace as a design element and ultra-minimal navigation with no decorative chrome
