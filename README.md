# Defiant Duck

Independent AI consulting and software engineering for **defiantduck.com**. This is a separate site from cdaly.me. The design follows the selected Open Studio direction, using the original duck logo.

## Local development

Use Node 22 or newer. There are no package dependencies to install.

```sh
npm run dev
```

Open **http://localhost:4200**. The development server binds to `127.0.0.1`, rebuilds when `src/` changes, and requires a browser refresh after a rebuild. Set `PORT` to change the port.

```sh
npm run build
npm run check
npm test
npm run preview
```

`dist/` is the deployable static site. It contains the homepage, three service pages, a 404 page, assets, sitemap, robots file, and custom-domain file. No server runtime is required for hosting.

## Editing

- `src/home.html`: homepage narrative and layout.
- `src/content.mjs`: the three offers, fees, scopes, contact address, and domain.
- `src/templates.mjs`: shared navigation, metadata, service pages, and cards.
- `src/styles.css`: the selected visual design and responsive layouts.
- `src/assets/`: the original logo, locally hosted font and its license, and the draft white paper.

The AI Opportunity Review has a $500 fixed fee and the AI Project Plan has a $750 fixed fee. The AI Project Review lists a proposed $750 fee. The HTML pages use `site.email` in `src/content.mjs` for the contact address and email links. When the address changes, update the visible address and email link in the white paper PDF as well.

Client examples remain anonymous. The white paper is labeled as a draft. The shared page head in `src/templates.mjs` loads Google Tag Manager on every HTML page. Contact links open an email draft.

## Publication

Publication is a separate action. The GitHub Pages workflow is started manually after the content, proposed offers, Pages settings, and domain configuration are ready. `CNAME` declares `defiantduck.com`; building the site does not change DNS or publish anything.

The previous placeholder application remains available in Git history before this replacement branch.
