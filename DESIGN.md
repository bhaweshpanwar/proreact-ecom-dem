# E-COMET OUTVERSE — Official Design System & Architecture Specification (`DESIGN.md`)

> **Version:** 2.4.0 (Production Release)  
> **Brand Identity:** E-COMET OUTVERSE · Enterprise Celestial Growth Architecture  
> **Aesthetic Philosophy:** *Cosmic Obsidian Void meets Ultra-Clean Swiss Editorial Architecture.*  
> **Tech Stack:** React 18, Vite 5, Tailwind CSS 3.4, Three.js, GSAP 3.12 (ScrollTrigger, Flip), React Router v6.

---

## 1. Visual Philosophy & Core Identity

The E-COMET OUTVERSE design system harmonizes two high-contrast visual realms:
1. **The Cosmic Deep Void (Dark Universe):**  
   Obsidian black (`#000000`, `#010207`, `#02040C`, `#0E1218`) infused with real-time 3D Three.js particle starfields, procedural volumetric nebulas, interactive astrolabes, and high-frequency telemetry pulses. Used for **Hero stages**, **3D celestial canvases**, **dark telemetry cards**, and **cinematic closing transitions**.
2. **The High-Editorial Surface (Light Universe):**  
   Crisp, architectural off-white canvases (`#FFFFFF`, `#FAFAFA`, `#FDFDFD`, `#F5F3EE`) with razor-sharp hairline dividers, muted stone borders, Cormorant serif typography, and tabular data density. Used for **Core Service Cards**, **Full-Width Industry Blueprints**, **Package Matrices**, and **Educational Playbooks**.

### Key Design Pillars
- **Zero Generic Boilerplate:** No corporate clip-art, fake generic mockups, or childish rounded cartoon icons. Every asset is either a procedural 3D element, real video footage, or clean vector geometry.
- **Hairline Precision:** Crisp 1px borders (`border-stone-200/90`, `rgba(14, 18, 24, 0.08)`, or `border-white/10`) with zero heavy bevels.
- **Telemetry & Space Mission Accents:** Monospace status labels (`JETBRAINS MONO`), glowing pulse indicators, coordinates, live orbital markers, and sector indexes (`INDEX // 01`, `STAGE 01`, `SERVICE · 02`).

---

## 2. Typography System

The typography engine is anchored by Google Fonts imported in `index.html`:
- **Primary Display / Serif:** `Cormorant` & `Cormorant Garamond`
- **Interface / Primary Sans:** `Inter` (with `Plus Jakarta Sans` for specialized pills)
- **Technical / Telemetry Mono:** `JetBrains Mono` / `SFMono-Regular` / `ui-monospace`

### 2.1 Font Family Stacks

```css
/* Display & Editorial Headlines */
font-serif: "Cormorant", "Cormorant Garamond", Georgia, serif;

/* Primary UI, Paragraphs & Navigation */
font-sans: "Inter", system-ui, -apple-system, sans-serif;

/* Secondary Brand Accents */
font-display: "Plus Jakarta Sans", "Inter", sans-serif;

/* Telemetry, Counters, Codes & Technical Spec */
font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
```

### 2.2 Typographic Hierarchy & Scale

