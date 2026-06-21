# JTAM Group site

Static marketing site for JTAM Group — technology consulting and solutions. Stack: React 18 + TypeScript + Vite + Tailwind + react-router-dom, prerendered via vite-react-ssg (no framer-motion). Current public surface: single-page homepage. Deployed on Vercel (manual `vercel --prod`).

## Design System

Always read `DESIGN.md` before making any visual or UI decision. All font choices, colors, spacing, and aesthetic direction are defined there. Do not deviate without explicit approval. Flag any code that doesn't match `DESIGN.md`.

Key invariants:
- Plus Jakarta Sans (400-800) for hero, headings, body, UI, cards, buttons, diagrams. Instrument Serif (italic) is a sparse accent only. JetBrains Mono for labels, captions, diagram annotations.
- Base `#FFFFFF`, soft `#F7F8FA`, ink `#050608`, graphite `#0C0F14`, body `#3B4148`, muted `#6F7782`, line `#E4E8ED`, line-strong `#AEB7C2`, signal `#7DD3FC`, signal-soft `#E0F7FF`, deep-signal `#0369A1`.
- Aurora gradient accent: `#6EE7B7 → #2DD4BF → #22D3EE → #38BDF8 → #3B82F6` (mint→teal→cyan→blue). Cool only — no purple/violet/magenta, no warm hues.
- Rounded scale: stages 24-26px, cards 16-20px, small panels 9-14px, buttons = pills (999px).
- No shadows beyond hairline borders. No decorative blobs/glassmorphism. No Tailwind default blue.
- Motion suite (all `prefers-reduced-motion`-gated): hero fade-up, canvas Aurora ribbon flow, rotating logo mark, section scroll-reveal, hover transitions. Continuous loops pause when hidden.

## Dev

```bash
npm install
npm run dev      # vite dev server
npm run build    # production build
npm run preview  # preview prod build
```

## Deploy

Ships manually via `vercel --prod`. SPA routing is handled in `vercel.json`.
