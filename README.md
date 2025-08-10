# MN Taco Bell 25K — Static Site

This repo serves a single-page static site hosted from the `docs/` folder for GitHub Pages. 

## What's in here

- docs/index.html — the entire site (Tailwind via CDN, accessible markup, basic SEO/OG tags)
- docs/assets/js/main.js — light enhancement (countdown, config wiring)
- docs/assets/site.json — editable event + registration config
- docs/assets/images/* — favicon and social image

## Edit content

- Update event details, venue, timezone, and registration link in `docs/assets/site.json`.
- Tweak copy or sections directly in `docs/index.html`.
- Adjust behavior or formatting in `docs/assets/js/main.js`.

## Local preview

You can open `docs/index.html` directly in a browser. For features that require fetch, use any static file server (optional):

```bash
# one-liners you can use if you prefer a server
python3 -m http.server 8080 --directory docs
# then visit http://localhost:8080
```

## Deploy (GitHub Pages)

Set the repository Pages source to the `docs/` folder. On push to `main`, Pages will serve the static files.

## License

MIT — see [LICENSE](LICENSE).