| Role | Font Family | Size (Mobile → Desktop) | Weight | Line Height | Tracking | Tailwind Classes |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Display Headline** | `font-serif` | `44px` → `76px` / `84px` | Regular (400) | `1.04 - 1.08` | `-0.02em` | `font-serif text-4xl sm:text-6xl lg:text-7xl xl:text-[76px] font-normal leading-[1.04] tracking-tight` |
| **Section Primary Heading** | `font-serif` | `32px` → `48px` / `54px` | Regular (400) | `1.15` | `-0.015em` | `font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight leading-[1.15]` |
| **Card Heading (Primary)** | `font-serif` | `24px` → `32px` / `36px` | Regular / Medium (400/500) | `1.20` | `-0.01em` | `font-serif text-2xl sm:text-3xl font-normal text-space-950 tracking-tight leading-[1.2]` |
| **Card Subtitle / Tagline** | `font-sans` | `16px` → `20px` | Regular / Medium (400/500) | `1.40` | `normal` | `text-base sm:text-lg font-sans font-medium text-slate-800 leading-snug` |
| **Lead Narrative / Subtitle** | `font-sans` | `18px` → `22px` | Normal (400) | `1.50` | `normal` | `font-sans text-lg sm:text-xl text-slate-600 font-normal leading-relaxed` |
| **Body Paragraph** | `font-sans` | `13.5px` → `15px` | Normal (400) | `1.65` | `normal` | `text-xs sm:text-sm md:text-base text-slate-600 font-sans leading-relaxed` |
| **Deliverables & Lists** | `font-sans` | `12px` → `14px` | Normal (400) | `1.50` | `normal` | `text-xs sm:text-sm text-slate-600 font-sans leading-relaxed` |
| **Telemetry Badge / Code** | `font-mono` | `9.5px` → `11px` | Bold / Medium (700/500) | `1.00` | `+0.10em` to `+0.15em` | `text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-widest` |
| **Button Label** | `font-sans` | `12px` → `13.5px` | SemiBold (600) | `1.00` | `+0.01em` | `font-sans text-xs sm:text-sm font-semibold tracking-wide` |

---

## 3. Master Color Palette & Design Tokens

### 3.1 Cosmic Dark Palette (The Void)

| Token Name | Hex Code | Tailwind / CSS Variable | Intended Application |
| :--- | :--- | :--- | :--- |
| **Void Deep Space** | `#000000` | `bg-[#000000]` / `--bg-deep-void` | True black base for 3D Cosmic Galaxy, Marketplace hero & Astrolabe |
| **Deep Celestial Void** | `#010207` | `bg-[#010207]` | Main 3D Canvas viewport background |
| **Night Space Body** | `#02040C` | `bg-[#02040C]` | Global dark body background & Celestial Hero canvas container |
| **Obsidian Core** | `#080B10` | `bg-[#080B10]` / `--brand-primary` | Primary dark buttons, dark headers, brand logo color |
| **Space 950** | `#0E1218` | `bg-space-950` / `text-space-950` | Heavy dark text, Nova package card background, preview containers |
| **Space 900** | `#151B24` | `bg-space-900` | Secondary dark container, footer container |
| **Space 800** | `#1E2633` | `bg-space-800` | Dark border strokes, dark table cards |
| **Space 600** | `#3A4658` | `text-space-600` | Secondary dark text on light backgrounds |
| **Space Hover State** | `#252B36` | `hover:bg-[#252B36]` | Hover state for Obsidian black buttons and links |
| **Midnight Nebula** | `#0A0418` | `--bg-midnight` | Atmospheric gradient vignette corner |
| **Cosmic Plum** | `#2D0B4E` | `bg-space-plum` | Low-opacity radial background glow behind canvases |

### 3.2 Editorial Light Palette (The Canvas)

| Token Name | Hex Code | Tailwind / CSS Variable | Intended Application |
| :--- | :--- | :--- | :--- |
| **Pure White** | `#FFFFFF` | `bg-white` | Main page body, card active states, top nav bar |
| **Card Off-White** | `#FAFAFA` | `bg-[#FAFAFA]` | Default background for Capability, Why Choose, and Process cards |
| **Master Directory Canvas**| `#FDFDFD` | `bg-[#FDFDFD]` | Marketplace page container background |
| **Warm Editorial Paper** | `#F5F3EE` | `bg-paper` | Warm subtle background panels |
| **Neutral Stone Divider** | `#E9E6DF` / `#E2DDD5` | `border-stone-200/90` | Standard hairline card borders, separators, timeline tracks |
| **Mist / Frost** | `#EDF0F3` / `#E4EAF0`| `bg-mist` / `bg-frost` | Table row alternate striping, search inputs |
| **Muted Slate Text** | `#64748B` / `#647285`| `text-slate-500` / `text-muted`| Descriptive secondary copy, timestamps, deliverable subtitles |

