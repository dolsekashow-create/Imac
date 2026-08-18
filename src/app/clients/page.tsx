import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Counters from '@/components/Counters'
import Reveal from '@/components/Reveal'
import { Container, SectionHeading, PageHero, Card } from '@/components/ui'
import { DotGrid, DiagonalLines, IndustrialSkyline } from '@/components/IndustrialArt'
import { SECTORS, CLIENT_PROMISE, CLIENT_LOGOS } from '@/data/content'
import { PHONES, EMAIL, whatsappLink } from '@/lib/site'

export const metadata: Metadata = {
  title: 'عملاؤنا',
  description:
    'نخدم شركات الحفر والإنتاج والمصافي ومحطات معالجة الغاز والبتروكيماويات ومحطات الطاقة ومقاولي التركيبات الميكانيكية في مصر.',
  alternates: { canonical: '/clients' },
}

export default function ClientsPage() {
  return (
    <>
      <PageHero
        title="عملاؤنا"
        sub="أفضل الخدمات لأفضل العملاء — نتعامل مع شركات ومصانع ومقاولين في قطاعات البترول والغاز والصناعات الكيماوية."
        crumb={[{ label: 'عملاؤنا' }]}
      />

      {/* القطاعات */}
      <section className="bg-white py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="القطاعات التي نخدمها"
            title="نفهم متطلبات كل قطاع على حدة"
            sub="لكل قطاع مواصفاته وضغوط التشغيل والخامات المناسبة له — وده اللي بنبني عليه كل عرض توريد."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SECTORS.map((s, i) => (
              <Reveal key={s.title} delay={(i % 4) * 80}>
                <Card className="h-full">
                  <span className="text-[13px] font-black text-brand-300">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="mt-4 text-[16.5px] leading-8 font-extrabold text-steel-900">{s.title}</h3>
                  <p className="mt-3 text-[13.5px] leading-8 text-steel-600">{s.body}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* شعارات العملاء — تظهر تلقائياً لما تتضاف في src/data/content.ts */}
      {CLIENT_LOGOS.length > 0 && (
        <section className="border-y border-steel-100 bg-sand-100 py-20">
          <Container>
            <SectionHeading eyebrow="شركاء النجاح" title="شركات تعاملت معنا" />
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

      {/* طريقة العمل */}
      <section className="relative overflow-hidden bg-sand-100 py-20 sm:py-28">
        <DotGrid className="absolute inset-0 text-brand-900/[0.045]" />
        <Container className="relative">
          <SectionHeading
            eyebrow="طريقة عملنا"
            title="من أول استفسار لحد التسليم"
            sub="أربع خطوات واضحة — من غير مفاجآت في السعر ولا في مدة التوريد."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CLIENT_PROMISE.map((s, i) => (
              <Reveal key={s.step} delay={i * 100}>
                <div className="group relative h-full rounded-sm border border-steel-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl hover:shadow-steel-900/[0.06]">
                  <span className="text-4xl leading-none font-black text-brand-100 transition-colors duration-300 group-hover:text-brand-300">
                    {s.step}
                  </span>
                  <h3 className="mt-5 text-[16.5px] font-extrabold text-steel-900">{s.title}</h3>
                  <p className="mt-3 text-[13.5px] leading-8 text-steel-600">{s.body}</p>
                  {i < CLIENT_PROMISE.length - 1 && (
                    <span className="absolute top-1/2 -left-3 hidden h-6 w-6 -translate-y-1/2 items-center justify-center text-brand-300 lg:flex">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden>
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                      </svg>
                    </span>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <Counters />

      {/* التزاماتنا */}
      <section className="relative overflow-hidden bg-steel-950 py-20 sm:py-28">
        <div className="absolute inset-0 bg-linear-to-l from-brand-950/70 via-steel-950 to-steel-950" />
        <DiagonalLines className="absolute inset-0 text-white/[0.025]" />
        <IndustrialSkyline className="pointer-events-none absolute inset-x-0 bottom-0 h-44 w-full text-brand-300/15" />
        <Container className="relative">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <span className="eyebrow text-brand-300 before:bg-brand-400">التزامنا تجاه العميل</span>
              <h2 className="mt-5 text-3xl leading-[1.4] font-extrabold text-white sm:text-4xl">
                جودة العلاقة طويلة الأمد هي مقياس نجاحنا
              </h2>
              <div className="rule-brand mt-5" />
              <p className="mt-7 text-[15px] leading-9 text-steel-300">
                إحنا بنتعامل مع كل طلب على إنه بداية علاقة مستمرة، مش صفقة واحدة. علشان كده بنقول رأينا الفني
                بصراحة لو الصنف المطلوب مش الأنسب للتطبيق، وبنرشّح البديل المكافئ — حتى لو ده يقلّل قيمة الأمر.
              </p>
            </Reveal>

            <Reveal delay={140}>
              <ul className="space-y-4">
                {[
                  'وضوح كامل في المواصفة والخامة ومصدر التوريد قبل التعاقد.',
                  'مستندات مطابقة: شهادة منشأ + تقرير اختبار لكل شحنة.',
                  'الالتزام بمدة التوريد المتفق عليها والإبلاغ الفوري بأي تغيّر.',
                  'سرية تامة لبيانات المشروعات وقوائم الأصناف الخاصة بالعميل.',
                  'دعم فني بعد التوريد وتوفير الأصناف التكميلية عند الحاجة.',
                ].map((t) => (
                  <li
                    key={t}
                    className="flex items-start gap-4 rounded-sm border border-white/10 bg-white/[0.03] p-5 transition hover:border-brand-600/50 hover:bg-white/[0.06]"
                  >
                    <span className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3" aria-hidden>
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    <span className="text-[14px] leading-8 text-steel-300">{t}</span>
                  </li>
                ))}
              </ul>
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
                عايز تضيفنا لقائمة موردينك المعتمدين؟
              </h2>
              <p className="mt-4 text-[15px] leading-8 text-brand-100">
                كلّمنا وهنبعتلك ملف الشركة والمستندات المطلوبة للتسجيل.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link href="/contact" className="btn rounded-sm bg-white px-7 text-brand-800 hover:bg-steel-900 hover:text-white">
                صفحة التواصل
              </Link>
              <a href={`tel:${PHONES[0].tel}`} className="btn-outline">
                اتصل الآن
              </a>
              <a
                href={whatsappLink('السلام عليكم، حابب أضيف شركتكم لقائمة الموردين')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                واتساب
              </a>
              <a href={`mailto:${EMAIL}`} className="btn-outline">
                بريد إلكتروني
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
