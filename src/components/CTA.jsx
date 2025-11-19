import React from 'react'

export default function CTA() {
  return (
    <section id="pledge" className="relative py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-black">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_60%_at_50%_0%,rgba(34,211,238,0.1),transparent_60%)]" />
      <div className="relative container mx-auto px-6 sm:px-10">
        <div className="max-w-3xl text-center mx-auto">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">Be first on the rails</h2>
          <p className="mt-4 text-cyan-100/80 text-lg">Join the pre-launch list and get the quickstart PDF, wallpapers, and early-bird rewards.</p>
        </div>
        <form className="mt-10 mx-auto max-w-xl">
          <div className="flex flex-col sm:flex-row gap-3">
            <input type="email" placeholder="Enter your email" className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/50" required />
            <button type="submit" className="relative inline-flex justify-center rounded-xl px-6 py-3 font-semibold text-black">
              <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-violet-500" />
              <span className="relative">Get notified</span>
            </button>
          </div>
          <p className="mt-3 text-sm text-cyan-100/70">No spam. Unsubscribe anytime.</p>
        </form>
      </div>
    </section>
  )
}
