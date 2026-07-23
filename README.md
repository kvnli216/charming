# Sabrina Chen Portfolio

This project is both a playground for front end techniques and a professional Motion Graphics portfolio. Feel free to explore the web app and get a glimpse of Sabrina's work and expertise in Motion Graphics!

## Table of Contents

- [Getting Started](#getting-started)
- [Adding a Project](#adding-a-project)
- [Technologies Used](#technologies-used)
- [Portfolio Sections](#portfolio-sections)

## Getting Started

### Prerequisites

- Node.js
- [pnpm](https://pnpm.io/) (`corepack enable && corepack prepare pnpm@latest --activate` if you don't have it)

### Installation

```bash
git clone https://github.com/kvnli216/charming.git
cd charming
pnpm install
```

### Usage

```bash
pnpm dev       # start the dev server
pnpm build     # type-check and build for production (outputs to dist/)
pnpm preview   # preview the production build locally
pnpm test      # run the test suite
pnpm deploy    # build and publish dist/ to GitHub Pages
```

Visit the printed local URL (typically [http://localhost:5173](http://localhost:5173)) to view the portfolio.

## Adding a Project

Project/case-study content lives under `src/content/projects/`, one folder per project:

```
src/content/projects/<slug>/
  index.tsx     # the Project object (copy, credits, media references)
  assets/       # images/gifs/videos referenced by index.tsx
```

To add a new project, create a new `<slug>/` folder with an `index.tsx` (see `src/content/types.ts` for the `Project` shape, and any existing project folder for an example) and an `assets/` folder. It's picked up automatically — no routing or App code needs to change.

## Technologies Used

- React + TypeScript
- Vite
- Material UI
- React Router (HashRouter)
- Vitest

## Portfolio Sections

### 1. Reel

Motion reel and quick intro.

### 2. Work

Grid of case studies, each backed by a `src/content/projects/<slug>` entry.

### 3. Fun

Illustration gallery.

### 4. About

Bio, contact info, and resume link.
