import { Menu, Sparkles, Github } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-zinc-900/50 backdrop-blur supports-[backdrop-filter]:bg-zinc-900/40">
          <div className="flex h-14 items-center justify-between px-4 sm:px-6">
            <div className="flex items-center gap-3">
              <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-amber-400 via-orange-500 to-pink-600 shadow-inner" />
              <span className="text-white font-semibold tracking-tight">Deskboard</span>
              <span className="hidden sm:inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-white/70">
                <Sparkles size={14} className="text-amber-400" />
                Turn folders into workspaces
              </span>
            </div>

            <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
              <a href="#features" className="hover:text-white transition-colors">Features</a>
              <a href="#widgets" className="hover:text-white transition-colors">Widgets</a>
              <a href="#themes" className="hover:text-white transition-colors">Themes</a>
              <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white hover:bg-white/10 transition-colors"
              >
                <Github size={16} />
                Star
              </a>
              <button className="md:hidden inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 p-2 text-white hover:bg-white/10">
                <Menu size={18} />
              </button>
              <a
                href="#get-started"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 px-3.5 py-1.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/25 hover:brightness-110 transition"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
