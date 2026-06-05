# CLAUDE.md - Project Intelligence

## Project Overview

**Project**: Zunkiree Labs Website
**Tech Stack**: Eleventy 3.x, Vite, Tailwind CSS, Alpine.js, GSAP, Lenis

---

## CRITICAL: Deployment Rules

**NEVER push directly to `main` or `stage` without explicit user instruction.**

| Branch | Triggers | Deploys To | URL |
|--------|----------|-----------|-----|
| `main` | GitHub Actions → VPS (Docker) | Production | https://zunkireelabs.com |
| `stage` | GitHub Actions → VPS (Docker) | Staging | https://dev-web.zunkireelabs.com |
| `feature/*` | No auto-deploy | Preview only | Vercel preview URL |

**Workflow:**
1. All work goes on a `feature/` branch
2. Push to `feature/` branch — Vercel preview auto-generated
3. User reviews and merges to `stage` for staging test
4. User merges `stage` → `main` for production

**VPS deploy path:**
- Production: `/home/zunkireelabs/devprojects/zunkiree-web-prod` (container: `zunkiree-production`)
- Staging: `/home/zunkireelabs/devprojects/zunkiree-web-staging` (container: `zunkiree-staging`)

---

## Automatic Skill Routing

When the user gives ANY development request, **automatically invoke `/project-pm`**.

### Trigger Patterns (auto-invoke PM):
- "Build/Create/Implement/Add X"
- "Fix/Update/Change/Refactor X"
- Feature requests or bug fixes
- Component creation, page updates, animation work

### Exceptions (do NOT auto-invoke):
- Questions: "How does X work?"
- Reading: "Show me X"
- Direct skill invocation (`/skill-name`)

---

## Available Skills

### Development Skills
| Skill | Domain | When to Use |
|-------|--------|-------------|
| `/project-pm` | **Orchestrator** | All development tasks — routes to specialists |
| `/eleventy-dev` | **Templates** | Nunjucks pages, layouts, partials, Eleventy config |
| `/animation-engineer` | **Motion** | GSAP animations, ScrollTrigger, Lenis, hero effects |
| `/perf-engineer` | **Animation Perf** | Animation performance, 60fps, GSAP/Lenis optimization |
| `/website-speed-perf` | **Page Speed** | Core Web Vitals, LCP/FCP/TTFB, image optimization |
| `/tailwind-ui` | **Styling** | Tailwind classes, responsive design, design system |
| `/page-gen` | **Generator** | Scaffold new pages quickly with correct structure |

### SEO/AEO Skills
| Skill | Domain | When to Use |
|-------|--------|-------------|
| `/aeo-optimizer` | **AI Search** | AI visibility, ChatGPT/Perplexity citations |
| `/seo-auditor` | **SEO Audit** | Page audits, meta tags, content structure scoring |
| `/content-writer` | **Content** | SEO/AEO-optimized copy, FAQs, comparison articles |
| `/redesign-content` | **Redesign Copy** | Rewrite copy using ServiceNow patterns, preserve SEO |
| `/schema-generator` | **Structured Data** | JSON-LD schema markup for AI visibility |

### Utility Skills
| Skill | Domain | When to Use |
|-------|--------|-------------|
| `/svg-extractor` | **SVG/Icons** | Extract SVGs, recreate icons, optimize vectors |
| `/skill-architect` | **Meta** | Create/optimize skills, analyze skill gaps |

---

## Commands

```bash
npm run dev      # Start Eleventy dev server (port 8080)
npm run build    # Build for production
npm run clean    # Remove dist folder
```

---

## Project Structure

```
zunkiree-labs/
├── src/
│   ├── _includes/
│   │   ├── layouts/        # Page layouts
│   │   └── partials/       # Reusable partials (header, footer, etc.)
│   ├── pages/              # Page templates (.njk)
│   │   ├── index.njk
│   │   ├── about.njk
│   │   ├── careers.njk
│   │   ├── contact.njk
│   │   ├── customers.njk
│   │   ├── services.njk
│   │   └── products/
│   │       ├── dental-ai.njk
│   │       ├── gaamma.njk
│   │       └── search.njk
│   ├── assets/             # CSS, JS, images
│   └── _data/              # Global data files (JSON)
├── .github/workflows/
│   ├── deploy.yml          # Production deploy (main → VPS)
│   ├── deploy-staging.yml  # Staging deploy (stage → VPS)
│   ├── ci.yml              # CI checks
│   └── rollback.yml        # Rollback workflow
├── dist/                   # Built output (gitignored)
├── .eleventy.js
├── tailwind.config.js
├── postcss.config.js
└── CLAUDE.md
```

---

## Tech Stack

- **Eleventy 3.x** — Static site generator
- **Nunjucks (.njk)** — Templating
- **Tailwind CSS 3.x** — Utility-first CSS
- **Alpine.js** — Lightweight reactivity
- **GSAP** — Animations
- **Lenis** — Smooth scrolling
- **Docker** — Container deployment on VPS

---

## Conventions

- **File naming**: kebab-case (`about.njk`, `hero-image.webp`)
- **Layouts**: `src/_includes/layouts/`
- **Partials**: `src/_includes/partials/`
- **Styles**: Tailwind utilities + custom in `src/assets/css/`
- **Mobile-first** responsive design always

---

## Quality Standards

1. Pages render without errors
2. Responsive on all breakpoints
3. Animations smooth at 60fps
4. Accessibility (semantic HTML, alt text)
5. Fast loading (optimized images, minimal JS)
6. SEO optimized (meta tags, schema markup)
7. AEO ready (extractable content, FAQs)

---

## SEO/AEO Requirements

### Every Page Must Have
- Title: 50-60 chars, keyword in first half
- Meta description: 150-160 chars, action word + keyword
- Single H1 with primary keyword
- Schema markup (Organization global + page-specific)

### AI Visibility (AEO)
- 40-60 word definition blocks for "What is X?" queries
- FAQ sections with natural-language questions
- Comparison tables for "[X] vs [Y]" content
- Statistics with named sources

### Schema
- **Global**: Organization, WebSite
- **Products**: SoftwareApplication, FAQPage
- **Services**: Service, FAQPage

---

## Git & PR Conventions

### Commits
```
feat: short description

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>
```

### Branch Strategy
```
main          ← production (zunkireelabs.com)
stage         ← staging (dev-web.zunkireelabs.com)
feature/xyz   ← all work happens here
```

### Pull Requests
- Author: **Sadin Shrestha**
- No AI attribution in PR descriptions
- Format:
  ```
  ## Summary
  - Bullet points

  ## Test plan
  - [ ] Checklist
  ```
