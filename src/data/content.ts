import type { L } from '@/lib/i18n'

/**
 * نصوص الموقع القابلة للتعديل — غيّر من هنا بدل ما تدخل على الصفحات
 * كل نص له نسخة عربي ونسخة إنجليزي
 */

export const VISION = {
  title: { ar: 'رؤيتنا', en: 'Our Vision' } as L,
  body: {
    ar: 'أن نكون الاسم الأول الذي تثق به شركات البترول والغاز والبتروكيماويات في مصر عند توريد مستلزمات الحفر والإنتاج والتكرير، بسمعة مبنية على الالتزام والجودة والشفافية.',
    en: 'To be the first name trusted by oil, gas and petrochemical companies in Egypt for drilling, production and refining supplies — with a reputation built on commitment, quality and transparency.',
  } as L,
}

export const MISSION = {
  title: { ar: 'رسالتنا', en: 'Our Mission' } as L,
  body: {
    ar: 'أن نوفّر لعملائنا أحدث المنتجات وخامات المنشأ الأصلية بأعلى معايير الجودة والسلامة، وأن تكون متاحة بأفضل الأسعار الممكنة ومسلَّمة في أقصر وقت، مع وعي كامل بمتطلبات البيئة والسلامة المهنية.',
    en: 'To provide our clients with the latest products and genuine origin materials at the highest quality and safety standards — available at the best possible prices and delivered in the shortest time, with full awareness of environmental and occupational safety requirements.',
  } as L,
}

export const VALUES = {
  title: { ar: 'قيمنا', en: 'Our Values' } as L,
  body: {
    ar: 'الموثوقية، والإنجاز، والاهتمام بالعنصر البشري، وتحمّل المسؤولية، والشراكة الحقيقية، والاحترام المتبادل مع كل من نتعامل معه.',
    en: 'Reliability, achievement, care for our people, responsibility, genuine partnership, and mutual respect with everyone we work with.',
  } as L,
}

export const WELCOME = {
  title: { ar: 'كلمة ترحيب', en: 'Welcome Message' } as L,
  body: [
    {
      ar: 'يسعدنا أن نُعرّف بشركتنا لديكم كأحد الموردين المتخصصين العاملين في مجال البترول والغاز في جمهورية مصر العربية.',
      en: 'It is our pleasure to introduce our company to you as one of the specialised suppliers operating in the oil and gas field in the Arab Republic of Egypt.',
    } as L,
    {
      ar: 'نحن متخصصون بشكل أساسي في توريد مستلزمات مشروعات البترول والغاز — من عمليات الحفر والإنتاج، إلى المصافي ومحطات معالجة الغاز ومجمعات البتروكيماويات — بمنتجات مطابقة للمواصفات العالمية ومن مصادر منشأ موثوقة.',
      en: 'We specialise primarily in supplying oil and gas project requirements — from drilling and production operations, to refineries, gas processing plants and petrochemical complexes — with products conforming to international standards and sourced from trusted origins.',
    } as L,
  ],
  signature: {
    ar: 'إدارة إيماك للإستيراد والتصدير والتوريدات',
    en: 'Management — IMAC for Import & Export and Supplies',
  } as L,
}

/**
 * أرقام الإحصائيات — عدّل القيم من هنا
 * كل الأرقام دي حقيقية ومستخرجة من بيانات الشركة والموقع
 */
export const STATS: { value: number; suffix: string; label: L }[] = [
  { value: 2023, suffix: '', label: { ar: 'سنة التأسيس', en: 'Established' } },
  { value: 13, suffix: '', label: { ar: 'فئة منتجات رئيسية', en: 'Product Categories' } },
  { value: 228, suffix: '', label: { ar: 'صنف كيماويات', en: 'Chemical Products' } },
  { value: 4, suffix: '', label: { ar: 'مواصفات دولية نعمل بها', en: 'International Standards' } },
]

