# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.1.0] - 2026-04-11

### Added
- Empty-state messages ("There are no posts yet." / "There are no projects yet.") on homepage sections and blog index page
- Blog index page now uses `ArticleCard` for consistent tag and readTime display, sorted by date descending

### Changed
- Renamed "Featured Projects" section to "Latest Projects", now dynamically sourcing the last 3 entries from the projects array
- `projects.ts` exports a plain `projects` array (array order implies recency); removed `featured` flag and static list

### Fixed
- `ArticleCard` tags and readTime footer not rendering due to an Astro JSX numeric-value conditional quirk; replaced with explicit boolean comparison

## [1.0.0] - 2026-04-08

### Added
- Homepage with Hero section (name, role, skill tags, bio, CTA buttons)
- Latest Articles section showing the 3 most recent blog posts
- Featured Projects section with responsive 3-column grid
- `ArticleCard` component with teal hover border, title color change, and ↗ arrow icon
- `ProjectCard` component with teal hover border
- `Footer` component with tagline, copyright, and GitHub/Twitter/LinkedIn social links
- Static project data in `src/data/projects.ts`
- Blog content schema extended with optional `tags` and `readTime` fields
