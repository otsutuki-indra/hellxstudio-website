import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function PricingPage() {
  return (
    <main>
      <Header />
      <div className="pt-[72px]">
        {/* Hero */}
        <section className="pt-24 pb-16 px-6 bg-background">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-space-gray mb-6">
              Transparent, Simple Pricing
            </h1>
            <p className="text-xl text-silver-blue">
              No hidden fees. No surprise charges. Scale at your own pace.
            </p>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Starter */}
              <div className="border-2 border-space-gray rounded-xl p-8">
                <h3 className="text-2xl font-bold text-space-gray mb-2">Starter</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-space-gray">$29</span>
                  <span className="text-silver-blue text-sm ml-2">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {['Up to 2 products', 'Up to 500 licenses', 'Email support', 'Basic analytics'].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-space-gray">
                      <span className="text-emerald">✓</span> {item}
                    </li>
                  ))}
                </ul>
                <Button className="w-full h-10 border-2 border-space-gray text-space-gray hover:bg-background/50 font-bold rounded-lg">
                  Get Started
                </Button>
              </div>

              {/* Professional - Featured */}
              <div className="border-3 border-accent-blue rounded-xl p-8 relative shadow-lg bg-background">
                <div className="absolute -top-4 right-6 bg-accent-blue text-white px-3 py-1 rounded-full text-xs font-bold">
                  MOST POPULAR
                </div>
                <h3 className="text-2xl font-bold text-space-gray mb-2">Professional</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-accent-blue">$199</span>
                  <span className="text-silver-blue text-sm ml-2">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {['Unlimited products', '50,000 licenses/month', 'Priority support', 'Advanced analytics', 'Custom branding', 'Webhooks'].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-space-gray">
                      <span className="text-emerald">✓</span> {item}
                    </li>
                  ))}
                </ul>
                <Button className="w-full h-10 bg-accent-blue hover:brightness-110 text-white font-bold rounded-lg">
                  Start Free Trial
                </Button>
              </div>

              {/* Enterprise */}
              <div className="border-2 border-space-gray rounded-xl p-8">
                <h3 className="text-2xl font-bold text-space-gray mb-2">Enterprise</h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-space-gray">Custom</span>
                  <p className="text-silver-blue text-sm mt-2">Tailored to your needs</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {['Unlimited everything', '24/7 phone support', 'Dedicated account manager', 'Custom integrations', 'SLA guarantees', 'On-premises option'].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-space-gray">
                      <span className="text-emerald">✓</span> {item}
                    </li>
                  ))}
                </ul>
                <Button className="w-full h-10 border-2 border-space-gray text-space-gray hover:bg-background/50 font-bold rounded-lg">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
