import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CITIES, TRIP_META } from '../config/activeTrip'
import { useTripPlan } from '../context/TripPlanContext'

// Available destinations — Japan is the only one for now
const DESTINATIONS = [
  { id: 'japan', name: 'Japan', emoji: '🇯🇵', desc: 'Cherry blossoms, ancient temples, world-class food', available: true },
  { id: 'coming-soon', name: 'More coming soon', emoji: '🌍', desc: 'Italy, Portugal, Thailand and more', available: false },
]

const INTERESTS = [
  { id: 'food',     emoji: '🍜', label: 'Food & Dining',       desc: 'Restaurants, street food, markets' },
  { id: 'knives',   emoji: '🔪', label: 'Knife Shopping',      desc: 'Hand-forged Japanese knives' },
  { id: 'watches',  emoji: '⌚', label: 'Watch Hunting',       desc: 'Seiko, Grand Seiko, Orient' },
  { id: 'denim',    emoji: '👖', label: 'Selvedge Denim',      desc: 'Japanese selvedge, chain-stitch hemming' },
  { id: 'vintage',  emoji: '🛍️', label: 'Vintage Fashion',    desc: 'Archive, luxury pre-owned, thrift digs' },
  { id: 'clothing', emoji: '👕', label: 'Designer Clothing',   desc: 'NEIGHBORHOOD, CDG, Kapital, Kadoya' },
  { id: 'culture',  emoji: '⛩️', label: 'Culture & Temples',  desc: 'Shrines, castles, history, art' },
  { id: 'nature',   emoji: '🌿', label: 'Nature & Outdoors',   desc: 'Mountains, forests, national parks' },
  { id: 'onsen',    emoji: '♨️', label: 'Onsen & Wellness',    desc: 'Hot springs, ryokan, relaxation' },
]

const STEP_COUNT = 3

