# CLAUDE.md - Project Intelligence

## Project Overview

**Project**: Zunkiree Labs Website
**Tech Stack**: Eleventy 3.x, Vite, Tailwind CSS, Alpine.js, GSAP, Lenis

---

## Automatic Skill Routing

When the user gives ANY development request, **automatically invoke `/project-pm`**.

### Trigger Patterns (auto-invoke PM):
- "Build/Create/Implement/Add X"
- "Fix/Update/Change/Refactor X"
- Feature requests or bug fixes
- Component creation
- Page updates
- Animation work

### Exceptions (do NOT auto-invoke):
- Questions: "How does X work?"
- Reading: "Show me X"
- Direct skill invocation (`/skill-name`)

---

## Available Skills

### Development Skills
| Skill | Domain | When to Use |
|-------|--------|-------------|
| `/project-pm` | **Orchestrator** | All development tasks - routes to specialists |
| `/eleventy-dev` | **Templates** | Nunjucks pages, layouts, partials, Eleventy config |
| `/animation-engineer` | **Motion** | GSAP animations, ScrollTrigger, Lenis, hero effects |
| `/perf-engineer` | **Animation Perf** | Animation performance, 60fps, GSAP/Lenis optimization |
| `/website-speed-perf` | **Page Speed** | Core Web Vitals, LCP/FCP/TTFB, image optimization, bundle size |
| `/tailwind-ui` | **Styling** | Tailwind classes, responsive design, design system |
| `/page-gen` | **Generator** | Scaffold new pages quickly with correct structure |

### SEO/AEO Skills
| Skill | Domain | When to Use |
|-------|--------|-------------|
| `/aeo-optimizer` | **AI Search** | AI visibility, ChatGPT/Perplexity citations, AEO/GEO |
| `/seo-auditor` | **SEO Audit** | Page audits, meta tags, content structure scoring |
| `/content-writer` | **Content** | SEO/AEO-optimized copy, FAQs, comparison articles |
| `/schema-generator` | **Structured Data** | JSON-LD schema markup for AI visibility |

### Utility Skills
| Skill | Domain | When to Use |
|-------|--------|-------------|
| `/svg-extractor` | **SVG/Icons** | Extract SVGs from websites, recreate icons, optimize vectors |

### Meta Skills
| Skill | Domain | When to Use |
|-------|--------|-------------|
| `/skill-architect` | **Meta** | Create/optimize skills, analyze skill gaps |

---

## Commands

```bash
# Development
npm run dev          # Start Eleventy dev server (port 8080)

# Build
npm run build        # Build for production

# Clean
npm run clean        # Remove dist folder

# Deploy
./deploy.sh          # Deploy script
```

---

## Project Structure

```
zunkiree-labs/
├── src/
│   ├── _includes/          # Nunjucks layouts and partials
│   │   ├── layouts/        # Page layouts
│   │   └── components/     # Reusable components
│   ├── pages/              # Page templates (.njk)
│   │   ├── index.njk       # Homepage
│   │   ├── about.njk       # About page
│   │   ├── careers.njk     # Careers page
│   │   ├── contact.njk     # Contact page
│   │   ├── customers.njk   # Customers page
│   │   ├── projects.njk    # Projects page
│   │   ├── services.njk    # Services page
│   │   └── products/       # Product pages
│   │       ├── dental-ai.njk
│   │       ├── gaamma.njk
│   │       └── search.njk
│   ├── assets/             # Static assets (CSS, JS, images)
│   └── _data/              # Global data files
├── dist/                   # Built output (gitignored)
├── .eleventy.js            # Eleventy configuration
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
├── vercel.json             # Vercel deployment config
├── Dockerfile              # Docker configuration
└── CLAUDE.md               # This file
```

---

## Tech Stack Details

### Frontend Framework
- **Eleventy (11ty) 3.x** - Static site generator
- **Nunjucks (.njk)** - Templating language
- **Vite** - Build tool and dev server integration

### Styling
- **Tailwind CSS 3.x** - Utility-first CSS
- **PostCSS** - CSS processing
- Custom configuration in `tailwind.config.js`

### Interactivity
- **Alpine.js** - Lightweight reactive framework
- **GSAP** - Professional animations
- **Lenis** - Smooth scrolling

### Deployment
- **Vercel** - Primary deployment
- **Docker** - Container support

---

## Conventions

### File Naming
- Pages: kebab-case (`about.njk`, `dental-ai.njk`)
- Components: kebab-case (`nav-header.njk`)
- Assets: kebab-case (`hero-image.webp`)

### Component Structure
- Layouts go in `src/_includes/layouts/`
- Reusable components go in `src/_includes/components/`
- Use Nunjucks includes: `{% include "components/header.njk" %}`

### Styling
- Use Tailwind utility classes
- Custom styles in `src/assets/css/`
- Follow mobile-first responsive design

### Animations
- Use GSAP for complex animations
- Use Alpine.js for simple interactions
- Lenis for smooth scroll behavior

---

## Quality Standards

```
1. Pages render without errors
2. Responsive on all breakpoints
3. Animations smooth at 60fps
4. Accessibility (semantic HTML, alt text)
5. Fast loading (optimized images, minimal JS)
6. SEO optimized (meta tags, schema markup)
7. AEO ready (extractable content, FAQs)
```

---

## SEO/AEO Requirements

### Every Page Must Have
- Title tag: 50-60 chars, keyword in first half
- Meta description: 150-160 chars, action word, keyword
- Single H1 with primary keyword
- Schema markup (Organization global, page-specific)
- "Last updated" date for key content

### AI Visibility (AEO)
- 40-60 word definition blocks for "What is X?" queries
- FAQ sections with natural-language questions
- Comparison tables for "[X] vs [Y]" content
- Statistics with named sources
- Self-contained paragraphs (work standalone)

### Schema Markup
- **Global**: Organization, WebSite
- **Product pages**: SoftwareApplication, FAQPage
- **Service pages**: Service, FAQPage
- **Blog/articles**: Article, FAQPage

### Target Queries
```
Primary:
- "AI-native search"
- "Natural language search platform"
- "AI search for websites"

Comparison:
- "Zunkiree vs Algolia"
- "AI search vs keyword search"
```

---

## Git & PR Conventions

### Commits
- Use descriptive commit messages
- End commit messages with: `Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>`

### Pull Requests
- All work is by **Sadin Shrestha** (the GitHub account owner)
- No AI attribution or tool mentions
- Just the changes, nothing else
- Format:
  ```
  ## Summary
  - Bullet points describing changes

  ## Test plan
  - [ ] Checklist of things to verify
  ```

---

## Development Workflow

1. Run `npm run dev` to start local server
2. Edit templates in `src/`
3. Changes hot-reload automatically
4. Build with `npm run build` before deploy
