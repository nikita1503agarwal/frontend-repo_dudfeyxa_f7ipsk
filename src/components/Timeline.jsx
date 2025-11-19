import React from 'react'

const steps = [
  { m: 'Jan', t: 'Worldbuilding Reveal', d: 'Art drops, setting overview, and early mechanics.' },
  { m: 'Feb', t: 'Closed Playtest', d: 'Invite-only sessions to tune flow and balance.' },
  { m: 'Mar', t: 'Open Playtest', d: 'Download the quickstart PDF and jump in.' },
  { m: 'Apr', t: 'Kickstarter Launch', d: 'Core book, accessories, and stretch goals.' },
]

export default function Timeline() {
  return (
    <section className="relative py-20 bg-slate-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(80%_60%_at_50%_0%,rgba(168,85,247,0.12),transparent_60%)]" />
      <div className="relative container mx-auto px-6 sm:px-10">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">Road to launch</h2>
          <p className="mt-4 text-cyan-100/80 text-lg">Follow the milestones and be first to ride the Astral rails.</p>
        </div>
        <div className="mt-12 relative">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/50 via-fuchsia-400/30 to-violet-500/50" />
          <div className="space-y-10">
            {steps.map((s, i) => (
              <div key={i} className="relative grid sm:grid-cols-2 gap-6 items-center">
                <div className="sm:col-start-1 sm:text-right pr-10">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/80">{s.m}</div>
                </div>
                <div className="sm:col-start-2 pl-10">
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6 text-white/90">
                    <div className="text-lg font-semibold">{s.t}</div>
                    <div className="text-cyan-100/80 mt-1">{s.d}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
