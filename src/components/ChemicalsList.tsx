'use client'

import { useMemo, useState } from 'react'
import { CHEMICALS, CHEMICALS_COUNT } from '@/data/chemicals'
import { t, type Locale } from '@/lib/i18n'

export default function ChemicalsList({ locale }: { locale: Locale }) {
  const [q, setQ] = useState('')
  const [letter, setLetter] = useState<string | null>(null)

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase()
    return CHEMICALS.map((g) => ({
      ...g,
      items: g.items.filter((it) => (term ? it.toLowerCase().includes(term) : true)),
    })).filter((g) => g.items.length > 0 && (letter ? g.letter === letter : true))
  }, [q, letter])

  const total = filtered.reduce((n, g) => n + g.items.length, 0)

  return (
    <div>
      <div className="sticky top-24 z-10 rounded-sm border border-steel-200 bg-white/95 p-4 backdrop-blur-sm sm:p-5">
        <div className="relative">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="pointer-events-none absolute top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-steel-400 start-4"
            aria-hidden
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={t('chem_search_ph', locale)}
            aria-label={t('chem_search_label', locale)}
            className="w-full rounded-sm border border-steel-200 bg-sand-50 py-3.5 text-[14px] text-steel-800 outline-none transition placeholder:text-steel-400 focus:border-brand-500 focus:bg-white ps-12 pe-4"
          />
        </div>

        <div className="mt-4 flex flex-wrap gap-1.5">
          <button
            type="button"
            onClick={() => setLetter(null)}
            className={`h-8 min-w-8 rounded-sm px-2 text-[12px] font-extrabold transition ${
              letter === null
                ? 'bg-brand-700 text-white'
                : 'bg-steel-100 text-steel-600 hover:bg-brand-100 hover:text-brand-800'
            }`}
          >
            {t('chem_all', locale)}
          </button>
          {CHEMICALS.map((g) => (
            <button
              key={g.letter}
              type="button"
              onClick={() => setLetter(letter === g.letter ? null : g.letter)}
              className={`h-8 min-w-8 rounded-sm px-2 text-[12px] font-extrabold transition ${
                letter === g.letter
                  ? 'bg-brand-700 text-white'
                  : 'bg-steel-100 text-steel-600 hover:bg-brand-100 hover:text-brand-800'
              }`}
            >
              {g.letter}
            </button>
          ))}
        </div>

        <p className="mt-4 text-[12.5px] font-semibold text-steel-500">
          {total} {t('chem_of_total', locale)} {CHEMICALS_COUNT} {t('chem_total_suffix', locale)}
        </p>
      </div>

      {total === 0 ? (
        <div className="mt-10 rounded-sm border border-dashed border-steel-300 bg-sand-100 p-12 text-center">
          <p className="text-[15px] font-bold text-steel-700">{t('chem_none_title', locale)}</p>
          <p className="mt-2 text-[13.5px] text-steel-500">{t('chem_none_body', locale)}</p>
        </div>
      ) : (
        <div className="mt-8 space-y-9">
          {filtered.map((g) => (
            <section key={g.letter}>
              <h3 className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-brand-700 text-[14px] font-black text-white">
                  {g.letter}
                </span>
                <span className="h-px grow bg-steel-200" />
                <span className="text-[12px] font-bold text-steel-400">{g.items.length}</span>
              </h3>
              <ul className="mt-4 grid gap-x-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
                {g.items.map((it) => (
                  <li
                    key={it}
                    dir="ltr"
                    className="flex items-start gap-2.5 border-b border-steel-100 py-2 text-left text-[13.5px] leading-7 text-steel-700"
                  >
                    <span className="mt-2.5 h-1 w-1 shrink-0 rotate-45 bg-brand-500" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      )}
    </div>
  )
}
