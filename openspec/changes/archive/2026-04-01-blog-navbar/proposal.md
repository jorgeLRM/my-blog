## Why

The blog already has a basic navbar skeleton, but it is missing key features visible in the design: a working mobile menu (hamburger/drawer), correct icon usage (GitHub icon instead of the Code icon placeholder), and a polished active link indicator. The navbar needs to be completed to match the intended design before the blog can be shared publicly.

## What Changes

- Add a fully functional mobile menu with hamburger toggle and slide-in/overlay drawer showing all nav links
- Replace the `Code` icon placeholder with the correct `Github` icon from `@lucide/astro`
- Add visible active-link underline or accent indicator on the current route
- Fix the ThemeToggle initial icon display so the correct icon (sun/moon) renders on first load without flash
- Ensure the navbar is keyboard-accessible (focus trap in mobile menu, ESC to close)

## Capabilities

### New Capabilities
- `mobile-menu`: Hamburger button + mobile nav drawer that opens/closes, lists all nav links vertically, and closes on link click or ESC

### Modified Capabilities
- none

## Impact

- `src/components/Navbar.astro`: Primary file changed — mobile menu markup, icon fix, active state style
- `src/components/ThemeToggle.astro`: Minor fix for initial icon visibility
- No new dependencies required (`@lucide/astro` already installed)
