import { useState } from 'react'
import { mapsUrl } from '../utils/maps'

// ── Mini Components ────────────────────────────────────────────

const CITY_STYLE = {
  Tokyo:    { bg: '#fff0f6', color: '#c0356e', border: '#f4bad4' },
  Osaka:    { bg: '#fff5ee', color: '#b85000', border: '#f5c090' },
  Kyoto:    { bg: '#f5f0ff', color: '#6d28d9', border: '#c4b0f4' },
  Multiple: { bg: '#f0f6ff', color: '#1d4ed8', border: '#b0ccf4' },
}

function CityChip({ city }) {
  const s = CITY_STYLE[city] || CITY_STYLE.Multiple
  return (
    <span style={{
      fontSize: 11, fontWeight: 700, padding: '2px 9px', borderRadius: 10,
      background: s.bg, color: s.color, border: `1px solid ${s.border}`,
      letterSpacing: '0.03em',
    }}>{city}</span>
  )
}

function Stars({ rating, reviews }) {
  return (
    <span style={{ fontSize: 13, fontWeight: 600, color: '#d97706' }}>
      ★ {rating}
      {reviews && <span style={{ fontWeight: 400, color: '#9a8a8a', fontSize: 12 }}> ({reviews})</span>}
    </span>
  )
}

function TypeTag({ label }) {
  return (
    <span style={{
      fontSize: 11, padding: '2px 9px', borderRadius: 10,
      background: 'rgba(212,85,143,0.08)', color: '#a03070', fontWeight: 500,
    }}>{label}</span>
  )
}

function MapBtn({ name, city }) {
  return (
    <a
      href={mapsUrl(name, city)}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 5,
        padding: '7px 14px', borderRadius: 20, fontSize: 12, fontWeight: 600,
        background: 'rgba(212,85,143,0.09)', color: '#c0356e',
        border: '1px solid rgba(212,85,143,0.2)',
        textDecoration: 'none', whiteSpace: 'nowrap',
      }}
    >
      📍 Open in Maps
    </a>
  )
}

function ShopCard({ name, city, area, rating, reviews, type, notes, priority, highlight }) {
  return (
    <div style={{
      background: '#fff',
      border: '1px solid rgba(0,0,0,0.07)',
      borderTop: priority ? '3px solid #d4558f' : undefined,
      borderRadius: 16, padding: 20,
      boxShadow: '0 2px 14px rgba(0,0,0,0.05)',
      display: 'flex', flexDirection: 'column', gap: 10,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}>
        <h4 style={{ margin: 0, fontSize: 15, fontFamily: 'inherit', fontWeight: 700, color: '#1a1410', lineHeight: 1.3 }}>{name}</h4>
        {(highlight || priority) && (
          <span style={{
            fontSize: 9, fontWeight: 800, padding: '3px 8px', borderRadius: 6,
            background: '#d4558f', color: '#fff', whiteSpace: 'nowrap',
            letterSpacing: '0.06em', textTransform: 'uppercase', flexShrink: 0,
          }}>{highlight || 'Priority'}</span>
        )}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
        <CityChip city={city} />
        {area && <span style={{ fontSize: 12, color: '#9a8a9a' }}>{area}</span>}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
        {rating && <Stars rating={rating} reviews={reviews} />}
        {type && <TypeTag label={type} />}
      </div>
      <p style={{ margin: 0, fontSize: 13, color: '#4a3a4a', lineHeight: 1.55 }}>{notes}</p>
      <MapBtn name={name} city={city} />
    </div>
  )
}

function SectionHdr({ emoji, title, sub }) {
  return (
    <div style={{ marginBottom: 28 }}>
      <h2 style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8, color: '#1a1410' }}>
        <span>{emoji}</span> {title}
      </h2>
      {sub && <p style={{ fontSize: 15, color: '#6b5a5a', margin: 0 }}>{sub}</p>}
    </div>
  )
}

function CitySection({ emoji, city, sub }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '40px 0 18px' }}>
      <span style={{ fontSize: 24 }}>{emoji}</span>
      <div>
        <h3 style={{ margin: 0, fontSize: 20 }}>{city}</h3>
        {sub && <p style={{ margin: 0, fontSize: 13, color: '#9a8a9a' }}>{sub}</p>}
      </div>
    </div>
  )
}

