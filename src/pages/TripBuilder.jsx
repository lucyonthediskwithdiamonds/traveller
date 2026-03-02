import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { TRIP_REGISTRY } from '../trips/registry'
import { useTripPlan } from '../context/TripPlanContext'

const DESTINATIONS = [
  { id: 'japan',    name: 'Japan',    emoji: '🇯🇵', desc: 'Cherry blossoms, ancient temples, world-class food' },
  { id: 'spain',    name: 'Spain',    emoji: '🇪🇸', desc: 'Tapas culture, flamenco, Gaudí and Moorish castles' },
  { id: 'italy',    name: 'Italy',    emoji: '🇮🇹', desc: 'Renaissance art, Tuscan wine, coastal villages and pasta' },
  { id: 'greece',   name: 'Greece',   emoji: '🇬🇷', desc: 'Aegean islands, ancient ruins, olive groves and mezze' },
  { id: 'france',   name: 'France',   emoji: '🇫🇷', desc: 'Michelin dining, Provençal markets, châteaux and cafés' },
  { id: 'portugal', name: 'Portugal', emoji: '🇵🇹', desc: 'Fado, azulejo tiles, Douro wine and Atlantic seafood' },
  { id: 'thailand', name: 'Thailand', emoji: '🇹🇭', desc: 'Golden temples, street food markets and beach islands' },
  { id: 'turkey',   name: 'Turkey',   emoji: '🇹🇷', desc: 'Ottoman architecture, bosphorus sunsets and bazaar shopping' },
  { id: 'morocco',  name: 'Morocco',  emoji: '🇲🇦', desc: 'Medinas, spice souks, riads and Sahara sunsets' },
  { id: 'usa',      name: 'USA',      emoji: '🇺🇸', desc: 'National parks, jazz cities, coastal drives and diners' },
]

const UNIVERSAL_INTERESTS = [
  { id: 'restaurants', emoji: '🍽️', label: 'Restaurants',       desc: 'Local dining, from street food to fine dining' },
  { id: 'bars',        emoji: '🍸', label: 'Bars & Nightlife',   desc: 'Cocktail bars, wine bars, club nights' },
  { id: 'cafes',       emoji: '☕', label: 'Cafes & Coffee',     desc: 'Third-wave coffee, brunch spots, patisseries' },
  { id: 'shopping',    emoji: '🛍️', label: 'Shopping',          desc: 'Markets, boutiques, local crafts, souvenirs' },
  { id: 'sights',      emoji: '🏛️', label: 'Touristic Sites',   desc: 'Landmarks, UNESCO sites, historic monuments' },
  { id: 'photo-spots', emoji: '📸', label: 'Photo Locations',    desc: 'Viral views, hidden gems, iconic backdrops' },
  { id: 'culture',     emoji: '🎭', label: 'Culture & Art',      desc: 'Museums, galleries, theatre, local traditions' },
  { id: 'nature',      emoji: '🌿', label: 'Nature & Outdoors',  desc: 'Hikes, national parks, beaches, scenic drives' },
  { id: 'wellness',    emoji: '♨️', label: 'Wellness & Spas',   desc: 'Hammams, onsen, yoga retreats, massage' },
]

const STEP_COUNT = 3

