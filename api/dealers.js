import { createClient } from '@supabase/supabase-js';

const MOCK_MODE = !process.env.SUPABASE_URL || !process.env.SUPABASE_ANON_KEY;
const HAS_PLACES = !!process.env.GOOGLE_PLACES_API_KEY;
const HAS_MAPS   = !!process.env.GOOGLE_MAPS_API_KEY;

const supabase = MOCK_MODE
  ? null
  : createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

// ── Mock dealer data (used when Supabase is not configured) ───────────────────
const MOCK_DEALERS = [
  { id: 'm1', brand: 'hero', name: 'Hero MotoCorp Authorized Showroom', address: 'Kamaladi, Kathmandu', city: 'Kathmandu', phone: '+977-1-4123456', rating: 4.5, user_ratings_total: 128, lat: 27.7172, lng: 85.3240, is_verified: true,  open_now: true,  source: 'verified' },
  { id: 'm2', brand: 'hero', name: 'Hero Sales & Service Centre',        address: 'Lalitpur, Patan',   city: 'Kathmandu', phone: '+977-1-5523456', rating: 4.2, user_ratings_total: 74,  lat: 27.6766, lng: 85.3116, is_verified: false, open_now: true,  source: 'google'   },
  { id: 'm3', brand: 'hero', name: 'Sunrise Hero Dealers',               address: 'Chabahil, Kathmandu',city: 'Kathmandu', phone: '+977-1-4456789', rating: 4.0, user_ratings_total: 42,  lat: 27.7205, lng: 85.3488, is_verified: false, open_now: false, source: 'google'   },
  { id: 'm4', brand: 'honda',   name: 'Honda Authorized Nepal',          address: 'Bag Bazaar, Kathmandu', city: 'Kathmandu', phone: '+977-1-4234567', rating: 4.6, user_ratings_total: 210, lat: 27.7054, lng: 85.3181, is_verified: true,  open_now: true,  source: 'verified' },
  { id: 'm5', brand: 'honda',   name: 'Honda Bikes Nepal',               address: 'Maharajgunj, Kathmandu', city: 'Kathmandu', phone: '+977-1-4567890', rating: 4.1, user_ratings_total: 89,  lat: 27.7342, lng: 85.3296, is_verified: false, open_now: true,  source: 'google'   },
  { id: 'm6', brand: 'yamaha',  name: 'Yamaha Official Nepal',           address: 'New Baneshwor, Kathmandu', city: 'Kathmandu', phone: '+977-1-4789012', rating: 4.4, user_ratings_total: 156, lat: 27.6939, lng: 85.3423, is_verified: true,  open_now: true,  source: 'verified' },
  { id: 'm7', brand: 'oneplus', name: 'OnePlus Exclusive Store Nepal',   address: 'New Road, Kathmandu',  city: 'Kathmandu', phone: '+977-1-4345678', rating: 4.3, user_ratings_total: 92,  lat: 27.7050, lng: 85.3144, is_verified: true,  open_now: true,  source: 'verified' },
  { id: 'm8', brand: 'oneplus', name: 'Tech World Nepal',                address: 'Durbarmarg, Kathmandu', city: 'Kathmandu', phone: '+977-1-4567812', rating: 4.1, user_ratings_total: 67,  lat: 27.7107, lng: 85.3193, is_verified: false, open_now: false, source: 'google'   },
  { id: 'm9', brand: 'samsung', name: 'Samsung SmartCafé Nepal',         address: 'Thamel, Kathmandu',    city: 'Kathmandu', phone: '+977-1-4901234', rating: 4.5, user_ratings_total: 184, lat: 27.7150, lng: 85.3124, is_verified: true,  open_now: true,  source: 'verified' },
  { id: 'm10',brand: 'daikin',  name: 'Daikin Nepal Official Dealer',    address: 'Putalisadak, Kathmandu', city: 'Kathmandu', phone: '+977-1-4678901', rating: 4.3, user_ratings_total: 61,  lat: 27.7085, lng: 85.3320, is_verified: true,  open_now: true,  source: 'verified' },
  { id: 'm11',brand: 'lg',      name: 'LG Authorised Service',           address: 'Thapathali, Kathmandu', city: 'Kathmandu', phone: '+977-1-4234123', rating: 4.0, user_ratings_total: 45,  lat: 27.6993, lng: 85.3213, is_verified: false, open_now: true,  source: 'google'   },
];

// ── Google Places helpers ─────────────────────────────────────────────────────

