## Why

The homepage currently has no handling for empty states — if there are no articles or projects, the sections render empty with no feedback to the visitor. Additionally, the projects section is labeled "Featured Projects" but should reflect recency (latest) rather than curation, consistent with the "Latest Articles" pattern.

## What Changes

- Rename "Featured Projects" section to "Latest Projects" and source the three most recent projects instead of a static featured list.
- Add empty-state messages ("There are no posts yet." / "There are no projects yet.") to both the Latest Articles and Latest Projects sections when no content exists.
- Both sections must always attempt to show up to three items; if fewer exist, only the available items render alongside the empty-state message (or the empty-state message alone if none exist).
- The card component structure (`ArticleCard`, `ProjectCard`) remains intact so content renders correctly as soon as items are added.

## Capabilities

### New Capabilities

- `homepage-empty-states`: Empty-state validation and messaging for the Latest Articles and Latest Projects homepage sections, with a guaranteed three-item cap and graceful degradation when content is absent.

### Modified Capabilities

- `latest-projects`: The projects section changes from a static `featuredProjects` data source to a dynamic latest-three query, mirroring how `LatestArticles` already works.

## Impact

- `src/components/FeaturedProjects.astro` — rename to `LatestProjects.astro`, update data source and section heading, add empty-state branch.
- `src/components/LatestArticles.astro` — add empty-state branch for when no blog posts exist.
- `src/pages/index.astro` — update import from `FeaturedProjects` to `LatestProjects`.
- `src/data/projects.ts` — may need a `latestProjects` export (sorted by date) or the component can derive it; no schema change required.
- No new dependencies. No breaking API changes.
