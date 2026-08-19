import type { Metadata, Viewport } from 'next'
import { Cairo } from 'next/font/google'
import { notFound } from 'next/navigation'
import '../globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFab from '@/components/WhatsAppFab'
import { SITE, EMAIL, PHONES, ADDRESS } from '@/lib/site'
import { LOCALES, DEFAULT_LOCALE, dir, isLocale, t, type Locale } from '@/lib/i18n'

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-cairo',
  display: 'swap',
})

type Props = { children: React.ReactNode; params: Promise<{ locale: string }> }

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params
  const locale: Locale = isLocale(raw) ? raw : DEFAULT_LOCALE

  return {
    metadataBase: new URL(SITE.url),
    title: {
      default: `${SITE.shortName[locale]} | ${SITE.tagline[locale]} — ${SITE.name[locale]}`,
      template: `%s | ${SITE.shortName[locale]}`,
    },
    description: SITE.description[locale],
    keywords:
      locale === 'ar'
        ? ['إيماك', 'IMAC', 'توريدات بترولية', 'مواسير وفلانشات', 'محابس', 'مصائد بخار', 'جوانات', 'كيماويات صناعية', 'استيراد وتصدير', 'دسوق', 'كفر الشيخ']
        : ['IMAC', 'oil and gas supplier Egypt', 'pipes and fittings', 'flanges', 'valves', 'steam traps', 'gaskets', 'industrial chemicals', 'EGPC supplier', 'Kafr El-Sheikh'],
    authors: [{ name: SITE.nameEn }],
    alternates: {
      languages: { ar: '/ar', en: '/en', 'x-default': '/ar' },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'ar' ? 'ar_EG' : 'en_US',
      alternateLocale: locale === 'ar' ? 'en_US' : 'ar_EG',
      url: `${SITE.url}/${locale}`,
      siteName: SITE.name[locale],
      title: `${SITE.shortName[locale]} — ${SITE.tagline[locale]}`,
      description: SITE.description[locale],
      images: [{ url: '/images/og.jpg', width: 1200, height: 630, alt: SITE.name[locale] }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${SITE.shortName[locale]} — ${SITE.tagline[locale]}`,
      description: SITE.description[locale],
      images: ['/images/og.jpg'],
    },
    robots: { index: true, follow: true },
  }
}

export const viewport: Viewport = {
  themeColor: '#6e4b33',
  width: 'device-width',
  initialScale: 1,
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale: raw } = await params
  if (!isLocale(raw)) notFound()
  const locale: Locale = raw

  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE.name[locale],
    alternateName: SITE.nameEn,
    url: SITE.url,
    logo: `${SITE.url}/images/imac-logo.png`,
    description: SITE.description[locale],
    email: EMAIL,
    telephone: PHONES.map((p) => p.tel),
    foundingDate: String(SITE.foundedYear),
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Mehallet Deyay, near to schools complex',
      addressLocality: 'Disuq',
      addressRegion: 'Kafr El-Sheikh',
      addressCountry: 'EG',
    },
    areaServed: 'EG',
    knowsAbout: ['Oil and gas supplies', 'Pipes and fittings', 'Valves', 'Industrial chemicals'],
  }

  return (
    <html lang={locale} dir={dir(locale)} className={cairo.variable}>
      <body className="bg-white font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:z-[100] focus:rounded-sm focus:bg-brand-700 focus:px-5 focus:py-3 focus:text-sm focus:font-bold focus:text-white focus:start-4"
        >
          {t('skip_to_content', locale)}
        </a>
        <Header locale={locale} />
        <main id="main">{children}</main>
        <Footer locale={locale} />
        <WhatsAppFab locale={locale} />
        <span className="sr-only">{ADDRESS.full[locale]}</span>
      </body>
    </html>
  )
}
