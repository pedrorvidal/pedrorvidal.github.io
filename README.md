<div align="center">

# 🌐 Pedro Vidal — Professional Portfolio

A modern, responsive personal portfolio website showcasing my projects, skills, and experience.

**[View Live →](https://pedrorvidal.github.io)**

---

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)
![Vitest](https://img.shields.io/badge/Vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)

</div>

---

## 📖 About

This is my personal portfolio, built from the ground up with a modern frontend stack. It's designed to be fast, accessible, and easy to maintain — deployed automatically via GitHub Pages.

## ✨ Features

- ⚡ Lightning-fast builds powered by **Vite**
- 🎨 Utility-first styling with **Tailwind CSS**
- 🧩 Accessible, composable UI with **shadcn/ui** components
- 🔷 Fully typed with **TypeScript**
- 🌎 Bilingual (English / Portuguese) UI and case studies
- 🕹️ Arcade theme with a Konami code easter egg (↑ ↑ ↓ ↓ ← → ← → B A, or tap the avatar 7 times)
- 🧪 Unit and component tests with **Vitest** + **Testing Library**
- ✅ CI on every pull request: lint, type-check, tests and build
- 🚀 Auto-deployed to **GitHub Pages** on every push to `main`

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/pedrorvidal/pedrorvidal.github.io.git

# Navigate into the project
cd pedrorvidal.github.io

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:8080`.

> After switching branches, run `npm install` again: a branch may add new dependencies (for example the self-hosted fonts), and Vite fails with `ENOENT` errors when they are missing.

### Environment variables

The contact form sends messages through [Static Forms](https://www.staticforms.dev/). Create a `.env.local` file (it is git-ignored) with your key:

```bash
VITE_STATICFORMS_API_KEY=your-key-here
```

Without it the site still works, but the form shows a "missing configuration" message instead of sending.

## 📜 Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local development server |
| `npm run build` | Build for production |
| `npm run build:dev` | Build in development mode |
| `npm run preview` | Preview the production build |
| `npm run test` | Run the test suite once |
| `npm run test:watch` | Run tests in watch mode |
| `npm run lint` | Lint the codebase with ESLint |
| `npm run deploy` | Build and push `dist/` to the `gh-pages` branch (manual fallback, see below) |

## 🗂️ Project Structure

```
pedrorvidal.github.io/
├── .github/workflows/
│   ├── ci.yml       # Checks on pull requests and pushes to main
│   └── deploy.yml   # Build + deploy to GitHub Pages
├── public/          # Static assets (favicons, CV PDFs, og-image)
├── scripts/         # Screenshot capture scripts for case covers
├── src/
│   ├── components/  # Page sections and UI components
│   ├── data/        # Case studies (cases.ts)
│   ├── i18n/        # English / Portuguese strings
│   ├── cheat/       # Konami code easter egg
│   └── test/        # Vitest test files
├── index.html       # Entry HTML
├── vite.config.ts   # Vite configuration
├── tailwind.config.ts
├── tsconfig.json
└── vitest.config.ts
```

## 🧪 Testing

Tests use **Vitest** with **Testing Library** in a jsdom environment. They live in `src/test/`:

| File | Covers |
|---|---|
| `konami.test.tsx` | The Konami code hook: full sequence, uppercase keys, recovery from a wrong key, ignoring form fields |
| `cases.test.ts` | Case data: unique ids, a Portuguese summary for every case, English text kept in English mode |
| `CaseGrid.test.tsx` | Case grid: boss stages first, secret stage hidden, filters, modal navigation |
| `Header.test.tsx` | Language and theme toggles |

```bash
npm test                                   # run once
npm run test:watch                         # re-run on save
npx tsc -p tsconfig.app.json --noEmit      # type-check
```

## ⚙️ CI/CD

Two GitHub Actions workflows live in `.github/workflows/`:

- **CI** (`ci.yml`) runs on every pull request and every push to `main`: `npm ci`, lint, type-check, tests and a production build. A pull request should only be merged when it passes.
- **Deploy** (`deploy.yml`) runs on every push to `main`, and can also be started by hand. It runs the same checks, builds the site and publishes `dist/` to GitHub Pages. If any check fails, nothing is deployed and the live site stays as it was.

The build reads `VITE_STATICFORMS_API_KEY` from a repository secret with the same name (**Settings → Secrets and variables → Actions**).

## 🚢 Deployment

The site is served by **GitHub Pages** with **Settings → Pages → Source** set to **GitHub Actions**. Merging into `main` is all it takes: the Deploy workflow publishes it, usually within two minutes, at https://pedrorvidal.github.io/.

### If the workflow did not run

1. **Re-run it by hand.** In the **Actions** tab, open **Deploy** and click **Run workflow** on `main`, or from a terminal:

   ```bash
   gh workflow run deploy.yml --ref main
   gh run watch          # follow it
   ```

2. **If it ran and failed**, open the run log in the **Actions** tab, fix the failing step (lint, types, tests or build) in a pull request, and merge it. The merge triggers a new deployment.

3. **If GitHub Actions is unavailable**, publish from your machine through the `gh-pages` branch:

   ```bash
   git checkout main && git pull
   npm ci
   npm run deploy        # builds and pushes dist/ to the gh-pages branch
   ```

   Then set **Settings → Pages → Source** to **Deploy from a branch**, branch `gh-pages`, folder `/ (root)`. GitHub Pages serves only one source at a time, so this step is required. Once Actions is back, set the source to **GitHub Actions** again, so the next push to `main` deploys normally.

   `npm run deploy` builds with your local `.env.local`, so make sure `VITE_STATICFORMS_API_KEY` is set there, or the published contact form will not send.

If the site still looks old after a deployment, hard-refresh the page (Ctrl+Shift+R / Cmd+Shift+R) to skip the browser cache.

---

<div align="center">

Made with ❤️ by [Pedro Vidal](https://pedrorvidal.github.io)

</div>
