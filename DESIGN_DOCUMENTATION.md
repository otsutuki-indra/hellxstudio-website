# HellxStudio Premium Design System

## Overview
Ultra-premium B2B SaaS landing page built for Cloudflare Pages/Workers deployment. The design reflects Cloudflare's technical aesthetics with orange/amber accents and extreme performance optimization.

## Color System

### Light Mode
- **Background**: `#f8f7f5` (Warm off-white)
- **Foreground**: `#1a1a1a` (Near-black)
- **Card**: `#ffffff` (Pure white)
- **Accent**: `#f97316` (Vibrant orange)
- **Muted**: `#e8e8e8` (Light gray)
- **Border**: `#e8e8e8` (Subtle dividers)

### Dark Mode
- **Background**: `#09090b` (Deep zinc)
- **Foreground**: `#fafaf9` (Off-white)
- **Card**: `#18181b` (Dark zinc)
- **Accent**: `#f97316` (Same vibrant orange)
- **Muted**: `#3f3f46` (Medium gray)
- **Border**: `#27272a` (Subtle dark dividers)

## Component Architecture

### 1. **NavbarPremium** (`components/navbar-premium.tsx`)
Glassmorphic sticky navigation with:
- Logo + animated edge nodes badge with pulsing indicator
- Smooth hover underline animations for nav links
- Theme toggle (Sun/Moon icons)
- CTA button with gradient and shadow glow
- Mobile hamburger menu with dropdown
- Backdrop blur effect: `backdrop-blur-md bg-zinc-950/70`

### 2. **HeroSection** (`components/hero-section.tsx`)
Split-screen layout featuring:
- **Left**: Gradient headline with orange accents
  - Extreme typography: 6xl-7xl font sizes
  - Key words highlighted in `from-orange-500 via-amber-500 to-yellow-500` gradient
- **Right**: Interactive terminal mock
  - Platform selector (npm, yarn, pnpm, bun)
  - Simulated deployment sequence with success states
  - Copy command button with feedback state
- Subtle background gradient orbs (orange/cyan blur effects)

### 3. **BentoGrid** (`components/bento-grid.tsx`)
Asymmetrical 3-column responsive grid with 5 cards:

#### Card 1: OAuth (2x1 - 2 columns wide)
- Kinde Auth integration display
- Three provider buttons (Google, GitHub, Microsoft)
- Hover state gradient backgrounds
- Latency metric: "4ms from any continent"
- Lock icon accent

#### Card 2: Key Generator (1x1)
- Cryptographic token generation UI
- "Generate Key" button with loading state
- Shows generated key in monospace font
- Animated transitions

#### Card 3: Billing Meter (1x1)
- Response time gauge with emerald progress bar
- Usage display: "67 / 10,000 requests"
- Real-time consumption metrics
- Emerald success borders

#### Card 4: Analytics (2x1 - 2 columns wide)
- **Recharts AreaChart** with mock API metrics data
- Orange gradient fill with transparency
- Uptime metric tag: "99.999% Uptime"
- Grid lines and tooltips for interactivity

#### Card 5: Globe (1x1 on desktop, full-width on mobile)
- Simplified SVG globe representation
- Animated ping points with city labels
- Global network representation
- Responsive positioning

### 4. **PricingEnhanced** (`components/pricing-enhanced.tsx`)
Enterprise pricing with:
- Monthly/Yearly toggle switch
- "Save 20%" badge on yearly billing
- Two-tier pricing model
  - **Hobbyist**: $29/month (or $290/year)
  - **Edge Enterprise**: $299/month (or $2,990/year) - Popular
- Popular card styling:
  - Ring border: `ring-2 ring-orange-500/50`
  - Shadow glow: `shadow-xl shadow-orange-500/20`
  - Animated gradient border on hover
- Feature checklists with green checkmarks
- Excluded features shown with reduced opacity

### 5. **TechMarquee** (`components/tech-marquee.tsx`)
Infinite scrolling logo carousel:
- Tech stack: Cloudflare, GitHub, Kinde, PostgreSQL, Docker, Vercel, React, Node.js, TypeScript, Tailwind
- Seamless loop using CSS animation
- Gradient overlays at edges
- Pause on hover functionality
- Monochrome styling for brand consistency

