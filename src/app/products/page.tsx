import type { Metadata } from 'next'
import Link from 'next/link'
import Reveal from '@/components/Reveal'
import ProductIcon from '@/components/ProductIcons'
import { Container, SectionHeading, PageHero } from '@/components/ui'
import { DiagonalLines } from '@/components/IndustrialArt'
import { PRODUCTS } from '@/data/products'
import { CHEMICALS_COUNT } from '@/data/chemicals'
import { PHONES, EMAIL, whatsappLink } from '@/lib/site'

export const metadata: Metadata = {
  title: 'منتجاتنا',
  description:
    'فئات منتجات إيماك: معدات نقل الكتلة، مواسير ووصلات، فلانشات، أنابيب، محابس، مصائد بخار، أقراص أمان، منتجات صلب، جوانات، خراطيم، أجهزة قياس، كيماويات، وأنظمة تتبّع حراري.',
  alternates: { canonical: '/products' },
}

export default function ProductsPage() {
  return (
    <>
      <PageHero
        title="منتجاتنا"
        sub={`${PRODUCTS.length} فئة رئيسية تغطّي مستلزمات الحفر والإنتاج والتكرير ومعالجة الغاز والبتروكيماويات — بمواصفاتها وخاماتها ودرجاتها.`}
        crumb={[{ label: 'منتجاتنا' }]}
      />

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="الكتالوج"
            title="اختر الفئة لعرض المواصفات والخامات"
            sub="كل فئة فيها تفاصيل الدرجات والمواصفات القياسية المتاحة، وتقدر تطلب عرض سعر لأي صنف مباشرة."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 80}>
                <Link
                  href={`/products/${p.slug}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-sm border border-steel-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl hover:shadow-steel-900/[0.07]"
                >
                  <span className="absolute -top-8 -left-8 h-28 w-28 rounded-full bg-brand-50 transition-transform duration-500 group-hover:scale-[2.6]" />

                  <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-sm bg-brand-50 text-brand-700 transition-all duration-300 group-hover:bg-brand-700 group-hover:text-white">
                    <ProductIcon name={p.icon} className="h-7 w-7" />
                  </span>

                  <h2 className="relative mt-6 text-[18px] font-extrabold text-steel-900 transition group-hover:text-brand-800">
                    {p.nameAr}
                  </h2>
                  <p className="relative mt-1.5 text-[12px] font-semibold tracking-wide text-steel-400" dir="ltr">
                    {p.name}
                  </p>
                  <p className="relative mt-4 grow text-[13.5px] leading-8 text-steel-600">{p.tagline}</p>

                  <span className="relative mt-6 flex items-center justify-between border-t border-steel-100 pt-5 text-[13px] font-bold text-brand-700">
                    <span>
                      {p.slug === 'chemicals'
                        ? `${CHEMICALS_COUNT}+ صنف`
                        : `${p.groups.reduce((n, g) => n + g.items.length, 0)} بند`}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      التفاصيل
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1" aria-hidden>
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                      </svg>
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* البروشور */}
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
                <h2 className="text-xl font-extrabold text-steel-900">بروشور الشركة الكامل</h2>
                <p className="mt-2 text-[14px] leading-8 text-steel-600">
                  كل الفئات والمواصفات والدرجات في ملف PDF واحد جاهز للتحميل والمشاركة مع فريقك الفني.
                </p>
              </div>
            </div>
            <a href="/imac-brochure.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary shrink-0">
              تحميل البروشور
            </a>
          </div>
        </Container>
      </section>

      {/* دعوة للتواصل */}
      <section className="relative overflow-hidden bg-brand-700 py-16 sm:py-20">
        <DiagonalLines className="absolute inset-0 text-white/[0.06]" />
        <Container className="relative">
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div className="max-w-2xl text-center lg:text-right">
              <h2 className="text-2xl leading-[1.5] font-extrabold text-white sm:text-3xl">
                مش لاقي الصنف اللي محتاجه؟
              </h2>
              <p className="mt-4 text-[15px] leading-8 text-brand-100">
                ابعتلنا المواصفة أو رقم الجزء وهندوّر عليه ونرد عليك بعرض سعر ومدة توريد.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a href={`tel:${PHONES[0].tel}`} className="btn rounded-sm bg-white px-7 text-brand-800 hover:bg-steel-900 hover:text-white">
                اتصل الآن
              </a>
              <a
                href={whatsappLink('السلام عليكم، محتاج أستفسر عن صنف معيّن')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                واتساب
              </a>
              <a href={`mailto:${EMAIL}`} className="btn-outline">
                إرسال بريد
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
