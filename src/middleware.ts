import { NextResponse, type NextRequest } from 'next/server'
import { LOCALES, DEFAULT_LOCALE } from '@/lib/i18n'

/** أي رابط من غير بادئة لغة بيتحوّل للغة الافتراضية */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  const hasLocale = LOCALES.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`))
  if (hasLocale) return NextResponse.next()

  // لو المتصفح بيفضّل الإنجليزي، ودّيه على النسخة الإنجليزية
  const accept = request.headers.get('accept-language') ?? ''
  const prefersEn = /^en\b/i.test(accept.split(',')[0]?.trim() ?? '')
  const locale = prefersEn ? 'en' : DEFAULT_LOCALE

  const url = request.nextUrl.clone()
  url.pathname = `/${locale}${pathname === '/' ? '' : pathname}`
  return NextResponse.redirect(url)
}

export const config = {
  // استثناء ملفات النظام والملفات الثابتة (زي البروشور والصور)
  matcher: ['/((?!_next|api|.*\\.).*)'],
}
