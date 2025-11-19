import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Timeline from './components/Timeline'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur">
        <div className="container mx-auto px-6 sm:px-10 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-cyan-300 via-fuchsia-400 to-violet-500" />
            <span className="font-semibold tracking-tight">Neon Astral</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-white/80">
            <a href="#world" className="hover:text-white transition">World</a>
            <a href="#pledge" className="hover:text-white transition">Notify Me</a>
            <a href="#" className="inline-flex items-center rounded-lg border border-white/10 px-3 py-1 bg-white/5 hover:bg-white/10 transition">Download Quickstart</a>
          </nav>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <Features />
        <Timeline />
        <CTA />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/60">
        <div className="container mx-auto px-6 sm:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-white/70">
          <p>© {new Date().getFullYear()} Neon Astral. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Press kit</a>
            <a href="#" className="hover:text-white">Contact</a>
            <a href="#" className="hover:text-white">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
