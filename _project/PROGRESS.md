# PROGRESS.md — Running Checklist

## Current Status

Live at [wedding.sudheim.eu](https://wedding.sudheim.eu). Core pages built; placeholder pages remaining.

---

## Done

- [x] CLAUDE.md created and approved
- [x] PLAN.md created and populated
- [x] PROGRESS.md created
- [x] DECISIONS.md created
- [x] QUESTIONS.md created
- [x] All blocking questions resolved or deferred
- [x] Tech stack confirmed: Astro
- [x] Site pages confirmed (working structure)
- [x] RSVP approach confirmed: custom form, no third-party services
- [x] Astro project scaffolded — i18n config, base layout, translation strings
- [x] Deployed to GitHub Pages via GitHub Actions (auto-deploys on every push to main)
- [x] Live at [wedding.sudheim.eu](https://wedding.sudheim.eu) — custom domain, DNS verified, HTTPS enforced
- [x] Monogram SVG favicon
- [x] Homepage — hero photo, countdown to 13:00 on 5 June 2027, Save the Date button
- [x] Save the Date .ics download (Finca Prados Riveros, correct address, UTC times)
- [x] Language switcher — animated flag dropdown, fixed bottom-left, custom grayscale SVG flags
- [x] Nav restructured — Home, Itinerary, Venue, Accommodation, Traditions, RSVP (all 3 languages)
- [x] Venue page — description, address, Google Maps embed (EN/ES/DA)
- [x] Itinerary page — alternating center-spine timeline, clickable nodes, detail panel (EN/ES/DA)
- [x] Placeholder pages created — Accommodation, Traditions (EN/ES/DA)
- [x] RSVP placeholder page retained (EN/ES/DA)
- [x] Old pages removed — Our Story, FAQ, Gift Registry, The Day, Travel

## In Progress

Nothing.

## Next

- **Accommodation page** — hotels near Rascafría, transport info, practical details
- **Traditions page** — Danish/Spanish wedding traditions explained for each audience
- **RSVP page** — custom form (needs backend decision: Astro server endpoints vs. external)
- **Design** — colour palette, typography, mood board (to decide with fiancée; neutral style in place for now)
- **Real content** — swap placeholder itinerary events for confirmed schedule once available

---

## Session Log

### 2026-06-03 (session 1)

- Established working rules: plan-first, confirm before building
- Created CLAUDE.md, PLAN.md, PROGRESS.md, DECISIONS.md, QUESTIONS.md
- Confirmed: site will be in EN + ES + DA with a language-selector landing page
- Audited project scaffolding; fixed documentation gaps
- Answered all scoping questions: tech stack (Astro), pages, RSVP approach, guest count, timeline
- Design direction deferred — to decide with fiancée; build with neutral placeholder design first

### 2026-06-03 (session 2)

- Added monogram SVG favicon
- Built homepages (EN/ES/DA): hero photo, animated countdown, Save the Date button
- Created public/save-the-date.ics with correct venue address and UTC times
- Replaced emoji flags with custom grayscale SVG flags (GB, ES, DK, 4:3 aspect)
- Redesigned language switcher: animated dropdown, fixed bottom-left corner
- Restructured nav: removed old pages, added Itinerary, Venue, Accommodation, Traditions
- Built Venue page (EN/ES/DA): venue description, address, Google Maps embed
- Built Itinerary page (EN/ES/DA): alternating center-spine timeline with interactive detail panel
- Created placeholder pages for Accommodation and Traditions (EN/ES/DA)
- Fixed .claude/settings.json permissions (git add, bare git push/pull)
