import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Counters from '@/components/Counters'
import Reveal from '@/components/Reveal'
import { SERVICES } from '@/components/ServiceIcons'
import { Container, SectionHeading, PageHero, Card } from '@/components/ui'
import { DotGrid, DiagonalLines, IndustrialSkyline } from '@/components/IndustrialArt'
import { VISION, MISSION, VALUES, WELCOME, WHY_US, ABOUT, STANDARDS } from '@/data/content'
import { PHONES, ADDRESS, SITE } from '@/lib/site'
import { href, isLocale, t, tx, type Locale } from '@/lib/i18n'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw } = await params
  const locale: Locale = isLocale(raw) ? raw : 'ar'
  return {
    title: t('nav_about', locale),
    description: tx(ABOUT.intro[1], locale),
    alternates: { canonical: `/${locale}/about` },
  }
}

export default async function AboutPage({ params }: Props) {
  const { locale: raw } = await params
  if (!isLocale(raw)) notFound()
  const locale: Locale = raw

  return (
    <>
      <PageHero
        locale={locale}
        title={t('nav_about', locale)}
        sub={t('about_hero_sub', locale)}
        crumb={[{ label: t('nav_about', locale) }]}
      />

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-7">
              <SectionHeading
                eyebrow={t('about_intro_eyebrow', locale)}
                title={t('home_exp_title', locale)}
                align="start"
              />
              <div className="mt-8 space-y-5">
                {ABOUT.intro.map((p) => (
                  <p key={p.en.slice(0, 24)} className="text-[15px] leading-9 text-steel-600">
                    {tx(p, locale)}
                  </p>
                ))}
                {WELCOME.body.map((p) => (
                  <p key={p.en.slice(0, 24)} className="text-[15px] leading-9 text-steel-600">
                    {tx(p, locale)}
                  </p>
                ))}
              </div>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link href={href('/products', locale)} className="btn-ghost">
                  {t('cta_browse_products', locale)}
                </Link>
                <Link href={href('/brochure', locale)} className="btn-ghost">
                  {t('brochure_download_pdf', locale)}
                </Link>
              </div>
            </Reveal>

            <Reveal delay={140} className="lg:col-span-5">
              <div className="sticky top-32 space-y-4">
                <InfoRow label={t('about_info_name', locale)} value={tx(SITE.name, locale)} />
                <InfoRow label={t('about_info_name_en', locale)} value={SITE.nameEn} ltr />
                <InfoRow label={t('about_info_founded', locale)} value={String(SITE.foundedYear)} ltr />
                <InfoRow label={t('about_info_activity', locale)} value={t('about_info_activity_v', locale)} />
                <InfoRow label={t('about_info_hq', locale)} value={tx(ADDRESS.full, locale)} />
                <InfoRow label={t('about_info_scope', locale)} value={t('about_info_scope_v', locale)} />
                <a
                  href={`tel:${PHONES[0].tel}`}
                  className="flex items-center justify-between rounded-sm bg-brand-700 px-6 py-5 text-white transition hover:bg-brand-800"
                >
                  <span>
                    <span className="block text-[12px] text-brand-200">{t('about_direct', locale)}</span>
                    <span className="mt-1 block text-lg font-extrabold" dir="ltr">
                      {PHONES[0].display}
                    </span>
                  </span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="h-6 w-6" aria-hidden>
                    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
                  </svg>
                </a>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-sand-100 py-20 sm:py-28">
        <DotGrid className="absolute inset-0 text-brand-900/[0.045]" />
        <Container className="relative">
          <SectionHeading
            eyebrow={t('about_principles_eyebrow', locale)}
            title={t('about_principles_title', locale)}
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {[VISION, MISSION, VALUES].map((b, i) => (
              <Reveal key={b.title.en} delay={i * 110}>
                <Card className="h-full">
                  <span className="absolute top-6 text-6xl leading-none font-black text-brand-100 end-6">
                    0{i + 1}
                  </span>
                  <h3 className="relative text-xl font-extrabold text-steel-900">{tx(b.title, locale)}</h3>
                  <div className="rule-brand mt-4" />
                  <p className="relative mt-5 text-[14.5px] leading-9 text-steel-600">{tx(b.body, locale)}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow={t('about_scope_eyebrow', locale)}
            title={t('about_scope_title', locale)}
            sub={t('about_scope_sub', locale)}
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s, i) => (
              <Reveal key={s.key} delay={i * 90}>
                <Card className="h-full text-center">
                  <span className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-sm bg-brand-50 text-brand-700 transition-all duration-300 group-hover:bg-brand-700 group-hover:text-white">
                    <s.Icon className="h-9 w-9" />
                  </span>
                  <h3 className="mt-6 text-lg font-extrabold text-steel-900">{tx(s.title, locale)}</h3>
                  <p className="mt-3 text-[14px] leading-8 text-steel-600">{tx(s.body, locale)}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <Counters locale={locale} />

      <section className="relative overflow-hidden bg-steel-950 py-20 sm:py-28">
        <div className="absolute inset-0 bg-linear-to-l from-brand-950/70 via-steel-950 to-steel-950" />
        <DiagonalLines className="absolute inset-0 text-white/[0.025]" />
        <IndustrialSkyline className="pointer-events-none absolute inset-x-0 bottom-0 h-44 w-full text-brand-300/15" />
        <Container className="relative">
          <SectionHeading
            eyebrow={t('about_std_eyebrow', locale)}
            title={tx(ABOUT.experienceTitle, locale)}
            sub={tx(ABOUT.experienceBody, locale)}
            tone="dark"
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-sm bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {STANDARDS.map((s, i) => (
              <Reveal key={s.code} delay={(i % 3) * 90}>
                <div className="h-full bg-steel-950 p-8 transition-colors duration-300 hover:bg-steel-900">
                  <p className="text-xl font-extrabold text-brand-300" dir="ltr">
                    {s.code}
                  </p>
                  <p className="mt-3 text-[14px] leading-8 text-steel-400">{tx(s.body, locale)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow={t('home_why_eyebrow', locale)}
            title={t('home_why_title', locale)}
            sub={t('home_why_sub', locale)}
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_US.map((w, i) => (
              <Reveal key={w.title.en} delay={(i % 3) * 90}>
                <div className="group flex gap-5">
                  <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-brand-200 bg-brand-50 text-[13px] font-black text-brand-700 transition-all duration-300 group-hover:bg-brand-700 group-hover:text-white">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-[16px] font-extrabold text-steel-900">{tx(w.title, locale)}</h3>
                    <p className="mt-2.5 text-[14px] leading-8 text-steel-600">{tx(w.body, locale)}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-3">
            <Link href={href('/contact', locale)} className="btn-primary">
              {t('cta_contact', locale)}
            </Link>
            <Link href={href('/clients', locale)} className="btn-ghost">
              {t('cta_sectors', locale)}
            </Link>
          </div>
        </Container>
      </section>
    </>
  )
}

function InfoRow({ label, value, ltr }: { label: string; value: string; ltr?: boolean }) {
  return (
    <div className="border-brand-200 bg-sand-100 px-6 py-4 transition hover:border-brand-600 border-s-2">
      <p className="text-[12px] font-bold tracking-wide text-brand-700">{label}</p>
      <p
        className={`mt-1.5 text-[14.5px] leading-8 font-semibold text-steel-800 ${ltr ? 'text-left' : ''}`}
        dir={ltr ? 'ltr' : undefined}
      >
        {value}
      </p>
    </div>
  )
}
