# DECISIONS.md — Decision Log

Append-only. Every significant technical or design decision is recorded here with a one-line rationale.

---

| # | Date | Decision | Rationale | Notes |
| -- | ---- | -------- | --------- | ----- |
| 1 | 2026-06-03 | Site languages: English, Spanish, Danish | Matches the bilingual/bicultural guest list and the couple's identity as a Danish-Spanish couple | |
| 2 | 2026-06-03 | Entry point is a language-selector landing page | User's explicit direction — guests choose their language before entering the site | |
| 3 | 2026-06-03 | Tech stack: Astro | Best fit for a fast, multilingual static site with a custom RSVP backend; free to host anywhere | |
| 4 | 2026-06-03 | Language URL structure: subdirectories (`/en/`, `/es/`, `/da/`) | Simplest approach; native support in Astro's i18n system | |
| 5 | 2026-06-03 | RSVP: custom form, no third-party form services | User's explicit direction — guest data stays in our own system | |
| 6 | 2026-06-03 | Hosting: GitHub Pages with GitHub Actions CI/CD | Free, reliable, auto-deploys on every push to main | |
| 7 | 2026-06-03 | Custom domain: wedding.sudheim.eu (subdomain of sudheim.eu via INWX) | User owns the domain; subdomain keeps it clean and changeable | HTTPS enforced |
| 8 | 2026-06-03 | Favicon: monogram SVG | User provided a custom monogram; SVG is the best format for favicons (crisp at all sizes) | |
| 9 | 2026-06-03 | Design aesthetic: warm cream background (#faf9f7), Georgia serif, minimal and elegant | Neutral but tasteful starting point while final design direction is decided with fiancée | |
| 10 | 2026-06-03 | Language switcher: animated flag dropdown, fixed bottom-left, custom grayscale SVG flags | Keeps nav clean; flags are internationally recognisable; bottom-left avoids clutter in the header | |
| 11 | 2026-06-03 | Page structure revised: Home, Itinerary, Venue, Accommodation, Traditions, RSVP | Removed Our Story, FAQ, Gift Registry — not needed; added Traditions for bicultural guest education | |
| 12 | 2026-06-03 | Save the Date: downloadable .ics file on the homepage | Simple, universal — works with all calendar apps; no third-party service needed | |
| 13 | 2026-06-03 | Itinerary layout: alternating center-spine timeline with clickable detail panel | Matches reference designs; keeps the page clean while allowing richer per-event descriptions | Placeholder events for now |
| 14 | 2026-06-03 | Venue page: Google Maps embed (no API key) | Guests can tap through to get directions on their phones; no API key or billing required for a basic embed | |
