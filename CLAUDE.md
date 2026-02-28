# Japan Trip App — CLAUDE.md

## Project overview
A personal Japan trip planning app for Simon & Monize. React + Vite SPA, deployed on Vercel via GitHub auto-deploy.

**Repo:** `lucyonthediskwithdiamonds/japan-trip`
**Stack:** React 18, React Router v6, Vite, no UI library — all styling is inline JSX styles + CSS classes in `index.css`

## Dev commands
```bash
npm run dev      # local dev server on :3000
npm run build    # production build → dist/
npm run preview  # preview the dist build
```

## Project structure
```
src/
  pages/
    Home.jsx          # landing page, city grid preview, quick links
    CitySelect.jsx    # all 9 cities grid
    CityDetail.jsx    # individual city: highlights, tips, maps links
    Food.jsx          # restaurants by city, pill nav
    Shopping.jsx      # 5-tab shopping guide (main feature)
    MapPage.jsx       # embedded map page
    Shops.jsx         # legacy, not routed — ignore
    Itinerary.jsx     # commented out in App.jsx, not active
  components/
    Navbar.jsx        # sticky nav — edit LINKS array to add/remove pages
    Footer.jsx
    CherryBlossoms.jsx  # animated falling petals (decorative)
    Navigation.jsx    # unused legacy component
  data/
    tripData.js       # ALL trip data: TRIP, CITIES, RESTAURANTS, ITINERARY, PRACTICAL
  utils/
    maps.js           # mapsUrl(placeName, city) → Google Maps search URL
  index.css           # global styles, design tokens, component classes
  App.jsx             # routes
  main.jsx
```

## Key data file: tripData.js
All content lives here. Exports:
- `TRIP` — travelers, route
- `CITIES` — 9 city objects: id, name, emoji, hotel, desc, image, color, highlights[], tips[]
- `RESTAURANTS` — keyed by city id, array of restaurant objects
- `ITINERARY` — day-by-day (not currently displayed)
- `PRACTICAL` — passes, apps, phrases, sakura spots

**No dates in the data** — dates were removed intentionally. Will be added back later when trip dates are confirmed.

## Shopping page (Shopping.jsx)
The most complex page. 5 tabs:
- **Knives** — wishlist (Bunka, Sujihiki, Honesuki) + knife shops + reference guide
- **Watches** — Seiko Presage Moonphase, Chronograph, Orient Star Skeleton + watch shops
- **Denim** — Japan Blue, Samurai, Big John, Kapital + tips
- **Vintage** — organised by city then neighbourhood (Harajuku, Shimokitazawa, Osaka, Kyoto)
- **Clothing** — NEIGHBORHOOD, CDG, Kapital, Kadoya

All data is defined at the top of Shopping.jsx as constants (not in tripData.js).

### Shopping page mini-components (defined inline in Shopping.jsx)
- `ShopCard` — standard shop card with city chip, rating, type tag, maps button
- `ShopGrid` — responsive grid wrapper for ShopCard
- `MapBtn` — pink "📍 Open in Maps" button using `mapsUrl()`
- `CityChip` — colour-coded city badge (Tokyo=pink, Osaka=orange, Kyoto=purple)
- `Stars` — gold star rating display
- `TypeTag` — pink pill label
- `SectionHdr` — section heading with emoji + subtitle
- `CitySection` — city divider heading within vintage tab

## Design system
- **Primary colour:** `#d4558f` (sakura pink)
- **Fonts:** Playfair Display (headings), Noto Sans JP (body)
- **Cards:** white bg, `border-radius: 16px`, `box-shadow: 0 2px 14px rgba(0,0,0,0.05)`, 1px border
- **Priority cards:** `borderTop: '3px solid #d4558f'`
- **Priority colours:** HIGHEST=#d4558f, HIGH=#e07b39, MEDIUM=#4a90d9
- **Body bg:** `linear-gradient(160deg, #fff0f5, #fef5f0, #f5f0ff)`
- All styling is inline in JSX — avoid adding new CSS classes unless it's a reusable pattern

## Maps utility
```js
import { mapsUrl } from '../utils/maps'
// Usage:
mapsUrl('Seisuke Knife', 'Kyoto')  // → Google Maps search URL
```
Cleans up the place name (strips emojis, prices, em-dashes) before building the URL.

## Active routes
```
/           → Home
/cities     → CitySelect
/cities/:id → CityDetail
/food       → Food
/shopping   → Shopping
/map        → MapPage
```
Itinerary route is commented out — do not re-enable without checking with Simon first.

## Client profile (shopping)
- **Knives:** Tsuchime finish, octagonal wa-handle, warm wood. Bunka 180mm is priority #1. Budget ~€600 total for 3 knives.
- **Watches:** Warm gold tones, dress pieces only, no sports watches. Up to €1k/watch.
- **Denim:** Japanese selvedge only. €250–400/pair.
- **Vintage:** High-end archive in Harajuku, Shimokitazawa for digging, Kindal Osaka is crown jewel.
- **Clothing:** NEIGHBORHOOD, CDG, Kapital, Kadoya.
- Always carry passport for ~10% tourist tax exemption.

## Deploy
- GitHub push to `main` → auto-deploys on Vercel
- Build: `npm run build` → `dist/`
