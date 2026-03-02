// Spain trip flavour — all Spain-specific metadata + data
// To add a new trip destination, create src/trips/<id>/index.js with the same shape

export const TRIP_META = {
  id: 'spain',
  name: 'Spain',
  emoji: '🌹',
  flag: '🇪🇸',
  language: 'Spanish',
  languageEmoji: '🇪🇸',
  currency: 'EUR',
  currencySymbol: '€',
  navLogo: '🌹 Spain',
  cherryBlossoms: false,
  citiesTagline: '🌹 Flamenco & tapas · 🏰 Gaudí & Moorish palaces · ☀️ Costa beaches · 🍷 Rioja & Sherry · 🥘 Pintxos & paella',
  theme: {
    primary: '#c0392b',
    gradient: 'linear-gradient(160deg, #fff5f5, #fff0eb, #fff5f0)',
  },
  highlights: [
    { emoji: '🏛️', title: 'Moorish Palaces', desc: 'Alhambra in Granada, Alcázar in Seville — the finest Islamic architecture in Europe' },
    { emoji: '🌹', title: 'Flamenco & Culture', desc: 'Deep song in cave bars of Granada, tablao shows in Seville, Picasso museums in Barcelona' },
    { emoji: '🍷', title: 'Gastronomy', desc: 'Pintxos bars in San Sebastián, paella in Valencia, jamón ibérico and Rioja everywhere' },
    { emoji: '🏰', title: 'Architecture', desc: 'Gaudí\'s Sagrada Família and Park Güell, flamboyant Gothic cathedrals, whitewashed Andalusian villages' },
  ],
  decorations: ['🌹', '🏰', '☀️'],
}

export * from './data'
