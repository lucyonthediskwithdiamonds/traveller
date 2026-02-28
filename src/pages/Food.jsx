import { useState } from 'react'
import { RESTAURANTS, CITIES } from '../data/tripData'
import { mapsUrl } from '../utils/maps'

export default function Food() {
  const [activeCity, setActiveCity] = useState('tokyo')
  const restaurants = RESTAURANTS[activeCity] || []
  const city = CITIES.find(c => c.id === activeCity)

  return (
    <div>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(255,220,180,0.4), rgba(255,192,203,0.3))',
        padding: '60px 20px 48px',
        textAlign: 'center',
        borderBottom: '1px solid rgba(212,85,143,0.15)',
      }}>
        <div style={{fontSize: 48, marginBottom: 12}}>🍜</div>
        <h1 style={{marginBottom: 10}}>Food & Restaurants</h1>
        <p style={{color: '#7a5060', fontSize: 17}}>40+ curated picks across 9 cities — sourced from wildon.earth/japan</p>
      </div>

      <div className="section">
        <div className="container">
          {/* City pill nav */}
          <div className="city-pill-nav">
            {CITIES.map(c => (
              <button
                key={c.id}
                className={`city-pill ${activeCity === c.id ? 'active' : ''}`}
                onClick={() => setActiveCity(c.id)}
              >
                {c.emoji} {c.name}
              </button>
            ))}
          </div>

          {/* City heading */}
          {city && (
            <div style={{marginBottom: 36, display: 'flex', alignItems: 'center', gap: 16}}>
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
              <p>No restaurants listed for this city yet</p>
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
                     style={{display: 'inline-block', marginTop: 4, fontSize: 12, color: '#d4558f', textDecoration: 'none', fontWeight: 500}}>
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
