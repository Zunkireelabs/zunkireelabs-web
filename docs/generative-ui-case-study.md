# Generative UI: case study and implementation playbook

**Owner:** Zunkiree Labs · **Updated:** 12 Oct 2026
**Who this is for:** an engineer who has never built generative UI and needs to add it to a search bar, chat widget or product screen for any industry.
**Time to read:** about 20 minutes. Sections 1 to 3 explain it, 4 to 6 show how we built it twice, 7 and 8 are the how-to, 9 is the handoff checklist.

---

## 1. The idea in one page

A normal chat or search answer is **text**. A generative UI answer is **interface**: cards, chips, forms, maps, comparison tables and itineraries, drawn by your own components.

The model never writes HTML. It returns **structured data** (a small JSON object), and **your code** decides how to draw it. That is the whole trick, and it gives three things text can't:

1. **The user acts inside the answer.** They tap a chip, change a filter or press Book. They don't read a paragraph and then go somewhere else to do the work.
2. **The interface adapts.** The next question depends on the last answer, and the screen rebuilds around it.
3. **It stays on-brand and safe.** Only components you wrote can appear, and anything invalid falls back to plain text.

We have built this twice, in two different styles. Pick the right one before you start.

| | **Pattern A: Structured turn** | **Pattern B: Component registry** |
|---|---|---|
| **Where we built it** | `agency/` (TripBuddy trip planner) | `zunkireelabs-web` (live demo on `/solutions/generative-ui/`) |
| **What the model returns** | One JSON object per turn: `{ message, chips, inputEnabled, done, data }` | A list of `{ component, props }` items |
| **Who decides the layout** | The page: fixed chat layout, the model only changes the text and the chips | The model: it picks which components appear and in what order |
| **Best for** | Guided flows: "ask 7 questions, then build a result page" | Open questions: search, dashboards, "show me X" where the screen differs every time |
| **Effort** | Small: one prompt, one parser | Medium: a registry, schemas, a renderer |
| **Risk** | Low | Low, because of schema validation |

**Rule of thumb:** if you know the steps in advance, use A. If the user can ask anything and the answer should be a different screen each time, use B. Most real products end up using both: A to collect details, B to show results.

---

## 2. Search vs chat vs generative UI

| | Classic search | Chat (RAG) | Generative UI |
|---|---|---|---|
| **User types** | Keywords | A question | A question, or taps |
| **System returns** | A list of links | A paragraph, maybe with citations | Components: cards, forms, charts, actions |
| **Next step** | Click away, read, come back | Read, then go act somewhere else | Act right there: filter, compare, book |
| **Follow-up** | New query from scratch | Type another message | Tap a component. The screen updates in place |
| **"I don't know what to ask"** | Poor | Medium | Good: the form asks the next question |
| **Brand and design control** | Full | Low | Full (only your components) |
| **Risk of a wrong output** | Low | Medium (invented text) | Low (schema check, text fallback) |

**Same request, three answers.** The user types: *"3-bedroom flats under 5 crore near a school"*.
- **Search:** a list of pages that contain those words.
- **Chat:** "There are several options. Listing A is 4.8 crore and 600 m from a school…" and the user still has to go and find it.
- **Generative UI:** a grid of six matching homes, a map with price pins, filter chips already set (3 bed, under 5 crore, near a school), a payment calculator and a "Compare the top two" button. Tapping a chip changes the screen in front of them. We built exactly this as the **In-product assistant** tab of the demo.

---

## 3. How it works (the five building blocks)

Every generative UI, in any industry, is these five parts. Build them in this order.

```
 user types or taps
        │
        ▼
 1 INTENT      the model reads the request plus the state so far
        │
        ▼
 2 DATA        tools fetch real facts (search index, catalogue, pricing, CRM)
        │       the model never invents prop values
        ▼
 3 CONTRACT    the model returns structured output matching a schema
        │       Pattern A: { message, chips, … }   Pattern B: [{ component, props }]
        ▼
 4 VALIDATE    your code checks the output against the schema
        │       invalid or unknown component → fall back to text
        ▼
 5 RENDER      your components draw it; each tap becomes the next input (back to 1)
```

