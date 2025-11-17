# Portfolio site

This site is built with Jekyll so it can be deployed directly from `main` on GitHub Pages without a build
pipeline. The homepage surfaces current AI, robotics, and finance workstreams using data files so updating the
copy is quick.

## Local development

1. Install Ruby (3.1+) and Bundler.
2. Install dependencies:

   ```bash
   bundle install
   ```

3. Run the local server:

   ```bash
   bundle exec jekyll serve --livereload
   ```

4. Visit <http://localhost:4000> to preview changes.

## Updating content

- `_data/highlights.yml`, `_data/workstreams.yml`, and `_data/metrics.yml` power the cards on the homepage.
- `assets/css/styles.css` contains the visual system.
- `index.md` describes the hero, narrative, and CTAs.

## Deployment notes

- GitHub Pages is configured for the custom domain listed in `CNAME` (`cdaly.me`). If you change the
  domain or temporarily test on a different hostname, remember to update this file so Pages stops
  reporting merge conflicts related to the missing CNAME during deploys.
- The public `LICENSE` file is required for the Pages build to stay consistent with the upstream
  repository, so keep it in place even if you do not expect community contributions.
