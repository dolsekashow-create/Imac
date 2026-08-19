import type { L, Locale } from '@/lib/i18n'

/**
 * كتالوج المنتجات — البيانات مأخوذة من بروشور الشركة
 * كل النصوص الوصفية بلغتين، والمواصفات الفنية بالإنجليزي كما هي في البروشور
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

export type ProductGroup = { title: L; note?: L; items: string[] }
export type ProductSpec = { label: L; value: L }
export type ProductFeature = { title: L; body: L }

export type ProductCategory = {
  slug: string
  name: string
  nameAr: string
  tagline: L
  intro: L
  icon: IconName
  specs?: ProductSpec[]
  features?: ProductFeature[]
  groups: ProductGroup[]
}

/** اسم الفئة حسب اللغة */
export const productName = (p: ProductCategory, l: Locale) => (l === 'ar' ? p.nameAr : p.name)

/**
 * الفئات اللي ليها صورة حقيقية مستخرجة من البروشور
 * (الكيماويات مالهاش صورة في البروشور — بتستخدم الأيقونة)
 */
const WITH_IMAGE = new Set([
  'mass-transfer',
  'pipes-and-fittings',
  'flanges',
  'tubes',
  'valves',
  'steam-traps',
  'rupture-discs',
  'steel-products',
  'sealing-products',
  'hoses',
  'instrumentation',
  'heat-tracing',
])

/** مسار صورة الفئة، أو null لو مفيش صورة */
export const productImage = (p: ProductCategory) =>
  WITH_IMAGE.has(p.slug) ? `/images/products/${p.slug}.jpg` : null

