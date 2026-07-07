# DEFENDoor — Retractable Security Gates Landing Page

A fast, mobile-first, single-page lead-generation landing page for a Google Ads
campaign. Plain **HTML, CSS and JavaScript** — no build step, no frameworks —
ready to host on **GitHub Pages**.

## Files

```
index.html          Main landing page (all content inline for fast LCP + SEO)
thank-you.html      Post-conversion page (fires the Google Ads conversion)
css/styles.css      All styles (design-system tokens inlined)
js/main.js          Interactions: dynamic headline, carousel, FAQ, form, tracking
assets/             Images (brand, hero, features, models, gallery, client logos)
robots.txt          Search-engine directives (thank-you page excluded)
sitemap.xml         Sitemap
.nojekyll           Tells GitHub Pages to serve all files as-is
```

## Deploy to GitHub Pages

1. Create a repository and push these files to the `main` branch (repo root).
2. In **Settings → Pages**, set **Source = Deploy from a branch**, branch `main`, folder `/ (root)`.
3. Your site goes live at `https://<username>.github.io/<repo>/` (or your custom domain).
4. If you use a custom domain (e.g. defendoor.co.za), add a `CNAME` file containing the domain and configure DNS.

## Before you go live — required config

- **Google Ads conversion label:** open `thank-you.html` and replace
  `AW-621331527/REPLACE_WITH_CONVERSION_LABEL` with your real conversion label
  from Google Ads (Tools → Conversions → your action → tag setup). Without the
  label the conversion will NOT record.
- **Lead delivery:** the form currently forwards the visitor straight to
  `thank-you.html` without storing the lead anywhere (static hosting has no
  backend). To actually receive the submissions, set `ACTION_ENDPOINT` at the top
  of `js/main.js` to a form handler such as Formspree, Getform, or a Google Apps
  Script web app. The lead then posts there before the thank-you redirect.

## Google Ads: dynamic headline

The H1 and page title adapt to the incoming keyword. Add a keyword parameter to
your Final URL / tracking template, e.g.:

```
https://defendoor.co.za/?keyword={keyword}
```

`{keyword}` is a Google Ads ValueTrack parameter. Matching keywords map to the
approved ad headlines (see `HEADLINES` / `KEYWORD_MAP` in `js/main.js`); anything
unmatched falls back to **"Retractable Security Gates"**. You can also force a
specific headline with `?hl=Engineered%20Strength`.

## Tracking IDs already wired in

- Google Analytics 4: `G-QK63YHFB7R`
- Google Tag Manager: `GTM-MFJC53H`
- Google Ads: `AW-621331527` (add the conversion label — see above)

## Performance notes

- Content is server-rendered HTML (no client-side rendering) for a strong LCP.
- Hero image is preloaded; all below-the-fold images use `loading="lazy"`.
- Fonts load with `display=swap` and `preconnect`.
- Respects `prefers-reduced-motion`.