| Block | What it is | Who owns it |
|---|---|---|
| **Registry** | The list of components allowed, each with a name, a one-line "use when…" description and a props schema | You (engineering and design) |
| **Contract** | The JSON shape the model must return | You |
| **Renderer** | Code that maps `{ component, props }` to real UI | You |
| **Fallback** | What the user sees if validation fails (always a readable text answer) | You |
| **Prompt** | Tells the model the contract, the registry and the rules | You, tuned over time |

---

## 4. Case study 1: TripBuddy trip planner (`agency/`)

**What it is.** A travel-agency site where a visitor picks a destination and a friendly AI companion asks seven quick questions with tappable chips, then builds a full trip page: hero image, day-by-day itinerary, budget, food, places, stays, a map and a "confirm" step. This is Pattern A.

**The user journey**

```
trip-planner page        chat page                      trip-result page
pick a destination  ──►  7 questions, one at a   ──►    full generated guide:
                         time, each with chips          hero, strip, itinerary,
                         (people, month, days,          budget, food, places,
                          style, budget, diet,          stay, pack list, map,
                          must-see)                     confirm card
```

**Where the code lives**

| File | Job |
|---|---|
| `agency/langchain-chat.js` | The conversation chain: system prompt, per-session memory, JSON parsing |
| `agency/api.js` | HTTP server: `POST /api/chat-ai` (one turn), `POST /api/trip-result` (final page JSON), `POST /api/plan`, `POST /api/chat`, `GET /api/youtube-video` |
| `agency/wiki-images.js` | Turns the model's `wikiTitle` strings into real photos from Wikipedia |
| `agency/src/chat/index.njk` | The chat UI: bubbles, chips, progress dots, typing effect |
| `agency/src/trip-result/index.njk` | Renders the final JSON into the guide page (the "renderer") |
| `agency/nginx/static.conf` | Serves static files and proxies `/api/` to the Node server on port 3001 |

### 4.1 The contract: one JSON object per turn

The model must answer **every** message with this object and nothing else:

```json
{
  "message": "Warm, short reply (2-3 sentences)",
  "chips": ["3 Days", "5 Days", "7 Days", "10 Days", "2 Weeks"],
  "inputEnabled": false,
  "done": false,
  "tripData": null
}
```

- `message` is what the companion says.
- `chips` are the tappable answers for the **current** question. The UI turns them into buttons. An empty list means "free text is better here".
- `inputEnabled` unlocks the text box only when typing makes sense (for example "any must-see places?").
- `done` becomes `true` only after all seven details are collected.
- `tripData` stays `null` until `done`, then holds the collected answers: `{ destination, people, month, days, style, budget, diet, mustSee }`.

**This is the generative part.** The screen isn't a fixed 7-step form. The model decides the chips for each step (it localises them: Japan gets different options from Nepal) and decides when it has enough to finish.

### 4.2 The server: a LangChain chain with memory (`langchain-chat.js`)

The shape of the code, trimmed:

