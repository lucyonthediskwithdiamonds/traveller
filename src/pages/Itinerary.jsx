import { useState } from 'react'
import { ITINERARY, CITIES } from '../data/tripData'
import { mapsUrl } from '../utils/maps'

const cityColors = Object.fromEntries(CITIES.map(c => [c.name, c.color]))
const cityEmojis = Object.fromEntries(CITIES.map(c => [c.name, c.emoji]))

// Special highlight for sakura days
function isSakuraDay(day) {
  return day.highlights.some(h => h.includes('🌸') || h.toLowerCase().includes('sakura') || h.toLowerCase().includes('cherry'))
}

export default function Itinerary() {
  const [filter, setFilter] = useState('All')
  const cities = ['All', ...Array.from(new Set(ITINERARY.map(d => d.city)))]
  const filtered = filter === 'All' ? ITINERARY : ITINERARY.filter(d => d.city === filter)

  return (
    <div>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(255,192,203,0.4), rgba(216,191,216,0.3))',
        padding: '60px 20px 48px',
        textAlign: 'center',
        borderBottom: '1px solid rgba(212,85,143,0.15)',
      }}>
        <h1 style={{marginBottom: 12}}>24 Days in Japan</h1>
        {/* <p style={{color: '#7a5060', fontSize: 17, marginBottom: 28}}>March 12 – April 4, 2026 · Simon & Monize</p> */}

        {/* City filter pills */}
        <div className="city-pill-nav">
          {cities.map(c => (
            <button
              key={c}
              className={`city-pill ${filter === c ? 'active' : ''}`}
              onClick={() => setFilter(c)}
            >
              {c !== 'All' && (cityEmojis[c] ? cityEmojis[c] + ' ' : '')}
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="itinerary-timeline">
            {filtered.map((day) => {
              const color = cityColors[day.city] || '#d4558f'
              const emoji = cityEmojis[day.city] || '📍'
              const sakura = isSakuraDay(day)

              return (
                <div key={day.day} className="itinerary-day" style={{borderLeft: `4px solid ${color}20`}}>
                  <div className="day-header">
                    <span className="day-num" style={{background: `linear-gradient(135deg, ${color}, ${color}cc)`}}>
                      Day {day.day}
                    </span>
                    <span className="day-city">
                      {emoji} {day.city}
                      {sakura && <span style={{marginLeft: 8}}>🌸</span>}
                    </span>
                    <span className="day-date">{day.date}</span>
                  </div>

                  {day.area && (
                    <p style={{fontSize: 13, color: '#9a7a8a', marginBottom: 12, fontStyle: 'italic'}}>
                      📍 {day.area}
                    </p>
                  )}

                  {day.hotel && day.hotel !== '—' && (
                    <p style={{fontSize: 12, color: '#baa0a8', marginBottom: 12}}>
                      🏨 {day.hotel}
                    </p>
                  )}

                  <div className="day-highlights">
                    {day.highlights.map((h, i) => (
                      <a key={i} href={mapsUrl(h, day.city)} target="_blank" rel="noopener noreferrer"
                         className="day-highlight" title={`Open ${h.split(/[—(]/)[0].trim()} in Google Maps`}
                         style={{textDecoration: 'none', cursor: 'pointer'}}>
                        {h} 📍
                      </a>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