### 3.3 Neon Accents, Status Signals & Practice Tints

| Token Name | Hex Code | Visual Meaning / Usage |
| :--- | :--- | :--- |
| **Ion Cyan** | `#38BDF8` | **Primary Cosmic Telemetry Accent**. Used for glowing line dividers, live telemetry pulses, astrolabe coordinate highlights. |
| **Pacific Blue** | `#00B4D8` | E-Commerce Management Pillar hero accent & "Recommended Tier" badge. |
| **Ember Performance Blue** | `#2563EB` | Digital Marketing Pillar, active navigation dots, and verified deliverables hyphens (`―`). |
| **Sun Gold / Amber** | `#FF9526` / `#F59E0B`| Cafe & Hospitality badge, Video Production Pillar accent, Star rating elements. |
| **Celestial Emerald** | `#10B981` / `#059669`| 100% Account Health, Website Development Pillar, verified checkmark icons (`✓`). |
| **Rose Quartz / Crimson** | `#B8737A` / `#F43F5E`| Creative Design Pillar, Luxury Aesthetics & Bridal Badges. |
| **Iris Violet** | `#8B5CF6` / `#A855F7`| Photography Pillar, Education & Coaching Admissions Badges. |
| **Solar Flare Orange** | `#EA4335` / `#D97706`| Spice & Agro-Food Processors badge, Agro-Commodities accent. |
| **Scroll Progress Bar** | `#E4572E` | Fixed 2.5px top scroll progress bar tracking browser scroll depth. |
| **WhatsApp Signal** | `#25D366` | Floating WhatsApp chat button, quick direct consultation hotline. |

### 3.4 The 8 Core Practice Pillars Color Map

```javascript
export const PILLAR_COLORS = {
  '01': { id: 'ecommerce-management', colorHex: '#00B4D8', label: 'E-Commerce Management' },
  '02': { id: 'digital-marketing',    colorHex: '#FF6B4A', label: 'Digital Marketing & Growth' },
  '03': { id: 'website-development',  colorHex: '#10B981', label: 'Website & Commerce Development' },
  '04': { id: 'creative-design',      colorHex: '#B8737A', label: 'Creative & Brand Design' },
  '05': { id: 'photography-photoshoots', colorHex: '#8B5CF6', label: 'Photography & Product Shoots' },
  '06': { id: 'video-production-editing', colorHex: '#FF9526', label: 'Commercial Video Production' },
  '07': { id: 'youtube-strategy-management', colorHex: '#FF0000', label: 'YouTube Strategy & Management' },
  '08': { id: 'integrated-solutions', colorHex: '#0E1218', label: 'Integrated Digital Solutions' }
};
```

---

## 4. Layout Architecture, Grids & Spacing Rhythm

### 4.1 Max Container Widths
- **Global Header / Nav Container:** `max-w-[1360px] mx-auto px-4 sm:px-8`
- **Standard Editorial Page Sections:** `max-w-[1400px] mx-auto px-4 sm:px-8`
- **Marketplace Mastermind Directory:** `max-w-7xl (1280px) mx-auto px-4 sm:px-8`
- **Hero Display Copy Box:** `max-w-5xl (1024px) mx-auto` or `max-w-3xl (768px)`

### 4.2 Vertical Spacing Rhythms
- **Hero Padding:** `pt-32 pb-20` (Desktop: minimum `640px` to `700px` height)
- **Large Content Sections:** `py-20 sm:py-32` (`80px` mobile, `128px` desktop)
- **Compact Subsection Dividers:** `py-12 sm:py-16` (`48px` mobile, `64px` desktop)
- **Card Internal Padding:**
  - Micro / Pill: `p-3.5` or `p-4`
  - Standard Card: `p-6 sm:p-8`
  - Large / Capability Card: `p-8 sm:p-10 lg:p-12`
  - Full-Width Master Card: `p-6 sm:p-10 md:p-12`

### 4.3 Border Radii Hierarchy

