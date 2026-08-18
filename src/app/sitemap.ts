import type { MetadataRoute } from 'next'
import { PRODUCTS } from '@/data/products'
import { SITE } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const pages = [
    { path: '', priority: 1, freq: 'weekly' as const },
    { path: '/about', priority: 0.8, freq: 'monthly' as const },
    { path: '/products', priority: 0.9, freq: 'weekly' as const },
    { path: '/clients', priority: 0.7, freq: 'monthly' as const },
    { path: '/contact', priority: 0.8, freq: 'monthly' as const },
  ]

  return [
    ...pages.map((p) => ({
      url: `${SITE.url}${p.path}`,
      lastModified: now,
      changeFrequency: p.freq,
      priority: p.priority,
    })),
    ...PRODUCTS.map((p) => ({
      url: `${SITE.url}/products/${p.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]
}