export const ABOUT = {
  intro: [
    {
      ar: 'إيماك شركة خدمات وتوريدات متخصصة، تركّز على توريد منتجات عالية الجودة بجميع الأنواع ودرجات الضغط لصناعة حقول البترول والغاز.',
      en: 'IMAC is a highly service & supplying company focused on supplying high quality products of all types and ratings for the oil & gas field industry.',
    } as L,
    {
      ar: 'إيماك شركة توريدات وخدمات لديها إدارة مبيعات تخدم صناعات البترول والغاز. تأسست الشركة عام 2023 تحت مظلة الهيئة المصرية العامة للبترول (EGPC).',
      en: 'IMAC is a supply & services company with a Sales Department which services the oil & gas industries. The company was established in 2023 under the umbrella of The Egyptian General Petroleum Corporation (EGPC).',
    } as L,
    {
      ar: 'إيماك مسجّلة لدى معظم شركات البترول المصرية، ومشاركة في مشروعات دولية متنوعة متعلقة بصناعة البترول والغاز وهندسة الطاقة.',
      en: 'IMAC is registered in most of the Egyptian petroleum companies and involved in various international projects related to the oil & gas industry and power engineering.',
    } as L,
  ],
  experienceTitle: {
    ar: 'خبرة فنية وتوريد دولي',
    en: 'Technical Expertise & International Sourcing',
  } as L,
  experienceBody: {
    ar: 'نتعامل مع شبكة من المصانع والموردين المعتمدين في أوروبا وآسيا والشرق الأوسط، ونورّد وفقاً للمواصفات العالمية ASTM وAPI وDIN وEN، مع شهادات المنشأ وتقارير الاختبار المعتمدة (MTC / EN 10204 3.1) لكل شحنة.',
    en: 'We work with a network of approved mills and suppliers across Europe, Asia and the Middle East, supplying to ASTM, API, DIN and EN standards — with certificates of origin and approved test reports (MTC / EN 10204 3.1) for every shipment.',
  } as L,
}

export const WHY_US: { title: L; body: L }[] = [
  {
    title: { ar: 'مطابقة كاملة للمواصفات', en: 'Full Specification Compliance' },
    body: {
      ar: 'كل صنف يُورَّد بمواصفة مُحددة — ASTM، API، DIN، EN — ومعه شهادة المنشأ وتقرير الاختبار المعتمد.',
      en: 'Every item is supplied to a defined standard — ASTM, API, DIN, EN — with its certificate of origin and approved test report.',
    },
  },
  {
    title: { ar: 'مصادر توريد موثوقة', en: 'Trusted Supply Sources' },
    body: {
      ar: 'علاقات مباشرة مع المصانع والموردين المعتمدين، بما يضمن الخامة الأصلية والسعر التنافسي.',
      en: 'Direct relationships with approved mills and suppliers, ensuring genuine material at a competitive price.',
    },
  },
  {
    title: { ar: 'استجابة سريعة للعروض', en: 'Fast Quotation Turnaround' },
    body: {
      ar: 'ندرس الطلب فنياً ونرد بعرض سعر مُفصّل في أقصر وقت، مع بدائل مكافئة عند الحاجة.',
      en: 'We review each request technically and reply with a detailed quotation quickly, offering equivalent alternatives where needed.',
    },
  },
  {
    title: { ar: 'تغطية دورة التوريد كاملة', en: 'End-to-End Supply Coverage' },
    body: {
      ar: 'من أمر الشراء والاستيراد والتخليص الجمركي وحتى التسليم في موقع العمل.',
      en: 'From purchase order, import and customs clearance, through to delivery at the work site.',
    },
  },
  {
    title: { ar: 'دعم فني قبل وبعد التوريد', en: 'Technical Support Before & After' },
    body: {
      ar: 'مساعدة في اختيار الخامة والمقاس المناسب للتطبيق، ومتابعة بعد التسليم.',
      en: 'Help selecting the right material and size for the application, plus follow-up after delivery.',
    },
  },
  {
    title: { ar: 'التزام بالسلامة والبيئة', en: 'Safety & Environmental Commitment' },
    body: {
      ar: 'التعامل مع الكيماويات والمواد الخطرة وفق اشتراطات التداول والنقل والتخزين الآمن.',
      en: 'Chemicals and hazardous materials handled per safe handling, transport and storage requirements.',
    },
  },
]

