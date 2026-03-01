import { mapsUrl } from '../utils/maps'

export default function Shops() {
  const vintage = {
    tokyo: [
      { name: 'NUIR Vintage Harajuku', rating: '5.0★ (832)', type: 'Luxury Vintage', notes: 'Mixed luxury vintage. Relaxed atmosphere. Good English.' },
      { name: 'MixTHINKS Harajuku', rating: '5.0★ (947)', type: 'Vintage Bags', notes: 'Best vintage luxury BAGS in Tokyo. Chanel, LV, Gucci. Must visit.' },
      { name: 'SALAMANCA Vintage', rating: '5.0★ (307)', type: 'European Brands', notes: 'Great Burberry & European brands. Staff negotiate.' },
      { name: 'Harajuku Chicago', rating: '4.7★', type: 'Americana', notes: "Shimokitazawa. Levi's, military, Carhartt. Tax-free." },
      { name: 'iot reverse', rating: '4.9★ (106)', type: 'Rare / Curated', notes: 'Rare band tees, curated cool. Open until MIDNIGHT.' }
    ],
    osaka: [
      { name: 'Kindal Shinsaibashi', rating: '4.9★ (1,909)', type: 'Archive Fashion', notes: 'Crown jewel. Full floor of CDG/Yohji archive. Best vintage store many reviewers have visited.' },
      { name: 'ALLU Shinsaibashi', rating: '5.0★ (1,845)', type: 'Pre-owned Luxury', notes: 'Hermès, Chanel, LV. Original packaging. Staff will hold items.' },
      { name: 'ACORN Minamisenba', rating: '4.9★ (587)', type: 'Curated Rare', notes: 'Tight edit. Rare pieces. Pricier but worth it.' }
    ],
    kyoto: [
      { name: 'SALAMANCA Vintage Kyoto', rating: '5.0★ (1,234)', type: 'Luxury Archive', notes: 'Prices cheaper than Tokyo. Rare Issey Miyake, Gucci, Fendi. Tax-free with passport.' },
      { name: 'BRING Kyoto', rating: '4.9★ (276)', type: 'Designer Clothing', notes: 'Cheapest Chrome Hearts across all 3 cities. Great designer clothing.' },
      { name: 'Big Time Kyoto', rating: '4.1★ (94)', type: 'Museum-Like', notes: '"Museum where everything is for sale." 4 floors sorted by type and colour.' }
    ]
  }

  const fashion = {
    tokyo: [
      { name: 'NEIGHBORHOOD', area: 'Harajuku', type: 'Streetwear / Hypebeast', notes: 'Japanese streetwear icon. Heavy, rugged aesthetic.' },
      { name: 'Comme des Garçons', area: 'Aoyama', type: 'Avant-garde', notes: 'Try CDG HOMME PLUS or PLAY as entry point.' },
      { name: 'Kapital', area: 'Ebisu', type: 'Workwear / Folk Art', notes: 'Patchwork, boro-inspired. Legendary brand.' }
    ],
    kyoto: [
      { name: 'Uniform & Working Wear Kadoya', area: 'Kyoto', type: 'Artisan / Traditional', notes: '100-year-old family shop. Tabi shoes, Nikka pants, artisan aprons. Owner Kozo is legendary. Tue–Sat only.' },
      { name: 'Kapital Kyoto', area: 'Kyoto', type: 'Workwear', notes: 'Excellent selection. Ask staff for latest pieces.' }
    ]
  }

  return (
    <div>
      <div className="section">
        <div className="container">
          <h1 style={{marginBottom: 40}}>🏪 Best Shops</h1>

          <div className="city-section">
            <h2 style={{color: '#d4558f', marginBottom: 8}}>🛍️ Vintage Fashion</h2>
            <p style={{marginBottom: 32, color: '#4a4a4a'}}>The best vintage and pre-owned luxury across all three cities. Always carry passport for tax exemption.</p>

            <h3 style={{marginBottom: 20}}>🗼 Tokyo</h3>
            <div className="grid">
              {vintage.tokyo.map((s, i) => (
                <div key={i} className="card">
                  <h3>{s.name}</h3>
                  <p className="rating">⭐ {s.rating}</p>
                  <div className="tags"><span className="tag">{s.type}</span></div>
                  <p style={{marginTop: 12, fontSize: 14, color: '#6b5a4a'}}>{s.notes}</p>
                  <a href={mapsUrl(s.name, 'Tokyo')} target="_blank" rel="noopener noreferrer"
                     style={{display: 'inline-block', marginTop: 8, fontSize: 12, color: '#d4558f', textDecoration: 'none', fontWeight: 500}}>📍 Maps</a>
                </div>
              ))}
            </div>

            <h3 style={{margin: '40px 0 20px'}}>🏯 Osaka</h3>
            <div className="grid">
              {vintage.osaka.map((s, i) => (
                <div key={i} className="card">
                  <h3>{s.name}</h3>
                  <p className="rating">⭐ {s.rating}</p>
                  <div className="tags"><span className="tag">{s.type}</span></div>
                  <p style={{marginTop: 12, fontSize: 14, color: '#6b5a4a'}}>{s.notes}</p>
                  <a href={mapsUrl(s.name, 'Osaka')} target="_blank" rel="noopener noreferrer"
                     style={{display: 'inline-block', marginTop: 8, fontSize: 12, color: '#d4558f', textDecoration: 'none', fontWeight: 500}}>📍 Maps</a>
                </div>
              ))}
            </div>

            <h3 style={{margin: '40px 0 20px'}}>🌸 Kyoto</h3>
            <div className="grid">
              {vintage.kyoto.map((s, i) => (
                <div key={i} className="card">
                  <h3>{s.name}</h3>
                  <p className="rating">⭐ {s.rating}</p>
                  <div className="tags"><span className="tag">{s.type}</span></div>
                  <p style={{marginTop: 12, fontSize: 14, color: '#6b5a4a'}}>{s.notes}</p>
                  <a href={mapsUrl(s.name, 'Kyoto')} target="_blank" rel="noopener noreferrer"
                     style={{display: 'inline-block', marginTop: 8, fontSize: 12, color: '#d4558f', textDecoration: 'none', fontWeight: 500}}>📍 Maps</a>
                </div>
              ))}
            </div>
          </div>

          <div className="city-section" style={{marginTop: 40}}>
            <h2 style={{color: '#d4558f', marginBottom: 32}}>👕 Japanese Fashion & Clothing</h2>
            <h3 style={{marginBottom: 20}}>🗼 Tokyo</h3>
            <div className="grid">
              {fashion.tokyo.map((s, i) => (
                <div key={i} className="card">
                  <h3>{s.name}</h3>
                  <p><strong>{s.area}</strong></p>
                  <div className="tags"><span className="tag">{s.type}</span></div>
                  <p style={{marginTop: 12, fontSize: 14, color: '#6b5a4a'}}>{s.notes}</p>
                </div>
              ))}
            </div>
            <h3 style={{margin: '40px 0 20px'}}>🌸 Kyoto</h3>
            <div className="grid">
              {fashion.kyoto.map((s, i) => (
                <div key={i} className="card">
                  <h3>{s.name}</h3>
                  <p><strong>{s.area}</strong></p>
                  <div className="tags"><span className="tag">{s.type}</span></div>
                  <p style={{marginTop: 12, fontSize: 14, color: '#6b5a4a'}}>{s.notes}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
