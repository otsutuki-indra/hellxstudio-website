'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Github, Twitter, Linkedin, Mail } from 'lucide-react'

type FooterColumn = {
  title: string
  links: Array<{
    label: string
    href: string
  }>
}

type Stat = {
  label: string
  value: string
}

type SocialLink = {
  icon: React.ComponentType<{ size: number }>
  href: string
  label: string
}

export function FooterPremium(): React.ReactElement {
  const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear())

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  const columns: FooterColumn[] = [
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '#features' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'Security', href: '#security' },
        { label: 'Status', href: '#status' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '#about' },
        { label: 'Blog', href: '#blog' },
        { label: 'Careers', href: '#careers' },
        { label: 'Contact', href: '#contact' },
      ],
    },
    {
      title: 'Developers',
      links: [
        { label: 'Documentation', href: '#docs' },
        { label: 'API Reference', href: '#api' },
        { label: 'Examples', href: '#examples' },
        { label: 'SDK', href: '#sdk' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy', href: '#privacy' },
        { label: 'Terms', href: '#terms' },
        { label: 'Compliance', href: '#compliance' },
        { label: 'Cookies', href: '#cookies' },
      ],
    },
  ]

  const stats: Stat[] = [
    { label: 'Edge Regions', value: '300+' },
    { label: 'Requests/sec', value: '1M+' },
    { label: 'Uptime SLA', value: '99.999%' },
    { label: 'Active Users', value: '50K+' },
  ]

  const socialLinks: SocialLink[] = [
    { icon: Github, href: '#github', label: 'GitHub' },
    { icon: Twitter, href: '#twitter', label: 'Twitter' },
    { icon: Linkedin, href: '#linkedin', label: 'LinkedIn' },
    { icon: Mail, href: '#email', label: 'Email' },
  ]

  return (
    <footer className="bg-card border-t border-border">
      {/* Operational metrics */}
      <div className="border-b border-border px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs text-muted-foreground mb-6 uppercase tracking-wide font-semibold">
            Global Operations
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat: Stat, idx: number) => (
              <div key={idx}>
                <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="px-4 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Footer grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {columns.map((column: FooterColumn, idx: number) => (
              <div key={idx}>
                <h3 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wide">
                  {column.title}
                </h3>
                <ul className="space-y-3">
                  {column.links.map((link, lidx: number) => (
                    <li key={lidx}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom section */}
          <div className="border-t border-border pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            {/* Brand & Copyright */}
            <div>
              <Link href="/" className="flex items-center gap-2 mb-2 group">
                <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-white font-bold text-xs">
                  ⚡
                </div>
                <span className="font-bold text-foreground">HellxStudio</span>
              </Link>
              <p className="text-xs text-muted-foreground">
                © {currentYear} HellxStudio. All rights reserved.
              </p>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-6">
              {socialLinks.map((social: SocialLink, idx: number) => {
                const Icon = social.icon
                return (
                  <a
                    key={idx}
                    href={social.href}
                    aria-label={social.label}
                    className="text-muted-foreground hover:text-orange-600 dark:hover:text-orange-400 transition-colors duration-200"
                  >
                    <Icon size={18} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border bg-muted/30 px-4 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            <span>All systems operational</span>
          </div>
          <p>Powered by Cloudflare Pages & Workers</p>
        </div>
      </div>
    </footer>
  )
}
