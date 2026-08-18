import Image from 'next/image'
import Link from 'next/link'
import { PRODUCTS } from '@/data/products'
import {
  SITE,
  NAV,
  PHONES,
  FAXES,
  EMAIL,
  WHATSAPP,
  ADDRESS,
  MAP_URL,
  whatsappLink,
} from '@/lib/site'
import { IconWhatsApp } from './Header'
import { DiagonalLines } from './IndustrialArt'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-steel-950 text-steel-400">
      <DiagonalLines className="absolute inset-y-0 left-0 w-1/3 text-white/[0.025]" />
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-l from-transparent via-brand-600 to-transparent" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:py-20">
        {/* عن الشركة */}
        <div className="lg:col-span-4">
          <Link href="/" className="inline-flex items-center">
            <Image
              src="/images/imac-logo-light.png"
              alt={SITE.name}
              width={920}
              height={1127}
              className="h-28 w-auto"
            />
          </Link>
          <p className="mt-6 text-[14px] leading-8">
            {SITE.name} — شركة مصرية متخصصة في توريد مستلزمات ومعدات وقطع غيار صناعة البترول والغاز
            والبتروكيماويات، بمواصفات عالمية ومن مصادر منشأ موثوقة.
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            <a
              href={whatsappLink('السلام عليكم، حابب أستفسر عن منتجاتكم')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm border border-steel-800 px-4 py-2.5 text-[13px] font-bold text-steel-300 transition hover:border-brand-500 hover:bg-brand-700 hover:text-white"
            >
              <IconWhatsApp className="h-4 w-4" />
              واتساب
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 rounded-sm border border-steel-800 px-4 py-2.5 text-[13px] font-bold text-steel-300 transition hover:border-brand-500 hover:bg-brand-700 hover:text-white"
            >
              راسلنا بالبريد
            </a>
          </div>
        </div>

        {/* روابط سريعة */}
        <div className="lg:col-span-2">
          <FooterTitle>روابط سريعة</FooterTitle>
          <ul className="mt-6 space-y-3.5">
            {NAV.map((n) => (
              <li key={n.href}>
                <FooterLink href={n.href}>{n.label}</FooterLink>
              </li>
            ))}
          </ul>
        </div>

        {/* المنتجات */}
        <div className="lg:col-span-3">
          <FooterTitle>فئات المنتجات</FooterTitle>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1 lg:gap-3">
            {PRODUCTS.slice(0, 8).map((p) => (
              <li key={p.slug}>
                <FooterLink href={`/products/${p.slug}`}>{p.nameAr}</FooterLink>
              </li>
            ))}
            <li>
              <Link
                href="/products"
                className="text-[13.5px] font-bold text-brand-400 transition hover:text-brand-300"
              >
                عرض كل الفئات ←
              </Link>
            </li>
          </ul>
        </div>

        {/* بيانات التواصل */}
        <div className="lg:col-span-3">
          <FooterTitle>بيانات التواصل</FooterTitle>
          <ul className="mt-6 space-y-4 text-[13.5px]">
            <li className="flex gap-3">
              <Dot />
              <span>
                <span className="block text-steel-500">تليفون</span>
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
                <span className="block text-steel-500">واتساب</span>
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
                <span className="block text-steel-500">فاكس</span>
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
                <span className="block text-steel-500">البريد الإلكتروني</span>
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
                <span className="block text-steel-500">العنوان</span>
                <a
                  href={MAP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block leading-7 font-semibold text-steel-200 transition hover:text-brand-300"
                >
                  {ADDRESS.ar}
                </a>
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* الشريط السفلي */}
      <div className="relative border-t border-steel-900">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-[12.5px] sm:flex-row sm:px-8">
          <p>
            © {year} {SITE.name}. جميع الحقوق محفوظة.
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

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 text-[13.5px] transition hover:text-brand-300"
    >
      <span className="h-px w-0 bg-brand-500 transition-all duration-300 group-hover:w-3" />
      {children}
    </Link>
  )
}

function Dot() {
  return <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-brand-600" />
}
