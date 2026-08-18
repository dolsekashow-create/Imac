import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Reveal from '@/components/Reveal'
import ProductIcon from '@/components/ProductIcons'
import ChemicalsList from '@/components/ChemicalsList'
import { Container, PageHero } from '@/components/ui'
import { PRODUCTS, getProduct } from '@/data/products'
import { PHONES, EMAIL, whatsappLink, quoteMailto, SITE } from '@/lib/site'

type Params = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params
  const p = getProduct(slug)
  if (!p) return { title: 'المنتج غير موجود' }
  return {
    title: p.nameAr,
    description: `${p.name} — ${p.tagline}. ${p.intro.slice(0, 120)}`,
    alternates: { canonical: `/products/${p.slug}` },
    openGraph: { title: `${p.nameAr} | ${SITE.shortName}`, description: p.tagline },
  }
}

export default async function ProductPage({ params }: Params) {
  const { slug } = await params
  const product = getProduct(slug)
  if (!product) notFound()

  const others = PRODUCTS.filter((p) => p.slug !== product.slug)

  return (
    <>
      <PageHero
        title={product.nameAr}
        sub={product.tagline}
        crumb={[{ label: 'منتجاتنا', href: '/products' }, { label: product.nameAr }]}
      />

      <section className="bg-white py-16 sm:py-24">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-14">
            {/* المحتوى */}
            <div className="lg:col-span-8">
              <Reveal>
                <div className="flex items-start gap-5 border-b border-steel-100 pb-9">
                  <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-sm bg-brand-50 text-brand-700">
                    <ProductIcon name={product.icon} className="h-8 w-8" />
                  </span>
                  <div>
                    <p className="text-[13px] font-bold tracking-wide text-brand-700" dir="ltr">
                      {product.name}
                    </p>
                    <p className="mt-3 text-[15px] leading-9 text-steel-600">{product.intro}</p>
                  </div>
                </div>
              </Reveal>

              {/* المواصفات السريعة */}
              {product.specs && (
                <Reveal delay={80}>
                  <div className="mt-9 grid gap-px overflow-hidden rounded-sm bg-steel-200 sm:grid-cols-3">
                    {product.specs.map((s) => (
                      <div key={s.label} className="bg-sand-100 p-6">
                        <p className="text-[12px] font-bold tracking-wide text-brand-700">{s.label}</p>
                        <p className="mt-2 text-[14.5px] leading-8 font-extrabold text-steel-900">{s.value}</p>
                      </div>
                    ))}
                  </div>
                </Reveal>
              )}

              {/* قائمة الكيماويات */}
              {product.slug === 'chemicals' && (
                <div className="mt-12">
                  <ChemicalsList />
                </div>
              )}

              {/* المجموعات */}
              {product.groups.length > 0 && (
                <div className="mt-12 space-y-10">
                  {product.groups.map((g, gi) => (
                    <Reveal key={g.title} delay={gi * 70}>
                      <div>
                        <h2 className="text-xl font-extrabold text-steel-900">{g.title}</h2>
                        <div className="rule-brand mt-4" />
                        {g.note && <p className="mt-5 text-[14.5px] leading-9 text-steel-600">{g.note}</p>}
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

              {/* التفاصيل الموسّعة */}
              {product.features && (
                <div className="mt-14">
                  <Reveal>
                    <h2 className="text-xl font-extrabold text-steel-900">تفاصيل الأنواع</h2>
                    <div className="rule-brand mt-4" />
                  </Reveal>
                  <div className="mt-8 space-y-5">
                    {product.features.map((f, i) => (
                      <Reveal key={f.title} delay={i * 70}>
                        <div className="group rounded-sm border-r-2 border-brand-200 bg-sand-100 p-7 transition hover:border-brand-600 hover:bg-sand-50">
                          <h3 className="text-[16px] font-extrabold text-steel-900">{f.title}</h3>
                          <p className="mt-3 text-[14px] leading-9 text-steel-600">{f.body}</p>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </div>
              )}

              {/* طلب عرض سعر */}
              <Reveal>
                <div className="mt-14 overflow-hidden rounded-sm bg-steel-950 p-9">
                  <h2 className="text-xl leading-[1.6] font-extrabold text-white">
                    محتاج عرض سعر لـ«{product.nameAr}»؟
                  </h2>
                  <p className="mt-3 text-[14px] leading-8 text-steel-400">
                    ابعتلنا المقاس والمواصفة والكمية، وهنرد عليك بعرض مُفصّل ومدة التوريد.
                  </p>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <a href={`tel:${PHONES[0].tel}`} className="btn-primary">
                      اتصل الآن
                    </a>
                    <a
                      href={whatsappLink(`السلام عليكم، محتاج عرض سعر لـ ${product.nameAr} (${product.name})`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline"
                    >
                      واتساب
                    </a>
                    <a
                      href={quoteMailto(
                        `طلب عرض سعر — ${product.nameAr}`,
                        `السلام عليكم،\n\nمحتاج عرض سعر للأصناف التالية ضمن فئة: ${product.nameAr} (${product.name})\n\n- الصنف / المواصفة:\n- المقاس / درجة الضغط:\n- الخامة:\n- الكمية:\n- مكان التسليم:\n\nشكراً لكم.`,
                      )}
                      className="btn-outline"
                    >
                      إرسال بريد
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* الشريط الجانبي */}
            <aside className="lg:col-span-4">
              <div className="sticky top-32 space-y-6">
                <div className="rounded-sm border border-steel-200 p-6">
                  <h2 className="text-[15px] font-extrabold text-steel-900">فئات أخرى</h2>
                  <span className="mt-3 block h-0.5 w-9 bg-brand-600" />
                  <ul className="mt-5 space-y-1">
                    {others.map((o) => (
                      <li key={o.slug}>
                        <Link
                          href={`/products/${o.slug}`}
                          className="group flex items-center gap-3 rounded-sm px-3 py-2.5 text-[13.5px] font-semibold text-steel-600 transition hover:bg-sand-100 hover:text-brand-800"
                        >
                          <ProductIcon name={o.icon} className="h-4.5 w-4.5 shrink-0 text-brand-500 transition group-hover:text-brand-700" />
                          <span className="truncate">{o.nameAr}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-sm bg-brand-700 p-7 text-white">
                  <p className="text-[13px] font-bold text-brand-200">تواصل سريع</p>
                  <div className="mt-4 space-y-3">
                    {PHONES.map((p) => (
                      <a
                        key={p.tel}
                        href={`tel:${p.tel}`}
                        dir="ltr"
                        className="block text-left text-lg font-extrabold transition hover:text-brand-200"
                      >
                        {p.display}
                      </a>
                    ))}
                    <a
                      href={`mailto:${EMAIL}`}
                      dir="ltr"
                      className="block text-left text-[13px] break-all text-brand-100 transition hover:text-white"
                    >
                      {EMAIL}
                    </a>
                  </div>
                </div>

                <a
                  href="/imac-brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-sm border border-steel-200 p-6 transition hover:border-brand-400 hover:bg-sand-100"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-brand-50 text-brand-700">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden>
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <path d="M14 2v6h6M12 18v-6M9 15l3 3 3-3" />
                    </svg>
                  </span>
                  <span>
                    <span className="block text-[14px] font-extrabold text-steel-900">بروشور الشركة</span>
                    <span className="mt-0.5 block text-[12.5px] text-steel-500">تحميل ملف PDF</span>
                  </span>
                </a>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  )
}
