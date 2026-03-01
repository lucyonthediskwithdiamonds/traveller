// Japan trip flavour — all Japan-specific metadata + data
// To add a new trip destination, create src/trips/<id>/index.js with the same shape

export const TRIP_META = {
  id: 'japan',
  name: 'Japan',
  emoji: '🌸',
  flag: '🇯🇵',
  language: 'Japanese',
  languageEmoji: '🗾',
  currency: 'JPY',
  currencySymbol: '¥',
  navLogo: '🌸 Japan',
  cherryBlossoms: true,
  citiesTagline: '🌸 Sakura peak · 🗻 Mt. Fuji views · ♨️ Onsen & ryokan · 🐒 Snow monkeys · 🍜 40+ restaurants',
  theme: {
    primary: '#d4558f',
    gradient: 'linear-gradient(160deg, #fff0f5, #fef5f0, #f5f0ff)',
  },
  highlights: [
    { emoji: '🌸', title: 'Sakura Season', desc: 'Cherry blossoms peak March–April along Meguro River and Chidorigafuchi' },
    { emoji: '🍜', title: 'Culinary Journey', desc: 'From Osaka street takoyaki to Kyoto kaiseki to Tokyo ramen' },
    { emoji: '♨️', title: 'Onsen & Ryokan', desc: 'Snow monkeys at Jigokudani, Hakone hot springs, Koyasan temple stay' },
    { emoji: '🗻', title: 'Mt. Fuji Views', desc: 'Hakone ropeway, Chureito Pagoda, and Lake Ashi pirate cruise' },
  ],
  decorations: ['🌸', '⛩️', '🗻'],
}

export * from './data'
