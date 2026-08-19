'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'
import { IndustrialSkyline, DotGrid } from './IndustrialArt'
import { href, t, type Locale, type TKey } from '@/lib/i18n'

type Slide = { eyebrow: TKey; title: TKey; body: TKey; img?: string; alt: string }

const SLIDES: Slide[] = [
  {
    eyebrow: 'hero1_eyebrow',
    title: 'hero1_title',
    body: 'hero1_body',
    img: '/images/hero-refinery.jpg',
    alt: 'IMAC engineer at a refinery at sunset',
  },
  {
    eyebrow: 'hero2_eyebrow',
    title: 'hero2_title',
    body: 'hero2_body',
    img: '/images/hero-rig.jpg',
    alt: 'Offshore drilling rig and pump jack at sunset',
  },
  {
    eyebrow: 'hero3_eyebrow',
    title: 'hero3_title',
    body: 'hero3_body',
    alt: '',
  },
]

const DURATION = 7000

export default function HeroSlider({ locale }: { locale: Locale }) {
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
      {/* الصور الخلفية */}
      {SLIDES.map((s, i) =>
        s.img ? (
          <div
            key={s.img}
            aria-hidden={i !== index}
            className={`absolute inset-0 transition-opacity duration-1000 ${i === index ? 'opacity-100' : 'opacity-0'}`}
          >
            <Image
              src={s.img}
              alt={s.alt}
              fill
              priority={i === 0}
              sizes="100vw"
              className="animate-slow-zoom object-cover object-center"
            />
          </div>
        ) : null,
      )}

      {/* التدرّجات فوق الصورة علشان النص يفضل واضح */}
      <div className="absolute inset-0 bg-steel-950/55" />
      <div className="absolute inset-0 bg-linear-to-l from-steel-950/95 via-steel-950/70 to-steel-950/35" />
      <div className="absolute inset-0 bg-linear-to-t from-steel-950 via-steel-950/20 to-steel-950/60" />
      <DotGrid className="absolute inset-0 text-white/[0.05]" />
      <IndustrialSkyline
        className={`pointer-events-none absolute inset-x-0 bottom-0 h-[42vh] w-full text-brand-200/25 transition-opacity duration-1000 ${
          SLIDES[index].img ? 'opacity-0' : 'opacity-100'
        }`}
      />

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
              <span className="eyebrow text-brand-300 before:bg-brand-400">{t(s.eyebrow, locale)}</span>
              <h1 className="mt-6 text-4xl leading-[1.32] font-extrabold tracking-tight whitespace-pre-line text-white drop-shadow-lg sm:text-5xl lg:text-6xl lg:leading-[1.28]">
                {t(s.title, locale)}
              </h1>
              <p className="mt-7 max-w-xl text-[15px] leading-9 text-steel-200 drop-shadow sm:text-lg sm:leading-10">
                {t(s.body, locale)}
              </p>
            </div>
          ))}

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link href={href('/products', locale)} className="btn-primary">
              {t('cta_browse_products', locale)}
            </Link>
            <Link href={href('/contact', locale)} className="btn-outline backdrop-blur-sm">
              {t('cta_quote', locale)}
            </Link>
          </div>

          <div className="mt-14 flex items-center gap-3">
            {SLIDES.map((s, i) => (
              <button
                key={s.eyebrow}
                type="button"
                onClick={() => go(i)}
                aria-label={`${t('hero_slide', locale)} ${i + 1}`}
                aria-current={i === index}
                className="group py-2"
              >
                <span
                  className={`block h-0.5 transition-all duration-500 ${
                    i === index ? 'w-14 bg-brand-400' : 'w-7 bg-white/30 group-hover:bg-white/60'
                  }`}
                />
              </button>
            ))}
            <span className="text-xs font-bold text-steel-400 ms-2" dir="ltr">
              0{index + 1} / 0{SLIDES.length}
            </span>
          </div>
        </div>
      </div>

      <a
        href="#intro"
        aria-label={t('hero_scroll', locale)}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 text-white/50 transition hover:text-brand-300 sm:block"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="h-7 w-7 animate-bounce" aria-hidden>
          <path d="M12 5v14M6 13l6 6 6-6" />
        </svg>
      </a>
    </section>
  )
}
