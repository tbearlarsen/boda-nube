# PLAN.md — Master Site Plan

## Status

Site is live and actively being built. Core structure and homepage done. Content pages in progress.

---

## Key Constraint

**Wedding date: 5 June 2027.** Site must be complete and tested well before that date.

---

## Confirmed Scope

### Tech Stack

- Framework: Astro
- Language routing: subdirectory approach — `/en/`, `/es/`, `/da/`
- RSVP: custom form with server-side handling (Astro supports this natively)
- Hosting: GitHub Pages, auto-deployed via GitHub Actions on push to `main`
- Domain: [wedding.sudheim.eu](https://wedding.sudheim.eu) — HTTPS enforced

### Language Structure

- Three languages: English (EN), Spanish (ES), Danish (DA)
- Entry point: redirects to `/en/` by default (language-selector removed in favour of flag switcher)
- Language switcher: fixed bottom-left animated flag dropdown on every page

---

## Confirmed Pages

| Page | Status | Notes |
| --- | --- | --- |
| Home | ✅ Done | Hero photo, countdown, Save the Date button |
| Itinerary | ✅ Done | Alternating timeline, placeholder events — real schedule TBD |
| Venue | ✅ Done | Description, address, Google Maps embed |
| Accommodation | 🔲 Placeholder | Hotels near Rascafría, transport/shuttle info |
| Traditions | 🔲 Placeholder | Danish + Spanish wedding traditions explained to each audience |
| RSVP | 🔲 Placeholder | Custom form — backend approach not yet decided |

---

## Pending Decisions

- [ ] RSVP backend — Astro server endpoints (requires non-static hosting) vs. a lightweight external service
- [ ] Design direction — colour palette, typography, final mood (to decide with fiancée; neutral cream/serif in use now)
- [ ] Accommodation content — hotel list, shuttle strategy (depends on transport planning in wedding repo)
- [ ] Real itinerary — placeholder events to be replaced once schedule is confirmed
- [ ] Gallery — not in scope yet; easy to add later

---

## Out of Scope (until explicitly added)

- Our Story page
- Gift Registry page
- FAQ page (info will live inside relevant pages instead)
- Gallery
