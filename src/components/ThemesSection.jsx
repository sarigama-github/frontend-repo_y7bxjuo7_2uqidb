import { motion } from 'framer-motion'

const themes = [
  { name: 'Glassy', desc: 'Frosted panels with soft glows', color: 'from-white/30 to-white/10', ring: 'ring-white/30' },
  { name: 'Neon', desc: 'Vibrant lines and cyber glow', color: 'from-emerald-400 to-cyan-400', ring: 'ring-emerald-400/40' },
  { name: 'Scrapbook', desc: 'Playful tape, paper & stickers', color: 'from-amber-300 to-orange-400', ring: 'ring-amber-400/40' },
]

export default function ThemesSection() {
  return (
    <section id="themes" className="relative bg-[#0b0b0c] text-white py-24 sm:py-32 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Pick a vibe, make it yours</h2>
          <p className="mt-4 text-white/70">Switch between aesthetics in one click. Every theme is tuned for focus and delight.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {themes.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/60 p-6 backdrop-blur ring-1 ${t.ring}`}
            >
              <div className={`absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${t.color} blur-2xl opacity-30 group-hover:opacity-50 transition`} />
              <h3 className="text-xl font-semibold">{t.name}</h3>
              <p className="mt-2 text-sm text-white/70">{t.desc}</p>
              <div className="mt-6 flex items-center gap-2 text-xs text-white/60">
                <div className="h-6 w-10 rounded-md bg-white/10" />
                <div className="h-6 w-16 rounded-md bg-white/10" />
                <div className="h-6 w-6 rounded-md bg-white/10" />
                <div className="h-6 w-24 rounded-md bg-white/10" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
