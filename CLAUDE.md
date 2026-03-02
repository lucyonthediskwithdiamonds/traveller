# Traveller — CLAUDE.md

## Project overview
A personal multi-destination travel planning app for Simon & Monize. React + Vite SPA, deployed on Vercel via GitHub auto-deploy.

**Repo:** `lucyonthediskwithdiamonds/traveller` (rename from `japan-trip` via GitHub Settings if not done yet)
**Stack:** React 18, React Router v6, Vite, no UI library — all styling is inline JSX styles + CSS classes in `index.css`

## Dev commands
```bash
npm run dev      # local dev server
npm run build    # production build → dist/
npm run preview  # preview the dist build
```

## Project structure
```
src/
  pages/
    TripBuilder.jsx   # step 1–3 wizard: pick country → cities → interests
    Home.jsx          # guide landing: city grid, highlights, quick links
    CitySelect.jsx    # all cities for active trip
    CityDetail.jsx    # individual city: highlights, tips, maps links
    Food.jsx          # restaurants by city, pill nav
    Shopping.jsx      # tabbed shopping guide (trip-aware)
    MapPage.jsx       # embedded map page
    Phrases.jsx       # language phrase guide
  components/
    Navbar.jsx        # sticky nav — edit LINKS array to add/remove pages
    Footer.jsx
    CherryBlossoms.jsx  # animated falling petals — only renders when TRIP_META.cherryBlossoms = true
  context/
    TripPlanContext.jsx  # global plan state (country, cities, interests) + tripData + CSS vars
  hooks/
    useTripData.js    # shortcut: useContext(TripPlanContext).tripData
  trips/
    registry.js       # imports all trip modules, exports TRIP_REGISTRY + DEFAULT_TRIP_ID
    japan/            # index.js (TRIP_META) + data.js (CITIES, RESTAURANTS, PRACTICAL) + shopping.js
    france/           # same structure
    greece/           # index.js + data.js (no shopping.js)
    italy/            # index.js + data.js + shopping.js
    portugal/         # index.js + data.js + shopping.js
    spain/            # index.js + data.js + shopping.js
    thailand/         # index.js + data.js (no shopping.js)
    turkey/           # index.js + data.js (no shopping.js)
    morocco/          # index.js + data.js (no shopping.js)
    usa/              # index.js + data.js (no shopping.js)
  utils/
    maps.js           # mapsUrl(placeName, city) → Google Maps search URL
  index.css           # global styles, design tokens, component classes
  App.jsx             # routes + AppShell (reads active TRIP_META for cherry blossoms)
  main.jsx
```

## Trip registry system
All trip content lives under `src/trips/<country>/`. To add a new destination:
1. Create `src/trips/<id>/index.js` exporting `TRIP_META` + `export * from './data'`
2. Create `src/trips/<id>/data.js` exporting `CITIES`, `RESTAURANTS`, `PRACTICAL`, `ITINERARY`
3. Optionally create `shopping.js` exporting `SHOPPING_TABS`, `CITY_STYLE`
4. Register in `src/trips/registry.js`

### TRIP_META shape (index.js)
```js
export const TRIP_META = {
  id: 'france',
  name: 'France',
  emoji: '🗼',
  flag: '🇫🇷',
  language: 'French',
  currency: 'EUR',
  currencySymbol: '€',
  navLogo: '🗼 France',
  cherryBlossoms: false,   // set true only for Japan
  citiesTagline: '...',    // shown on trip selector
  theme: { primary: '#6c3483', gradient: 'linear-gradient(...)' },
  highlights: [{ emoji, title, desc }],
  decorations: ['🗼', '🥐', '🍷'],  // hero background decorations
}
```

### CITIES shape (data.js)
```js
export const CITIES = [{
  id: 'paris',
  name: 'Paris',
  emoji: '🗼',
  hotel: 'Le Marais or Saint-Germain-des-Prés',
  desc: 'Short tagline.',
  image: 'https://images.unsplash.com/...',
  color: '#6c3483',
  highlights: ['...'],
  tips: ['...'],
}]
```

## Shopping page (Shopping.jsx)
Trip-aware tabbed shopping guide. Each trip can define its own tabs via `SHOPPING_TABS` in `shopping.js`. Tabs not defined for a trip are not shown.

### Shopping page mini-components (defined inline in Shopping.jsx)
- `ShopCard` — shop card with city chip, rating, type tag, maps button
- `ShopGrid` — responsive grid wrapper for ShopCard
- `MapBtn` — "📍 Open in Maps" button using `mapsUrl()`
- `CityChip` — colour-coded city badge driven by `CITY_STYLE` from the trip's shopping.js
- `Stars` — gold star rating display
- `TypeTag` — pill label
- `SectionHdr` — section heading with emoji + subtitle
- `CitySection` — city divider heading within a tab

## Plan state (TripPlanContext)
```js
plan = {
  built: false,       // true once user completes TripBuilder
  country: 'japan',   // trip registry key
  cities: [],         // array of city ids
  interests: [],      // array of interest ids from UNIVERSAL_INTERESTS
}
```
Plan persists to `localStorage`. CSS custom properties (`--color-primary`, `--color-primary-rgb`, `--gradient-bg`) are set from `TRIP_META.theme` whenever `plan.country` changes.

## Design system
- **Primary colour:** driven by `TRIP_META.theme.primary` via CSS custom property `--color-primary`
- **Fonts:** Playfair Display (headings), Noto Sans JP (body)
- **Cards:** white bg, `border-radius: 16px`, `box-shadow: 0 2px 14px rgba(0,0,0,0.05)`, 1px border
- **Priority cards:** `borderTop: '3px solid var(--color-primary)'`
- **Body bg:** driven by `TRIP_META.theme.gradient` via CSS custom property `--gradient-bg`
- All styling is inline in JSX — avoid adding new CSS classes unless it's a reusable pattern

## Maps utility
```js
import { mapsUrl } from '../utils/maps'
mapsUrl('Seisuke Knife', 'Kyoto')  // → Google Maps search URL
```
Cleans up the place name (strips emojis, prices, em-dashes) before building the URL.

## Active routes
```
/           → TripBuilder (step 1–3 wizard)
/plan       → TripBuilder (alias)
/guide      → Home (personalised guide)
/cities     → CitySelect
/cities/:id → CityDetail
/food       → Food
/shopping   → Shopping
/phrases    → Phrases
/map        → MapPage
```

## Client profile (Japan shopping — kept for reference)
- **Knives:** Tsuchime finish, octagonal wa-handle, warm wood. Bunka 180mm priority #1. Budget ~€600 total.
- **Watches:** Warm gold tones, dress only, no sports. Up to €1k/watch.
- **Denim:** Japanese selvedge only. €250–400/pair.
- **Vintage:** High-end archive Harajuku, Shimokitazawa for digging, Kindal Osaka is crown jewel.
- **Clothing:** NEIGHBORHOOD, CDG, Kapital, Kadoya.
- Always carry passport for ~10% tourist tax exemption.

## Deploy
- GitHub push to `main` → auto-deploys on Vercel
- Build: `npm run build` → `dist/`
