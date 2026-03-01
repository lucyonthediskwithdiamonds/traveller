import { useState } from 'react'
import { PRACTICAL, TRIP_META } from '../config/activeTrip'

export default function Phrases() {
  const [activeCategory, setActiveCategory] = useState(0)
  const [copied, setCopied] = useState(null)
  const categories = PRACTICAL.phrasesByCategory

  function copyRomaji(romaji, index) {
    navigator.clipboard?.writeText(romaji).catch(() => {})
    setCopied(index)
    setTimeout(() => setCopied(null), 1400)
  }

  const active = categories[activeCategory]

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(212,85,143,0.12), rgba(155,89,166,0.08))',
        borderBottom: '1px solid rgba(212,85,143,0.12)',
        padding: '52px 20px 0',
        textAlign: 'center',
      }}>
        <div style={{ fontSize: 42, marginBottom: 12 }}>{TRIP_META.languageEmoji}</div>
        <h1 style={{ marginBottom: 10 }}>{TRIP_META.language} Phrases</h1>
        <p style={{ color: '#7a5070', fontSize: 16, marginBottom: 28 }}>
          Essential phrases to help you connect with locals
        </p>

        {/* Category tabs */}
        <div style={{
          display: 'flex', overflowX: 'auto', scrollbarWidth: 'none',
          borderBottom: '2px solid rgba(212,85,143,0.1)',
          justifyContent: 'center',
        }}>
          {categories.map((cat, i) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(i)}
              style={{
                padding: '13px 20px', border: 'none', background: 'none',
                cursor: 'pointer', fontFamily: 'inherit', fontSize: 14, fontWeight: 600,
                color: activeCategory === i ? '#d4558f' : '#9a7a8a',
                borderBottom: activeCategory === i ? '2px solid #d4558f' : '2px solid transparent',
                marginBottom: '-2px', whiteSpace: 'nowrap', transition: 'color 0.2s',
                display: 'flex', alignItems: 'center', gap: 6,
              }}
            >
              <span>{cat.emoji}</span>
              <span style={{ display: 'none' }}>{cat.category.split(' ')[0]}</span>
              <span>{cat.category}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="section">
        <div className="container" style={{ maxWidth: 680 }}>
          <div style={{ marginBottom: 12 }}>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
              <span>{active.emoji}</span> {active.category}
            </h2>
            <p style={{ color: '#9a7a8a', fontSize: 14, margin: 0 }}>
              Tap a card to copy the pronunciation
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {active.phrases.map((phrase, i) => (
              <button
                key={i}
                onClick={() => copyRomaji(phrase.romaji, i)}
                style={{
                  background: '#fff',
                  border: copied === i ? '1.5px solid #d4558f' : '1.5px solid rgba(0,0,0,0.07)',
                  borderRadius: 14, padding: '18px 20px',
                  textAlign: 'left', cursor: 'pointer',
                  boxShadow: '0 2px 14px rgba(0,0,0,0.04)',
                  fontFamily: 'inherit',
                  transition: 'border-color 0.15s',
                  display: 'grid',
                  gridTemplateColumns: '1fr auto',
                  gap: '4px 12px',
                  alignItems: 'center',
                }}
              >
                <div>
                  {/* English */}
                  <div style={{ fontSize: 13, color: '#9a8a9a', marginBottom: 4, fontWeight: 500 }}>
                    {phrase.en}
                  </div>
                  {/* Romaji */}
                  <div style={{ fontSize: 16, fontWeight: 700, color: '#1a1410', marginBottom: 4 }}>
                    {phrase.romaji}
                  </div>
                  {/* Japanese */}
                  <div style={{ fontSize: 18, color: '#4a3a4a', fontFamily: 'Noto Sans JP, sans-serif' }}>
                    {phrase.jp}
                  </div>
                </div>
                <div style={{
                  fontSize: 11, fontWeight: 700, color: copied === i ? '#d4558f' : '#c0b0c0',
                  textTransform: 'uppercase', letterSpacing: '0.06em', whiteSpace: 'nowrap',
                  flexShrink: 0,
                }}>
                  {copied === i ? '✓ Copied' : 'Copy'}
                </div>
              </button>
            ))}
          </div>

          {/* Tip */}
          <div style={{
            marginTop: 36, padding: '16px 20px',
            background: 'rgba(212,85,143,0.06)',
            border: '1px solid rgba(212,85,143,0.15)',
            borderRadius: 14,
          }}>
            <p style={{ margin: 0, fontSize: 14, color: '#6b4a5a', lineHeight: 1.6 }}>
              💡 <strong>Tip:</strong> Japanese people appreciate any effort with the language, even if your pronunciation isn't perfect.
              A smile and <em>sumimasen</em> (excuse me) goes a long way everywhere.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
