## Why

The current homepage is a placeholder with no visual design or meaningful content. The site needs a proper landing page that communicates who Jorge Ramos Martínez is, surfaces recent blog posts, and showcases featured projects — matching the approved desktop/tablet/mobile designs.

## What Changes

- Replace the placeholder `index.astro` with a fully designed homepage
- Add a `HeroSection` component (name, role, skill tags, bio, CTA buttons)
- Add an `ArticleCard` component and `LatestArticles` section that queries the blog collection
- Add a `ProjectCard` component and `FeaturedProjects` section with static project data
- Add a `Footer` component with copyright text and social icon links
- Extend the blog content schema with `tags` and `readTime` fields
- Add a static projects data source (TypeScript constant or JSON) for homepage featured projects
- Update `BaseLayout` to include the Footer

## Capabilities

### New Capabilities

- `homepage`: Full homepage layout with hero, latest articles, featured projects, and footer sections rendered as composable Astro components

### Modified Capabilities

- `mobile-menu`: No requirement changes — existing navbar and mobile menu remain unchanged

## Impact

- `src/pages/index.astro` — rewritten
- `src/components/` — new files: `HeroSection.astro`, `ArticleCard.astro`, `LatestArticles.astro`, `ProjectCard.astro`, `FeaturedProjects.astro`, `Footer.astro`
- `src/content.config.ts` — blog schema extended with optional `tags` (string array) and `readTime` (string)
- `src/data/projects.ts` — new static file with featured project data
- `src/layouts/BaseLayout.astro` — Footer slot added
