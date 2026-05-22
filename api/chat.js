import Anthropic from '@anthropic-ai/sdk';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const products = JSON.parse(readFileSync(join(__dirname, '../data/products.json'), 'utf-8'));

const MOCK_MODE = !process.env.ANTHROPIC_API_KEY;
const client = MOCK_MODE ? null : new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const tools = [
  {
    name: 'search_products',
    description: 'Search the products database by category and price range. Use this to find the requested product and alternatives.',
    input_schema: {
      type: 'object',
      properties: {
        category: {
          type: 'string',
          description: 'Product category: bikes, phones, or appliances'
        },
        brand: {
          type: 'string',
          description: 'Optional brand filter (e.g. Apple, Samsung, OnePlus, Xiaomi, Google, Realme, Yamaha, Honda, Bajaj, TVS, Suzuki, Hero, Daikin, LG, Sony). Use when the user specifies a brand (e.g. "iphone" → Apple).'
        },
        min_price: {
          type: 'number',
          description: 'Minimum price in Rs. (default 0)'
        },
        max_price: {
          type: 'number',
          description: 'Maximum price in Rs. (the user budget)'
        },
        limit: {
          type: 'number',
          description: 'Max results to return (default 4)'
        }
      },
      required: ['max_price']
    }
  },
  {
    name: 'get_product_by_name',
    description: 'Look up a specific product by name to get its price and details.',
    input_schema: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          description: 'Product name to search for (partial match OK)'
        }
      },
      required: ['name']
    }
  }
];

function searchProducts({ category, brand, min_price = 0, max_price, limit = 4 }) {
  let results = [...products];
  if (category) {
    results = results.filter(p => p.category.toLowerCase() === category.toLowerCase());
  }
  if (brand) {
    results = results.filter(p => p.brand.toLowerCase() === brand.toLowerCase());
  }
  results = results.filter(p => p.price >= min_price && p.price <= max_price);
  results.sort((a, b) => b.value_score - a.value_score);
  return results.slice(0, limit);
}

function parseBudget(message) {
  const msg = message.toLowerCase();

  // "1.5 lakh", "1 lakh", "2 lakhs"
  const lakhMatch = msg.match(/(\d+(?:\.\d+)?)\s*lakh/i);
  if (lakhMatch) return Math.round(parseFloat(lakhMatch[1]) * 100000);

  // "1,00,000", "100000", "100,000", "1.00.000" — find biggest number in message
  const nums = msg.match(/\d[\d,.]*\d|\d/g) || [];
  const parsed = nums
    .map(n => parseInt(n.replace(/[,.]/g, ''), 10))
    .filter(n => !isNaN(n) && n >= 1000);
  if (parsed.length) return Math.max(...parsed);

  return 200000;
}

function detectBrand(message) {
  const msg = message.toLowerCase();
  const map = {
    apple: ['apple', 'iphone'],
    samsung: ['samsung', 'galaxy'],
    oneplus: ['oneplus', 'one plus'],
    xiaomi: ['xiaomi', 'redmi', 'mi '],
    google: ['google', 'pixel'],
    realme: ['realme'],
    yamaha: ['yamaha'],
    honda: ['honda'],
    bajaj: ['bajaj'],
    tvs: ['tvs'],
    suzuki: ['suzuki'],
    hero: ['hero'],
    daikin: ['daikin'],
    lg: ['lg'],
    sony: ['sony']
  };
  for (const [brand, keywords] of Object.entries(map)) {
    if (keywords.some(k => msg.includes(k))) {
      return brand.charAt(0).toUpperCase() + brand.slice(1);
    }
  }
  return null;
}

function getProductByName({ name }) {
  const query = name.toLowerCase();
  return products.find(p => p.name.toLowerCase().includes(query) || query.includes(p.name.toLowerCase().split(' ')[1]?.toLowerCase() || '')) || null;
}

