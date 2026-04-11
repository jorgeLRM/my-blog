## 1. Rename FeaturedProjects to LatestProjects

- [x] 1.1 Rename `src/components/FeaturedProjects.astro` to `src/components/LatestProjects.astro`
- [x] 1.2 Update the import in `src/pages/index.astro` from `FeaturedProjects` to `LatestProjects`

## 2. Update LatestProjects component

- [x] 2.1 Change the section heading from "Featured Projects" to "Latest Projects"
- [x] 2.2 Replace the static `featuredProjects` import with a dynamic slice that takes the last three entries of the full projects array (or all entries if fewer than three)
- [x] 2.3 Add an empty-state branch: when the projects array is empty, render a "There are no projects yet." message instead of the card grid
- [x] 2.4 Ensure the card grid structure (`grid grid-cols-1 gap-4 md:grid-cols-3`) is preserved even in the non-empty path

## 3. Update LatestArticles component

- [x] 3.1 Add an empty-state branch: when `latestPosts` is empty, render a "There are no posts yet." message instead of the card list
- [x] 3.2 Ensure the section header and layout structure remain visible in the empty state

## 4. Update projects data export

- [x] 4.1 Export the full `projects` array (or ensure it is accessible) from `src/data/projects.ts` so `LatestProjects.astro` can slice the last three entries
- [x] 4.2 Add a comment in `projects.ts` noting that array order implies insertion recency (newest entries last)