function ShopGrid({ shops }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
      gap: 20, marginBottom: 8,
    }}>
      {shops.map((s, i) => <ShopCard key={i} {...s} />)}
    </div>
  )
}

// ── Data ────────────────────────────────────────────────────────

const VINTAGE_TOKYO_HARAJUKU = [
  { name: 'NUIR Vintage Harajuku', city: 'Tokyo', area: 'Harajuku', rating: '5.0', reviews: '832', type: 'Luxury Vintage', notes: 'Mixed luxury vintage. Relaxed atmosphere. Good English spoken.', priority: false },
  { name: 'MixTHINKS Harajuku', city: 'Tokyo', area: 'Harajuku', rating: '5.0', reviews: '947', type: 'Vintage Bags', notes: 'Best vintage luxury BAGS in Tokyo. Chanel, LV, Gucci. Must visit.', priority: true, highlight: 'MUST VISIT' },
  { name: 'SALAMANCA Vintage Harajuku', city: 'Tokyo', area: 'Harajuku', rating: '5.0', reviews: '307', type: 'European Brands', notes: 'Great Burberry & European brands. Staff negotiate on price.', priority: false },
]

const VINTAGE_TOKYO_SHIMOKITA = [
  { name: 'Harajuku Chicago', city: 'Tokyo', area: 'Shimokitazawa', rating: '4.7', reviews: null, type: 'Americana', notes: "Levi's, military, Carhartt, Americana. Tax-free. Budget a full afternoon.", priority: false },
  { name: 'TreFacStyle Shimokitazawa', city: 'Tokyo', area: 'Shimokitazawa', rating: '4.9', reviews: '692', type: 'Designer', notes: 'Celine to Acne Studio. Excellent value for the curation level.', priority: false },
  { name: 'Treasure Factory Style', city: 'Tokyo', area: 'Shimokitazawa', rating: '4.6', reviews: '621', type: 'Budget Gems', notes: 'Biggest store. Near-mint pieces for under €30.', priority: false },
  { name: 'iot reverse', city: 'Tokyo', area: 'Shimokitazawa', rating: '4.9', reviews: '106', type: 'Rare / Curated', notes: 'Rare band tees, curated cool, legendary owner. Open until MIDNIGHT.', priority: false, highlight: 'MIDNIGHT' },
]

const VINTAGE_OSAKA = [
  { name: 'Kindal Shinsaibashi Amerikamura', city: 'Osaka', area: 'Amerikamura', rating: '4.9', reviews: '1,909', type: 'Archive Fashion', notes: 'Crown jewel. Entire floor of CDG/Yohji archive. Best vintage store many reviewers have ever visited.', priority: true, highlight: 'CROWN JEWEL' },
  { name: 'ALLU Shinsaibashi', city: 'Osaka', area: 'Shinsaibashi', rating: '5.0', reviews: '1,845', type: 'Pre-owned Luxury', notes: 'Hermès, Chanel, LV. Original packaging. Staff will hold items.', priority: false },
  { name: 'ACORN Minamisenba', city: 'Osaka', area: 'Minamisenba', rating: '4.9', reviews: '587', type: 'Curated Rare', notes: 'Tight curated edit. Rare pieces. Pricier but worth it.', priority: false },
  { name: 'TreFacStyle Amerikamura', city: 'Osaka', area: 'Amerikamura', rating: '4.5', reviews: '330', type: 'Americana / Workwear', notes: '3 floors of Americana and workwear. Closed Tuesdays.', priority: false },
]

const VINTAGE_KYOTO = [
  { name: 'SALAMANCA Vintage Kyoto Shijo', city: 'Kyoto', area: 'Shijo', rating: '5.0', reviews: '1,234', type: 'Luxury Archive', notes: 'Prices cheaper than Tokyo. Rare Issey Miyake, Gucci, Fendi. Tax-free with passport.', priority: true, highlight: 'BEST VALUE' },
  { name: 'BRING Kyoto Kawaramachi', city: 'Kyoto', area: 'Kawaramachi', rating: '4.9', reviews: '276', type: 'Designer Clothing', notes: 'Cheapest Chrome Hearts found across all 3 cities. Great designer clothing.', priority: false },
  { name: 'Big Time Kyoto', city: 'Kyoto', area: 'Kyoto', rating: '4.1', reviews: '94', type: 'Museum-Like', notes: '"Museum where everything is for sale." 4 floors sorted by type and colour. Immaculate curation.', priority: false },
]

