import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function SignInPage() {
  return (
    <main>
      <Header />
      <div className="pt-[72px]">
        <section className="min-h-[calc(100vh-72px)] flex items-center justify-center px-6 bg-background">
          <div className="w-full max-w-md">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-space-gray mb-3">Sign In</h1>
              <p className="text-silver-blue">
                Access your HellxStudio dashboard
              </p>
            </div>

            <form className="space-y-4">
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
                  Password
                </label>
                <Input
                  type="password"
                  placeholder="••••••••"
                  className="w-full h-10 px-4 border border-silver-blue/30 rounded-lg focus:border-accent-blue focus:ring-1 focus:ring-accent-blue"
                />
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-space-gray">Remember me</span>
                </label>
                <a href="#" className="text-accent-blue hover:opacity-80">
                  Forgot password?
                </a>
              </div>

              <Button className="w-full h-10 bg-accent-blue hover:brightness-110 text-white font-bold rounded-lg mt-6">
                Sign In
              </Button>
            </form>

            <p className="text-center text-sm text-silver-blue mt-8">
              Don&apos;t have an account?{' '}
              <a href="/get-started" className="text-accent-blue hover:opacity-80 font-medium">
                Sign up
              </a>
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
