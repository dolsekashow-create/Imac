import Image from 'next/image'
import Link from 'next/link'
import { PRODUCTS, productName } from '@/data/products'
import {
  SITE,
  NAV,
  PHONES,
  FAXES,
  EMAIL,
  WHATSAPP,
  ADDRESS,
  MAP_URL,
  waMsg,
  whatsappLink,
} from '@/lib/site'
import { href, t, tx, type Locale } from '@/lib/i18n'
import { IconWhatsApp } from './Header'
import { DiagonalLines } from './IndustrialArt'

export default function Footer({ locale }: { locale: Locale }) {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-steel-950 text-steel-400">
      <DiagonalLines className="absolute inset-y-0 start-0 w-1/3 text-white/[0.025]" />
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-l from-transparent via-brand-600 to-transparent" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:py-20">
        {/* عن الشركة */}
        <div className="lg:col-span-4">
          <Link href={href('/', locale)} className="inline-flex items-center">
            <Image
              src="/images/imac-logo-light.png"
              alt={tx(SITE.name, locale)}
              width={920}
              height={1127}
              className="h-32 w-auto"
            />
          </Link>
          <p className="mt-6 text-[14px] leading-8">
            {tx(SITE.name, locale)} — {t('footer_about', locale)}
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            <a
              href={waMsg('general', locale)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm border border-steel-800 px-4 py-2.5 text-[13px] font-bold text-steel-300 transition hover:border-brand-500 hover:bg-brand-700 hover:text-white"
            >
              <IconWhatsApp className="h-4 w-4" />
              {t('cta_whatsapp', locale)}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 rounded-sm border border-steel-800 px-4 py-2.5 text-[13px] font-bold text-steel-300 transition hover:border-brand-500 hover:bg-brand-700 hover:text-white"
            >
              {t('footer_mail_us', locale)}
            </a>
          </div>
        </div>

        {/* روابط سريعة */}
        <div className="lg:col-span-2">
          <FooterTitle>{t('footer_links', locale)}</FooterTitle>
          <ul className="mt-6 space-y-3.5">
            {NAV.map((n) => (
              <li key={n.path}>
                <FooterLink href={href(n.path, locale)}>{t(n.key, locale)}</FooterLink>
              </li>
            ))}
            <li>
              <FooterLink href={href('/brochure', locale)}>{t('nav_brochure', locale)}</FooterLink>
            </li>
          </ul>
        </div>

        {/* المنتجات */}
        <div className="lg:col-span-3">
          <FooterTitle>{t('product_categories', locale)}</FooterTitle>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {PRODUCTS.slice(0, 8).map((p) => (
              <li key={p.slug}>
                <FooterLink href={href(`/products/${p.slug}`, locale)}>
                  {productName(p, locale)}
                </FooterLink>
              </li>
            ))}
            <li>
              <Link
                href={href('/products', locale)}
                className="text-[13.5px] font-bold text-brand-400 transition hover:text-brand-300"
              >
                {t('cta_view_all', locale)} →
              </Link>
            </li>
          </ul>
        </div>

        {/* بيانات التواصل */}
        <div className="lg:col-span-3">
          <FooterTitle>{t('footer_contact', locale)}</FooterTitle>
          <ul className="mt-6 space-y-4 text-[13.5px]">
            <li className="flex gap-3">
              <Dot />
              <span>
                <span className="block text-steel-500">{t('contact_phone', locale)}</span>
                <span className="mt-1 block space-y-1" dir="ltr">
                  {PHONES.map((p) => (
                    <a
                      key={p.tel}
                      href={`tel:${p.tel}`}
                      className="block text-left font-semibold text-steel-200 transition hover:text-brand-300"
                    >
                      {p.display}
                    </a>
                  ))}
                </span>
              </span>
            </li>
            <li className="flex gap-3">
              <Dot />
              <span>
                <span className="block text-steel-500">{t('contact_whatsapp', locale)}</span>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  dir="ltr"
                  className="mt-1 block text-left font-semibold text-steel-200 transition hover:text-brand-300"
                >
                  {WHATSAPP.display}
                </a>
              </span>
            </li>
            <li className="flex gap-3">
              <Dot />
              <span>
                <span className="block text-steel-500">{t('contact_fax', locale)}</span>
                <span className="mt-1 block space-y-1" dir="ltr">
                  {FAXES.map((f) => (
                    <span key={f.display} className="block text-left font-semibold text-steel-200">
                      {f.display}
                    </span>
                  ))}
                </span>
              </span>
            </li>
            <li className="flex gap-3">
              <Dot />
              <span>
                <span className="block text-steel-500">{t('contact_email', locale)}</span>
                <a
                  href={`mailto:${EMAIL}`}
                  dir="ltr"
                  className="mt-1 block text-left font-semibold break-all text-steel-200 transition hover:text-brand-300"
                >
                  {EMAIL}
                </a>
              </span>
            </li>
            <li className="flex gap-3">
              <Dot />
              <span>
                <span className="block text-steel-500">{t('contact_address', locale)}</span>
                <a
                  href={MAP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block leading-7 font-semibold text-steel-200 transition hover:text-brand-300"
                >
                  {tx(ADDRESS.full, locale)}
                </a>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-steel-900">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-[12.5px] sm:flex-row sm:px-8">
          <p>
            © {year} {tx(SITE.name, locale)}. {t('footer_rights', locale)}
          </p>
          <p className="text-steel-600">{SITE.nameEn}</p>
        </div>
      </div>
    </footer>
  )
}

function FooterTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="relative text-[15px] font-extrabold text-white">
      {children}
      <span className="mt-3 block h-0.5 w-9 bg-brand-600" />
    </h3>
  )
}

function FooterLink({ href: to, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={to} className="group inline-flex items-center gap-2 text-[13.5px] transition hover:text-brand-300">
      <span className="h-px w-0 bg-brand-500 transition-all duration-300 group-hover:w-3" />
      {children}
    </Link>
  )
}

function Dot() {
  return <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-brand-600" />
}
