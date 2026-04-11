## ADDED Requirements

### Requirement: Projects section displays the latest projects, not featured projects
The homepage projects section SHALL be titled "Latest Projects" and SHALL source projects by taking the last three entries of the projects array (treating array order as insertion recency), rather than filtering by a `featured` flag.

#### Scenario: Section heading is "Latest Projects"
- **WHEN** the homepage renders
- **THEN** the projects section heading reads "Latest Projects"

#### Scenario: Up to three projects are shown from the end of the array
- **WHEN** the projects array has three or more entries
- **THEN** the three entries at the highest array indices (most recently added) are rendered as `ProjectCard` components

#### Scenario: Fewer than three projects in array
- **WHEN** the projects array has fewer than three entries
- **THEN** all available entries are rendered as `ProjectCard` components

#### Scenario: Component file is named LatestProjects
- **WHEN** the homepage imports the projects section
- **THEN** the import references `LatestProjects.astro` (not `FeaturedProjects.astro`)
