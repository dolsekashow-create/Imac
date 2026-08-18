import type { Metadata } from 'next'
import Link from 'next/link'
import Counters from '@/components/Counters'
import Reveal from '@/components/Reveal'
import { SERVICES } from '@/components/ServiceIcons'
import { Container, SectionHeading, PageHero, Card } from '@/components/ui'
import { DotGrid, DiagonalLines, IndustrialSkyline } from '@/components/IndustrialArt'
import { VISION, MISSION, VALUES, WELCOME, WHY_US, ABOUT } from '@/data/content'
import { PHONES, ADDRESS, SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'من نحن',
  description:
    'تعرّف على إيماك للإستيراد والتصدير والتوريدات — شركة مصرية متخصصة في توريد مستلزمات صناعة البترول والغاز والبتروكيماويات بمواصفات ASTM وAPI وDIN وEN.',
  alternates: { canonical: '/about' },
}

const STANDARDS = [
  { code: 'ASTM', body: 'المواصفات الأمريكية للخامات والاختبارات' },
  { code: 'API', body: 'مواصفات معهد البترول الأمريكي لخطوط الأنابيب والمعدات' },
  { code: 'DIN / EN', body: 'المواصفات الألمانية والأوروبية للمواسير والأنابيب' },
  { code: 'ANSI / ASME', body: 'درجات الضغط وأبعاد الفلانشات والمحابس' },
  { code: 'EN 10204 3.1', body: 'شهادات الاختبار المعتمدة لكل شحنة' },
  { code: 'MTC', body: 'تقارير اختبار الخامة مع بيانات التحليل الكيميائي' },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="من نحن"
        sub="شركة مصرية متخصصة في توريد مستلزمات ومعدات وقطع غيار صناعة البترول والغاز والبتروكيماويات."
        crumb={[{ label: 'من نحن' }]}
      />

      {/* المقدمة */}
      <section className="bg-white py-20 sm:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-7">
              <SectionHeading eyebrow="نبذة عن الشركة" title="شريك توريد يفهم المواصفة الفنية" align="start" />
              <div className="mt-8 space-y-5">
                {ABOUT.intro.map((p) => (
                  <p key={p.slice(0, 24)} className="text-[15px] leading-9 text-steel-600">
                    {p}
                  </p>
                ))}
                {WELCOME.body.map((p) => (
                  <p key={p.slice(0, 24)} className="text-[15px] leading-9 text-steel-600">
                    {p}
                  </p>
                ))}
              </div>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link href="/products" className="btn-ghost">
                  تصفّح المنتجات
                </Link>
                <a href="/imac-brochure.pdf" target="_blank" rel="noopener noreferrer" className="btn-ghost">
                  تحميل البروشور (PDF)
                </a>
              </div>
            </Reveal>

            <Reveal delay={140} className="lg:col-span-5">
              <div className="sticky top-32 space-y-4">
                <InfoRow label="الاسم التجاري" value={SITE.name} />
                <InfoRow label="الاسم بالإنجليزية" value={SITE.nameEn} ltr />
                <InfoRow label="النشاط" value="إستيراد · تصدير · توريدات · خدمات بترولية" />
                <InfoRow label="المقر" value={ADDRESS.ar} />
                <InfoRow label="نطاق العمل" value="جمهورية مصر العربية — مع شبكة موردين دولية" />
                <a
                  href={`tel:${PHONES[0].tel}`}
                  className="flex items-center justify-between rounded-sm bg-brand-700 px-6 py-5 text-white transition hover:bg-brand-800"
                >
                  <span>
                    <span className="block text-[12px] text-brand-200">للتواصل المباشر</span>
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

      {/* الرؤية والرسالة والقيم */}
      <section className="relative overflow-hidden bg-sand-100 py-20 sm:py-28">
        <DotGrid className="absolute inset-0 text-brand-900/[0.045]" />
        <Container className="relative">
          <SectionHeading eyebrow="مبادئنا" title="الرؤية والرسالة والقيم" />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {[VISION, MISSION, VALUES].map((b, i) => (
              <Reveal key={b.title} delay={i * 110}>
                <Card className="h-full">
                  <span className="absolute top-6 left-6 text-6xl leading-none font-black text-brand-100">
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

      {/* ما نقدمه */}
      <section className="bg-white py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="مجالات عملنا"
            title="أربعة خطوط عمل تحت سقف واحد"
            sub="نفس الخدمات الموجودة في هوية الشركة — نغطّي دورة التوريد من أولها لآخرها."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s, i) => (
              <Reveal key={s.key} delay={i * 90}>
                <Card className="h-full text-center">
                  <span className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-sm bg-brand-50 text-brand-700 transition-all duration-300 group-hover:bg-brand-700 group-hover:text-white">
                    <s.Icon className="h-9 w-9" />
                  </span>
                  <h3 className="mt-6 text-lg font-extrabold text-steel-900">{s.title}</h3>
                  <p className="mt-3 text-[14px] leading-8 text-steel-600">{s.body}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <Counters />

      {/* الخبرة الدولية والمواصفات */}
      <section className="relative overflow-hidden bg-steel-950 py-20 sm:py-28">
        <div className="absolute inset-0 bg-linear-to-l from-brand-950/70 via-steel-950 to-steel-950" />
        <DiagonalLines className="absolute inset-0 text-white/[0.025]" />
        <IndustrialSkyline className="pointer-events-none absolute inset-x-0 bottom-0 h-44 w-full text-brand-300/15" />
        <Container className="relative">
          <SectionHeading
            eyebrow="المواصفات والجودة"
            title={ABOUT.experienceTitle}
            sub={ABOUT.experienceBody}
            tone="dark"
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-sm bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {STANDARDS.map((s, i) => (
              <Reveal key={s.code} delay={(i % 3) * 90}>
                <div className="h-full bg-steel-950 p-8 transition-colors duration-300 hover:bg-steel-900">
                  <p className="text-xl font-extrabold text-brand-300" dir="ltr">
                    {s.code}
                  </p>
                  <p className="mt-3 text-[14px] leading-8 text-steel-400">{s.body}</p>
                </div>
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
            sub="التوريد الصحيح هو الصنف الصحيح بالمواصفة الصحيحة في الوقت الصحيح."
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

          <div className="mt-16 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn-primary">
              تواصل معنا
            </Link>
            <Link href="/clients" className="btn-ghost">
              القطاعات التي نخدمها
            </Link>
          </div>
        </Container>
      </section>
    </>
  )
}

function InfoRow({ label, value, ltr }: { label: string; value: string; ltr?: boolean }) {
  return (
    <div className="border-r-2 border-brand-200 bg-sand-100 px-6 py-4 transition hover:border-brand-600">
      <p className="text-[12px] font-bold tracking-wide text-brand-700">{label}</p>
      <p className={`mt-1.5 text-[14.5px] leading-8 font-semibold text-steel-800 ${ltr ? 'text-left' : ''}`} dir={ltr ? 'ltr' : undefined}>
        {value}
      </p>
    </div>
  )
}
