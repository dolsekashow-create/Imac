import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Reveal from '@/components/Reveal'
import ProductIcon from '@/components/ProductIcons'
import { Container, SectionHeading, PageHero, ArrowIcon } from '@/components/ui'
import { DiagonalLines } from '@/components/IndustrialArt'
import { PRODUCTS, productName } from '@/data/products'
import { CHEMICALS_COUNT } from '@/data/chemicals'
import { PHONES, EMAIL, waMsg } from '@/lib/site'
import { href, isLocale, t, tx, type Locale } from '@/lib/i18n'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw } = await params
  const locale: Locale = isLocale(raw) ? raw : 'ar'
  return {
    title: t('nav_products', locale),
    description:
      locale === 'ar'
        ? 'فئات منتجات إيماك: معدات نقل الكتلة، مواسير ووصلات، فلانشات، أنابيب، محابس، مصائد بخار، أقراص أمان، منتجات صلب، جوانات، خراطيم، أجهزة قياس، كيماويات، وأنظمة تتبّع حراري.'
        : 'IMAC product categories: mass transfer equipment, pipes and fittings, flanges, tubes, valves, steam traps, rupture discs, steel products, sealing products, hoses, instrumentation, chemicals and heat tracing.',
    alternates: { canonical: `/${locale}/products` },
  }
}

export default async function ProductsPage({ params }: Props) {
  const { locale: raw } = await params
  if (!isLocale(raw)) notFound()
  const locale: Locale = raw

  return (
    <>
      <PageHero
        locale={locale}
        title={t('nav_products', locale)}
        sub={`${PRODUCTS.length} ${t('products_hero_sub', locale)}`}
        crumb={[{ label: t('nav_products', locale) }]}
      />

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow={t('products_catalog_eyebrow', locale)}
            title={t('products_catalog_title', locale)}
            sub={t('products_catalog_sub', locale)}
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 80}>
                <Link
                  href={href(`/products/${p.slug}`, locale)}
                  className="group relative flex h-full flex-col overflow-hidden rounded-sm border border-steel-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl hover:shadow-steel-900/[0.07]"
                >
                  <span className="absolute -top-8 h-28 w-28 rounded-full bg-brand-50 transition-transform duration-500 group-hover:scale-[2.6] -start-8" />

                  <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-sm bg-brand-50 text-brand-700 transition-all duration-300 group-hover:bg-brand-700 group-hover:text-white">
                    <ProductIcon name={p.icon} className="h-7 w-7" />
                  </span>

                  <h2 className="relative mt-6 text-[18px] font-extrabold text-steel-900 transition group-hover:text-brand-800">
                    {productName(p, locale)}
                  </h2>
                  {locale === 'ar' && (
                    <p className="relative mt-1.5 text-[12px] font-semibold tracking-wide text-steel-400" dir="ltr">
                      {p.name}
                    </p>
                  )}
                  <p className="relative mt-4 grow text-[13.5px] leading-8 text-steel-600">
                    {tx(p.tagline, locale)}
                  </p>

                  <span className="relative mt-6 flex items-center justify-between border-t border-steel-100 pt-5 text-[13px] font-bold text-brand-700">
                    <span>
                      {p.slug === 'chemicals'
                        ? `${CHEMICALS_COUNT} ${t('products_chem_count', locale)}`
                        : `${p.groups.reduce((n, g) => n + g.items.length, 0)} ${t('products_item_count', locale)}`}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      {t('cta_details', locale)}
                      <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-steel-100 bg-sand-100 py-16">
        <Container>
          <div className="flex flex-col items-center justify-between gap-6 rounded-sm border border-steel-200 bg-white p-9 lg:flex-row">
            <div className="flex items-start gap-5">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-sm bg-brand-50 text-brand-700">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden>
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <path d="M14 2v6h6M12 18v-6M9 15l3 3 3-3" />
                </svg>
              </span>
              <div>
                <h2 className="text-xl font-extrabold text-steel-900">{t('brochure_full', locale)}</h2>
                <p className="mt-2 text-[14px] leading-8 text-steel-600">{t('brochure_sub', locale)}</p>
              </div>
            </div>
            <Link href={href('/brochure', locale)} className="btn-primary shrink-0">
              {t('brochure_open', locale)}
            </Link>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-brand-700 py-16 sm:py-20">
        <DiagonalLines className="absolute inset-0 text-white/[0.06]" />
        <Container className="relative">
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div className="max-w-2xl text-center lg:text-start">
              <h2 className="text-2xl leading-[1.5] font-extrabold text-white sm:text-3xl">
                {t('products_cta_title', locale)}
              </h2>
              <p className="mt-4 text-[15px] leading-8 text-brand-100">{t('products_cta_body', locale)}</p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a href={`tel:${PHONES[0].tel}`} className="btn rounded-sm bg-white px-7 text-brand-800 hover:bg-steel-900 hover:text-white">
                {t('cta_call', locale)}
              </a>
              <a href={waMsg('item', locale)} target="_blank" rel="noopener noreferrer" className="btn-outline">
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
