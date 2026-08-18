import type { Metadata, Viewport } from 'next'
import { Cairo } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFab from '@/components/WhatsAppFab'
import { SITE, EMAIL, PHONES, ADDRESS } from '@/lib/site'

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-cairo',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.shortName} | ${SITE.tagline} — ${SITE.name}`,
    template: `%s | ${SITE.shortName}`,
  },
  description: SITE.description,
  keywords: [
    'إيماك',
    'IMAC',
    'توريدات بترولية',
    'مواسير وفلانشات',
    'محابس',
    'مصائد بخار',
    'جوانات',
    'كيماويات صناعية',
    'استيراد وتصدير',
    'دسوق',
    'كفر الشيخ',
    'oil and gas supplier Egypt',
  ],
  authors: [{ name: SITE.nameEn }],
  openGraph: {
    type: 'website',
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.shortName} — ${SITE.tagline}`,
    description: SITE.description,
    images: [{ url: '/images/og.jpg', width: 1200, height: 630, alt: SITE.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.shortName} — ${SITE.tagline}`,
    description: SITE.description,
    images: ['/images/og.jpg'],
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: '#6e4b33',
  width: 'device-width',
  initialScale: 1,
}

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE.name,
  alternateName: SITE.nameEn,
  url: SITE.url,
  logo: `${SITE.url}/images/imac-logo.png`,
  description: SITE.description,
  email: EMAIL,
  telephone: PHONES.map((p) => p.tel),
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Mehallet Deyay, near to schools complex',
    addressLocality: 'Disuq',
    addressRegion: 'Kafr El-Sheikh',
    addressCountry: 'EG',
  },
  areaServed: 'EG',
  knowsAbout: [
    'Oil and gas supplies',
    'Pipes and fittings',
    'Valves',
    'Industrial chemicals',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body className="bg-white font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:right-4 focus:z-[100] focus:rounded-sm focus:bg-brand-700 focus:px-5 focus:py-3 focus:text-sm focus:font-bold focus:text-white"
        >
          تخطَّ إلى المحتوى
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppFab />
        <span className="sr-only">{ADDRESS.ar}</span>
      </body>
    </html>
  )
}