const CLOTHING_SHOPS = [
  { name: 'NEIGHBORHOOD', city: 'Tokyo', area: 'Harajuku', type: 'Streetwear / Hypebeast', notes: 'Japanese streetwear icon. Heavy, rugged aesthetic. The original.', priority: true },
  { name: 'Comme des Garçons', city: 'Tokyo', area: 'Aoyama', type: 'Avant-garde / Designer', notes: 'Flagship Aoyama store. Start with CDG HOMME PLUS or PLAY as your entry point.', priority: true },
  { name: 'Kapital', city: 'Tokyo', area: 'Ebisu', type: 'Workwear / Folk Art', notes: 'Patchwork, boro-inspired, folk art aesthetic. Also in Osaka and Kyoto.', priority: false },
  { name: 'Kapital', city: 'Osaka', area: 'Osaka', type: 'Workwear / Folk Art', notes: 'Osaka location. Excellent selection. Ask staff for latest pieces.', priority: false },
  { name: 'Kapital', city: 'Kyoto', area: 'Kyoto', type: 'Workwear / Folk Art', notes: 'Kyoto flagship. Ask staff for latest pieces and seasonal highlights.', priority: false },
  { name: 'Uniform & Working Wear Kadoya', city: 'Kyoto', area: 'Kyoto', type: 'Artisan / Traditional', notes: '100-year-old family shop. Authentic Tabi shoes, Nikka pants, artisan aprons. Owner Kozo is legendary. Open Tue–Sat only.', priority: false, highlight: 'TUE–SAT' },
]

