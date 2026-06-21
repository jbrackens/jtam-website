# JTAM Group site

Static marketing site for JTAM Group — technology consulting and solutions. Stack: React 18 + TypeScript + Vite + Tailwind + react-router-dom, prerendered via vite-react-ssg (no framer-motion). Current public surface: single-page homepage. Deployed on Vercel (manual `vercel --prod`).

## Design System

Always read `DESIGN.md` before making any visual or UI decision. All font choices, colors, spacing, and aesthetic direction are defined there. Do not deviate without explicit approval. Flag any code that doesn't match `DESIGN.md`.

Key invariants:
- **Type:** Plus Jakarta Sans (400-800) for hero, headings, body, UI, cards, buttons, diagrams. Instrument Serif (italic) is a sparse accent only. JetBrains Mono for labels, captions, diagram annotations.
- **Color:** base `#FFFFFF`, soft `#F7F8FA`, ink `#050608`, graphite `#0C0F14`, body `#3B4148`, muted `#6F7782`, line `#E4E8ED`, line-strong `#AEB7C2`, signal `#7DD3FC`, signal-soft `#E0F7FF`, deep-signal `#0369A1`.
- **Aurora gradient** is the signature accent: `#6EE7B7 → #2DD4BF → #22D3EE → #38BDF8 → #3B82F6` (mint→teal→cyan→blue). Cool only — **NO purple/violet/magenta, NO warm hues**. Use as thin accents (hero bar, heading underlines, dividers, logo, giant wordmark), not surface fills. No Tailwind default blue.
- **Rounded scale:** stages/CTA band 24-26px, cards 16-20px, small in-stage panels 9-14px, buttons = pills (999px).
- Hairline borders; soft low-opacity shadows allowed only under dark stages. No glassmorphism or decorative blobs.
- **Brand mark** = the **swarm orbit-ring** SVG (Aurora fill; solid white on dark). Ship as a reusable `<Logo/>` component.
- **Motion suite** (all `prefers-reduced-motion`-gated; continuous loops pause when hidden): hero entrance fade-up (~750ms); continuous `<canvas>` Aurora ribbon flow; rotating logo mark (~22s); section scroll-reveal fade-ups; hover transitions <200ms.

## Dev

```bash
npm install
npm run dev      # vite dev server
npm run build    # production build
npm run preview  # preview prod build
```

## Deploy

Production (`www.jtamb.com`) ships **manually** via the Vercel CLI — `git push` to `main` does **not** auto-deploy:

```bash
vercel --prod    # remote build + aliases the production domain
```

Build runs `tsc --noEmit && vite-react-ssg build` (prerendered static output in `dist/`). SPA fallback routing is in `vercel.json`.

To enable push-to-deploy, connect the GitHub repo in Vercel → project → Settings → Git.

## Skill routing

When the user's request matches an available skill, invoke it via the Skill tool. When in doubt, invoke the skill.

Key routing rules:
- Product ideas/brainstorming → invoke /office-hours
- Strategy/scope → invoke /plan-ceo-review
- Architecture → invoke /plan-eng-review
- Design system/plan review → invoke /design-consultation or /plan-design-review
- Full review pipeline → invoke /autoplan
- Bugs/errors → invoke /investigate
- QA/testing site behavior → invoke /qa or /qa-only
- Code review/diff check → invoke /review
- Visual polish → invoke /design-review
- Ship/deploy/PR → invoke /ship or /land-and-deploy
- Save progress → invoke /context-save
- Resume context → invoke /context-restore
- Author a backlog-ready spec/issue → invoke /spec
