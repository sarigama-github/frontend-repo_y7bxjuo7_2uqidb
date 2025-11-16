import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#0b0b0c]">
      {/* Spline Cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/S4k-6fqjuV5AuVZe/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(16,185,129,0.12)_0%,rgba(0,0,0,0)_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_40%_at_80%_30%,rgba(234,88,12,0.12)_0%,rgba(0,0,0,0)_60%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0b0b0c]/30 to-[#0b0b0c]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-40 pb-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mx-auto max-w-4xl text-balance bg-gradient-to-br from-white via-white to-white/70 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl"
        >
          Your folders, reimagined as beautiful workspaces
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          className="mx-auto mt-6 max-w-2xl text-lg text-white/70"
        >
          Open any folder as a flexible board. Arrange files, add notes, stick widgets, and theme it your way — all in perfect sync with your actual files and folders.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#get-started" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-emerald-500/25 hover:brightness-110 transition">
            Try Deskboard Free
          </a>
          <a href="#features" className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-base font-semibold text-white/90 hover:bg-white/10 transition">
            See how it works
          </a>
        </motion.div>

        {/* Floating badges */}
        <div className="pointer-events-none relative isolate mt-16 flex justify-center">
          <div className="absolute -inset-x-10 -top-6 blur-3xl">
            <div className="mx-auto h-40 w-[40rem] bg-gradient-to-r from-emerald-500/10 via-orange-500/10 to-fuchsia-500/10" />
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              'Glassy',
              'Neon',
              'Scrapbook',
              'Minimal',
            ].map((t) => (
              <div key={t} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70">
                Theme: {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
