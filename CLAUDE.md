# Traveller — CLAUDE.md

## Project overview
A personal multi-destination travel planning app for Simon & Monize. React + Vite SPA, deployed on Vercel via GitHub auto-deploy.

**Repo:** `lucyonthediskwithdiamonds/traveller`
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
    CityDetail.jsx    # individual city: highlights, tips, maps links
    Food.jsx          # restaurants by city + category pill nav
    Shopping.jsx      # tabbed shopping guide (trip-aware, interest-filtered)
    Phrases.jsx       # language phrase guide with copy-to-clipboard
  components/
    Navbar.jsx        # sticky nav — edit LINKS array to add/remove pages
    Footer.jsx        # shows trip name and travelers
    CherryBlossoms.jsx  # animated falling petals — only renders when TRIP_META.cherryBlossoms = true
  context/
    TripPlanContext.jsx  # global plan state + tripData + CSS vars; exports useTripPlan()
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

## Active routes
```
/              → TripBuilder (step 1–3 wizard)
/plan          → TripBuilder (alias)
/guide         → Home (personalised guide)               [requires plan]
/cities/:city  → CityDetail (individual city page)       [requires plan]
/food          → Food                                    [requires plan]
/shopping      → Shopping                                [requires plan]
/phrases       → Phrases                                 [requires plan]
```

Routes marked `[requires plan]` redirect to `/` if `plan.built` is false (`RequiresPlan` wrapper in App.jsx).

Note: there is no standalone `/cities` list route — the city grid lives on `/guide` (Home).

## Trip registry system
All trip content lives under `src/trips/<country>/`. To add a new destination:
1. Create `src/trips/<id>/index.js` exporting `TRIP_META` + `export * from './data'`
2. Create `src/trips/<id>/data.js` exporting `CITIES`, `RESTAURANTS`, `PRACTICAL`
3. Optionally create `shopping.js` exporting `SHOPPING_TABS`, `CITY_STYLE`
4. Register in `src/trips/registry.js` — import both core and (if exists) shopping modules, spread both into the registry entry

**Trips with shopping.js:** japan, france, italy, portugal, spain
**Trips without shopping.js:** greece, thailand, turkey, morocco, usa

`DEFAULT_TRIP_ID = 'japan'` — used as fallback when no plan is built yet.

