import { useState } from 'react'
import { mapsUrl } from '../utils/maps'
import { useTripData } from '../hooks/useTripData'
import { useTripPlan } from '../context/TripPlanContext'

// ── Mini Components ────────────────────────────────────────────

function CityChip({ city, CITY_STYLE }) {
  const s = (CITY_STYLE && (CITY_STYLE[city] || CITY_STYLE.Multiple)) || { bg: '#f0f0f0', color: '#555', border: '#ddd' }
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
      background: 'rgba(var(--color-primary-rgb), 0.08)', color: '#a03070', fontWeight: 500,
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
        background: 'rgba(var(--color-primary-rgb), 0.09)', color: '#c0356e',
        border: '1px solid rgba(var(--color-primary-rgb), 0.2)',
        textDecoration: 'none', whiteSpace: 'nowrap',
      }}
    >
      📍 Open in Maps
    </a>
  )
}

function ShopCard({ name, city, area, rating, reviews, type, notes, priority, highlight, CITY_STYLE }) {
  return (
    <div style={{
      background: '#fff',
      border: '1px solid rgba(0,0,0,0.07)',
      borderTop: priority ? '3px solid var(--color-primary)' : undefined,
      borderRadius: 16, padding: 20,
      boxShadow: '0 2px 14px rgba(0,0,0,0.05)',
      display: 'flex', flexDirection: 'column', gap: 10,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}>
        <h4 style={{ margin: 0, fontSize: 15, fontFamily: 'inherit', fontWeight: 700, color: '#1a1410', lineHeight: 1.3 }}>{name}</h4>
        {(highlight || priority) && (
          <span style={{
            fontSize: 9, fontWeight: 800, padding: '3px 8px', borderRadius: 6,
            background: 'var(--color-primary)', color: '#fff', whiteSpace: 'nowrap',
            letterSpacing: '0.06em', textTransform: 'uppercase', flexShrink: 0,
          }}>{highlight || 'Priority'}</span>
        )}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
        <CityChip city={city} CITY_STYLE={CITY_STYLE} />
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

function CitySectionHdr({ emoji, city }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '40px 0 18px' }}>
      <span style={{ fontSize: 24 }}>{emoji}</span>
      <h3 style={{ margin: 0, fontSize: 20 }}>{city}</h3>
    </div>
  )
}

function ShopGrid({ shops, CITY_STYLE }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
      gap: 20, marginBottom: 8,
    }}>
      {shops.map((s, i) => <ShopCard key={i} {...s} CITY_STYLE={CITY_STYLE} />)}
    </div>
  )
}

// ── Section Renderers ──────────────────────────────────────────

function ShopGridSection({ section, CITY_STYLE }) {
  return (
    <div style={{ marginBottom: 40 }}>
      {section.title && <SectionHdr emoji={section.emoji} title={section.title} sub={section.sub} />}
      <ShopGrid shops={section.shops} CITY_STYLE={CITY_STYLE} />
    </div>
  )
}

