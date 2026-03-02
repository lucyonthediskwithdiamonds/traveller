// Spain shopping data

const MARKET_SHOPS = [
  { name: 'La Boqueria', city: 'Barcelona', area: 'Las Ramblas', rating: '4.3', reviews: '52000', type: 'Covered Market', notes: 'The most famous market in Spain. Go early (before 10am) to avoid tourists. Buy jamón, cheese and fresh juice. Avoid overpriced tourist stalls near the entrance.', priority: true },
  { name: 'Mercado de Santa Caterina', city: 'Barcelona', area: 'El Born', rating: '4.4', reviews: '8200', type: 'Neighbourhood Market', notes: 'More authentic than La Boqueria. Gaudí-inspired mosaic roof. Excellent butchers and fishmongers used by locals daily.', priority: false },
  { name: 'Mercado de San Miguel', city: 'Madrid', area: 'Sol', rating: '4.1', reviews: '42000', type: 'Gourmet Market', notes: 'Beautiful 1916 iron-and-glass market. Excellent pintxos, jamón, olives, wine and vermouth. Tourist-oriented but genuinely delicious.', priority: true },
  { name: 'El Rastro', city: 'Madrid', area: 'La Latina', rating: '4.2', reviews: '19000', type: 'Flea Market', notes: 'Madrid\'s famous Sunday flea market. 1,000+ stalls from antiques to clothing. Go before 11am, watch for pickpockets, haggle freely.', priority: true },
  { name: 'Mercado Central', city: 'Valencia', area: 'Centro', rating: '4.5', reviews: '28000', type: 'Covered Market', notes: 'Europe\'s largest covered fresh food market (1930). Spectacular modernist building. Best horchata, fresh produce and seafood in Valencia.', priority: true },
  { name: 'Triana Market', city: 'Seville', area: 'Triana', rating: '4.3', reviews: '7500', type: 'Neighbourhood Market', notes: 'Authentic Sevillian market in the famous ceramics and flamenco neighbourhood. Fresh fish, olives, and local specialties. Great for breakfast.', priority: false },
  { name: 'Mercado de San Telmo', city: 'San Sebastián', area: 'Parte Vieja', rating: '4.4', reviews: '5200', type: 'Gourmet Market', notes: 'Beautiful 1886 iron market hall now housing gourmet stalls, pintxos bars and local produce. Perfect lunch spot.', priority: false },
]

const CERAMICS_SHOPS = [
  { name: 'Ceràmica Villegas', city: 'Granada', area: 'Albaicín', rating: '4.8', reviews: '312', type: 'Moorish Ceramics', notes: 'Finest Granadan fajalauza pottery — white with blue and green geometric patterns. Family studio, workshop visible. Shipping available.', priority: true },
  { name: 'Cerámica Santa Ana', city: 'Seville', area: 'Triana', rating: '4.7', reviews: '1840', type: 'Azulejos Tiles', notes: 'The oldest and best-known ceramics shop in Triana. Hand-painted azulejo tiles since 1870. Each piece is a work of art.', priority: true },
  { name: 'Lladró Flagship', city: 'Madrid', area: 'Serrano', rating: '4.6', reviews: '924', type: 'Fine Porcelain', notes: 'Spain\'s most famous porcelain brand. Flagship Madrid store. Giftworthy figurines and home pieces. Tax refund available.', priority: false },
  { name: 'El Molino de los Sueños', city: 'Granada', area: 'Alcaicería', rating: '4.6', reviews: '445', type: 'Moorish Crafts', notes: 'In Granada\'s ancient covered souk. Marquetry boxes, Nasrid-pattern goods, leather and pottery. Haggling is expected.', priority: false },
]

const FASHION_SHOPS = [
  { name: 'Zara Flagship Gran Vía', city: 'Madrid', area: 'Gran Vía', rating: '4.1', reviews: '12400', type: 'Spanish Fast Fashion', notes: 'Zara\'s massive Madrid flagship. Spanish brand at source — often has stock not found elsewhere. Full collection including limited items.', priority: false },
  { name: 'Loewe Flagship', city: 'Madrid', area: 'Serrano', rating: '4.7', reviews: '1230', type: 'Spanish Luxury Leather', notes: 'Spain\'s most prestigious luxury brand (1846). Leather goods, clothing and the iconic Puzzle bag. Tax refund on purchases over €90.', priority: true },
  { name: 'El Corte Inglés', city: 'Multiple', area: 'All Cities', rating: '4.0', reviews: '85000', type: 'Department Store', notes: 'Spain\'s iconic department store. Every city has one. Excellent food hall (gourmet floor), good selection of Spanish brands, and tax-free services.', priority: false },
  { name: 'Custo Barcelona', city: 'Barcelona', area: 'Gothic Quarter', rating: '4.3', reviews: '2100', type: 'Colourful Contemporary', notes: 'Barcelona\'s psychedelic fashion label. Bold prints, distinctive graphics, very Barcelona. Great gift clothing.', priority: false },
  { name: 'Santa Eulalia', city: 'Barcelona', area: 'Passeig de Gràcia', rating: '4.6', reviews: '1560', type: 'Multi-brand Luxury', notes: 'Barcelona\'s finest multi-brand luxury store since 1843. Curated edit of international and Spanish designer brands. Personal shopping available.', priority: false },
  { name: 'Camper Flagship', city: 'Barcelona', area: 'El Born', rating: '4.5', reviews: '3400', type: 'Spanish Footwear', notes: 'Mallorcan shoe brand at its Barcelona flagship. Best selection, including Barcelona-only designs. Worth visiting for the architecture alone.', priority: false },
]

