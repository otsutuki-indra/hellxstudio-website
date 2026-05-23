import { NavbarPremium } from '@/components/navbar-premium'
import { HeroSection } from '@/components/hero-section'
import { BentoGrid } from '@/components/bento-grid'
import { PricingEnhanced } from '@/components/pricing-enhanced'
import { TechMarquee } from '@/components/tech-marquee'
import { FooterPremium } from '@/components/footer-premium'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <NavbarPremium />
      <div className="pt-20">
        <HeroSection />
        <BentoGrid />
        <PricingEnhanced />
        <TechMarquee />
      </div>
      <FooterPremium />
    </main>
  )
}