### TRIP_META shape (index.js)
```js
export const TRIP_META = {
  id: 'france',
  name: 'France',
  emoji: '🗼',
  flag: '🇫🇷',
  language: 'French',
  languageEmoji: '🇫🇷',    // used in Phrases page header
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

### RESTAURANTS shape (data.js)
```js
export const RESTAURANTS = {
  paris: [{
    name: 'Le Comptoir',
    type: 'French Bistro',    // used for category inference in Food.jsx
    price: '€€',
    area: 'Saint-Germain',    // optional
    rating: '3.5',            // optional — supports "Bib Gourmand" string too
    notes: 'Book ahead.',     // optional
  }]
}
```

### PRACTICAL shape (data.js)
```js
export const PRACTICAL = {
  phrasesByCategory: {
    'Basics': [
      { phrase: 'Merci', romaji: 'Thank you', english: 'Thank you' }
    ],
  }
}
```
Used by `Phrases.jsx` — `romaji` is the transliteration column, `english` is meaning. For non-romanised languages (French, etc.) `romaji` can hold the phonetic pronunciation.

## Plan state (TripPlanContext)
```js
plan = {
  built: false,       // true once user completes TripBuilder
  country: 'japan',   // trip registry key (null before first build)
  cities: [],         // array of city ids
  interests: [],      // array of interest ids from UNIVERSAL_INTERESTS + shopping tab ids
  travelers: '',      // free-text, e.g. 'Simon & Monize'
}
```
Plan persists to `localStorage` under key `'tripPlan'`. CSS custom properties (`--color-primary`, `--color-primary-rgb`, `--gradient-bg`) are set from `TRIP_META.theme` whenever the active country changes.

**Context API:**
```js
import { useTripPlan } from '../context/TripPlanContext'
const { plan, savePlan, resetPlan, tripData } = useTripPlan()
// savePlan(updates) — merges updates into plan
// resetPlan()       — resets to defaultPlan
// tripData          — TRIP_REGISTRY[activeCountry] (all exports from that trip module)
```

**Shortcut hook** (use when you only need data, not plan management):
```js
import { useTripData } from '../hooks/useTripData'
const { TRIP_META, CITIES, RESTAURANTS, PRACTICAL, SHOPPING_TABS, CITY_STYLE } = useTripData()
```

## Food page (Food.jsx)
Two pill navs: city selector (filtered by `plan.cities`) + category filter.

**Categories:** All / Restaurant / Bar / Cafe / Bakery

Category is inferred from the restaurant's `type` string via `inferCategory()`:
- `bar` → type contains: bar, pub, izakaya, negroni, wine bar, cocktail, nightlife, tasting
- `bakery` → type contains: boulangerie, bakery, patisserie, pasticceria, pastry shop, pastelaria
- `cafe` → type contains: café, cafe, coffee, tea house, historic café
- Everything else → `restaurant`

Supports `?city=<cityId>` URL param to open a specific city on load.

## Shopping page (Shopping.jsx)
Trip-aware tabbed shopping guide. Tabs are defined per-trip in `shopping.js` as `SHOPPING_TABS`. The visible tabs are filtered by `plan.interests` — a tab only shows if its id matches one of the user's selected interests (or if no plan is built).

### Shopping page mini-components (defined inline in Shopping.jsx)
- `ShopCard` — shop card with city chip, rating, type tag, maps button
- `ShopGrid` — responsive grid wrapper for ShopCard
- `MapBtn` — "📍 Open in Maps" button using `mapsUrl()`
- `CityChip` — colour-coded city badge driven by `CITY_STYLE` from the trip's shopping.js
- `Stars` — gold star rating display
- `TypeTag` — pill label
- `SectionHdr` — section heading with emoji + subtitle
- `CitySection` / `CitySectionHdr` — city divider heading within a tab
- `ShopGridSection` — renders a grid of ShopCards
- `WishlistSection` — wishlist items (knives, clothing, etc.)
- `WatchWishlistSection` — watch-specific wishlist display
- `BrandGridSection` — brand grid display
- `TipsSection` — tips callout box
- `CitySectionsSection` — city-specific sections with neighbourhood links
- `JapanKnifeReference` — collapsible knife reference table (Japan-only)
- `SectionRenderer` — dispatcher: routes a tab section to the correct mini-component by `type`

## Design system
- **Primary colour:** driven by `TRIP_META.theme.primary` via CSS custom property `--color-primary`
- **Fonts:** Playfair Display (headings), Noto Sans JP (body)
- **Cards:** white bg, `border-radius: 16px`, `box-shadow: 0 2px 14px rgba(0,0,0,0.05)`, 1px border
- **Priority cards:** `borderTop: '3px solid var(--color-primary)'`
- **Body bg:** driven by `TRIP_META.theme.gradient` via CSS custom property `--gradient-bg`
- All styling is inline in JSX — avoid adding new CSS classes unless it's a reusable pattern that belongs in `index.css`

**Key CSS classes (index.css):**
- `.container` — max-width 1200px, centred, padded
- `.section` — vertical padding block
- `.grid` — responsive card grid
- `.city-pill-nav` / `.city-pill` — horizontal scrollable pill nav; add `.active` for selected state
- `.restaurant-card` — food card layout
- `.rest-meta`, `.tag`, `.price-badge`, `.area-badge`, `.rating` — food card sub-elements
- `.city-hero`, `.city-hero-overlay`, `.city-hero-content` — city page hero
- `.cat-grid`, `.cat-card`, `.cat-emoji` — category link grid
- `.highlight-list`, `.tips-list` — city detail lists
- `.petal-container`, `.petal` — cherry blossom animation
- `.footer` — footer bar

## Maps utility
```js
import { mapsUrl } from '../utils/maps'
mapsUrl('Seisuke Knife', 'Kyoto')  // → Google Maps search URL
```
Strips leading emojis, prices (€/¥ amounts), em-dashes, and parenthetical suffixes before building the URL.

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
