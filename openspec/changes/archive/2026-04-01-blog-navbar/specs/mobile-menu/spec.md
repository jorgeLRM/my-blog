## ADDED Requirements

### Requirement: Mobile hamburger toggle
On viewports narrower than `md` (< 768 px), the navbar SHALL hide the desktop link list and show a hamburger menu button (☰) alongside the theme toggle and GitHub icon.

#### Scenario: Desktop links hidden on small screens
- **WHEN** the viewport width is below 768 px
- **THEN** the horizontal nav link list SHALL NOT be visible

#### Scenario: Hamburger button visible on small screens
- **WHEN** the viewport width is below 768 px
- **THEN** a hamburger icon button SHALL be visible in the header

### Requirement: Mobile menu opens on hamburger click
The mobile menu SHALL expand to show all navigation links in a vertical list when the user clicks the hamburger button.

#### Scenario: Menu opens
- **WHEN** the user clicks the hamburger button while the menu is closed
- **THEN** the mobile menu drawer SHALL become visible with all nav links listed vertically
- **THEN** the hamburger icon SHALL change to a close (✕) icon

### Requirement: Mobile menu closes
The mobile menu SHALL close via multiple interaction methods.

#### Scenario: Close via X button
- **WHEN** the user clicks the close (✕) button while the menu is open
- **THEN** the mobile menu SHALL hide and the hamburger icon SHALL be restored

#### Scenario: Close via ESC key
- **WHEN** the user presses the ESC key while the menu is open
- **THEN** the mobile menu SHALL close

#### Scenario: Close on nav link click
- **WHEN** the user clicks any nav link inside the open mobile menu
- **THEN** the mobile menu SHALL close before navigation

### Requirement: Mobile menu accessibility
The hamburger button SHALL expose its state to assistive technologies.

#### Scenario: ARIA expanded state
- **WHEN** the mobile menu is open
- **THEN** the hamburger button SHALL have `aria-expanded="true"`
- **WHEN** the mobile menu is closed
- **THEN** the hamburger button SHALL have `aria-expanded="false"`

### Requirement: GitHub icon correctness
The navbar SHALL display the GitHub mark for the GitHub profile link. Since `@lucide/astro` does not include brand icons, the icon SHALL be implemented as an inline SVG.

#### Scenario: Correct icon rendered
- **WHEN** the navbar is rendered
- **THEN** the GitHub link SHALL display an inline SVG using the official GitHub mark path

### Requirement: Active link visual indicator
The currently active route link SHALL be visually distinguished from inactive links with an underline accent.

#### Scenario: Active route link has underline
- **WHEN** the current page URL matches a nav link's href
- **THEN** that link SHALL display a bottom border accent (`border-b-2`) in the foreground color

#### Scenario: Inactive links have no underline
- **WHEN** a nav link's href does not match the current page URL
- **THEN** that link SHALL NOT display the bottom border accent

### Requirement: Site name hover color
The site name link ("Jorge Ramos Martínez") SHALL turn teal on hover.

#### Scenario: Name hover state
- **WHEN** the user hovers over the site name
- **THEN** the text color SHALL change to teal (`text-teal-600`)

### Requirement: Responsive breakpoints work on real devices
The page SHALL include a viewport meta tag so mobile browsers render at actual screen width.

#### Scenario: Viewport meta present
- **WHEN** the page HTML is rendered
- **THEN** the `<head>` SHALL contain `<meta name="viewport" content="width=device-width, initial-scale=1" />`

### Requirement: Geist font applied globally
The Geist Variable font SHALL be applied to the entire page body.

#### Scenario: Font loaded and applied
- **WHEN** the page renders
- **THEN** `body` SHALL have `font-family` set to `"Geist Variable"` via the `font-sans` utility
- **THEN** the `--font-sans` CSS variable SHALL reference `"Geist Variable"` matching the registered `@font-face` name
