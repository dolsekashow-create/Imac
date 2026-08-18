'use client'

import { useEffect, useRef, useState } from 'react'
import { STATS } from '@/data/content'
import { IndustrialSkyline, DiagonalLines } from './IndustrialArt'

function useCountUp(target: number, run: boolean, ms = 1600) {
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!run) return
    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / ms)
      // تسارع ثم تباطؤ
      const eased = 1 - Math.pow(1 - t, 3)
      setN(Math.round(target * eased))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, run, ms])
  return n
}

function Stat({ value, suffix, label, run }: { value: number; suffix: string; label: string; run: boolean }) {
  const n = useCountUp(value, run)
  return (
    <div className="relative px-4 text-center">
      <div className="flex items-end justify-center gap-1 text-4xl leading-none font-extrabold text-white sm:text-5xl">
        <span dir="ltr" className="tabular-nums">
          {n}
        </span>
        {suffix && <span className="text-brand-400">{suffix}</span>}
      </div>
      <div className="mx-auto mt-4 h-0.5 w-8 bg-brand-500" />
      <p className="mt-4 text-[13.5px] font-semibold text-steel-300">{label}</p>
    </div>
  )
}

export default function Counters() {
  const ref = useRef<HTMLElement>(null)
  const [run, setRun] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') {
      const id = requestAnimationFrame(() => setRun(true))
      return () => cancelAnimationFrame(id)
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setRun(true)
          io.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section ref={ref} className="relative overflow-hidden bg-steel-900 py-20">
      <div className="absolute inset-0 bg-linear-to-l from-brand-950 via-steel-900 to-steel-950" />
      <DiagonalLines className="absolute inset-0 text-white/[0.02]" />
      <IndustrialSkyline className="pointer-events-none absolute inset-x-0 bottom-0 h-44 w-full text-brand-300/15" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-y-12 px-5 sm:px-8 lg:grid-cols-4">
        {STATS.map((s, i) => (
          <div
            key={s.label}
            className={`${i % 2 === 1 ? 'border-r border-white/10' : ''} ${
              i > 0 ? 'lg:border-r lg:border-white/10' : ''
            }`}
          >
            <Stat {...s} run={run} />
          </div>
        ))}
      </div>
    </section>
  )
}
