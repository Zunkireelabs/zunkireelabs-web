# ZunkireeLabs Website Revamp Plan

**Version:** 1.1
**Date:** March 2026
**Timeline:** 1 Week
**Type:** Complete Revamp
**Design Style:** Pure Minimal (IBM-inspired structure, Databricks colors)

---

## 1. BRAND POSITIONING

### Primary Message
**"We build infrastructure-level AI systems, not wrappers"**

### Secondary Message
**"AI-native systems for every industry"**

### Tagline Options
1. "AI Infrastructure. Engineered Right."
2. "Where AI Meets Engineering Excellence"
3. "Building the AI Layer for Modern Business"

### Brand Pillars
1. **Engineering Depth** - We build at the infrastructure level
2. **AI-Native Architecture** - Systems designed with AI from day one
3. **Product-First Thinking** - We build products, not just projects
4. **Nepal to Global** - World-class technology from Kathmandu

---

## 2. DESIGN SYSTEM

### Color Palette

#### Primary Colors
| Name | Hex | Usage |
|------|-----|-------|
| **Navy** | `#1b3139` | Primary text, dark backgrounds, secondary buttons |
| **Accent Red** | `#eb1600` | Primary buttons, CTAs, highlights |
| **White** | `#ffffff` | Primary backgrounds |

#### Secondary Colors
| Name | Hex | Usage |
|------|-----|-------|
| **Red Hover** | `#bd2b26` | Button hover states |
| **Red Light** | `#ff3621` | Accents, icons |
| **Navy Light** | `#5a6f77` | Secondary text |
| **Warm Gray** | `#f9f7f4` | Section backgrounds |
| **Cool Gray** | `#e4ecf1` | Borders, dividers |

#### Status Colors
| Name | Hex | Usage |
|------|-----|-------|
| **Success** | `#10b981` | Success states |
| **Warning** | `#f59e0b` | Warnings |
| **Error** | `#ef4444` | Errors |

### Typography

#### Font Family
- **Primary:** DM Sans (headings + body)
- **Monospace:** DM Mono (code, technical content)

#### Type Scale
| Element | Size (Desktop) | Weight | Line Height |
|---------|---------------|--------|-------------|
| H1 | 56px / 64px | 700 | 1.1 |
| H2 | 40px / 48px | 700 | 1.15 |
| H3 | 28px / 32px | 600 | 1.2 |
| H4 | 20px / 24px | 600 | 1.3 |
| Body Large | 18px | 400 | 1.6 |
| Body | 16px | 400 | 1.6 |
| Small | 14px | 400 | 1.5 |
| Caption | 12px | 500 | 1.4 |

### Button Styles

#### Primary Button
```css
background: #eb1600;
color: #ffffff;
padding: 14px 28px;
border-radius: 0; /* Sharp edges - Databricks style */
font-weight: 500;
transition: background 0.2s;

&:hover {
  background: #bd2b26;
}
```

#### Secondary Button
```css
background: #1b3139;
color: #ffffff;
padding: 14px 28px;
border-radius: 0;
font-weight: 500;
```

#### Outline Button
```css
background: transparent;
border: 1px solid #1b3139;
color: #1b3139;
padding: 14px 28px;
border-radius: 0;
```

### Spacing System
- Base: 4px
- Scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128

### Layout
- Max content width: 1280px
- Section padding: 96px (desktop), 64px (tablet), 48px (mobile)
- Grid: 12-column with 24px gutters

---

## 3. SITE ARCHITECTURE

### Primary Navigation

```
┌─────────────────────────────────────────────────────────────────┐
│  ZUNKIREE LABS          Products  Solutions  Services  Resources│
└─────────────────────────────────────────────────────────────────┘
```

### Page Structure

