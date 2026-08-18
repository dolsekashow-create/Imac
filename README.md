# إيماك للإستيراد والتصدير والتوريدات — IMAC

موقع شركة إيماك للتوريدات البترولية. مبني بـ **Next.js 16 (App Router) + TypeScript + Tailwind CSS v4**، عربي بالكامل باتجاه RTL.

---

## التشغيل

```bash
npm install
```

```bash
npm run dev
```

الموقع هيفتح على <http://localhost:3000>

```bash
npm run build
```

```bash
npm start
```

---

## هيكل المشروع

```
src/
├─ app/
│  ├─ layout.tsx            الهيكل العام + خط Cairo + RTL + بيانات SEO و JSON-LD
│  ├─ page.tsx              الرئيسية
│  ├─ about/page.tsx        من نحن
│  ├─ clients/page.tsx      عملاؤنا
│  ├─ products/page.tsx     كل فئات المنتجات
│  ├─ products/[slug]/      صفحة تفاصيل لكل فئة (13 صفحة)
│  ├─ contact/page.tsx      اتصل بنا + نموذج طلب عرض السعر
│  ├─ not-found.tsx         صفحة 404
│  ├─ sitemap.ts / robots.ts
│  ├─ icon.png / apple-icon.png
│  └─ globals.css           ألوان الهوية + الخطوط + الأنماط المشتركة
│
├─ components/
│  ├─ Header.tsx            الهيدر + القائمة المنسدلة للمنتجات + قائمة الموبايل
│  ├─ Footer.tsx            الفوتر
│  ├─ HeroSlider.tsx        سلايدر الرئيسية (3 شرائح)
│  ├─ Counters.tsx          شريط الأرقام المتحرك
│  ├─ IndustrialArt.tsx     رسومات SVG (برج حفر، وحدة ضخ، أبراج تقطير، خزانات)
│  ├─ ProductIcons.tsx      أيقونة لكل فئة منتجات
│  ├─ ServiceIcons.tsx      أيقونات الخدمات الأربعة (نفس اللي تحت اللوجو)
│  ├─ ChemicalsList.tsx     قائمة الكيماويات مع بحث وفلترة بالحروف
│  ├─ QuoteForm.tsx         نموذج طلب عرض سعر (واتساب / بريد)
│  ├─ Reveal.tsx            ظهور العناصر عند التمرير
│  ├─ WhatsAppFab.tsx       زر واتساب العائم + زر العودة لأعلى
│  └─ ui.tsx                Container / SectionHeading / PageHero / Card
│
├─ data/
│  ├─ products.ts           13 فئة منتجات — كل المواصفات من البروشور
│  ├─ chemicals.ts          228 صنف كيماويات مرتّبة أبجدياً
│  └─ content.ts            نصوص الرؤية والرسالة والقيم والقطاعات والأرقام
│
└─ lib/
   └─ site.ts               بيانات الشركة والتليفونات والعنوان والروابط
```

---

## تعديل البيانات

| عايز تغيّر إيه | الملف |
| --- | --- |
| التليفونات / الفاكس / الواتساب / البريد / العنوان | `src/lib/site.ts` |
| رابط الموقع النهائي (مهم لـ SEO) | `src/lib/site.ts` → `SITE.url` |
| المنتجات والمواصفات والخامات | `src/data/products.ts` |
| قائمة الكيماويات | `src/data/chemicals.ts` |
| الرؤية / الرسالة / القيم / نبذة الشركة | `src/data/content.ts` |
| أرقام الإحصائيات (سنوات الخبرة… إلخ) | `src/data/content.ts` → `STATS` |
| القطاعات وخطوات العمل | `src/data/content.ts` |
| ألوان الهوية | `src/app/globals.css` → بلوك `@theme` |

### إضافة شعارات العملاء

قسم شعارات العملاء في صفحة «عملاؤنا» مخفي لحد ما تضيف شعارات. حط الصور في
`public/images/clients/` وبعدين أضفها في `src/data/content.ts`:

```ts
export const CLIENT_LOGOS = [
  { name: 'اسم الشركة', logo: '/images/clients/company.png' },
]
```

القسم هيظهر تلقائياً أول ما المصفوفة تبقى مش فاضية.

---

## الألوان

مستخرجة من اللوجو مباشرةً:

| اللون | الكود | الاستخدام |
| --- | --- | --- |
| `brand-700` | `#6e4b33` | البني البرونزي — اللون الأساسي (حرف I و C في اللوجو) |
| `brand-500` | `#a3714b` | برونزي فاتح للتفاصيل والخطوط |
| `brand-300` | `#d1b193` | برونزي فاتح جداً على الخلفيات الداكنة |
| `steel-900` | `#232320` | الرمادي الفحمي (حروف MA والرسم الصناعي) |
| `steel-950` | `#161614` | خلفيات الأقسام الداكنة |
| `sand-100` | `#faf7f3` | خلفية دافئة للأقسام الفاتحة |

---

## الصور

- `public/images/imac-mark.png` — العلامة (الرسم + IMAC) بخلفية شفافة، مستخدمة في الهيدر
- `public/images/imac-logo.png` — اللوجو الكامل بخلفية شفافة
- `public/images/imac-logo-light.png` — نسخة فاتحة للخلفيات الداكنة (الفوتر)
- `public/images/og.jpg` — صورة المشاركة على السوشيال (1200×630)
- `public/imac-brochure.pdf` — بروشور الشركة للتحميل

---

## ملاحظات

- **نموذج التواصل** بيبعت عن طريق واتساب أو البريد الإلكتروني مباشرةً — من غير سيرفر باك-إند. لو عايز
  الرسائل تتخزن في قاعدة بيانات أو توصل على إيميل بشكل تلقائي، هيحتاج إضافة API route.
- **`SITE.url`** دلوقتي محطوط `https://www.imac-eg.com` كقيمة مبدئية — غيّرها للدومين الحقيقي قبل النشر
  علشان الـ sitemap والـ canonical والـ Open Graph يبقوا صح.
- الموقع كله **static** — يقدر يتنشر على Vercel أو أي استضافة بتدعم Next.js من غير أي إعداد إضافي.
