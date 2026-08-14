# Portfolio

My Portfolio 

Live site: [om22210564.github.io/Portfolio](https://om22210564.github.io/Portfolio/)

## Tech stack

- [Astro](https://astro.build/) with TypeScript
- Static HTML and CSS
- Minimal client-side JavaScript for progressive section reveals
- GitHub Pages with GitHub Actions

## Local development

Requirements: Node.js 22.12 or later and npm.

```bash
npm install
npm run dev
```

The development server is available at `http://localhost:4321/Portfolio/` because the production GitHub Pages base path is configured in `astro.config.mjs`.

## Commands

```bash
# Create the production build in dist/
npm run build

# Serve the production build locally
npm run preview

# Run Astro CLI commands
npm run astro -- --help
```

## Project structure

```text
src/
├── components/   # Reusable Astro sections and UI components
├── data/         # Typed project, experience, and skills data
├── layouts/      # Shared document layout and metadata
├── pages/        # Site routes and sitemap endpoint
└── styles/       # Global design system
public/           # Favicons, robots.txt, and static video assets
```

## Deployment

The portfolio deploys to GitHub Pages at `https://om22210564.github.io/Portfolio/`.

1. In GitHub, open **Settings → Pages** and select **GitHub Actions** as the publishing source.
2. Push to the `main` branch.
3. The [deployment workflow](.github/workflows/deploy.yml) builds the site and publishes the generated artifact.

The `site` and `base` configuration in `astro.config.mjs` must match the GitHub username and repository name. Update both values if the repository is renamed or moved to another account.
