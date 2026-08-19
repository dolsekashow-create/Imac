import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Counters from '@/components/Counters'
import Reveal from '@/components/Reveal'
import { Container, SectionHeading, PageHero, Card, ArrowIcon } from '@/components/ui'
import { DotGrid, DiagonalLines, IndustrialSkyline } from '@/components/IndustrialArt'
import { SECTORS, CLIENT_PROMISE, CLIENT_LOGOS, COMMITMENTS } from '@/data/content'
import { PHONES, EMAIL, waMsg } from '@/lib/site'
import { href, isLocale, t, tx, type Locale } from '@/lib/i18n'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw } = await params
  const locale: Locale = isLocale(raw) ? raw : 'ar'
  return {
    title: t('nav_clients', locale),
    description: t('clients_hero_sub', locale),
    alternates: { canonical: `/${locale}/clients` },
  }
}

export default async function ClientsPage({ params }: Props) {
  const { locale: raw } = await params
  if (!isLocale(raw)) notFound()
  const locale: Locale = raw

  return (
    <>
      <PageHero
        locale={locale}
        title={t('nav_clients', locale)}
        sub={t('clients_hero_sub', locale)}
        crumb={[{ label: t('nav_clients', locale) }]}
      />

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow={t('clients_sectors_eyebrow', locale)}
            title={t('clients_sectors_title', locale)}
            sub={t('clients_sectors_sub', locale)}
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SECTORS.map((s, i) => (
              <Reveal key={s.title.en} delay={(i % 4) * 80}>
                <Card className="h-full">
                  <span className="text-[13px] font-black text-brand-300">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="mt-4 text-[16.5px] leading-8 font-extrabold text-steel-900">
                    {tx(s.title, locale)}
                  </h3>
                  <p className="mt-3 text-[13.5px] leading-8 text-steel-600">{tx(s.body, locale)}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {CLIENT_LOGOS.length > 0 && (
        <section className="border-y border-steel-100 bg-sand-100 py-20">
          <Container>
            <SectionHeading
              eyebrow={t('clients_logos_eyebrow', locale)}
              title={t('clients_logos_title', locale)}
            />
            <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-sm bg-steel-200 sm:grid-cols-3 lg:grid-cols-5">
              {CLIENT_LOGOS.map((c) => (
                <div key={c.name} className="flex h-32 items-center justify-center bg-white p-6">
                  <Image
                    src={c.logo}
                    alt={c.name}
                    width={220}
                    height={110}
                    className="max-h-16 w-auto object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      <section className="relative overflow-hidden bg-sand-100 py-20 sm:py-28">
        <DotGrid className="absolute inset-0 text-brand-900/[0.045]" />
        <Container className="relative">
          <SectionHeading
            eyebrow={t('clients_how_eyebrow', locale)}
            title={t('clients_how_title', locale)}
            sub={t('clients_how_sub', locale)}
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CLIENT_PROMISE.map((s, i) => (
              <Reveal key={s.step} delay={i * 100}>
                <div className="group relative h-full rounded-sm border border-steel-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl hover:shadow-steel-900/[0.06]">
                  <span className="text-4xl leading-none font-black text-brand-100 transition-colors duration-300 group-hover:text-brand-300">
                    {s.step}
                  </span>
                  <h3 className="mt-5 text-[16.5px] font-extrabold text-steel-900">{tx(s.title, locale)}</h3>
                  <p className="mt-3 text-[13.5px] leading-8 text-steel-600">{tx(s.body, locale)}</p>
                  {i < CLIENT_PROMISE.length - 1 && (
                    <span className="absolute top-1/2 hidden h-6 w-6 -translate-y-1/2 items-center justify-center text-brand-300 lg:flex -end-3">
                      <ArrowIcon className="h-5 w-5" />
                    </span>
                  )}
                </div>
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
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <span className="eyebrow text-brand-300 before:bg-brand-400">
                {t('clients_commit_eyebrow', locale)}
              </span>
              <h2 className="mt-5 text-3xl leading-[1.4] font-extrabold text-white sm:text-4xl">
                {t('clients_commit_title', locale)}
              </h2>
              <div className="rule-brand mt-5" />
              <p className="mt-7 text-[15px] leading-9 text-steel-300">{t('clients_commit_body', locale)}</p>
            </Reveal>

            <Reveal delay={140}>
              <ul className="space-y-4">
                {COMMITMENTS.map((c) => (
                  <li
                    key={c.en.slice(0, 20)}
                    className="flex items-start gap-4 rounded-sm border border-white/10 bg-white/[0.03] p-5 transition hover:border-brand-600/50 hover:bg-white/[0.06]"
                  >
                    <span className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3" aria-hidden>
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    <span className="text-[14px] leading-8 text-steel-300">{tx(c, locale)}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-brand-700 py-16 sm:py-20">
        <DiagonalLines className="absolute inset-0 text-white/[0.06]" />
        <Container className="relative">
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div className="max-w-2xl text-center lg:text-start">
              <h2 className="text-2xl leading-[1.5] font-extrabold text-white sm:text-3xl">
                {t('clients_cta_title', locale)}
              </h2>
              <p className="mt-4 text-[15px] leading-8 text-brand-100">{t('clients_cta_body', locale)}</p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link href={href('/contact', locale)} className="btn rounded-sm bg-white px-7 text-brand-800 hover:bg-steel-900 hover:text-white">
                {t('cta_contact_page', locale)}
              </Link>
              <a href={`tel:${PHONES[0].tel}`} className="btn-outline">
                {t('cta_call', locale)}
              </a>
              <a href={waMsg('vendor', locale)} target="_blank" rel="noopener noreferrer" className="btn-outline">
                {t('cta_whatsapp', locale)}
              </a>
              <a href={`mailto:${EMAIL}`} className="btn-outline">
                {t('cta_email', locale)}
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
