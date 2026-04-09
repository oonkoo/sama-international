# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

SAMA Service Company LTD website - a Next.js 16 application for a maintenance, repair, and industrial services company.

## Commands

```bash
npm run dev      # Start development server at localhost:3000
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Tech Stack

- **Next.js 16.2.2** with App Router
- **React 19.2.4**
- **TypeScript** (strict mode)
- **Tailwind CSS 4** via `@tailwindcss/postcss`
- **Geist fonts** (sans and mono) via `next/font/google`

## Project Structure

```
app/
  layout.tsx    # Root layout with Geist fonts, metadata
  page.tsx      # Home page
  globals.css   # Tailwind imports, CSS variables for theming
public/         # Static assets (logo, documents)
```

## Key Conventions

- Path alias: `@/*` maps to project root
- Dark mode: CSS variables with `prefers-color-scheme: dark`
- ESLint: Flat config with `eslint-config-next/core-web-vitals` and TypeScript rules

## Important: Next.js 16 Breaking Changes

This project uses Next.js 16 which has breaking changes from earlier versions. Before writing code, consult the docs at `node_modules/next/dist/docs/` - particularly:
- `01-app/01-getting-started/` for App Router patterns
- `01-app/03-api-reference/` for current APIs
