import { Link } from 'react-router-dom'
import { CITIES, TRIP, TRIP_META } from '../config/activeTrip'

export default function CitySelect() {
  return (
    <div className="section">
      <div className="container">
        <div style={{textAlign: 'center', marginBottom: 56}}>
          <h1 style={{marginBottom: 12}}>Choose Your City</h1>
          <p style={{fontSize: 17, color: '#7a5060'}}>{TRIP.travelers}</p>
        </div>

        <div className="city-grid">
          {CITIES.map((city) => (
            <Link key={city.id} to={`/cities/${city.id}`} className="city-card">
              <img src={city.image} alt={city.name} className="city-card-img" />
              <div className="city-card-overlay" style={{background: `linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.1) 55%, transparent 100%)`}} />
              <div className="city-card-body">
                <span className="city-card-emoji">{city.emoji}</span>
                <div className="city-card-name">{city.name}</div>
                <div className="city-card-dates">{city.hotel.split('/')[0].trim()}</div>
                <div className="city-card-desc">{city.desc}</div>
              </div>
            </Link>
          ))}
        </div>

        <div style={{
          background: 'rgba(244, 213, 224, 0.2)',
          padding: '28px 32px',
          borderRadius: 16,
          textAlign: 'center',
          border: '1px solid rgba(212, 85, 143, 0.15)'
        }}>
          <p style={{color: '#6b4a5a', fontSize: 15}}>
            {TRIP_META.citiesTagline}
          </p>
        </div>
      </div>
    </div>
  )
}