```js
import { ChatOpenAI } from '@langchain/openai';
import { ChatPromptTemplate, SystemMessagePromptTemplate,
         HumanMessagePromptTemplate, MessagesPlaceholder } from '@langchain/core/prompts';
import { RunnableWithMessageHistory } from '@langchain/core/runnables';
import { InMemoryChatMessageHistory } from '@langchain/core/chat_history';

const histories = new Map();                       // sessionId -> chat history
const getHistory = (id) => histories.get(id) ??
  histories.set(id, new InMemoryChatMessageHistory()).get(id);

const prompt = ChatPromptTemplate.fromMessages([
  SystemMessagePromptTemplate.fromTemplate(buildSystemPrompt(destination)), // contract + rules + chip examples
  new MessagesPlaceholder('history'),
  HumanMessagePromptTemplate.fromTemplate('{input}'),
]);

const chain = new RunnableWithMessageHistory({
  runnable: prompt.pipe(new ChatOpenAI({ model: 'gpt-4o', temperature: 0.7 })),
  getMessageHistory: getHistory,
  inputMessagesKey: 'input',
  historyMessagesKey: 'history',
});

const result = await chain.invoke({ input: message }, { configurable: { sessionId } });
// then: strip ``` fences, JSON.parse, fall back to { message: raw, chips: [], inputEnabled: true }
```

The system prompt does the heavy lifting. It lists the seven details to collect, states the exact JSON shape, gives rules ("2 to 3 sentences", "3 to 5 chips", "`done` only when all seven are collected") and gives chip examples per question.

### 4.3 The client: render whatever the model sent (`chat/index.njk`)

The client has no hard-coded questions. It reacts to the response:

```js
async function processAIResponse(data) {
  if (data.done && data.tripData) {
    // all answers collected: show the loader, then open the result page
    location.href = '/trip-result/?' + new URLSearchParams(data.tripData);
    return;
  }
  renderChips(data.chips);              // chips -> buttons
  if (data.inputEnabled) enableInput(); // unlock free text only when asked
}
```

Tapping a chip sends its text back as the next message, so **a tap is an input**. That loop is the core of every generative UI.

### 4.4 The second generation: the result page (`api.js` → `callTripResult`)

When the chat finishes, `/api/trip-result` makes one larger model call with a second prompt. It returns a big JSON object (accent colour, tagline, history, a 4-photo strip, itinerary, budget, 5 foods, 4 places, 3 stays, must-see list, 10-item pack list, lat/lng). Server-side rules in the prompt keep it reliable: "itinerary has EXACTLY numberOfDays items", "food exactly 5 items", "wikiTitle must be a real Wikipedia title, or null".

Then `wiki-images.js` replaces each `wikiTitle` with a real photo, filtering out maps, satellite shots and artwork. **The model picks what to show; your code fetches the real assets.**

### 4.5 What worked

- **Chips instead of typing.** Seven answers in about a minute, with almost no typos.
- **One small contract.** The client is about 30 lines of rendering logic for the chat.
- **Localised chips.** The model adapts the options to the destination (this is hard to do with a fixed form).
- **Two prompts.** One for the conversation, one for the heavy result page. This keeps each prompt short and testable.
- **Real assets.** Wikipedia photos and a map make the generated page look hand-made.

### 4.6 Problems we found while writing this up (fix these before reusing the code)

| # | Problem | Why it matters | Fix |
|---|---|---|---|
| 1 | `chat/index.njk` calls `/api/chat-stream`, but `api.js` has no such route. | Every message tries streaming, fails, then falls back to `/api/chat-ai`. That's a wasted request, and the streaming code is dead. | Implement an SSE route, or delete the streaming branch. |
| 2 | `addUser(text)` writes the user's text into `innerHTML` without escaping. | Anything typed in the free-text box (for example `<img onerror=…>`) runs as HTML. | Use `textContent`, or the `esc()` helper that already exists in `trip-result/index.njk`. |
| 3 | The JSON contract is enforced only by the prompt plus regex clean-up. | One bad reply from the model degrades the whole turn silently. | Use structured output with a schema (section 8, step 3), then validate. |
| 4 | Conversation memory is an in-process `Map` with a 30-minute `setTimeout`. | Lost on restart, and not shared between server instances. | Store history in Redis or a database keyed by session. |
| 5 | Collected answers travel to the result page in the URL query string. | Long URLs, visible in history and logs. | `POST` them and redirect with a short result ID. |
| 6 | `Access-Control-Allow-Origin: *` on every route. | Any site can call your paid model endpoint. | Allow only your own origins and add rate limiting. |

These were found by reading the code and not by running it, so confirm each one before fixing.

---

## 5. Case study 2: the Nepal trip planner demo (`zunkireelabs-web`)

**Where:** `/solutions/generative-ui/`, in the "One request. Every interface." live demo.
**Source:** `src/pages/solutions/generative-ui.njk` (an Alpine.js component called `genDemo`). Photos are in `src/assets/images/genui-nepal/`. This is Pattern B, and it is a **simulation**: nothing is generated live, and the page says so.

The demo has four tabs. Each shows a different generative-UI job, with a different industry:

| Tab | Industry | What the visitor sees | Components in the registry |
|---|---|---|---|
| **Adaptive forms** (opens first) | Travel | Pick an experience, then places, then days. The form grows one question at a time and a live preview builds beside it. Generate shows a day-by-day itinerary with tweak chips. | `AdaptiveForm`, `ExperienceCard`, `FollowUpQuestion`, `PlacePicker`, `DayPicker`, `RoutePreview`, `Itinerary`, `TweakChips` |
| **Dashboards** | Travel | One request produces a whole trip page: hero, 7-day strip, top experiences, plan comparison, related questions. | `ItineraryHero`, `DayStrip`, `ExperienceCards`, `PlanCompare`, `Related` |
| **Internal tools** | SEO / analytics | A workspace with KPI cards, a traffic chart with a 7/30-day toggle and hover tooltip, a keyword table, country bars, an activity feed and AI insights. | `KpiRow`, `TrafficChart`, `KeywordTable`, `CountryBars`, `ActivityFeed`, `InsightCard` |
| **In-product assistant** | Real estate | A listings app with an assistant docked inside it. "Only near a school" adds a filter chip, narrows the grid and greys out map pins. "Compare the top two" opens a table. Tabs Buy / Rent / Saved and a price dropdown work. | `FilterBar`, `ListingGrid`, `MapCard`, `ResultList`, `PaymentCalc`, `CompareTable`, `RentVsBuy`, `SlotPicker` |

**Four things in the demo are worth copying**

1. **The form asks the next question.** Choosing "Adventure" adds "Guided trek or paragliding?". Choosing "Nature" adds "Jungle safari or bird walk?". Each is labelled "Added because you chose X", so the user sees the screen respond.
2. **A live preview.** Every answer updates a panel (experience photo, route, split of days), so the user sees the system understanding them before they press Generate.
3. **Staged generation.** "Choosing components → Validating props → Rendering" plays while skeletons shimmer. It makes the pattern visible and covers real latency.
4. **Tap = input.** Every chip, card, pin and slider changes state and updates the assistant's reply. Nothing needs typing.

**What is simulated, and what a real build does instead**

| Step | Demo (today) | Production |
|---|---|---|
| Follow-up questions | A fixed map per choice | The model picks 1 or 2 questions from context (structured output) |
| Photos and copy | Static files | Your CMS, product catalogue or media library |
| Itinerary, prices, EMI | Rules and formulas in the page | Tool calls to your pricing and availability services |
| Replies in the dock | Canned text | Real model output |

---

## 6. What the two case studies teach (and when to combine them)

- **A is the front door, B is the result.** TripBuddy collects seven answers (A) and then renders a big result page. The demo's Itinerary is the same result drawn from a component registry (B). In a real product, use A to qualify the user and B to present results.
- **Slots are the heart of A.** The seven questions (people, month, days, style, budget, diet, must-see) are "slots" the model fills. For any industry, list your slots first.
- **Components are the heart of B.** List the 6 to 10 components your product needs before you write any prompts.
- **Both need real data from tools.** Never let the model invent prices, availability, names or IDs.
- **Both need a fallback.** If validation fails, show a plain, correct text answer. That fallback is your safety net, so test it first.

---

## 7. The industry recipe

Use this for any industry. It is the same seven steps every time.

1. **Find the jobs.** Take the top 20 real queries (search logs, support tickets, sales calls) and group them into 5 to 8 jobs: browse, compare, configure, book, troubleshoot, plan…
2. **List the slots** (Pattern A). What does the system need to know before it can help? Write 4 to 8 slots, each with 3 to 5 sensible chip answers.
3. **Design the components** (Pattern B). One component per job, usually 6 to 10 in total. Give each a name, a "use when…" line and the props it needs.
4. **Wire the data.** For each component, write down which tool or API supplies its props.
5. **Add one adaptive question.** A component that lets the system ask instead of guess.
6. **Define the fallback.** What does the user see if the model output is invalid, a tool fails or nothing matches?
7. **Ship one surface first** (the search results panel, one landing-page flow, one in-app panel). Measure, then expand.

### Worksheet: fill this in per client

```
Industry / client:
Surface (search box, chat widget, in-app panel, landing page):
Top 10 real user requests:
Jobs (5-8):
Slots to collect (name: example chips):
Components (name | use when | props | data source):
Fallback text when nothing fits:
Never-allowed outputs (advice, prices not from a tool, …):
Success metric (lead rate, time to answer, bookings, tickets deflected):
```

### Starter blueprints by industry

| Industry | Slots the model collects (Pattern A) | Components it composes (Pattern B) | Never |
|---|---|---|---|
| **Travel** (TripBuddy, Nepal demo) | people, month, days, style, budget, diet, must-see | `ExperienceCard`, `PlacePicker`, `DayPicker`, `Itinerary`, `PlanCompare`, `MapCard` | Invent prices or opening times |
| **Real estate** (Nivas demo) | city, bedrooms, budget, near school or work, parking, buy or rent | `ListingGrid`, `MapCard`, `FilterBar`, `CompareTable`, `PaymentCalc`, `SlotPicker` | Show a listing that isn't in the feed |
| **Ecommerce** | use case, budget, size or fit, brand preference | `ProductGrid`, `FilterBar`, `CompareTable`, `SizeQuestion`, `AddToCart` | Invent stock or price |
| **Education / admissions** | country, level, subject, English score, budget, intake | `ProgramCards`, `EligibilityCheck`, `FeeTable`, `IntakeTimeline`, `CounsellorBooking` | Promise admission or visa results |
| **Healthcare / clinics** | symptom area, urgency, preferred day, insurance | `ServiceCard`, `DoctorCards`, `SlotPicker`, `Directions` | Diagnose or give medical advice; always route to a clinician |
| **Banking / fintech** | goal, amount, term, employment type | `RateTable`, `EligibilityQuestion`, `Calculator`, `ApplyCTA` | Quote a rate that isn't from the rate API |
| **SaaS / internal tools** (SEO workspace demo) | metric, date range, segment | `KpiRow`, `TrafficChart`, `DataTable`, `InsightCard`, `ActionChips` | Show data the user isn't permitted to see |
| **Recruiting / HR** | role, location, seniority, salary band | `JobCards`, `CompareTable`, `ApplyForm`, `InterviewSlots` | Rank candidates on protected traits |

---

## 8. Step-by-step build (LangChain)

Examples use **LangChain JS** (the stack in `agency/`) with notes for Python. These are sketches to adapt, not tested production code. Check the current LangChain and LangGraph docs for exact APIs before copying.

### Step 1. Write the registry as schemas (Zod in JS, Pydantic in Python)

```js
import { z } from 'zod';