const LOCAL_SHOPS = [
  { name: 'Casa del Libro', city: 'Multiple', area: 'All Cities', rating: '4.3', reviews: '8900', type: 'Bookshop', notes: 'Spain\'s largest bookshop chain. Good travel, art and cookbook sections. English-language selections in tourist areas.', priority: false },
  { name: 'Jamones Fermín', city: 'Madrid', area: 'Mercado de San Miguel', rating: '4.8', reviews: '2340', type: 'Jamón Ibérico', notes: 'Award-winning Extremaduran jamón ibérico de bellota. Vacuum-packed legs for travel. The finest you can buy anywhere in Spain.', priority: true },
  { name: 'Bodegas Monje', city: 'Barcelona', area: 'Gràcia', rating: '4.6', reviews: '1200', type: 'Wine & Cava', notes: 'Barcelona wine shop specialising in Catalan wines and cavas. Staff are passionate and knowledgeable. Shipping internationally.', priority: false },
  { name: 'La Tienda del Aceite', city: 'Seville', area: 'Centro', rating: '4.7', reviews: '890', type: 'Olive Oil', notes: 'Specialist olive oil shop. Andalusia produces the world\'s finest EVOO. Tastings available, great selection for gifting. Vacuum-seal available.', priority: true },
  { name: 'Torres Winery Shop', city: 'Barcelona', area: 'Passeig de Gràcia', rating: '4.5', reviews: '1560', type: 'Spanish Wine', notes: 'Bodega Torres Barcelona outpost. Excellent Rioja, Ribera del Duero and Catalan wines. Limited editions and cellar releases.', priority: false },
  { name: 'Turrones El Lobo', city: 'Madrid', area: 'Sol', rating: '4.6', reviews: '3400', type: 'Traditional Sweets', notes: 'Since 1894. Artisan turrón (nougat), marzipan and traditional Spanish sweets. The best gifts you can bring home. Try the Jijona (soft) and Alicante (hard).', priority: false },
]

export const CITY_STYLE = {
  Barcelona: { bg: '#fff5f5', color: '#c0392b', border: '#f4b8b8' },
  Madrid:    { bg: '#f8f0ff', color: '#6d28d9', border: '#c4b0f4' },
  Seville:   { bg: '#fff5ee', color: '#b85000', border: '#f5c090' },
  Granada:   { bg: '#fff0f5', color: '#c0356e', border: '#f4bad4' },
  'San Sebastián': { bg: '#f0fff4', color: '#1a7a3f', border: '#9fd4b2' },
  Valencia:  { bg: '#fffbf0', color: '#b07800', border: '#f5d890' },
  Multiple:  { bg: '#f0f6ff', color: '#1d4ed8', border: '#b0ccf4' },
}

export const SHOPPING_TABS = [
  {
    id: 'markets', icon: '🏺', label: 'Markets',
    sections: [
      { type: 'shop-grid', emoji: '🏺', title: 'Best Markets', sub: 'Food markets, flea markets and covered halls — the heartbeat of Spanish daily life', shops: MARKET_SHOPS },
    ],
  },
  {
    id: 'ceramics', icon: '🎨', label: 'Ceramics & Crafts',
    sections: [
      { type: 'shop-grid', emoji: '🎨', title: 'Ceramics & Crafts', sub: 'Andalusian azulejo tiles, Moorish pottery, Granadan marquetry — unmissable Spanish artisanship', shops: CERAMICS_SHOPS },
    ],
  },
  {
    id: 'fashion', icon: '👗', label: 'Fashion',
    sections: [
      { type: 'shop-grid', emoji: '👗', title: 'Spanish Fashion', sub: 'From Loewe luxury to Zara at source — Spain\'s fashion credentials run deep', shops: FASHION_SHOPS },
    ],
  },
  {
    id: 'local', icon: '🥓', label: 'Food & Local Finds',
    sections: [
      { type: 'shop-grid', emoji: '🥓', title: 'Food & Local Finds', sub: 'Jamón ibérico, olive oil, cava and turrón — the finest edible souvenirs in the world', shops: LOCAL_SHOPS },
    ],
  },
]

export const PRIORITY_COLOR = { HIGHEST: 'var(--color-primary)', HIGH: '#e07b39', MEDIUM: '#4a90d9' }
