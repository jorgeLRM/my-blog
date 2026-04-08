## 1. Data Layer

- [x] 1.1 Extend blog collection schema in `src/content.config.ts` to add optional `tags?: string[]` and `readTime?: string` fields
- [x] 1.2 Create `src/data/projects.ts` with a typed `Project` interface and a `featuredProjects` array containing 3 entries (Distributed KV Store, Event Sourcing Framework, Load Balancer) each with `title`, `description`, `tags`, `githubUrl`, `featured`
- [x] 1.3 Update `src/content/blog/first-post.md` front-matter to include `tags` and `readTime` example values

## 2. Components — Hero

- [x] 2.1 Create `src/components/HeroSection.astro` with the owner's name as an `<h1>`, role in teal, skill-tag badges, bio paragraph, and "View Blog →" (primary) + "View Projects" (secondary) CTA buttons

## 3. Components — Latest Articles

- [x] 3.1 Create `src/components/ArticleCard.astro` accepting `title`, `description`, `slug`, `tags?`, and `readTime?` props; render title as a link to `/blog/<slug>`, description, conditional tag badges, and conditional read-time text
- [x] 3.2 Create `src/components/LatestArticles.astro` that fetches and sorts all blog posts by date descending, slices the top 3, renders the section header ("Latest Articles" + "View all →" link to `/blog`), and maps over the posts with `ArticleCard`

## 4. Components — Featured Projects

- [x] 4.1 Create `src/components/ProjectCard.astro` accepting `title`, `description`, `tags`, and `githubUrl` props; render a card with title, inline-SVG GitHub icon link, description, and tag badges
- [x] 4.2 Create `src/components/FeaturedProjects.astro` that imports `featuredProjects` from `src/data/projects.ts`, renders the section header ("Featured Projects" + "View all →" link to `/projects`), and maps over the 3 projects using `ProjectCard` in a responsive grid (`grid-cols-1 md:grid-cols-3`)

## 4b. Card Interaction Effects

- [x] 4b.1 Add hover effects to `ArticleCard.astro`: teal border, teal title, and a fade-in ↗ arrow icon in the top-right corner using Tailwind `group` / `group-hover`
- [x] 4b.2 Add hover teal border to `ProjectCard.astro` using Tailwind `hover:border-teal-500`
- [x] 4b.3 Add `cursor-pointer` to both `ArticleCard.astro` and `ProjectCard.astro`

## 5. Components — Footer

- [x] 5.1 Create `src/components/Footer.astro` with a tagline, copyright line, and three social icon links (GitHub, Twitter, LinkedIn) using inline SVG icons

## 6. Layout & Page Assembly

- [x] 6.1 Update `src/layouts/BaseLayout.astro` to import and render `<Footer />` after the `<main>` slot
- [x] 6.2 Rewrite `src/pages/index.astro` to import and compose `HeroSection`, `LatestArticles`, and `FeaturedProjects` inside `BaseLayout` with appropriate section spacing
