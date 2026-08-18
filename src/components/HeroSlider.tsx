'use client'

import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'
import { IndustrialSkyline, DotGrid } from './IndustrialArt'
import { PHONES } from '@/lib/site'

const SLIDES = [
  {
    eyebrow: 'إيماك للإستيراد والتصدير والتوريدات',
    title: 'خدمات بترولية متكاملة\nمن مصدر واحد موثوق',
    body: 'نورّد مستلزمات ومعدات وقطع غيار صناعة البترول والغاز والبتروكيماويات بمواصفات عالمية ومن مصادر منشأ معتمدة.',
  },
  {
    eyebrow: 'جودة مطابقة للمواصفات',
    title: 'ASTM · API · DIN · EN\nمع شهادات المنشأ والاختبار',
    body: 'كل صنف يُورَّد بمواصفته المحددة ومعه شهادة المنشأ وتقرير الاختبار المعتمد لكل شحنة.',
  },
  {
    eyebrow: 'أفضل الخدمات لأفضل العملاء',
    title: 'من دراسة المواصفة\nحتى التسليم في الموقع',
    body: 'ندير دورة التوريد كاملة — العرض الفني، أمر الشراء، الاستيراد والتخليص، ثم التسليم في موعده.',
  },
]

const DURATION = 6500

export default function HeroSlider() {
  const [index, setIndex] = useState(0)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const go = useCallback((i: number) => setIndex(((i % SLIDES.length) + SLIDES.length) % SLIDES.length), [])

  useEffect(() => {
    timer.current = setTimeout(() => go(index + 1), DURATION)
    return () => {
      if (timer.current) clearTimeout(timer.current)
    }
  }, [index, go])

  return (
    <section className="relative flex min-h-[88vh] items-center overflow-hidden bg-steel-950 pt-32 pb-24 sm:min-h-screen">
      {/* الخلفية */}
      <div className="absolute inset-0 bg-linear-to-bl from-steel-950 via-steel-900 to-brand-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_15%,rgba(163,113,75,0.28),transparent_60%)]" />
      <DotGrid className="absolute inset-0 text-white/[0.06]" />
      <IndustrialSkyline className="animate-slow-zoom pointer-events-none absolute inset-x-0 bottom-0 h-[46vh] w-full origin-bottom text-brand-200/30" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-steel-950 via-steel-950/70 to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          {SLIDES.map((s, i) => (
            <div
              key={s.eyebrow}
              className={`transition-all duration-700 ${
                i === index
                  ? 'translate-y-0 opacity-100'
                  : 'pointer-events-none absolute inset-x-5 top-0 translate-y-6 opacity-0 sm:inset-x-8'
              }`}
              aria-hidden={i !== index}
            >
              <span className="eyebrow text-brand-300 before:bg-brand-400">{s.eyebrow}</span>
              <h1 className="mt-6 text-4xl leading-[1.32] font-extrabold tracking-tight whitespace-pre-line text-white sm:text-5xl lg:text-6xl lg:leading-[1.28]">
                {s.title}
              </h1>
              <p className="mt-7 max-w-xl text-[15px] leading-9 text-steel-300 sm:text-lg sm:leading-10">
                {s.body}
              </p>
            </div>
          ))}

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link href="/products" className="btn-primary">
              تصفّح المنتجات
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden>
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </Link>
            <a href={`tel:${PHONES[0].tel}`} className="btn-outline">
              اطلب عرض سعر
            </a>
          </div>

          {/* مؤشرات الشرائح */}
          <div className="mt-14 flex items-center gap-3">
            {SLIDES.map((s, i) => (
              <button
                key={s.eyebrow}
                type="button"
                onClick={() => go(i)}
                aria-label={`الشريحة ${i + 1}`}
                aria-current={i === index}
                className="group py-2"
              >
                <span
                  className={`block h-0.5 transition-all duration-500 ${
                    i === index ? 'w-14 bg-brand-400' : 'w-7 bg-white/25 group-hover:bg-white/50'
                  }`}
                />
              </button>
            ))}
            <span className="mr-2 text-xs font-bold text-steel-500" dir="ltr">
              0{index + 1} / 0{SLIDES.length}
            </span>
          </div>
        </div>
      </div>

      {/* سهم لأسفل */}
      <a
        href="#intro"
        aria-label="انتقل للأسفل"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 text-white/40 transition hover:text-brand-300 sm:block"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="h-7 w-7 animate-bounce" aria-hidden>
          <path d="M12 5v14M6 13l6 6 6-6" />
        </svg>
      </a>
    </section>
  )
}