export default function TripBuilder() {
  const navigate = useNavigate()
  const { plan, savePlan } = useTripPlan()

  const [step, setStep] = useState(1)
  const [country, setCountry] = useState(plan.country || 'japan')
  const [cities, setCities] = useState(plan.cities?.length ? plan.cities : [])
  const [interests, setInterests] = useState(plan.interests?.length ? plan.interests : [])

  // Cities for the currently-selected country (before committing)
  const activeCities = (TRIP_REGISTRY[country] || TRIP_REGISTRY['japan']).CITIES || []

  // Interests: universal + any specialist tabs from the selected country's shopping
  const shopTabs = (TRIP_REGISTRY[country] || TRIP_REGISTRY['japan']).SHOPPING_TABS || []
  const specialistInterests = shopTabs
    .filter(t => !UNIVERSAL_INTERESTS.find(u => u.id === t.id))
    .map(t => ({ id: t.id, emoji: t.icon, label: t.label, desc: '' }))
  const INTERESTS = [...UNIVERSAL_INTERESTS, ...specialistInterests]

  function toggleCity(id) {
    setCities(prev => prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id])
  }

  function toggleInterest(id) {
    setInterests(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id])
  }

  function selectAll() {
    setCities(activeCities.map(c => c.id))
  }

  function handleFinish() {
    savePlan({ built: true, country, cities, interests })
    navigate('/guide')
  }

  return (
    <div data-section="builder">
      {/* Header */}
      <div style={{
        background: '#f9f9f9',
        borderBottom: '1px solid #e5e5e5',
        padding: '40px 20px 32px',
        textAlign: 'center',
      }}>
        {plan.built && (
          <div style={{ marginBottom: 16 }}>
            <Link to="/guide" style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              padding: '7px 16px', borderRadius: 20, fontSize: 13, fontWeight: 600,
              background: '#fff', color: '#1a1a1a',
              border: '1.5px solid #e5e5e5', textDecoration: 'none',
            }}>
              ← View your guide
            </Link>
          </div>
        )}
        <div style={{ fontSize: 13, color: '#666', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 12 }}>
          Trip Planner
        </div>
        <h1 style={{ fontSize: 32, marginBottom: 8, color: '#1a1a1a' }}>Plan your trip</h1>
        <p style={{ color: '#666', fontSize: 16, margin: 0 }}>
          Tell us where you're going and what you love — we'll tailor your guide.
        </p>

        {/* Step indicator */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8, marginTop: 28 }}>
          {Array.from({ length: STEP_COUNT }, (_, i) => i + 1).map(n => (
            <div key={n} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{
                width: 32, height: 32, borderRadius: '50%',
                background: n <= step ? '#1a1a1a' : '#e5e5e5',
                color: n <= step ? '#fff' : '#999',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 13, fontWeight: 700,
                transition: 'all 0.2s',
              }}>{n < step ? '✓' : n}</div>
              {n < STEP_COUNT && (
                <div style={{ width: 32, height: 2, background: n < step ? '#1a1a1a' : '#e5e5e5', borderRadius: 1 }} />
              )}
            </div>
          ))}
        </div>
        <div style={{ fontSize: 12, color: '#999', marginTop: 10 }}>
          {step === 1 && 'Choose destination'}
          {step === 2 && 'Select your cities'}
          {step === 3 && 'Pick your interests'}
        </div>
      </div>

      <div className="section" style={{ background: '#fff' }}>
        <div className="container" style={{ maxWidth: 720 }}>

          {/* ── Step 1: Destination ── */}
          {step === 1 && (
            <div>
              <h2 style={{ marginBottom: 8, color: '#1a1a1a' }}>Where are you going?</h2>
              <p style={{ color: '#666', marginBottom: 28 }}>Choose your destination to get started.</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 14 }}>
                {DESTINATIONS.map(dest => (
                  <button
                    key={dest.id}
                    onClick={() => { setCountry(dest.id); setCities([]) }}
                    style={{
                      background: country === dest.id ? '#f5f5f5' : '#fff',
                      border: country === dest.id ? '2px solid #1a1a1a' : '2px solid #e5e5e5',
                      borderRadius: 14, padding: 20, textAlign: 'left', cursor: 'pointer',
                      transition: 'all 0.15s',
                      boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
                      fontFamily: 'inherit',
                    }}
                  >
                    <div style={{ fontSize: 32, marginBottom: 8 }}>{dest.emoji}</div>
                    <div style={{ fontSize: 16, fontWeight: 700, color: '#1a1a1a', marginBottom: 4 }}>{dest.name}</div>
                    <div style={{ fontSize: 12, color: '#888', lineHeight: 1.5 }}>{dest.desc}</div>
                    {country === dest.id && (
                      <div style={{ marginTop: 10, fontSize: 11, fontWeight: 700, color: '#1a1a1a' }}>✓ Selected</div>
                    )}
                  </button>
                ))}
              </div>

              <div style={{ marginTop: 36, display: 'flex', justifyContent: 'flex-end' }}>
                <button
                  onClick={() => setStep(2)}
                  style={{
                    padding: '12px 32px', background: '#1a1a1a', color: '#fff',
                    border: 'none', borderRadius: 24, fontSize: 15, fontWeight: 700,
                    cursor: 'pointer', fontFamily: 'inherit',
                  }}
                >
                  Next: Choose cities →
                </button>
              </div>
            </div>
          )}

          {/* ── Step 2: Cities ── */}
          {step === 2 && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: 12, marginBottom: 8 }}>
                <h2 style={{ margin: 0, color: '#1a1a1a' }}>Which cities are you visiting?</h2>
                <button
                  onClick={selectAll}
                  style={{
                    background: 'none', border: '1px solid #d1d1d1', color: '#1a1a1a',
                    borderRadius: 20, padding: '6px 16px', fontSize: 13, fontWeight: 600,
                    cursor: 'pointer', fontFamily: 'inherit',
                  }}
                >
                  Select all
                </button>
              </div>
              <p style={{ color: '#666', marginBottom: 24 }}>
                We'll show you restaurants, highlights and tips for your chosen cities.
              </p>

              <div className="city-grid">
                {activeCities.map(city => {
                  const selected = cities.includes(city.id)
                  return (
                    <button
                      key={city.id}
                      className="city-card"
                      onClick={() => toggleCity(city.id)}
                      style={{
                        border: 'none', background: 'none', cursor: 'pointer',
                        outline: selected ? '3px solid #1a1a1a' : '3px solid transparent',
                        transition: 'outline 0.15s',
                      }}
                    >
                      <img src={city.image} alt={city.name} className="city-card-img" />
                      <div className="city-card-overlay" style={{ background: selected ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0.35)' }} />
                      <div className="city-card-body">
                        <span className="city-card-emoji">{city.emoji}</span>
                        <div className="city-card-name">{city.name}</div>
                      </div>
                      {selected && (
                        <div style={{
                          position: 'absolute', top: 10, right: 10,
                          width: 26, height: 26, borderRadius: '50%',
                          background: '#1a1a1a', color: '#fff',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: 14, fontWeight: 700,
                        }}>✓</div>
                      )}
                    </button>
                  )
                })}
              </div>

              {cities.length > 0 && (
                <p style={{ textAlign: 'center', fontSize: 14, color: '#1a1a1a', fontWeight: 600, marginTop: 16 }}>
                  {cities.length} {cities.length === 1 ? 'city' : 'cities'} selected
                </p>
              )}

              <div style={{ marginTop: 32, display: 'flex', justifyContent: 'space-between', gap: 12 }}>
                <button
                  onClick={() => setStep(1)}
                  style={{
                    padding: '12px 24px', background: 'none', color: '#666',
                    border: '1px solid #e5e5e5', borderRadius: 24, fontSize: 15, fontWeight: 600,
                    cursor: 'pointer', fontFamily: 'inherit',
                  }}
                >
                  ← Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  style={{
                    padding: '12px 32px', background: '#1a1a1a', color: '#fff',
                    border: 'none', borderRadius: 24, fontSize: 15, fontWeight: 700,
                    cursor: 'pointer', fontFamily: 'inherit',
                  }}
                >
                  Next: Your interests →
                </button>
              </div>
            </div>
          )}

          {/* ── Step 3: Interests ── */}
          {step === 3 && (
            <div>
              <h2 style={{ marginBottom: 8, color: '#1a1a1a' }}>What are you into?</h2>
              <p style={{ color: '#666', marginBottom: 24 }}>
                Select everything that interests you — we'll surface the most relevant content.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 12 }}>
                {INTERESTS.map(interest => {
                  const selected = interests.includes(interest.id)
                  return (
                    <button
                      key={interest.id}
                      onClick={() => toggleInterest(interest.id)}
                      style={{
                        background: selected ? '#f5f5f5' : '#fff',
                        border: selected ? '2px solid #1a1a1a' : '2px solid #e5e5e5',
                        borderRadius: 14, padding: '18px 16px', textAlign: 'left',
                        cursor: 'pointer', transition: 'all 0.15s',
                        boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                        fontFamily: 'inherit',
                      }}
                    >
                      <div style={{ fontSize: 28, marginBottom: 8 }}>{interest.emoji}</div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: '#1a1a1a', marginBottom: 3 }}>
                        {interest.label}
                      </div>
                      {interest.desc && <div style={{ fontSize: 12, color: '#888', lineHeight: 1.4 }}>{interest.desc}</div>}
                    </button>
                  )
                })}
              </div>

              {interests.length > 0 && (
                <p style={{ textAlign: 'center', fontSize: 14, color: '#1a1a1a', fontWeight: 600, marginTop: 16 }}>
                  {interests.length} interest{interests.length !== 1 ? 's' : ''} selected
                </p>
              )}

              <div style={{ marginTop: 32, display: 'flex', justifyContent: 'space-between', gap: 12 }}>
                <button
                  onClick={() => setStep(2)}
                  style={{
                    padding: '12px 24px', background: 'none', color: '#666',
                    border: '1px solid #e5e5e5', borderRadius: 24, fontSize: 15, fontWeight: 600,
                    cursor: 'pointer', fontFamily: 'inherit',
                  }}
                >
                  ← Back
                </button>
                <button
                  onClick={handleFinish}
                  style={{
                    padding: '14px 36px', background: '#1a1a1a', color: '#fff',
                    border: 'none', borderRadius: 24, fontSize: 16, fontWeight: 700,
                    cursor: 'pointer', fontFamily: 'inherit',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
                  }}
                >
                  Build my guide ✈️
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
