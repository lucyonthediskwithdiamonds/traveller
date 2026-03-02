// Greece trip flavour — all Greece-specific metadata + data
// To add a new trip destination, create src/trips/<id>/index.js with the same shape

export const TRIP_META = {
  id: 'greece',
  name: 'Greece',
  emoji: '🏛️',
  flag: '🇬🇷',
  language: 'Greek',
  languageEmoji: '🇬🇷',
  currency: 'EUR',
  currencySymbol: '€',
  navLogo: '🏛️ Greece',
  cherryBlossoms: false,
  citiesTagline: '🏛️ Ancient Athens · 🌊 Aegean islands · 🌅 Santorini sunsets · 🫒 Mezze & ouzo · 🐙 Fresh seafood',
  theme: {
    primary: '#1e78b4',
    gradient: 'linear-gradient(160deg, #f0f8ff, #f0f5ff, #f5f0ff)',
  },
  highlights: [
    { emoji: '🏛️', title: 'Ancient World', desc: 'The Acropolis, Delphi, Olympia, Knossos — the birthplace of democracy, philosophy and the Western world' },
    { emoji: '🌅', title: 'Island Beauty', desc: 'Santorini\'s caldera sunsets, Mykonos windmills, Crete\'s Gorge of Samariá, Rhodes\' medieval old city' },
    { emoji: '🍷', title: 'Greek Cuisine', desc: 'Fresh octopus, saganaki, horiatiki salad, lamb souvlaki, baklava — food that tastes of sea air and olive groves' },
    { emoji: '🌊', title: 'Aegean Blue', desc: 'Crystal-clear waters, volcanic black sand beaches, turquoise coves and the most beautiful sea in the world' },
  ],
  decorations: ['🏛️', '🌊', '🫒'],
}

export * from './data'
