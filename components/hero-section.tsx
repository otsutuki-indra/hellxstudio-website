'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { Copy, Check } from 'lucide-react'

const commands: Record<string, string> = {
  npm: 'npm run deploy --edge',
  yarn: 'yarn deploy --edge',
  pnpm: 'pnpm deploy --edge',
  bun: 'bun run deploy --edge',
}

export function HeroSection(): React.ReactElement {
  const [copied, setCopied] = useState<boolean>(false)
  const [selectedPlatform, setSelectedPlatform] = useState<keyof typeof commands>('npm')

  const handleCopy = useCallback((): void => {
    if (typeof window !== 'undefined' && navigator?.clipboard) {
      navigator.clipboard
        .writeText(commands[selectedPlatform])
        .then(() => {
          setCopied(true)
          const timer = setTimeout(() => setCopied(false), 2000)
          return () => clearTimeout(timer)
        })
        .catch((err: Error) => {
          console.error('[v0] Copy failed:', err.message)
        })
    }
  }, [selectedPlatform])

  return (
    <section className="pt-32 pb-20 px-4 relative overflow-hidden">
      {/* Gradient background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="text-foreground">Sovereign</span>
              <br />
              <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
                Infrastructure
              </span>
              <br />
              <span className="text-foreground">at the Edge</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
              Zero cold starts. Globally distributed micro-billing, Kinde authentication, and software licensing running natively on Cloudflare&apos;s global network.
            </p>

            <div className="flex flex-wrap gap-3">
              <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-amber-600 text-white font-medium hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-200">
                Start Deploying
              </button>
              <button className="px-6 py-3 rounded-lg border border-border hover:bg-muted transition-colors duration-200 font-medium">
                View Documentation
              </button>
            </div>
          </div>

          {/* Right: Terminal mock */}
          <div className="space-y-4">
            {/* Platform selector */}
            <div className="flex gap-2 mb-4">
              {Object.keys(commands).map((platform: string) => (
                <button
                  key={platform}
                  onClick={() => setSelectedPlatform(platform as keyof typeof commands)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedPlatform === platform
                      ? 'bg-orange-500/20 text-orange-600 dark:text-orange-400 border border-orange-500/50'
                      : 'bg-muted/50 text-muted-foreground hover:bg-muted'
                  }`}
                >
                  {platform}
                </button>
              ))}
            </div>

            {/* Terminal window */}
            <div className="bg-zinc-900 dark:bg-black border border-zinc-800 dark:border-zinc-700 rounded-lg overflow-hidden shadow-2xl">
              {/* Terminal header */}
              <div className="bg-zinc-800 dark:bg-zinc-900 px-4 py-3 flex items-center gap-2 border-b border-zinc-700">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-xs text-zinc-400 ml-4 font-mono">deployment-cli.sh</span>
              </div>

              {/* Terminal content */}
              <div className="p-6 font-mono text-sm">
                <div className="space-y-3">
                  <div className="text-zinc-400">
                    <span className="text-green-400">$</span> {commands[selectedPlatform]}
                  </div>

                  <div className="text-zinc-400 text-xs space-y-2 mt-4 pt-4 border-t border-zinc-700">
                    <div>
                      <span className="text-cyan-400">⚡ Optimizing assets...</span>
                    </div>
                    <div>
                      <span className="text-cyan-400">✓ Bundled</span>
                      <span className="text-zinc-500 ml-2">(45KB gzipped)</span>
                    </div>
                    <div>
                      <span className="text-cyan-400">✓ Workers KV synced</span>
                      <span className="text-zinc-500 ml-2">(1.2MB)</span>
                    </div>
                    <div>
                      <span className="text-cyan-400">✓ Edge functions deployed</span>
                      <span className="text-zinc-500 ml-2">(300+ regions)</span>
                    </div>
                    <div>
                      <span className="text-cyan-400">✓ SSL certificate verified</span>
                    </div>

                    <div className="mt-4 pt-4 border-t border-zinc-700">
                      <span className="text-green-400 font-bold">✓ Deployment complete!</span>
                      <span className="text-zinc-500 ml-2">Live at: https://hellxstudio.edge</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Copy button */}
              <div className="bg-zinc-800 dark:bg-zinc-900 px-6 py-3 border-t border-zinc-700 flex justify-end">
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/30 hover:border-orange-500/50 hover:bg-orange-500/20 transition-all duration-200 text-sm font-medium"
                >
                  {copied ? (
                    <>
                      <Check size={16} />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy size={16} />
                      Copy Command
                    </>
                  )}
                </button>
              </div>
            </div>

            <p className="text-xs text-muted-foreground">
              Deploy in seconds. No infrastructure to manage. Global availability guaranteed.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