/** القطاعات التي نخدمها */
export const SECTORS: { title: L; body: L }[] = [
  {
    title: { ar: 'الحفر والإنتاج', en: 'Drilling & Production' },
    body: {
      ar: 'توريد مستلزمات مواقع الحفر ووحدات الإنتاج من مواسير ومحابس وأجهزة قياس ومنتجات إحكام.',
      en: 'Supplying drilling sites and production units with pipes, valves, instrumentation and sealing products.',
    },
  },
  {
    title: { ar: 'المصافي ومعامل التكرير', en: 'Refineries' },
    body: {
      ar: 'صواني وحشوات الأبراج، والمبادلات الحرارية، وخطوط المعالجة، ومنظومات البخار.',
      en: 'Tower trays and packing, heat exchangers, process lines and steam systems.',
    },
  },
  {
    title: { ar: 'محطات معالجة الغاز', en: 'Gas Processing Plants' },
    body: {
      ar: 'وحدات الفصل والتجفيف وخطوط النقل ومعدات الأمان وأقراص الانفجار.',
      en: 'Separation and dehydration units, transfer lines, safety equipment and rupture discs.',
    },
  },
  {
    title: { ar: 'البتروكيماويات', en: 'Petrochemicals' },
    body: {
      ar: 'محابس وخامات مقاومة للتآكل، وكيماويات المعالجة، وخراطيم نقل المواد الكيميائية.',
      en: 'Corrosion-resistant valves and materials, process chemicals and chemical transfer hoses.',
    },
  },
  {
    title: { ar: 'محطات الطاقة والغلايات', en: 'Power Plants & Boilers' },
    body: {
      ar: 'أنابيب الغلايات والمكثّفات، ومصائد البخار، وسبائك الكروم–موليبدنم عالية الحرارة.',
      en: 'Boiler and condenser tubes, steam traps, and high-temperature chrome-moly alloys.',
    },
  },
  {
    title: { ar: 'الأسمدة والصناعات الكيماوية', en: 'Fertilisers & Chemical Industries' },
    body: {
      ar: 'خطوط الإنتاج والمعالجة، ومنتجات الإحكام، والكيماويات الصناعية بكميات المصانع.',
      en: 'Production and process lines, sealing products, and industrial chemicals in plant quantities.',
    },
  },
  {
    title: { ar: 'مقاولو التركيبات الميكانيكية', en: 'Mechanical Contractors' },
    body: {
      ar: 'دعم المقاولين بخامات المشروعات والبلك ماتيريال بجداول تسليم مرتبطة ببرنامج التنفيذ.',
      en: 'Supporting contractors with project materials and bulk material on schedules tied to the execution programme.',
    },
  },
  {
    title: { ar: 'ورش التصنيع والصيانة', en: 'Fabrication & Maintenance Workshops' },
    body: {
      ar: 'ألواح وصاج وبارات وقيعان مقبّبة وخامات التصنيع بمختلف الدرجات.',
      en: 'Plates, sheets, bars, dished ends and fabrication materials in various grades.',
    },
  },
]

