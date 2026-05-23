'use client'

import React, { useState } from 'react'
import { Check } from 'lucide-react'

type Plan = {
  name: string
  description: string
  monthlyPrice: number
  yearlyPrice: number
  isPopular?: boolean
  features: string[]
  excluded: string[]
}

export function PricingEnhanced(): React.ReactElement {
  const [isYearly, setIsYearly] = useState<boolean>(false)

  const plans: Plan[] = [
    {
      name: 'Hobbyist',
      description: 'Perfect for side projects',
      monthlyPrice: 29,
      yearlyPrice: 290,
      features: [
        'Up to 5 applications',
        '10,000 monthly requests',
        'Basic analytics',
        'Community support',
        'Standard deployment',
      ],
      excluded: ['Advanced security', 'Priority support', 'Custom SLAs'],
    },
    {
      name: 'Edge Enterprise',
      description: 'For global-scale applications',
      monthlyPrice: 299,
      yearlyPrice: 2990,
      isPopular: true,
      features: [
        'Unlimited applications',
        '10M+ monthly requests',
        'Real-time analytics & insights',
        'Priority 24/7 support',
        'Global deployment',
        'Advanced security features',
        'Custom SLA agreements',
        'Dedicated account manager',
      ],
      excluded: [],
    },
  ]

  return (
    <section id="pricing" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Edge-Scale Pricing
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Choose your plan. Scale as you grow.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${!isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative inline-flex h-8 w-14 items-center rounded-full bg-muted transition-colors duration-200"
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-foreground transition duration-300 ${
                  isYearly ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
              Yearly
            </span>
            {isYearly && (
              <span className="ml-2 inline-block px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/50 text-emerald-600 dark:text-emerald-400 text-xs font-bold">
                Save 20%
              </span>
            )}
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan: Plan, idx: number) => (
            <div
              key={idx}
              className={`relative p-8 rounded-2xl transition-all duration-300 ${
                plan.isPopular
                  ? 'ring-2 ring-orange-500/50 shadow-xl shadow-orange-500/20 bg-gradient-to-br from-card to-card'
                  : 'bg-card border border-border hover:border-orange-500/50'
              }`}
            >
              {/* Animated border for popular */}
              {plan.isPopular && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              )}

              {/* Popular badge */}
              {plan.isPopular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-orange-500 to-amber-600 text-white text-xs font-bold">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{plan.description}</p>
              </div>

              {/* Pricing */}
              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-foreground">
                    ${isYearly ? Math.round(plan.yearlyPrice / 12) : plan.monthlyPrice}
                  </span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                {isYearly && (
                  <p className="text-xs text-muted-foreground mt-2">
                    Billed ${plan.yearlyPrice}/year
                  </p>
                )}
              </div>

              {/* CTA */}
              <button
                className={`w-full mb-8 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  plan.isPopular
                    ? 'bg-gradient-to-r from-orange-500 to-amber-600 text-white hover:shadow-lg hover:shadow-orange-500/50'
                    : 'bg-muted text-foreground hover:bg-muted/80'
                }`}
              >
                Get Started
              </button>

              {/* Features */}
              <div className="space-y-4 mb-8">
                <div className="text-sm font-semibold text-foreground mb-4">Includes:</div>
                {plan.features.map((feature: string, fidx: number) => (
                  <div key={fidx} className="flex items-start gap-3">
                    <Check size={18} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Excluded features */}
              {plan.excluded.length > 0 && (
                <div className="space-y-3 pt-6 border-t border-border">
                  {plan.excluded.map((feature: string, fidx: number) => (
                    <div key={fidx} className="flex items-start gap-3 opacity-50">
                      <span className="text-lg text-muted-foreground">−</span>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground">
            Need something custom?{' '}
            <button className="text-orange-600 dark:text-orange-400 font-medium hover:underline">
              Talk to our team
            </button>
          </p>
        </div>
      </div>
    </section>
  )
}
