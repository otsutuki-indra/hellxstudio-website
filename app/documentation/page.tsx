import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function DocumentationPage() {
  return (
    <main>
      <Header />
      <div className="pt-[72px]">
        <section className="py-24 px-6 bg-background">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-space-gray mb-6">Documentation</h1>
            <p className="text-xl text-silver-blue mb-12">
              Comprehensive guides, API references, and code examples to help you build with HellxStudio.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 border border-silver-blue/20 rounded-lg hover:border-accent-blue transition-colors">
                <h3 className="text-xl font-bold text-space-gray mb-3">Getting Started</h3>
                <p className="text-silver-blue mb-4">
                  Set up your account, configure your first project, and make your first API call in minutes.
                </p>
                <a href="#" className="text-accent-blue font-medium hover:opacity-80">
                  Read guide →
                </a>
              </div>

              <div className="p-8 border border-silver-blue/20 rounded-lg hover:border-accent-blue transition-colors">
                <h3 className="text-xl font-bold text-space-gray mb-3">API Reference</h3>
                <p className="text-silver-blue mb-4">
                  Complete API documentation with examples in Python, JavaScript, Go, and more.
                </p>
                <a href="#" className="text-accent-blue font-medium hover:opacity-80">
                  Browse API →
                </a>
              </div>

              <div className="p-8 border border-silver-blue/20 rounded-lg hover:border-accent-blue transition-colors">
                <h3 className="text-xl font-bold text-space-gray mb-3">Code Examples</h3>
                <p className="text-silver-blue mb-4">
                  Copy-paste ready code snippets for common use cases and integrations.
                </p>
                <a href="#" className="text-accent-blue font-medium hover:opacity-80">
                  View examples →
                </a>
              </div>

              <div className="p-8 border border-silver-blue/20 rounded-lg hover:border-accent-blue transition-colors">
                <h3 className="text-xl font-bold text-space-gray mb-3">FAQ</h3>
                <p className="text-silver-blue mb-4">
                  Answers to commonly asked questions about pricing, features, and support.
                </p>
                <a href="#" className="text-accent-blue font-medium hover:opacity-80">
                  Read FAQ →
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