```
/
├── / (Homepage)
│
├── /products/
│   ├── /products/zunkiree-search/    (Flagship - AI Search Platform)
│   ├── /products/ai-booking-engine/   (AI-powered booking & scheduling)
│   ├── /products/ai-crm/              (Intelligent CRM platform)
│   ├── /products/dental-ai/           (AI assistant for dental clinics)
│   └── /products/gaamma/              (Manufacturing ERP)
│
├── /solutions/
│   ├── /solutions/healthcare/
│   ├── /solutions/manufacturing/
│   ├── /solutions/legal/
│   ├── /solutions/services/           (Service-based businesses)
│   ├── /solutions/education/
│   └── /solutions/human-resources/
│
├── /services/
│   ├── /services/ai-development/
│   ├── /services/ai-customer-experience/ (AI-powered CX solutions)
│   ├── /services/data-systems/
│   ├── /services/custom-software/
│   ├── /services/saas-development/
│   ├── /services/aeo-seo/             (AI Search Optimization)
│   ├── /services/web-development/
│   └── /services/app-development/
│
├── /resources/
│   ├── /blog/                         (Industry insights, technical posts)
│   ├── /case-studies/
│   └── /research/                     (Whitepapers, reports)
│
├── /about/                          (Company-focused, no individual profiles)
├── /careers/
└── /contact/
```

### Total Pages: ~30 pages

---

## 4. HOMEPAGE STRUCTURE

### Section Flow (IBM-inspired modular layout)

```
1. HERO
   - Bold headline: "AI Infrastructure. Engineered Right."
   - Subline: Brief value prop
   - Primary CTA: "Explore Our Products"
   - Secondary CTA: "Talk to Us"

2. SOCIAL PROOF BAR
   - "Trusted by" + client logos (even if few)
   - Or: Key metrics (if available)

3. PRODUCTS SHOWCASE
   - Featured products grid (Zunkiree Search, AI CRM, etc.)
   - Each with icon, title, one-liner, link

4. CAPABILITIES OVERVIEW
   - "What We Build" section
   - AI Development | Data Systems | Custom Software
   - Visual icons + brief descriptions

5. SOLUTIONS BY INDUSTRY
   - Horizontal scroll or grid
   - Healthcare | Manufacturing | Legal | Education | HR | Services

6. WHY ZUNKIREE
   - Differentiators vs competitors
   - Engineering depth, AI-native, Product-first, Nepal to Global

7. CASE STUDY PREVIEW
   - Featured case study with results
   - "See All Case Studies" link

8. LATEST INSIGHTS
   - 3 recent blog posts
   - Industry insights focus

9. CTA SECTION
   - "Ready to build with AI?"
   - Contact form or demo request

10. FOOTER
    - Navigation links
    - Contact info
    - Social links
```

---

## 5. CONTENT STRATEGY

### Content Pillars (Priority Order)

#### 1. Industry Insights (Weekly)
- Nepal tech ecosystem updates
- AI trends and implications
- Industry-specific AI applications
- Global tech news with Nepal perspective

**Target Keywords:**
- "AI trends Nepal 2026"
- "Nepal tech industry"
- "AI in [industry] Nepal"
- "Digital transformation Nepal"

#### 2. Technical Blog (Bi-weekly)
- Engineering deep-dives
- Architecture decisions
- AI/ML implementation guides
- Data engineering best practices

**Target Keywords:**
- "RAG implementation guide"
- "AI search architecture"
- "Data pipeline design"
- "LLM integration patterns"

#### 3. Case Studies (Monthly)
- Client success stories
- Problem → Solution → Results format
- Specific metrics and outcomes

**Launch Case Study:** Admizz Education (Education Consultancy)
- Zunkiree Search implementation
- How AI search transformed student inquiries
- Measurable results and outcomes

**Format:**
- Client overview
- Challenge
- Our approach
- Solution architecture
- Results with numbers
- Client quote

#### 4. Research/Whitepapers (Quarterly)
- Original research on AI adoption
- Nepal tech industry reports
- Technical benchmarks

#### 5. Product Documentation
- Zunkiree Search guides
- API documentation
- Integration tutorials

---

## 6. SEO/AEO STRATEGY

### Competitive Keyword Targets

#### High-Priority (Rank vs Competitors)

| Keyword | Monthly Searches (Est.) | Current Leaders |
|---------|------------------------|-----------------|
| "AI company Nepal" | 500+ | Fusemachines, Leapfrog |
| "Software company Kathmandu" | 1000+ | Multiple |
| "AI development Nepal" | 300+ | Fusemachines |
| "Data engineering Nepal" | 200+ | Cotiviti, Cedar Gate |
| "Custom software Nepal" | 500+ | Leapfrog, Code Himalaya |

#### Service Keywords