| Class | Pixel Radius | Component Types |
| :--- | :--- | :--- |
| `rounded-full` | `9999px` | Buttons, Telemetry Badges, Category Filter Pills, WhatsApp button |
| `rounded-[36px]` | `36px` | Full-Width Marketplace Cards, 9:16 Video Frame, Large Modals |
| `rounded-[32px]` | `32px` | Large Section Containers, Staircase Architecture Cards |
| `rounded-[28px]` | `28px` | Standard Capability Cards, Why-Choose-Us Grid Tiles |
| `rounded-2xl` / `rounded-3xl` | `16px` / `24px` | Package Tiers (`Orbit`, `Nova`, `Cosmic`), Inner Preview Panels |
| `rounded-xl` | `12px` | Spec Chips, Note/Important Callout Boxes, Job Status Cards |
| `rounded-lg` / `rounded-md` | `8px` / `6px` | Small Code Badges (`SECTOR INDEX // 01`), Tag Chips |

---

## 5. Master Card Layout System

The site utilizes **9 distinct card archetypes**, each engineered for specific cognitive density and scanning behavior:

```
┌────────────────────────────────────────────────────────────────────────┐
│                        MASTER CARD TAXONOMY                            │
├────────────────────────────────┬───────────────────────────────────────┤
│ 1. Full-Width Industry Card    │ Multi-paragraph SEO & strategic thesis│
│ 2. Capability / Scope Card     │ Two-column deliverable checklist      │
│ 3. Ascending Staircase Card    │ Sequential milestone roadmap card     │
│ 4. Scrollytelling Swipe Card   │ Pinned horizontal stacked stages      │
│ 5. Audience Persona Selector   │ Interactive active tab with 3D link   │
│ 6. Why-Us Asymmetric Grid Tile │ 4-corner cards with center 9:16 video │
│ 7. Package Scope Tier Card     │ Orbit · Nova (dark elevated) · Cosmic │
│ 8. Floating Maze Preview Card  │ Depth-of-field 3D hero tile           │
│ 9. Quick-Jump Sector Mini Card │ Fast index pill with numeric code     │
└────────────────────────────────┴───────────────────────────────────────┘
```

---

### Card Type 1: Full-Width Industry Mastermind Card (`MarketplacePage.jsx`)
*Engineered for extensive search engine crawlability and deep multi-paragraph sector playbooks.*

