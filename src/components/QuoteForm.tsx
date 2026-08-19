'use client'

import { useState } from 'react'
import { PRODUCTS, productName } from '@/data/products'
import { whatsappLink, quoteMailto } from '@/lib/site'
import { t, type Locale } from '@/lib/i18n'

type Fields = {
  name: string
  company: string
  phone: string
  email: string
  category: string
  message: string
}

const EMPTY: Fields = { name: '', company: '', phone: '', email: '', category: '', message: '' }

export default function QuoteForm({ locale }: { locale: Locale }) {
  const [f, setF] = useState<Fields>(EMPTY)
  const [touched, setTouched] = useState(false)

  const set =
    (k: keyof Fields) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setF((prev) => ({ ...prev, [k]: e.target.value }))

  const valid = f.name.trim().length > 1 && f.phone.trim().length > 5 && f.message.trim().length > 4

  const compose = () =>
    [
      t('form_subject', locale),
      '',
      `${t('form_f_name', locale)}: ${f.name}`,
      f.company && `${t('form_f_company', locale)}: ${f.company}`,
      `${t('form_f_phone', locale)}: ${f.phone}`,
      f.email && `${t('form_f_email', locale)}: ${f.email}`,
      f.category && `${t('form_f_category', locale)}: ${f.category}`,
      '',
      t('form_f_details', locale),
      f.message,
    ]
      .filter(Boolean)
      .join('\n')

  const guard = (e: React.MouseEvent) => {
    if (!valid) {
      e.preventDefault()
      setTouched(true)
    }
  }

  return (
    <form onSubmit={(e) => e.preventDefault()} className="rounded-sm border border-steel-200 bg-white p-7 sm:p-9" noValidate>
      <h2 className="text-xl font-extrabold text-steel-900">{t('form_title', locale)}</h2>
      <div className="rule-brand mt-4" />
      <p className="mt-5 text-[13.5px] leading-8 text-steel-600">{t('form_sub', locale)}</p>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <Field
          label={t('form_name', locale)}
          required
          value={f.name}
          onChange={set('name')}
          invalid={touched && f.name.trim().length < 2}
          placeholder={t('form_name_ph', locale)}
        />
        <Field
          label={t('form_company', locale)}
          value={f.company}
          onChange={set('company')}
          placeholder={t('form_optional', locale)}
        />
        <Field
          label={t('form_phone', locale)}
          required
          type="tel"
          value={f.phone}
          onChange={set('phone')}
          invalid={touched && f.phone.trim().length < 6}
          placeholder="01xxxxxxxxx"
          ltr
        />
        <Field
          label={t('form_email', locale)}
          type="email"
          value={f.email}
          onChange={set('email')}
          placeholder={t('form_optional', locale)}
          ltr
        />

        <label className="sm:col-span-2">
          <span className="block text-[13px] font-bold text-steel-700">{t('form_category', locale)}</span>
          <select
            value={f.category}
            onChange={set('category')}
            className="mt-2 w-full appearance-none rounded-sm border border-steel-200 bg-sand-50 px-4 py-3.5 text-[14px] text-steel-800 outline-none transition focus:border-brand-500 focus:bg-white"
          >
            <option value="">{t('form_category_ph', locale)}</option>
            {PRODUCTS.map((p) => (
              <option key={p.slug} value={`${productName(p, locale)} (${p.name})`}>
                {productName(p, locale)}
              </option>
            ))}
          </select>
        </label>

        <label className="sm:col-span-2">
          <span className="block text-[13px] font-bold text-steel-700">
            {t('form_message', locale)} <span className="text-brand-600">*</span>
          </span>
          <textarea
            value={f.message}
            onChange={set('message')}
            rows={6}
            placeholder={t('form_message_ph', locale)}
            className={`mt-2 w-full resize-y rounded-sm border bg-sand-50 px-4 py-3.5 text-[14px] leading-8 text-steel-800 outline-none transition placeholder:text-steel-400 focus:bg-white ${
              touched && f.message.trim().length < 5
                ? 'border-red-400 focus:border-red-500'
                : 'border-steel-200 focus:border-brand-500'
            }`}
          />
        </label>
      </div>

      {touched && !valid && (
        <p className="mt-5 rounded-sm bg-red-50 px-4 py-3 text-[13px] font-semibold text-red-700">
          {t('form_error', locale)}
        </p>
      )}

      <div className="mt-7 flex flex-wrap gap-3">
        <a
          href={valid ? whatsappLink(compose()) : '#'}
          target="_blank"
          rel="noopener noreferrer"
          onClick={guard}
          aria-disabled={!valid}
          className={`btn rounded-sm bg-[#25D366] px-7 text-white transition hover:brightness-95 ${
            valid ? '' : 'cursor-not-allowed opacity-60'
          }`}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
            <path d="M17.5 14.4c-.3-.2-1.7-.9-2-1-.3-.1-.5-.2-.7.1s-.7 1-.9 1.2c-.2.2-.3.2-.6.1a8.2 8.2 0 0 1-2.4-1.5 9 9 0 0 1-1.7-2.1c-.2-.3 0-.5.1-.6l.5-.6.3-.5v-.5l-1-2.3c-.2-.6-.4-.5-.6-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2m0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2" />
          </svg>
          {t('form_send_wa', locale)}
        </a>

        <a
          href={valid ? quoteMailto(`${t('form_subject', locale)} — ${f.company || f.name}`, compose()) : '#'}
          onClick={guard}
          aria-disabled={!valid}
          className={`btn-ghost ${valid ? '' : 'cursor-not-allowed opacity-60'}`}
        >
          {t('form_send_mail', locale)}
        </a>
      </div>
    </form>
  )
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  required,
  invalid,
  ltr,
}: {
  label: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  type?: string
  required?: boolean
  invalid?: boolean
  ltr?: boolean
}) {
  return (
    <label className="block">
      <span className="block text-[13px] font-bold text-steel-700">
        {label} {required && <span className="text-brand-600">*</span>}
      </span>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        dir={ltr ? 'ltr' : undefined}
        className={`mt-2 w-full rounded-sm border bg-sand-50 px-4 py-3.5 text-[14px] text-steel-800 outline-none transition placeholder:text-steel-400 focus:bg-white ${
          ltr ? 'text-left' : ''
        } ${invalid ? 'border-red-400 focus:border-red-500' : 'border-steel-200 focus:border-brand-500'}`}
      />
    </label>
  )
}
