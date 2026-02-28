import { Link } from 'react-router-dom'
import { TRIP, CITIES } from '../data/tripData'

const HIGHLIGHTS = [
  { emoji: '🌸', title: 'Sakura Season', desc: 'Cherry blossoms peak March–April along Meguro River and Chidorigafuchi' },
  { emoji: '🍜', title: 'Culinary Journey', desc: 'From Osaka street takoyaki to Kyoto kaiseki to Tokyo ramen' },
  { emoji: '♨️', title: 'Onsen & Ryokan', desc: 'Snow monkeys at Jigokudani, Hakone hot springs, Koyasan temple stay' },
  { emoji: '🗻', title: 'Mt. Fuji Views', desc: 'Hakone ropeway, Chureito Pagoda, and Lake Ashi pirate cruise' },
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <div className="hero">
        <div className="hero-content">
          <div style={{fontSize: 22, marginBottom: 16, color: '#c06090', fontFamily: 'Kosugi Maru, sans-serif'}}>
            ✿ Simon & Monize ✿
          </div>
          <h1>Japan Trip 2026</h1>
          {/* <p className="dates">{TRIP.dates}</p> */}
          {/* <p className="subtitle" style={{marginTop: 12}}>{TRIP.duration} · {TRIP.route.split(' → ').length} cities</p> */}
          <p className="route-text">{TRIP.route}</p>

          <div className="stat-pills">
            <span className="stat-pill">🗺️ {TRIP.route.split(' → ').length} Cities</span>
            <span className="stat-pill">🌸 Sakura Peak</span>
            <span className="stat-pill">🏨 Hotels + Ryokan</span>
            <span className="stat-pill">🍱 40+ Restaurants</span>
          </div>
        </div>

        {/* Anime chibi decorations */}
        <div className="kawaii-deco" style={{right: '8%', top: '15%', fontSize: 90, opacity: 0.12, transform: 'rotate(-8deg)'}}>🌸</div>
        <div className="kawaii-deco" style={{left: '6%', bottom: '20%', fontSize: 80, opacity: 0.10, transform: 'rotate(12deg)'}}>⛩️</div>
        <div className="kawaii-deco" style={{right: '12%', bottom: '18%', fontSize: 70, opacity: 0.10}}>🗻</div>
      </div>

      {/* City grid preview */}
      <div className="section">
        <div className="container">
          <div className="section-header">
            <h2>9 Cities to Explore</h2>
            <p>Click any city to see highlights, restaurants, and tips</p>
          </div>

          <div className="city-grid">
            {CITIES.map((city) => (
              <Link key={city.id} to={`/cities/${city.id}`} className="city-card">
                <img src={city.image} alt={city.name} className="city-card-img" />
                <div className="city-card-overlay" />
                <div className="city-card-body">
                  <span className="city-card-emoji">{city.emoji}</span>
                  <div className="city-card-name">{city.name}</div>
                  <div className="city-card-dates">{city.dates}</div>
                  <div className="city-card-desc">{city.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Highlights */}
      <div className="section" style={{background: 'rgba(244, 213, 224, 0.12)', borderTop: '1px solid rgba(212,85,143,0.12)'}}>
        <div className="container">
          <div className="section-header">
            <h2>Trip Highlights</h2>
            <p>The best of what awaits on this adventure</p>
          </div>
          <div className="grid">
            {HIGHLIGHTS.map((h) => (
              <div key={h.title} className="card" style={{textAlign: 'center', padding: 32}}>
                <div style={{fontSize: 48, marginBottom: 16}}>{h.emoji}</div>
                <h3>{h.title}</h3>
                <p style={{fontSize: 15, lineHeight: 1.6}}>{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick links */}
      <div className="section">
        <div className="container">
          <div className="section-header">
            <h2>Plan Your Days</h2>
            <p>Everything organised for the perfect trip</p>
          </div>
          <div className="grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))'}}>
            {[
              {label: '🗓️ Day-by-Day Itinerary', desc: 'All 24 days planned', to: '/itinerary'},
              {label: '🍜 Food & Restaurants', desc: '40+ curated picks by city', to: '/food'},
              {label: '🏙️ All Cities', desc: 'Highlights, hotels & tips', to: '/cities'},
            ].map(link => (
              <Link key={link.to} to={link.to} style={{textDecoration: 'none'}}>
                <div className="card" style={{textAlign: 'center', padding: 28, cursor: 'pointer'}}>
                  <div style={{fontSize: 32, marginBottom: 12}}>{link.label.split(' ')[0]}</div>
                  <h3 style={{fontSize: 16}}>{link.label.slice(3)}</h3>
                  <p>{link.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
