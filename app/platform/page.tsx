import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { ArrowRight, Shield, Zap, Globe } from 'lucide-react'
import Link from 'next/link'

export default function PlatformPage() {
  return (
    <main>
      <Header />
      <div className="pt-[72px]">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-6 bg-background">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-space-gray mb-6">
              Our Platform
            </h1>
            <p className="text-xl text-silver-blue mb-12 max-w-2xl">
              Built from the ground up to serve developers who need infrastructure that just works. No complexity, no unnecessary features—just powerful tools that scale with you.
            </p>
          </div>
        </section>

        {/* Core Features */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-space-gray mb-16">Core Capabilities</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="p-8 border border-silver-blue/20 rounded-lg">
                <Shield size={32} className="text-accent-blue mb-4" />
                <h3 className="text-xl font-bold text-space-gray mb-3">Enterprise Security</h3>
                <p className="text-silver-blue">
                  Bank-grade encryption, regular security audits, and compliance with GDPR, CCPA, and SOC 2 standards.
                </p>
              </div>
              <div className="p-8 border border-silver-blue/20 rounded-lg">
                <Zap size={32} className="text-accent-blue mb-4" />
                <h3 className="text-xl font-bold text-space-gray mb-3">Lightning Fast</h3>
                <p className="text-silver-blue">
                  99.99% uptime SLA with global CDN distribution. Response times under 100ms anywhere in the world.
                </p>
              </div>
              <div className="p-8 border border-silver-blue/20 rounded-lg">
                <Globe size={32} className="text-accent-blue mb-4" />
                <h3 className="text-xl font-bold text-space-gray mb-3">Global Scale</h3>
                <p className="text-silver-blue">
                  Multi-region deployment across 6 continents. Automatic failover and disaster recovery built-in.
                </p>
              </div>
            </div>

            <div className="bg-background p-12 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-space-gray mb-4">Ready to get started?</h3>
              <p className="text-silver-blue mb-8 max-w-2xl mx-auto">
                Join thousands of developers who are already building with HellxStudio.
              </p>
              <Link href="/get-started">
                <Button className="h-12 px-8 bg-accent-blue hover:brightness-110 text-white font-bold rounded-lg">
                  Start Free Trial
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
