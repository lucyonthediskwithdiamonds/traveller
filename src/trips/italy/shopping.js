// Italy shopping data

const MARKET_SHOPS = [
  { name: 'Campo de\' Fiori Market', city: 'Rome', area: 'Campo de\' Fiori', rating: '4.3', reviews: '14200', type: 'Morning Market', notes: 'Rome\'s most atmospheric daily market (Mon–Sat, ends noon). Flowers, produce, local cheeses, olive oil. The piazza becomes a bar district by night.', priority: true },
  { name: 'Porta Portese Flea Market', city: 'Rome', area: 'Trastevere', rating: '4.2', reviews: '18500', type: 'Flea Market', notes: 'Rome\'s giant Sunday flea market. Antiques, vintage, clothing, curiosities. Start at 7am, leave by 10am before it gets too crowded. Watch your pockets.', priority: true },
  { name: 'Mercato Centrale', city: 'Florence', area: 'San Lorenzo', rating: '4.5', reviews: '22000', type: 'Two-Level Food Market', notes: 'Ground floor is a working produce market since 1874. Upstairs is a gourmet food hall — pasta, pizza, lampredotto, gelato. Perfect for lunch.', priority: true },
  { name: 'Mercato di Rialto', city: 'Venice', area: 'San Polo', rating: '4.5', reviews: '16800', type: 'Fish & Produce Market', notes: 'Venice\'s historic market since 1097. Best before 9am when local restaurants shop. Extraordinary Adriatic seafood — mantis shrimp, soft-shell crab, granseola.', priority: true },
  { name: 'Mercato Ballaro', city: 'Sicily', area: 'Palermo', rating: '4.5', reviews: '8400', type: 'Arab-style Street Market', notes: 'Palermo\'s most atmospheric market. Vendors call in Arabic-dialect chant. Fresh tuna, swordfish, vegetables, street food stalls. Go in the morning.', priority: true },
  { name: 'Mercato di Porta Romana', city: 'Milan', area: 'Porta Romana', rating: '4.3', reviews: '4200', type: 'Local Produce Market', notes: 'Milan\'s best local market. Less touristy than the centre. Great for Milanese produce — formaggi, salumi and local seasonal vegetables.', priority: false },
]

const ARTISAN_SHOPS = [
  { name: 'Giulio Giannini e Figlio', city: 'Florence', area: 'Oltrarno', rating: '4.8', reviews: '1240', type: 'Marbled Paper & Bookbinding', notes: 'Florence\'s finest paper marbling workshop since 1856. Hand-marbled notebooks, journals, frames. Watch the artisans at work. Unmissable.', priority: true },
  { name: 'Officina Profumo-Farmaceutica di Santa Maria Novella', city: 'Florence', area: 'Santa Maria Novella', rating: '4.8', reviews: '9800', type: 'Apothecary', notes: 'Founded by Dominican friars in 1612. Still produces ancient herbal preparations. The most beautiful shop interior in Florence. Rose water, pot pourri, soap.', priority: true },
  { name: 'Murrina Veneziana', city: 'Venice', area: 'Murano', rating: '4.7', reviews: '2340', type: 'Murano Glass', notes: 'Genuine family glass studio on Murano. Watch the glassblowing, buy direct from the makers. Avoid the large commercial shops on the main street.', priority: true },
  { name: 'Signoria Firenze', city: 'Florence', area: 'Piazza della Signoria', rating: '4.6', reviews: '1580', type: 'Leather Goods', notes: 'Handcrafted Florentine leather. Wallets, bags, belts made in the Oltrarno workshops behind the shop. Not the cheapest, but genuinely made in Florence.', priority: false },
  { name: 'Alberto Valese-Ebru', city: 'Venice', area: 'Santo Stefano', rating: '4.7', reviews: '890', type: 'Paper Marbling', notes: 'Venetian marbled paper, the city\'s other great artisan tradition alongside glass. Notebooks, stationery and scarves. Alberto has been marbling for 40 years.', priority: false },
  { name: 'Marzapane Roma', city: 'Rome', area: 'Trastevere', rating: '4.6', reviews: '1120', type: 'Artisan Ceramics', notes: 'Beautiful hand-painted ceramic tiles, plates and bowls in Roman and Italian designs. Great gifts. Shipping available worldwide.', priority: false },
]

const FASHION_SHOPS = [
  { name: 'Prada (Via Montenapoleone)', city: 'Milan', area: 'Quadrilatero', rating: '4.5', reviews: '4200', type: 'Italian Luxury', notes: 'Prada\'s home city and flagship store. Full collection including resort and limited pieces. VAT refund on purchases over €155.', priority: true },
  { name: 'Armani Flagship', city: 'Milan', area: 'Via Manzoni', rating: '4.6', reviews: '3800', type: 'Italian Luxury', notes: 'The Armani Silos museum is upstairs. Shop below has full Giorgio Armani, Emporio and accessories. Tax refund service on site.', priority: false },
  { name: 'La Rinascente', city: 'Milan', area: 'Duomo', rating: '4.1', reviews: '28000', type: 'Italian Department Store', notes: 'Milan\'s finest department store. Rooftop bar with Duomo views. Excellent beauty, home and food floors. Global Tax Free desk on ground floor.', priority: false },
  { name: 'Gucci Garden Galleria', city: 'Florence', area: 'Piazza della Signoria', rating: '4.6', reviews: '6700', type: 'Gucci Museum & Shop', notes: 'Gucci was founded in Florence. This boutique and museum tells the story. Limited Florence-only pieces available. Worth visiting even without buying.', priority: true },
  { name: 'Bulgari', city: 'Rome', area: 'Via Condotti', rating: '4.5', reviews: '2100', type: 'Italian Jewellery', notes: 'Founded in Rome in 1884. Flagship on Via Condotti. The Roman Serpenti collection references the city. Tax refund service.', priority: false },
  { name: 'Diesel Flagship', city: 'Milan', area: 'Galleria Vittorio Emanuele', rating: '4.3', reviews: '3400', type: 'Italian Denim & Streetwear', notes: 'Italian denim brand at its Milan flagship. Better selection than international stores. Current and archive pieces.', priority: false },
]

