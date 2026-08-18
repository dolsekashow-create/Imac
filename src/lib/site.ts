/** بيانات الشركة الأساسية — مصدر واحد لكل الموقع */
export const SITE = {
  name: 'إيماك للإستيراد والتصدير والتوريدات',
  shortName: 'إيماك',
  nameEn: 'IMAC for Import & Export and Supplies',
  shortNameEn: 'IMAC',
  tagline: 'خدمات بترولية متكاملة',
  taglineEn: 'Integrated Petroleum Services',
  url: 'https://www.imac-eg.com',
  description:
    'إيماك للإستيراد والتصدير والتوريدات — توريد مستلزمات وقطع غيار صناعة البترول والغاز والبتروكيماويات: مواسير ووصلات وفلانشات، محابس، مصائد بخار، منتجات إحكام، أقراص أمان، كيماويات، أجهزة قياس وتتبع حراري، ومعدات نقل الكتلة.',
  descriptionEn:
    'IMAC for Import & Export and Supplies — supplier of oil, gas and petrochemical materials: pipes and fittings, flanges, tubes, valves, steam traps, rupture discs, sealing products, chemicals, instrumentation and heat tracing.',
  locale: 'ar_EG',
  foundedYear: 2015,
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
export const EMAIL = 'ismail.imacps@gmail.com'

/** العنوان */
export const ADDRESS = {
  ar: 'محلة دياي — بجوار المجمع المدرسي، دسوق، كفر الشيخ، جمهورية مصر العربية',
  en: 'Mehallet Deyay, near to schools complex, Disuq, Kafr El-Sheikh, Egypt',
  city: 'دسوق',
  governorate: 'كفر الشيخ',
  mapQuery: 'Mehallet+Deyay,+Disuq,+Kafr+El+Sheikh,+Egypt',
} as const

export const MAP_URL = `https://www.google.com/maps/search/?api=1&query=${ADDRESS.mapQuery}`
export const MAP_EMBED_URL = `https://maps.google.com/maps?q=${ADDRESS.mapQuery}&z=13&output=embed`

/** روابط القائمة الرئيسية */
export const NAV = [
  { href: '/', label: 'الرئيسية' },
  { href: '/about', label: 'من نحن' },
  { href: '/clients', label: 'عملاؤنا' },
  { href: '/products', label: 'منتجاتنا' },
  { href: '/contact', label: 'اتصل بنا' },
] as const

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
