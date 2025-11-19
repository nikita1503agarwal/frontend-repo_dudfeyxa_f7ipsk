import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden bg-black">
      {/* 3D Spline Background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Atmospheric overlays (non-blocking) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/80" />
        <div className="absolute -inset-40 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(56,189,248,0.18),transparent_60%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 sm:px-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: 'easeOut' }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-cyan-200 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              Pre-launch on Kickstarter
            </div>
            <h1 className="mt-5 text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-[0_4px_24px_rgba(34,211,238,0.25)]">
              Shards of the Neon Astral
            </h1>
            <p className="mt-5 text-cyan-100/90 text-base sm:text-lg md:text-xl leading-relaxed">
              A tabletop fantasy saga where cosmic railways weave through trippy galaxies. Forge alliances, ride the luminous paths, and bend reality with liquid-gradient magic.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#pledge" className="group relative inline-flex items-center gap-2 rounded-xl px-6 py-3 text-black font-semibold">
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-violet-500" />
                <span className="relative z-10">Notify me at launch</span>
              </a>
              <a href="#world" className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-white/90 backdrop-blur hover:bg-white/10 transition">
                Explore the world
              </a>
            </div>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-cyan-100/80">
              <Stat value="120+" label="Unique Encounters" />
              <Stat value="36" label="Railway Realms" />
              <Stat value="6" label="Playable Lineages" />
              <Stat value="∞" label="Campaign Paths" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Stat({ value, label }) {
  return (
    <div className="">
      <div className="text-2xl font-bold text-white">{value}</div>
      <div className="text-sm text-cyan-100/70">{label}</div>
    </div>
  )
}
