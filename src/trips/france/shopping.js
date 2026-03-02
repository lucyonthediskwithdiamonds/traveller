const MARKET_SHOPS = [
  { name: 'Marché d\'Aligre', city: 'Paris', area: 'Bastille', rating: '4.6', type: 'Food & Flea Market', notes: 'Best combined food and flea market in Paris. Daily except Monday. Arrive before 10am for vintage dealers.' },
  { name: 'Marché des Capucins', city: 'Bordeaux', area: 'Capucins', rating: '4.7', type: 'Covered Food Market', notes: 'The belly of Bordeaux. Oysters and Sauternes at 9am is a local tradition. Saturday is the event.' },
  { name: 'Halles de Lyon Paul Bocuse', city: 'Lyon', area: 'Part-Dieu', rating: '4.8', type: 'Covered Food Market', notes: 'Temple of Lyonnais food culture. Trolliet for charcuterie, Mère Richard for Saint-Marcellin cheese.' },
  { name: 'Cours Saleya', city: 'Nice', area: 'Vieux-Nice', rating: '4.5', type: 'Flower & Food Market', notes: 'Daily morning market except Monday. Socca stalls, local flowers, Niçoise olives, pissaladière.' },
  { name: 'Marché du Luberon (Apt)', city: 'Provence', area: 'Apt', rating: '4.6', type: 'Saturday Market', notes: 'Best Provençal market. Lavender honey, tapenade, goat cheese, crystallised fruit. Saturdays only.' },
  { name: 'Marché de Noël de Strasbourg', city: 'Alsace', area: 'Place Broglie', rating: '4.8', type: 'Christmas Market', notes: 'Oldest Christmas market in France (since 1570). Bredele biscuits, mulled wine, hand-carved ornaments.' },
]

const FASHION_SHOPS = [
  { name: 'Le Bon Marché', city: 'Paris', area: 'Saint-Germain', rating: '4.5', type: 'Luxury Department Store', notes: 'Paris\'s most elegant department store. Excellent food hall La Grande Épicerie next door.' },
  { name: 'Merci', city: 'Paris', area: 'Le Marais', rating: '4.6', type: 'Concept Store', notes: 'Multi-brand concept store donating profits to charity. Excellent café in the basement.' },
  { name: 'Sandro', city: 'Paris', area: 'Le Marais / Saint-Germain', rating: '4.4', type: 'French Ready-to-Wear', notes: 'Parisian chic at accessible prices. Multiple locations. Better value than flagship luxury.' },
  { name: 'APC', city: 'Paris', area: 'Saint-Germain', rating: '4.5', type: 'French Minimalist', notes: 'Understated Parisian style. Excellent raw denim, outerwear and basics. Multiple Paris locations.' },
  { name: 'Rouje', city: 'Paris', area: 'Le Marais', rating: '4.4', type: 'French Feminine', notes: 'Jeanne Damas\'s brand. The definitive French girl aesthetic — floral dresses, relaxed tailoring.' },
  { name: 'Isabel Marant', city: 'Paris', area: 'Le Marais', rating: '4.5', type: 'French Designer', notes: 'Bohemian Parisian chic. Best for women\'s outerwear, boots, and knitwear. Marais flagship.' },
]

const LOCAL_SHOPS = [
  { name: 'Baillardran', city: 'Bordeaux', area: 'Multiple locations', rating: '4.7', type: 'Canelés', notes: 'The definitive canelé — caramelised rum and vanilla pastry from Bordeaux. Best eaten same day.' },
  { name: 'Bernachon', city: 'Lyon', area: 'Brotteaux', rating: '4.8', type: 'Artisan Chocolatier', notes: 'One of France\'s great chocolatiers. Bean-to-bar since 1953. The Palais d\'Or is legendary.' },
  { name: 'L\'Olivier', city: 'Paris', area: 'Île Saint-Louis', rating: '4.5', type: 'Olive Oil & Provençal', notes: 'Stunning selection of AOC olive oils, tapenades, and Provençal products. Great gifts.' },
  { name: 'Alziari', city: 'Nice', area: 'Vieux-Nice', rating: '4.6', type: 'Niçoise Olive Products', notes: 'Family-run since 1868. Cold-pressed Niçoise olive oil, flavoured oils, olive wood items.' },
  { name: 'Épicerie Fine Provençale', city: 'Provence', area: 'Aix-en-Provence', rating: '4.4', type: 'Provençal Delicatessen', notes: 'Lavender honey, herbes de Provence, tapenade, Cavaillon melon jam. Perfect edible gifts.' },
  { name: 'Maison Alsacienne de Biscuiterie', city: 'Alsace', area: 'Strasbourg', rating: '4.5', type: 'Alsatian Biscuits', notes: 'Bredele, pain d\'épices, Mannele — traditional Alsatian baked goods and spiced breads.' },
]

export const CITY_STYLE = {
  Paris:    { bg: '#fdf5ff', color: '#6c3483', border: '#d7b8f3' },
  Nice:     { bg: '#f0f7ff', color: '#2874a6', border: '#a9cce3' },
  Bordeaux: { bg: '#fff8f0', color: '#6e2c00', border: '#e59866' },
  Lyon:     { bg: '#fff5f5', color: '#c0392b', border: '#f1948a' },
  Provence: { bg: '#fdf5ff', color: '#8e44ad', border: '#c39bd3' },
  Alsace:   { bg: '#fff5f5', color: '#c0392b', border: '#f1948a' },
  Multiple: { bg: '#f0f0f0', color: '#555', border: '#ddd' },
}

export const SHOPPING_TABS = [
  {
    id: 'markets',
    icon: '🏺',
    label: 'Markets',
    sections: [
      {
        type: 'shop-grid',
        emoji: '🏺',
        title: 'Markets & Food Halls',
        sub: 'From Paris flea markets to Provençal Saturday markets — France\'s market culture is unmissable',
        shops: MARKET_SHOPS,
      },
    ],
  },
  {
    id: 'fashion',
    icon: '👗',
    label: 'Fashion & Style',
    sections: [
      {
        type: 'shop-grid',
        emoji: '👗',
        title: 'French Fashion',
        sub: 'Parisian chic from department stores to independent concept stores — understated elegance is the brief',
        shops: FASHION_SHOPS,
      },
    ],
  },
  {
    id: 'local',
    icon: '🧀',
    label: 'Local Finds',
    sections: [
      {
        type: 'shop-grid',
        emoji: '🧀',
        title: 'Local & Artisan',
        sub: 'Canelés in Bordeaux, chocolate in Lyon, olive oil in Nice — the edible and artisan treasures of each region',
        shops: LOCAL_SHOPS,
      },
    ],
  },
]

export const PRIORITY_COLOR = { HIGHEST: 'var(--color-primary)', HIGH: '#e07b39', MEDIUM: '#4a90d9' }
