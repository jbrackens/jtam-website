# JTAM Group site

Static marketing site for JTAM Group — technology consulting and solutions. Single-page React/Vite homepage.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy

Hosted on **Cloudflare Pages** (project `jtam-website`). Every push to `main`
builds and deploys automatically via
`.github/workflows/deploy-cloudflare-pages.yml`; it can also be run on demand
from the Actions tab.

The workflow needs two secrets on the repository's **Production** environment:

| Secret | Where to get it |
|---|---|
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare dashboard → Workers & Pages → account ID |
| `CLOUDFLARE_API_TOKEN` | Cloudflare dashboard → My Profile → API Tokens, with the *Cloudflare Pages: Edit* permission |

Until both are set the workflow stops at its "Verify deployment secrets" step
with an explanatory error rather than half-deploying.

To deploy by hand instead:

```bash
npm run build
wrangler pages deploy dist --project-name jtam-website
```

DNS and custom domains (`jtamb.com`, `www`) are managed in the Cloudflare
dashboard.

### Vercel decommission — outstanding

This repo used to deploy through the **Vercel GitHub App**, and that project was
never removed when the site moved to Cloudflare. A Vercel build from 2026-06-21
is still publicly served at `jtam-website.vercel.app` (same build as production,
but a duplicate public copy of the site), and Vercel still emails about it.

To finish the migration, in the Vercel dashboard (`jbrackens-projects`):

1. Delete the `jtam-website` project — stops the notification emails and takes
   the duplicate public copy offline.
2. Remove the Vercel GitHub App from `jbrackens/jtam-website` so a future push
   cannot silently redeploy it.