function mockResponse(message) {
  const budget = parseBudget(message);
  const brand = detectBrand(message);

  const msg = message.toLowerCase();
  let category = null;
  if (/phone|iphone|samsung|oneplus|xiaomi|pixel|realme|galaxy|redmi/i.test(msg)) category = 'phones';
  else if (/bike|scooter|motorcycle|yamaha|honda|bajaj|tvs|suzuki|hero/i.test(msg)) category = 'bikes';
  else if (/\bac\b|tv|washing|fridge|appliance|daikin|aircon/i.test(msg)) category = 'appliances';
  else category = 'phones'; // default

  // Try brand+category first; if empty, fall back to category only
  let matches = searchProducts({ category, brand, max_price: budget, limit: 4 });
  let usedFallback = false;
  if (!matches.length && brand) {
    matches = searchProducts({ category, max_price: budget, limit: 4 });
    usedFallback = true;
  }

  if (!matches.length) {
    return {
      type: 'product_search',
      message: `No ${category} found under Rs. ${budget.toLocaleString('en-IN')}. Try a higher budget.`,
      requested_product: { name: message, price: null, found: false, over_budget: false },
      products: [],
      ask_payment_options: false,
      payment_question: ''
    };
  }

  const brandLabel = brand ? `${brand} ` : '';
  const summary = usedFallback
    ? `No ${brand} options under Rs. ${budget.toLocaleString('en-IN')} — here are ${matches.length} ${category} alternatives sorted by value.`
    : `Found ${matches.length} ${brandLabel}${category} option${matches.length === 1 ? '' : 's'} under Rs. ${budget.toLocaleString('en-IN')}, sorted by value score.`;

  const highlights = [
    'Best power-to-price ratio in this segment',
    'Highest value score — most specs per rupee',
    'Top-rated for reliability and after-sales service',
    'Lowest total cost of ownership in category'
  ];

  return {
    type: 'product_search',
    message: summary,
    requested_product: { name: brand ? `${brand} ${category.slice(0, -1)}` : message.split(',')[0].replace(/i want |i need |buy |looking for /gi, '').trim(), price: null, found: false, over_budget: false },
    products: matches.map((p, i) => ({ ...p, highlight: highlights[i] || highlights[0] })),
    ask_payment_options: true,
    payment_question: 'Would you like to see EMI and payment options for any of these?'
  };
}

const SYSTEM_PROMPT = `You are an AI shopping assistant. When a user asks about a product with a budget:

1. Use get_product_by_name to find the exact product they mentioned and get its real price
2. Use search_products to find alternatives within their budget and the same category
3. Return ONLY a JSON object (no markdown, no text outside JSON) in this exact format:

{
  "type": "product_search",
  "message": "Friendly 1-2 sentence summary of what you found",
  "requested_product": {
    "name": "exact product name from user",
    "price": <number or null if not found>,
    "found": <true or false>,
    "over_budget": <true if price > budget, false otherwise>
  },
  "products": [
    {
      "id": <number>,
      "name": "<string>",
      "brand": "<string>",
      "price": <number>,
      "category": "<string>",
      "specs": {},
      "value_score": <number>,
      "highlight": "<one compelling reason why this is good value>"
    }
  ],
  "ask_payment_options": true,
  "payment_question": "Would you like to see EMI and payment options for any of these?"
}

Rules:
- Always include the requested product in the products array if it exists in DB (even if over budget — mark it clearly in highlight)
- Sort products: best value score first
- value_score highlight: explain WHY the score is high (e.g. "Best power-to-price in segment at 17.2 PS for Rs. 1.55L")
- If the exact product is over budget, still include up to 3 alternatives within budget
- ONLY return valid JSON. No explanation, no markdown.`;

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { message, history = [] } = req.body || {};
  if (!message) return res.status(400).json({ error: 'message is required' });

  if (MOCK_MODE) return res.status(200).json(mockResponse(message));

  const messages = [...history, { role: 'user', content: message }];

  try {
    let response = await client.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 2048,
      system: SYSTEM_PROMPT,
      tools,
      messages
    });

    // Agentic tool-use loop
    while (response.stop_reason === 'tool_use') {
      const assistantMessage = { role: 'assistant', content: response.content };
      messages.push(assistantMessage);

      const toolResults = [];
      for (const block of response.content) {
        if (block.type !== 'tool_use') continue;

        let result;
        if (block.name === 'search_products') result = searchProducts(block.input);
        else if (block.name === 'get_product_by_name') result = getProductByName(block.input);
        else result = { error: 'Unknown tool' };

        toolResults.push({
          type: 'tool_result',
          tool_use_id: block.id,
          content: JSON.stringify(result)
        });
      }

      messages.push({ role: 'user', content: toolResults });

      response = await client.messages.create({
        model: 'claude-sonnet-4-6',
        max_tokens: 2048,
        system: SYSTEM_PROMPT,
        tools,
        messages
      });
    }

    const textBlock = response.content.find(b => b.type === 'text');
    if (!textBlock) return res.status(500).json({ error: 'No text response from model' });

    let parsed;
    try {
      // Strip any accidental markdown fences
      const clean = textBlock.text.replace(/^```json\s*/i, '').replace(/```\s*$/i, '').trim();
      parsed = JSON.parse(clean);
    } catch {
      return res.status(200).json({
        type: 'error',
        message: 'I had trouble processing that. Try: "I want iPhone 15, budget Rs. 1,20,000"'
      });
    }

    return res.status(200).json(parsed);
  } catch (err) {
    console.error('Claude API error:', err);
    return res.status(500).json({ error: err.message });
  }
}
