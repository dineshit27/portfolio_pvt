# Deepak Portfolio

A personal portfolio website built with React, Vite, TypeScript, and Tailwind CSS.

## Project Structure

- `Portfolio/` — Main React + Vite frontend application
  - `src/` — Source code (components, hooks, lib)
  - `public/` — Static assets
  - `dist/` — Production build output (generated)
- `assets/` — Shared assets
- `firebase.json` — Firebase hosting config (original deployment target)

## Development

The frontend runs on port 5000:

```bash
cd Portfolio && npm run dev
```

The workflow "Start application" runs this automatically.

## Tech Stack

- React 18 + TypeScript
- Vite 6
- Tailwind CSS
- Framer Motion + GSAP (animations)
- shadcn/ui components
- Firebase (original hosting)

## Deployment

Configured as a static site deployment:
- Build: `cd Portfolio && npm run build`
- Public dir: `Portfolio/dist`
