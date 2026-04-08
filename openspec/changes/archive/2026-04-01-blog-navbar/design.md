## Context

The blog is an Astro static site using Tailwind CSS and `@lucide/astro` for icons. A `Navbar.astro` component and `ThemeToggle.astro` already exist with desktop navigation working. The mobile experience is incomplete: no hamburger button, no drawer/menu, and the GitHub icon is incorrectly set to `Code`. Design references (screenshots) show a clean horizontal navbar on desktop and a compact header with an icon row + hamburger on mobile, opening a full-width vertical link list.

## Goals / Non-Goals

**Goals:**
- Add a working mobile hamburger menu that opens/closes a full-width nav drawer
- Fix GitHub icon to use `Github` from `@lucide/astro`
- Add active-route underline accent on nav links
- Ensure ESC key and clicking a link both close the mobile menu
- Fix ThemeToggle to show the correct icon on initial render without a flash

**Non-Goals:**
- Animations beyond a simple fade/slide (keep it simple)
- Search functionality
- Any changes to page content or routing
- CSS framework changes (stay on Tailwind)

## Decisions

**Mobile menu: inline drawer vs. off-canvas sheet**
→ Use a full-width block that appears below the header bar (dropdown style), matching the screenshots. An off-canvas sheet adds complexity and the design clearly shows a vertical list within the same viewport width. Implemented with a `hidden`/`block` toggle on a `<div>` inside the `<header>`.

**State management: Alpine.js vs. vanilla script**
→ Use a plain `<script>` tag (vanilla JS) consistent with how `ThemeToggle.astro` is already written. No new dependencies needed. The script will toggle a CSS class on the menu container and swap hamburger/X icons.

**Active link indicator**
→ Add a bottom border (`border-b-2 border-foreground`) on the active link instead of just a color change, matching the cleaner visual in the screenshots.

**ThemeToggle icon flash fix**
→ Move the `applyTheme` call to run from a `<script>` in `<head>` (inline in `BaseLayout.astro`) or ensure the existing script runs before paint. Since ThemeToggle already runs in the component, switching to `class="hidden"` default for both and letting JS show the correct one is fine — the issue is the Sun showing for a frame in dark mode. Fix: set both icons `hidden` by default, then JS reveals the correct one immediately.

## Risks / Trade-offs

- [Hydration flash on ThemeToggle] The current implementation shows the wrong icon for one render frame in dark mode. → Mitigation: ensure the script runs synchronously (no `defer`/`async`) or add the theme class in `<head>` before the component renders.
- [Mobile menu accessibility] Without a focus trap, keyboard users can tab outside the open menu. → Mitigation: add `aria-expanded` and `aria-label` attributes; full focus trap is out of scope but ESC close covers most cases.
