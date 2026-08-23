# Sahar Fatima Devjani — Portfolio

Personal portfolio site built with React, Vite, Tailwind CSS, and Framer Motion.

## Editing content

Everything you're likely to want to change lives in `src/data/`, not in the components:

- `src/data/projects.js` — project cards, ordered best to worst. Each entry has `name`,
  `tagline`, `description`, `tech`, `github`, `demo`, and `image`. Leave `image` as `null`
  to keep the generated placeholder visual, or set it to a path (e.g. after dropping a file
  in `src/assets/projects/`) to use a real screenshot/GIF instead.
- `src/data/skills.js` — the three skill columns (Frontend / Backend / Tools & Other).
- `src/data/experience.js` — the timeline entries on the Experience section.

## Run locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

Other scripts:

```bash
npm run build     # production build to dist/
npm run preview   # serve the production build locally
npm run lint       # oxlint
```

## Deploy to Vercel (free)

**Option A — via the Vercel dashboard (no CLI needed)**

1. Push this repo to GitHub (already done if you're reading this from the repo).
2. Go to [vercel.com](https://vercel.com), sign in with GitHub, and click **Add New → Project**.
3. Import this repository. Vercel auto-detects Vite — leave the defaults:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Click **Deploy**. You'll get a live `*.vercel.app` URL in about a minute.
5. Every push to the connected branch auto-deploys; PRs get their own preview URLs.

**Option B — via the CLI**

```bash
npm install -g vercel
vercel        # first run: link/create the project, deploys a preview
vercel --prod # deploy to your production URL
```

### Custom domain

In the Vercel project → **Settings → Domains**, add your domain and point its DNS at Vercel
per the instructions shown there. Free on Vercel's Hobby plan.
