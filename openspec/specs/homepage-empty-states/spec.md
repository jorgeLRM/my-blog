## ADDED Requirements

### Requirement: ArticleCard renders tags and readTime only when present
`ArticleCard` SHALL render the tags and readTime footer only when at least one of them is provided. The condition MUST use a boolean comparison (`tags && tags.length > 0`) rather than a numeric length value to avoid Astro JSX rendering issues where a non-boolean truthy expression may suppress the JSX block.

#### Scenario: Post has tags and readTime
- **WHEN** `ArticleCard` receives a non-empty `tags` array and a `readTime` string
- **THEN** the footer renders with tag badges and the readTime label

#### Scenario: Post has no tags and no readTime
- **WHEN** `ArticleCard` receives no `tags` and no `readTime`
- **THEN** no footer element is rendered

### Requirement: Blog index page uses ArticleCard
The `/blog` listing page SHALL render posts using the `ArticleCard` component, sorted by date descending, so that tags and readTime are displayed consistently with the homepage. It SHALL also show "There are no posts yet." when the collection is empty.

#### Scenario: Blog page with posts
- **WHEN** the blog collection has one or more entries
- **THEN** each post renders as an `ArticleCard` with title, description, slug, tags, and readTime

#### Scenario: Blog page with no posts
- **WHEN** the blog collection has zero entries
- **THEN** a "There are no posts yet." message is displayed

### Requirement: Latest Articles section shows empty-state message when no posts exist
When the blog content collection returns zero entries, the Latest Articles section SHALL display a message "There are no posts yet." in place of article cards. The section header ("Latest Articles") and layout structure SHALL remain visible.

#### Scenario: No articles exist
- **WHEN** the blog collection has zero entries
- **THEN** the section renders with the "Latest Articles" heading and a "There are no posts yet." message, and no `ArticleCard` components are rendered

#### Scenario: Articles exist
- **WHEN** the blog collection has one or more entries
- **THEN** up to three `ArticleCard` components are rendered sorted by date descending, and no empty-state message is shown

#### Scenario: Fewer than three articles exist
- **WHEN** the blog collection has one or two entries
- **THEN** only those available `ArticleCard` components are rendered (no empty-state message), and no placeholder cards are added

### Requirement: Latest Projects section shows empty-state message when no projects exist
When the projects data source returns zero entries, the Latest Projects section SHALL display a message "There are no projects yet." in place of project cards. The section header ("Latest Projects") and layout structure SHALL remain visible.

#### Scenario: No projects exist
- **WHEN** the projects array has zero entries
- **THEN** the section renders with the "Latest Projects" heading and a "There are no projects yet." message, and no `ProjectCard` components are rendered

#### Scenario: Projects exist
- **WHEN** the projects array has one or more entries
- **THEN** up to three `ProjectCard` components are rendered, and no empty-state message is shown

#### Scenario: Fewer than three projects exist
- **WHEN** the projects array has one or two entries
- **THEN** only those available `ProjectCard` components are rendered (no empty-state message), and no placeholder cards are added