export default function TripBuilder() {
  const navigate = useNavigate()
  const { plan, savePlan } = useTripPlan()

  const [step, setStep] = useState(1)
  const [country, setCountry] = useState(plan.country || 'japan')
  const [cities, setCities] = useState(plan.cities?.length ? plan.cities : [])
  const [interests, setInterests] = useState(plan.interests?.length ? plan.interests : [])

  function toggleCity(id) {
    setCities(prev => prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id])
  }

  function toggleInterest(id) {
    setInterests(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id])
  }

  function selectAll() {
    setCities(CITIES.map(c => c.id))
  }

  function handleFinish() {
    savePlan({ built: true, country, cities, interests })
    navigate('/')
  }

  const activeCities = cities.length > 0 ? cities : []

  return (
    <div style={{ minHeight: '100vh', background: TRIP_META.theme.gradient }}>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(212,85,143,0.12), rgba(155,89,166,0.08))',
        borderBottom: '1px solid rgba(212,85,143,0.12)',
        padding: '40px 20px 32px',
        textAlign: 'center',
      }}>
        <div style={{ fontSize: 13, color: '#d4558f', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 12 }}>
          Trip Planner
        </div>
        <h1 style={{ fontSize: 32, marginBottom: 8 }}>Plan your trip</h1>
        <p style={{ color: '#7a5070', fontSize: 16, margin: 0 }}>
          Tell us where you're going and what you love — we'll tailor your guide.
        </p>

        {/* Step indicator */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8, marginTop: 28 }}>
          {Array.from({ length: STEP_COUNT }, (_, i) => i + 1).map(n => (
            <div key={n} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{
                width: 32, height: 32, borderRadius: '50%',
                background: n <= step ? '#d4558f' : 'rgba(212,85,143,0.15)',
                color: n <= step ? '#fff' : '#d4558f',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 13, fontWeight: 700,
                transition: 'all 0.2s',
              }}>{n < step ? '✓' : n}</div>
              {n < STEP_COUNT && (
                <div style={{ width: 32, height: 2, background: n < step ? '#d4558f' : 'rgba(212,85,143,0.2)', borderRadius: 1 }} />
              )}
            </div>
          ))}
        </div>
        <div style={{ fontSize: 12, color: '#a07090', marginTop: 10 }}>
          {step === 1 && 'Choose destination'}
          {step === 2 && 'Select your cities'}
          {step === 3 && 'Pick your interests'}
        </div>
      </div>

      <div className="section">
        <div className="container" style={{ maxWidth: 720 }}>

          {/* ── Step 1: Destination ── */}
          {step === 1 && (
            <div>
              <h2 style={{ marginBottom: 8 }}>Where are you going?</h2>
              <p style={{ color: '#7a5070', marginBottom: 28 }}>Choose your destination to get started.</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 16 }}>
                {DESTINATIONS.map(dest => (
                  <button
                    key={dest.id}
                    disabled={!dest.available}
                    onClick={() => dest.available && setCountry(dest.id)}
                    style={{
                      background: dest.available && country === dest.id ? 'rgba(212,85,143,0.08)' : '#fff',
                      border: dest.available && country === dest.id ? '2px solid #d4558f' : '2px solid rgba(0,0,0,0.07)',
                      borderRadius: 16, padding: 24, textAlign: 'left', cursor: dest.available ? 'pointer' : 'default',
                      opacity: dest.available ? 1 : 0.45,
                      transition: 'all 0.15s',
                      boxShadow: '0 2px 14px rgba(0,0,0,0.05)',
                      fontFamily: 'inherit',
                    }}
                  >
                    <div style={{ fontSize: 36, marginBottom: 10 }}>{dest.emoji}</div>
                    <div style={{ fontSize: 17, fontWeight: 700, color: '#1a1410', marginBottom: 4 }}>{dest.name}</div>
                    <div style={{ fontSize: 13, color: '#7a6070', lineHeight: 1.5 }}>{dest.desc}</div>
                    {dest.available && country === dest.id && (
                      <div style={{ marginTop: 12, fontSize: 12, fontWeight: 700, color: '#d4558f' }}>✓ Selected</div>
                    )}
                    {!dest.available && (
                      <div style={{ marginTop: 12, fontSize: 11, color: '#b0a0b0', fontStyle: 'italic' }}>Coming soon</div>
                    )}
                  </button>
                ))}
              </div>

              <div style={{ marginTop: 36, display: 'flex', justifyContent: 'flex-end' }}>
                <button
                  onClick={() => setStep(2)}
                  style={{
                    padding: '12px 32px', background: '#d4558f', color: '#fff',
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
                <h2 style={{ margin: 0 }}>Which cities are you visiting?</h2>
                <button
                  onClick={selectAll}
                  style={{
                    background: 'none', border: '1px solid rgba(212,85,143,0.3)', color: '#d4558f',
                    borderRadius: 20, padding: '6px 16px', fontSize: 13, fontWeight: 600,
                    cursor: 'pointer', fontFamily: 'inherit',
                  }}
                >
                  Select all
                </button>
              </div>
              <p style={{ color: '#7a5070', marginBottom: 24 }}>
                We'll show you restaurants, highlights and tips for your chosen cities.
              </p>

              <div className="city-grid">
                {CITIES.map(city => {
                  const selected = cities.includes(city.id)
                  return (
                    <button
                      key={city.id}
                      onClick={() => toggleCity(city.id)}
                      style={{
                        position: 'relative', padding: 0, border: 'none', background: 'none',
                        cursor: 'pointer', borderRadius: 16, overflow: 'hidden',
                        outline: selected ? '3px solid #d4558f' : '3px solid transparent',
                        transition: 'outline 0.15s',
                      }}
                    >
                      <img src={city.image} alt={city.name} className="city-card-img" style={{ borderRadius: 16 }} />
                      <div className="city-card-overlay" style={{ background: selected ? 'rgba(212,85,143,0.45)' : 'rgba(0,0,0,0.45)' }} />
                      <div className="city-card-body">
                        <span className="city-card-emoji">{city.emoji}</span>
                        <div className="city-card-name">{city.name}</div>
                      </div>
                      {selected && (
                        <div style={{
                          position: 'absolute', top: 10, right: 10,
                          width: 26, height: 26, borderRadius: '50%',
                          background: '#d4558f', color: '#fff',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: 14, fontWeight: 700,
                        }}>✓</div>
                      )}
                    </button>
                  )
                })}
              </div>

              {cities.length > 0 && (
                <p style={{ textAlign: 'center', fontSize: 14, color: '#d4558f', fontWeight: 600, marginTop: 16 }}>
                  {cities.length} {cities.length === 1 ? 'city' : 'cities'} selected
                </p>
              )}

              <div style={{ marginTop: 32, display: 'flex', justifyContent: 'space-between', gap: 12 }}>
                <button
                  onClick={() => setStep(1)}
                  style={{
                    padding: '12px 24px', background: 'none', color: '#9a7a8a',
                    border: '1px solid rgba(0,0,0,0.12)', borderRadius: 24, fontSize: 15, fontWeight: 600,
                    cursor: 'pointer', fontFamily: 'inherit',
                  }}
                >
                  ← Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  style={{
                    padding: '12px 32px', background: '#d4558f', color: '#fff',
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
              <h2 style={{ marginBottom: 8 }}>What are you into?</h2>
              <p style={{ color: '#7a5070', marginBottom: 24 }}>
                Select everything that interests you — we'll surface the most relevant content.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 12 }}>
                {INTERESTS.map(interest => {
                  const selected = interests.includes(interest.id)
                  return (
                    <button
                      key={interest.id}
                      onClick={() => toggleInterest(interest.id)}
                      style={{
                        background: selected ? 'rgba(212,85,143,0.08)' : '#fff',
                        border: selected ? '2px solid #d4558f' : '2px solid rgba(0,0,0,0.07)',
                        borderRadius: 14, padding: '18px 16px', textAlign: 'left',
                        cursor: 'pointer', transition: 'all 0.15s',
                        boxShadow: '0 2px 14px rgba(0,0,0,0.04)',
                        fontFamily: 'inherit',
                      }}
                    >
                      <div style={{ fontSize: 28, marginBottom: 8 }}>{interest.emoji}</div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: selected ? '#d4558f' : '#1a1410', marginBottom: 3 }}>
                        {interest.label}
                      </div>
                      <div style={{ fontSize: 12, color: '#9a8a9a', lineHeight: 1.4 }}>{interest.desc}</div>
                    </button>
                  )
                })}
              </div>

              {interests.length > 0 && (
                <p style={{ textAlign: 'center', fontSize: 14, color: '#d4558f', fontWeight: 600, marginTop: 16 }}>
                  {interests.length} interest{interests.length !== 1 ? 's' : ''} selected
                </p>
              )}

              <div style={{ marginTop: 32, display: 'flex', justifyContent: 'space-between', gap: 12 }}>
                <button
                  onClick={() => setStep(2)}
                  style={{
                    padding: '12px 24px', background: 'none', color: '#9a7a8a',
                    border: '1px solid rgba(0,0,0,0.12)', borderRadius: 24, fontSize: 15, fontWeight: 600,
                    cursor: 'pointer', fontFamily: 'inherit',
                  }}
                >
                  ← Back
                </button>
                <button
                  onClick={handleFinish}
                  style={{
                    padding: '14px 36px', background: 'linear-gradient(135deg, #d4558f, #9b59a6)', color: '#fff',
                    border: 'none', borderRadius: 24, fontSize: 16, fontWeight: 700,
                    cursor: 'pointer', fontFamily: 'inherit',
                    boxShadow: '0 4px 20px rgba(212,85,143,0.35)',
                  }}
                >
                  Build my guide 🌸
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