async function searchGooglePlaces({ brand, city, lat, lng }) {
  const key = process.env.GOOGLE_PLACES_API_KEY;
  let url;

  if (lat && lng) {
    url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json` +
      `?location=${lat},${lng}&radius=15000` +
      `&keyword=${encodeURIComponent(brand + ' dealer')}&key=${key}`;
  } else {
    url = `https://maps.googleapis.com/maps/api/place/textsearch/json` +
      `?query=${encodeURIComponent(brand + ' authorized dealer ' + city)}&key=${key}`;
  }

  const r = await fetch(url);
  const data = await r.json();
  if (data.status !== 'OK' && data.status !== 'ZERO_RESULTS') {
    console.warn('[dealers] Places API status:', data.status, data.error_message || '');
  }
  if (!data.results?.length) return [];

  // Fetch phone numbers in parallel (Places Details — Basic Data category)
  const top5 = data.results.slice(0, 5);
  const phones = await Promise.all(
    top5.map(p => fetchPlacePhone(p.place_id, key))
  );

  return top5.map((p, i) => ({
    id: p.place_id,
    brand: brand.toLowerCase(),
    name: p.name,
    address: p.formatted_address || p.vicinity || '',
    city: city || 'Unknown',
    lat: p.geometry?.location?.lat || null,
    lng: p.geometry?.location?.lng || null,
    phone: phones[i] || null,
    rating: p.rating || null,
    user_ratings_total: p.user_ratings_total || 0,
    is_verified: false,
    open_now: p.opening_hours?.open_now ?? null,
    source: 'google',
    maps_url: `https://www.google.com/maps/place/?q=place_id:${p.place_id}`
  }));
}

async function fetchPlacePhone(placeId, key) {
  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json` +
      `?place_id=${placeId}&fields=formatted_phone_number&key=${key}`;
    const r = await fetch(url);
    const data = await r.json();
    return data.result?.formatted_phone_number || null;
  } catch {
    return null;
  }
}

// ── Main handler ──────────────────────────────────────────────────────────────

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  const { brand, city, lat, lng } = req.query;
  if (!brand) return res.status(400).json({ error: 'brand is required' });
  if (!city && !(lat && lng)) return res.status(400).json({ error: 'Provide city or lat+lng' });

  const brandNorm = brand.toLowerCase().trim();
  const cityNorm  = city?.trim() || '';
  const hasCoords = !!(lat && lng);

  let dealers = [];

  // ── 1. Supabase verified dealers ──────────────────────────────────────────
  if (!MOCK_MODE) {
    let q = supabase
      .from('dealers')
      .select('*')
      .ilike('brand', `%${brandNorm}%`)
      .order('is_verified', { ascending: false })
      .order('rating', { ascending: false })
      .limit(5);

    if (cityNorm) q = q.ilike('city', `%${cityNorm}%`);

    const { data, error } = await q;
    if (error) console.error('[dealers] Supabase error:', error.message);
    dealers = (data || []).map(d => ({ ...d, source: 'verified' }));
  }

  // ── 2. Google Places (fill remaining slots) ───────────────────────────────
  if (HAS_PLACES && dealers.length < 5) {
    try {
      const placesResults = await searchGooglePlaces({
        brand: brandNorm,
        city: cityNorm || null,
        lat: hasCoords ? lat : null,
        lng: hasCoords ? lng : null
      });
      const existingNames = new Set(dealers.map(d => d.name.toLowerCase()));
      const newOnes = placesResults.filter(p => !existingNames.has(p.name.toLowerCase()));
      dealers = [...dealers, ...newOnes].slice(0, 5);
    } catch (err) {
      console.error('[dealers] Places fetch error:', err.message);
    }
  }

  // ── 3. Mock mode fallback ─────────────────────────────────────────────────
  if (MOCK_MODE) {
    dealers = MOCK_DEALERS
      .filter(d => d.brand === brandNorm || d.brand.includes(brandNorm) || brandNorm.includes(d.brand))
      .slice(0, 5);

    if (!dealers.length) {
      // Generic fallback: show first 3 with the requested brand name
      dealers = MOCK_DEALERS.slice(0, 3).map(d => ({
        ...d,
        id: 'mock-' + d.id,
        brand: brandNorm,
        name: `${brand} Dealer — ${d.name.split(' ').slice(-1)[0]}`,
        mock: true
      }));
    }
  }

  // Sort: verified first, then by rating
  dealers.sort((a, b) => {
    if (a.is_verified !== b.is_verified) return a.is_verified ? -1 : 1;
    return (b.rating || 0) - (a.rating || 0);
  });

  // ── Build map embed URL ───────────────────────────────────────────────────
  const mapQuery = cityNorm
    ? `${brand} dealer ${cityNorm}`
    : `${brand} dealer near me`;

  const map_embed_url = HAS_MAPS
    ? `https://www.google.com/maps/embed/v1/search` +
      `?key=${process.env.GOOGLE_MAPS_API_KEY}` +
      `&q=${encodeURIComponent(mapQuery)}&zoom=12`
    : null;

  const maps_search_url = hasCoords
    ? `https://www.google.com/maps/search/${encodeURIComponent(brand + ' dealer')}/@${lat},${lng},13z`
    : `https://www.google.com/maps/search/${encodeURIComponent(mapQuery)}`;

  return res.status(200).json({
    dealers,
    map_embed_url,
    maps_search_url,
    city: cityNorm || 'your location',
    mock: MOCK_MODE
  });
}
