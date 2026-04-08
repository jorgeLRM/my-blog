## ADDED Requirements

### Requirement: Hero section renders personal identity
The homepage SHALL display a hero section with the owner's full name, role title in teal, a row of skill-tag badges, a bio paragraph, and two CTA buttons.

#### Scenario: Hero content visible on load
- **WHEN** the homepage is loaded
- **THEN** the page SHALL display the heading "Jorge Ramos Martínez"
- **THEN** the role "Backend Engineer" SHALL be rendered in teal color
- **THEN** skill tags "Java", "Go", and "Distributed Systems" SHALL be visible as badge elements
- **THEN** a bio paragraph SHALL be present describing the owner's work
- **THEN** a "View Blog →" primary button and a "View Projects" secondary button SHALL both be visible

#### Scenario: CTA buttons navigate to correct pages
- **WHEN** the user clicks "View Blog →"
- **THEN** the browser SHALL navigate to `/blog`
- **WHEN** the user clicks "View Projects"
- **THEN** the browser SHALL navigate to `/projects`

### Requirement: Latest Articles section shows the 3 most recent posts
The homepage SHALL display a "Latest Articles" section that fetches the three most recently dated blog posts and renders each as a card.

#### Scenario: Section header and "View all" link present
- **WHEN** the homepage is loaded
- **THEN** a "Latest Articles" section heading SHALL be visible
- **THEN** a "View all →" link pointing to `/blog` SHALL be visible in the section header row

#### Scenario: Article cards render required fields
- **WHEN** an article card is rendered
- **THEN** the card SHALL display the post title as a bold link
- **THEN** the card SHALL display the post description as a muted sub-text
- **THEN** the card SHALL display each tag as a badge element (if `tags` is defined)
- **THEN** the card SHALL display the read time string (if `readTime` is defined)

#### Scenario: No more than 3 posts shown
- **WHEN** the blog collection contains more than 3 posts
- **THEN** only the 3 most recently dated posts SHALL appear in the Latest Articles section

### Requirement: Featured Projects section shows 3 static projects
The homepage SHALL display a "Featured Projects" section that renders exactly 3 project cards from the static project data source.

#### Scenario: Section header and "View all" link present
- **WHEN** the homepage is loaded
- **THEN** a "Featured Projects" section heading SHALL be visible
- **THEN** a "View all →" link pointing to `/projects` SHALL be visible in the section header row

#### Scenario: Project cards render required fields
- **WHEN** a project card is rendered
- **THEN** the card SHALL display the project title
- **THEN** the card SHALL display a GitHub icon link pointing to the project's GitHub URL
- **THEN** the card SHALL display the project description
- **THEN** each technology tag SHALL be rendered as a badge element

#### Scenario: Desktop grid layout
- **WHEN** the viewport width is 768 px or wider
- **THEN** the three project cards SHALL be arranged in a 3-column grid

#### Scenario: Mobile stacked layout
- **WHEN** the viewport width is below 768 px
- **THEN** the three project cards SHALL stack in a single column

### Requirement: Footer displays copyright and social links
The site footer SHALL appear on every page and display a copyright notice and links to the owner's GitHub, Twitter, and LinkedIn profiles via icon buttons.

#### Scenario: Footer content present
- **WHEN** any page is loaded
- **THEN** the footer SHALL display "© 2026 Jorge Ramos Martínez. All rights reserved."
- **THEN** the footer SHALL display a short tagline "Building scalable systems. Writing about engineering."
- **THEN** GitHub, Twitter, and LinkedIn icon links SHALL be visible in the footer

#### Scenario: Social links open correct destinations
- **WHEN** the user clicks the GitHub icon in the footer
- **THEN** the link SHALL point to the owner's GitHub profile URL
- **WHEN** the user clicks the Twitter icon in the footer
- **THEN** the link SHALL point to the owner's Twitter/X profile URL
- **WHEN** the user clicks the LinkedIn icon in the footer
- **THEN** the link SHALL point to the owner's LinkedIn profile URL

### Requirement: Article cards have interactive hover state
When the user hovers over an article card, the card SHALL give clear visual feedback indicating it is clickable.

#### Scenario: Teal border on hover
- **WHEN** the user hovers over an article card
- **THEN** the card border SHALL transition to teal

#### Scenario: Teal title on hover
- **WHEN** the user hovers over an article card
- **THEN** the post title text SHALL transition to teal

#### Scenario: Arrow icon appears on hover
- **WHEN** the user hovers over an article card
- **THEN** a northeast arrow icon (↗) SHALL become visible in the top-right corner of the card

#### Scenario: Pointer cursor on article card
- **WHEN** the user moves the cursor over an article card
- **THEN** the cursor SHALL change to a pointer

### Requirement: Project cards have interactive hover state
When the user hovers over a project card, the card SHALL give clear visual feedback indicating it is clickable.

#### Scenario: Teal border on hover
- **WHEN** the user hovers over a project card
- **THEN** the card border SHALL transition to teal

#### Scenario: Pointer cursor on project card
- **WHEN** the user moves the cursor over a project card
- **THEN** the cursor SHALL change to a pointer

### Requirement: Homepage is fully responsive
All homepage sections SHALL adapt their layout across mobile (< 768 px), tablet (768–1024 px), and desktop (> 1024 px) viewports without horizontal overflow.

#### Scenario: No horizontal scroll on mobile
- **WHEN** the viewport width is 375 px
- **THEN** no element on the homepage SHALL cause horizontal scrolling

#### Scenario: Hero heading wraps naturally on mobile
- **WHEN** the viewport width is below 768 px
- **THEN** the hero heading "Jorge Ramos Martínez" SHALL wrap across multiple lines without truncation
