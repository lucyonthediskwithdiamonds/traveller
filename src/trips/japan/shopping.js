// Japan shopping data — extracted from Shopping.jsx so it lives with the flavour

export const CITY_STYLE = {
  Tokyo:    { bg: '#fff0f6', color: '#c0356e', border: '#f4bad4' },
  Osaka:    { bg: '#fff5ee', color: '#b85000', border: '#f5c090' },
  Kyoto:    { bg: '#f5f0ff', color: '#6d28d9', border: '#c4b0f4' },
  Multiple: { bg: '#f0f6ff', color: '#1d4ed8', border: '#b0ccf4' },
}

export const VINTAGE_TOKYO_HARAJUKU = [
  { name: 'NUIR Vintage Harajuku', city: 'Tokyo', area: 'Harajuku', rating: '5.0', reviews: '832', type: 'Luxury Vintage', notes: 'Mixed luxury vintage. Relaxed atmosphere. Good English spoken.', priority: false },
  { name: 'MixTHINKS Harajuku', city: 'Tokyo', area: 'Harajuku', rating: '5.0', reviews: '947', type: 'Vintage Bags', notes: 'Best vintage luxury BAGS in Tokyo. Chanel, LV, Gucci. Must visit.', priority: true, highlight: 'MUST VISIT' },
  { name: 'SALAMANCA Vintage Harajuku', city: 'Tokyo', area: 'Harajuku', rating: '5.0', reviews: '307', type: 'European Brands', notes: 'Great Burberry & European brands. Staff negotiate on price.', priority: false },
]

export const VINTAGE_TOKYO_SHIMOKITA = [
  { name: 'Harajuku Chicago', city: 'Tokyo', area: 'Shimokitazawa', rating: '4.7', reviews: null, type: 'Americana', notes: "Levi's, military, Carhartt, Americana. Tax-free. Budget a full afternoon.", priority: false },
  { name: 'TreFacStyle Shimokitazawa', city: 'Tokyo', area: 'Shimokitazawa', rating: '4.9', reviews: '692', type: 'Designer', notes: 'Celine to Acne Studio. Excellent value for the curation level.', priority: false },
  { name: 'Treasure Factory Style', city: 'Tokyo', area: 'Shimokitazawa', rating: '4.6', reviews: '621', type: 'Budget Gems', notes: 'Biggest store. Near-mint pieces for under €30.', priority: false },
  { name: 'iot reverse', city: 'Tokyo', area: 'Shimokitazawa', rating: '4.9', reviews: '106', type: 'Rare / Curated', notes: 'Rare band tees, curated cool, legendary owner. Open until MIDNIGHT.', priority: false, highlight: 'MIDNIGHT' },
]

export const VINTAGE_OSAKA = [
  { name: 'Kindal Shinsaibashi Amerikamura', city: 'Osaka', area: 'Amerikamura', rating: '4.9', reviews: '1,909', type: 'Archive Fashion', notes: 'Crown jewel. Entire floor of CDG/Yohji archive. Best vintage store many reviewers have ever visited.', priority: true, highlight: 'CROWN JEWEL' },
  { name: 'ALLU Shinsaibashi', city: 'Osaka', area: 'Shinsaibashi', rating: '5.0', reviews: '1,845', type: 'Pre-owned Luxury', notes: 'Hermès, Chanel, LV. Original packaging. Staff will hold items.', priority: false },
  { name: 'ACORN Minamisenba', city: 'Osaka', area: 'Minamisenba', rating: '4.9', reviews: '587', type: 'Curated Rare', notes: 'Tight curated edit. Rare pieces. Pricier but worth it.', priority: false },
  { name: 'TreFacStyle Amerikamura', city: 'Osaka', area: 'Amerikamura', rating: '4.5', reviews: '330', type: 'Americana / Workwear', notes: '3 floors of Americana and workwear. Closed Tuesdays.', priority: false },
]

export const VINTAGE_KYOTO = [
  { name: 'SALAMANCA Vintage Kyoto Shijo', city: 'Kyoto', area: 'Shijo', rating: '5.0', reviews: '1,234', type: 'Luxury Archive', notes: 'Prices cheaper than Tokyo. Rare Issey Miyake, Gucci, Fendi. Tax-free with passport.', priority: true, highlight: 'BEST VALUE' },
  { name: 'BRING Kyoto Kawaramachi', city: 'Kyoto', area: 'Kawaramachi', rating: '4.9', reviews: '276', type: 'Designer Clothing', notes: 'Cheapest Chrome Hearts found across all 3 cities. Great designer clothing.', priority: false },
  { name: 'Big Time Kyoto', city: 'Kyoto', area: 'Kyoto', rating: '4.1', reviews: '94', type: 'Museum-Like', notes: '"Museum where everything is for sale." 4 floors sorted by type and colour. Immaculate curation.', priority: false },
]

