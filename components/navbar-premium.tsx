'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Menu, X, Sun, Moon } from 'lucide-react'

export function NavbarPremium() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const navLinks = [
    { href: '#features', label: 'Features' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#docs', label: 'Core Docs' },
    { href: '#workers', label: 'Workers API' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Glassmorphic backdrop */}
      <div className="absolute inset-0 backdrop-blur-md bg-background/70 dark:bg-zinc-950/70 border-b border-border/50"></div>

      <div className="relative max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo with badge */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-white font-bold text-sm">
              ⚡
            </div>
            <span className="font-bold text-lg text-foreground">HellxStudio</span>
          </div>
          {/* Pulsing badge */}
          <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 group-hover:border-orange-500/50 transition-colors">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
            <span className="text-xs text-orange-600 dark:text-orange-400 font-medium">300+ Edge Nodes</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-amber-600 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        {/* Right side controls */}
        <div className="flex items-center gap-4">
          {/* Theme toggle */}
          {mounted && (
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-muted transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun size={20} className="text-amber-500" />
              ) : (
                <Moon size={20} className="text-slate-700" />
              )}
            </button>
          )}

          {/* CTA Button */}
          <button className="hidden md:block px-6 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-amber-600 text-white text-sm font-medium hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-200">
            Deploy to Edge
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background dark:bg-zinc-950 border-b border-border/50 backdrop-blur-md">
          <div className="flex flex-col gap-4 px-4 py-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button className="w-full px-6 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-amber-600 text-white text-sm font-medium">
              Deploy to Edge
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
