import Image from 'next/image'
import Link from 'next/link'
import { IndustrialSkyline, DotGrid } from './IndustrialArt'
import { href, t, type Locale } from '@/lib/i18n'

export function Container({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return <div className={`mx-auto w-full max-w-7xl px-5 sm:px-8 ${className}`}>{children}</div>
}

export function SectionHeading({
  eyebrow,
  title,
  sub,
  align = 'center',
  tone = 'light',
}: {
  eyebrow?: string
  title: string
  sub?: string
  align?: 'center' | 'start'
  tone?: 'light' | 'dark'
}) {
  const isCenter = align === 'center'
  return (
    <div className={isCenter ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow && (
        <span
          className={`eyebrow ${isCenter ? 'justify-center' : ''} ${
            tone === 'dark' ? 'text-brand-300 before:bg-brand-400' : ''
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-4 text-3xl leading-[1.35] font-extrabold tracking-tight sm:text-4xl ${
          tone === 'dark' ? 'text-white' : 'text-steel-900'
        }`}
      >
        {title}
      </h2>
      <div className={`rule-brand mt-5 ${isCenter ? 'mx-auto' : ''}`} />
      {sub && (
        <p
          className={`mt-5 text-[15px] leading-8 sm:text-base ${
            tone === 'dark' ? 'text-steel-300' : 'text-steel-600'
          }`}
        >
          {sub}
        </p>
      )}
    </div>
  )
}

/** صور البانر المتاحة للصفحات الداخلية */
export const HERO_IMAGES = {
  refinery: '/images/hero-refinery.jpg',
  rig: '/images/hero-rig.jpg',
} as const

/** بانر أعلى الصفحات الداخلية — بنفس صور الهيرو بتاعة الرئيسية */
export function PageHero({
  locale,
  title,
  sub,
  crumb,
  image = HERO_IMAGES.refinery,
}: {
  locale: Locale
  title: string
  sub?: string
  crumb?: { label: string; path?: string }[]
  image?: string
}) {
  return (
    <section className="relative overflow-hidden bg-steel-900 pt-36 pb-20 sm:pt-44 sm:pb-24">
      {/* الصورة الخلفية */}
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* طبقات التعتيم علشان النص يفضل واضح */}
      <div className="absolute inset-0 bg-steel-950/65" />
      <div className="absolute inset-0 bg-linear-to-l from-steel-950/95 via-steel-950/75 to-steel-950/45" />
      <DotGrid className="absolute inset-0 text-white/[0.05]" />
      <IndustrialSkyline className="pointer-events-none absolute inset-x-0 bottom-0 h-52 w-full text-brand-200/20 sm:h-64" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-steel-950 via-steel-950/70 to-transparent" />

      <Container className="relative">
        {crumb && (
          <nav className="mb-5 flex flex-wrap items-center gap-2 text-xs text-steel-400">
            <Link href={href('/', locale)} className="transition hover:text-brand-300">
              {t('breadcrumb_home', locale)}
            </Link>
            {crumb.map((c) => (
              <span key={c.label} className="flex items-center gap-2">
                <span className="text-steel-600">/</span>
                {c.path ? (
                  <Link href={href(c.path, locale)} className="transition hover:text-brand-300">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-brand-300">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <h1 className="max-w-4xl text-4xl leading-[1.3] font-extrabold tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
        <div className="rule-brand mt-6" />
        {sub && <p className="mt-6 max-w-2xl text-[15px] leading-8 text-steel-300 sm:text-base">{sub}</p>}
      </Container>
    </section>
  )
}

/** بطاقة بسيطة */
export function Card({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={`group relative rounded-sm border border-steel-200/80 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl hover:shadow-steel-900/[0.07] ${className}`}
    >
      {children}
    </div>
  )
}

/** سهم يشاور في اتجاه القراءة (يتقلب تلقائياً في RTL) */
export function ArrowIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${className} rtl:-scale-x-100`}
      aria-hidden
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}
