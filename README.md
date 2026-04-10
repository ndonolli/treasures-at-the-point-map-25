# Treasures at the Point 2026 Map

Static Leaflet map for browsing Treasures at the Point 2026 listings in Algiers Point.

## Features

- Category filter built from a single listings dataset
- Marker popups with categories and sale notes
- Coordinates baked into the project so the map loads without runtime geocoding
- Explicit unresolved-address list for listings that still need manual coordinates

## Run

Install dependencies and start the static server:

```bash
npm install
npm start
```

Then open the local URL served by `servor`.

## Notes

- Stored coordinates live directly in [script.js](c:/Users/ndono/Repos/treasures-at-the-point-map-25/script.js).
- Current unresolved listings are `224 Sequin`, `501 Sequin`, `614 Sequin`, and `636 Sequin`.