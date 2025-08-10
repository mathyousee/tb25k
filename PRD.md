# Product Requirements Document (PRD)
MN Taco Bell 25K Landing Page (tb25k)

Document version: 0.1 (Draft)
Owner: @mathyousee
Date: 2025-08-09
Status: Draft for review

References:
- Repo: mathyousee/tb25k
- Source README: The site is the official landing page for the MN Taco Bell 25K. Features: event overview/history, race format, registration details, race day schedule/location, FAQs/contact, updates/announcements.

---

## 1) Overview

Build a fast, accessible, and delightful landing site for the MN Taco Bell 25K that informs runners and fans, drives registrations, and serves as the single source of truth for event details and updates.

Primary intents:
- Communicate what the event is and why it's fun/unique.
- Clearly explain race formats ("how spicy are you feeling?").
- Drive registrations via clear CTAs.
- Provide race-day logistics (schedule and location) and FAQs.
- Publish updates/announcements leading up to race day.

Stack preference:
- JavaScript/React and Tailwind CSS (recommended framework: Next.js for SEO and performance; alternative: Vite + React Router).

Deployment preference:
- Vercel (recommended) with preview deployments per PR; alternative: GitHub Pages with static export.

---

## 2) Goals and Non-Goals

Goals (v1):
- Informational landing site covering: overview/history, race format, registration details, schedule/location, FAQs/contact, updates/announcements.
- Clear registration CTAs (to an external registration platform if used).
- Mobile-first, accessible UI with Tailwind styling.
- Good SEO discoverability (OpenGraph, Twitter cards, JSON-LD Event).
- Fast performance and good Core Web Vitals.
- Simple content update flow via Markdown/JSON in-repo.

Non-Goals (v1):
- Full CMS integration (optional later).
- User accounts, payments, or on-site registration processing.
- Multi-language support.
- Complex blog platform; a simple "updates" feed is sufficient.

---

## 3) Target Audience

- Prospective runners (primary)
- Local community members and spectators
- Sponsors and partners
- Media/press seeking official info

Personas:
- The Runner: Wants to know distance, format, how to register, cost, date/time, and what the vibe is.
- The Planner: Needs schedule, parking, start/finish location, what to bring.
- The Curious Fan: Wants a quick sense of the event and updates.

---

## 4) Success Metrics

- Registration CTA click-through rate (CTR) from the landing page.
- Time to interactive and Core Web Vitals (LCP &lt; 2.5s, CLS &lt; 0.1, INP &lt; 200ms).
- Bounce rate and average time on page.
- Organic search impressions/clicks on branded keywords.
- Zero broken links or out-of-date event info near race day.

---

## 5) Scope and Features

Feature set (from README, clarified for v1):
1) Event Overview &amp; History
2) Race Format ("how spicy are you feeling?")
3) Registration Details (with outbound CTA)
4) Race Day Schedule &amp; Location
5) FAQs &amp; Contact
6) Updates &amp; Announcements

Recommended v1 enhancements:
- Hero with date, location, bold CTA.
- Countdown to race day.
- Social sharing and OpenGraph cards.
- Sponsor/logo section (optional).
- Email signup (optional; Formspree/Mailchimp).

Out-of-scope v1: E-commerce, interactive route maps with live data, complex CMS.

---

## 6) Information Architecture

