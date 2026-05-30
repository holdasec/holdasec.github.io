---
name: Terminal Velocity
colors:
  surface: '#0c160e'
  surface-dim: '#0c160e'
  surface-bright: '#323c32'
  surface-container-lowest: '#071009'
  surface-container-low: '#141e16'
  surface-container: '#18221a'
  surface-container-high: '#222c24'
  surface-container-highest: '#2d372e'
  on-surface: '#dae6d8'
  on-surface-variant: '#b9cbb9'
  inverse-surface: '#dae6d8'
  inverse-on-surface: '#29332a'
  outline: '#849585'
  outline-variant: '#3b4b3d'
  surface-tint: '#00e479'
  primary: '#f1ffef'
  on-primary: '#003919'
  primary-container: '#00ff88'
  on-primary-container: '#007139'
  inverse-primary: '#006d37'
  secondary: '#97d5a6'
  on-secondary: '#00391b'
  secondary-container: '#175330'
  on-secondary-container: '#89c699'
  tertiary: '#fffaf7'
  on-tertiary: '#3d2f00'
  tertiary-container: '#ffdb79'
  on-tertiary-container: '#795f01'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#60ff99'
  primary-fixed-dim: '#00e479'
  on-primary-fixed: '#00210c'
  on-primary-fixed-variant: '#005228'
  secondary-fixed: '#b2f1c1'
  secondary-fixed-dim: '#97d5a6'
  on-secondary-fixed: '#00210e'
  on-secondary-fixed-variant: '#14512e'
  tertiary-fixed: '#ffe08d'
  tertiary-fixed-dim: '#e5c364'
  on-tertiary-fixed: '#241a00'
  on-tertiary-fixed-variant: '#584400'
  background: '#0c160e'
  on-background: '#dae6d8'
  surface-variant: '#2d372e'
  background-pure: '#000000'
  terminal-dim: '#002211'
  scanline-overlay: rgba(0, 255, 136, 0.05)
typography:
  headline-lg:
    fontFamily: Space Mono
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Space Mono
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.1'
  headline-md:
    fontFamily: Space Mono
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  body-lg:
    fontFamily: JetBrains Mono
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: JetBrains Mono
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.1em
spacing:
  unit: 8px
  gutter: 24px
  margin-mobile: 24px
  margin-desktop: 64px
  max-width: 1280px
---

## Brand & Style

This design system is rooted in the **Geek / Hacker** aesthetic, drawing heavy influence from **Cyber-Brutalism** and early terminal interfaces. It targets a tech-savvy audience that appreciates a "low-fidelity, high-tech" vibe. The brand personality is raw, transparent, and unapologetically digital.

The visual direction follows a **Wireframe / Brutalist** approach:
- **Raw Structure:** Every container is defined by sharp outlines rather than shadows or fills.
- **Digital Transparency:** The layout exposes the "bones" of the interface, mimicking a technical schematic or a BIOS setup screen.
- **Tech-Forward:** Using motion metaphors like scanlines and CRT flickers to ground the digital experience in physical computing history.
- **Anti-Image:** No photography is permitted. The system relies entirely on geometry, typography, and symbolic placeholders to communicate value.

## Colors

The palette is strictly limited to a binary high-contrast relationship between absolute darkness and fluorescent energy.

- **Primary:** Neon Green (#00FF88) serves as the "phosphor" color for all active elements, borders, and highlights.
- **Neutral/Background:** Pure Black (#000000) provides the infinite void necessary for the neon accents to pop.
- **The Gradient:** Text headers utilize a vertical gradient transitioning from a muted `terminal-dim` at the bottom to the vibrant `primary` at the top, simulating the uneven glow of vintage hardware.
- **Functional Use:** Secondary tones are used only for "ghost" states or background grids to maintain depth without breaking the high-contrast aesthetic.

## Typography

Typography is the primary driver of the hacker aesthetic. We use **Monospace** fonts exclusively to reinforce the terminal-interface metaphor.

- **Headlines:** Use `Space Mono` for its geometric and slightly futuristic personality. Large headings should feel like "system alerts"—impactful and rigid.
- **Body & Data:** Use `JetBrains Mono` for maximum legibility in code-like blocks and descriptions. Its taller x-height ensures readability against the high-contrast background.
- **Styling:** All labels and navigation items are forced to `uppercase` with increased letter-spacing to mimic command-line prompts (e.g., `> HOME`).

## Layout & Spacing

The layout is built on a **Rigid Grid** system that feels intentional and architectural.

- **The Grid:** A 12-column fluid grid for desktop, reducing to 4 columns for mobile.
- **Fixed Navigation:** The "R" logo and navigation links are pinned to the viewport corners, creating a "HUD" (Heads-Up Display) effect that stays constant while content scrolls.
- **Alignment:** All elements must align to the 8px baseline grid. Padding within components should be generous to maintain the "minimal" and "open" feel required by the brand.
- **Wireframe Sections:** Use thin 1px lines to separate sections. Every content block should be treated as a "module" within a larger technical drawing.

## Elevation & Depth

This system rejects traditional shadows and depth. Instead, hierarchy is established through **Outlines and Tonal Layers**.

- **Z-Axis Hierarchy:** Higher elevation is represented by a "glow" (outer neon stroke) rather than a shadow. 
- **Backdrop:** A global scanline overlay (using a repeating linear gradient) sits at the highest Z-index with low opacity to simulate the texture of a CRT monitor.
- **Surface Containers:** Use `terminal-dim` (#002211) as a very subtle fill for cards to distinguish them from the pure black background, but only when framed by a 1px `primary` border.

## Shapes

The shape language is **Sharp (0px)**. To maintain the brutalist hacker aesthetic, there are no rounded corners in the design system.

- **Hard Edges:** All buttons, input fields, and project cards are perfect rectangles. 
- **The "R" Logo:** A massive, un-antialiased uppercase letter "R" that feels blocky and structural.
- **Placeholder Boxes:** Images are represented by rectangles with an "X" crossing from corner to corner (wireframe style), emphasizing the technical nature of the site.

## Components

### Buttons
- **Style:** 1px solid neon green border. No fill.
- **Hover:** Solid neon green fill with black text.
- **Text:** Uppercase monospace with a `>` prefix (e.g., `> CONTACT ME`).

### Project Cards
- **Structure:** A contained box with a 1px border. 
- **Header:** The "Project Thumbnail" area is a box with a diagonal cross-hatch or a simple "X" wireframe mark.
- **Content:** Title and description separated by a dotted 1px line.

### Input Fields / Forms
- **Style:** Underline only, or 1px box.
- **Prompt:** Every input should be preceded by a blinking cursor `_` or a `$` prompt symbol.

### Navigation Links
- **Style:** Plain text with no underline.
- **Active State:** Encased in square brackets (e.g., `[HOME]`).

### Placeholder Indicators
- Use `[ BRACKETED LABELS ]` in all-caps for any area where media would traditionally go. This reinforces the wireframe/documentation vibe.