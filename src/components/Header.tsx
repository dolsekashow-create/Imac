'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { NAV, PHONES, EMAIL, WHATSAPP, waMsg } from '@/lib/site'
import { PRODUCTS, productName } from '@/data/products'
import { href, switchLocaleHref, t, tx, type Locale } from '@/lib/i18n'
import ProductIcon from './ProductIcons'
import { ADDRESS } from '@/lib/site'

export default function Header({ locale }: { locale: Locale }) {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [menuProducts, setMenuProducts] = useState(false)
  const other: Locale = locale === 'ar' ? 'en' : 'ar'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // إقفال القوائم لما الصفحة تتغيّر — تعديل الحالة أثناء الرندر بدل useEffect
  const [lastPath, setLastPath] = useState(pathname)
  if (lastPath !== pathname) {
    setLastPath(pathname)
    setOpen(false)
    setMenuProducts(false)
  }

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const isActive = (path: string) => {
    const full = href(path, locale)
    return path === '/' ? pathname === full : pathname.startsWith(full)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* الشريط العلوي */}
      <div
        className={`hidden bg-steel-900 text-steel-300 transition-all duration-300 lg:block ${
          scrolled ? 'h-0 overflow-hidden opacity-0' : 'h-10 opacity-100'
        }`}
      >
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-8 text-[13px]">
          <div className="flex items-center gap-6">
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 transition hover:text-brand-300">
              <IconMail className="h-3.5 w-3.5" />
              {EMAIL}
            </a>
            <span className="h-3 w-px bg-steel-700" />
            <span className="flex items-center gap-2">
              <IconPin className="h-3.5 w-3.5" />
              {tx(ADDRESS.short, locale)}
            </span>
          </div>
          <div className="flex items-center gap-5" dir="ltr">
            <a
              href={waMsg('general', locale)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition hover:text-brand-300"
            >
              <IconWhatsApp className="h-3.5 w-3.5" />
              {WHATSAPP.display}
            </a>
            {PHONES.map((p) => (
              <a key={p.tel} href={`tel:${p.tel}`} className="flex items-center gap-2 transition hover:text-brand-300">
                <IconPhone className="h-3.5 w-3.5" />
                {p.display}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* الشريط الرئيسي */}
      <div
        className={`border-b transition-all duration-300 ${
          scrolled
            ? 'border-steel-200 bg-white/95 shadow-sm backdrop-blur-md'
            : 'border-white/10 bg-white/95 backdrop-blur-md lg:border-transparent lg:bg-white/90'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 sm:px-8">
          {/* اللوجو */}
          <Link href={href('/', locale)} className="flex shrink-0 items-center gap-3 py-2.5">
            <Image
              src="/images/imac-mark.png"
              alt={t('brand_full', locale)}
              width={896}
              height={727}
              priority
              className={`w-auto transition-all duration-300 ${scrolled ? 'h-11 sm:h-12' : 'h-13 sm:h-15'}`}
            />
            <span className="hidden border-steel-200 leading-tight sm:block sm:border-s sm:ps-3">
              <span className="block text-[15px] font-extrabold text-steel-900">
                {t('brand_short', locale)}
              </span>
              <span className="block text-[11px] font-medium text-brand-700">
                {t('brand_tagline', locale)}
              </span>
            </span>
          </Link>

          {/* قائمة سطح المكتب */}
          <nav className="hidden items-center gap-0.5 lg:flex">
            {NAV.map((item) =>
              item.path === '/products' ? (
                <div
                  key={item.path}
                  className="relative"
                  onMouseEnter={() => setMenuProducts(true)}
                  onMouseLeave={() => setMenuProducts(false)}
                >
                  <Link
                    href={href(item.path, locale)}
                    className={`flex items-center gap-1.5 px-3.5 py-6 text-[14px] font-bold transition ${
                      isActive(item.path) ? 'text-brand-700' : 'text-steel-700 hover:text-brand-700'
                    }`}
                  >
                    {t(item.key, locale)}
                    <IconChevron className={`h-3 w-3 transition-transform ${menuProducts ? 'rotate-180' : ''}`} />
                  </Link>
                  <span
                    className={`absolute inset-x-3.5 bottom-4 h-0.5 origin-center bg-brand-700 transition-transform duration-300 ${
                      isActive(item.path) ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />

                  <div
                    className={`absolute top-full left-1/2 w-[820px] -translate-x-1/2 transition-all duration-200 ${
                      menuProducts ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0'
                    }`}
                  >
                    <div className="rounded-sm border border-steel-200 bg-white p-3 shadow-2xl shadow-steel-900/10">
                      <div className="grid grid-cols-3 gap-1">
                        {PRODUCTS.map((p) => (
                          <Link
                            key={p.slug}
                            href={href(`/products/${p.slug}`, locale)}
                            className="group flex items-start gap-3 rounded-sm p-3 transition hover:bg-sand-100"
                          >
                            <span className="mt-0.5 text-brand-600 transition group-hover:text-brand-800">
                              <ProductIcon name={p.icon} className="h-5 w-5" />
                            </span>
                            <span className="min-w-0">
                              <span className="block truncate text-[13.5px] font-bold text-steel-800 group-hover:text-brand-800">
                                {productName(p, locale)}
                              </span>
                              <span className="block truncate text-[11px] text-steel-500">
                                {locale === 'ar' ? p.name : tx(p.tagline, locale).slice(0, 34)}
                              </span>
                            </span>
                          </Link>
                        ))}
                      </div>
                      <Link
                        href={href('/products', locale)}
                        className="mt-2 flex items-center justify-center gap-2 rounded-sm bg-steel-900 px-4 py-3 text-[13px] font-bold text-white transition hover:bg-brand-800"
                      >
                        {t('cta_all_categories', locale)}
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.path}
                  href={href(item.path, locale)}
                  className={`relative px-3.5 py-6 text-[14px] font-bold transition ${
                    isActive(item.path) ? 'text-brand-700' : 'text-steel-700 hover:text-brand-700'
                  }`}
                >
                  {t(item.key, locale)}
                  <span
                    className={`absolute inset-x-3.5 bottom-4 h-0.5 origin-center bg-brand-700 transition-transform duration-300 ${
                      isActive(item.path) ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </Link>
              ),
            )}
          </nav>

          <div className="flex items-center gap-2">
            {/* تبديل اللغة */}
            <Link
              href={switchLocaleHref(pathname, other)}
              hrefLang={other}
              aria-label={t('lang_switch_label', locale)}
              title={t('lang_switch_label', locale)}
              className="flex h-11 items-center gap-2 rounded-sm border border-steel-200 px-3 text-[13px] font-bold text-steel-700 transition hover:border-brand-500 hover:bg-brand-50 hover:text-brand-700"
            >
              <IconGlobe className="h-4.5 w-4.5" />
              <span>{t('lang_switch', locale)}</span>
            </Link>

            <Link
              href={href('/contact', locale)}
              className="hidden items-center gap-2 rounded-sm bg-brand-700 px-5 py-3 text-[13px] font-bold text-white transition hover:bg-brand-800 lg:flex"
            >
              <IconPhone className="h-4 w-4" />
              {t('cta_quote', locale)}
            </Link>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? t('menu_close', locale) : t('menu_open', locale)}
              aria-expanded={open}
              className="flex h-11 w-11 items-center justify-center rounded-sm border border-steel-200 text-steel-800 transition hover:border-brand-500 hover:text-brand-700 lg:hidden"
            >
              <span className="relative block h-4 w-5">
                <span className={`absolute inset-x-0 top-0 h-0.5 bg-current transition-all duration-300 ${open ? 'top-1.5 rotate-45' : ''}`} />
                <span className={`absolute inset-x-0 top-1.5 h-0.5 bg-current transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
                <span className={`absolute inset-x-0 top-3 h-0.5 bg-current transition-all duration-300 ${open ? 'top-1.5 -rotate-45' : ''}`} />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* قائمة الموبايل */}
      <div
        className={`fixed inset-0 top-[68px] z-40 overflow-y-auto bg-white transition-all duration-300 lg:hidden ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <nav className="px-5 py-6">
          {NAV.map((item) => (
            <div key={item.path} className="border-b border-steel-100">
              <Link
                href={href(item.path, locale)}
                className={`flex items-center justify-between py-4 text-base font-bold ${
                  isActive(item.path) ? 'text-brand-700' : 'text-steel-800'
                }`}
              >
                {t(item.key, locale)}
                <IconArrowEnd className="h-4 w-4 text-steel-400" />
              </Link>
            </div>
          ))}
          <div className="border-b border-steel-100">
            <Link href={href('/brochure', locale)} className="flex items-center justify-between py-4 text-base font-bold text-steel-800">
              {t('nav_brochure', locale)}
              <IconArrowEnd className="h-4 w-4 text-steel-400" />
            </Link>
          </div>

          <p className="mt-7 mb-3 text-xs font-bold tracking-[0.2em] text-brand-600">
            {t('product_categories', locale)}
          </p>
          <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
            {PRODUCTS.map((p) => (
              <Link
                key={p.slug}
                href={href(`/products/${p.slug}`, locale)}
                className="flex items-center gap-3 rounded-sm border border-steel-100 p-3 text-[13.5px] font-semibold text-steel-700"
              >
                <ProductIcon name={p.icon} className="h-5 w-5 shrink-0 text-brand-600" />
                <span className="truncate">{productName(p, locale)}</span>
              </Link>
            ))}
          </div>

          <div className="mt-8 space-y-2">
            {PHONES.map((p) => (
              <a
                key={p.tel}
                href={`tel:${p.tel}`}
                className="flex items-center justify-center gap-2 rounded-sm bg-brand-700 px-5 py-3.5 text-sm font-bold text-white"
              >
                <IconPhone className="h-4 w-4" />
                <span dir="ltr">{p.display}</span>
              </a>
            ))}
            <a
              href={waMsg('general', locale)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-sm bg-steel-900 px-5 py-3.5 text-sm font-bold text-white"
            >
              <IconWhatsApp className="h-4 w-4" />
              {t('cta_whatsapp', locale)}
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}

/* ------------------------------- أيقونات ------------------------------- */

export function IconGlobe(p: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...p}>
      <circle cx="12" cy="12" r="9.2" />
      <path d="M3 12h18" />
      <ellipse cx="12" cy="12" rx="4" ry="9.2" />
    </svg>
  )
}
function IconPhone(p: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden {...p}>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
    </svg>
  )
}
function IconMail(p: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden {...p}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 7 10 6 10-6" />
    </svg>
  )
}
function IconPin(p: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden {...p}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}
function IconChevron(p: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden {...p}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}
function IconArrowEnd(p: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className={`${p.className ?? ''} rtl:-scale-x-100`}>
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}
export function IconWhatsApp(p: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
      <path d="M17.5 14.4c-.3-.2-1.7-.9-2-1-.3-.1-.5-.2-.7.1s-.7 1-.9 1.2c-.2.2-.3.2-.6.1a8.2 8.2 0 0 1-2.4-1.5 9 9 0 0 1-1.7-2.1c-.2-.3 0-.5.1-.6l.5-.6.3-.5v-.5l-1-2.3c-.2-.6-.4-.5-.6-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2m0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2" />
    </svg>
  )
}
