import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Reveal from '@/components/Reveal'
import ProductThumb, { ProductThumbMini } from '@/components/ProductThumb'
import ChemicalsList from '@/components/ChemicalsList'
import { Container, PageHero } from '@/components/ui'
import { PRODUCTS, getProduct, productName } from '@/data/products'
import { PHONES, EMAIL, whatsappLink, quoteMailto } from '@/lib/site'
import { LOCALES, href, isLocale, t, tx, type Locale } from '@/lib/i18n'

type Props = { params: Promise<{ locale: string; slug: string }> }

export function generateStaticParams() {
  return LOCALES.flatMap((locale) => PRODUCTS.map((p) => ({ locale, slug: p.slug })))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw, slug } = await params
  const locale: Locale = isLocale(raw) ? raw : 'ar'
  const p = getProduct(slug)
  if (!p) return { title: '404' }
  return {
    title: productName(p, locale),
    description: `${p.name} — ${tx(p.tagline, locale)}. ${tx(p.intro, locale).slice(0, 120)}`,
    alternates: { canonical: `/${locale}/products/${p.slug}` },
    openGraph: { title: productName(p, locale), description: tx(p.tagline, locale) },
  }
}

export default async function ProductPage({ params }: Props) {
  const { locale: raw, slug } = await params
  if (!isLocale(raw)) notFound()
  const locale: Locale = raw

  const product = getProduct(slug)
  if (!product) notFound()

  const others = PRODUCTS.filter((p) => p.slug !== product.slug)
  const name = productName(product, locale)

  return (
    <>
      <PageHero
        locale={locale}
        title={name}
        sub={tx(product.tagline, locale)}
        crumb={[{ label: t('nav_products', locale), path: '/products' }, { label: name }]}
      />

      <section className="bg-white py-16 sm:py-24">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <Reveal>
                <div className="border-b border-steel-100 pb-9">
                  {/* صورة المنتج من البروشور */}
                  <ProductThumb
                    product={product}
                    locale={locale}
                    zoom={false}
                    sizes="(max-width: 1024px) 100vw, 660px"
                    className="aspect-[16/9] rounded-sm border border-steel-200"
                  />
                  <p className="mt-7 text-[13px] font-bold tracking-wide text-brand-700" dir="ltr">
                    {product.name}
                  </p>
                  <p className="mt-3 text-[15px] leading-9 text-steel-600">{tx(product.intro, locale)}</p>
                </div>
              </Reveal>

              {product.specs && (
                <Reveal delay={80}>
                  <div className="mt-9 grid gap-px overflow-hidden rounded-sm bg-steel-200 sm:grid-cols-3">
                    {product.specs.map((s) => (
                      <div key={s.label.en} className="bg-sand-100 p-6">
                        <p className="text-[12px] font-bold tracking-wide text-brand-700">{tx(s.label, locale)}</p>
                        <p className="mt-2 text-[14.5px] leading-8 font-extrabold text-steel-900">
                          {tx(s.value, locale)}
                        </p>
                      </div>
                    ))}
                  </div>
                </Reveal>
              )}

              {product.slug === 'chemicals' && (
                <div className="mt-12">
                  <ChemicalsList locale={locale} />
                </div>
              )}

              {product.groups.length > 0 && (
                <div className="mt-12 space-y-10">
                  {product.groups.map((g, gi) => (
                    <Reveal key={g.title.en} delay={gi * 70}>
                      <div>
                        <h2 className="text-xl font-extrabold text-steel-900">{tx(g.title, locale)}</h2>
                        <div className="rule-brand mt-4" />
                        {g.note && (
                          <p className="mt-5 text-[14.5px] leading-9 text-steel-600">{tx(g.note, locale)}</p>
                        )}
                        <ul className="mt-6 grid gap-x-6 gap-y-1 sm:grid-cols-2">
                          {g.items.map((it) => (
                            <li
                              key={it}
                              className="flex items-start gap-3 border-b border-steel-100 py-3 text-[13.5px] leading-7 text-steel-700"
                            >
                              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-brand-500" />
                              <span dir="auto">{it}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Reveal>
                  ))}
                </div>
              )}

              {product.features && (
                <div className="mt-14">
                  <Reveal>
                    <h2 className="text-xl font-extrabold text-steel-900">{t('products_types_detail', locale)}</h2>
                    <div className="rule-brand mt-4" />
                  </Reveal>
                  <div className="mt-8 space-y-5">
                    {product.features.map((f, i) => (
                      <Reveal key={f.title.en} delay={i * 70}>
                        <div className="group rounded-sm border-brand-200 bg-sand-100 p-7 transition hover:border-brand-600 hover:bg-sand-50 border-s-2">
                          <h3 className="text-[16px] font-extrabold text-steel-900">{tx(f.title, locale)}</h3>
                          <p className="mt-3 text-[14px] leading-9 text-steel-600">{tx(f.body, locale)}</p>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </div>
              )}

              <Reveal>
                <div className="mt-14 overflow-hidden rounded-sm bg-steel-950 p-9">
                  <h2 className="text-xl leading-[1.6] font-extrabold text-white">
                    {t('products_quote_for', locale)} «{name}»؟
                  </h2>
                  <p className="mt-3 text-[14px] leading-8 text-steel-400">{t('products_quote_body', locale)}</p>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <a href={`tel:${PHONES[0].tel}`} className="btn-primary">
                      {t('cta_call', locale)}
                    </a>
                    <a
                      href={whatsappLink(
                        locale === 'ar'
                          ? `السلام عليكم، محتاج عرض سعر لـ ${name} (${product.name})`
                          : `Hello, I need a quotation for ${product.name}`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline"
                    >
                      {t('cta_whatsapp', locale)}
                    </a>
                    <a
                      href={quoteMailto(
                        `${t('form_subject', locale)} — ${name}`,
                        locale === 'ar'
                          ? `السلام عليكم،\n\nمحتاج عرض سعر للأصناف التالية ضمن فئة: ${name} (${product.name})\n\n- الصنف / المواصفة:\n- المقاس / درجة الضغط:\n- الخامة:\n- الكمية:\n- مكان التسليم:\n\nشكراً لكم.`
                          : `Hello,\n\nI would like a quotation for the following items under: ${product.name}\n\n- Item / specification:\n- Size / pressure rating:\n- Material:\n- Quantity:\n- Delivery location:\n\nThank you.`,
                      )}
                      className="btn-outline"
                    >
                      {t('cta_email', locale)}
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>

            <aside className="lg:col-span-4">
              <div className="sticky top-32 space-y-6">
                <div className="rounded-sm border border-steel-200 p-6">
                  <h2 className="text-[15px] font-extrabold text-steel-900">{t('products_other_cats', locale)}</h2>
                  <span className="mt-3 block h-0.5 w-9 bg-brand-600" />
                  <ul className="mt-5 space-y-1">
                    {others.map((o) => (
                      <li key={o.slug}>
                        <Link
                          href={href(`/products/${o.slug}`, locale)}
                          className="group flex items-center gap-3 rounded-sm p-2 text-[13.5px] font-semibold text-steel-600 transition hover:bg-sand-100 hover:text-brand-800"
                        >
                          <ProductThumbMini product={o} locale={locale} className="h-11 w-11" />
                          <span className="truncate">{productName(o, locale)}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-sm bg-brand-700 p-7 text-white">
                  <p className="text-[13px] font-bold text-brand-200">{t('products_quick_contact', locale)}</p>
                  <div className="mt-4 space-y-3">
                    {PHONES.map((p) => (
                      <a key={p.tel} href={`tel:${p.tel}`} dir="ltr" className="block text-left text-lg font-extrabold transition hover:text-brand-200">
                        {p.display}
                      </a>
                    ))}
                    <a href={`mailto:${EMAIL}`} dir="ltr" className="block text-left text-[13px] break-all text-brand-100 transition hover:text-white">
                      {EMAIL}
                    </a>
                  </div>
                </div>

                <Link
                  href={href('/brochure', locale)}
                  className="flex items-center gap-4 rounded-sm border border-steel-200 p-6 transition hover:border-brand-400 hover:bg-sand-100"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-brand-50 text-brand-700">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden>
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <path d="M14 2v6h6M12 18v-6M9 15l3 3 3-3" />
                    </svg>
                  </span>
                  <span>
                    <span className="block text-[14px] font-extrabold text-steel-900">{t('brochure_title', locale)}</span>
                    <span className="mt-0.5 block text-[12.5px] text-steel-500">{t('brochure_pdf_file', locale)}</span>
                  </span>
                </Link>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  )
}
