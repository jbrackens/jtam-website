# Design System — JTAM Group

Always read this file before making any visual or UI decision on this site. All font choices, colors, spacing, component behavior, and aesthetic direction are defined here. Do not deviate without explicit approval.

## Product Context

- **What this is:** Marketing site for JTAM Group — a technology consulting and solutions firm.
- **Who it is for:** Business leaders and technology executives seeking strategy, engineering, and operations expertise.
- **Positioning:** JTAM Group helps businesses navigate complexity — from strategy and architecture through engineering and operations.
- **Project type:** Static (SSG) marketing site using React 18 + TypeScript + Vite + Tailwind, prerendered via `vite-react-ssg`.

## Strategic Design Direction

JTAM Group should feel like a **premium technology consulting firm** — credible, precise, and trustworthy.

- Professional, not flashy.
- High-trust, not hype-y.
- Light, precise, architectural.
- Calm, sparse, and legible — selling expertise and outcomes, not technology for its own sake.

## Aesthetic Direction

**Antigravity-leaning enterprise systems.**

A dark base with generous space and big geometric sans, punctuated by cinematic **dark, rounded "stage" panels** embedded in the page. The **Aurora** spectral gradient is the signature accent, used sparingly as hairlines, heading underlines, the logo, and the giant wordmark — never flooding surfaces. Buttons are **pills**; cards and stages are **rounded**. The hero is centered with an Aurora accent.

Avoid: purple / violet / magenta or warm gradient hues (keep Aurora cool: mint → blue), fake analytics dashboards, glowing-orb-as-meaning, hype metrics, neon, glassmorphism, decorative blobs, and generic SaaS language.

## Brand Personality

JTAM Group should sound and look **professional, credible, precise, outcomes-driven, calm** — talking to business leaders about measurable impact, not pitching technology hype.

## Typography

- **Body + UI:** `Plus Jakarta Sans` (400–800).
- **Accent:** `Instrument Serif` (italic), sparing — one or two editorial accents.
- **Labels / captions:** `JetBrains Mono`, 10–12px, uppercase, wide tracking.

| Role | Size | Line height | Family |
|---|---:|---:|---|
| Hero display | `46px` mobile → `74-96px` desktop | 0.94-0.98 | Plus Jakarta Sans 700 |
| H2 | `28-42px` by breakpoint | 1.02-1.06 | Plus Jakarta Sans 700 |
| H3 | 20-28px | 1.08-1.2 | Plus Jakarta Sans 700 |
| Serif accent | matches its heading | — | Instrument Serif 400 italic |
| Lede | 19-20px | 1.5-1.55 | Plus Jakarta Sans 500 |
| Body | 15-18px | 1.6-1.7 | Plus Jakarta Sans 400 |
| Small | 13-15px | 1.5-1.6 | Plus Jakarta Sans 400 |
| Diagram / label | 10-12px | 1.2 | JetBrains Mono 500 |
| Giant wordmark | `clamp(90px, 21vw, 260px)` | 0.86 | Plus Jakarta Sans 800 |

Tight tracking on display sizes (`-0.03em` to `-0.04em`). Direct, plainspoken headlines.

## Color System

A dark architecture palette with the cool **Aurora** spectral signature.

| Token | Hex | Usage |
|---|---|---|
| `base` | `#050608` | Main page background (dark) |
| `graphite` | `#0C0F14` | Stage panels, visual panels |
| `body` | `rgba(255,255,255,0.50)` | Paragraph text on dark |
| `muted` | `rgba(255,255,255,0.40)` | Labels, metadata, secondary text |
| `line` | `rgba(255,255,255,0.06)` | Hairline borders |
| `signal` | `#7DD3FC` | Solid UI accents |
| `deep-signal` | `#0369A1` | Link hovers, active annotations |

### Aurora spectral signature

The signature gradient. Multi-hue but deliberately **cool**, not warm.

```
--spectral:    linear-gradient(90deg,  #6EE7B7, #2DD4BF, #22D3EE, #38BDF8, #3B82F6);
--spectral-v:  linear-gradient(180deg, #6EE7B7, #2DD4BF, #22D3EE, #38BDF8, #3B82F6);
```

Apply Aurora as: heading accents, hairline section dividers, the swarm logo mark, and the giant footer wordmark (`background-clip:text`). Thin signature, not surface fills. **No purple, violet, magenta, or warm hues.**

## Layout

- **Max content width:** `max-w-[1200px]`.
- **Gutters:** `px-6` mobile, `px-8` desktop.
- **Section padding:** `py-24` mobile → `py-32` desktop.

