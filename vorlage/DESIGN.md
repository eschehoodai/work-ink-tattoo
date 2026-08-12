---
name: Obsidian & Ink
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1b1b1b'
  surface-container: '#1f1f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#c4c7c8'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#303030'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c6c6c7'
  primary: '#ffffff'
  on-primary: '#2f3131'
  primary-container: '#e2e2e2'
  on-primary-container: '#636565'
  inverse-primary: '#5d5f5f'
  secondary: '#c6c6c6'
  on-secondary: '#2f3131'
  secondary-container: '#454747'
  on-secondary-container: '#b5b5b5'
  tertiary: '#ffffff'
  on-tertiary: '#313030'
  tertiary-container: '#e5e2e1'
  on-tertiary-container: '#656464'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c7'
  on-primary-fixed: '#1a1c1c'
  on-primary-fixed-variant: '#454747'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c6'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474746'
  background: '#131313'
  on-background: '#e2e2e2'
  surface-variant: '#353535'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 72px
    fontWeight: '900'
    lineHeight: 80px
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: 0em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: 0.01em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.1em
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  section-gap: 120px
---

## Brand & Style

The design system is rooted in a **Dark Minimalism** aesthetic with a **High-Contrast / Bold** edge. It is designed to evoke the precision of fine-line artistry and the raw, urban energy of a premium tattoo studio. The interface must feel like a high-end gallery: quiet, spacious, and sophisticated, allowing the portfolio photography to serve as the primary visual focus. 

The "grunge" influence is executed with extreme restraint through subtle grain textures and sharp, needle-like strokes rather than distressed surfaces. The emotional response is one of exclusivity, artistic mastery, and uncompromising professionalism.

## Colors

The palette is strictly monochromatic to maintain an upscale, "noir" atmosphere. 

- **Pure Black (#000000):** Used for the primary canvas and deep backgrounds.
- **Dark Grey (#1A1A1A):** Utilized for structural elements, cards, and input backgrounds to provide depth without breaking the dark mode immersion.
- **Light Grey (#D1D1D1):** Reserved for secondary text, borders, and icon states to indicate lower hierarchy.
- **Pure White (#FFFFFF):** The high-contrast accent color used for primary headings, call-to-action text, and essential UI markers.

## Typography

This design system employs a high-contrast typographic scale. **Montserrat** is used for headlines to provide a bold, geometric, and authoritative presence. **Inter** provides a neutral, highly legible foundation for body copy, ensuring the artist's bios and aftercare instructions are easy to digest. 

To introduce the "technical/professional" edge of the studio, **JetBrains Mono** is used for labels, metadata, and captions, mimicking the precision of needle gauges and shop documentation. All display text should favor tight tracking, while labels should be widely tracked and uppercase.

## Layout & Spacing

The layout follows a **Fixed Grid** model on desktop and a **Fluid Grid** on mobile. 

A 12-column grid is used for desktop with generous 64px outer margins to create the "premium gallery" feel. Vertical spacing is intentionally exaggerated; sections are separated by large 120px gaps to allow the eye to rest and focus on individual portfolio pieces. Content should rarely be crowded. Elements like artist cards or image clusters should use asymmetrical positioning to reinforce the "edgy/urban" personality without sacrificing the underlying structural grid.

## Elevation & Depth

This design system avoids traditional shadows to maintain its minimalist and "sharp" aesthetic. Depth is achieved through **Tonal Layers** and **Low-Contrast Outlines**:

- **Layer 0:** Pure Black (#000000) for the main page background.
- **Layer 1:** Dark Grey (#1A1A1A) for elevated containers, modals, or cards.
- **Borders:** Subtle 1px solid borders using Light Grey at 20% opacity (#D1D1D133) are used to define boundaries.
- **Texture:** A global, low-opacity noise overlay (approx 3%) is applied to the background to provide a subtle "paper" or "grunge" tactile feel without appearing dirty.

## Shapes

The shape language is strictly **Sharp (0px roundedness)**. Every UI element—from buttons to image containers and input fields—must have 90-degree corners. This reflects the precision of tattooing needles and the "brutalist" minimalism of the brand. Rounding is only permitted for decorative circular elements (like artist avatars) to contrast against the rigid layout.

## Components

- **Buttons:** Primary buttons are Solid White with Black text, utilizing `label-sm` typography. Hover states should invert colors or shift to a hollow "ghost" style with a 2px white border.
- **Inputs:** Text fields are simple bottom-borders only (1px White), creating a clean, architectural look. Labels float above in `label-sm`.
- **Cards:** Portfolio cards have 0px border-radius. On hover, images should transition from a subtle grayscale to full color or increase in scale slightly within the frame.
- **Chips/Tags:** Small, rectangular boxes with 1px borders and `label-sm` text. Used for tattoo styles (e.g., "TRADITIONAL", "FINE-LINE").
- **Custom Cursor:** In web implementations, a custom "crosshair" or "dot" cursor should be used to reinforce the theme of precision and artistic focus.
- **Navigation:** A minimalist top bar with high-contrast text links. When scrolled, it should transition to a 90% opaque Black background with a bottom 1px Light Grey border.