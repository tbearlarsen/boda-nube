# PLAN.md — Master Site Plan

## Status

Site not yet scoped. This file will grow as the user defines features, sections, and pages.

---

## Key Constraint

**Wedding date: 5 June 2027.** The site must be live and tested well before that date.

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
- Entry point: a language-selector landing page (language-agnostic)
- Each language gets its own full version of the site under its subdirectory

---

## Confirmed Pages

Working structure — can be adapted at any point before the section is built.

### Core

- Home — couple's names, wedding date, hero photo
- The Day — ceremony/reception schedule, venue info
- Travel & Accommodation — getting there, where to stay
- RSVP — custom form, responses stored in our own database
- FAQ — dress code, parking, children, etc.

### Secondary

- Our Story
- Gift Registry (or a note if no registry)

Not included yet: gallery (adds complexity, easy to add later), standalone contact page (FAQ note is enough).

---

## Pending Scope

The following are not yet defined. Each will be added here once confirmed with the user.

- [ ] Design direction (palette, typography, mood)
- [ ] RSVP approach (static form, third-party service, custom backend?)
- [ ] Hosting and deployment
- [ ] Domain name
- [ ] Imagery strategy (user-provided photos vs. placeholders)
- [ ] Content (story, schedule, FAQ, practical info)
- [ ] Launch timeline (how many weeks before the wedding must the site be live?)

---

## Out of Scope (until explicitly added)

Nothing confirmed out of scope yet.
