import { useParams, Link } from 'react-router-dom'
import { CITIES } from '../data/tripData'
import { mapsUrl } from '../utils/maps'

export default function CityDetail() {
  const { city: cityId } = useParams()
  const city = CITIES.find(c => c.id === cityId)

  if (!city) {
    return (
      <div className="section">
        <div className="container" style={{textAlign: 'center'}}>
          <h2>City not found</h2>
          <Link to="/cities" className="back-link" style={{marginTop: 20, display: 'inline-flex'}}>← Back to cities</Link>
        </div>
      </div>
    )
  }

  const categories = [
    { name: 'Food & Restaurants', emoji: '🍜', path: '/food', desc: 'Restaurants, cafes, bars & street food' },
    { name: 'Day-by-Day Plan', emoji: '🗓️', path: '/itinerary', desc: 'Full 24-day itinerary' },
    { name: 'All Cities', emoji: '🗺️', path: '/cities', desc: 'Explore every city on the route' },
  ]

  return (
    <div style={{minHeight: '100vh'}}>
      {/* City hero image */}
      <div className="city-hero">
        <img src={city.image} alt={city.name} />
        <div className="city-hero-overlay" />
        <div className="city-hero-content" style={{width: '100%'}}>
          <h1>{city.emoji} {city.name}</h1>
          <p className="city-meta">{city.hotel}</p>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <Link to="/cities" className="back-link">← All Cities</Link>

          <p style={{fontSize: 17, color: '#5a3d4a', marginBottom: 40, lineHeight: 1.7}}>{city.desc}</p>

          {/* Category cards */}
          <div className="cat-grid" style={{marginBottom: 48}}>
            {categories.map((cat) => (
              <Link key={cat.name} to={cat.path} style={{textDecoration: 'none'}}>
                <div className="cat-card">
                  <span className="cat-emoji">{cat.emoji}</span>
                  <h3>{cat.name}</h3>
                  <p>{cat.desc}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Highlights */}
          {city.highlights?.length > 0 && (
            <div className="city-section">
              <div className="city-title">✨ Must-See Highlights</div>
              <ul className="highlight-list">
                {city.highlights.map((h, i) => (
                  <li key={i} style={{display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 8}}>
                    <span>{h}</span>
                    <a href={mapsUrl(h, city.name)} target="_blank" rel="noopener noreferrer"
                       style={{flexShrink: 0, fontSize: 12, color: '#d4558f', textDecoration: 'none', opacity: 0.8}}>
                      📍 Maps
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tips */}
          {city.tips?.length > 0 && (
            <div className="city-section">
              <div className="city-title">💡 Local Tips</div>
              <ul className="tips-list">
                {city.tips.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
