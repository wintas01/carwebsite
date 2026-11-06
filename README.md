# Motiv — Car Website

Single-page car website prototype (`index.html`).

Live preview via GitHub Pages: https://wintas01.github.io/carwebsite/

## Editing
- **Your phone / WhatsApp number:** edit `OWNER` near the top of the `<script>` in `index.html`.
- **Your cars:** edit the `vehicles` list right below it. Add extra photos with `imgs:['url1','url2',...]` to fill the gallery.
- **Images:** `assets/` (brand logos in `assets/logos/`).
- **Share a car:** each car has its own link, e.g. `.../carwebsite/#car/3`.

## Admin panel (preview)
Open `admin.html` (e.g. https://wintas01.github.io/carwebsite/admin.html). Any email/password works for now.
Changes are saved in **that browser only** (localStorage) and show on the site when opened in the same browser.
To make admin changes live for every visitor, connect a database (e.g. Firebase or Supabase) — the data shape
in `assets/site-data.js` is already set up for it.
