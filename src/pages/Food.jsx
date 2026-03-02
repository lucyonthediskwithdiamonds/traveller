import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useTripData } from '../hooks/useTripData'
import { useTripPlan } from '../context/TripPlanContext'
import { mapsUrl } from '../utils/maps'

const CATEGORIES = [
  { id: 'all',        label: 'All' },
  { id: 'restaurant', label: 'Restaurant' },
  { id: 'bar',        label: 'Bar' },
  { id: 'cafe',       label: 'Cafe' },
  { id: 'bakery',     label: 'Bakery' },
]

// Infer Google Maps category from the place's type string
function inferCategory(type = '') {
  const t = type.toLowerCase()
  if (t.includes('bar') || t.includes('pub') || t.includes('izakaya') || t.includes('negroni') || t.includes('wine bar') || t.includes('cocktail') || t.includes('nightlife') || t.includes('tasting')) return 'bar'
  if (t.includes('boulangerie') || t.includes('bakery') || t.includes('patisserie') || t.includes('pasticceria') || t.includes('pastry shop') || t.includes('pastelaria')) return 'bakery'
  if (t.includes('café') || t.includes('cafe') || t.includes('coffee') || t.includes('tea house') || t.includes('historic café')) return 'cafe'
  return 'restaurant'
}

export default function Food() {
  const { plan } = useTripPlan()
  const { RESTAURANTS, CITIES } = useTripData()
  const [searchParams] = useSearchParams()

  const visibleCities = plan.built && plan.cities.length > 0
    ? CITIES.filter(c => plan.cities.includes(c.id))
    : CITIES

  const [activeCity, setActiveCity] = useState(() => {
    const param = searchParams.get('city')
    return visibleCities.find(c => c.id === param)?.id ?? visibleCities[0]?.id ?? CITIES[0]?.id
  })
  const [activeCategory, setActiveCategory] = useState('all')

  const allRestaurants = RESTAURANTS[activeCity] || []
  const restaurants = activeCategory === 'all'
    ? allRestaurants
    : allRestaurants.filter(r => inferCategory(r.type) === activeCategory)
  const city = CITIES.find(c => c.id === activeCity)

  return (
    <div>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(255,220,180,0.4), rgba(255,192,203,0.3))',
        padding: '60px 20px 48px',
        textAlign: 'center',
        borderBottom: '1px solid rgba(var(--color-primary-rgb), 0.15)',
      }}>
        <div style={{fontSize: 48, marginBottom: 12}}>🍜</div>
        <h1 style={{marginBottom: 10}}>Food & Drink</h1>
      </div>

      <div className="section">
        <div className="container">
          {/* City pill nav */}
          <div className="city-pill-nav">
            {visibleCities.map(c => (
              <button
                key={c.id}
                className={`city-pill ${activeCity === c.id ? 'active' : ''}`}
                onClick={() => setActiveCity(c.id)}
              >
                {c.emoji} {c.name}
              </button>
            ))}
          </div>

          {/* Category pill nav */}
          <div className="city-pill-nav" style={{marginTop: 12}}>
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                className={`city-pill ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* City heading */}
          {city && (
            <div style={{marginBottom: 36, marginTop: 32, display: 'flex', alignItems: 'center', gap: 16}}>
              <span style={{fontSize: 44}}>{city.emoji}</span>
              <div>
                <h2 style={{marginBottom: 4}}>{city.name}</h2>
              </div>
            </div>
          )}

          {/* Restaurant cards */}
          {restaurants.length === 0 ? (
            <div style={{textAlign: 'center', padding: 60, color: '#9a7a8a'}}>
              <div style={{fontSize: 48, marginBottom: 16}}>🍽️</div>
              <p>No results for this filter</p>
            </div>
          ) : (
            <div className="grid">
              {restaurants.map((r, i) => (
                <div key={i} className="restaurant-card">
                  <h3>{r.name}</h3>
                  <div className="rest-meta">
                    <span className="tag">{r.type}</span>
                    <span className="price-badge">{r.price}</span>
                    {r.area && <span className="area-badge">📍 {r.area}</span>}
                  </div>
                  <div style={{display: 'flex', gap: 12, alignItems: 'center', marginBottom: r.notes ? 10 : 0}}>
                    {r.rating && r.rating !== '—' && (
                      <span className="rating">
                        ⭐ {r.rating.includes('Bib') ? '🔴 ' + r.rating : r.rating}
                      </span>
                    )}
                  </div>
                  {r.notes && (
                    <p style={{fontSize: 13, color: '#7a6a74', fontStyle: 'italic', marginTop: 6, marginBottom: 6}}>
                      💬 {r.notes}
                    </p>
                  )}
                  <a href={mapsUrl(`${r.name} ${r.area || ''}`, city?.name || activeCity)}
                     target="_blank" rel="noopener noreferrer"
                     style={{display: 'inline-block', marginTop: 4, fontSize: 12, color: 'var(--color-primary)', textDecoration: 'none', fontWeight: 500}}>
                    📍 View on Maps
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
