import { motion } from 'framer-motion'
import { StickyNote, Music2, Quote, CalendarDays, ListTodo } from 'lucide-react'

const widgets = [
  { icon: StickyNote, name: 'Notes', color: 'from-amber-400 to-orange-500' },
  { icon: ListTodo, name: 'Todos', color: 'from-emerald-400 to-teal-500' },
  { icon: Music2, name: 'Music', color: 'from-fuchsia-500 to-pink-500' },
  { icon: Quote, name: 'Quotes', color: 'from-sky-400 to-cyan-500' },
  { icon: CalendarDays, name: 'Calendar', color: 'from-violet-400 to-indigo-500' },
]

export default function WidgetsShowcase() {
  return (
    <section id="widgets" className="relative bg-[#0b0b0c] text-white py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_20%_10%,rgba(147,51,234,0.08)_0%,rgba(0,0,0,0)_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Widgets that orbit your work</h2>
          <p className="mt-4 text-white/70">Drop notes, to-dos, music and more right next to your files. Everything stays where you placed it.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {widgets.map((w, idx) => (
            <motion.div
              key={w.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6 backdrop-blur"
            >
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${w.color} text-zinc-900 shadow-inner`}>
                <w.icon />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{w.name}</h3>
              <p className="mt-2 text-sm text-white/70">Beautifully minimal, perfectly integrated.</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