```jsx
<article className="marketplace-industry-card w-full rounded-[28px] sm:rounded-[36px] bg-white border border-stone-200/90 shadow-sm hover:border-space-950 hover:shadow-md transition-all duration-300 overflow-hidden scroll-mt-36">
  {/* Header Ribbon */}
  <div className="p-6 sm:p-10 md:p-12 border-b border-stone-100 bg-gradient-to-b from-stone-50/70 to-white">
    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
      <div className="flex items-center gap-2.5">
        <span className="px-2.5 py-1 rounded-md bg-stone-900 text-white text-[10px] font-mono font-bold tracking-wider">
          SECTOR INDEX // 01
        </span>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wide bg-amber-500/10 text-amber-600">
          <span className="w-2 h-2 rounded-full bg-amber-500" />
          FOOD & HOSPITALITY
        </span>
      </div>
      <span className="text-[11px] font-mono text-slate-500">Category: Food & Dining</span>
    </div>

    {/* Display Title */}
    <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-normal text-slate-900 tracking-tight leading-tight mb-4">
      Digital Marketing & Growth Engine for Cafes, Restaurants & Cloud Kitchens
    </h2>

    {/* Persona Pill & Tagline */}
    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-stone-100/90 border border-stone-200/80 text-xs font-sans font-medium text-slate-700 mb-5">
      <span className="font-mono text-[10px] uppercase font-bold text-slate-500">Target Persona:</span>
      <span>Cafe Owners, Fine-Dining Restaurateurs & Cloud Kitchens</span>
    </div>

    <div className="pl-4 py-1.5 border-l-4 border-amber-500 my-2 text-base sm:text-lg font-sans font-medium text-slate-800 italic">
      "Turn passing footfall and local delivery searches into loyal, repeating dine-in guests."
    </div>

    {/* Executive Overview Box */}
    <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-stone-100/60 border border-stone-200/60 text-xs sm:text-sm text-slate-700 font-sans leading-relaxed">
      <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
        Strategic Landscape & Executive Thesis:
      </span>
      In the hyper-competitive culinary landscape...
    </div>
  </div>

  {/* Multi-Paragraph Body Grid */}
  <div className="p-6 sm:p-10 md:p-12 space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
      {paragraphs.map((p, idx) => (
        <div key={idx} className="rounded-2xl p-5 sm:p-6 bg-stone-50/50 border border-stone-200/60">
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 block mb-2">
            Execution Pillar 0{idx + 1}
          </span>
          <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">{p}</p>
        </div>
      ))}
    </div>

    {/* Capabilities Checklist */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {capabilities.map((cap, idx) => (
        <div key={idx} className="flex items-start gap-2.5 p-3.5 rounded-xl bg-white border border-stone-200/80">
          <span className="text-emerald-600 font-bold text-sm">✓</span>
          <span className="text-xs font-medium text-slate-800">{cap}</span>
        </div>
      ))}
    </div>

    {/* Search Keyword Chips (SEO Query Matrix) */}
    <div className="flex flex-wrap gap-2 pt-4">
      {keywords.map((kw, idx) => (
        <span key={idx} className="px-2.5 py-1 rounded-md bg-stone-100 text-slate-600 text-[11px] font-mono">
          #{kw}
        </span>
      ))}
    </div>
  </div>
</article>
```

---

### Card Type 2: Capability Matrix / Service Card (`ServiceDetailPage.jsx`)
*Used for rendering comprehensive platform services with deliverables, SLAs, and Note callouts.*

```jsx
<div className="capability-matrix-card group relative rounded-[28px] sm:rounded-[36px] bg-[#FAFAFA] border border-stone-200/90 p-8 sm:p-10 lg:p-12 min-h-[340px] flex flex-col justify-between hover:bg-white hover:border-space-950 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 overflow-hidden">
  <div className="relative z-10">
    {/* Code & Scope Tag */}
    <div className="flex items-center justify-between gap-3 mb-4">
      <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
        SERVICE · 02
      </span>
      <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white border border-stone-200 text-slate-600">
        VERIFIED SCOPE
      </span>
    </div>

    {/* Title & Desc */}
    <h3 className="font-serif text-2xl sm:text-3xl font-normal text-space-950 tracking-tight leading-[1.2] mb-3 group-hover:text-black transition-colors duration-300">
      Product Catalogue Management
    </h3>
    <p className="text-slate-600 font-sans text-sm sm:text-base leading-relaxed mb-6">
      Keep Your Product Catalogue Organised
    </p>

    {/* Deliverables List */}
    <div className="pt-5 border-t border-stone-200/60">
      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold block mb-3">
        Specific Scope & Deliverables
      </span>
      <ul className="space-y-2">
        <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
          <span className="text-blue-600 font-semibold select-none flex-shrink-0">―</span>
          <span>Organising product information into a structured catalogue.</span>
        </li>
      </ul>
    </div>

    {/* Dynamic Note / Notes Callout Box */}
    <div className="mt-6 p-4 rounded-xl bg-white border border-stone-200/80 text-xs text-slate-700 font-sans leading-relaxed">
      <strong className="text-space-950 font-mono text-[10px] uppercase tracking-wider block mb-1">
        Note:
      </strong>
      <p>Suitable for: Retailers, manufacturers, distributors, and brands.</p>
    </div>
  </div>

  {/* Hairline Divider Accent */}
  <div className="relative z-10 mt-8">
    <div className="h-px bg-stone-200 w-full group-hover:bg-space-950/40 transition-colors duration-500" />
  </div>
</div>
```

---

