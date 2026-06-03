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
