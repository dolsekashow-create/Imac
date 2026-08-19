/**
 * نظام اللغتين — عربي / إنجليزي
 * كل نص في الواجهة له نسختين، والاختيار بيتم حسب الـ locale في الرابط
 */

export const LOCALES = ['ar', 'en'] as const
export type Locale = (typeof LOCALES)[number]
export const DEFAULT_LOCALE: Locale = 'ar'

/** نص بلغتين */
export type L = { ar: string; en: string }

export const isRtl = (l: Locale) => l === 'ar'
export const dir = (l: Locale) => (isRtl(l) ? 'rtl' : 'ltr')

/** يقرأ النص المناسب للغة */
export function tx(v: L, l: Locale): string {
  return v[l]
}

export function isLocale(v: string): v is Locale {
  return (LOCALES as readonly string[]).includes(v)
}

/** يبني رابط داخلي مع بادئة اللغة */
export function href(path: string, l: Locale): string {
  const clean = path === '/' ? '' : path
  return `/${l}${clean}`
}

/** الرابط المقابل في اللغة التانية */
export function switchLocaleHref(pathname: string, to: Locale): string {
  const parts = pathname.split('/').filter(Boolean)
  if (parts.length && isLocale(parts[0])) parts[0] = to
  else parts.unshift(to)
  return '/' + parts.join('/')
}

/* ============================ نصوص الواجهة ============================ */

