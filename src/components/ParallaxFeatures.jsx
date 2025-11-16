import { motion, useScroll, useTransform } from 'framer-motion'
import { FolderGit2, StickyNote, Music2, CalendarDays, Quote, BadgeCheck, Wand2, Link2 } from 'lucide-react'

const features = [
  {
    icon: FolderGit2,
    title: 'Boards from folders',
    desc: 'Open any folder as a board and arrange files exactly how you think. Clicking still opens them normally.',
  },
  {
    icon: StickyNote,
    title: 'Inline notes',
    desc: 'Drop quick notes right beside your files to capture ideas, todos and context.',
  },
  {
    icon: Music2,
    title: 'Built-in player',
    desc: 'Play your focus playlists without leaving your workspace.',
  },
  {
    icon: CalendarDays,
    title: 'Calendar & reminders',
    desc: 'Keep dates in view and plan your week around the work on your board.',
  },
  {
    icon: Quote,
    title: 'Daily quotes',
    desc: 'A little spark of motivation each time you open a workspace.',
  },
  {
    icon: BadgeCheck,
    title: 'Todo lists',
    desc: 'Lightweight tasks that stay next to the files that matter.',
  },
  {
    icon: Wand2,
    title: 'Themes & vibes',
    desc: 'Glassy, neon or scrapbook — switch moods in one click.',
  },
  {
    icon: Link2,
    title: 'Always in sync',
    desc: 'Everything mirrors your real files. No imports. No lock-in.',
  },
]

export default function ParallaxFeatures() {
  const { scrollYProgress } = useScroll()
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -80])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -140])

  return (
    <section id="features" className="relative bg-[#0b0b0c] text-white py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_10%_20%,rgba(16,185,129,0.08)_0%,rgba(0,0,0,0)_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(30%_30%_at_90%_20%,rgba(249,115,22,0.08)_0%,rgba(0,0,0,0)_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">A flexible board that feels like magic</h2>
          <p className="mt-4 text-white/70">Arrange, annotate and vibe — all while staying perfectly connected to your actual files and folders.</p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.slice(0, 4).map((f, i) => (
            <motion.div key={f.title} style={{ y: i % 2 === 0 ? y1 : y2 }} className="rounded-2xl border border-white/10 bg-zinc-900/50 p-5 backdrop-blur">
              <f.icon className="text-emerald-400" />
              <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.slice(4).map((f, i) => (
            <motion.div key={f.title} style={{ y: i % 2 === 0 ? y2 : y1 }} className="rounded-2xl border border-white/10 bg-zinc-900/50 p-5 backdrop-blur">
              <f.icon className="text-orange-400" />
              <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