const ListingGrid = z.object({
  component: z.literal('ListingGrid'),
  items: z.array(z.object({
    id: z.string(), title: z.string(), priceNpr: z.number(), image: z.string().url(),
  })).max(12),
});
const AdaptiveQuestion = z.object({
  component: z.literal('AdaptiveQuestion'),
  question: z.string(), options: z.array(z.string()).min(2).max(4),
});

export const Answer = z.object({
  text: z.string().describe('One short sentence shown above the components'),
  components: z.array(z.discriminatedUnion('component', [ListingGrid, AdaptiveQuestion])),
});
```

Add a plain-English description to each schema (`.describe(...)`). The model reads these to decide when to use a component.

### Step 2. Give the model real data through tools

```js
import { tool } from '@langchain/core/tools';
const searchListings = tool(
  async ({ query }) => JSON.stringify(await listingIndex.search(query, { limit: 12 })),
  { name: 'search_listings', description: 'Search property listings', schema: z.object({ query: z.string() }) }
);
```

Run retrieval first, or let the model call the tool, then pass the results into the next step. **Prop values must come from tool results.**

### Step 3. Force structured output, then validate

```js
const llm = new ChatOpenAI({ model: process.env.MODEL })   // or ChatAnthropic
  .withStructuredOutput(Answer);                            // the model must return this shape