### Card Type 3: Ascending Staircase Milestone Card (`ServiceDetailPage.jsx`)
*Visualizes sequential project phases with animated progress bars.*

```jsx
<div className="architecture-stair-card group relative rounded-[28px] sm:rounded-[32px] bg-[#FAFAFA] border border-stone-200/90 p-6 sm:p-7 flex flex-col justify-between hover:bg-white hover:border-space-950 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 overflow-hidden min-h-[360px]">
  <div>
    <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-widest block mb-2">
      PHASE · 01
    </span>
    <h3 className="font-serif text-xl sm:text-2xl font-normal text-space-950 tracking-tight leading-[1.2] mb-3 group-hover:text-black transition-colors duration-300">
      Business Analysis
    </h3>
    <p className="text-slate-600 font-sans text-xs sm:text-sm leading-relaxed mb-4">
      Understand products, margins, capacity, and business goals.
    </p>
  </div>

  {/* Progress Bar Footer */}
  <div className="pt-4 mt-4 border-t border-stone-200/60">
    <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-1.5">
      <span>STEP 01 / 04</span>
      <span>25%</span>
    </div>
    <div className="w-full h-1 bg-stone-200 rounded-full overflow-hidden">
      <div className="h-full bg-space-950 rounded-full group-hover:bg-[#252B36] transition-all duration-500 w-[25%]" />
    </div>
  </div>
</div>
```

---

### Card Type 4: Package & Scope Tier Cards (`Orbit · Nova · Cosmic`)
*Structured commercial scope with inverse dark styling for the recommended tier.*

```jsx
{/* Standard Orbit Tier */}
<div className="card-pricing rounded-3xl p-8 sm:p-10 flex flex-col justify-between bg-[#FAFAFA] text-space-950 border border-slate-200/90 hover:shadow-md transition-all">
  <div>
    <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-semibold block mb-2">
      TIER 01 · ESSENTIAL
    </span>
    <h3 className="font-serif text-3xl font-normal text-space-950 mb-2">ORBIT</h3>
    <p className="text-xs text-slate-500 font-sans mb-6">Foundational marketplace setup and catalogue hygiene.</p>
    <ul className="space-y-3 pt-4 border-t border-slate-200">
      <li className="text-xs text-slate-600 flex items-start gap-2">
        <span className="text-emerald-500 font-bold">✓</span>
        <span>Catalogue Setup up to 50 SKUs</span>
      </li>
    </ul>
  </div>
</div>

{/* Recommended NOVA Tier (Dark Inverse) */}
<div className="card-pricing rounded-3xl p-8 sm:p-10 flex flex-col justify-between bg-space-950 text-white shadow-2xl ring-2 ring-space-950 lg:-translate-y-2 relative transition-all">
  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#00B4D8] text-space-950 text-[10px] font-mono font-extrabold uppercase tracking-wider shadow-sm">
    Recommended Tier
  </div>
  <div>
    <span className="text-[10px] font-mono uppercase tracking-widest text-blue-400 font-semibold block mb-2">
      TIER 02 · ACCELERATION
    </span>
    <h3 className="font-serif text-3xl font-normal text-white mb-2">NOVA</h3>
    <p className="text-xs text-slate-400 font-sans mb-6">Aggressive advertising scale and multi-attribute catalogue management.</p>
    <ul className="space-y-3 pt-4 border-t border-white/10">
      <li className="text-xs text-slate-300 flex items-start gap-2">
        <span className="text-cyan-400 font-bold">✓</span>
        <span>Full Catalogue Management up to 250 SKUs</span>
      </li>
    </ul>
  </div>
</div>
```

---

## 6. Three.js Celestial Visuals & Vector Cannons

### 6.1 `CosmicGalaxyCanvas.jsx`
- **Location:** `src/components/Hero3D/CosmicGalaxyCanvas.jsx`
- **Specs:** 2,400 particle star field, procedural star texture generation, dynamic camera depth drift (`0.0003` radians per tick), and ambient nebula light tinting based on `accentColorHex`.
- **Fog Density:** `THREE.FogExp2(0x000000, 0.002)`
- **Render Engine:** ACES Filmic Tone Mapping with `exposure = 1.2`.

