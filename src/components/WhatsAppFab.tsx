'use client'

import { useEffect, useState } from 'react'
import { whatsappLink } from '@/lib/site'
import { IconWhatsApp } from './Header'

export default function WhatsAppFab() {
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > 400)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-5 left-5 z-40 flex flex-col gap-3 transition-all duration-300 ${
        shown ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="العودة لأعلى الصفحة"
        className="flex h-11 w-11 items-center justify-center rounded-sm border border-steel-200 bg-white text-steel-700 shadow-lg transition hover:border-brand-500 hover:text-brand-700"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-4 w-4" aria-hidden>
          <path d="m6 15 6-6 6 6" />
        </svg>
      </button>

      <a
        href={whatsappLink('السلام عليكم، حابب أستفسر عن منتجاتكم وأسعاركم')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصل معنا على واتساب"
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/30 transition hover:scale-105"
      >
        <IconWhatsApp className="h-7 w-7" />
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-20" />
      </a>
    </div>
  )
}