export const T = {
  /* --- التنقل --- */
  nav_home: { ar: 'الرئيسية', en: 'Home' },
  nav_about: { ar: 'من نحن', en: 'About Us' },
  nav_clients: { ar: 'عملاؤنا', en: 'Clients' },
  nav_products: { ar: 'منتجاتنا', en: 'Products' },
  nav_contact: { ar: 'اتصل بنا', en: 'Contact Us' },
  nav_brochure: { ar: 'البروشور', en: 'Brochure' },

  brand_short: { ar: 'إيماك', en: 'IMAC' },
  brand_tagline: { ar: 'خدمات بترولية متكاملة', en: 'Integrated Petroleum Services' },
  brand_full: {
    ar: 'إيماك للإستيراد والتصدير والتوريدات',
    en: 'IMAC for Import & Export and Supplies',
  },

  cta_quote: { ar: 'اطلب عرض سعر', en: 'Request a Quote' },
  cta_call: { ar: 'اتصل الآن', en: 'Call Now' },
  cta_whatsapp: { ar: 'واتساب', en: 'WhatsApp' },
  cta_email: { ar: 'إرسال بريد', en: 'Send Email' },
  cta_contact: { ar: 'تواصل معنا', en: 'Contact Us' },
  cta_details: { ar: 'التفاصيل', en: 'Details' },
  cta_details_specs: { ar: 'التفاصيل والمواصفات', en: 'Details & Specifications' },
  cta_browse_products: { ar: 'تصفّح المنتجات', en: 'Browse Products' },
  cta_learn_more: { ar: 'اعرف أكثر عن الشركة', en: 'Learn More About Us' },
  cta_all_categories: { ar: 'عرض كل فئات المنتجات', en: 'View All Product Categories' },
  cta_view_all: { ar: 'عرض كل الفئات', en: 'View all categories' },
  cta_sectors: { ar: 'القطاعات التي نخدمها', en: 'Sectors We Serve' },
  cta_contact_page: { ar: 'صفحة التواصل', en: 'Contact Page' },

  menu_open: { ar: 'فتح القائمة', en: 'Open menu' },
  menu_close: { ar: 'إغلاق القائمة', en: 'Close menu' },
  product_categories: { ar: 'فئات المنتجات', en: 'Product Categories' },
  skip_to_content: { ar: 'تخطَّ إلى المحتوى', en: 'Skip to content' },
  breadcrumb_home: { ar: 'الرئيسية', en: 'Home' },
  lang_switch: { ar: 'English', en: 'العربية' },
  lang_switch_label: { ar: 'Switch to English', en: 'التبديل إلى العربية' },
  back_to_top: { ar: 'العودة لأعلى الصفحة', en: 'Back to top' },
  contact_whatsapp_label: { ar: 'تواصل معنا على واتساب', en: 'Contact us on WhatsApp' },

  /* --- الهيرو --- */
  hero1_eyebrow: {
    ar: 'إيماك للإستيراد والتصدير والتوريدات',
    en: 'IMAC for Import & Export and Supplies',
  },
  hero1_title: {
    ar: 'خدمات بترولية متكاملة\nمن مصدر واحد موثوق',
    en: 'Integrated Petroleum Services\nFrom One Trusted Source',
  },
  hero1_body: {
    ar: 'نورّد مستلزمات ومعدات وقطع غيار صناعة البترول والغاز والبتروكيماويات بمواصفات عالمية ومن مصادر منشأ معتمدة.',
    en: 'We supply materials, equipment and spare parts for the oil, gas and petrochemical industries — to international standards and from approved origin sources.',
  },
  hero2_eyebrow: { ar: 'جودة مطابقة للمواصفات', en: 'Certified Quality' },
  hero2_title: {
    ar: 'ASTM · API · DIN · EN\nمع شهادات المنشأ والاختبار',
    en: 'ASTM · API · DIN · EN\nWith Origin & Test Certificates',
  },
  hero2_body: {
    ar: 'كل صنف يُورَّد بمواصفته المحددة ومعه شهادة المنشأ وتقرير الاختبار المعتمد لكل شحنة.',
    en: 'Every item is supplied to its specified standard, with a certificate of origin and an approved test report for each shipment.',
  },
  hero3_eyebrow: { ar: 'أفضل الخدمات لأفضل العملاء', en: 'The Best Service for the Best Clients' },
  hero3_title: {
    ar: 'من دراسة المواصفة\nحتى التسليم في الموقع',
    en: 'From Specification Review\nTo On-Site Delivery',
  },
  hero3_body: {
    ar: 'ندير دورة التوريد كاملة — العرض الفني، أمر الشراء، الاستيراد والتخليص، ثم التسليم في موعده.',
    en: 'We manage the full supply cycle — technical offer, purchase order, import and customs clearance, then on-time delivery.',
  },
  hero_slide: { ar: 'الشريحة', en: 'Slide' },
  hero_scroll: { ar: 'انتقل للأسفل', en: 'Scroll down' },

  /* --- الرئيسية --- */
  home_about_eyebrow: { ar: 'من نحن', en: 'About Us' },
  home_about_title: {
    ar: 'نبني علاقات طويلة الأمد قائمة على الثقة',
    en: 'We Build Long-Term Relationships Based on Trust',
  },
  home_about_sub: {
    ar: 'نؤمن أن قيمة أي توريد لا تُقاس بالصفقة الواحدة، بل بقدرة العميل على الاعتماد علينا في كل مرة.',
    en: 'We believe the value of any supply is not measured by a single deal, but by our clients being able to rely on us every time.',
  },
  home_products_eyebrow: { ar: 'منتجاتنا', en: 'Our Products' },
  home_products_title: {
    ar: 'فئات نورّدها لصناعة البترول والغاز',
    en: 'Categories We Supply to the Oil & Gas Industry',
  },
  home_products_sub: {
    ar: 'من المواسير والفلانشات والمحابس، إلى معدات نقل الكتلة والكيماويات وأنظمة التتبّع الحراري — كل الأصناف بمواصفاتها وخاماتها.',
    en: 'From pipes, flanges and valves, to mass transfer equipment, chemicals and heat tracing systems — every item with its specifications and materials.',
  },
  home_why_eyebrow: { ar: 'لماذا إيماك', en: 'Why IMAC' },
  home_why_title: {
    ar: 'الفرق في التفاصيل التي تحمي مشروعك',
    en: 'The Difference Is in the Details That Protect Your Project',
  },
  home_why_sub: {
    ar: 'التوريد الصحيح هو الصنف الصحيح بالمواصفة الصحيحة في الوقت الصحيح — وده اللي بنشتغل عليه.',
    en: 'Correct supply means the right item, to the right specification, at the right time — that is what we work on.',
  },
  home_exp_eyebrow: { ar: 'عن إيماك', en: 'About IMAC' },
  home_exp_title: {
    ar: 'شريك توريد يفهم المواصفة الفنية',
    en: 'A Supply Partner That Understands the Technical Spec',
  },
  home_cta_title: {
    ar: 'عندك قائمة أصناف أو مواصفة محتاج تسعيرها؟',
    en: 'Have an item list or specification you need priced?',
  },
  home_cta_body: {
    ar: 'ابعتلنا الطلب وهنرد عليك بعرض سعر مُفصّل بالمواصفات ومدة التوريد.',
    en: 'Send us your request and we will reply with a detailed quotation including specifications and lead time.',
  },
  panel_est: { ar: 'EST. IN EGYPT', en: 'EST. IN EGYPT' },
  panel_line: {
    ar: 'نخدم قطاعات الحفر والإنتاج\nوالتكرير ومعالجة الغاز',
    en: 'Serving drilling, production,\nrefining and gas processing',
  },
  panel_line_accent: { ar: 'والبتروكيماويات', en: 'and petrochemicals' },
  panel_standards: { ar: 'مواصفات نعمل بها', en: 'Standards we work to' },
  panel_certs: { ar: 'شهادات الاختبار', en: 'Test certificates' },

  /* --- من نحن --- */
  about_hero_sub: {
    ar: 'شركة متخصصة في توريد مستلزمات ومعدات وقطع غيار صناعة البترول والغاز والبتروكيماويات.',
    en: 'A company specialised in supplying materials, equipment and spare parts for the oil, gas and petrochemical industries.',
  },
  about_intro_eyebrow: { ar: 'نبذة عن الشركة', en: 'Company Profile' },
  about_principles_eyebrow: { ar: 'مبادئنا', en: 'Our Principles' },
  about_principles_title: { ar: 'الرؤية والرسالة والقيم', en: 'Vision, Mission & Values' },
  about_scope_eyebrow: { ar: 'مجالات عملنا', en: 'What We Do' },
  about_scope_title: {
    ar: 'أربعة خطوط عمل تحت سقف واحد',
    en: 'Four Business Lines Under One Roof',
  },
  about_scope_sub: {
    ar: 'نفس الخدمات الموجودة في هوية الشركة — نغطّي دورة التوريد من أولها لآخرها.',
    en: 'The same services shown in our identity — we cover the supply cycle end to end.',
  },
  about_std_eyebrow: { ar: 'المواصفات والجودة', en: 'Standards & Quality' },
  about_info_name: { ar: 'الاسم التجاري', en: 'Trade Name' },
  about_info_name_en: { ar: 'الاسم بالإنجليزية', en: 'Legal Name' },
  about_info_activity: { ar: 'النشاط', en: 'Activity' },
  about_info_activity_v: {
    ar: 'إستيراد · تصدير · توريدات · خدمات بترولية',
    en: 'Import · Export · Supplies · Petroleum Services',
  },
  about_info_hq: { ar: 'المقر', en: 'Head Office' },
  about_info_scope: { ar: 'نطاق العمل', en: 'Coverage' },
  about_info_scope_v: {
    ar: 'جمهورية مصر العربية — مع شبكة موردين دولية',
    en: 'Arab Republic of Egypt — with an international supplier network',
  },
  about_info_founded: { ar: 'سنة التأسيس', en: 'Established' },
  about_direct: { ar: 'للتواصل المباشر', en: 'Direct line' },

  /* --- عملاؤنا --- */
  clients_hero_sub: {
    ar: 'أفضل الخدمات لأفضل العملاء — نتعامل مع شركات ومصانع ومقاولين في قطاعات البترول والغاز والصناعات الكيماوية.',
    en: 'The best service for the best clients — we work with companies, plants and contractors across the oil, gas and chemical sectors.',
  },
  clients_sectors_eyebrow: { ar: 'القطاعات التي نخدمها', en: 'Sectors We Serve' },
  clients_sectors_title: {
    ar: 'نفهم متطلبات كل قطاع على حدة',
    en: 'We Understand the Requirements of Each Sector',
  },
  clients_sectors_sub: {
    ar: 'لكل قطاع مواصفاته وضغوط التشغيل والخامات المناسبة له — وده اللي بنبني عليه كل عرض توريد.',
    en: 'Each sector has its own specifications, operating pressures and suitable materials — and that is what every supply offer is built on.',
  },
  clients_logos_eyebrow: { ar: 'شركاء النجاح', en: 'Our Partners' },
  clients_logos_title: { ar: 'شركات تعاملت معنا', en: 'Companies We Have Worked With' },
  clients_how_eyebrow: { ar: 'طريقة عملنا', en: 'How We Work' },
  clients_how_title: { ar: 'من أول استفسار لحد التسليم', en: 'From First Enquiry to Delivery' },
  clients_how_sub: {
    ar: 'أربع خطوات واضحة — من غير مفاجآت في السعر ولا في مدة التوريد.',
    en: 'Four clear steps — no surprises in price or in lead time.',
  },
  clients_commit_eyebrow: { ar: 'التزامنا تجاه العميل', en: 'Our Commitment' },
  clients_commit_title: {
    ar: 'جودة العلاقة طويلة الأمد هي مقياس نجاحنا',
    en: 'The Quality of a Long-Term Relationship Is Our Measure of Success',
  },
  clients_commit_body: {
    ar: 'إحنا بنتعامل مع كل طلب على إنه بداية علاقة مستمرة، مش صفقة واحدة. علشان كده بنقول رأينا الفني بصراحة لو الصنف المطلوب مش الأنسب للتطبيق، وبنرشّح البديل المكافئ — حتى لو ده يقلّل قيمة الأمر.',
    en: 'We treat every request as the start of an ongoing relationship, not a one-off deal. That is why we give our honest technical opinion if the requested item is not the best fit for the application, and recommend an equivalent alternative — even when that reduces the order value.',
  },
  clients_cta_title: {
    ar: 'عايز تضيفنا لقائمة موردينك المعتمدين؟',
    en: 'Want to add us to your approved vendor list?',
  },
  clients_cta_body: {
    ar: 'كلّمنا وهنبعتلك ملف الشركة والمستندات المطلوبة للتسجيل.',
    en: 'Get in touch and we will send you our company profile and the documents required for registration.',
  },

  /* --- المنتجات --- */
  products_hero_sub: {
    ar: 'فئة رئيسية تغطّي مستلزمات الحفر والإنتاج والتكرير ومعالجة الغاز والبتروكيماويات — بمواصفاتها وخاماتها ودرجاتها.',
    en: 'main categories covering drilling, production, refining, gas processing and petrochemical requirements — with their specifications, materials and grades.',
  },
  products_catalog_eyebrow: { ar: 'الكتالوج', en: 'Catalogue' },
  products_catalog_title: {
    ar: 'اختر الفئة لعرض المواصفات والخامات',
    en: 'Choose a Category to View Specifications & Materials',
  },
  products_catalog_sub: {
    ar: 'كل فئة فيها تفاصيل الدرجات والمواصفات القياسية المتاحة، وتقدر تطلب عرض سعر لأي صنف مباشرة.',
    en: 'Each category lists the available grades and standards, and you can request a quotation for any item directly.',
  },
  products_item_count: { ar: 'بند', en: 'items' },
  products_chem_count: { ar: 'صنف', en: 'products' },
  products_other_cats: { ar: 'فئات أخرى', en: 'Other Categories' },
  products_quick_contact: { ar: 'تواصل سريع', en: 'Quick Contact' },
  products_types_detail: { ar: 'تفاصيل الأنواع', en: 'Type Details' },
  products_quote_for: { ar: 'محتاج عرض سعر لـ', en: 'Need a quotation for' },
  products_quote_body: {
    ar: 'ابعتلنا المقاس والمواصفة والكمية، وهنرد عليك بعرض مُفصّل ومدة التوريد.',
    en: 'Send us the size, specification and quantity, and we will reply with a detailed offer and lead time.',
  },
  products_cta_title: { ar: 'مش لاقي الصنف اللي محتاجه؟', en: 'Cannot find the item you need?' },
  products_cta_body: {
    ar: 'ابعتلنا المواصفة أو رقم الجزء وهندوّر عليه ونرد عليك بعرض سعر ومدة توريد.',
    en: 'Send us the specification or part number and we will source it and reply with a price and lead time.',
  },

  /* --- الكيماويات --- */
  chem_search_ph: {
    ar: 'ابحث باسم الصنف… مثال: Toluene أو Glycol',
    en: 'Search by product name… e.g. Toluene or Glycol',
  },
  chem_search_label: { ar: 'البحث في قائمة الكيماويات', en: 'Search the chemicals list' },
  chem_all: { ar: 'الكل', en: 'All' },
  chem_of_total: { ar: 'من إجمالي', en: 'of' },
  chem_total_suffix: { ar: 'صنف', en: 'products' },
  chem_none_title: { ar: 'مفيش نتائج مطابقة لبحثك', en: 'No results match your search' },
  chem_none_body: {
    ar: 'جرّب كلمة مفتاحية أقصر — أو كلّمنا وهنشوف الصنف المطلوب.',
    en: 'Try a shorter keyword — or contact us and we will look into the item you need.',
  },

  /* --- البروشور --- */
  brochure_title: { ar: 'بروشور الشركة', en: 'Company Brochure' },
  brochure_full: { ar: 'بروشور الشركة الكامل', en: 'Full Company Brochure' },
  brochure_sub: {
    ar: 'كل الفئات والمواصفات والدرجات في ملف PDF واحد جاهز للتحميل والمشاركة مع فريقك الفني.',
    en: 'All categories, specifications and grades in a single PDF, ready to download and share with your technical team.',
  },
  brochure_open: { ar: 'فتح البروشور', en: 'Open Brochure' },
  brochure_open_tab: { ar: 'فتح في تبويب جديد', en: 'Open in New Tab' },
  brochure_download: { ar: 'تحميل الملف', en: 'Download File' },
  brochure_download_pdf: { ar: 'تحميل البروشور (PDF)', en: 'Download Brochure (PDF)' },
  brochure_pages: { ar: '7 صفحات', en: '7 pages' },
  brochure_mobile_note: {
    ar: 'لو الملف مش ظاهر تحت، اضغط «فتح في تبويب جديد» — بعض متصفحات الموبايل بتفتح الـ PDF في تطبيق خارجي.',
    en: 'If the file does not show below, tap “Open in New Tab” — some mobile browsers open PDFs in an external app.',
  },
  brochure_viewer_label: { ar: 'عارض بروشور الشركة', en: 'Company brochure viewer' },
  brochure_pdf_file: { ar: 'ملف PDF', en: 'PDF file' },

  /* --- اتصل بنا --- */
  contact_hero_sub: {
    ar: 'ابعتلنا قائمة الأصناف أو المواصفة المطلوبة، وهنرد عليك بعرض سعر مُفصّل ومدة التوريد.',
    en: 'Send us your item list or required specification, and we will reply with a detailed quotation and lead time.',
  },
  contact_phone: { ar: 'تليفون', en: 'Phone' },
  contact_whatsapp: { ar: 'واتساب', en: 'WhatsApp' },
  contact_fax: { ar: 'فاكس', en: 'Fax' },
  contact_email: { ar: 'البريد الإلكتروني', en: 'Email' },
  contact_address: { ar: 'العنوان', en: 'Address' },
  contact_open_map: { ar: 'فتح الموقع على الخريطة', en: 'Open Location on Map' },
  contact_map_title: { ar: 'موقع إيماك على الخريطة', en: 'IMAC location on the map' },
  contact_hours: { ar: 'مواعيد العمل', en: 'Working Hours' },
  contact_days: { ar: 'السبت — الخميس', en: 'Saturday — Thursday' },
  contact_friday: { ar: 'الجمعة', en: 'Friday' },
  contact_closed: { ar: 'إجازة', en: 'Closed' },
  contact_hours_note: {
    ar: 'الاستفسارات العاجلة على الواتساب بتتابع خارج المواعيد.',
    en: 'Urgent enquiries on WhatsApp are followed up outside working hours.',
  },
  contact_fast_title: { ar: 'محتاج ترد بسرعة؟ كلّمنا على طول', en: 'Need a fast reply? Call us now' },

  /* --- النموذج --- */
  form_title: { ar: 'اطلب عرض سعر', en: 'Request a Quotation' },
  form_sub: {
    ar: 'املأ البيانات وابعتها على واتساب أو بالبريد الإلكتروني — هنرد عليك في أقرب وقت.',
    en: 'Fill in your details and send via WhatsApp or email — we will get back to you shortly.',
  },
  form_name: { ar: 'الاسم', en: 'Name' },
  form_name_ph: { ar: 'اسمك بالكامل', en: 'Your full name' },
  form_company: { ar: 'اسم الشركة', en: 'Company Name' },
  form_optional: { ar: 'اختياري', en: 'Optional' },
  form_phone: { ar: 'رقم التليفون', en: 'Phone Number' },
  form_email: { ar: 'البريد الإلكتروني', en: 'Email Address' },
  form_category: { ar: 'فئة المنتج', en: 'Product Category' },
  form_category_ph: { ar: '— اختر الفئة (اختياري) —', en: '— Select a category (optional) —' },
  form_message: { ar: 'تفاصيل الطلب', en: 'Request Details' },
  form_message_ph: {
    ar: 'اكتب الأصناف والمقاسات والمواصفات والكميات ومكان التسليم…',
    en: 'List the items, sizes, specifications, quantities and delivery location…',
  },
  form_error: {
    ar: 'من فضلك اكتب الاسم ورقم التليفون وتفاصيل الطلب.',
    en: 'Please enter your name, phone number and request details.',
  },
  form_send_wa: { ar: 'إرسال على واتساب', en: 'Send via WhatsApp' },
  form_send_mail: { ar: 'إرسال بالبريد الإلكتروني', en: 'Send via Email' },
  form_subject: { ar: 'طلب عرض سعر — إيماك', en: 'Quotation Request — IMAC' },
  form_f_name: { ar: 'الاسم', en: 'Name' },
  form_f_company: { ar: 'الشركة', en: 'Company' },
  form_f_phone: { ar: 'التليفون', en: 'Phone' },
  form_f_email: { ar: 'البريد', en: 'Email' },
  form_f_category: { ar: 'الفئة', en: 'Category' },
  form_f_details: { ar: 'تفاصيل الطلب:', en: 'Request details:' },

  /* --- الفوتر --- */
  footer_about: {
    ar: 'شركة متخصصة في توريد مستلزمات ومعدات وقطع غيار صناعة البترول والغاز والبتروكيماويات، بمواصفات عالمية ومن مصادر منشأ موثوقة.',
    en: 'A company specialised in supplying materials, equipment and spare parts for the oil, gas and petrochemical industries — to international standards from trusted origin sources.',
  },
  footer_links: { ar: 'روابط سريعة', en: 'Quick Links' },
  footer_contact: { ar: 'بيانات التواصل', en: 'Contact Details' },
  footer_mail_us: { ar: 'راسلنا بالبريد', en: 'Email Us' },
  footer_rights: { ar: 'جميع الحقوق محفوظة.', en: 'All rights reserved.' },
  footer_dev_by: { ar: 'تم التطوير بواسطة', en: 'Developed by' },

  /* --- 404 --- */
  nf_title: { ar: 'الصفحة اللي بتدوّر عليها مش موجودة', en: 'The page you are looking for was not found' },
  nf_body: {
    ar: 'يمكن الرابط اتغيّر أو الصفحة اتشالت. ترجع للرئيسية أو تتصفّح المنتجات — ولو محتاج صنف معيّن كلّمنا على طول.',
    en: 'The link may have changed or the page was removed. Go back home or browse the products — and if you need a specific item, just contact us.',
  },

  /* --- عام --- */
  materials_available: { ar: 'الخامات المتاحة:', en: 'Available materials:' },
} as const

export type TKey = keyof typeof T

/** يقرأ نص من القاموس */
export function t(key: TKey, l: Locale): string {
  return T[key][l]
}
