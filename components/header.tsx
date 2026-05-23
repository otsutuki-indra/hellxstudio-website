'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Platform', href: '/platform' },
    { label: 'Features', href: '/features' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Documentation', href: '/documentation' },
    { label: 'Blog', href: '/blog' },
  ]

  return (
    <header className="fixed top-0 w-full z-50 bg-white border-b border-silver-blue/20">
      <div className="flex items-center justify-between h-[72px] px-6 max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-space-gray">HellxStudio</span>
          <span className="inline-flex items-center gap-1.5 text-sm">
            <span className="w-2 h-2 bg-emerald rounded-full animate-pulse"></span>
            <span className="text-emerald text-sm font-medium">Live</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-space-gray font-medium hover:text-accent-blue transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <Link
            href="/signin"
            className="hidden md:block text-sm text-space-gray font-medium hover:opacity-70 transition-opacity"
          >
            Sign In
          </Link>
          <Link
            href="/get-started"
            className="px-4 h-8 bg-accent-blue hover:brightness-110 text-white text-sm font-medium rounded-lg transition-all duration-200 flex items-center justify-center"
          >
            Get Started
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-space-gray"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-silver-blue/20">
          <nav className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-space-gray font-medium hover:text-accent-blue transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/signin"
              className="text-sm text-space-gray font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Sign In
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
