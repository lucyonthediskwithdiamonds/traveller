import { Link } from 'react-router-dom'
import { TRIP, CITIES, TRIP_META } from '../config/activeTrip'
import { useTripPlan } from '../context/TripPlanContext'

export default function Home() {
  const { plan, resetPlan } = useTripPlan()

  // Filter cities to the ones selected in the trip plan (or show all if none built / none selected)
  const visibleCities = plan.built && plan.cities.length > 0
    ? CITIES.filter(c => plan.cities.includes(c.id))
    : CITIES

  // Derive quick links — always show, but order by interests if plan is built
  const shoppingInterests = ['knives', 'watches', 'denim', 'vintage', 'clothing']
  const hasShoppingInterest = !plan.built || plan.interests.some(i => shoppingInterests.includes(i))
  const hasFoodInterest = !plan.built || plan.interests.includes('food') || plan.interests.length === 0

  return (
    <div>
      {/* Hero */}
      <div className="hero">
        <div className="hero-content">
          <div style={{fontSize: 13, marginBottom: 20, color: '#d4558f', fontFamily: 'Noto Sans JP, sans-serif', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 500}}>
            ✿ {TRIP.travelers} ✿
          </div>
          <h1>{TRIP_META.name} Trip</h1>
          <p className="route-text">{TRIP.route}</p>

          <div className="stat-pills">
            <span className="stat-pill">🗺️ {TRIP.route.split(' → ').length} Cities</span>
            <span className="stat-pill">🏨 Hotels + Ryokan</span>
            <span className="stat-pill">🍱 40+ Restaurants</span>
          </div>

          {/* Trip plan status */}
          {plan.built ? (
            <div style={{marginTop: 20, display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap'}}>
              <Link to="/plan" style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                padding: '8px 18px', borderRadius: 20, fontSize: 13, fontWeight: 600,
                background: 'rgba(255,255,255,0.85)', color: '#d4558f',
                border: '1.5px solid rgba(212,85,143,0.35)', textDecoration: 'none',
              }}>
                ✏️ Edit trip
              </Link>
              <button
                onClick={resetPlan}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  padding: '8px 18px', borderRadius: 20, fontSize: 13, fontWeight: 600,
                  background: 'transparent', color: 'rgba(255,255,255,0.75)',
                  border: '1.5px solid rgba(255,255,255,0.35)', cursor: 'pointer',
                  fontFamily: 'inherit',
                }}
              >
                Reset
              </button>
            </div>
          ) : (
            <div style={{marginTop: 20}}>
              <Link to="/plan" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '12px 28px', borderRadius: 24, fontSize: 15, fontWeight: 700,
                background: 'rgba(255,255,255,0.92)', color: '#d4558f',
                border: 'none', textDecoration: 'none',
                boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
              }}>
                🌸 Plan your trip
              </Link>
            </div>
          )}
        </div>

        {/* Decorations from flavour */}
        {TRIP_META.decorations.map((dec, i) => (
          <div key={i} className="kawaii-deco" style={{
            ...(i === 0 && { right: '8%', top: '15%' }),
            ...(i === 1 && { left: '6%', bottom: '20%' }),
            ...(i === 2 && { right: '12%', bottom: '18%' }),
            fontSize: [90, 80, 70][i],
            opacity: [0.18, 0.14, 0.14][i],
            transform: i === 0 ? 'rotate(-8deg)' : i === 1 ? 'rotate(12deg)' : undefined,
          }}>{dec}</div>
        ))}
      </div>

      {/* Trip plan summary banner (when built) */}
      {plan.built && plan.cities.length > 0 && (
        <div style={{
          background: 'rgba(212,85,143,0.07)',
          borderBottom: '1px solid rgba(212,85,143,0.12)',
          padding: '14px 20px',
          textAlign: 'center',
        }}>
          <p style={{margin: 0, fontSize: 14, color: '#7a3060'}}>
            Your trip: <strong>{plan.cities.length} {plan.cities.length === 1 ? 'city' : 'cities'}</strong>
            {plan.interests.length > 0 && <> · <strong>{plan.interests.length} interest{plan.interests.length !== 1 ? 's' : ''}</strong></>}
            {' '}— showing personalised content
          </p>
        </div>
      )}

      {/* City grid */}
      <div className="section">
        <div className="container">
          <div className="section-header">
            <h2>{plan.built && plan.cities.length > 0 ? 'Your Cities' : `${visibleCities.length} Cities to Explore`}</h2>
            <p>Click any city to see highlights, restaurants, and tips</p>
          </div>

          <div className="city-grid">
            {visibleCities.map((city) => (
              <Link key={city.id} to={`/cities/${city.id}`} className="city-card">
                <img src={city.image} alt={city.name} className="city-card-img" />
                <div className="city-card-overlay" />
                <div className="city-card-body">
                  <span className="city-card-emoji">{city.emoji}</span>
                  <div className="city-card-name">{city.name}</div>
                  <div className="city-card-dates">{city.desc.split('.')[0]}</div>
                  <div className="city-card-desc">{city.desc}</div>
                </div>
              </Link>
            ))}
          </div>

          {plan.built && plan.cities.length > 0 && plan.cities.length < CITIES.length && (
            <div style={{textAlign: 'center', marginTop: 16}}>
              <Link to="/cities" style={{fontSize: 14, color: '#d4558f', textDecoration: 'none', fontWeight: 600}}>
                View all {CITIES.length} cities →
              </Link>
            </div>
          )}
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
            {TRIP_META.highlights.map((h) => (
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
            <h2>Plan Your Trip</h2>
            <p>Everything organised for the perfect adventure</p>
          </div>
          <div className="grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))'}}>
            {[
              hasFoodInterest && {label: '🍜 Food & Restaurants', desc: '40+ curated picks by city', to: '/food'},
              hasShoppingInterest && {label: '🛍️ Shopping Guide', desc: 'Knives, watches, denim & vintage', to: '/shopping'},
              {label: '🏙️ All Cities', desc: 'Highlights, hotels & tips', to: '/cities'},
              {label: '🗾 Phrases', desc: `Speak a little ${TRIP_META.language}`, to: '/phrases'},
            ].filter(Boolean).map(link => (
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
