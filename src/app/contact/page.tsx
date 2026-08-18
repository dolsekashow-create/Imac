import type { Metadata } from 'next'
import QuoteForm from '@/components/QuoteForm'
import Reveal from '@/components/Reveal'
import { Container, PageHero } from '@/components/ui'
import { DiagonalLines } from '@/components/IndustrialArt'
import {
  PHONES,
  FAXES,
  EMAIL,
  WHATSAPP,
  ADDRESS,
  MAP_URL,
  MAP_EMBED_URL,
  whatsappLink,
  SITE,
} from '@/lib/site'

export const metadata: Metadata = {
  title: 'اتصل بنا',
  description: `تواصل مع ${SITE.name} — تليفون ${PHONES[0].display} و${PHONES[1].display}، واتساب ${WHATSAPP.display}، بريد ${EMAIL}. العنوان: ${ADDRESS.ar}`,
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="اتصل بنا"
        sub="ابعتلنا قائمة الأصناف أو المواصفة المطلوبة، وهنرد عليك بعرض سعر مُفصّل ومدة التوريد."
        crumb={[{ label: 'اتصل بنا' }]}
      />

      {/* وسائل التواصل */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="grid gap-px overflow-hidden rounded-sm bg-steel-200 sm:grid-cols-2 lg:grid-cols-4">
            <ContactCard
              label="تليفون"
              icon={<IconPhone />}
              items={PHONES.map((p) => ({ text: p.display, href: `tel:${p.tel}` }))}
            />
            <ContactCard
              label="واتساب"
              icon={<IconWa />}
              items={[{ text: WHATSAPP.display, href: whatsappLink('السلام عليكم، حابب أستفسر عن منتجاتكم'), external: true }]}
            />
            <ContactCard label="فاكس" icon={<IconFax />} items={FAXES.map((f) => ({ text: f.display }))} />
            <ContactCard
              label="البريد الإلكتروني"
              icon={<IconMail />}
              items={[{ text: EMAIL, href: `mailto:${EMAIL}` }]}
              small
            />
          </div>
        </Container>
      </section>

      {/* النموذج والعنوان */}
      <section className="bg-sand-100 py-16 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <QuoteForm />
            </Reveal>

            <Reveal delay={140} className="lg:col-span-5">
              <div className="space-y-6">
                <div className="rounded-sm border border-steel-200 bg-white p-7">
                  <h2 className="text-xl font-extrabold text-steel-900">العنوان</h2>
                  <div className="rule-brand mt-4" />
                  <p className="mt-5 text-[14.5px] leading-9 text-steel-600">{ADDRESS.ar}</p>
                  <p className="mt-3 text-left text-[13px] leading-8 text-steel-500" dir="ltr">
                    {ADDRESS.en}
                  </p>
                  <a
                    href={MAP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost mt-6 w-full"
                  >
                    فتح الموقع على الخريطة
                  </a>
                </div>

                <div className="overflow-hidden rounded-sm border border-steel-200 bg-white">
                  <iframe
                    src={MAP_EMBED_URL}
                    title={`موقع ${SITE.shortName} على الخريطة`}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-72 w-full border-0"
                  />
                </div>

                <div className="rounded-sm bg-steel-950 p-7 text-white">
                  <h2 className="text-[15px] font-extrabold">مواعيد العمل</h2>
                  <span className="mt-3 block h-0.5 w-9 bg-brand-600" />
                  <ul className="mt-5 space-y-3 text-[13.5px]">
                    <li className="flex items-center justify-between border-b border-white/10 pb-3">
                      <span className="text-steel-400">السبت — الخميس</span>
                      <span className="font-bold" dir="ltr">
                        9:00 — 17:00
                      </span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-steel-400">الجمعة</span>
                      <span className="font-bold text-brand-300">إجازة</span>
                    </li>
                  </ul>
                  <p className="mt-5 text-[12.5px] leading-7 text-steel-500">
                    الاستفسارات العاجلة على الواتساب بتتابع خارج المواعيد.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* شريط سفلي */}
      <section className="relative overflow-hidden bg-brand-700 py-14">
        <DiagonalLines className="absolute inset-0 text-white/[0.06]" />
        <Container className="relative">
          <div className="flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-right">
            <h2 className="text-xl leading-[1.6] font-extrabold text-white sm:text-2xl">
              محتاج ترد بسرعة؟ كلّمنا على طول
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {PHONES.map((p) => (
                <a
                  key={p.tel}
                  href={`tel:${p.tel}`}
                  dir="ltr"
                  className="btn rounded-sm bg-white px-7 text-brand-800 hover:bg-steel-900 hover:text-white"
                >
                  {p.display}
                </a>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

function ContactCard({
  label,
  icon,
  items,
  small,
}: {
  label: string
  icon: React.ReactNode
  items: { text: string; href?: string; external?: boolean }[]
  small?: boolean
}) {
  return (
    <div className="group bg-white p-8 transition-colors duration-300 hover:bg-sand-100">
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-sm bg-brand-50 text-brand-700 transition-all duration-300 group-hover:bg-brand-700 group-hover:text-white">
        {icon}
      </span>
      <p className="mt-5 text-[12px] font-bold tracking-wide text-brand-700">{label}</p>
      <div className="mt-2 space-y-1" dir="ltr">
        {items.map((it) =>
          it.href ? (
            <a
              key={it.text}
              href={it.href}
              {...(it.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className={`block text-left font-extrabold break-all text-steel-900 transition hover:text-brand-700 ${
                small ? 'text-[13px]' : 'text-[15px]'
              }`}
            >
              {it.text}
            </a>
          ) : (
            <span
              key={it.text}
              className={`block text-left font-extrabold text-steel-900 ${small ? 'text-[13px]' : 'text-[15px]'}`}
            >
              {it.text}
            </span>
          ),
        )}
      </div>
    </div>
  )
}

const svg = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  className: 'h-6 w-6',
  'aria-hidden': true,
}

const IconPhone = () => (
  <svg {...svg}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
  </svg>
)
const IconMail = () => (
  <svg {...svg}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m2 7 10 6 10-6" />
  </svg>
)
const IconFax = () => (
  <svg {...svg}>
    <path d="M6 9V3h12v6" />
    <rect x="2" y="9" width="20" height="8" rx="2" />
    <path d="M6 17h12v4H6z" />
    <path d="M18 12.5h.01" />
  </svg>
)
const IconWa = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden>
    <path d="M17.5 14.4c-.3-.2-1.7-.9-2-1-.3-.1-.5-.2-.7.1s-.7 1-.9 1.2c-.2.2-.3.2-.6.1a8.2 8.2 0 0 1-2.4-1.5 9 9 0 0 1-1.7-2.1c-.2-.3 0-.5.1-.6l.5-.6.3-.5v-.5l-1-2.3c-.2-.6-.4-.5-.6-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2m0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2" />
  </svg>
)
