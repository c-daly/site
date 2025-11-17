# Portfolio site

This repo now uses [Vite](https://vitejs.dev/) and React instead of Jekyll so it can grow into a richer single-page experience while still deploying on GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

The dev server runs on <http://localhost:5173> by default.

## Production build

```bash
npm run build
```

The compiled assets live in `dist/` and power the GitHub Pages deployment.

## GitHub Pages deployment

The repository now ships with a `Deploy site` GitHub Actions workflow that builds the React app and publishes the contents of
`dist/` to the dedicated GitHub Pages environment. After merging to `main`, ensure the repository's Pages settings are
configured to "GitHub Actions" so each push to `main` automatically updates the live site.