export const CLOTHING_SHOPS = [
  { name: 'NEIGHBORHOOD', city: 'Tokyo', area: 'Harajuku', type: 'Streetwear / Hypebeast', notes: 'Japanese streetwear icon. Heavy, rugged aesthetic. The original.', priority: true },
  { name: 'Comme des Garçons', city: 'Tokyo', area: 'Aoyama', type: 'Avant-garde / Designer', notes: 'Flagship Aoyama store. Start with CDG HOMME PLUS or PLAY as your entry point.', priority: true },
  { name: 'Kapital', city: 'Tokyo', area: 'Ebisu', type: 'Workwear / Folk Art', notes: 'Patchwork, boro-inspired, folk art aesthetic. Also in Osaka and Kyoto.', priority: false },
  { name: 'Kapital', city: 'Osaka', area: 'Osaka', type: 'Workwear / Folk Art', notes: 'Osaka location. Excellent selection. Ask staff for latest pieces.', priority: false },
  { name: 'Kapital', city: 'Kyoto', area: 'Kyoto', type: 'Workwear / Folk Art', notes: 'Kyoto flagship. Ask staff for latest pieces and seasonal highlights.', priority: false },
  { name: 'Uniform & Working Wear Kadoya', city: 'Kyoto', area: 'Kyoto', type: 'Artisan / Traditional', notes: '100-year-old family shop. Authentic Tabi shoes, Nikka pants, artisan aprons. Owner Kozo is legendary. Open Tue–Sat only.', priority: false, highlight: 'TUE–SAT' },
]

export const KNIFE_WISHLIST = [
  {
    name: 'K-tip Bunka 180mm',
    purpose: 'Daily Driver — replaces Gyuto',
    steel: 'SG2 Powder Stainless OR Aogami Super',
    finish: 'Tsuchime (hammered) — must match strip aesthetic',
    handle: 'Octagonal wa · Warm wood (cherry, walnut, rosewood)',
    budget: '€180–260', yen: '¥30–50k', priority: 'HIGHEST',
    why: 'Taller blade = knuckle clearance solved. Aggressive K-tip. The main knife of the trip.',
    candidates: [
      { name: 'HADO Shiosai Bunka 180mm — Walnut', steel: 'SPG2', price: '¥35,200', note: 'SOLD OUT online — ask in store', shop: 'Seisuke Knife', city: 'Kyoto' },
      { name: 'Yu Kurosaki Sasame Bunka — American Cherry', steel: 'SG2', price: '¥40–44,000', note: 'Prestige pick. Sasame dimple finish.', shop: 'Knife Gallery', city: 'Kyoto' },
      { name: 'HADO Shiosai Bunka 180mm — Olive', steel: 'SPG2', price: '¥49,500', note: 'Alternative colourway. Check in store.', shop: 'Seisuke Knife', city: 'Kyoto' },
    ],
  },
  {
    name: 'Sujihiki 240–270mm',
    purpose: 'Meat Slicer — roast, brisket, lamb, pork',
    steel: 'Shirogami (white carbon) — purest edge, reactive, rewarding',
    finish: 'Kurouchi — dark forge scale, dramatic on a long blade',
    handle: 'Octagonal wa · Dark wood',
    budget: '€220–280', yen: '¥45–60k', priority: 'HIGH',
    why: 'One clean stroke per slice. Kurouchi develops incredible patina over time.',
    candidates: [
      { name: 'Nigara SGSTRIX Tsuchime Sujihiki 240mm — Rosewood', steel: 'SGSTRIX', price: '¥55,000', note: '350yr maker. In stock.', shop: 'Seisuke Knife', city: 'Tokyo' },
      { name: 'Saji Takeshi Sujihiki 270mm — Coloured Damascus', steel: 'VG10W Damascus', price: 'TBC', note: 'Copper/brass Damascus layers. Unique.', shop: 'Knife Gallery', city: 'Kyoto' },
    ],
  },
  {
    name: 'Honesuki 150mm',
    purpose: 'Poultry Deboning',
    steel: 'VG10 Stainless — tough, no maintenance',
    finish: 'Any — function over aesthetics',
    handle: 'Ebony preferred · Stiff triangular blade, pointed tip',
    budget: '€80–120', yen: '¥15–25k', priority: 'HIGH',
    why: 'Stiff triangular blade for joint work. Ask about single-bevel at store.',
    candidates: [
      { name: 'Tsubaya VG10 Honesuki — Ebony Handle', steel: 'VG10', price: '~¥18,000', note: 'Confirmed pick.', shop: 'Tsubaya Kappabashi', city: 'Tokyo' },
    ],
  },
]

