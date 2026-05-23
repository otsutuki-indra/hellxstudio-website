import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function GetStartedPage() {
  return (
    <main>
      <Header />
      <div className="pt-[72px]">
        <section className="min-h-[calc(100vh-72px)] flex items-center justify-center px-6 bg-background">
          <div className="w-full max-w-md">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-space-gray mb-3">Get Started</h1>
              <p className="text-silver-blue">
                Create your free HellxStudio account today
              </p>
            </div>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-space-gray mb-2">
                  Full Name
                </label>
                <Input
                  type="text"
                  placeholder="John Doe"
                  className="w-full h-10 px-4 border border-silver-blue/30 rounded-lg focus:border-accent-blue focus:ring-1 focus:ring-accent-blue"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-space-gray mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full h-10 px-4 border border-silver-blue/30 rounded-lg focus:border-accent-blue focus:ring-1 focus:ring-accent-blue"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-space-gray mb-2">
                  Company
                </label>
                <Input
                  type="text"
                  placeholder="Your Company"
                  className="w-full h-10 px-4 border border-silver-blue/30 rounded-lg focus:border-accent-blue focus:ring-1 focus:ring-accent-blue"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-space-gray mb-2">
                  Password
                </label>
                <Input
                  type="password"
                  placeholder="••••••••"
                  className="w-full h-10 px-4 border border-silver-blue/30 rounded-lg focus:border-accent-blue focus:ring-1 focus:ring-accent-blue"
                />
              </div>

              <div className="flex items-start gap-2 text-xs">
                <input type="checkbox" className="rounded mt-0.5" />
                <span className="text-silver-blue">
                  I agree to the{' '}
                  <a href="#" className="text-accent-blue hover:opacity-80">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-accent-blue hover:opacity-80">
                    Privacy Policy
                  </a>
                </span>
              </div>

              <Button className="w-full h-10 bg-accent-blue hover:brightness-110 text-white font-bold rounded-lg mt-6">
                Create Account
              </Button>
            </form>

            <p className="text-center text-sm text-silver-blue mt-8">
              Already have an account?{' '}
              <a href="/signin" className="text-accent-blue hover:opacity-80 font-medium">
                Sign in
              </a>
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