export async function compose(query, hits, history) {
  try {
    const out = await llm.invoke([
      ['system', 'Build the answer using ONLY the allowed components. Fill props ONLY from SEARCH RESULTS.'],
      ...history,
      ['user', `QUERY: ${query}\nSEARCH RESULTS: ${JSON.stringify(hits)}`],
    ]);
    return Answer.parse(out);                               // second line of defence
  } catch {
    return { text: fallbackText(hits), components: [] };    // fail closed to text
  }
}
```

This replaces the "strip the markdown fences and `JSON.parse`" approach from `agency/langchain-chat.js`.

### Step 4. Keep conversation state

Use `RunnableWithMessageHistory` as in `agency/langchain-chat.js`, but back the history with Redis or a database, not an in-process `Map`. Also store the **UI state** (which chips were chosen, which filters are on) next to the messages, so the model sees what the user sees.

### Step 5. Stream components as they are ready (SSE)

```js
app.post('/v1/ask', async (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  const send = (o) => res.write(`data: ${JSON.stringify(o)}\n\n`);
  const hits = await search(req.body);
  const ans = await compose(req.body.query, hits, await loadHistory(req.body.sessionId));
  send({ type: 'text', content: ans.text });
  ans.components.forEach((c, i) => send({ type: 'ui', id: `${req.body.turnId}_${i}`, ...c }));
  send({ type: 'done' }); res.end();
});
```

The message contract the client sees:

```json
{ "type": "text", "content": "I found 6 homes." }
{ "type": "ui",   "id": "t1_0", "component": "ListingGrid", "items": [ ... ] }
{ "type": "ui_update", "id": "t1_0", "highlight": "L-1093" }
{ "type": "done" }
```

### Step 6. Write the renderer (a map from name to function)

```js
const REGISTRY = {
  ListingGrid:      (p, send) => renderGrid(p.items, (id) => send({ type: 'tap', component: 'ListingGrid', value: id })),
  AdaptiveQuestion: (p, send) => renderQuestion(p.question, p.options, (o) => send({ type: 'tap', component: 'AdaptiveQuestion', value: o })),
};