function WishlistSection({ section, PRIORITY_COLOR }) {
  return (
    <div style={{ marginBottom: 48 }}>
      {section.title && <SectionHdr emoji={section.emoji} title={section.title} sub={section.sub} />}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {section.items.map((k, i) => {
          const accent = (PRIORITY_COLOR && PRIORITY_COLOR[k.priority]) || 'var(--color-primary)'
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
              {k.candidates?.length > 0 && (
                <div>
                  <div style={{ fontSize: 11, color: '#c0a0b0', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>Top Candidates</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    {k.candidates.map((c, ci) => (
                      <div key={ci} style={{
                        background: 'rgba(var(--color-primary-rgb), 0.04)', border: '1px solid rgba(var(--color-primary-rgb), 0.1)',
                        borderRadius: 10, padding: '10px 14px',
                        display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10, alignItems: 'center',
                      }}>
                        <div style={{ flex: 1 }}>
                          <span style={{ fontWeight: 700, fontSize: 13, color: '#1a1410' }}>{c.name}</span>
                          <span style={{ fontSize: 11, color: '#9a8a9a', marginLeft: 8 }}>{c.steel}</span>
                          {c.note && <span style={{ fontSize: 11, color: '#c0356e', marginLeft: 8 }}>— {c.note}</span>}
                        </div>
                        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                          <span style={{ fontWeight: 700, color: 'var(--color-primary)', fontSize: 15 }}>{c.price}</span>
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
    </div>
  )
}

function WatchWishlistSection({ section }) {
  return (
    <div style={{ marginBottom: 48 }}>
      {section.title && <SectionHdr emoji={section.emoji} title={section.title} sub={section.sub} />}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
        {section.items.map((w, i) => (
          <div key={i} style={{
            background: '#fff', borderRadius: 16, padding: 22,
            border: '1px solid rgba(0,0,0,0.07)',
            borderTop: i === 0 ? '3px solid var(--color-primary)' : undefined,
            boxShadow: '0 2px 14px rgba(0,0,0,0.05)',
            display: 'flex', flexDirection: 'column', gap: 8,
          }}>
            {i === 0 && <span style={{ fontSize: 10, fontWeight: 800, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Top Pick</span>}
            <h3 style={{ margin: 0, fontSize: 18 }}>{w.name}</h3>
            {w.ref && <p style={{ margin: 0, fontSize: 12, color: '#c0a0b0' }}>Ref: {w.ref}</p>}
            <div style={{ display: 'flex', gap: 8, alignItems: 'baseline' }}>
              <span style={{ fontWeight: 800, color: 'var(--color-primary)', fontSize: 17 }}>{w.budget}</span>
              {w.yen && <span style={{ fontSize: 13, color: '#9a8a9a' }}>{w.yen}</span>}
            </div>
            <p style={{ margin: 0, fontSize: 14, color: '#4a3a4a', lineHeight: 1.55 }}>{w.notes}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function BrandGridSection({ section, CITY_STYLE }) {
  return (
    <div style={{ marginBottom: 40 }}>
      {section.title && <SectionHdr emoji={section.emoji} title={section.title} sub={section.sub} />}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 20, marginBottom: 16 }}>
        {section.items.map((d, i) => (
          <div key={i} style={{
            background: '#fff', borderRadius: 16, padding: 20,
            border: '1px solid rgba(0,0,0,0.07)',
            borderTop: d.priority ? '3px solid var(--color-primary)' : undefined,
            boxShadow: '0 2px 14px rgba(0,0,0,0.05)',
            display: 'flex', flexDirection: 'column', gap: 8,
          }}>
            {d.priority && <span style={{ fontSize: 10, fontWeight: 800, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Priority</span>}
            <h3 style={{ margin: 0, fontSize: 17 }}>{d.brand || d.name}</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
              <CityChip city={d.city} CITY_STYLE={CITY_STYLE} />
              {d.area && <span style={{ fontSize: 12, color: '#9a8a9a' }}>{d.area}</span>}
            </div>
            {d.style && <TypeTag label={d.style} />}
            {d.price && <span style={{ fontWeight: 800, color: 'var(--color-primary)', fontSize: 16 }}>{d.price}</span>}
            <p style={{ margin: 0, fontSize: 13, color: '#4a3a4a', lineHeight: 1.55 }}>{d.notes}</p>
            <MapBtn name={d.brand || d.name} city={d.city === 'Multiple' ? 'Japan' : d.city} />
          </div>
        ))}
      </div>
    </div>
  )
}

function TipsSection({ section }) {
  return (
    <div style={{
      background: 'rgba(var(--color-primary-rgb), 0.04)', border: '1px solid rgba(var(--color-primary-rgb), 0.15)',
      borderRadius: 14, padding: '20px 24px', marginBottom: 24,
    }}>
      {section.title && <p style={{ fontWeight: 700, color: 'var(--color-primary)', marginBottom: 14, fontSize: 15 }}>{section.title}</p>}
      <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
        {section.tips.map((t, i) => (
          <li key={i} style={{ display: 'flex', gap: 10, fontSize: 14, color: '#4a3a4a' }}>
            <span style={{ color: 'var(--color-primary)', flexShrink: 0, fontWeight: 700 }}>→</span>
            {t}
          </li>
        ))}
      </ul>
    </div>
  )
}

function CitySectionsSection({ section, CITY_STYLE }) {
  return (
    <div>
      {section.title && <SectionHdr emoji={section.emoji} title={section.title} sub={section.sub} />}
      {section.cities.map((cityBlock, ci) => (
        <div key={ci}>
          <CitySectionHdr emoji={cityBlock.emoji} city={cityBlock.city} />
          {cityBlock.neighbourhoods ? (
            cityBlock.neighbourhoods.map((nb, ni) => (
              <div key={ni} style={{ marginBottom: 28 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                  <span style={{ fontWeight: 700, fontSize: 14, color: '#1a1410' }}>{nb.name}</span>
                  {nb.sub && <span style={{ fontSize: 12, color: '#9a8a9a' }}>{nb.sub}</span>}
                </div>
                <ShopGrid shops={nb.shops} CITY_STYLE={CITY_STYLE} />
              </div>
            ))
          ) : (
            <ShopGrid shops={cityBlock.shops} CITY_STYLE={CITY_STYLE} />
          )}
        </div>
      ))}
    </div>
  )
}

function JapanKnifeReference() {
  return (
    <details style={{ marginTop: 40, border: '1px solid rgba(var(--color-primary-rgb), 0.15)', borderRadius: 14, background: '#fff' }}>
      <summary style={{ cursor: 'pointer', fontWeight: 700, color: 'var(--color-primary)', fontSize: 15, padding: '18px 20px' }}>
        📖 Knife Reference Guide — Types, Steels & Finishes
      </summary>
      <div style={{ padding: '0 20px 20px', overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
          <thead>
            <tr style={{ borderBottom: '2px solid rgba(var(--color-primary-rgb), 0.12)' }}>
              {['Type', 'Japanese', 'What it is'].map(h => (
                <th key={h} style={{ textAlign: 'left', padding: '8px 10px', color: '#9a8a9a', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              ['Bunka', '文化', 'All-purpose. Tall blade. K-tip point.'],
              ['Gyuto', '牛刀', "Japanese chef's knife. All-purpose. Thinner than French knife."],
              ['Nakiri', '菜切り', 'Vegetable knife. Rectangular blade. Double-bevel.'],
              ['Sujihiki', '筋引き', 'Slicing knife. Long thin blade. For meat — one clean stroke per cut.'],
              ['Honesuki', '骨スキ', 'Poultry deboning. Stiff triangular blade. Pointed tip for joints.'],
              ['Petty', 'ペティ', 'Small utility knife. 90–180mm.'],
            ].map(([type, jp, desc], i) => (
              <tr key={type} style={{ borderBottom: '1px solid rgba(0,0,0,0.05)', background: i % 2 === 0 ? 'transparent' : 'rgba(var(--color-primary-rgb), 0.02)' }}>
                <td style={{ padding: '9px 10px', fontWeight: 700, color: '#1a1410' }}>{type}</td>
                <td style={{ padding: '9px 10px', fontSize: 17 }}>{jp}</td>
                <td style={{ padding: '9px 10px', color: '#4a3a4a' }}>{desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ marginTop: 20, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12 }}>
          {[
            { title: '🔴 Carbon Steel', items: [['Shirogami #1/#2', 'Purest edge. Hard. Very reactive.'], ['Aogami Super', 'More durable. Still reactive.']] },
            { title: '🔵 Stainless Steel', items: [['SG2 / SPG2', 'Powder stainless. Excellent edge retention.'], ['VG10', 'Workhorse stainless. Reliable.']] },
            { title: '✨ Finishes', items: [['Tsuchime', 'Hammered texture. Food release.'], ['Kurouchi', 'Dark forge scale. Develops patina.']] },
          ].map(sec => (
            <div key={sec.title} style={{ background: 'rgba(var(--color-primary-rgb), 0.04)', borderRadius: 10, padding: 14 }}>
              <p style={{ fontWeight: 700, marginBottom: 10, color: 'var(--color-primary)' }}>{sec.title}</p>
              {sec.items.map(([name, desc]) => (
                <p key={name} style={{ fontSize: 13, color: '#4a3a4a', marginBottom: 6 }}>
                  <strong>{name}</strong> — {desc}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </details>
  )
}

function SectionRenderer({ section, CITY_STYLE, PRIORITY_COLOR }) {
  if (section.type === 'shop-grid')             return <ShopGridSection section={section} CITY_STYLE={CITY_STYLE} />
  if (section.type === 'wishlist')              return <WishlistSection section={section} PRIORITY_COLOR={PRIORITY_COLOR} />
  if (section.type === 'watch-wishlist')        return <WatchWishlistSection section={section} />
  if (section.type === 'brand-grid')            return <BrandGridSection section={section} CITY_STYLE={CITY_STYLE} />
  if (section.type === 'tips')                  return <TipsSection section={section} />
  if (section.type === 'city-sections')         return <CitySectionsSection section={section} CITY_STYLE={CITY_STYLE} />
  if (section.type === 'japan-knife-reference') return <JapanKnifeReference />
  return null
}

// ── Main Component ─────────────────────────────────────────────

export default function Shopping() {
  const { plan } = useTripPlan()
  const { SHOPPING_TABS, CITY_STYLE, PRIORITY_COLOR, TRIP_META } = useTripData()

  const tabIds = (SHOPPING_TABS || []).map(t => t.id)
  const visibleTabs = plan.built && plan.interests.some(i => tabIds.includes(i))
    ? SHOPPING_TABS.filter(t => plan.interests.includes(t.id))
    : SHOPPING_TABS

  const [tab, setTab] = useState(visibleTabs[0]?.id)
  const activeTab = visibleTabs.find(t => t.id === tab) || visibleTabs[0]

  return (
    <div style={{ minHeight: '100vh' }}>

      {/* ── Page header ──────────────────────────────── */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(var(--color-primary-rgb), 0.12) 0%, rgba(var(--color-primary-rgb), 0.04) 100%)',
        borderBottom: '1px solid rgba(var(--color-primary-rgb), 0.12)',
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', padding: '52px 0 28px' }}>
            <h1 style={{
              fontSize: 42, marginBottom: 10,
              background: 'linear-gradient(135deg, var(--color-primary), #9b59a6)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>Shopping Guide</h1>
            <p style={{ color: '#7a5070', fontSize: 16, marginBottom: 18 }}>
              {TRIP_META.name} — {visibleTabs.map(t => t.label).join(' · ')}
            </p>
            <span style={{
              padding: '5px 14px', borderRadius: 20, fontSize: 12, fontWeight: 600,
              background: 'rgba(var(--color-primary-rgb), 0.1)', border: '1px solid rgba(var(--color-primary-rgb), 0.3)',
              color: 'var(--color-primary)',
            }}>🛂 Always carry passport — tax free</span>
          </div>

          {/* ── Tab bar ────────────────────────────── */}
          <div style={{
            display: 'flex', overflowX: 'auto', scrollbarWidth: 'none',
            borderBottom: '2px solid rgba(var(--color-primary-rgb), 0.1)',
          }}>
            {visibleTabs.map(t => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                style={{
                  padding: '14px 24px', border: 'none', background: 'none',
                  cursor: 'pointer', fontFamily: 'inherit', fontSize: 14, fontWeight: 600,
                  color: activeTab?.id === t.id ? 'var(--color-primary)' : '#9a7a8a',
                  borderBottom: activeTab?.id === t.id ? '2px solid var(--color-primary)' : '2px solid transparent',
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
          {activeTab?.sections?.map((section, i) => (
            <SectionRenderer
              key={i}
              section={section}
              CITY_STYLE={CITY_STYLE}
              PRIORITY_COLOR={PRIORITY_COLOR}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
