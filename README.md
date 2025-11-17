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

## One-command GitHub Pages deploy

You can publish the already-built site to the `gh-pages` branch (the default GitHub Pages source) without configuring GitHub
Actions:

```bash
npm run deploy:pages
```

The script will build the project, create a temporary git repo that contains only the production assets, and force push the
result to the `gh-pages` branch on your `origin` remote. After running it once, open the repository settings on GitHub and
set **Pages → Source** to `gh-pages`. Subsequent `npm run deploy:pages` runs will replace the hosted site with the latest
build, ensuring https://your-username.github.io/ no longer 404s.

## GitHub Pages deployment

The repository now ships with a `Deploy site` GitHub Actions workflow that builds the React app and publishes the contents of
`dist/` to the dedicated GitHub Pages environment. After merging to `main`, ensure the repository's Pages settings are
configured to "GitHub Actions" so each push to `main` automatically updates the live site.