| Service | Target Keywords |
|---------|-----------------|
| AI Development | "AI development services", "machine learning company Nepal" |
| Data Systems | "data engineering services", "data analytics Nepal" |
| Web Development | "web development Nepal", "website development Kathmandu" |
| App Development | "mobile app development Nepal", "app developer Kathmandu" |
| SEO/AEO | "SEO services Nepal", "AI SEO optimization" |
| SaaS | "SaaS development Nepal", "custom SaaS platform" |

#### Long-tail Keywords

- "best AI company in Nepal"
- "AI search platform for business"
- "enterprise software development Nepal"
- "AI integration services Kathmandu"
- "RAG implementation Nepal"

### AEO (AI Search) Strategy

1. **FAQ Schema** on all product and service pages
2. **Definition blocks** for key terms
3. **Comparison content**: "Zunkiree Search vs [competitors]"
4. **How-to guides** for technical topics
5. **Statistics with citations** throughout

---

## 7. COMPETITOR DIFFERENTIATION

### Positioning vs Each Competitor

| Competitor | Their Focus | Our Differentiation |
|------------|-------------|---------------------|
| **Fusemachines** | AI education, consulting | We build products, not just train people |
| **Leapfrog** | Healthcare software | We're AI-native, not retrofitting AI |
| **Cotiviti/Cedar Gate** | Healthcare analytics (US market) | We serve all industries, local + global |
| **Code Himalaya** | Staff leasing, general dev | We build infrastructure-level systems |

### Key Messages

1. **vs Fusemachines**: "We don't just teach AI—we build AI products that power businesses."

2. **vs Leapfrog**: "While others add AI to existing systems, we build systems with AI at the core."

3. **vs Cotiviti/Cedar Gate**: "We're not a US company's offshore center—we're building Nepal's AI products for the world."

4. **vs Code Himalaya**: "We don't lease talent—we build scalable AI infrastructure."

---

## 8. DEVELOPMENT PHASES

### Phase 1: Foundation (Day 1-2)
- [ ] Create new branch: `feature/website-revamp`
- [ ] Update Tailwind config with new color palette
- [ ] Create new typography scale
- [ ] Update button components
- [ ] Create new layout components

### Phase 2: Core Pages (Day 2-4)
- [ ] Homepage (complete revamp)
- [ ] About page
- [ ] Contact page
- [ ] Products landing page
- [ ] Individual product pages (5 products)

### Phase 3: Solutions & Services (Day 4-5)
- [ ] Solutions landing page
- [ ] Individual solution pages (6 industries)
- [ ] Services landing page
- [ ] Individual service pages (8 services)

### Phase 4: Resources & Content (Day 5-6)
- [ ] Blog listing page
- [ ] Blog post template
- [ ] Case studies page
- [ ] Case study template
- [ ] Research/whitepapers page

### Phase 5: Polish & SEO (Day 6-7)
- [ ] Schema markup on all pages
- [ ] Meta tags optimization
- [ ] FAQ sections where needed
- [ ] Performance optimization
- [ ] Cross-browser testing
- [ ] Mobile responsiveness check

---

## 9. CONTENT TO CREATE

### Immediate (Launch)
- [ ] 5 product descriptions (detailed)
  - Zunkiree Search (flagship)
  - AI Booking Engine
  - AI CRM
  - Dental AI
  - Gaamma ERP
- [ ] 6 solution pages content (industry verticals)
- [ ] 8 service pages content (includes AI Customer Experience)
- [ ] 1 case study: Admizz Education (Zunkiree Search)
- [ ] 3 blog posts (industry insights with SEO/AEO optimization)
  - AI trends in Nepal 2026
  - Digital transformation for SMBs
  - How AI Search is changing customer experience
- [ ] About page (company story, mission, values - company-focused, no individual profiles)

### Post-Launch (Week 2+)
- [ ] Additional case studies
- [ ] Technical blog posts
- [ ] Research/whitepaper
- [ ] Video content (optional)

---

## 10. SUCCESS METRICS

### Launch Metrics (Day 1)
- [ ] All pages load < 3s
- [ ] Mobile-responsive across devices
- [ ] Schema markup validates
- [ ] No broken links
- [ ] Contact form works

### Week 1 Post-Launch
- [ ] Google indexing all pages
- [ ] Basic keyword rankings appearing
- [ ] Analytics tracking working

