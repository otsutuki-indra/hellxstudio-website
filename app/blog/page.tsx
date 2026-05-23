import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function BlogPage() {
  const posts = [
    {
      title: 'Scaling From Startup to Enterprise: A Developer\'s Guide',
      date: 'May 15, 2026',
      excerpt: 'Learn how to architect your infrastructure for growth without breaking your budget or sanity.',
    },
    {
      title: 'Security Best Practices for Micro-Infrastructure',
      date: 'May 8, 2026',
      excerpt: 'Everything you need to know about keeping your licenses, keys, and data secure.',
    },
    {
      title: 'API Design Patterns That Work',
      date: 'May 1, 2026',
      excerpt: 'A deep dive into RESTful API design, webhooks, and event-driven architecture.',
    },
    {
      title: 'Monitoring and Alerting in Production',
      date: 'April 24, 2026',
      excerpt: 'How to set up comprehensive monitoring and stay on top of your infrastructure health.',
    },
  ]

  return (
    <main>
      <Header />
      <div className="pt-[72px]">
        <section className="py-24 px-6 bg-background">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-space-gray mb-6">Blog</h1>
            <p className="text-xl text-silver-blue mb-12">
              Tips, tutorials, and insights for developers building with HellxStudio.
            </p>

            <div className="space-y-8">
              {posts.map((post, idx) => (
                <article key={idx} className="p-8 border border-silver-blue/20 rounded-lg hover:border-accent-blue transition-colors group cursor-pointer">
                  <div className="flex items-start justify-between mb-4">
                    <h2 className="text-2xl font-bold text-space-gray group-hover:text-accent-blue transition-colors">
                      {post.title}
                    </h2>
                  </div>
                  <p className="text-xs text-silver-blue mb-4">{post.date}</p>
                  <p className="text-silver-blue mb-6">{post.excerpt}</p>
                  <a href="#" className="text-accent-blue font-medium hover:opacity-80">
                    Read article →
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
