import type { Metadata } from 'next'
import Link from 'next/link'
import HeroSlider from '@/components/HeroSlider'
import Counters from '@/components/Counters'
import Reveal from '@/components/Reveal'
import ProductIcon from '@/components/ProductIcons'
import { SERVICES } from '@/components/ServiceIcons'
import { Container, SectionHeading, Card } from '@/components/ui'
import { DotGrid, DiagonalLines, IndustrialSkyline } from '@/components/IndustrialArt'
import { PRODUCTS } from '@/data/products'
import { VISION, MISSION, VALUES, WELCOME, WHY_US, ABOUT } from '@/data/content'
import { PHONES, EMAIL, whatsappLink } from '@/lib/site'

export const metadata: Metadata = {
  alternates: { canonical: '/' },
}

export default function HomePage() {
  return (
    <>
      <HeroSlider />

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
                  <h3 className="mt-6 text-lg font-extrabold text-steel-900">{s.title}</h3>
                  <p className="mt-3 text-[14px] leading-8 text-steel-600">{s.body}</p>
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
            eyebrow="من نحن"
            title="نبني علاقات طويلة الأمد قائمة على الثقة"
            sub="نؤمن أن قيمة أي توريد لا تُقاس بالصفقة الواحدة، بل بقدرة العميل على الاعتماد علينا في كل مرة."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {[VISION, MISSION, VALUES].map((b, i) => (
              <Reveal key={b.title} delay={i * 110}>
                <Card className="h-full">
                  <span className="absolute top-6 left-6 text-6xl leading-none font-black text-brand-100 transition-colors duration-300 group-hover:text-brand-200">
                    0{i + 1}
                  </span>
                  <h3 className="relative text-xl font-extrabold text-steel-900">{b.title}</h3>
                  <div className="rule-brand mt-4" />
                  <p className="relative mt-5 text-[14.5px] leading-9 text-steel-600">{b.body}</p>
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
              <SectionHeading eyebrow="كلمة ترحيب" title={WELCOME.title} align="start" />
              <div className="mt-7 space-y-5">
                {WELCOME.body.map((p) => (
                  <p key={p.slice(0, 24)} className="text-[15px] leading-9 text-steel-600">
                    {p}
                  </p>
                ))}
              </div>
              <p className="mt-8 border-r-2 border-brand-600 pr-4 text-[14px] font-bold text-steel-800">
                {WELCOME.signature}
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link href="/about" className="btn-ghost">
                  اعرف أكثر عن الشركة
                </Link>
                <a href="/imac-brochure.pdf" target="_blank" rel="noopener noreferrer" className="btn-ghost">
                  تحميل البروشور (PDF)
                </a>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="relative">
                <div className="relative overflow-hidden rounded-sm bg-steel-950 p-10 pt-16">
                  <div className="absolute inset-0 bg-linear-to-br from-steel-950 via-steel-900 to-brand-950" />
                  <DiagonalLines className="absolute inset-0 text-white/[0.03]" />
                  <IndustrialSkyline className="absolute inset-x-0 bottom-0 h-56 w-full text-brand-200/25" />
                  <div className="relative">
                    <p className="text-[13px] font-bold tracking-[0.22em] text-brand-300">EST. IN EGYPT</p>
                    <p className="mt-5 text-3xl leading-[1.5] font-extrabold text-white">
                      نخدم قطاعات الحفر والإنتاج
                      <br />
                      والتكرير ومعالجة الغاز
                      <br />
                      <span className="text-brand-300">والبتروكيماويات</span>
                    </p>
                    <div className="mt-40 grid grid-cols-2 gap-4 border-t border-white/10 pt-7 text-white">
                      <div>
                        <p className="text-xs text-steel-400">مواصفات نعمل بها</p>
                        <p className="mt-1 text-lg font-extrabold" dir="ltr">
                          ASTM · API · DIN · EN
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-steel-400">شهادات الاختبار</p>
                        <p className="mt-1 text-lg font-extrabold" dir="ltr">
                          MTC · EN 10204 3.1
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <span className="absolute -top-4 -right-4 -z-10 h-24 w-24 border-t-2 border-r-2 border-brand-500/60" />
                <span className="absolute -bottom-4 -left-4 -z-10 h-24 w-24 border-b-2 border-l-2 border-brand-500/60" />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <Counters />

      {/* المنتجات */}
      <section className="relative bg-sand-100 py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="منتجاتنا"
            title="فئات نورّدها لصناعة البترول والغاز"
            sub="من المواسير والفلانشات والمحابس، إلى معدات نقل الكتلة والكيماويات وأنظمة التتبّع الحراري — كل الأصناف بمواصفاتها وخاماتها."
          />

          <div className="mt-14 grid gap-px overflow-hidden rounded-sm bg-steel-200 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 80}>
                <Link
                  href={`/products/${p.slug}`}
                  className="group relative flex h-full flex-col bg-white p-8 transition-colors duration-300 hover:bg-white"
                >
                  <span className="absolute inset-y-0 right-0 w-0.5 origin-bottom scale-y-0 bg-brand-700 transition-transform duration-300 group-hover:scale-y-100" />
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-sm bg-brand-50 text-brand-700 transition-all duration-300 group-hover:bg-brand-700 group-hover:text-white">
                    <ProductIcon name={p.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 text-[17px] font-extrabold text-steel-900 transition group-hover:text-brand-800">
                    {p.nameAr}
                  </h3>
                  <p className="mt-1.5 text-[12px] font-semibold tracking-wide text-steel-400" dir="ltr">
                    {p.name}
                  </p>
                  <p className="mt-4 grow text-[13.5px] leading-8 text-steel-600">{p.tagline}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[13px] font-bold text-brand-700">
                    التفاصيل والمواصفات
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1" aria-hidden>
                      <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
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
            eyebrow="لماذا إيماك"
            title="الفرق في التفاصيل التي تحمي مشروعك"
            sub="التوريد الصحيح هو الصنف الصحيح بالمواصفة الصحيحة في الوقت الصحيح — وده اللي بنشتغل عليه."
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_US.map((w, i) => (
              <Reveal key={w.title} delay={(i % 3) * 90}>
                <div className="group flex gap-5">
                  <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-brand-200 bg-brand-50 text-[13px] font-black text-brand-700 transition-all duration-300 group-hover:bg-brand-700 group-hover:text-white">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-[16px] font-extrabold text-steel-900">{w.title}</h3>
                    <p className="mt-2.5 text-[14px] leading-8 text-steel-600">{w.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* عن الشركة والخبرة الدولية */}
      <section className="relative overflow-hidden bg-steel-950 py-20 sm:py-28">
        <div className="absolute inset-0 bg-linear-to-l from-brand-950/70 via-steel-950 to-steel-950" />
        <DotGrid className="absolute inset-0 text-white/[0.05]" />
        <Container className="relative">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <span className="eyebrow text-brand-300 before:bg-brand-400">عن إيماك</span>
              <h2 className="mt-5 text-3xl leading-[1.4] font-extrabold text-white sm:text-4xl">
                شريك توريد يفهم المواصفة الفنية
              </h2>
              <div className="rule-brand mt-5" />
              <div className="mt-7 space-y-5">
                {ABOUT.intro.map((p) => (
                  <p key={p.slice(0, 24)} className="text-[15px] leading-9 text-steel-300">
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="rounded-sm border border-white/10 bg-white/[0.03] p-9">
                <h3 className="text-2xl leading-[1.5] font-extrabold text-white">{ABOUT.experienceTitle}</h3>
                <div className="rule-brand mt-5" />
                <p className="mt-6 text-[15px] leading-9 text-steel-300">{ABOUT.experienceBody}</p>
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
            <div className="max-w-2xl text-center lg:text-right">
              <h2 className="text-2xl leading-[1.5] font-extrabold text-white sm:text-3xl">
                عندك قائمة أصناف أو مواصفة محتاج تسعيرها؟
              </h2>
              <p className="mt-4 text-[15px] leading-8 text-brand-100">
                ابعتلنا الطلب وهنرد عليك بعرض سعر مُفصّل بالمواصفات ومدة التوريد.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={`tel:${PHONES[0].tel}`}
                className="btn rounded-sm bg-white px-7 text-brand-800 hover:bg-steel-900 hover:text-white"
              >
                اتصل الآن
              </a>
              <a
                href={whatsappLink('السلام عليكم، حابب أطلب عرض سعر')}
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
