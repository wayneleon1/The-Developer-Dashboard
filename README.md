# Dev Dashboard

A lightweight Developer Dashboard built with React, TypeScript, and Vite — displaying curated developer resources with search and filter functionality.

## Features

- **Resource Catalog** — 16 curated resources across 6 categories (Documentation, Tutorial, Tool, Reference, Library, Community)
- **Live Search** — filter by name, description, or tag in real time
- **Category Filtering** — quickly narrow down by resource type
- **Featured Filter** — surface hand-picked highlights
- **Responsive Layout** — works on desktop and mobile

## Tech Stack

- [React 18](https://react.dev) — component-based UI
- [TypeScript](https://www.typescriptlang.org) — static typing
- [Vite](https://vite.dev) — fast dev server and build tool
- [ESLint](https://eslint.org) — code linting
- [Prettier](https://prettier.io) — code formatting

## Project Structure

```
src/
├── components/
│   ├── CategoryFilter.tsx
│   ├── EmptyState.tsx
│   ├── ResourceCard.tsx
│   └── SearchBar.tsx
├── data/
│   └── resources.ts        # All resource objects + category list
├── hooks/
│   └── useResourceFilter.ts  # Search/filter logic via useMemo
├── types/
│   └── index.ts            # Shared TypeScript interfaces
├── App.tsx
├── main.tsx
└── index.css
```

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint
npm run lint

# Format
npm run format
```

## Tooling Configuration

### Vite (`vite.config.ts`)

- Output directory: `dist/`
- Source maps enabled
- Manual chunk splitting (React vendor chunk)
- Dev server on port 5173

### ESLint (`eslint.config.js`)

- TypeScript-aware rules via `typescript-eslint`
- React Hooks rules enforced
- Integrated with Prettier via `eslint-config-prettier`
- Key rules: `no-unused-vars: error`, `eqeqeq: warn`, `no-console: warn`

### Prettier (`.prettierrc`)

```json
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100
}
```

---

## Reflection: How Vite Improves Performance and Developer Experience

Vite dramatically improves both development speed and production output compared to traditional bundlers like Webpack. During development, Vite leverages native ES modules in the browser, serving source files directly without bundling — this means the dev server starts almost instantly regardless of project size, and Hot Module Replacement (HMR) updates only the changed module in milliseconds rather than re-bundling the entire app. For production, Vite uses Rollup under the hood to tree-shake unused code, minify output with esbuild (the fastest JS minifier available), and split bundles intelligently — in this project, React is split into its own vendor chunk so repeat visitors can benefit from long-term caching. The result is a leaner, faster app with a dramatically shorter feedback loop during development, making it easier to iterate quickly and ship with confidence.
