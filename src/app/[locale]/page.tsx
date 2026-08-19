import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import HeroSlider from '@/components/HeroSlider'
import Counters from '@/components/Counters'
import Reveal from '@/components/Reveal'
import ProductIcon from '@/components/ProductIcons'
import { SERVICES } from '@/components/ServiceIcons'
import { Container, SectionHeading, Card, ArrowIcon } from '@/components/ui'
import { DotGrid, DiagonalLines, IndustrialSkyline } from '@/components/IndustrialArt'
import { PRODUCTS, productName } from '@/data/products'
import { VISION, MISSION, VALUES, WELCOME, WHY_US, ABOUT } from '@/data/content'
import { PHONES, EMAIL, waMsg } from '@/lib/site'
import { href, isLocale, t, tx, type Locale } from '@/lib/i18n'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return { alternates: { canonical: `/${locale}` } }
}

export default async function HomePage({ params }: Props) {
  const { locale: raw } = await params
  if (!isLocale(raw)) notFound()
  const locale: Locale = raw

  return (
    <>
      <HeroSlider locale={locale} />

      {/* الخدمات الأربعة — نفس اللي تحت اللوجو */}
      <section id="intro" className="relative -mt-px border-b border-steel-100 bg-white py-16 sm:py-20">
        <Container>
          <div className="grid gap-px overflow-hidden rounded-sm bg-steel-100 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s, i) => (
              <Reveal key={s.key} delay={i * 90}>
                <div className="group h-full bg-white p-8 transition-colors duration-300 hover:bg-sand-100">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-sm bg-brand-50 text-brand-700 transition-all duration-300 group-hover:bg-brand-700 group-hover:text-white">
                    <s.Icon className="h-8 w-8" />
                  </span>
                  <h3 className="mt-6 text-lg font-extrabold text-steel-900">{tx(s.title, locale)}</h3>
                  <p className="mt-3 text-[14px] leading-8 text-steel-600">{tx(s.body, locale)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* الرؤية والرسالة والقيم */}
      <section className="relative overflow-hidden bg-sand-100 py-20 sm:py-28">
        <DotGrid className="absolute inset-0 text-brand-900/[0.045]" />
        <Container className="relative">
          <SectionHeading
            eyebrow={t('home_about_eyebrow', locale)}
            title={t('home_about_title', locale)}
            sub={t('home_about_sub', locale)}
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {[VISION, MISSION, VALUES].map((b, i) => (
              <Reveal key={b.title.en} delay={i * 110}>
                <Card className="h-full">
                  <span className="absolute top-6 text-6xl leading-none font-black text-brand-100 transition-colors duration-300 group-hover:text-brand-200 end-6">
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

      {/* كلمة ترحيب */}
      <section className="bg-white py-20 sm:py-28">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <SectionHeading
                eyebrow={tx(WELCOME.title, locale)}
                title={tx(WELCOME.title, locale)}
                align="start"
              />
              <div className="mt-7 space-y-5">
                {WELCOME.body.map((p) => (
                  <p key={p.en.slice(0, 24)} className="text-[15px] leading-9 text-steel-600">
                    {tx(p, locale)}
                  </p>
                ))}
              </div>
              <p className="mt-8 border-brand-600 text-[14px] font-bold text-steel-800 border-s-2 ps-4">
                {tx(WELCOME.signature, locale)}
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link href={href('/about', locale)} className="btn-ghost">
                  {t('cta_learn_more', locale)}
                </Link>
                <Link href={href('/brochure', locale)} className="btn-ghost">
                  {t('brochure_download_pdf', locale)}
                </Link>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="relative">
                <div className="relative overflow-hidden rounded-sm bg-steel-950 p-10 pt-16">
                  <div className="absolute inset-0 bg-linear-to-br from-steel-950 via-steel-900 to-brand-950" />
                  <DiagonalLines className="absolute inset-0 text-white/[0.03]" />
                  <IndustrialSkyline className="absolute inset-x-0 bottom-0 h-56 w-full text-brand-200/25" />
                  <div className="relative">
                    <p className="text-[13px] font-bold tracking-[0.22em] text-brand-300">
                      {t('panel_est', locale)}
                    </p>
                    <p className="mt-5 text-3xl leading-[1.5] font-extrabold whitespace-pre-line text-white">
                      {t('panel_line', locale)}
                      <br />
                      <span className="text-brand-300">{t('panel_line_accent', locale)}</span>
                    </p>
                    <div className="mt-40 grid grid-cols-2 gap-4 border-t border-white/10 pt-7 text-white">
                      <div>
                        <p className="text-xs text-steel-400">{t('panel_standards', locale)}</p>
                        <p className="mt-1 text-lg font-extrabold" dir="ltr">
                          ASTM · API · DIN · EN
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-steel-400">{t('panel_certs', locale)}</p>
                        <p className="mt-1 text-lg font-extrabold" dir="ltr">
                          MTC · EN 10204 3.1
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <span className="absolute -top-4 -z-10 h-24 w-24 border-t-2 border-brand-500/60 -end-4 border-e-2" />
                <span className="absolute -bottom-4 -z-10 h-24 w-24 border-b-2 border-brand-500/60 -start-4 border-s-2" />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <Counters locale={locale} />

      {/* المنتجات */}
      <section className="relative bg-sand-100 py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow={t('home_products_eyebrow', locale)}
            title={t('home_products_title', locale)}
            sub={t('home_products_sub', locale)}
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-sm bg-steel-200 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 80}>
                <Link
                  href={href(`/products/${p.slug}`, locale)}
                  className="group relative flex h-full flex-col bg-white p-8 transition-colors duration-300"
                >
                  <span className="absolute inset-y-0 w-0.5 origin-bottom scale-y-0 bg-brand-700 transition-transform duration-300 group-hover:scale-y-100 start-0" />
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-sm bg-brand-50 text-brand-700 transition-all duration-300 group-hover:bg-brand-700 group-hover:text-white">
                    <ProductIcon name={p.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 text-[17px] font-extrabold text-steel-900 transition group-hover:text-brand-800">
                    {productName(p, locale)}
                  </h3>
                  {locale === 'ar' && (
                    <p className="mt-1.5 text-[12px] font-semibold tracking-wide text-steel-400" dir="ltr">
                      {p.name}
                    </p>
                  )}
                  <p className="mt-4 grow text-[13.5px] leading-8 text-steel-600">{tx(p.tagline, locale)}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[13px] font-bold text-brand-700">
                    {t('cta_details_specs', locale)}
                    <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* لماذا إيماك */}
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
        </Container>
      </section>

      {/* عن الشركة */}
      <section className="relative overflow-hidden bg-steel-950 py-20 sm:py-28">
        <div className="absolute inset-0 bg-linear-to-l from-brand-950/70 via-steel-950 to-steel-950" />
        <DotGrid className="absolute inset-0 text-white/[0.05]" />
        <Container className="relative">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <span className="eyebrow text-brand-300 before:bg-brand-400">{t('home_exp_eyebrow', locale)}</span>
              <h2 className="mt-5 text-3xl leading-[1.4] font-extrabold text-white sm:text-4xl">
                {t('home_exp_title', locale)}
              </h2>
              <div className="rule-brand mt-5" />
              <div className="mt-7 space-y-5">
                {ABOUT.intro.map((p) => (
                  <p key={p.en.slice(0, 24)} className="text-[15px] leading-9 text-steel-300">
                    {tx(p, locale)}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="rounded-sm border border-white/10 bg-white/[0.03] p-9">
                <h3 className="text-2xl leading-[1.5] font-extrabold text-white">
                  {tx(ABOUT.experienceTitle, locale)}
                </h3>
                <div className="rule-brand mt-5" />
                <p className="mt-6 text-[15px] leading-9 text-steel-300">{tx(ABOUT.experienceBody, locale)}</p>
                <div className="mt-9 grid grid-cols-2 gap-5">
                  {['ASTM', 'API 5L', 'DIN', 'EN 10216'].map((std) => (
                    <div
                      key={std}
                      className="rounded-sm border border-white/10 px-4 py-3.5 text-center text-[13px] font-extrabold tracking-wide text-brand-200"
                      dir="ltr"
                    >
                      {std}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* دعوة للتواصل */}
      <section className="relative overflow-hidden bg-brand-700 py-16 sm:py-20">
        <DiagonalLines className="absolute inset-0 text-white/[0.06]" />
        <Container className="relative">
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div className="max-w-2xl text-center lg:text-start">
              <h2 className="text-2xl leading-[1.5] font-extrabold text-white sm:text-3xl">
                {t('home_cta_title', locale)}
              </h2>
              <p className="mt-4 text-[15px] leading-8 text-brand-100">{t('home_cta_body', locale)}</p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a href={`tel:${PHONES[0].tel}`} className="btn rounded-sm bg-white px-7 text-brand-800 hover:bg-steel-900 hover:text-white">
                {t('cta_call', locale)}
              </a>
              <a href={waMsg('quote', locale)} target="_blank" rel="noopener noreferrer" className="btn-outline">
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