### Month 1 Goals
- [ ] Rank on page 1-2 for "AI company Nepal"
- [ ] 500+ organic visitors
- [ ] 5+ contact form submissions

### Month 3 Goals
- [ ] Rank top 5 for primary keywords
- [ ] 2000+ organic visitors/month
- [ ] Cited in AI search results
- [ ] 20+ leads generated

---

## APPROVAL CHECKLIST

Before proceeding, confirm:

- [x] Color palette approved (Databricks-inspired: Navy #1b3139, Red #eb1600)
- [x] Typography approved (DM Sans + DM Mono)
- [x] Site structure approved
- [x] Content strategy approved (Industry Insights > Technical > Case Studies > Research > Docs)
- [x] Timeline feasible (1 week)
- [x] Products list finalized (5: Zunkiree Search, AI Booking Engine, AI CRM, Dental AI, Gaamma)
- [x] Solutions list finalized (6 industries)
- [x] Services list finalized (8: includes AI Customer Experience)
- [x] Design style: Pure minimal (IBM-inspired)
- [x] Team page: Company-focused (no individual profiles)
- [x] Case study: Admizz Education
- [x] Blog content: Create as part of revamp

---

## NEXT STEPS

1. **Review this plan** - Confirm all details
2. **Create branch** - `feature/website-revamp`
3. **Start Phase 1** - Design system implementation
4. **Content writing** - Can run parallel to development

---

## DETAILED IMPLEMENTATION PLAN

### Day 1: Foundation Setup
**Morning:**
1. Create `feature/website-revamp` branch
2. Update `tailwind.config.js` with new color palette
   - Navy: #1b3139
   - Accent Red: #eb1600
   - All secondary colors
3. Update typography scale in Tailwind

**Afternoon:**
4. Create/update button components (sharp edges, new colors)
5. Update layout components for IBM-style grid
6. Create new section components (hero, feature grid, CTA)

### Day 2: Homepage & Core Structure
**Morning:**
1. Revamp homepage hero section
2. Add social proof bar / metrics section
3. Create products showcase grid

**Afternoon:**
4. Add capabilities overview section
5. Create solutions by industry section
6. Add "Why Zunkiree" differentiators section

### Day 3: Homepage Complete + About
**Morning:**
1. Add case study preview section (Admizz Education)
2. Create latest insights/blog preview section
3. Add CTA section and update footer

**Afternoon:**
4. Create About page (company-focused)
   - Mission, Vision, Values
   - Brand pillars
   - No individual team profiles
5. Update Contact page

### Day 4: Products Section
**Full Day:**
1. Create Products landing page
2. Create 5 individual product pages:
   - Zunkiree Search (flagship, most detailed)
   - AI Booking Engine
   - AI CRM
   - Dental AI
   - Gaamma ERP
3. Add FAQ sections to each product page
4. Implement product schema markup

### Day 5: Solutions & Services
**Morning:**
1. Create Solutions landing page
2. Create 6 solution pages (Healthcare, Manufacturing, Legal, Services, Education, HR)

**Afternoon:**
3. Create Services landing page
4. Create 8 service pages:
   - AI Development
   - AI Customer Experience
   - Data Systems
   - Custom Software
   - SaaS Development
   - AEO/SEO
   - Web Development
   - App Development

### Day 6: Content & Resources
**Morning:**
1. Create Blog listing page
2. Create Blog post template
3. Write 3 launch blog posts:
   - AI trends in Nepal 2026
   - Digital transformation for SMBs
   - How AI Search is changing customer experience

**Afternoon:**
4. Create Case Studies page
5. Create Case Study template
6. Write Admizz Education case study
7. Create Research/Whitepapers page (placeholder)

### Day 7: Polish & Launch
**Morning:**
1. Schema markup on all pages (Organization, FAQPage, SoftwareApplication)
2. Meta tags optimization for all pages
3. Add FAQ sections where missing

**Afternoon:**
4. Performance optimization (image compression, lazy loading)
5. Cross-browser testing
6. Mobile responsiveness final check
7. Final review and merge to main

---

## FILES TO CREATE/MODIFY

### New Files (~30)
```
src/pages/
├── index.njk (revamp)
├── about.njk (revamp)
├── contact.njk (revamp)
├── products/
│   ├── index.njk
│   ├── zunkiree-search.njk (exists - revamp)
│   ├── ai-booking-engine.njk
│   ├── ai-crm.njk
│   ├── dental-ai.njk
│   └── gaamma.njk
├── solutions/
│   ├── index.njk
│   ├── healthcare.njk
│   ├── manufacturing.njk
│   ├── legal.njk
│   ├── services.njk
│   ├── education.njk
│   └── human-resources.njk
├── services/
│   ├── index.njk
│   ├── ai-development.njk
│   ├── ai-customer-experience.njk
│   ├── data-systems.njk
│   ├── custom-software.njk
│   ├── saas-development.njk
│   ├── aeo-seo.njk
│   ├── web-development.njk
│   └── app-development.njk
├── resources/
│   ├── blog/
│   │   ├── index.njk
│   │   └── [3 blog posts].njk
│   ├── case-studies/
│   │   ├── index.njk
│   │   └── admizz-education.njk
│   └── research/
│       └── index.njk
└── careers.njk
```

### Config Updates
```
tailwind.config.js - New color palette, typography
src/_data/site.json - Updated metadata
src/_includes/layouts/base.njk - Schema updates
```

### New Components/Partials
```
src/_includes/partials/
├── hero-section.njk
├── products-grid.njk
├── solutions-grid.njk
├── services-grid.njk
├── case-study-preview.njk
├── blog-preview.njk
├── cta-section.njk
└── faq-section.njk
```

---

## DAY-BY-DAY TODO CHECKLIST

### DAY 1: Foundation Setup
- [ ] **Branch & Config**
  - [ ] Create `feature/website-revamp` branch
  - [ ] Update `tailwind.config.js` with new colors
    - [ ] Navy primary: `#1b3139`
    - [ ] Accent red: `#eb1600`
    - [ ] Red hover: `#bd2b26`
    - [ ] Red light: `#ff3621`
    - [ ] Navy light: `#5a6f77`
    - [ ] Warm gray: `#f9f7f4`
    - [ ] Cool gray: `#e4ecf1`
  - [ ] Update typography scale (H1-H4, body, small, caption)
  - [ ] Set sharp button borders (border-radius: 0)

- [ ] **Components**
  - [ ] Create/update `btn-primary` component
  - [ ] Create/update `btn-secondary` component
  - [ ] Create/update `btn-outline` component
  - [ ] Create section container component (max-w-7xl, padding)
  - [ ] Create hero section partial
  - [ ] Create feature grid partial
  - [ ] Create CTA section partial

---

### DAY 2: Homepage Core
- [ ] **Hero Section**
  - [ ] Bold headline: "AI Infrastructure. Engineered Right."
  - [ ] Subheadline with value prop
  - [ ] Primary CTA: "Explore Our Products"
  - [ ] Secondary CTA: "Talk to Us"
  - [ ] Clean, minimal layout (IBM-style)

- [ ] **Social Proof Bar**
  - [ ] "Trusted by" section with client logos
  - [ ] Or key metrics display

- [ ] **Products Showcase**
  - [ ] Create products grid partial
  - [ ] 5 product cards (icon, title, one-liner, link)
  - [ ] Zunkiree Search (featured)
  - [ ] AI Booking Engine
  - [ ] AI CRM
  - [ ] Dental AI
  - [ ] Gaamma ERP

- [ ] **Capabilities Overview**
  - [ ] "What We Build" section
  - [ ] AI Development card
  - [ ] Data Systems card
  - [ ] Custom Software card
  - [ ] Visual icons + descriptions

- [ ] **Solutions by Industry**
  - [ ] Industry grid/horizontal scroll
  - [ ] Healthcare
  - [ ] Manufacturing
  - [ ] Legal
  - [ ] Services
  - [ ] Education
  - [ ] Human Resources

- [ ] **Why Zunkiree Section**
  - [ ] Engineering Depth pillar
  - [ ] AI-Native Architecture pillar
  - [ ] Product-First Thinking pillar
  - [ ] Nepal to Global pillar

---

### DAY 3: Homepage Complete + About
- [ ] **Case Study Preview**
  - [ ] Admizz Education featured card
  - [ ] Results/metrics highlight
  - [ ] "See All Case Studies" link

- [ ] **Latest Insights**
  - [ ] Blog preview grid (3 posts)
  - [ ] Post cards with title, excerpt, date
  - [ ] "View All Insights" link

- [ ] **CTA Section**
  - [ ] "Ready to build with AI?" headline
  - [ ] Contact form or demo request button
  - [ ] Clean dark background

- [ ] **Footer Update**
  - [ ] Navigation links (Products, Solutions, Services, Resources)
  - [ ] Contact info
  - [ ] Social links
  - [ ] Copyright

- [ ] **About Page**
  - [ ] Hero with company mission
  - [ ] "Our Story" section
  - [ ] Mission statement
  - [ ] Vision statement
  - [ ] Core values/philosophy
  - [ ] Brand pillars
  - [ ] NO individual team profiles
  - [ ] CTA to contact

- [ ] **Contact Page Update**
  - [ ] Contact form
  - [ ] Email, location info
  - [ ] Clean minimal design

---

### DAY 4: Products Section
- [ ] **Products Landing Page**
  - [ ] Hero: "Our Products"
  - [ ] Products grid with all 5 products
  - [ ] Category filters (if needed)

- [ ] **Zunkiree Search Page (Flagship)**
  - [ ] Detailed hero section
  - [ ] "What is Zunkiree Search?" definition block
  - [ ] Key features section
  - [ ] How it works section
  - [ ] Use cases / industries
  - [ ] FAQ section (5+ questions)
  - [ ] CTA: "Request Demo"
  - [ ] Schema: SoftwareApplication + FAQPage

- [ ] **AI Booking Engine Page**
  - [ ] Product hero
  - [ ] Key features
  - [ ] Use cases
  - [ ] FAQ section
  - [ ] Schema markup

- [ ] **AI CRM Page**
  - [ ] Product hero
  - [ ] Key features
  - [ ] Use cases
  - [ ] FAQ section
  - [ ] Schema markup

- [ ] **Dental AI Page**
  - [ ] Product hero
  - [ ] Key features (patient interaction, scheduling, etc.)
  - [ ] Use cases for dental clinics
  - [ ] FAQ section
  - [ ] Schema markup

- [ ] **Gaamma ERP Page**
  - [ ] Product hero
  - [ ] Key features (manufacturing focus)
  - [ ] Modules overview
  - [ ] FAQ section
  - [ ] Schema markup

---

### DAY 5: Solutions & Services
- [ ] **Solutions Landing Page**
  - [ ] Hero: "Solutions by Industry"
  - [ ] Industry grid with 6 solutions

- [ ] **Healthcare Solution**
  - [ ] Industry-specific hero
  - [ ] Challenges we solve
  - [ ] Our approach
  - [ ] Relevant products
  - [ ] FAQ section

- [ ] **Manufacturing Solution**
  - [ ] Industry-specific content
  - [ ] Gaamma ERP highlight
  - [ ] FAQ section

- [ ] **Legal Solution**
  - [ ] Industry-specific content
  - [ ] AI search for legal docs
  - [ ] FAQ section

- [ ] **Services (Business) Solution**
  - [ ] Service businesses focus
  - [ ] Booking, CRM highlights
  - [ ] FAQ section

- [ ] **Education Solution**
  - [ ] Admizz case study reference
  - [ ] AI search for education
  - [ ] FAQ section

- [ ] **Human Resources Solution**
  - [ ] HR automation focus
  - [ ] AI-powered workflows
  - [ ] FAQ section

- [ ] **Services Landing Page**
  - [ ] Hero: "Our Services"
  - [ ] Services grid with 8 services

- [ ] **AI Development Service**
  - [ ] Service description
  - [ ] Capabilities list
  - [ ] Process overview
  - [ ] FAQ section

- [ ] **AI Customer Experience Service**
  - [ ] Service description
  - [ ] What we deliver
  - [ ] FAQ section

- [ ] **Data Systems Service**
  - [ ] Data engineering focus
  - [ ] Capabilities
  - [ ] FAQ section

- [ ] **Custom Software Service**
  - [ ] Software development focus
  - [ ] Technologies
  - [ ] FAQ section

- [ ] **SaaS Development Service**
  - [ ] SaaS-specific content
  - [ ] Our approach
  - [ ] FAQ section

- [ ] **AEO/SEO Service**
  - [ ] AI search optimization focus
  - [ ] What we offer
  - [ ] FAQ section

- [ ] **Web Development Service**
  - [ ] Web dev capabilities
  - [ ] Technologies
  - [ ] FAQ section

- [ ] **App Development Service**
  - [ ] Mobile app focus
  - [ ] Platforms
  - [ ] FAQ section

---

### DAY 6: Content & Resources
- [ ] **Blog Infrastructure**
  - [ ] Blog listing page (`/blog/`)
  - [ ] Blog post template
  - [ ] Category/tag system (optional)
  - [ ] Pagination (if needed)

- [ ] **Blog Post 1: AI Trends Nepal 2026**
  - [ ] SEO-optimized title
  - [ ] 1000+ words
  - [ ] Target keywords: "AI trends Nepal 2026", "AI company Nepal"
  - [ ] Definition blocks for AEO
  - [ ] Internal links to services
  - [ ] Schema: Article

- [ ] **Blog Post 2: Digital Transformation for SMBs**
  - [ ] SEO-optimized content
  - [ ] Target keywords: "digital transformation Nepal", "SMB software"
  - [ ] Practical insights
  - [ ] Internal links

- [ ] **Blog Post 3: AI Search Changing CX**
  - [ ] Zunkiree Search focus
  - [ ] Target keywords: "AI search", "customer experience AI"
  - [ ] Link to Zunkiree Search product
  - [ ] Definition blocks

- [ ] **Case Studies Infrastructure**
  - [ ] Case studies listing page
  - [ ] Case study template

- [ ] **Admizz Education Case Study**
  - [ ] Client overview
  - [ ] Challenge section
  - [ ] Our approach
  - [ ] Solution architecture
  - [ ] Results with metrics
  - [ ] Client quote (if available)
  - [ ] CTA to contact

- [ ] **Research Page**
  - [ ] Placeholder page
  - [ ] "Coming Soon" or initial content
  - [ ] Email signup for updates

- [ ] **Careers Page**
  - [ ] Company culture section
  - [ ] Open positions (or "coming soon")
  - [ ] Why work with us

---

### DAY 7: Polish & Launch
- [ ] **Schema Markup**
  - [ ] Organization schema on all pages
  - [ ] FAQPage schema on product/service pages
  - [ ] SoftwareApplication schema on products
  - [ ] Article schema on blog posts
  - [ ] Validate all schemas with Google Rich Results Test

- [ ] **Meta Tags**
  - [ ] Unique title tags for all pages
  - [ ] Meta descriptions (150-160 chars)
  - [ ] Open Graph tags
  - [ ] Twitter cards

- [ ] **FAQ Sections**
  - [ ] Verify all products have FAQs
  - [ ] Verify all services have FAQs
  - [ ] Verify all solutions have FAQs

- [ ] **Performance**
  - [ ] Compress all images
  - [ ] Implement lazy loading
  - [ ] Check Lighthouse scores
  - [ ] Target: < 3s load time

- [ ] **Testing**
  - [ ] Chrome desktop
  - [ ] Chrome mobile
  - [ ] Safari desktop
  - [ ] Safari mobile
  - [ ] Firefox

- [ ] **Responsiveness**
  - [ ] Mobile (320px - 480px)
  - [ ] Tablet (768px - 1024px)
  - [ ] Desktop (1280px+)
  - [ ] Test all breakpoints

- [ ] **Final Checks**
  - [ ] All links working (no 404s)
  - [ ] Contact form submits correctly
  - [ ] Analytics tracking working
  - [ ] Console errors cleared
  - [ ] Accessibility check (skip links, alt text, contrast)

- [ ] **Launch**
  - [ ] Final review of all pages
  - [ ] Merge to main branch
  - [ ] Deploy to production
  - [ ] Submit sitemap to Google Search Console
  - [ ] Verify indexing

---

## PROGRESS TRACKER

| Day | Status | Completion |
|-----|--------|------------|
| Day 1 | ⬜ Not Started | 0% |
| Day 2 | ⬜ Not Started | 0% |
| Day 3 | ⬜ Not Started | 0% |
| Day 4 | ⬜ Not Started | 0% |
| Day 5 | ⬜ Not Started | 0% |
| Day 6 | ⬜ Not Started | 0% |
| Day 7 | ⬜ Not Started | 0% |

**Overall Progress:** 0/7 days complete

---

*Document maintained by Project PM skill. Last updated: March 19, 2026*