const KNIFE_WISHLIST = [
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

const KNIFE_SHOPS = [
  { name: 'Seisuke Knife — Kappabashi', city: 'Tokyo', area: 'Kappabashi', rating: '4.9', reviews: '2,356', type: 'Multi-brand', notes: 'Flagship. English staff. Best HADO stock. Ask about Nigara Sujihiki.', priority: true },
  { name: 'Knife Gallery', city: 'Kyoto', area: 'Kyoto', rating: '4.9', reviews: null, type: 'Curated Selection', notes: 'Yu Kurosaki Sasame Bunka. Saji Damascus Sujihiki. Best selection for your taste.', priority: true },
  { name: 'Seisuke Knife — Kyoto', city: 'Kyoto', area: 'Kyoto', rating: '4.9', reviews: '1,477', type: 'Multi-brand', notes: 'Ask for Ash. Custom engraving available. Good HADO stock.', priority: false },
  { name: 'MUSASHI Knife Shop', city: 'Kyoto', area: 'Kyoto', rating: '4.9', reviews: '494', type: 'White Steel Specialist', notes: 'Free laser engraving. Open until 9pm. White steel specialist.', priority: false },
  { name: 'Tsubaya Kappabashi', city: 'Tokyo', area: 'Kappabashi', rating: '4.8', reviews: null, type: 'Professional Kitchen', notes: 'Professional kitchenware store. Confirmed Honesuki pick.', priority: false },
  { name: 'Jikko Knives — Namba', city: 'Osaka', area: 'Namba', rating: '5.0', reviews: '314', type: 'Custom & Traditional', notes: 'Perfect score. English-speaking staff. Free name engraving.', priority: false },
]

const WATCHES = [
  { name: 'Seiko Presage Moonphase', ref: 'SRPK41', budget: '€500–650', yen: '¥85–110k', notes: 'Warm champagne dial. Moonphase complication. Same dress register as your Adidas — perfect companion piece.', priority: true },
  { name: 'Seiko Presage Chronograph', ref: 'SSC935', budget: '€600–800', yen: '¥100–130k', notes: 'Elegant chronograph. Santos-adjacent energy. More wearable daily than vintage options.', priority: false },
  { name: 'Orient Star Skeleton', ref: 'RE-AZ0001S', budget: '€350–450', yen: '¥60–80k', notes: 'Gold/rose gold tone. Open movement visible. Dramatic — incredible for the price.', priority: false },
]

const WATCH_SHOPS = [
  { name: 'Grand Seiko Boutique Ginza', city: 'Tokyo', area: 'Ginza', rating: '4.6', reviews: '104', type: 'New Models', notes: 'Flagship. Full Presage & Grand Seiko range. ~10% tax-free with passport.', priority: true },
  { name: 'Big Moon Kyoto', city: 'Kyoto', area: 'Kyoto', rating: '5.0', reviews: '326', type: 'Grand Seiko', notes: 'Best Grand Seiko collection in Japan. Ask for Shoji. Closed Thursdays.', priority: true },
  { name: 'Watch Square Kyoto', city: 'Kyoto', area: 'Kyoto', rating: '5.0', reviews: '397', type: 'New + Discount', notes: 'Extra 7% off on top of tax-free. New models. Great for Moonphase.', priority: false },
  { name: 'WATCHNIAN Shinjuku', city: 'Tokyo', area: 'Shinjuku', rating: '4.9', reviews: '831', type: 'Pre-owned', notes: 'Pre-owned specialist. English staff. Free sizing.', priority: false },
  { name: 'WATCHNIAN Osaka Honten', city: 'Osaka', area: 'Osaka', rating: '4.9', reviews: '438', type: 'Pre-owned', notes: 'Pre-owned. Warmest staff. Good Orient Star stock.', priority: false },
  { name: 'OKURA Shinsaibashi', city: 'Osaka', area: 'Shinsaibashi', rating: '5.0', reviews: '346', type: 'Pre-owned Luxury', notes: 'Pre-owned specialist. Rolex & AP also here. Good for older Presage references at lower prices.', priority: false },
]

const DENIM_BRANDS = [
  { brand: 'Japan Blue Jeans', city: 'Tokyo', area: 'Asakusa', style: 'Selvedge · Straight & Slim', price: '€180–280', notes: 'Free chain-stitch hemming in ~1hr. Asakusa flagship is the best store. Ask for "selvedge" specifically.', priority: true },
  { brand: 'Japan Blue Jeans', city: 'Kyoto', area: 'Nishiki Market', style: 'Selvedge', price: '€180–280', notes: 'Inside Nishiki Market. 2hr hemming. Ask for Rio.', priority: false },
  { brand: 'Samurai Jeans', city: 'Osaka', area: 'Osaka', style: 'Heavy Selvedge (18oz+)', price: '€200–350', notes: '100% Osaka-made. Same-day chain stitch hemming. The most Japanese denim brand.', priority: true },
  { brand: 'Big John', city: 'Osaka', area: 'Osaka', style: 'Classic Selvedge', price: '€200–300', notes: 'Invented Japanese selvedge denim in 1965. 2hr hemming available.', priority: false },
  { brand: 'Kapital Century Denim', city: 'Multiple', area: 'Tokyo / Osaka / Kyoto', style: 'Patchwork / Artistic', price: '€250–500+', notes: 'Artistic patchwork aesthetic. Not traditional selvedge — more like denim as folk art.', priority: false },
  { brand: 'Dry Bones', city: 'Tokyo', area: 'Tokyo', style: 'Americana / 50s Repro', price: '€200–300', notes: 'Incredible 1950s-inspired repro denim. Tokyo only.', priority: false },
]

const DENIM_TIPS = [
  "Ask for 'selvedge denim' (セルビッジデニム) — they'll understand at any store",
  'Chain-stitch hemming (チェーンステッチ) is free or low-cost at most selvedge stores, same day',
  'Cold soak before first wear (30 min) to set the fit before fading begins',
  "Budget €250–400 per pair for quality selvedge — don't go cheaper",
  'Passport required for ~10% tax exemption on purchases over ¥5,000',
]

const PRIORITY_COLOR = { HIGHEST: '#d4558f', HIGH: '#e07b39', MEDIUM: '#4a90d9' }

const TABS = [
  { id: 'knives',   icon: '🔪', label: 'Knives' },
  { id: 'watches',  icon: '⌚', label: 'Watches' },
  { id: 'denim',    icon: '👖', label: 'Denim' },
  { id: 'vintage',  icon: '🛍️', label: 'Vintage' },
  { id: 'clothing', icon: '👕', label: 'Clothing' },
]

// ── Main Component ─────────────────────────────────────────────

export default function Shopping() {
  const [tab, setTab] = useState('knives')

  return (
    <div style={{ minHeight: '100vh' }}>

      {/* ── Page header ──────────────────────────────── */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(212,85,143,0.12) 0%, rgba(155,89,166,0.08) 50%, rgba(224,123,57,0.08) 100%)',
        borderBottom: '1px solid rgba(212,85,143,0.12)',
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', padding: '52px 0 28px' }}>
            <h1 style={{
              fontSize: 42, marginBottom: 10,
              background: 'linear-gradient(135deg, #d4558f, #9b59a6)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>Shopping Guide</h1>
            <p style={{ color: '#7a5070', fontSize: 16, marginBottom: 18 }}>
              Tokyo · Osaka · Kyoto — Knives · Watches · Denim · Vintage · Clothing
            </p>
            <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
              {[['🔪 Knives', '~€600'], ['⌚ Watches', '€1k/ea'], ['👖 Denim', '€400/pair']].map(([cat, bud]) => (
                <span key={cat} style={{
                  padding: '5px 14px', borderRadius: 20, fontSize: 12, fontWeight: 600,
                  background: 'rgba(255,255,255,0.75)', border: '1px solid rgba(212,85,143,0.2)',
                  color: '#7a3060',
                }}>{cat} · {bud}</span>
              ))}
              <span style={{
                padding: '5px 14px', borderRadius: 20, fontSize: 12, fontWeight: 600,
                background: 'rgba(212,85,143,0.1)', border: '1px solid rgba(212,85,143,0.3)',
                color: '#d4558f',
              }}>🛂 Always carry passport — ~10% tax free</span>
            </div>
          </div>

          {/* ── Tab bar ────────────────────────────── */}
          <div style={{
            display: 'flex', overflowX: 'auto', scrollbarWidth: 'none',
            borderBottom: '2px solid rgba(212,85,143,0.1)',
          }}>
            {TABS.map(t => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                style={{
                  padding: '14px 24px', border: 'none', background: 'none',
                  cursor: 'pointer', fontFamily: 'inherit', fontSize: 14, fontWeight: 600,
                  color: tab === t.id ? '#d4558f' : '#9a7a8a',
                  borderBottom: tab === t.id ? '2px solid #d4558f' : '2px solid transparent',
                  marginBottom: '-2px', whiteSpace: 'nowrap', transition: 'color 0.2s',
                  display: 'flex', alignItems: 'center', gap: 7,
                }}
              >
                <span>{t.icon}</span> {t.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Content ──────────────────────────────────── */}
      <div className="section">
        <div className="container">

          {/* ═══ KNIVES ══════════════════════════════ */}
          {tab === 'knives' && (
            <div>
              <SectionHdr emoji="🔪" title="Knife Wishlist"
                sub="3 knives · Budget ~€600 total · Prioritise Bunka first, then Sujihiki, then Honesuki"
              />

              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 48 }}>
                {KNIFE_WISHLIST.map((k, i) => {
                  const accent = PRIORITY_COLOR[k.priority] || '#d4558f'
                  return (
                    <div key={i} style={{
                      background: '#fff', borderRadius: 16, padding: '22px 24px',
                      border: '1px solid rgba(0,0,0,0.07)',
                      borderLeft: `4px solid ${accent}`,
                      boxShadow: '0 2px 14px rgba(0,0,0,0.05)',
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 10, marginBottom: 10 }}>
                        <h3 style={{ margin: 0, fontSize: 20 }}>{k.name}</h3>
                        <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexShrink: 0 }}>
                          <span style={{
                            fontSize: 10, fontWeight: 800, padding: '3px 9px', borderRadius: 6,
                            background: accent, color: '#fff', letterSpacing: '0.07em', textTransform: 'uppercase',
                          }}>{k.priority}</span>
                          <span style={{ fontSize: 13, fontWeight: 700, color: '#5a4a5a' }}>{k.budget} · {k.yen}</span>
                        </div>
                      </div>
                      <p style={{ fontSize: 14, color: '#9a5070', marginBottom: 16, fontStyle: 'italic' }}>{k.why}</p>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '8px 16px', marginBottom: 16 }}>
                        {[['Purpose', k.purpose], ['Steel', k.steel], ['Finish', k.finish], ['Handle', k.handle]].map(([label, val]) => (
                          <div key={label}>
                            <div style={{ fontSize: 10, color: '#c0a0b0', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, marginBottom: 2 }}>{label}</div>
                            <div style={{ fontSize: 13, color: '#4a3a4a' }}>{val}</div>
                          </div>
                        ))}
                      </div>
                      {k.candidates.length > 0 && (
                        <div>
                          <div style={{ fontSize: 11, color: '#c0a0b0', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>Top Candidates</div>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                            {k.candidates.map((c, ci) => (
                              <div key={ci} style={{
                                background: 'rgba(212,85,143,0.04)', border: '1px solid rgba(212,85,143,0.1)',
                                borderRadius: 10, padding: '10px 14px',
                                display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10, alignItems: 'center',
                              }}>
                                <div style={{ flex: 1 }}>
                                  <span style={{ fontWeight: 700, fontSize: 13, color: '#1a1410' }}>{c.name}</span>
                                  <span style={{ fontSize: 11, color: '#9a8a9a', marginLeft: 8 }}>{c.steel}</span>
                                  {c.note && <span style={{ fontSize: 11, color: '#c0356e', marginLeft: 8 }}>— {c.note}</span>}
                                </div>
                                <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                                  <span style={{ fontWeight: 700, color: '#d4558f', fontSize: 15 }}>{c.price}</span>
                                  <MapBtn name={c.shop} city={c.city} />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>

              <h3 style={{ marginBottom: 18 }}>Best Knife Shops</h3>
              <ShopGrid shops={KNIFE_SHOPS} />

              <details style={{ marginTop: 40, border: '1px solid rgba(212,85,143,0.15)', borderRadius: 14, background: '#fff' }}>
                <summary style={{ cursor: 'pointer', fontWeight: 700, color: '#d4558f', fontSize: 15, padding: '18px 20px' }}>
                  📖 Knife Reference Guide — Types, Steels & Finishes
                </summary>
                <div style={{ padding: '0 20px 20px', overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
                    <thead>
                      <tr style={{ borderBottom: '2px solid rgba(212,85,143,0.12)' }}>
                        {['Type', 'Japanese', 'What it is'].map(h => (
                          <th key={h} style={{ textAlign: 'left', padding: '8px 10px', color: '#9a8a9a', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Bunka', '文化', 'All-purpose. Tall blade. K-tip point. YOUR TARGET PURCHASE.'],
                        ['Gyuto', '牛刀', "Japanese chef's knife. All-purpose. Thinner than French knife."],
                        ['Nakiri', '菜切り', 'Vegetable knife. Rectangular blade. Double-bevel. Your best current knife.'],
                        ['Sujihiki', '筋引き', 'Slicing knife. Long thin blade. For meat — one clean stroke per cut.'],
                        ['Honesuki', '骨スキ', 'Poultry deboning. Stiff triangular blade. Pointed tip for joints.'],
                        ['Petty', 'ペティ', 'Small utility knife. 90–180mm. Japanese utility/paring knife.'],
                      ].map(([type, jp, desc], i) => (
                        <tr key={type} style={{ borderBottom: '1px solid rgba(0,0,0,0.05)', background: i % 2 === 0 ? 'transparent' : 'rgba(212,85,143,0.02)' }}>
                          <td style={{ padding: '9px 10px', fontWeight: 700, color: '#1a1410' }}>{type}</td>
                          <td style={{ padding: '9px 10px', fontSize: 17 }}>{jp}</td>
                          <td style={{ padding: '9px 10px', color: '#4a3a4a' }}>{desc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div style={{ marginTop: 20, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12 }}>
                    {[
                      { title: '🔴 Carbon Steel', items: [['Shirogami #1/#2', 'Purest edge. Hard. Very reactive — needs drying after use.'], ['Aogami Super', 'More durable. Still reactive. Your Gyuto is this.']] },
                      { title: '🔵 Stainless Steel', items: [['SG2 / SPG2', 'Powder stainless. Excellent edge retention. Your Bunka target.'], ['VG10', 'Workhorse stainless. Reliable. Good for Honesuki.']] },
                      { title: '✨ Finishes', items: [['Tsuchime', 'Hammered texture. Food release. Your whole collection.'], ['Kurouchi', 'Dark forge scale. Develops character. Target for Sujihiki.']] },
                    ].map(sec => (
                      <div key={sec.title} style={{ background: 'rgba(212,85,143,0.04)', borderRadius: 10, padding: 14 }}>
                        <p style={{ fontWeight: 700, marginBottom: 10, color: '#d4558f' }}>{sec.title}</p>
                        {sec.items.map(([name, desc]) => (
                          <p key={name} style={{ fontSize: 13, color: '#4a3a4a', marginBottom: 6 }}>
                            <strong>{name}</strong> — {desc}
                          </p>
                        ))}
                      </div>
                    ))}
                  </div>
                  <div style={{ marginTop: 20 }}>
                    <p style={{ fontSize: 11, fontWeight: 700, color: '#9a8a9a', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 10 }}>In-Store Phrases</p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 8 }}>
                      {[
                        ['Ask for hammered Bunka', 'Tsuchime no Bunka arimasu ka?', '槌目の文化ありますか？'],
                        ['May I hold it?', 'Mite mo ii desu ka?', '見てもいいですか？'],
                        ['How much is this?', 'Kore wa ikura desu ka?', 'これはいくらですか？'],
                        ['Tax exemption please', 'Menzetsu onegaishimasu', '免税お願いします'],
                        ['What steel is this?', 'Hagane wa nan desu ka?', '鋼は何ですか？'],
                      ].map(([en, romaji, jp]) => (
                        <div key={en} style={{ background: '#fff', borderRadius: 8, padding: '10px 12px', border: '1px solid rgba(212,85,143,0.1)' }}>
                          <div style={{ fontSize: 11, color: '#9a8a9a', marginBottom: 3 }}>{en}</div>
                          <div style={{ fontSize: 13, fontWeight: 600 }}>{romaji}</div>
                          <div style={{ fontSize: 14 }}>{jp}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </details>
            </div>
          )}

          {/* ═══ WATCHES ═════════════════════════════ */}
          {tab === 'watches' && (
            <div>
              <SectionHdr emoji="⌚" title="Watch Wishlist"
                sub="Budget up to €1,000 per watch · Warm gold tones · Dress pieces and complications only — no sports watches"
              />
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20, marginBottom: 48 }}>
                {WATCHES.map((w, i) => (
                  <div key={i} style={{
                    background: '#fff', borderRadius: 16, padding: 22,
                    border: '1px solid rgba(0,0,0,0.07)',
                    borderTop: i === 0 ? '3px solid #d4558f' : undefined,
                    boxShadow: '0 2px 14px rgba(0,0,0,0.05)',
                    display: 'flex', flexDirection: 'column', gap: 8,
                  }}>
                    {i === 0 && <span style={{ fontSize: 10, fontWeight: 800, color: '#d4558f', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Top Pick</span>}
                    <h3 style={{ margin: 0, fontSize: 18 }}>{w.name}</h3>
                    {w.ref && <p style={{ margin: 0, fontSize: 12, color: '#c0a0b0' }}>Ref: {w.ref}</p>}
                    <div style={{ display: 'flex', gap: 8, alignItems: 'baseline' }}>
                      <span style={{ fontWeight: 800, color: '#d4558f', fontSize: 17 }}>{w.budget}</span>
                      <span style={{ fontSize: 13, color: '#9a8a9a' }}>{w.yen}</span>
                    </div>
                    <p style={{ margin: 0, fontSize: 14, color: '#4a3a4a', lineHeight: 1.55 }}>{w.notes}</p>
                  </div>
                ))}
              </div>
              <h3 style={{ marginBottom: 18 }}>Best Watch Shops</h3>
              <ShopGrid shops={WATCH_SHOPS} />
            </div>
          )}

          {/* ═══ DENIM ═══════════════════════════════ */}
          {tab === 'denim' && (
            <div>
              <SectionHdr emoji="👖" title="Selvedge Denim Guide"
                sub="Japanese selvedge only · Budget €250–400 per pair · Free chain-stitch hemming at most stores"
              />
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 20, marginBottom: 40 }}>
                {DENIM_BRANDS.map((d, i) => (
                  <div key={i} style={{
                    background: '#fff', borderRadius: 16, padding: 20,
                    border: '1px solid rgba(0,0,0,0.07)',
                    borderTop: d.priority ? '3px solid #d4558f' : undefined,
                    boxShadow: '0 2px 14px rgba(0,0,0,0.05)',
                    display: 'flex', flexDirection: 'column', gap: 8,
                  }}>
                    {d.priority && <span style={{ fontSize: 10, fontWeight: 800, color: '#d4558f', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Priority</span>}
                    <h3 style={{ margin: 0, fontSize: 17 }}>{d.brand}</h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                      <CityChip city={d.city} />
                      <span style={{ fontSize: 12, color: '#9a8a9a' }}>{d.area}</span>
                    </div>
                    <TypeTag label={d.style} />
                    <span style={{ fontWeight: 800, color: '#d4558f', fontSize: 16 }}>{d.price}</span>
                    <p style={{ margin: 0, fontSize: 13, color: '#4a3a4a', lineHeight: 1.55 }}>{d.notes}</p>
                    <MapBtn name={d.brand} city={d.city === 'Multiple' ? 'Japan' : d.city} />
                  </div>
                ))}
              </div>
              <div style={{
                background: 'rgba(212,85,143,0.04)', border: '1px solid rgba(212,85,143,0.15)',
                borderRadius: 14, padding: '20px 24px',
              }}>
                <p style={{ fontWeight: 700, color: '#d4558f', marginBottom: 14, fontSize: 15 }}>Denim Tips</p>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {DENIM_TIPS.map((t, i) => (
                    <li key={i} style={{ display: 'flex', gap: 10, fontSize: 14, color: '#4a3a4a' }}>
                      <span style={{ color: '#d4558f', flexShrink: 0, fontWeight: 700 }}>→</span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* ═══ VINTAGE ═════════════════════════════ */}
          {tab === 'vintage' && (
            <div>
              <SectionHdr emoji="🛍️" title="Vintage Shopping"
                sub="Best vintage & pre-owned luxury across all three cities · Always carry passport for tax exemption"
              />

              <CitySection emoji="🗼" city="Tokyo" />
              <div style={{ marginBottom: 8 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                  <span style={{ fontWeight: 700, fontSize: 14, color: '#1a1410' }}>Harajuku</span>
                  <span style={{ fontSize: 12, color: '#9a8a9a' }}>Curated · High-end archive</span>
                </div>
                <ShopGrid shops={VINTAGE_TOKYO_HARAJUKU} />
              </div>
              <div style={{ marginBottom: 8, marginTop: 28 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                  <span style={{ fontWeight: 700, fontSize: 14, color: '#1a1410' }}>Shimokitazawa</span>
                  <span style={{ fontSize: 12, color: '#9a8a9a' }}>Bohemian · Budget a full afternoon</span>
                </div>
                <ShopGrid shops={VINTAGE_TOKYO_SHIMOKITA} />
              </div>

              <CitySection emoji="🏯" city="Osaka" />
              <ShopGrid shops={VINTAGE_OSAKA} />

              <CitySection emoji="🌸" city="Kyoto" />
              <ShopGrid shops={VINTAGE_KYOTO} />
            </div>
          )}

          {/* ═══ CLOTHING ════════════════════════════ */}
          {tab === 'clothing' && (
            <div>
              <SectionHdr emoji="👕" title="Japanese Clothing"
                sub="Four aesthetics: Streetwear · Avant-garde · Workwear / Folk Art · Artisan Traditional"
              />
              <ShopGrid shops={CLOTHING_SHOPS} />
            </div>
          )}

        </div>
      </div>
    </div>
  )
}
