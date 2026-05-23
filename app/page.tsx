import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Key, Lock, CreditCard, Code, BarChart3, BookOpen, ArrowRight, Play } from 'lucide-react'
import Link from 'next/link'

function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-space-gray mb-6 leading-tight">
          Build Your Digital Empire with Next-Gen Infrastructure
        </h1>
        <p className="text-lg md:text-xl text-silver-blue mb-12 leading-relaxed max-w-2xl mx-auto">
          Scale your products faster with HellxStudio&apos;s modular micro-infrastructure. Simple pricing, zero hidden fees. Perfect for startups and enterprises.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/get-started">
            <Button className="h-12 px-8 bg-accent-blue hover:brightness-110 text-white font-bold text-base rounded-lg">
              Start Free Trial
            </Button>
          </Link>
          <button className="h-12 px-8 border-2 border-accent-blue text-accent-blue font-bold text-base rounded-lg hover:bg-background transition-colors duration-200 flex items-center gap-2">
            <Play size={18} />
            Watch Demo
          </button>
        </div>
      </div>
    </section>
  )
}

function TrustBar() {
  return (
    <section className="bg-white border-t border-b border-silver-blue/20 py-8 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm text-space-gray font-medium mb-4">
          Trusted by 2,000+ developers and teams worldwide
        </p>
        <p className="text-xs text-silver-blue">
          Google Cloud • Stripe • Linear • Vercel • Notion
        </p>
      </div>
    </section>
  )
}

function FeaturesSection() {
  const features = [
    {
      icon: Key,
      title: 'License Management',
      description: 'Generate, track, and manage unlimited license keys across all your products. Automatic expiration handling, renewal reminders, and bulk operations.',
    },
    {
      icon: Lock,
      title: 'Secure Authentication',
      description: 'Built-in login system with Kindle integration. OAuth, email/password auth, two-factor authentication, and secure session management out of the box.',
    },
    {
      icon: CreditCard,
      title: 'Micro-Billing System',
      description: 'Simple, transparent pricing. Monthly or yearly subscriptions with usage-based add-ons, automatic invoicing, and detailed billing reports.',
    },
    {
      icon: Code,
      title: 'API-First Architecture',
      description: 'RESTful API endpoints for everything. Integrate with your own apps or automate workflows with webhooks and real-time events.',
    },
    {
      icon: BarChart3,
      title: 'Real-Time Analytics',
      description: 'Monitor usage, track active licenses, and view detailed insights about your customers in real-time with interactive dashboards.',
    },
    {
      icon: BookOpen,
      title: 'Developer Documentation',
      description: 'Comprehensive API docs, code examples in 5+ languages, and an active community forum for support and best practices.',
    },
  ]

  return (
    <section className="bg-background py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-space-gray mb-4">
            Powerful Features, Simple Interface
          </h2>
          <p className="text-lg text-silver-blue max-w-2xl mx-auto">
            Everything you need to build, scale, and manage your infrastructure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="bg-white border-t-4 border-space-gray rounded-xl p-8 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <Icon size={32} className="text-accent-blue mb-6" />
                <h3 className="text-xl font-bold text-space-gray mb-4">{feature.title}</h3>
                <p className="text-sm text-silver-blue leading-relaxed mb-6">{feature.description}</p>
                <Link href="#" className="text-sm font-medium text-accent-blue hover:opacity-80 transition-opacity flex items-center gap-1">
                  Learn more <ArrowRight size={14} />
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function PricingSection() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-space-gray mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-silver-blue">
            No hidden fees. No surprise charges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Startup Plan */}
          <div className="bg-background border-2 border-space-gray rounded-xl p-8">
            <h3 className="text-2xl font-bold text-space-gray mb-2">Startup</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold text-space-gray">$49</span>
              <span className="text-silver-blue text-sm ml-2">/month</span>
              <p className="text-xs text-silver-blue mt-2">Billed monthly</p>
            </div>
            <ul className="space-y-3 mb-8">
              {[
                'Up to 5 products',
                '1,000 licenses/month',
                'Email support',
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm text-space-gray">
                  <span className="text-emerald font-bold">✓</span> {item}
                </li>
              ))}
              {[
                'API access',
                'Custom branding',
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm text-silver-blue">
                  <span className="text-rose font-bold">✕</span> {item}
                </li>
              ))}
            </ul>
            <Button className="w-full h-10 border-2 border-space-gray text-space-gray hover:bg-background/50 font-bold rounded-lg">
              Get Started
            </Button>
          </div>

          {/* Professional Plan */}
          <div className="bg-background border-3 border-accent-blue rounded-xl p-8 relative shadow-lg">
            <div className="absolute -top-4 right-6 bg-accent-blue text-white px-3 py-1 rounded-full text-xs font-bold">
              MOST POPULAR
            </div>
            <h3 className="text-2xl font-bold text-space-gray mb-2">Professional</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold text-accent-blue">$199</span>
              <span className="text-silver-blue text-sm ml-2">/month</span>
              <p className="text-xs text-silver-blue mt-2">Billed monthly</p>
            </div>
            <ul className="space-y-3 mb-8">
              {[
                'Unlimited products',
                '50,000 licenses/month',
                'Priority email & chat support',
                'REST API access',
                'Custom branding',
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm text-space-gray">
                  <span className="text-emerald font-bold">✓</span> {item}
                </li>
              ))}
            </ul>
            <Button className="w-full h-10 bg-accent-blue hover:brightness-110 text-white font-bold rounded-lg">
              Start Free Trial
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="bg-gradient-to-r from-space-gray to-[#2C2C2E] text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Ready to scale your infrastructure?
        </h2>
        <p className="text-lg text-silver-blue mb-8">
          Join 2,000+ developers building the future
        </p>
        <Link href="/get-started">
          <Button className="h-12 px-8 bg-accent-blue hover:brightness-110 text-white font-bold text-base rounded-lg">
            Start Your Free Trial Today
          </Button>
        </Link>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <main>
      <Header />
      <div className="pt-[72px]">
        <HeroSection />
        <TrustBar />
        <FeaturesSection />
        <PricingSection />
        <CTASection />
      </div>
      <Footer />
    </main>
  )
}
