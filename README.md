# Jeffery Kobby Gaisey — Portfolio

A production-ready, dark-by-default portfolio for **Jeffery Kobby Gaisey** — cybersecurity undergraduate, full-stack developer and Top-5 global CTF finisher.

Built with **React 18 + TypeScript + Vite + Tailwind CSS + Framer Motion + Lucide React**. Glassmorphism UI, animated grid background, scroll progress, light/dark theme toggle, project filtering, and an interactive in-browser terminal.

---

## ✨ Features

- **Hero section** — animated typing terminal, social links, animated counters, CTA buttons
- **About** — security-first narrative with highlight cards
- **Skills** — six categorised cards with animated progress bars
- **Projects** — filterable showcase (Full-Stack / Cybersecurity / Web), procedural SVG previews, GitHub & Live Demo buttons
- **CTF Achievements** — dashboard tiles + alternating timeline (HTB Uni CTF 2025, brCTF v3, etc.)
- **Experience** — animated vertical timeline (Bella Africa NGO)
- **Education + Certifications** — B.Sc. Cyber Security · GCTU
- **Interactive Terminal** — real commands (`help`, `whoami`, `skills`, `projects`, `ctf`, `socials`, `contact`, `clear`, `ls`, `sudo`), command history, Tab autocomplete
- **Contact form** — validated inputs, success states, mailto fallback (no backend required)
- **Quality of life** — sticky glass navbar with active-section detection, smooth scrolling, scroll progress bar, mobile menu, light/dark toggle (persisted to `localStorage`)
- **Accessibility** — semantic landmarks, focus rings, `prefers-reduced-motion` respected
- **SEO** — full OpenGraph + Twitter meta, sitemap-ready, custom favicon and `og-image.svg`

---

## 🛠️ Tech Stack

| Layer | Tool |
| --- | --- |
| Framework | React 18 + TypeScript |
| Build | Vite 5 |
| Styling | Tailwind CSS 3 (custom theme) |
| Animation | Framer Motion 11 |
| Icons | Lucide React |
| Fonts | Inter · JetBrains Mono · Space Grotesk |

---

## 🚀 Quick start

```bash
# 1. Install dependencies (Node 18+ required)
npm install

# 2. Start the dev server
npm run dev
# → http://localhost:5173

# 3. Build for production
npm run build

# 4. Preview the production build locally
npm run preview
```

---

## 📁 Project structure

```
jeffery-portfolio/
├── public/
│   ├── favicon.svg
│   ├── og-image.svg
│   ├── robots.txt
│   └── resume-placeholder.txt   ← replace with Jeffery-Kobby-Gaisey-CV.pdf
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── AnimatedCounter.tsx
│   │   │   ├── GlowCard.tsx
│   │   │   ├── SectionHeading.tsx
│   │   │   └── TypingText.tsx
│   │   ├── About.tsx
│   │   ├── Achievements.tsx
│   │   ├── Contact.tsx
│   │   ├── Education.tsx
│   │   ├── Experience.tsx
│   │   ├── Footer.tsx
│   │   ├── GridBackground.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Projects.tsx
│   │   ├── ScrollProgress.tsx
│   │   ├── Skills.tsx
│   │   └── Terminal.tsx
│   ├── data/content.ts          ← all copy, projects, achievements, links
│   ├── hooks/
│   │   ├── useActiveSection.ts
│   │   └── useTheme.ts
│   ├── lib/utils.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── package.json
```

---

## ✏️ Customising content

Almost everything is centralised in **`src/data/content.ts`** — name, headline, social links, hero stats, skills, projects, achievements, experience, education and certifications. Edit that file and the entire site updates.

**Resume**: put your real PDF at `public/Jeffery-Kobby-Gaisey-CV.pdf` (the Download CV button links there).

**Brand color**: tweak `colors.brand` in `tailwind.config.js`.

**Social URLs**: update the `socials` array in `src/data/content.ts` with your real GitHub / LinkedIn / TryHackMe / HackTheBox profile URLs and usernames.

---

## 🚢 Deployment

### Vercel (recommended)

1. Push this project to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) → "Import Project" → pick your repo.
3. Vercel auto-detects Vite. Defaults are correct: build `npm run build`, output `dist`.
4. Click **Deploy**.

### Netlify

1. Push to GitHub.
2. [app.netlify.com](https://app.netlify.com) → "Add new site" → "Import an existing project".
3. Build command `npm run build`, publish directory `dist`.

### GitHub Pages

```bash
npm install --save-dev gh-pages
# in package.json scripts:  "deploy": "gh-pages -d dist"
npm run build && npm run deploy
```

> If deploying to a subpath (e.g. `username.github.io/portfolio`), set `base: "/portfolio/"` in `vite.config.ts`.

### Static hosting (Cloudflare Pages, Render, S3+CloudFront)

Run `npm run build` and upload the `dist/` folder. The app is a fully static SPA.

---

## 🧪 Scripts

| Script | What it does |
| --- | --- |
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Type-check + production build into `dist/` |
| `npm run preview` | Serve the built `dist/` locally |
| `npm run lint` | Run ESLint (add your config as needed) |

---

## 🔐 Security notes

The contact form uses a `mailto:` fallback, so no backend or third-party form service is required. If you'd like real form submissions, swap the handler in `src/components/Contact.tsx` for a serverless endpoint (Vercel Functions, Netlify Functions, or [Formspree](https://formspree.io/)).

The site sets no analytics by default. Add your own (Plausible, Umami, Vercel Analytics) by editing `index.html`.

---

## 📄 License

Personal portfolio — © Jeffery Kobby Gaisey. All rights reserved.
You are welcome to take inspiration from the structure, but please don't ship a verbatim copy with my name on it.
