## MN Taco Bell 25K — Static Site

Single-page static site, served from the `docs/` folder (ideal for GitHub Pages). Uses Tailwind via CDN and a couple of lightweight, JSON‑driven sections.

### Directory layout
- `docs/index.html` — main page (SEO tags, accessible markup, Tailwind CDN)
- `docs/updates.json` — content for the “Updates & announcements” section
- `docs/faq.json` — content for the “FAQs” section
- `docs/assets/images/` — images (hero, favicon, social, etc.)
- `docs/assets/js/main.js` — optional helper script (not required by the current page)
- `docs/assets/site.json` — optional config used by `main.js` if you wire it in

### Dynamic content (JSON)
- Updates are loaded at runtime from `docs/updates.json`.
	- Item fields: `{ "date": "YYYY-MM-DD", "title": "…", "body": "…" }`
- FAQs are loaded at runtime from `docs/faq.json`.
	- Item fields: `{ "question": "…", "answer": "…" }`

Edits to these JSON files show up on refresh—no build step needed.

### Local preview
Some features fetch JSON, so use a simple static server:

```bash
cd /workspaces/tb25k
python3 -m http.server 8000 --directory docs --bind 0.0.0.0
```

Open http://localhost:8000

Stop the server with Ctrl+C. If 8000 is taken, try another port (e.g., 8080).

### Customization tips
- Hero image: `docs/assets/images/tb25-hero.png` (referenced in `index.html`)
- Colors/spacing/typography: Tailwind utility classes in `index.html`
- Meta tags (title/description/OG/Twitter): edit the `<head>` in `index.html`

### Deploy (GitHub Pages)
In repository settings, set Pages “Source” to the `/docs` folder. Push to `main` and Pages will serve the site.

### License
MIT — see `LICENSE`.
