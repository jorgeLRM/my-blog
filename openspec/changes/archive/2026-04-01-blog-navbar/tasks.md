## 1. Fix Navbar Icons

- [x] 1.1 Replace `Code` import — `@lucide/astro` has no brand icons; use inline GitHub SVG instead
- [x] 1.2 Render GitHub link with inline SVG path (official GitHub mark, `fill="currentColor"`)

## 2. Active Link Indicator

- [x] 2.1 Update active link classes in `Navbar.astro` to add `border-b-2 border-foreground pb-0.5` when the route matches
- [x] 2.2 Verify inactive links have no underline and correct muted color

## 3. Mobile Menu Markup

- [x] 3.1 Add hamburger button (`Menu` icon) with `flex md:hidden` (explicit base display required for Tailwind v4)
- [x] 3.2 Add close button (`X` icon) that swaps with hamburger when menu is open
- [x] 3.3 Add mobile menu drawer `<div>` below the `<nav>` bar inside `<header>`, initially hidden, containing all nav links in a vertical list
- [x] 3.4 Style mobile menu links to match the design (full-width, padded, left-border active indicator)

## 4. Mobile Menu Interactivity

- [x] 4.1 Add inline `<script>` to `Navbar.astro` that toggles the mobile menu visibility on hamburger/close button click
- [x] 4.2 Swap hamburger icon ↔ X icon when menu opens/closes and update `aria-expanded`
- [x] 4.3 Add ESC key listener to close the menu
- [x] 4.4 Add click listeners to each mobile nav link to close the menu on navigation

## 5. ThemeToggle Icon Fix

- [x] 5.1 Set both `Sun` and `Moon` icons to `hidden` by default in `ThemeToggle.astro`
- [x] 5.2 Verify the existing `applyTheme` script correctly reveals the right icon on first load without a flash

## 6. Site-wide Fixes (discovered during iteration)

- [x] 6.1 Add `<meta name="viewport" content="width=device-width, initial-scale=1" />` to `BaseLayout.astro` — was missing, causing phones to render at desktop width and never trigger mobile breakpoints
- [x] 6.2 Apply `font-sans` to `body` in `global.css` — Geist was loaded but never set as `font-family`
- [x] 6.3 Fix `--font-sans` value from `"Geist"` to `"Geist Variable"` — must match the `font-family` name registered in the `@font-face` declaration from `@fontsource-variable/geist`
- [x] 6.4 Change name hover color from `hover:text-accent` to `hover:text-teal-600` — `--accent` was a near-white gray, not the intended teal
