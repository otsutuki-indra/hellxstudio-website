'use client'

import Link from 'next/link'
import { Linkedin, Twitter, MessageCircle } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-space-gray to-[#2C2C2E] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-8">
          {/* Column 1 - Brand */}
          <div>
            <h3 className="text-xl font-bold mb-3">HellxStudio</h3>
            <p className="text-silver-blue text-sm leading-relaxed mb-3">
              Next-generation micro-infrastructure for scale-focused developers
            </p>
            <div className="flex items-center gap-2 text-sm">
              <span className="w-2 h-2 bg-emerald rounded-full"></span>
              <span className="text-emerald font-medium">All Systems Operational</span>
            </div>
          </div>

          {/* Column 2 - Product */}
          <div>
            <h4 className="text-sm font-bold mb-4 text-white">Product</h4>
            <ul className="space-y-2.5">
              {['Core Module', 'Crypto Vault', 'Ledger Engine', 'Marketplace'].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm text-white hover:text-accent-blue transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Resources */}
          <div>
            <h4 className="text-sm font-bold mb-4 text-white">Resources</h4>
            <ul className="space-y-2.5">
              {['Documentation', 'API Reference', 'System Status', 'GitHub'].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm text-white hover:text-accent-blue transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Company */}
          <div>
            <h4 className="text-sm font-bold mb-4 text-white">Company</h4>
            <ul className="space-y-2.5">
              {['Privacy Policy', 'Terms of Service', 'Security', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm text-white hover:text-accent-blue transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer Bar */}
        <div className="border-t border-silver-blue/30 pt-6 mt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white">
              © 2026 HellxStudio. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="https://linkedin.com/company/hellxstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-blue hover:opacity-70 transition-opacity duration-200"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                href="https://twitter.com/hellxstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-blue hover:opacity-70 transition-opacity duration-200"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="https://discord.gg/hellxstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-blue hover:opacity-70 transition-opacity duration-200"
              >
                <MessageCircle size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