### 6. **FooterPremium** (`components/footer-premium.tsx`)
4-column layout with operational metrics:
- **Top**: Global operations stats
  - 300+ Edge Regions
  - 1M+ Requests/sec
  - 99.999% Uptime SLA
  - 50K+ Active Users
- **Grid**: 4 columns of links
  - Product, Company, Developers, Legal
- **Bottom**: Brand, social links, copyright
- **Status bar**: Green operational indicator with "All systems operational" message

## Design Tokens & Utilities

### Spacing
- Container max-width: `max-w-7xl`
- Horizontal padding: `px-4` (mobile), `px-8` (desktop)
- Vertical gaps: `gap-6` to `gap-12`
- Section padding: `py-20` to `py-24`

### Typography
- Headlines: Bold with `tracking-tight`
- Subheadings: Medium weight with `text-muted-foreground`
- Small text: `text-xs` with `uppercase tracking-wide`
- Monospace (code): `font-mono`

### Interactions
- Hover states: `hover:border-orange-500/50 hover:shadow-lg transition-all duration-300`
- Active nav: Animated underline with `group-hover:w-full transition-all duration-300`
- Button glows: `hover:shadow-lg hover:shadow-orange-500/50`
- Animations: Pulsing badges, smooth transitions, element reveals

### Responsive Breakpoints
- Mobile: Single column layouts
- `md:` (768px): 2-3 column grids
- `lg:` (1024px): Full 3-column bento grid

## Theme System

### Implementation
- Uses `next-themes` with `useTheme()` hook
- ThemeProvider in root layout with `suppressHydrationWarning`
- System theme preference detection
- CSS custom properties for color tokens
- All components respond to `dark:` class prefix

### Color Overrides by Mode
Dark mode applies:
- Darker backgrounds: `dark:bg-zinc-950` → `dark:bg-zinc-900`
- Lighter text: `dark:text-zinc-100`
- Adjusted accents: `dark:text-orange-400`
- Border adjustments: `dark:border-zinc-800`

## Performance Optimizations

1. **Client Components**: Only interactive elements use `'use client'`
2. **Static Rendering**: Hero, bento grid, pricing, marquee can be static
3. **CSS Animations**: Native CSS for smooth 60fps
4. **Recharts**: Lazy-loaded area chart with mock data
5. **Image Optimization**: SVG for icons and graphics
6. **No External Libraries**: Minimal dependencies for edge deployment

## Deployment Notes

### Cloudflare Pages
- Static site generation ready
- No server-side rendering required
- Environment: `NODE_ENV=production`
- Build command: `pnpm build`
- Build output: `.next`

### Edge Performance
- Gzip-friendly markup
- CSS variables for theme switching (no JS overhead)
- Lightweight animations (GPU-accelerated)
- No render-blocking resources
- Icons via Lucide React (tree-shakeable)

## Component Dependencies

```
Root (layout.tsx)
├── ThemeProvider (theme-provider.tsx)
└── Page (page.tsx)
    ├── NavbarPremium (navbar-premium.tsx)
    ├── HeroSection (hero-section.tsx)
    ├── BentoGrid (bento-grid.tsx)
    │   └── Recharts (area chart)
    ├── PricingEnhanced (pricing-enhanced.tsx)
    ├── TechMarquee (tech-marquee.tsx)
    └── FooterPremium (footer-premium.tsx)
```

## Customization Guide

### Changing Primary Color
1. Update `--accent` variables in `app/globals.css`
2. Update button gradients: `from-orange-500 to-amber-600` → your color
3. Update hover states: `hover:border-orange-500/50` → your color

### Adding New Sections
1. Create component in `components/`
2. Export as default or named export
3. Import in `app/page.tsx`
4. Add to main render tree with appropriate spacing

### Modifying Pricing
1. Edit plans array in `PricingEnhanced`
2. Update features list for each plan
3. Adjust monthlyPrice and yearlyPrice values

### Theme Colors
All theme colors centralized in CSS custom properties at top of `globals.css` for quick adjustments.