function onEvent(e, mount, send) {
  if (e.type === 'text') return mount.append(textNode(e.content));          // textContent, never innerHTML
  if (e.type === 'ui' && REGISTRY[e.component]) mount.append(REGISTRY[e.component](e, send));
}
```

Two rules: **escape every string** (use `textContent`), and **ignore unknown components** (the server already sent a text fallback).

### Step 7. Make every tap an input

Each interactive component calls `send({ type: 'tap', component, value })`. The server treats it as the next message together with the UI state, and the loop continues. This is what makes it feel like one product, not a chat bolted onto a page.

### Step 8. Python / LangGraph variant

If the client is React and you use LangGraph, the platform has built-in generative UI: register components in a TSX file referenced from `langgraph.json`, push them from a node with `push_ui_message("listing_grid", props, message=msg)`, and render with `useStream` and `LoadExternalComponent`. See the [LangGraph generative UI docs](https://docs.langchain.com/langgraph-platform/generative-ui-react). Use this if you are building a React app. For an embeddable widget (like Zunkiree Search, a single `<script>` tag), use steps 1 to 7.

---

## 9. Guardrails, testing and measuring

**Guardrails**
- **Allowlist only:** the model can emit only registry names, and props must pass the schema. Never render model-written HTML.
- **Real data only:** reject props whose IDs, prices or names weren't in the tool results.
- **Fail closed:** unknown component, bad props or a tool error returns a plain text answer. Log it.
- **Permissions:** tools run as the end user. The model never sees data the user couldn't see.
- **Regulated domains** (health, finance, legal): components inform and route. They never diagnose or advise.
- **Abuse:** rate-limit the endpoint, restrict allowed origins, cap output length.

**Testing**
- Unit-test each component with fixture props.
- Keep a regression set of 50 to 100 **real** queries per client. In CI, run them and assert the output validates against the schema and uses the expected components.
- Track the **fallback rate**. A rising rate means the prompt or schema has drifted.
- Don't rely on whole-page screenshot diffs, because the layout changes by design.

**Latency and cost**
- Send a text line or skeleton within about 300 ms, then stream each component as it validates.
- Cache the *composition* for frequent intents and refresh only the data.
- Use a small, fast model for intent and composition. Use a larger one only for complex multi-step tasks.
- Output is short JSON, so tokens per answer are usually lower than a long chat reply. Most of the cost is retrieval and tool calls.

**Metrics:** time to first component, fallback rate, tap-through rate, completion rate of guided flows, and leads or bookings against a text-only control.

---

## 10. Handoff checklist (Zunkiree Search)

**Phase 1: contract (week 1)**
- [ ] Freeze the UI message contract (section 8, step 5) as v1
- [ ] Choose 6 components for v1, for example `ResultCards`, `AnswerSummary`, `AdaptiveQuestion`, `CompareTable`, `ContactCTA`, `FAQAccordion`
- [ ] Write schemas with "use when" descriptions, and agree them with design

**Phase 2: backend (weeks 2 to 3)**
- [ ] Add `/v1/ask` (SSE) beside the existing API, reusing current retrieval for `hits`
- [ ] Add `compose()` with structured output and the text fallback
- [ ] Per-site config keyed by `data-site-id`: enabled components, brand tokens, CTA URLs
- [ ] Redis-backed conversation history, with the UI state stored alongside it

**Phase 3: widget (weeks 3 to 4)**
- [ ] Renderer registry in the widget bundle, styled with CSS variables per site
- [ ] Tap events back to the server with history
- [ ] Skeletons while streaming. Keyboard and screen-reader support on every component
- [ ] Check at 390px and 768px

**Phase 4: measure (week 5)**
- [ ] Regression set of 50 to 100 real queries for one pilot client
- [ ] Dashboard: fallback rate, first-component time, tap-through, conversions
- [ ] Roll out to one client site, then expand

**Decisions for the owner:** which client is the pilot; whether to use LangGraph Platform (React) or our own SSE endpoint (widget, recommended); which model for composition; the budget cap per answer.

The phase lengths are estimates.

---

## 11. Where to look

| What | Path |
|---|---|
| TripBuddy chain, API and client (Pattern A) | `agency/langchain-chat.js`, `agency/api.js`, `agency/src/chat/index.njk`, `agency/src/trip-result/index.njk` |
| Real-image helper | `agency/wiki-images.js` |
| Component-registry demo (Pattern B) | `zunkireelabs-web/src/pages/solutions/generative-ui.njk` |
| Demo images and prompts | `zunkireelabs-web/src/assets/images/genui-nepal/`, `docs/genui-nepal-image-prompts.md` |
| Live demo | `/solutions/generative-ui/` |
| LangGraph generative UI docs | https://docs.langchain.com/langgraph-platform/generative-ui-react |
