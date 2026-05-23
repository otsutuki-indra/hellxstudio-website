# HellxStudio - Premium Micro-SaaS Landing Site

A modern, fully-featured landing website built with Next.js, TypeScript, and Tailwind CSS for HellxStudio's micro-infrastructure platform.

## Features

- **8 Fully Realized Pages**
  - Home/Landing with Hero, Features, Pricing, and CTA sections
  - Platform Overview
  - Detailed Features Showcase
  - Transparent Pricing
  - Documentation
  - Blog
  - Sign In & Get Started auth pages

- **Luxury Tech Design System**
  - Space Gray (#1D1D1F) primary color
  - Accent Blue (#0071E3) for CTAs
  - Silver Blue (#A2AAAD) for secondary text
  - Premium, professional aesthetic
  
- **Responsive Design**
  - Mobile-first approach
  - Desktop, tablet, and mobile optimized
  - Smooth transitions and hover effects

- **Performance Optimized**
  - Static site generation
  - Optimized images
  - Fast load times

## Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - High-quality components
- **Lucide Icons** - Icon library

## Getting Started

### Prerequisites
- Node.js 18+
- pnpm (recommended) or npm

### Local Development

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Open http://localhost:3000
```

### Build for Production

```bash
# Build the project
pnpm build

# Start production server
pnpm start
```

## Project Structure

```
.
├── app/
│   ├── layout.tsx          # Root layout
│   ├── globals.css         # Global styles & design tokens
│   ├── page.tsx            # Home page
│   ├── platform/
│   ├── pricing/
│   ├── features/
│   ├── documentation/
│   ├── blog/
│   ├── signin/
│   └── get-started/
├── components/
│   ├── header.tsx          # Navigation header
│   ├── footer.tsx          # Global footer
│   └── ui/                 # shadcn/ui components
├── public/                 # Static assets
└── package.json
```

## Deployment

### Cloudflare Pages

1. Push your code to GitHub
2. Connect repository to Cloudflare Pages
3. Set build command: `pnpm build`
4. Set output directory: `out`
5. Deploy!

### Vercel

1. Connect GitHub repository to Vercel
2. Vercel automatically detects Next.js
3. Deploy with one click

## Customization

### Update Colors

Edit `/app/globals.css` to modify the color tokens:
- `--space-gray`: Primary color
- `--accent-blue`: CTA color
- `--silver-blue`: Secondary text color
- `--bg-off-white`: Background color

### Update Content

All page content is in the `/app` directory. Simply edit the TypeScript files to update text, links, and structure.

### Add New Pages

Create new files in `/app` directory following the existing pattern:

```tsx
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function NewPage() {
  return (
    <main>
      <Header />
      {/* Your content here */}
      <Footer />
    </main>
  )
}
```

## Performance

- **99.9% Uptime** - Built on reliable infrastructure
- **< 100ms Response Time** - Global CDN distribution
- **Optimized Assets** - Minified and compressed
- **SEO Ready** - Metadata and sitemap included

## Security

- HTTPS by default
- No external analytics tracking (opt-in only)
- Privacy-first approach
- Regular security updates

## Support

For issues, questions, or suggestions, please open an issue on GitHub or contact support@hellxstudio.com

## License

© 2026 HellxStudio. All rights reserved.

---

Built with ❤️ using Next.js and Vercel
