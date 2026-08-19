/**
 * أيقونات الخدمات الأربعة — نفس الترتيب الموجود أسفل اللوجو
 * إستيراد · تصدير · توريدات · خدمات بترولية
 */

type P = { className?: string }

const s = {
  viewBox: '0 0 48 48',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
}

/** إستيراد — سفينة حاويات */
export function IconImport(p: P) {
  return (
    <svg {...s} {...p}>
      <path d="M6 31h36l-4.5 9a3 3 0 0 1-2.7 1.7H13.2a3 3 0 0 1-2.7-1.7z" />
      <path d="M10 31v-8h28v8" />
      <path d="M17 23v-6h7v6M24 23v-9h7v9" />
      <path d="M31 14V9h-4" />
      <path d="M3 44c2.4 0 2.4-2 4.8-2s2.4 2 4.8 2 2.4-2 4.8-2 2.4 2 4.8 2 2.4-2 4.8-2 2.4 2 4.8 2 2.4-2 4.8-2 2.4 2 4.8 2" opacity=".55" />
    </svg>
  )
}

/** تصدير — شاحنة نقل */
export function IconExport(p: P) {
  return (
    <svg {...s} {...p}>
      <path d="M4 12h24v22H4z" />
      <path d="M28 19h7.5l6.5 7v8h-14z" />
      <circle cx="13" cy="37" r="4" />
      <circle cx="34" cy="37" r="4" />
      <path d="M17 34h13M4 34h5" />
      <path d="M31 22v4h6.5" />
    </svg>
  )
}

/** توريدات — ترس مع قطرة */
export function IconSupplies(p: P) {
  return (
    <svg {...s} {...p}>
      <path d="M24 6.5 27 9a15.9 15.9 0 0 1 4.4 1.8l3.9-.9 3.8 6.6-2.9 2.8a16 16 0 0 1 0 4.6l2.9 2.8-3.8 6.6-3.9-.9A15.9 15.9 0 0 1 27 39l-.9 3.9h-7.6L17.6 39a15.9 15.9 0 0 1-4.4-1.8l-3.9.9-3.8-6.6 2.9-2.8a16 16 0 0 1 0-4.6l-2.9-2.8 3.8-6.6 3.9.9A15.9 15.9 0 0 1 17.6 9l.9-3.9h5.1z" />
      <path d="M24 17.5s5 5.6 5 8.9a5 5 0 1 1-10 0c0-3.3 5-8.9 5-8.9z" />
    </svg>
  )
}

/** خدمات بترولية — فني وترس */
export function IconPetroServices(p: P) {
  return (
    <svg {...s} {...p}>
      <path d="M11 15a9 9 0 0 1 18 0" />
      <path d="M8.5 15h23" />
      <circle cx="20" cy="21.5" r="5.5" />
      <path d="M5 42v-3.5C5 33 11.7 30 20 30c2.2 0 4.3.2 6.1.6" />
      <circle cx="35.5" cy="35.5" r="6.5" />
      <path d="M35.5 26.5v3M35.5 41.5v3M44.5 35.5h-3M29.5 35.5h-3M41.9 29.1l-2.1 2.1M31.2 39.8l-2.1 2.1M41.9 41.9l-2.1-2.1M31.2 31.2l-2.1-2.1" />
    </svg>
  )
}

export const SERVICES = [
  {
    key: 'import',
    title: { ar: 'إستيراد', en: 'Import' },
    body: {
      ar: 'استيراد الخامات والمعدات من المصانع والموردين المعتمدين حول العالم، مع كل إجراءات الشحن والتخليص.',
      en: 'Importing materials and equipment from approved mills and suppliers worldwide, including all shipping and clearance procedures.',
    },
    Icon: IconImport,
  },
  {
    key: 'export',
    title: { ar: 'تصدير', en: 'Export' },
    body: {
      ar: 'تصدير المنتجات والخامات المصرية للأسواق الخارجية بمستندات ومواصفات مطابقة لمتطلبات كل سوق.',
      en: 'Exporting Egyptian products and materials to overseas markets with documentation and specifications matching each market.',
    },
    Icon: IconExport,
  },
  {
    key: 'supplies',
    title: { ar: 'توريدات', en: 'Supplies' },
    body: {
      ar: 'توريد مستلزمات المشروعات والمصانع من قطعة واحدة حتى بلك ماتيريال المشروعات الكبرى.',
      en: 'Supplying project and plant requirements, from a single piece to bulk material for major projects.',
    },
    Icon: IconSupplies,
  },
  {
    key: 'services',
    title: { ar: 'خدمات بترولية', en: 'Petroleum Services' },
    body: {
      ar: 'دعم فني في اختيار الخامة والمواصفة المناسبة لكل تطبيق، ومتابعة قبل وبعد التوريد.',
      en: 'Technical support selecting the right material and specification for each application, with follow-up before and after supply.',
    },
    Icon: IconPetroServices,
  },
] as const
