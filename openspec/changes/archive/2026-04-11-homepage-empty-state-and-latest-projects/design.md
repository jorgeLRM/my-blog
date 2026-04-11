## Context

The homepage has two content sections — Latest Articles (`LatestArticles.astro`) and Featured Projects (`FeaturedProjects.astro`). Articles are sourced dynamically from the `blog` Astro content collection. Projects are sourced from a static array (`featuredProjects`) in `src/data/projects.ts`. Neither section handles the empty case, and the projects section is named/sourced around "featured" rather than "latest".

## Goals / Non-Goals

**Goals:**
- Show an empty-state message in each section when no content exists, without hiding the section header or layout structure.
- Rename the projects section to "Latest Projects" and source the three most-recently-added projects.
- Cap both sections at three items maximum.
- Preserve existing `ArticleCard` and `ProjectCard` component APIs — no prop changes.

**Non-Goals:**
- Pagination or infinite scroll.
- Filtering or search on the homepage.
- Changes to the blog or projects list pages.
- Migrating project data from a static file to a CMS or content collection.

## Decisions

### D1 — Projects data source stays in `projects.ts` (static array)

**Decision**: Keep projects as a static TypeScript array rather than converting to an Astro content collection.

**Rationale**: The user has zero projects right now. A static file is simpler to add to and requires no schema migration. When the user adds projects they add an object to the array; this is the lowest-friction path. Converting to a content collection would add Markdown schema overhead for no current benefit.

**Alternative considered**: Astro content collection for projects. Rejected — over-engineering for the current scale.

### D2 — Sort projects by insertion order (array index) as a proxy for "latest"

**Decision**: Since projects have no `date` field, treat array order as recency (newest at the top of the array, or just take the last three). We will take the last three entries of the array reversed, so the user controls recency by appending to the array.

**Alternative considered**: Adding a `date` field to `Project`. Deferred — the user can add it later if needed; it is not required to fulfill the "latest" intent right now.

### D3 — Empty state is inline in each section component (no shared component)

**Decision**: Each section renders its own empty-state message with a conditional block. No shared `<EmptyState>` wrapper component.

**Rationale**: There are only two call sites. A shared component would be premature abstraction. The messages are slightly different ("no posts yet" vs "no projects yet"), and the card layout differs between sections. Inline conditionals keep each component self-contained.

### D4 — Rename `FeaturedProjects.astro` to `LatestProjects.astro`

**Decision**: Rename the file and update the import in `index.astro`.

**Rationale**: The component name should match the new section heading and intent. A rename is cleaner than keeping a misleading filename.

## Risks / Trade-offs

- **Static project order is fragile** → If the user reorders the array for non-chronological reasons, "latest" becomes misleading. Mitigation: add a comment in `projects.ts` noting that array order implies recency.
- **No visual skeleton/placeholder** → The empty-state is a text message, not a greyed-out card skeleton. This is intentional simplicity; a skeleton can be added later.

## Migration Plan

1. Rename `FeaturedProjects.astro` → `LatestProjects.astro`.
2. Update `index.astro` import.
3. Update `LatestProjects.astro`: change heading, data source (last 3 of array), add empty-state branch.
4. Update `LatestArticles.astro`: add empty-state branch.
5. No data migration required. No deployment steps beyond a standard build.

**Rollback**: revert file rename and component edits via git.
