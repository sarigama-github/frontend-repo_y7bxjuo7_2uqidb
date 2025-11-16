import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ParallaxFeatures from './components/ParallaxFeatures'
import WidgetsShowcase from './components/WidgetsShowcase'
import ThemesSection from './components/ThemesSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0b0b0c]">
      <Navbar />
      <main>
        <Hero />
        <ParallaxFeatures />
        <WidgetsShowcase />
        <ThemesSection />

        {/* CTA */}
        <section id="get-started" className="relative bg-[#0b0b0c] text-white py-24 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_50%_20%,rgba(16,185,129,0.08)_0%,rgba(0,0,0,0)_60%)]" />
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Turn any folder into a space you love</h2>
            <p className="mt-4 text-white/70">Create a workspace in seconds. Decorate it. Organize it. And keep working with your files the way you always have.</p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-emerald-500/25 hover:brightness-110 transition">
                Download for Desktop
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-base font-semibold text-white/90 hover:bg-white/10 transition">
                Explore Features
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
