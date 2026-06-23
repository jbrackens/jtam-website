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

Hosted on **Cloudflare Pages** (project `jtam-website`), deployed manually:

```bash
npm run build
wrangler pages deploy dist --project-name jtam-website
```

Run wrangler under **Node 20**. DNS and custom domains (`jtamb.com`, `www`) are managed in the Cloudflare dashboard.