/** ما يحصل عليه العميل */
export const CLIENT_PROMISE: { step: string; title: L; body: L }[] = [
  {
    step: '01',
    title: { ar: 'دراسة الطلب فنياً', en: 'Technical Review' },
    body: {
      ar: 'نراجع المواصفة والمقاس ودرجة الضغط والخامة، ونقترح البديل المكافئ إن كان الصنف الأصلي غير متاح.',
      en: 'We review the specification, size, pressure rating and material, and propose an equivalent alternative if the original item is unavailable.',
    },
  },
  {
    step: '02',
    title: { ar: 'عرض سعر مُفصّل', en: 'Detailed Quotation' },
    body: {
      ar: 'عرض واضح بالبنود والمواصفات ومدة التوريد وشروط الدفع — بدون بنود مبهمة.',
      en: 'A clear offer with line items, specifications, lead time and payment terms — no hidden clauses.',
    },
  },
  {
    step: '03',
    title: { ar: 'التوريد والمستندات', en: 'Supply & Documentation' },
    body: {
      ar: 'تنفيذ أمر الشراء مع شهادات المنشأ وتقارير الاختبار وكل مستندات الشحن والجمارك.',
      en: 'Executing the purchase order with certificates of origin, test reports and all shipping and customs documents.',
    },
  },
  {
    step: '04',
    title: { ar: 'التسليم والمتابعة', en: 'Delivery & Follow-Up' },
    body: {
      ar: 'التسليم في الموقع المتفق عليه، ومتابعة بعد التوريد لأي دعم فني أو طلبات تكميلية.',
      en: 'Delivery to the agreed location, with post-supply follow-up for technical support or additional requirements.',
    },
  },
]

/** التزاماتنا تجاه العميل */
export const COMMITMENTS: L[] = [
  {
    ar: 'وضوح كامل في المواصفة والخامة ومصدر التوريد قبل التعاقد.',
    en: 'Full clarity on specification, material and supply source before contracting.',
  },
  {
    ar: 'مستندات مطابقة: شهادة منشأ + تقرير اختبار لكل شحنة.',
    en: 'Compliant documentation: certificate of origin and test report for every shipment.',
  },
  {
    ar: 'الالتزام بمدة التوريد المتفق عليها والإبلاغ الفوري بأي تغيّر.',
    en: 'Commitment to the agreed lead time, with immediate notice of any change.',
  },
  {
    ar: 'سرية تامة لبيانات المشروعات وقوائم الأصناف الخاصة بالعميل.',
    en: 'Complete confidentiality of client project data and item lists.',
  },
  {
    ar: 'دعم فني بعد التوريد وتوفير الأصناف التكميلية عند الحاجة.',
    en: 'Technical support after supply and provision of additional items when needed.',
  },
]

/** المواصفات القياسية */
export const STANDARDS: { code: string; body: L }[] = [
  {
    code: 'ASTM',
    body: {
      ar: 'المواصفات الأمريكية للخامات والاختبارات',
      en: 'American standards for materials and testing',
    },
  },
  {
    code: 'API',
    body: {
      ar: 'مواصفات معهد البترول الأمريكي لخطوط الأنابيب والمعدات',
      en: 'American Petroleum Institute standards for pipelines and equipment',
    },
  },
  {
    code: 'DIN / EN',
    body: {
      ar: 'المواصفات الألمانية والأوروبية للمواسير والأنابيب',
      en: 'German and European standards for pipes and tubes',
    },
  },
  {
    code: 'ANSI / ASME',
    body: {
      ar: 'درجات الضغط وأبعاد الفلانشات والمحابس',
      en: 'Pressure ratings and dimensions for flanges and valves',
    },
  },
  {
    code: 'EN 10204 3.1',
    body: {
      ar: 'شهادات الاختبار المعتمدة لكل شحنة',
      en: 'Approved inspection certificates for each shipment',
    },
  },
  {
    code: 'MTC',
    body: {
      ar: 'تقارير اختبار الخامة مع بيانات التحليل الكيميائي',
      en: 'Material test reports with chemical analysis data',
    },
  },
]

/**
 * لوجوهات العملاء — أضف الشعارات هنا وسيظهر القسم تلقائياً
 * مثال: { name: 'اسم الشركة', logo: '/images/clients/company.png' }
 */
export const CLIENT_LOGOS: { name: string; logo: string }[] = []