### Corner radius scale

| Element | Radius |
|---|---|
| Large stages, CTA band | `24-26px` |
| Cards | `16-20px` |
| Small panels / chips inside stages | `9-14px` |
| Buttons, eyebrow chips | pill (`999px`) |

## Brand Mark (Logo)

The JTAM mark is a **swarm** — a coordinated ring of particles (the "orbit ring"), abstract and geometric.

- **Construction:** ~13 `<circle>` elements on a `0 0 24 24` grid forming a ring with an opening, filled with the Aurora gradient via `gradientUnits="userSpaceOnUse"`.
- **Usage:** header (~22-24px, Aurora, spinning), footer meta (~17px, Aurora, spinning). Minimum legible size ~16px.
- **Motion:** rotates slowly (~22s linear) in live contexts (header/footer); static otherwise; reduced-motion → static.
- **Reuse:** ship as the `<Logo />` SVG component.

## Header

Sticky, translucent dark background, 64px height, simple navigation, one pill CTA. The header logo **spins** (Aurora swarm). Scrolled state adds a pill-shaped nav bar.

Navigation: How it works · Capabilities · Use cases · Contact.

CTA: **Get in touch**. On smaller screens the links collapse to a hamburger menu.

## Buttons

All buttons are **pills** (`999px`).

- **Primary:** white/light background, dark text. Hover → subtle opacity shift.
- **Secondary:** transparent, white text, hairline border. Hover → subtle fill.

## Homepage Structure

1. **Header** — sticky, swarm mark + nav + pill CTA *Get in touch*.
2. **Hero** — *Strategy meets execution.* Aurora canvas background, subhead about JTAM Group's offering. CTAs: *Start a conversation* · *How we work*. Role strip: Strategy · Engineering · Operations.
3. **What we do** — 3-card grid: Strategy & Advisory · Engineering & Delivery · Operations & Scale. Each with icon, description, capability pills.
4. **The problem** — *Complexity scales faster than teams.* Stats: 70% / 2.5× / 18mo.
5. **Capabilities** — 6-card grid: Technology Strategy · Product Engineering · Cloud & Infrastructure · Data & Analytics · AI & Automation · Security & Compliance.
6. **How we work** (`#how-it-works`) — Interactive accordion + dark visual panel. 5 steps: Discover · Design · Build · Operate · Evolve.
7. **Trust / Why JTAM** — *Built on trust. Measured by results.* 6 safeguards in a dark stage.
8. **Final CTA** (`#contact`) — *Ready to build what's next?* Buttons: *Start a conversation* · *See how we work*.
9. **Footer** — giant Aurora "JTAM" wordmark + columns + meta (*Strategy · Engineering · Operations*).

## Motion

Motion is functional and restrained. **Every motion is mandatorily `prefers-reduced-motion`-gated**. Continuous loops pause when the tab is hidden.

Approved motion:

1. **Hero entrance** — sequential fade-up of eyebrow → headline → lede → CTAs (~750ms total).
2. **Aurora canvas** — continuous `<canvas>` flowing light animation in the hero background.
3. **Swarm logo mark** — slow rotation (~22s linear) in header + footer.
4. **Scroll reveals** — subtle fade-up + ~20px translate as sections enter the viewport (IntersectionObserver, once each, ~600ms).
5. **Hover** — transitions under 200ms on cards and buttons.
6. **Mobile nav** — hamburger ↔ X toggle, dropdown slide/fade.
7. **How-we-work accordion** — hover/click-driven expand-collapse + visual panel crossfade (~500ms).

Avoid: parallax, motion outside this list, motion that isn't reduced-motion-gated, and anything cute, bouncy, or attention-grabbing.

## Implementation Requirements

- Use the existing React 18 + TypeScript + Vite + Tailwind project. Build runs `tsc --noEmit && vite-react-ssg build`.
- Load fonts: `Plus Jakarta Sans` (400-800), `Instrument Serif` (italic accent), `JetBrains Mono` (labels). Async-loaded via `preload` + `onload` swap with a `<noscript>` fallback.
- Ship the logo as a reusable `<Logo />` SVG component.
- Implement motion with CSS + minimal JS. **All motion must be `prefers-reduced-motion`-gated** and continuous loops must pause when hidden/offscreen.
- Use semantic sections and accessible markup. Hamburger nav needs `aria-expanded`.
- Responsive design across all breakpoints.
- Do not introduce unnecessary dependencies.