export const KNIFE_SHOPS = [
  { name: 'Seisuke Knife — Kappabashi', city: 'Tokyo', area: 'Kappabashi', rating: '4.9', reviews: '2,356', type: 'Multi-brand', notes: 'Flagship. English staff. Best HADO stock. Ask about Nigara Sujihiki.', priority: true },
  { name: 'Knife Gallery', city: 'Kyoto', area: 'Kyoto', rating: '4.9', reviews: null, type: 'Curated Selection', notes: 'Yu Kurosaki Sasame Bunka. Saji Damascus Sujihiki. Best selection for your taste.', priority: true },
  { name: 'Seisuke Knife — Kyoto', city: 'Kyoto', area: 'Kyoto', rating: '4.9', reviews: '1,477', type: 'Multi-brand', notes: 'Ask for Ash. Custom engraving available. Good HADO stock.', priority: false },
  { name: 'MUSASHI Knife Shop', city: 'Kyoto', area: 'Kyoto', rating: '4.9', reviews: '494', type: 'White Steel Specialist', notes: 'Free laser engraving. Open until 9pm. White steel specialist.', priority: false },
  { name: 'Tsubaya Kappabashi', city: 'Tokyo', area: 'Kappabashi', rating: '4.8', reviews: null, type: 'Professional Kitchen', notes: 'Professional kitchenware store. Confirmed Honesuki pick.', priority: false },
  { name: 'Jikko Knives — Namba', city: 'Osaka', area: 'Namba', rating: '5.0', reviews: '314', type: 'Custom & Traditional', notes: 'Perfect score. English-speaking staff. Free name engraving.', priority: false },
]

export const WATCHES = [
  { name: 'Seiko Presage Moonphase', ref: 'SRPK41', budget: '€500–650', yen: '¥85–110k', notes: 'Warm champagne dial. Moonphase complication. Same dress register as your Adidas — perfect companion piece.', priority: true },
  { name: 'Seiko Presage Chronograph', ref: 'SSC935', budget: '€600–800', yen: '¥100–130k', notes: 'Elegant chronograph. Santos-adjacent energy. More wearable daily than vintage options.', priority: false },
  { name: 'Orient Star Skeleton', ref: 'RE-AZ0001S', budget: '€350–450', yen: '¥60–80k', notes: 'Gold/rose gold tone. Open movement visible. Dramatic — incredible for the price.', priority: false },
  { name: 'Kuoe Original Timepiece', ref: null, budget: '€200–500', yen: '¥35–85k', notes: 'Kyoto-based independent. Warm dial colours, dress-only aesthetic. Understated and distinctive — worth visiting the flagship in person.', priority: false },
]

export const WATCH_SHOPS = [
  { name: 'Grand Seiko Boutique Ginza', city: 'Tokyo', area: 'Ginza', rating: '4.6', reviews: '104', type: 'New Models', notes: 'Flagship. Full Presage & Grand Seiko range. ~10% tax-free with passport.', priority: true },
  { name: 'Big Moon Kyoto', city: 'Kyoto', area: 'Kyoto', rating: '5.0', reviews: '326', type: 'Grand Seiko', notes: 'Best Grand Seiko collection in Japan. Ask for Shoji. Closed Thursdays.', priority: true },
  { name: 'Kuoe Flagship — Kyoto', city: 'Kyoto', area: 'Kyoto', rating: '4.8', reviews: null, type: 'Independent / Dress', notes: 'Kyoto-based independent watchmaker. Warm tones, dress-only line-up. A rare find — no online sales, Kyoto only.', priority: true },
  { name: 'Watch Square Kyoto', city: 'Kyoto', area: 'Kyoto', rating: '5.0', reviews: '397', type: 'New + Discount', notes: 'Extra 7% off on top of tax-free. New models. Great for Moonphase.', priority: false },
  { name: 'WATCHNIAN Shinjuku', city: 'Tokyo', area: 'Shinjuku', rating: '4.9', reviews: '831', type: 'Pre-owned', notes: 'Pre-owned specialist. English staff. Free sizing.', priority: false },
  { name: 'WATCHNIAN Osaka Honten', city: 'Osaka', area: 'Osaka', rating: '4.9', reviews: '438', type: 'Pre-owned', notes: 'Pre-owned. Warmest staff. Good Orient Star stock.', priority: false },
  { name: 'OKURA Shinsaibashi', city: 'Osaka', area: 'Shinsaibashi', rating: '5.0', reviews: '346', type: 'Pre-owned Luxury', notes: 'Pre-owned specialist. Rolex & AP also here. Good for older Presage references at lower prices.', priority: false },
]

