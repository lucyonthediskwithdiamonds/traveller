// Italy trip flavour — all Italy-specific metadata + data
// To add a new trip destination, create src/trips/<id>/index.js with the same shape

export const TRIP_META = {
  id: 'italy',
  name: 'Italy',
  emoji: '🍕',
  flag: '🇮🇹',
  language: 'Italian',
  languageEmoji: '🇮🇹',
  currency: 'EUR',
  currencySymbol: '€',
  navLogo: '🍕 Italy',
  cherryBlossoms: false,
  citiesTagline: '🏛️ Ancient Rome · 🍕 Neapolitan pizza · 🛵 Renaissance Florence · 🚤 Venetian canals · 🍷 Barolo & Brunello',
  theme: {
    primary: '#c0773a',
    gradient: 'linear-gradient(160deg, #fff8f0, #fdf3ec, #fff0eb)',
  },
  highlights: [
    { emoji: '🏛️', title: 'Ancient World', desc: 'The Colosseum, Roman Forum, Pompeii — the greatest open-air museum on earth spanning 3,000 years' },
    { emoji: '🍝', title: 'Gastronomy', desc: 'Each city has its own food culture: cacio e pepe in Rome, bistecca in Florence, cicchetti in Venice, arancini in Sicily' },
    { emoji: '🎨', title: 'Renaissance Art', desc: 'Michelangelo\'s David, Botticelli\'s Birth of Venus, the Sistine Chapel — the greatest concentration of art in human history' },
    { emoji: '🌊', title: 'Landscapes', desc: 'Amalfi cliff roads, Sicilian beaches, Venetian lagoon, Tuscan hills — Italy\'s landscapes are as spectacular as its cities' },
  ],
  decorations: ['🍕', '🏛️', '🛵'],
}

export * from './data'