Top-level pages/routes:
- / (Home): Overview, hero, race format highlights, key CTA, schedule snippet, location teaser, updates preview, FAQ teaser, sponsor logos.
- /registration: Details (pricing, deadlines, refund policy, what's included) and a prominent external registration CTA. If registration is off-site, this page summarizes and links out.
- /schedule: Full race day schedule, callouts for packet pickup, wave times.
- /location: Venue address, parking info, Google Map embed, transit/bike details.
- /faq: Expandable FAQs and contact info.
- /updates: Announcements list and per-post pages (optional; or list-only in v1).
- /contact: Simple contact method (form-to-email or mailto:) + social links.

Global:
- Header: Logo/name, nav, registration CTA.
- Footer: Contact/social, sponsors (optional), legal, last updated.

---

## 7) Content Requirements (by page)

Home
- Event name, date, city/state.
- Short pitch ("celebrate Taco Bell, fitness, camaraderie…").
- Registration CTA ("Register Now").
- Race format summary and link to details.
- Countdown to race day (TBD date).
- Schedule (top 2-3 items) + link to /schedule.
- Location teaser + link to /location.
- Latest 3 updates + link to /updates.
- Sponsor/logo grid (optional).
- Accessibility note (e.g., strollers, pets, etc. if applicable).

Registration
- Registration platform link (TBD).
- Pricing tiers/deadlines, included perks (TBD).
- Refund/deferral policy (TBD).
- Waivers/age restrictions (TBD).
- Group/team options (TBD).
- CTA buttons.

Schedule
- Date (TBD).
- Packet pickup times/locations.
- Start time(s), wave info.
- Post-race festivities details.
- ICS download for key times (optional).

Location
- Venue name/address (TBD).
- Map embed.
- Parking and road closure info (TBD).
- Transit/bike routes (optional).
- Accessibility and facilities (restrooms, water, bag drop).

FAQ
- 12–20 common questions with concise answers.
- Expand/collapse interaction.
- Contact link.

Updates
- List view: title, date, excerpt.
- Detail view (optional v2): full post.
- Posts authored via Markdown in-repo.

Contact
- Contact form (Formspree or similar) or mailto: link.
- Social links.

---

## 8) Functional Requirements and Acceptance Criteria

FR-1 Hero + CTA
- Displays event name, date, location, primary CTA.
- Acceptance: On mobile and desktop, CTA visible without scrolling; date and location are readable; OG tags populate correctly for social.

FR-2 Countdown
- Countdown to race day shows days/hours/minutes; gracefully deactivates after race day (shows "Race day!").
- Acceptance: Accurate to within 1 minute; no layout shift.

FR-3 Race Format ("Spice Levels")
- Interactive element (cards/tabs/slider) explaining formats (e.g., Mild/Hot/Diablo); each format shows different taco bell-based nutrition, "who it's for," fun copy.
- Acceptance: Keyboard and screen reader accessible; users can switch formats; deep linkable state (hash or query) preferred.

FR-4 Registration Flow
- Prominent CTA buttons throughout; outbound link tracked for analytics; UTMs appended if configured.
- Acceptance: Clicking CTA triggers analytics event; link target opens in new tab with rel attributes; link is easily updateable via config.

FR-5 Schedule
- Chronological list of key times; ICS export for "Race Start" (optional).
- Acceptance: Times respect local timezone; readable on mobile; ICS downloads if enabled.

FR-6 Location
- Address with map embed; "Get Directions" links (Google/Apple).
- Acceptance: Map lazy-loads to avoid layout shifts; address is copyable; directions links work.

FR-7 FAQ
- Accordion pattern with semantic markup.
- Acceptance: Accordions toggle via keyboard; ARIA attributes set; deep-linkable question IDs (optional).

FR-8 Updates
- List of update entries (title, date, excerpt) sourced from static Markdown/JSON.
- Acceptance: Sorted by date desc; shows publish date; clicking item goes to detail (optional) or expands inline.

FR-9 Contact
- Form posts to Formspree (or mailto:) with spam protection (honeypot).
- Acceptance: Validation inline; success and error states accessible; form submission tracked.

FR-10 Accessibility
- WCAG 2.1 AA: color contrast, focus states, semantic landmarks.
- Acceptance: Axe-core checks pass with zero critical issues; keyboard-only navigation covers all interactive elements.

FR-11 SEO
- Page titles, meta descriptions, canonical, OG/Twitter cards.
- Event schema (JSON-LD) on Home page.
- Acceptance: Structured data validated by Rich Results Test; lighthouse SEO ≥ 95.

FR-12 Performance
- Image optimization (next/image or responsive srcsets), code splitting, prefetching.
- Acceptance: LCP &lt; 2.5s on Fast 3G for Home; CLS &lt; 0.1; INP &lt; 200ms; lighthouse Performance ≥ 90.

FR-13 Analytics
- Simple pageview + event tracking (e.g., Plausible, GA4).
- Acceptance: Events fired on CTA clicks; UTM propagation assessed.

FR-14 Content Update Flow
- Content in /content as Markdown/JSON with clear structure; PRs trigger previews.
- Acceptance: Non-technical updates require only editing files and merging PR; no rebuild errors.

---

## 9) UX/UI and Visual Design

Design principles:
- Bold, fun, energetic—celebration of running + tacos.
- Clear hierarchy and scannability.
- Strong CTAs.

Tailwind tokens (initial):
- Colors: brand-primary, brand-secondary, accent, success, warning; neutrals (zinc/stone).
- Typography: Headings: display/bold; Body: readable; font-stack system or custom (TBD).
- Spacing scale: Tailwind defaults.
- Radius: md/lg for cards and buttons.
- Shadows: subtle for elevation.
- Breakpoints: sm, md, lg, xl (Tailwind defaults).

Components (React + Tailwind):
- Layout: Header (sticky), Footer.
- Nav: Mobile drawer with CTA.
- Hero: title, date/location, CTA, background illustration.
- Countdown: responsive timer.
- FormatSelector: cards/tabs/slider with descriptions.
- CTAButton: primary/secondary variants.
- ScheduleList: time + description rows.
- MapCard: address + embed + directions.
- FAQAccordion: accessible accordion.
- UpdateCard/List: date/title/excerpt.
- SponsorGrid (optional).
- NewsletterForm (optional).
- Alert/Notice (for timely updates).

Accessibility:
- Visible focus rings.
- ARIA roles, labels, and relationships.
- Color contrast AA.

---

## 10) Technical Approach

Framework:
- Recommended: Next.js (App Router) + Tailwind CSS for SSR/SSG and SEO.
- Alternative: Vite + React Router for fully static SPA (then prioritize prerendering and SEO meta).

Language &amp; tooling:
- JavaScript (ES2022+).
- Tailwind CSS 3.x, PostCSS, autoprefixer.
- ESLint + Prettier.
- Jest/React Testing Library for component tests.

Content model (v1):
- /content/*.md|.json for pages and updates.
  - content/home.json
  - content/registration.json
  - content/schedule.json
  - content/location.json
  - content/faq.json
  - content/updates/*.md (frontmatter: title, date, excerpt, slug)

Config:
- /config/site.json (site name, date, location, social, registrationUrl).
- /config/seo.json (defaults).

Data fetching:
- Static generation (getStaticProps/route segment equivalents) with revalidate (if needed).
- No external APIs required for v1.

Environment variables:
- NEXT_PUBLIC_ANALYTICS_ID or PLAUSIBLE_DOMAIN (if used).
- FORMSPREE_ENDPOINT (if using Formspree).

Deployment:
- Vercel with preview deployments per PR.
- Production domain (TBD) with redirects from old URLs (if any).

Monitoring:
- Vercel analytics, uptime monitor (optional).

---

## 11) SEO and Social

- Per-page meta titles/descriptions.
- Canonical URLs.
- OG/Twitter images (auto-generated template or static).
- JSON-LD Event on Home:

```json
{
  "@context": "https://schema.org",
  "@type": "SportsEvent",
  "name": "MN Taco Bell 25K",
  "startDate": "2025-XX-XXT08:00:00-05:00",
  "location": {
    "@type": "Place",
    "name": "TBD Venue",
    "address": "TBD Address, MN"
  },
  "description": "A unique running race celebrating Taco Bell, fitness, and camaraderie.",
  "eventStatus": "https://schema.org/EventScheduled",
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  "url": "https://example.com/"
}
```

Note: Replace TBDs when finalized.

---

## 12) Analytics &amp; Privacy

- Choose Plausible (privacy-friendly) or GA4.
- Track: pageviews, registration CTA clicks, contact form submissions.
- Display cookie notice only if required by chosen analytics and jurisdiction (likely not needed for Plausible).

---

## 13) Performance Budgets

- LCP resource  150KB gzipped (v1 target).
- Image formats: AVIF/WEBP preferred; lazy-load non-critical imagery.
- Fonts: system stack or limited custom subset with swap.

---

## 14) Testing

- Unit tests for critical components (Accordion accessibility, Countdown logic).
- Lighthouse CI (optional) or manual runs with targets (Perf ≥90, SEO ≥95, A11y ≥95).
- Visual QA across modern browsers + iOS Safari/Android Chrome.

---

## 15) Project Plan and Milestones

M1: Foundations (1–2 days)
- Initialize Next.js + Tailwind, base layout, routing, config scaffolding.
- Analytics stub, SEO defaults, favicon/manifest.

M2: Core Content &amp; Components (3–5 days)
- Hero, Countdown, FormatSelector, ScheduleList, MapCard, FAQAccordion.
- Content JSON/Markdown wired; Home, Registration, Schedule, Location, FAQ pages.

M3: Updates &amp; Polish (2–3 days)
- Updates list and basic post template (or list-only v1).
- OG images, JSON-LD, performance passes, a11y passes.
- Deploy to production domain.

M4: Optional Enhancements (as needed)
- SponsorGrid, NewsletterForm, ICS export, social share buttons.

---

## 16) Risks and Mitigations

- Risk: Event details (date/venue) change late.
  - Mitigation: Centralize in config; update propagates site-wide.
- Risk: Registration platform link changes.
  - Mitigation: Single config value; add redirect if needed.
- Risk: Performance regressions.
  - Mitigation: Lighthouse checks before merge; image budget.

---

## 17) Open Questions

- Final event date/time and venue address?
- Registration platform URL, pricing tiers, deadlines?
- Are there multiple race "spice" formats and what are their exact descriptions?
- Sponsor list and logo usage guidelines?
- Preferred analytics (Plausible vs GA4)?
- Contact method preference (form vs mailto:, target email)?
- Deployment domain (e.g., mntacobell25k.com) and DNS ownership?

---

## 18) Appendix A: Proposed Repo Structure (Next.js)

- app/
  - layout.tsx, globals.css
  - page.tsx (Home)
  - registration/page.tsx
  - schedule/page.tsx
  - location/page.tsx
  - faq/page.tsx
  - updates/page.tsx
  - updates/[slug]/page.tsx (optional)
- components/
  - Header.tsx, Footer.tsx, Hero.tsx, Countdown.tsx, FormatSelector.tsx, CTAButton.tsx
  - ScheduleList.tsx, MapCard.tsx, FAQAccordion.tsx, UpdateCard.tsx, SponsorGrid.tsx
- content/
  - home.json, registration.json, schedule.json, location.json, faq.json
  - updates/*.md
- config/
  - site.json, seo.json
- public/
  - images/, og-image.png
- lib/
  - content.ts, seo.ts, analytics.ts
- tests/
  - components/*.test.tsx

---

## 19) Appendix B: Tailwind Notes

- Configure theme colors: brand, accent, neutral.
- Add focus-visible styles.
- Use container and prose (typography plugin) for updates.
- Prefer utility-first with small component abstractions.

---

## 20) Acceptance and Next Steps

- Review open questions and fill TBDs.
- Approve milestones and repo structure.
- Begin M1 scaffolding and push an initial PR.


Implementation Plan
A) Initialize project and config
- Add package.json with Next.js 14, React 18, Tailwind CSS, PostCSS, autoprefixer, gray-matter, classnames; set up TypeScript config (Next will auto-generate on first build).
- Add next.config.ts, postcss.config.js, tailwind.config.ts, .gitignore.
- Configure Tailwind (content globs for app/components/content), theme with placeholder brand colors, typography plugin.

B) App Router structure and base pages
- app/layout.tsx: root layout with global metadata from config/seo.json and config/site.json, includes Tailwind globals and analytics stub.
- app/globals.css: Tailwind directives plus CSS custom properties for brand colors as needed.
- app/page.tsx: Home page rendering Hero, Countdown, summaries for schedule/location/updates/faq using content/*.
- app/registration/page.tsx, app/schedule/page.tsx, app/location/page.tsx, app/faq/page.tsx, app/updates/page.tsx, and optional app/updates/[slug]/page.tsx (basic reader from content/updates/*.md using gray-matter).

C) Components (accessible, responsive)
- Header.tsx, Footer.tsx with site name/logo and a prominent Register CTA using config.site.registrationUrl.
- Hero.tsx: event title, date/location from config/site.json, primary CTA.
- Countdown.tsx: counts down to event date/time; after date, shows "Race day!".
- FormatSelector.tsx: placeholder cards for Mild/Hot/Diablo with fun copy from content/home.json; accessible tabs.
- CTAButton.tsx variants (primary/secondary).
- ScheduleList.tsx: renders items from content/schedule.json.
- MapCard.tsx: renders address and lazy-loaded map iframe (placeholder embed link); directions links for Google/Apple.
- FAQAccordion.tsx: keyboard-accessible accordion rendering items from content/faq.json.
- UpdateCard.tsx and list rendering updates parsed from content/updates.
- SponsorGrid.tsx: optional grid from content/home.json.sponsors.

D) Content and config (placeholders, ready to edit)
- config/site.json: { name, tagline, date, time, timezone, location, cityState, registrationUrl, social }
- config/seo.json: { titleTemplate, defaultTitle, description, url, twitter, image }
- content/home.json: hero copy, spice formats (Mild/Hot/Diablo), section teasers, sponsors (empty array default).
- content/registration.json, schedule.json, location.json, faq.json: reasonable placeholder fields with TBD values.
- content/updates/sample-post.md: frontmatter { title, date, excerpt, slug } and a short body.

E) SEO, analytics, and a11y
- lib/seo.ts: helpers to compose Next.js Metadata from seo.json and page-level overrides.
- lib/analytics.tsx: inject Plausible or GA4 script based on env vars; noop if none configured.
- lib/content.ts: server-side helpers to load JSON files and parse Markdown updates during build.

F) Testing and docs
- tests/components/Countdown.test.tsx: basic countdown math and post-date behavior.
- tests/components/FAQAccordion.test.tsx: keyboard toggle and ARIA attributes.
- README.md: how to install, run dev, build, and where to edit content.

Acceptance
- `pnpm dev` or `npm run dev` starts Next locally without errors.
- All routes render with placeholder content and pass TypeScript build.
- Lighthouse (local) reasonable defaults; a11y basics (focus rings, headings).
- docs/PRD.md exists with the exact content above.

Notes
- Keep images and JS lightweight; prefer system fonts for now.
- Use Tailwind for styling; avoid heavy UI libraries.
- Make CTAs point to config.site.registrationUrl (currently empty).