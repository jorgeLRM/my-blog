## Context

The homepage (`src/pages/index.astro`) is a placeholder with hardcoded text and no structure. The approved designs (desktop, tablet, mobile) define a three-section layout: hero, latest articles, and featured projects, plus a site footer. The project uses Astro with Tailwind CSS v4 and the existing Geist Variable font. The blog content collection exists but lacks `tags` and `readTime` fields.

## Goals / Non-Goals

**Goals:**
- Implement the approved homepage design as composable Astro components
- Surface the 3 latest blog posts from the content collection (with tags and read time)
- Show 3 featured projects from a static data source with tags and GitHub links
- Add a persistent site footer (copyright + GitHub, Twitter, LinkedIn social icons)
- Fully responsive: single column on mobile, multi-column on desktop

**Non-Goals:**
- Pagination or filtering for articles/projects
- Dynamic project data from an external API or CMS
- Animation or scroll effects beyond what Tailwind provides
- Changes to the Navbar or mobile-menu behavior

## Decisions

### 1. Component decomposition

Each visual section becomes its own Astro component placed in `src/components/`:

| Component | Responsibility |
|---|---|
| `HeroSection.astro` | Name, role badge, skill tags, bio, CTA buttons |
| `ArticleCard.astro` | Single article row: title, description, tags, read time |
| `LatestArticles.astro` | Section wrapper: fetches top-3 posts, renders ArticleCard list |
| `ProjectCard.astro` | Single project card: title, GitHub icon, description, tags |
| `FeaturedProjects.astro` | Section wrapper: imports static data, renders ProjectCard grid |
| `Footer.astro` | Copyright text + social icon links |

This keeps `index.astro` as a thin composition page and makes each section independently testable and reusable.

### 2. Static project data

Projects are defined in `src/data/projects.ts` as a typed TypeScript array. This avoids a CMS dependency and keeps data co-located with the code. Each project has: `title`, `description`, `tags` (string[]), `githubUrl` (string), `featured` (boolean).

**Alternative considered**: Astro content collection for projects — rejected because there are only 3 featured projects and no per-project detail pages yet.

### 3. Blog schema extension

Add optional `tags?: string[]` and `readTime?: string` fields to the blog collection in `content.config.ts`. Both are optional so the existing `first-post.md` does not break.

### 4. Footer placement

Footer is added inside `BaseLayout.astro` after `<main>`, so it appears on every page automatically — matching the design where the footer is always visible at the bottom.

### 5. Responsive grid for Featured Projects

- Mobile: single column (`grid-cols-1`)
- Desktop (md+): three columns (`md:grid-cols-3`)

Latest Articles use a single column list at all breakpoints (matching the design).

### 6. GitHub icon via inline SVG

Consistent with the existing Navbar approach (per the `mobile-menu` spec), social icons for GitHub in the footer use an inline SVG path to avoid dependency on lucide brand icons.

## Risks / Trade-offs

- **Blog schema is extended but not enforced**: existing posts without `tags`/`readTime` will render without those fields — handled gracefully via conditionals in `ArticleCard`. → No mitigation needed.
- **Static project data**: adding/removing projects requires a code change. → Acceptable for the current scope; a CMS can be added later.
- **BaseLayout footer change affects all pages**: the footer will appear on `/about`, `/projects`, `/blog` too. → This is intentional and matches the design.

## Migration Plan

1. Extend `content.config.ts` schema (non-breaking — fields are optional)
2. Create `src/data/projects.ts`
3. Create all new components
4. Rewrite `src/pages/index.astro`
5. Update `src/layouts/BaseLayout.astro` to include `<Footer />`
6. Update `first-post.md` with `tags` and `readTime` front-matter to validate rendering
