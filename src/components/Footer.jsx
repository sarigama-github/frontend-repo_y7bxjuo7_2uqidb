export default function Footer() {
  return (
    <footer className="bg-[#0b0b0c] text-white/60 py-12 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm">© {new Date().getFullYear()} Deskboard. All rights reserved.</p>
        <nav className="flex items-center gap-6 text-sm">
          <a href="#features" className="hover:text-white/90 transition">Features</a>
          <a href="#widgets" className="hover:text-white/90 transition">Widgets</a>
          <a href="#themes" className="hover:text-white/90 transition">Themes</a>
          <a href="#faq" className="hover:text-white/90 transition">FAQ</a>
        </nav>
      </div>
    </footer>
  )
}
