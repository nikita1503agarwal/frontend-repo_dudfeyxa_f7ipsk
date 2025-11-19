import React from 'react'
import { Sparkles, ScrollText, Sword, Bot, Rocket, Map } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'Liquid-Gradient Magic',
    desc: 'Channel prismatic energies to warp time, sculpt sound, and thread fate along cosmic rails.'
  },
  {
    icon: Map,
    title: 'Railway Realms',
    desc: 'Ride neon-coil tracks to floating archipelagos, void bazaars, and singing asteroid groves.'
  },
  {
    icon: Sword,
    title: 'Tactical Cinematics',
    desc: 'Rules focus on vivid moments, combo abilities, and fast, collaborative storytelling.'
  },
  {
    icon: ScrollText,
    title: 'Rich Lore Tome',
    desc: '200+ pages of factions, relics, and modular arcs for one-shots or sweeping campaigns.'
  },
  {
    icon: Bot,
    title: 'AI-Assisted Tools',
    desc: 'Optional digital companion for NPC prompts, scene seeds, and procedural curiosities.'
  },
  {
    icon: Rocket,
    title: 'Kickstarter Exclusives',
    desc: 'Holographic covers, enamel pins, GM screen, and limited “Astral Shard” dice.'
  }
]

export default function Features() {
  return (
    <section id="world" className="relative py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_60%_at_50%_0%,rgba(56,189,248,0.12),transparent_60%)]" />
      <div className="relative container mx-auto px-6 sm:px-10">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">What makes it unforgettable</h2>
          <p className="mt-4 text-cyan-100/80 text-lg">Designed for immersion, approachability, and wild imagination—at the table or online.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl border border-cyan-400/20 bg-white/[0.03] p-6 backdrop-blur hover:border-cyan-400/40 transition">
              <div className="absolute -inset-1 bg-gradient-to-br from-cyan-400/0 via-fuchsia-400/0 to-violet-500/0 group-hover:from-cyan-400/10 group-hover:to-violet-500/10 rounded-2xl" />
              <div className="relative">
                <f.icon className="h-8 w-8 text-cyan-300" />
                <h3 className="mt-4 text-xl font-semibold text-white">{f.title}</h3>
                <p className="mt-2 text-cyan-100/80">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
