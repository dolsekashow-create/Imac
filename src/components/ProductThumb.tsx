import Image from 'next/image'
import { productImage, productName, type ProductCategory } from '@/data/products'
import ProductIcon from './ProductIcons'
import type { Locale } from '@/lib/i18n'

/**
 * صورة الفئة — صورة حقيقية من البروشور، وأيقونة كبديل لو مفيش صورة
 */
export default function ProductThumb({
  product,
  locale,
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  className = '',
  zoom = true,
}: {
  product: ProductCategory
  locale: Locale
  sizes?: string
  className?: string
  zoom?: boolean
}) {
  const src = productImage(product)

  return (
    <div className={`relative overflow-hidden bg-white ${className}`}>
      {src ? (
        <Image
          src={src}
          alt={productName(product, locale)}
          fill
          sizes={sizes}
          className={`object-contain p-4 ${zoom ? 'transition-transform duration-500 group-hover:scale-[1.06]' : ''}`}
        />
      ) : (
        <span className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-sand-100 to-brand-50 text-brand-600">
          <ProductIcon name={product.icon} className="h-16 w-16" />
        </span>
      )}
    </div>
  )
}

/** نسخة صغيرة للقوائم الجانبية والقائمة المنسدلة */
export function ProductThumbMini({
  product,
  locale,
  className = 'h-10 w-10',
}: {
  product: ProductCategory
  locale: Locale
  className?: string
}) {
  const src = productImage(product)

  return (
    <span className={`relative shrink-0 overflow-hidden rounded-sm border border-steel-200 bg-white ${className}`}>
      {src ? (
        <Image
          src={src}
          alt={productName(product, locale)}
          fill
          sizes="40px"
          className="object-contain p-0.5"
        />
      ) : (
        <span className="absolute inset-0 flex items-center justify-center bg-sand-100 text-brand-600">
          <ProductIcon name={product.icon} className="h-5 w-5" />
        </span>
      )}
    </span>
  )
}