export const PRODUCTS: ProductCategory[] = [
  {
    slug: 'mass-transfer',
    name: 'Mass Transfer Technology & Equipment',
    nameAr: 'تقنيات ومعدات نقل الكتلة',
    tagline: {
      ar: 'صواني وحشوات الأبراج والحلول الهندسية لعمليات الفصل',
      en: 'Tower trays, packing and engineering solutions for separation processes',
    },
    intro: {
      ar: 'نقوم بتطوير وتوريد مجموعة متكاملة من المعدات الداخلية لنقل الكتلة والفصل، كما نقدّم الحلول الهندسية لمشروعات نقل الكتلة والفصل. تشمل محفظتنا منتجات بأحدث التقنيات لعمليات التقطير، والامتصاص، والتجريد، والتبخير، وفصل الأطوار المتعددة، والاستخلاص سائل–سائل، والتبلور، والفصل بالأغشية.',
      en: 'We develop and supply a comprehensive range of mass transfer and separation internal equipment, and offer engineering solutions for mass transfer and separation projects. Our portfolio includes state-of-the-art products for distillation, absorption, stripping, evaporation, multi-phase separation, liquid-liquid extraction, crystallization and membrane separation.',
    },
    icon: 'tower',
    features: [
      {
        title: { ar: 'Sieve Tray — الصينية المثقّبة', en: 'Sieve Tray' },
        body: {
          ar: 'ألواح معدنية مثقّبة يمر البخار خلالها رأسياً عبر السائل الموجود على الصينية. ترتيب الثقوب وعددها ومقاسها من عوامل التصميم. تتميّز بكفاءتها العالية ونطاق تشغيل واسع وسهولة الصيانة وانخفاض التكلفة.',
          en: 'Sieve trays are simply metal plates with holes in them. Vapour passes straight upward through the liquid on the plate. The arrangement, number and size of the holes are design parameters. Chosen for their efficiency, wide operating range, ease of maintenance and cost.',
        },
      },
      {
        title: { ar: 'Valve Tray — صينية الصمامات', en: 'Valve Tray' },
        body: {
          ar: 'أكثر أنواع الصواني استخداماً لملاءمتها لمجموعة كبيرة من تطبيقات نقل الكتلة، وتتميّز بسعة عالية ومدى تحميل واسع مما ينتج عنه معدلات نقل كتلة ممتازة.',
          en: 'Valve trays are the most commonly used tray type because of their suitability for a large variety of mass transfer applications. They are characterised by high capacity and a large load range, which results in good mass transfer rates.',
        },
      },
      {
        title: { ar: 'Bubble Cap Tray — صينية الأغطية الفقاعية', en: 'Bubble Cap Tray' },
        body: {
          ar: 'تحتوي على أنبوب صاعد فوق كل فتحة مع غطاء يعلوه، مع مسافة بين الأنبوب والغطاء لمرور البخار. يصعد البخار عبر المدخنة ويُوجَّه لأسفل بواسطة الغطاء ثم يخرج من الفتحات ليتخلّل السائل على الصينية.',
          en: 'A bubble cap tray has a riser or chimney fitted over each hole, and a cap that covers the riser. The cap is mounted so there is a space between riser and cap to allow the passage of vapour. Vapour rises through the chimney, is directed downward by the cap, then discharges through slots in the cap and bubbles through the liquid on the tray.',
        },
      },
      {
        title: { ar: 'Dual Flow Tray — الصينية ثنائية السريان', en: 'Dual Flow Tray' },
        body: {
          ar: 'صواني مثقّبة بدون أنابيب هابطة، ويأتي الاسم من السريان المتعاكس للبخار والسائل خلال الثقوب. الأنسب للأنظمة ذات المحتوى الصلب المتوسط إلى العالي أو المركبات القابلة للبلمرة، وتتميّز بسعة أعلى وفقد ضغط أقل.',
          en: 'Dual flow trays are sieve trays without downcomers. The term dual flow comes from the countercurrent flow of vapour and liquid through the perforations. Best suited to systems with moderate to high solids content or polymerizable compounds. High open area dual flow trays offer higher capacity and lower pressure drop than comparably spaced fractionation trays.',
        },
      },
      {
        title: { ar: 'Cartridge Tray — الصينية الخرطوشية', en: 'Cartridge Tray' },
        body: {
          ar: 'مناسبة للأقطار الصغيرة وفلانشات الجسم، ويمكن توفير حتى 5 صواني في الخرطوشة الواحدة، مع خيارات إحكام متعددة.',
          en: 'Suitable for small diameter body flanges. Can provide up to 5 trays per cartridge, with different sealing options available.',
        },
      },
    ],
    groups: [
      {
        title: { ar: 'صواني الأبراج — Tower Trays', en: 'Tower Trays' },
        note: {
          ar: 'خط كامل من الصواني بجميع الخامات، من التصميمات التقليدية إلى الصواني عالية الأداء وأحدث التطويرات.',
          en: 'A full line of trays in all materials, from conventional designs to high performance trays and the latest developments.',
        },
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
        title: { ar: 'الحشوات والمُلحقات — Packing & Hardware', en: 'Packing & Hardware' },
        note: {
          ar: 'خط كامل من حشوات الأبراج والصواني والمُلحقات بجميع درجات الخامات.',
          en: 'A full range of tower and tray packing and hardware in all material grades.',
        },
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
    tagline: {
      ar: 'مواسير كربون وستانلس وكروم–موليبدنم بجميع المواصفات',
      en: 'Carbon, stainless and chrome-moly pipes in all specifications',
    },
    intro: {
      ar: 'نوفّر ونخزّن أوسع مجموعة من الدرجات والمقاسات، ويسعدنا التعامل مع الطلبات صعبة التوريد أو استفسارات المشروعات ذات المواصفات الحرجة.',
      en: 'We supply and stock the most impressive range of grades and sizes. We like to be challenged with your hard-to-source items or project enquiries with critical specifications.',
    },
    icon: 'pipe',
    specs: [
      {
        label: { ar: 'Carbon Steel', en: 'Carbon Steel' },
        value: { ar: 'حتى "42 بدون لحام (Seamless)', en: 'Up to 42" seamless' },
      },
      {
        label: { ar: 'Stainless Steel', en: 'Stainless Steel' },
        value: { ar: 'حتى "36 بدون لحام (Seamless)', en: 'Up to 36" seamless' },
      },
      {
        label: { ar: 'Cr-Mo Steel', en: 'Cr-Mo Steel' },
        value: { ar: 'حتى "38 بدون لحام (Seamless)', en: 'Up to 38" seamless' },
      },
    ],
    groups: [
      {
        title: { ar: 'مواسير الصلب الكربوني — Carbon Steel Pipes', en: 'Carbon Steel Pipes' },
        note: { ar: 'متاحة حتى مقاس 42 بوصة بدون لحام.', en: 'Available up to 42" seamless.' },
        items: [
          'ASTM SA106 Gr.B / Gr.C',
          'ASTM SA333 Gr.6',
          'API 5L Gr.B, X52, X60, X65, X80',
          'DIN & EN 10216 — P235GH, P280GH, P265GH',
          'DIN & EN 10216 — P355NH / NL1',
        ],
      },
      {
        title: { ar: 'مواسير الستانلس ستيل — Stainless Steel Pipes', en: 'Stainless Steel Pipes' },
        note: { ar: 'متاحة حتى مقاس 36 بوصة بدون لحام.', en: 'Available up to 36" seamless.' },
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
        title: { ar: 'مواسير سبائك الكروم موليبدنم — Cr-Mo Alloy Steel Pipes', en: 'Cr-Mo Alloy Steel Pipes' },
        note: {
          ar: 'جميع درجات الكروم–موليبدنم حتى مقاس 38 بوصة بدون لحام.',
          en: 'All chrome-moly grades up to 38" seamless.',
        },
        items: [
          'ASTM SA335 P1, P11, P12, P22',
          'ASTM SA335 P5, P9, P91, P92',
          'DIN & EN 10216 — 16M03, 13CrMo4-5',
          'DIN & EN 10216 — 10CrMo9-10',
          'DIN & EN 10216 — X10CrMoVNb9-1, X10CrWMoVNb9-2',
        ],
      },
      {
        title: { ar: 'الوصلات — Fittings', en: 'Fittings' },
        note: {
          ar: 'أكواع وتيهات ومخاريط وطبات وجميع أنواع الوصلات بالخامات التالية.',
          en: 'Elbows, tees, reducers, caps and all fitting types in the following materials.',
        },
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
    tagline: {
      ar: 'فلانشات صلب كربوني وسبائك وستانلس بكل المواصفات العالمية',
      en: 'Carbon, alloy and stainless steel flanges to all international standards',
    },
    intro: {
      ar: 'نورّد الفلانشات بجميع الأنواع والمقاسات ودرجات الضغط، مصنّعة وفقاً للمواصفات الأمريكية والأوروبية، وبخامات تناسب تطبيقات البترول والغاز والبتروكيماويات ومحطات الطاقة.',
      en: 'We supply flanges in all types, sizes and pressure ratings, manufactured to American and European standards, in materials suited to oil, gas, petrochemical and power plant applications.',
    },
    icon: 'flange',
    groups: [
      {
        title: { ar: 'الصلب الكربوني — Carbon Steel', en: 'Carbon Steel' },
        items: ['ASTM A105', 'ASTM A350 LF1 / LF2', 'ASTM A181'],
      },
      {
        title: { ar: 'سبائك الصلب — Alloy Steel', en: 'Alloy Steel' },
        items: ['ASTM A182 F1 / F2 / F5', 'ASTM A182 F7 / F9', 'ASTM A182 F11 / F12 / F22'],
      },
      {
        title: { ar: 'الستانلس ستيل — Stainless Steel', en: 'Stainless Steel' },
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
    tagline: {
      ar: 'أنابيب الغلايات والمكثّفات والمبادلات الحرارية بجميع الخامات',
      en: 'Boiler, condenser and heat exchanger tubes in all materials',
    },
    intro: {
      ar: 'مجموعة واسعة من المنتجات الأنبوبية للتطبيقات الحرارية والكيماوية والبترولية، بخامات تشمل الصلب الكربوني والستانلس والتيتانيوم وسبائك النيكل والنحاس–نيكل والدوبلكس.',
      en: 'A wide range of tubular products for thermal, chemical and petroleum applications, in materials including carbon and stainless steel, titanium, nickel alloys, copper-nickel and duplex.',
    },
    icon: 'tube',
    groups: [
      {
        title: { ar: 'المنتجات الأنبوبية — Tubular Products', en: 'Tubular Products' },
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
        title: { ar: 'الخامات — Materials', en: 'Materials' },
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
    tagline: {
      ar: 'محابس من "½ حتى "48 بكل الخامات وطرق التشغيل',
      en: 'Valves from ½" to 48" in all materials and operating types',
    },
    intro: {
      ar: 'نورّد المحابس والصمامات بكامل نطاق الخامات وفقاً لمتطلبات العميل، مع حلول متخصصة لصناعات البتروكيماويات تتعامل بأمان مع الكيماويات الأكّالة.',
      en: 'We supply valves across the full range of materials according to customer requirements, with dedicated solutions for petrochemical industries that safely handle corrosive chemicals.',
    },
    icon: 'valve',
    specs: [
      {
        label: { ar: 'المقاس — Size', en: 'Size' },
        value: { ar: 'From ½" to 48"', en: 'From ½" to 48"' },
      },
      {
        label: { ar: 'نهاية التوصيل — End Connection', en: 'End Connection' },
        value: { ar: 'RF – BW – SW – NPT', en: 'RF – BW – SW – NPT' },
      },
      {
        label: { ar: 'التشغيل — Operation', en: 'Operation' },
        value: {
          ar: 'Hand wheel – Manual gear – Actuator',
          en: 'Hand wheel – Manual gear – Actuator',
        },
      },
    ],
    groups: [
      {
        title: { ar: 'الخامات — Materials', en: 'Materials' },
        note: {
          ar: 'نطاق كامل من الخامات وفقاً لمتطلبات العميل.',
          en: 'Full range of materials according to customer requirements.',
        },
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
        title: {
          ar: 'محابس البتروكيماويات — Valves for Petrochemical Industries',
          en: 'Valves for Petrochemical Industries',
        },
        note: {
          ar: 'حل موثوق واقتصادي للتعامل مع الكيماويات الأكّالة، بما فيها حمض الكبريتيك والهيدروفلوريك وحمض النيتريك والمواد المؤكسدة والقلويات والمذيبات والهالوجينات وغيرها من السوائل الحرجة. تعمل حتى درجة حرارة 250°F وضغط حتى 230 psi وتصرّف حتى 18,500 gpm، وجميعها تحقّق أو تتجاوز ANSI Class 6 shut-off.',
          en: 'A dependable and economical way to handle corrosive chemicals, including sulfuric and hydrofluoric acid, nitric acid, oxidizing chemicals, caustics, solvents, halogens and various other hostile fluids. They perform at temperatures up to 250°F, pressures up to 230 psi and flows up to 18,500 gpm. All valves meet or exceed ANSI Class 6 shut-off.',
        },
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
        title: { ar: 'مواصفات خط البتروكيماويات — Petrochemical Range', en: 'Petrochemical Range' },
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
    tagline: {
      ar: 'مصائد بخار ومنظومات تصريف المتكثّفات بكل الأنواع',
      en: 'Steam traps and condensate removal systems of every type',
    },
    intro: {
      ar: 'مجموعة كاملة من مصائد البخار ومُلحقات شبكات البخار، لضمان تصريف المتكثّفات بكفاءة والحفاظ على أداء المنظومة وتقليل فواقد الطاقة.',
      en: 'A complete range of steam traps and steam network accessories, ensuring efficient condensate removal, maintaining system performance and reducing energy losses.',
    },
    icon: 'steam',
    groups: [
      {
        title: { ar: 'الأنواع والمُلحقات — Types & Accessories', en: 'Types & Accessories' },
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
    tagline: {
      ar: 'حماية الأوعية والخطوط من الضغط الزائد',
      en: 'Protecting vessels and lines from overpressure',
    },
    intro: {
      ar: 'تُعد أقراص الأمان — بعد صمامات الأمان — من أكثر وسائل الحماية من الضغط استخداماً في المنشآت الصناعية، حيث تحمي الأوعية وخطوط الأنابيب من التشوّه والأضرار الأخرى. والهدف الأساسي منها هو تحقيق الحماية المُثلى مع تقليل زمن توقّف المنظومة إلى أدنى حد.',
      en: 'Rupture discs are, next to safety valves, the most commonly used pressure protection devices in industrial plants. They protect vessels and pipelines from deformation and other damage. The main objective is to optimally protect and, at the same time, minimise system downtime.',
    },
    icon: 'disc',
    groups: [
      {
        title: { ar: 'مجالات الاستخدام — Applications', en: 'Applications' },
        items: [
          'Overpressure protection for vessels and reactors',
          'Pipeline and network protection',
          'Standalone or in parallel with safety valves',
          'Sanitary and clean-service applications',
          'Corrosive service and pulsating pressures',
        ],
      },
    ],
  },

  {
    slug: 'steel-products',
    name: 'Steel Products',
    nameAr: 'منتجات الصلب',
    tagline: {
      ar: 'ألواح وصاج وتيوب شيت وبارات وقيعان مقبّبة',
      en: 'Plates, sheets, tube sheets, round bars and dished ends',
    },
    intro: {
      ar: 'نورّد ألواح وصاج الصلب وألواح التثبيت (Tube Sheets) والبارات الدائرية والقيعان المقبّبة بجميع الخامات الهندسية، لخدمة ورش التصنيع ومشروعات الأوعية والمبادلات الحرارية.',
      en: 'We supply steel plates and sheets, tube sheets, round bars and dished ends in all engineering materials, serving fabrication workshops and vessel and heat exchanger projects.',
    },
    icon: 'steel',
    groups: [
      {
        title: {
          ar: 'ألواح وصاج – تيوب شيت – بارات دائرية',
          en: 'Steel Sheets / Plates – Tube Sheets – Round Bars',
        },
        note: { ar: 'الخامات المتاحة:', en: 'Available materials:' },
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
        title: {
          ar: 'القيعان المقبّبة — Dished Ends / Elliptical Heads',
          en: 'Dished Ends / Elliptical Heads',
        },
        note: { ar: 'الخامات المتاحة:', en: 'Available materials:' },
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
    tagline: {
      ar: 'جوانات معدنية وغير معدنية ووصلات تمدّد',
      en: 'Metallic and non-metallic gaskets and expansion joints',
    },
    intro: {
      ar: 'مجموعة متكاملة من منتجات الإحكام لمنع التسريب في الوصلات والفلانشات والمعدات، بخامات معدنية وغير معدنية تناسب مختلف الضغوط ودرجات الحرارة.',
      en: 'A complete range of sealing products to prevent leakage at joints, flanges and equipment, in metallic and non-metallic materials suited to various pressures and temperatures.',
    },
    icon: 'seal',
    groups: [
      {
        title: { ar: 'الجوانات المعدنية — Metallic Gaskets', en: 'Metallic Gaskets' },
        items: [
          'Spiral Wound Gaskets',
          'Metal Jacketed Gaskets',
          'Oval Rings',
          'Ring Type Joints (RTJ)',
        ],
      },
      {
        title: { ar: 'الجوانات غير المعدنية — Non-Metallic Gaskets', en: 'Non-Metallic Gaskets' },
        items: ['Gasket Sheets', 'Teflon Sheets & Tubes', 'Valve Packing', 'Graphite / Teflon Tapes'],
      },
      {
        title: { ar: 'وصلات التمدّد — Expansion Joints', en: 'Expansion Joints' },
        items: ['Rubber Expansion Joints', 'Metal Expansion Joints', 'Copper Expansion Joints'],
      },
    ],
  },

  {
    slug: 'hoses',
    name: 'Hose & Equipment',
    nameAr: 'الخراطيم والمعدات',
    tagline: {
      ar: 'خراطيم صناعية لكل الوسائط والتطبيقات',
      en: 'Industrial hoses for every medium and application',
    },
    intro: {
      ar: 'خراطيم صناعية متخصصة لنقل السوائل والغازات والمواد الكيميائية والبخار والوقود، مع المُلحقات والوصلات المناسبة لكل تطبيق.',
      en: 'Specialised industrial hoses for transferring liquids, gases, chemicals, steam and fuel, with the accessories and couplings suited to each application.',
    },
    icon: 'hose',
    groups: [
      {
        title: { ar: 'أنواع الخراطيم — Hose Range', en: 'Hose Range' },
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
    tagline: {
      ar: 'أجهزة قياس الضغط والحرارة والسريان والمستوى',
      en: 'Pressure, temperature, flow and level instrumentation',
    },
    intro: {
      ar: 'مجموعة كاملة من أجهزة القياس والتحكّم ومُلحقاتها لخطوط الإنتاج ووحدات المعالجة، من العدادات والمقاييس إلى الصمامات والمُنظّمات ووصلات الأجهزة.',
      en: 'A complete range of measurement and control instruments and accessories for production lines and process units, from meters and gauges to valves, regulators and instrument fittings.',
    },
    icon: 'gauge',
    groups: [
      {
        title: { ar: 'الأجهزة والمُلحقات — Instruments & Accessories', en: 'Instruments & Accessories' },
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
    slug: 'heat-tracing',
    name: 'Heat Trace',
    nameAr: 'أنظمة التتبّع الحراري',
    tagline: {
      ar: 'كابلات ولوحات ومُلحقات التتبّع الحراري',
      en: 'Heat tracing cables, panels and accessories',
    },
    intro: {
      ar: 'أنظمة التتبّع الحراري للحفاظ على درجة حرارة التشغيل في خطوط الأنابيب والأجهزة ومنع التجمّد أو تكثّف المنتج، مع لوحات التحكّم والمُلحقات وأطقم التوصيل الكاملة.',
      en: 'Heat tracing systems that maintain operating temperature in pipelines and instruments and prevent freezing or product condensation, with control panels, accessories and complete connection kits.',
    },
    icon: 'heat',
    groups: [
      {
        title: { ar: 'منظومة التتبّع الحراري — Heat Tracing System', en: 'Heat Tracing System' },
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

  {
    slug: 'chemicals',
    name: 'Chemicals Product List',
    nameAr: 'الكيماويات',
    tagline: {
      ar: 'أكثر من 220 صنفاً من الكيماويات والمذيبات والراتنجات',
      en: 'Over 220 chemicals, solvents and resins',
    },
    intro: {
      ar: 'قائمة شاملة من الكيماويات الصناعية والمذيبات والراتنجات والمواد الخافضة للتوتر السطحي والإضافات، نورّدها للمصانع ووحدات المعالجة ومعامل التحاليل. استخدم البحث بالأسفل للوصول السريع إلى الصنف المطلوب.',
      en: 'A comprehensive list of industrial chemicals, solvents, resins, surfactants and additives supplied to plants, process units and laboratories. Use the search below to quickly find the product you need.',
    },
    icon: 'chemical',
    groups: [],
  },
]

export function getProduct(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug)
}
