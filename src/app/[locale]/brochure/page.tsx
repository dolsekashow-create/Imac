import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Container, PageHero, HERO_IMAGES } from '@/components/ui'
import { BROCHURE_PDF, PHONES, EMAIL, waMsg } from '@/lib/site'
import { isLocale, t, type Locale } from '@/lib/i18n'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw } = await params
  const locale: Locale = isLocale(raw) ? raw : 'ar'
  return {
    title: t('brochure_title', locale),
    description: t('brochure_sub', locale),
    alternates: { canonical: `/${locale}/brochure` },
  }
}

export default async function BrochurePage({ params }: Props) {
  const { locale: raw } = await params
  if (!isLocale(raw)) notFound()
  const locale: Locale = raw

  return (
    <>
      <PageHero
        locale={locale}
        title={t('brochure_full', locale)}
        sub={t('brochure_sub', locale)}
        crumb={[{ label: t('brochure_title', locale) }]}
        image={HERO_IMAGES.rig}
      />

      <section className="bg-white py-14 sm:py-20">
        <Container>
          {/* أزرار الفتح والتحميل — بتشتغل على الموبايل والديسكتوب */}
          <div className="flex flex-col gap-6 rounded-sm border border-steel-200 bg-sand-100 p-7 sm:p-9 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-5">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-sm bg-brand-700 text-white">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden>
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <path d="M14 2v6h6M12 18v-6M9 15l3 3 3-3" />
                </svg>
              </span>
              <div>
                <h2 className="text-xl font-extrabold text-steel-900">{t('brochure_title', locale)}</h2>
                <p className="mt-1.5 text-[13px] font-semibold text-steel-500">
                  PDF · {t('brochure_pages', locale)} · 774 KB
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a href={BROCHURE_PDF} target="_blank" rel="noopener noreferrer" className="btn-primary">
                {t('brochure_open_tab', locale)}
              </a>
              <a href={BROCHURE_PDF} download="IMAC-Brochure.pdf" className="btn-ghost">
                {t('brochure_download', locale)}
              </a>
            </div>
          </div>

          <p className="mt-5 text-[13px] leading-7 text-steel-500">{t('brochure_mobile_note', locale)}</p>

          {/* العارض — بيظهر على الشاشات الكبيرة، والموبايل بيعتمد على الأزرار فوق */}
          <div className="mt-8 hidden overflow-hidden rounded-sm border border-steel-200 bg-steel-100 md:block">
            <object data={BROCHURE_PDF} type="application/pdf" className="h-[80vh] w-full">
              <iframe
                src={BROCHURE_PDF}
                title={t('brochure_viewer_label', locale)}
                className="h-[80vh] w-full border-0"
              />
            </object>
          </div>

          {/* بديل الموبايل — كارت كبير يفتح الملف */}
          <a
            href={BROCHURE_PDF}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 flex flex-col items-center gap-4 rounded-sm border border-dashed border-brand-300 bg-sand-50 p-10 text-center transition hover:border-brand-600 hover:bg-sand-100 md:hidden"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-sm bg-brand-700 text-white">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8" aria-hidden>
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <path d="M14 2v6h6M12 18v-6M9 15l3 3 3-3" />
              </svg>
            </span>
            <span className="text-[16px] font-extrabold text-steel-900">{t('brochure_open', locale)}</span>
            <span className="text-[13px] text-steel-500">PDF · {t('brochure_pages', locale)}</span>
          </a>

          {/* تواصل */}
          <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-sm bg-steel-950 p-8 text-center sm:flex-row sm:text-start">
            <p className="text-[15px] leading-8 font-bold text-white">{t('products_cta_body', locale)}</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href={`tel:${PHONES[0].tel}`} className="btn-primary">
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
