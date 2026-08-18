/**
 * كتالوج المنتجات — البيانات مأخوذة من بروشور الشركة
 */

export type IconName =
  | 'tower'
  | 'pipe'
  | 'flange'
  | 'tube'
  | 'valve'
  | 'steam'
  | 'disc'
  | 'steel'
  | 'seal'
  | 'hose'
  | 'gauge'
  | 'chemical'
  | 'heat'

export type ProductGroup = {
  title: string
  note?: string
  items: string[]
}

export type ProductSpec = { label: string; value: string }

export type ProductFeature = { title: string; body: string }

export type ProductCategory = {
  slug: string
  name: string
  nameAr: string
  tagline: string
  intro: string
  icon: IconName
  specs?: ProductSpec[]
  features?: ProductFeature[]
  groups: ProductGroup[]
}

export const PRODUCTS: ProductCategory[] = [
  {
    slug: 'mass-transfer',
    name: 'Mass Transfer Technology & Equipment',
    nameAr: 'تقنيات ومعدات نقل الكتلة',
    tagline: 'صواني وحشوات الأبراج والحلول الهندسية لعمليات الفصل',
    intro:
      'نقوم بتطوير وتوريد مجموعة متكاملة من المعدات الداخلية لنقل الكتلة والفصل، كما نقدّم الحلول الهندسية لمشروعات نقل الكتلة والفصل. تشمل محفظتنا منتجات بأحدث التقنيات لعمليات التقطير، والامتصاص، والتجريد، والتبخير، وفصل الأطوار المتعددة، والاستخلاص سائل–سائل، والتبلور، والفصل بالأغشية.',
    icon: 'tower',
    features: [
      {
        title: 'Sieve Tray — الصينية المثقّبة',
        body: 'ألواح معدنية مثقّبة يمر البخار خلالها رأسياً عبر السائل الموجود على الصينية. ترتيب الثقوب وعددها ومقاسها من عوامل التصميم. تتميّز بكفاءتها العالية ونطاق تشغيل واسع وسهولة الصيانة وانخفاض التكلفة.',
      },
      {
        title: 'Valve Tray — صينية الصمامات',
        body: 'أكثر أنواع الصواني استخداماً لملاءمتها لمجموعة كبيرة من تطبيقات نقل الكتلة، وتتميّز بسعة عالية ومدى تحميل واسع مما ينتج عنه معدلات نقل كتلة ممتازة.',
      },
      {
        title: 'Bubble Cap Tray — صينية الأغطية الفقاعية',
        body: 'تحتوي على أنبوب صاعد فوق كل فتحة مع غطاء يعلوه، مع مسافة بين الأنبوب والغطاء لمرور البخار. يصعد البخار عبر المدخنة ويُوجَّه لأسفل بواسطة الغطاء ثم يخرج من الفتحات ليتخلّل السائل على الصينية.',
      },
      {
        title: 'Dual Flow Tray — الصينية ثنائية السريان',
        body: 'صواني مثقّبة بدون أنابيب هابطة، ويأتي الاسم من السريان المتعاكس للبخار والسائل خلال الثقوب. الأنسب للأنظمة ذات المحتوى الصلب المتوسط إلى العالي أو المركبات القابلة للبلمرة، وتتميّز بسعة أعلى وفقد ضغط أقل.',
      },
      {
        title: 'Cartridge Tray — الصينية الخرطوشية',
        body: 'مناسبة للأقطار الصغيرة وفلانشات الجسم، ويمكن توفير حتى 5 صواني في الخرطوشة الواحدة، مع خيارات إحكام متعددة.',
      },
    ],
    groups: [
      {
        title: 'Tower Trays — صواني الأبراج',
        note: 'خط كامل من الصواني بجميع الخامات، من التصميمات التقليدية إلى الصواني عالية الأداء وأحدث التطويرات.',
        items: [
          'Sieve Tray',
          'Valve Tray',
          'Bubble Cap Tray',
          'Dual Flow Tray',
          'Cartridge Tray',
          'Round & Caged Floating Trays',
        ],
      },
      {
        title: 'Packing & Hardware — الحشوات والمُلحقات',
        note: 'خط كامل من حشوات الأبراج والصواني والمُلحقات بجميع درجات الخامات.',
        items: [
          'Random Packing',
          'Structured Packing',
          'Column Internals',
          'Wire Mesh Demister',
          'Hardware Fasteners',
        ],
      },
    ],
  },

  {
    slug: 'pipes-and-fittings',
    name: 'Pipes & Fittings',
    nameAr: 'المواسير والوصلات',
    tagline: 'مواسير كربون وستانلس وكروم–موليبدنم بجميع المواصفات',
    intro:
      'نوفّر ونخزّن أوسع مجموعة من الدرجات والمقاسات، ويسعدنا التعامل مع الطلبات صعبة التوريد أو استفسارات المشروعات ذات المواصفات الحرجة.',
    icon: 'pipe',
    specs: [
      { label: 'Carbon Steel', value: 'حتى "42 بدون لحام (Seamless)' },
      { label: 'Stainless Steel', value: 'حتى "36 بدون لحام (Seamless)' },
      { label: 'Cr-Mo Steel', value: 'حتى "38 بدون لحام (Seamless)' },
    ],
    groups: [
      {
        title: 'Carbon Steel Pipes — مواسير الصلب الكربوني',
        note: 'متاحة حتى مقاس 42 بوصة بدون لحام.',
        items: [
          'ASTM SA106 Gr.B / Gr.C',
          'ASTM SA333 Gr.6',
          'API 5L Gr.B, X52, X60, X65, X80',
          'DIN & EN 10216 — P235GH, P280GH, P265GH',
          'DIN & EN 10216 — P355NH / NL1',
        ],
      },
      {
        title: 'Stainless Steel Pipes — مواسير الستانلس ستيل',
        note: 'متاحة حتى مقاس 36 بوصة بدون لحام.',
        items: [
          'ASTM SA312 TP316 / 316L',
          'ASTM SA312 TP304 / 304L',
          'ASTM SA312 TP321 / 321H',
          'ASTM SA312 TP347 / 347H',
          'DIN & EN 10216 — 1.4401, 1.4404, 1.4571',
          'DIN & EN 10216 — 1.4541, 1.4547',
        ],
      },
      {
        title: 'Cr-Mo Alloy Steel Pipes — مواسير سبائك الكروم موليبدنم',
        note: 'جميع درجات الكروم–موليبدنم حتى مقاس 38 بوصة بدون لحام.',
        items: [
          'ASTM SA335 P1, P11, P12, P22',
          'ASTM SA335 P5, P9, P91, P92',
          'DIN & EN 10216 — 16M03, 13CrMo4-5',
          'DIN & EN 10216 — 10CrMo9-10',
          'DIN & EN 10216 — X10CrMoVNb9-1, X10CrWMoVNb9-2',
        ],
      },
      {
        title: 'Fittings — الوصلات',
        note: 'أكواع وتيهات ومخاريط وطبات وجميع أنواع الوصلات بالخامات التالية.',
        items: [
          'Carbon Steel — ASTM A234 Gr.WPA / WPB',
          'Carbon Steel — ASTM A420 Gr.WPL6',
          'Alloy Steel — ASTM A234 WP1 / WP5 / WP7 / WP9',
          'Alloy Steel — ASTM A234 WP11 / WP12 / WP22',
          'Stainless Steel — ASTM A403 WP304 / WP304L / WP304H',
          'Stainless Steel — ASTM A403 WP316 / WP316L / WP321 / WP347',
        ],
      },
    ],
  },

  {
    slug: 'flanges',
    name: 'Flanges',
    nameAr: 'الفلانشات',
    tagline: 'فلانشات صلب كربوني وسبائك وستانلس بكل المواصفات العالمية',
    intro:
      'نورّد الفلانشات بجميع الأنواع والمقاسات ودرجات الضغط، مصنّعة وفقاً للمواصفات الأمريكية والأوروبية، وبخامات تناسب تطبيقات البترول والغاز والبتروكيماويات ومحطات الطاقة.',
    icon: 'flange',
    groups: [
      {
        title: 'Carbon Steel — الصلب الكربوني',
        items: ['ASTM A105', 'ASTM A350 LF1 / LF2', 'ASTM A181'],
      },
      {
        title: 'Alloy Steel — سبائك الصلب',
        items: [
          'ASTM A182 F1 / F2 / F5',
          'ASTM A182 F7 / F9',
          'ASTM A182 F11 / F12 / F22',
        ],
      },
      {
        title: 'Stainless Steel — الستانلس ستيل',
        items: [
          'ASTM A182 F6',
          'ASTM A182 F304 / F304L',
          'ASTM A182 F316 / F316L',
          'ASTM A182 F321',
          'ASTM A182 F347 / F348',
        ],
      },
    ],
  },

  {
    slug: 'tubes',
    name: 'Tubes',
    nameAr: 'الأنابيب — Tubes',
    tagline: 'أنابيب الغلايات والمكثّفات والمبادلات الحرارية بجميع الخامات',
    intro:
      'مجموعة واسعة من المنتجات الأنبوبية للتطبيقات الحرارية والكيماوية والبترولية، بخامات تشمل الصلب الكربوني والستانلس والتيتانيوم وسبائك النيكل والنحاس–نيكل والدوبلكس.',
    icon: 'tube',
    groups: [
      {
        title: 'Tubular Products — المنتجات الأنبوبية',
        items: [
          'Aerospace Tubes',
          'Bimetallic Tubes',
          'Boiler Tubes',
          'Capillary Tubes',
          'Chemical Injection Lines',
          'Coiled Tubing',
          'Composite Tubes',
          'Condenser Tubes',
          'Ethylene Furnace Tubes',
          'Evaporator Tubes',
          'Finned Tubes',
        ],
      },
      {
        title: 'Materials — الخامات',
        items: [
          'Carbon & Stainless Steel',
          'Titanium',
          'Stainless Steel',
          'Nickel Alloy',
          'Copper Nickel & Aluminum Copper',
          'Duplex Stainless Steel',
        ],
      },
    ],
  },

  {
    slug: 'valves',
    name: 'Valves',
    nameAr: 'المحابس والصمامات',
    tagline: 'محابس من "½ حتى "48 بكل الخامات وطرق التشغيل',
    intro:
      'نورّد المحابس والصمامات بكامل نطاق الخامات وفقاً لمتطلبات العميل، مع حلول متخصصة لصناعات البتروكيماويات تتعامل بأمان مع الكيماويات الأكّالة.',
    icon: 'valve',
    specs: [
      { label: 'Size — المقاس', value: 'From ½" to 48"' },
      { label: 'End Connection — نهاية التوصيل', value: 'RF – BW – SW – NPT' },
      { label: 'Operation — التشغيل', value: 'Hand wheel – Manual gear – Actuator' },
    ],
    groups: [
      {
        title: 'Materials — الخامات',
        note: 'نطاق كامل من الخامات وفقاً لمتطلبات العميل.',
        items: [
          'Ductile Iron / Cast Iron',
          'Stainless Steel — 304 / 304L / CF8 / CF3',
          'Stainless Steel — 316 / 316L / CF8M / CF3M',
          'Duplex Steel — F51 / F53 / F55 / S31803',
          'Duplex Steel — CD3MN / CE3MN / 2205 / 4A / 5A / 6A',
          'Exotic Alloy — A20 / Monel',
          'Low Temp Carbon Steel — LCC / LCB / LF2',
          'Standard Carbon Steel — WCB / WCC / A105',
          'Chrome Moly Steel — F11 / F22 / F5 / WC5 / WC9 / WC6',
        ],
      },
      {
        title: 'Valves for Petrochemical Industries — محابس البتروكيماويات',
        note:
          'حل موثوق واقتصادي للتعامل مع الكيماويات الأكّالة، بما فيها حمض الكبريتيك والهيدروفلوريك وحمض النيتريك والمواد المؤكسدة والقلويات والمذيبات والهالوجينات وغيرها من السوائل الحرجة. تعمل حتى درجة حرارة 250°F وضغط حتى 230 psi وتصرّف حتى 18,500 gpm، وجميعها تحقّق أو تتجاوز ANSI Class 6 shut-off.',
        items: [
          'Gate Valves',
          'Globe Valves',
          'Ball Valves',
          'Check Valves',
          'Diaphragm Valves',
          'Pressure Relief Valves',
        ],
      },
      {
        title: 'Petrochemical Range — مواصفات خط البتروكيماويات',
        items: [
          'Size: ½" – 10"',
          'Body: PVC / CPVC (½" – 4")',
          'Body: PP / PVDF',
          'Operation: Hand wheel – Manual gear – Actuator',
          'End Connections: Flanged / Socket / Threaded',
          'End Connections: Butt (PP / PVDF)',
        ],
      },
    ],
  },

  {
    slug: 'steam-traps',
    name: 'Steam Traps',
    nameAr: 'مصائد البخار',
    tagline: 'مصائد بخار ومنظومات تصريف المتكثّفات بكل الأنواع',
    intro:
      'مجموعة كاملة من مصائد البخار ومُلحقات شبكات البخار، لضمان تصريف المتكثّفات بكفاءة والحفاظ على أداء المنظومة وتقليل فواقد الطاقة.',
    icon: 'steam',
    groups: [
      {
        title: 'Types & Accessories — الأنواع والمُلحقات',
        items: [
          'Thermodynamic',
          'Balanced Pressure Thermostatic',
          'Thermostatic Bimetallic',
          'Ball Float',
          'Inverted Bucket',
          'Compressed Air Traps',
          'Air & Gas Vents',
          'Steam Manifolds',
          'Strainers',
          'Flame Arrestor',
        ],
      },
    ],
  },

  {
    slug: 'rupture-discs',
    name: 'Safety Rupture Discs',
    nameAr: 'أقراص الأمان الانفجارية',
    tagline: 'حماية الأوعية والخطوط من الضغط الزائد',
    intro:
      'تُعد أقراص الأمان — بعد صمامات الأمان — من أكثر وسائل الحماية من الضغط استخداماً في المنشآت الصناعية، حيث تحمي الأوعية وخطوط الأنابيب من التشوّه والأضرار الأخرى. والهدف الأساسي منها هو تحقيق الحماية المُثلى مع تقليل زمن توقّف المنظومة إلى أدنى حد.',
    icon: 'disc',
    groups: [
      {
        title: 'Applications — مجالات الاستخدام',
        items: [
          'حماية الأوعية والمفاعلات من الضغط الزائد',
          'حماية خطوط الأنابيب والشبكات',
          'التركيب المنفرد أو بالتوازي مع صمامات الأمان',
          'التطبيقات ذات المتطلبات الصحية والنظيفة',
          'الخدمات التآكلية والضغوط النبضية',
        ],
      },
    ],
  },

  {
    slug: 'steel-products',
    name: 'Steel Products',
    nameAr: 'منتجات الصلب',
    tagline: 'ألواح وصاج وتيوب شيت وبارات وقيعان مقبّبة',
    intro:
      'نورّد ألواح وصاج الصلب وألواح التثبيت (Tube Sheets) والبارات الدائرية والقيعان المقبّبة بجميع الخامات الهندسية، لخدمة ورش التصنيع ومشروعات الأوعية والمبادلات الحرارية.',
    icon: 'steel',
    groups: [
      {
        title: 'Steel Sheets / Plates – Tube Sheets – Round Bars',
        note: 'الخامات المتاحة:',
        items: [
          'Carbon & Alloy Steel',
          'Nickel & High Temp Alloys',
          'Stainless Steel & Super Duplex',
          'Aluminum & Aluminum Bronze',
          'Copper & Copper Nickel',
          'Titanium Metals',
          'Clad Materials',
        ],
      },
      {
        title: 'Dished Ends / Elliptical Heads — القيعان المقبّبة',
        note: 'الخامات المتاحة:',
        items: [
          'Carbon & Alloy Steel',
          'Nickel & High Temp Alloys',
          'Stainless Steel',
          'Clad Materials',
        ],
      },
    ],
  },

  {
    slug: 'sealing-products',
    name: 'Sealing Products',
    nameAr: 'منتجات الإحكام والجوانات',
    tagline: 'جوانات معدنية وغير معدنية ووصلات تمدّد',
    intro:
      'مجموعة متكاملة من منتجات الإحكام لمنع التسريب في الوصلات والفلانشات والمعدات، بخامات معدنية وغير معدنية تناسب مختلف الضغوط ودرجات الحرارة.',
    icon: 'seal',
    groups: [
      {
        title: 'Metallic Gaskets — الجوانات المعدنية',
        items: [
          'Spiral Wound Gaskets',
          'Metal Jacketed Gaskets',
          'Oval Rings',
          'Ring Type Joints (RTJ)',
        ],
      },
      {
        title: 'Non-Metallic Gaskets — الجوانات غير المعدنية',
        items: [
          'Gasket Sheets',
          'Teflon Sheets & Tubes',
          'Valve Packing',
          'Graphite / Teflon Tapes',
        ],
      },
      {
        title: 'Expansion Joints — وصلات التمدّد',
        items: [
          'Rubber Expansion Joints',
          'Metal Expansion Joints',
          'Copper Expansion Joints',
        ],
      },
    ],
  },

  {
    slug: 'hoses',
    name: 'Hose & Equipment',
    nameAr: 'الخراطيم والمعدات',
    tagline: 'خراطيم صناعية لكل الوسائط والتطبيقات',
    intro:
      'خراطيم صناعية متخصصة لنقل السوائل والغازات والمواد الكيميائية والبخار والوقود، مع المُلحقات والوصلات المناسبة لكل تطبيق.',
    icon: 'hose',
    groups: [
      {
        title: 'Hose Range — أنواع الخراطيم',
        items: [
          'Silicone Hose',
          'Oil & Fuel Hose',
          'Chemical Hose',
          'Hot Water & Steam Hose',
          'Food & Drink Hose Range',
          'Marine Hose',
          'Composite Hose',
          'Stainless Steel Flexible Hoses',
        ],
      },
    ],
  },

  {
    slug: 'instrumentation',
    name: 'Instrumentation',
    nameAr: 'أجهزة القياس والتحكم',
    tagline: 'أجهزة قياس الضغط والحرارة والسريان والمستوى',
    intro:
      'مجموعة كاملة من أجهزة القياس والتحكّم ومُلحقاتها لخطوط الإنتاج ووحدات المعالجة، من العدادات والمقاييس إلى الصمامات والمُنظّمات ووصلات الأجهزة.',
    icon: 'gauge',
    groups: [
      {
        title: 'Instruments & Accessories — الأجهزة والمُلحقات',
        items: [
          'Pressure & Temperature Gauges',
          'Flow Meters',
          'Solenoid Valves',
          'Thermocouples',
          'Pressure & Air Regulators',
          'Gearbox',
          'Level Gauges',
          'Valves & Manifolds',
          'Instrument Fittings',
        ],
      },
    ],
  },

  {
    slug: 'chemicals',
    name: 'Chemicals Product List',
    nameAr: 'الكيماويات',
    tagline: 'أكثر من 250 صنفاً من الكيماويات والمذيبات والراتنجات',
    intro:
      'قائمة شاملة من الكيماويات الصناعية والمذيبات والراتنجات والمواد الخافضة للتوتر السطحي والإضافات، نورّدها للمصانع ووحدات المعالجة ومعامل التحاليل. استخدم البحث بالأسفل للوصول السريع إلى الصنف المطلوب.',
    icon: 'chemical',
    groups: [],
  },

  {
    slug: 'heat-tracing',
    name: 'Heat Trace',
    nameAr: 'أنظمة التتبّع الحراري',
    tagline: 'كابلات ولوحات ومُلحقات التتبّع الحراري',
    intro:
      'أنظمة التتبّع الحراري للحفاظ على درجة حرارة التشغيل في خطوط الأنابيب والأجهزة ومنع التجمّد أو تكثّف المنتج، مع لوحات التحكّم والمُلحقات وأطقم التوصيل الكاملة.',
    icon: 'heat',
    groups: [
      {
        title: 'Heat Tracing System — منظومة التتبّع الحراري',
        items: [
          'Heat Tracing Cables',
          'Heat Tracing Panels',
          'Heat Tracing Accessories',
          'Heat Trace Connection Kits',
          'Tube Bundle & Instrument Enclosures',
        ],
      },
    ],
  },
]

export function getProduct(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug)
}