const LOCAL_SHOPS = [
  { name: 'Eataly Roma', city: 'Rome', area: 'Ostiense', rating: '4.3', reviews: '22000', type: 'Italian Food Emporium', notes: 'Oscar Farinetti\'s Italian food cathedral. Pasta, cheese, wine, olive oil, cured meats. Restaurants on-site. The best place to buy Italian ingredients to take home.', priority: true },
  { name: 'Alessi Flagship', city: 'Milan', area: 'Brera', rating: '4.6', reviews: '4500', type: 'Italian Design', notes: 'Italy\'s most iconic design brand. Kitchen objects, homeware, accessories designed by Sottsass, Starck, Mendini. Great gift pieces from €20.', priority: true },
  { name: 'Enoteca Pitti Gola e Cantina', city: 'Florence', area: 'Oltrarno', rating: '4.7', reviews: '1890', type: 'Tuscan Wine', notes: 'Florence\'s finest wine shop. Excellent Chianti Classico, Brunello, Morellino selections. Staff knowledgeable about aged vintages. Shipping available.', priority: true },
  { name: 'Volpetti Deli', city: 'Rome', area: 'Testaccio', rating: '4.7', reviews: '3200', type: 'Roman Deli', notes: 'Rome\'s finest salumeria. Extraordinary jamón, cheese, truffle products. Vacuum-pack anything for travel. The parmigiano aged 36 months is exceptional.', priority: true },
  { name: 'Drogheria Calzolari', city: 'Venice', area: 'Campo Santa Margherita', rating: '4.6', reviews: '890', type: 'Venetian Grocery', notes: 'Old-school Venetian drogheria. Artisan pasta, Venetian spices, bigoli, local wines. The proprietor will wrap everything for travel. Rare and authentic.', priority: false },
  { name: 'Dolceria Bonajuto', city: 'Sicily', area: 'Modica', rating: '4.8', reviews: '3400', type: 'Modica Chocolate', notes: 'Since 1880. World-famous cold-process Modica chocolate with no cocoa butter added. Grainy, intense, nothing like regular chocolate. Buy their full range.', priority: true },
]

export const CITY_STYLE = {
  Rome:     { bg: '#fff8f0', color: '#c0773a', border: '#f5d0a0' },
  Florence: { bg: '#fff5f5', color: '#c0392b', border: '#f4b8b8' },
  Venice:   { bg: '#f0f5ff', color: '#1d4ed8', border: '#b0ccf4' },
  Amalfi:   { bg: '#f0fff5', color: '#1a7a3f', border: '#9fd4b2' },
  Milan:    { bg: '#f8f0ff', color: '#6d28d9', border: '#c4b0f4' },
  Sicily:   { bg: '#fff5ee', color: '#b85000', border: '#f5c090' },
  Multiple: { bg: '#f0f6ff', color: '#1d4ed8', border: '#b0ccf4' },
}

export const SHOPPING_TABS = [
  {
    id: 'markets', icon: '🏺', label: 'Markets',
    sections: [
      { type: 'shop-grid', emoji: '🏺', title: 'Best Markets', sub: 'From ancient fish markets to Sunday flea markets — Italy\'s markets are where real life happens', shops: MARKET_SHOPS },
    ],
  },
  {
    id: 'artisan', icon: '✍️', label: 'Artisan',
    sections: [
      { type: 'shop-grid', emoji: '✍️', title: 'Artisan & Craft', sub: 'Florentine leather, Murano glass, marbled paper, Santa Maria Novella perfumes — the world\'s finest artisan traditions', shops: ARTISAN_SHOPS },
    ],
  },
  {
    id: 'fashion', icon: '👗', label: 'Fashion',
    sections: [
      { type: 'shop-grid', emoji: '👗', title: 'Italian Fashion & Luxury', sub: 'Prada in Milan, Gucci in Florence, Bulgari in Rome — Italian luxury at the source', shops: FASHION_SHOPS },
    ],
  },
  {
    id: 'local', icon: '🧀', label: 'Food & Local',
    sections: [
      { type: 'shop-grid', emoji: '🧀', title: 'Food & Local Finds', sub: 'Truffle, aged parmigiano, Brunello wine, Modica chocolate — the finest edible Italy has to offer', shops: LOCAL_SHOPS },
    ],
  },
]

export const PRIORITY_COLOR = { HIGHEST: 'var(--color-primary)', HIGH: '#e07b39', MEDIUM: '#4a90d9' }
