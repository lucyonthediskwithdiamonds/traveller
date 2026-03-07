import { Link } from 'react-router-dom'
import { useTripData } from '../hooks/useTripData'
import { useTripPlan } from '../context/TripPlanContext'

export default function CitySelect() {
  const { CITIES, TRIP_META } = useTripData()
  const { plan } = useTripPlan()

  const visibleCities = plan.built && plan.cities.length > 0
    ? CITIES.filter(c => plan.cities.includes(c.id))
    : CITIES

  const heading = plan.built && plan.cities.length > 0 ? 'Your Cities' : 'Choose Your City'

  return (
    <div className="section">
      <div className="container">
        <div style={{textAlign: 'center', marginBottom: 56}}>
          <h1 style={{marginBottom: 12}}>{heading}</h1>
        </div>

        <div className="city-grid">
          {visibleCities.map((city) => (
            <Link key={city.id} to={`/cities/${city.id}`} className="city-card">
              <img
                src={city.image}
                alt={city.name}
                className="city-card-img"
                loading="lazy"
                onError={e => {
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.parentElement.style.background =
                    `linear-gradient(135deg, ${city.color}cc 0%, ${city.color}66 100%)`
                }}
              />
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

      </div>
    </div>
  )
}
