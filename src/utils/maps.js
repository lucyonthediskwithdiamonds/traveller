// Generate a Google Maps search URL for a place name + city context
export function mapsUrl(placeName, city = 'Japan') {
  // Strip description after em-dash, en-dash, opening paren, or ¥ price
  const clean = placeName
    .replace(/^[^a-zA-Z0-9\u3000-\u9fff\u30A0-\u30FF（【]/g, '') // strip leading emojis
    .split(/\s*[—–(¥]/)[0]
    .trim()
  const query = `${clean} ${city} Japan`
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`
}