### 6.2 `StrategicBlueprintCanvas.jsx`
- **Location:** `src/components/ServiceDetail/StrategicBlueprintCanvas.jsx`
- **Specs:** Real-time 3D interactive wireframe astrolabe ring system projected onto dark terminal panels (`#0E1218`).
- **Interaction:** Automatically shifts orbital ring rotation and pulse frequency when the user toggles between active audience personas (`activePersona`).

### 6.3 `CelestialHero.jsx`
- **Location:** `src/components/Hero3D/CelestialHero.jsx`
- **Specs:** Multi-comet orbiting solar system with screen-space HTML vector label projection, polar dive camera animation, and whiteout stage transition that hands off seamlessly to the light `#FFFFFF` content sections.

---

## 7. Motion, Curves & Animation Standards

The animation engine relies on **GSAP 3.12** with unified timing constants:

```css
:root {
  --ease-cinematic: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-fluid: cubic-bezier(0.25, 1, 0.5, 1);
}
```

### Motion Guidelines
- **Hero Entrance:** `fromTo(..., { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.85, stagger: 0.12, ease: 'power3.out' })`
- **Card Hover Transition:** `transition-all duration-300 hover:-translate-y-1 hover:shadow-md`
- **Scrollytelling Pin Duration:** `pin: true, scrub: 0.6, end: '+=2400'`
- **Scroll Progress Line:** Driven directly via window scroll event with continuous `scaleX` GPU transform.

---

## 8. Master File & Component Index

| Purpose / Section | Primary Component Path | Data Source |
| :--- | :--- | :--- |
| **Global Navigation** | [`Header.jsx`](file:///Users/bhaweshpanwar/Code/untitled01/proreact/src/components/Header.jsx) & [`MobileDrawer.jsx`](file:///Users/bhaweshpanwar/Code/untitled01/proreact/src/components/MobileDrawer.jsx) | [`megaMenuData.js`](file:///Users/bhaweshpanwar/Code/untitled01/proreact/src/data/megaMenuData.js) |
| **Home Page (3D & Void)** | [`HomePage.jsx`](file:///Users/bhaweshpanwar/Code/untitled01/proreact/src/pages/HomePage.jsx) | [`servicesData.js`](file:///Users/bhaweshpanwar/Code/untitled01/proreact/src/data/servicesData.js) |
| **Marketplace Master Directory**| [`MarketplacePage.jsx`](file:///Users/bhaweshpanwar/Code/untitled01/proreact/src/pages/MarketplacePage.jsx) | [`marketplaceData.js`](file:///Users/bhaweshpanwar/Code/untitled01/proreact/src/data/marketplaceData.js) |
| **Service Detail (E-Com & Ads)** | [`ServiceDetailPage.jsx`](file:///Users/bhaweshpanwar/Code/untitled01/proreact/src/pages/ServiceDetailPage.jsx) | [`ecommerceServicesData.js`](file:///Users/bhaweshpanwar/Code/untitled01/proreact/src/data/ecommerceServicesData.js) & [`digitalMarketingServicesData.js`](file:///Users/bhaweshpanwar/Code/untitled01/proreact/src/data/digitalMarketingServicesData.js) |
| **Pillar Exploration** | [`PillarExplorePage.jsx`](file:///Users/bhaweshpanwar/Code/untitled01/proreact/src/pages/PillarExplorePage.jsx) | [`megaMenuData.js`](file:///Users/bhaweshpanwar/Code/untitled01/proreact/src/data/megaMenuData.js) |
| **About Us Architecture** | [`AboutPage.jsx`](file:///Users/bhaweshpanwar/Code/untitled01/proreact/src/pages/AboutPage.jsx) | Native component data |
| **Global Site Footer** | [`Footer.jsx`](file:///Users/bhaweshpanwar/Code/untitled01/proreact/src/components/Sections/Footer.jsx) | Social & legal directory |
