import type { L, Locale, TKey } from './i18n'

/** بيانات الشركة الأساسية — مصدر واحد لكل الموقع */
export const SITE = {
  name: {
    ar: 'إيماك للإستيراد والتصدير والتوريدات',
    en: 'IMAC for Import & Export and Supplies',
  } as L,
  shortName: { ar: 'إيماك', en: 'IMAC' } as L,
  tagline: { ar: 'خدمات بترولية متكاملة', en: 'Integrated Petroleum Services' } as L,
  description: {
    ar: 'إيماك للإستيراد والتصدير والتوريدات — توريد مستلزمات وقطع غيار صناعة البترول والغاز والبتروكيماويات: مواسير ووصلات وفلانشات، محابس، مصائد بخار، منتجات إحكام، أقراص أمان، كيماويات، أجهزة قياس وتتبع حراري، ومعدات نقل الكتلة.',
    en: 'IMAC for Import & Export and Supplies — supplier of oil, gas and petrochemical materials: pipes and fittings, flanges, tubes, valves, steam traps, rupture discs, sealing products, chemicals, instrumentation and heat tracing.',
  } as L,
  nameEn: 'IMAC for Import & Export and Supplies',
  url: 'https://www.imac-eg.com',
  foundedYear: 2023,
} as const

/** أرقام الهاتف */
export const PHONES = [
  { display: '01002684053', tel: '+201002684053' },
  { display: '01080747510', tel: '+201080747510' },
] as const

/** أرقام الفاكس */
export const FAXES = [
  { display: '0472548291', tel: '+20472548291' },
  { display: '0472549250', tel: '+20472549250' },
] as const

/** الواتساب */
export const WHATSAPP = { display: '01280226210', number: '201280226210' } as const
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP.number}`

/** البريد الإلكتروني */
/** البريد الأساسي — كل أزرار المراسلة ونموذج طلب عرض السعر بتروح عليه */
export const EMAIL = 'info@imac-eg.com'

/** بريد إضافي بيظهر جنب الأساسي في بيانات التواصل */
export const EMAIL_ALT = 'ismail.imacps@gmail.com'

/** كل عناوين البريد — الأساسي الأول */
export const EMAILS = [EMAIL, EMAIL_ALT] as const

/** العنوان */
export const ADDRESS = {
  full: {
    ar: 'محلة دياي — بجوار المجمع المدرسي، دسوق، كفر الشيخ، جمهورية مصر العربية',
    en: 'Mehallet Deyay, near to schools complex, Disuq, Kafr El-Sheikh, Egypt',
  } as L,
  short: { ar: 'دسوق — كفر الشيخ', en: 'Disuq — Kafr El-Sheikh' } as L,
  mapQuery: 'Mehallet+Deyay,+Disuq,+Kafr+El+Sheikh,+Egypt',
} as const

export const MAP_URL = `https://www.google.com/maps/search/?api=1&query=${ADDRESS.mapQuery}`
export const MAP_EMBED_URL = `https://maps.google.com/maps?q=${ADDRESS.mapQuery}&z=13&output=embed`

/** مسار ملف البروشور */
export const BROCHURE_PDF = '/imac-brochure.pdf'

/** الجهة المطوّرة للموقع */
export const DEVELOPER = {
  name: 'Zero-Nine',
  url: 'https://www.zero--nine.online/',
} as const

/** روابط القائمة الرئيسية — المسار بدون بادئة اللغة */
export const NAV: { path: string; key: TKey }[] = [
  { path: '/', key: 'nav_home' },
  { path: '/about', key: 'nav_about' },
  { path: '/clients', key: 'nav_clients' },
  { path: '/products', key: 'nav_products' },
  { path: '/contact', key: 'nav_contact' },
]

/** رابط واتساب مع رسالة جاهزة */
export function whatsappLink(message?: string) {
  return message ? `${WHATSAPP_URL}?text=${encodeURIComponent(message)}` : WHATSAPP_URL
}

/** رابط mailto لطلب عرض سعر */
export function quoteMailto(subject: string, body = '') {
  const params = new URLSearchParams({ subject })
  if (body) params.set('body', body)
  return `mailto:${EMAIL}?${params.toString().replace(/\+/g, '%20')}`
}

/** رسائل واتساب جاهزة حسب اللغة */
export const WA_MSG = {
  general: {
    ar: 'السلام عليكم، حابب أستفسر عن منتجاتكم',
    en: 'Hello, I would like to enquire about your products',
  } as L,
  quote: {
    ar: 'السلام عليكم، حابب أطلب عرض سعر',
    en: 'Hello, I would like to request a quotation',
  } as L,
  item: {
    ar: 'السلام عليكم، محتاج أستفسر عن صنف معيّن',
    en: 'Hello, I need to enquire about a specific item',
  } as L,
  vendor: {
    ar: 'السلام عليكم، حابب أضيف شركتكم لقائمة الموردين',
    en: 'Hello, I would like to add your company to our vendor list',
  } as L,
}

export const waMsg = (k: keyof typeof WA_MSG, l: Locale) => whatsappLink(WA_MSG[k][l])
