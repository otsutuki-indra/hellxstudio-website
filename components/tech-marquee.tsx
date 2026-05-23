'use client'

import React from 'react'

const techLogos = [
  'Cloudflare',
  'GitHub',
  'Kinde',
  'PostgreSQL',
  'Docker',
  'Vercel',
  'React',
  'Node.js',
  'TypeScript',
  'Tailwind',
]

export function TechMarquee() {
  return (
    <section className="py-12 px-4 bg-muted/30 border-y border-border overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-sm text-muted-foreground mb-8">
          Trusted by developers using the world's best edge infrastructure
        </p>

        {/* Marquee container */}
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-12 animate-scroll">
            {/* First set */}
            {techLogos.map((logo, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-40 h-12 flex items-center justify-center"
              >
                <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                  {logo}
                </span>
              </div>
            ))}

            {/* Second set (for seamless loop) */}
            {techLogos.map((logo, idx) => (
              <div
                key={`duplicate-${idx}`}
                className="flex-shrink-0 w-40 h-12 flex items-center justify-center"
              >
                <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                  {logo}
                </span>
              </div>
            ))}
          </div>

          {/* Gradient overlays */}
          <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-background to-transparent pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-background to-transparent pointer-events-none"></div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 2));
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