export const DENIM_BRANDS = [
  { brand: 'Japan Blue Jeans', city: 'Tokyo', area: 'Asakusa', style: 'Selvedge · Straight & Slim', price: '€180–280', notes: 'Free chain-stitch hemming in ~1hr. Asakusa flagship is the best store. Ask for "selvedge" specifically.', priority: true },
  { brand: 'Japan Blue Jeans', city: 'Kyoto', area: 'Nishiki Market', style: 'Selvedge', price: '€180–280', notes: 'Inside Nishiki Market. 2hr hemming. Ask for Rio.', priority: false },
  { brand: 'Samurai Jeans', city: 'Osaka', area: 'Osaka', style: 'Heavy Selvedge (18oz+)', price: '€200–350', notes: '100% Osaka-made. Same-day chain stitch hemming. The most Japanese denim brand.', priority: true },
  { brand: 'Big John', city: 'Osaka', area: 'Osaka', style: 'Classic Selvedge', price: '€200–300', notes: 'Invented Japanese selvedge denim in 1965. 2hr hemming available.', priority: false },
  { brand: 'Kapital Century Denim', city: 'Multiple', area: 'Tokyo / Osaka / Kyoto', style: 'Patchwork / Artistic', price: '€250–500+', notes: 'Artistic patchwork aesthetic. Not traditional selvedge — more like denim as folk art.', priority: false },
  { brand: 'Dry Bones', city: 'Tokyo', area: 'Tokyo', style: 'Americana / 50s Repro', price: '€200–300', notes: 'Incredible 1950s-inspired repro denim. Tokyo only.', priority: false },
]

export const DENIM_TIPS = [
  "Ask for 'selvedge denim' (セルビッジデニム) — they'll understand at any store",
  'Chain-stitch hemming (チェーンステッチ) is free or low-cost at most selvedge stores, same day',
  'Cold soak before first wear (30 min) to set the fit before fading begins',
  "Budget €250–400 per pair for quality selvedge — don't go cheaper",
  'Passport required for ~10% tax exemption on purchases over ¥5,000',
]

export const SHOPPING_TABS = [
  {
    id: 'clothing', icon: '👗', label: 'Clothing',
    sections: [
      {
        type: 'city-sections',
        emoji: '🛍️', title: 'Vintage & Pre-owned',
        sub: 'Best vintage & pre-owned luxury across Tokyo, Osaka & Kyoto · Always carry passport for tax exemption',
        cities: [
          {
            emoji: '🗼', city: 'Tokyo',
            neighbourhoods: [
              { name: 'Harajuku', sub: 'Curated · High-end archive', shops: VINTAGE_TOKYO_HARAJUKU },
              { name: 'Shimokitazawa', sub: 'Bohemian · Budget a full afternoon', shops: VINTAGE_TOKYO_SHIMOKITA },
            ],
          },
          { emoji: '🏯', city: 'Osaka', shops: VINTAGE_OSAKA },
          { emoji: '🌸', city: 'Kyoto', shops: VINTAGE_KYOTO },
        ],
      },
      { type: 'shop-grid', emoji: '👕', title: 'Clothing Boutiques', sub: 'Streetwear · Avant-garde · Workwear / Folk Art · Artisan Traditional', shops: CLOTHING_SHOPS },
      { type: 'brand-grid', emoji: '👖', title: 'Raw Denim', sub: 'Japanese selvedge only · Budget €250–400 per pair · Free chain-stitch hemming at most stores', items: DENIM_BRANDS },
      { type: 'tips', title: 'Denim Tips', tips: DENIM_TIPS },
    ],
  },
  {
    id: 'accessories', icon: '⌚', label: 'Accessories',
    sections: [
      { type: 'watch-wishlist', emoji: '⌚', title: 'Watches', sub: 'Budget up to €1,000 per watch · Warm gold tones · Dress pieces and complications only · Kuoe independent in Kyoto', items: WATCHES },
      { type: 'shop-grid', title: 'Watch Shops', emoji: '⌚', shops: WATCH_SHOPS },
    ],
  },
  {
    id: 'household', icon: '🏠', label: 'Household',
    sections: [
      { type: 'wishlist', emoji: '🔪', title: 'Kitchen Knives', sub: '3 knives · Budget ~€600 total · Prioritise Bunka first, then Sujihiki, then Honesuki', items: KNIFE_WISHLIST },
      { type: 'shop-grid', title: 'Knife Shops', emoji: '🗺️', shops: KNIFE_SHOPS },
      { type: 'japan-knife-reference' },
    ],
  },
]

export const PRIORITY_COLOR = { HIGHEST: '#d4558f', HIGH: '#e07b39', MEDIUM: '#4a90d9' }
