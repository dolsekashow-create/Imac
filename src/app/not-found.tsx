import Link from 'next/link'
import { Container } from '@/components/ui'
import { DotGrid, IndustrialSkyline } from '@/components/IndustrialArt'
import { PHONES } from '@/lib/site'

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-steel-950 pt-32 pb-24">
      <div className="absolute inset-0 bg-linear-to-bl from-steel-950 via-steel-900 to-brand-950" />
      <DotGrid className="absolute inset-0 text-white/[0.06]" />
      <IndustrialSkyline className="pointer-events-none absolute inset-x-0 bottom-0 h-56 w-full text-brand-200/20" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-steel-950 to-transparent" />

      <Container className="relative text-center">
        <p className="text-7xl leading-none font-black text-brand-500/60 sm:text-8xl" dir="ltr">
          404
        </p>
        <h1 className="mt-6 text-3xl leading-[1.4] font-extrabold text-white sm:text-4xl">
          الصفحة اللي بتدوّر عليها مش موجودة
        </h1>
        <div className="rule-brand mx-auto mt-6" />
        <p className="mx-auto mt-6 max-w-xl text-[15px] leading-9 text-steel-300">
          يمكن الرابط اتغيّر أو الصفحة اتشالت. ترجع للرئيسية أو تتصفّح المنتجات — ولو محتاج صنف معيّن كلّمنا
          على طول.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-primary">
            الرئيسية
          </Link>
          <Link href="/products" className="btn-outline">
            المنتجات
          </Link>
          <a href={`tel:${PHONES[0].tel}`} className="btn-outline">
            اتصل بنا
          </a>
        </div>
      </Container>
    </section>
  )
}
