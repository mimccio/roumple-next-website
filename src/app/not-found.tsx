// When we can, move this file in [lang], remove use client, delete app/layout.tsx and handle trad like other files (https://github.com/vercel/next.js/discussions/12477)

'use client'

import Image from 'next/image'
import { useTranslation } from '@/app/i18n/client'
import error404Img from '@/assets/error-404.png'
import { defaultLocale } from '@/middleware'
import { Header } from './components/header'
import { useEffect, useState } from 'react'

export default function NotFound() {
  const [lang, setLang] = useState(defaultLocale)

  useEffect(() => {
    const lang = navigator ? navigator.language : defaultLocale
    setLang(lang)
  }, [])

  const { t } = useTranslation(lang, ['nav', 'message'])

  return (
    <>
      <Header lang={lang} />
      <main className="mt-14 flex w-full flex-1 flex-col items-center gap-20 bg-gradient-to-b from-gray-100 to-indigo-100 px-8 py-20 lg:px-12">
        <div className="flex w-full flex-1 flex-col">
          <h4 className="mx-auto mt-20 text-center font-semibold text-gray-400 lg:text-lg">
            {t('Page not found', { ns: 'message' })}
          </h4>

          <div className="mt-16 flex justify-center px-2">
            <Image
              src={error404Img}
              className="w-64 opacity-50 md:h-72 md:w-72 lg:h-80 lg:w-80"
              aria-hidden="true"
              alt=""
            />
          </div>

          <a
            className="mt-16 block rounded-lg border border-indigo-200 px-4 py-2 font-semibold text-indigo-400 transition-colors hover:border-indigo-300 hover:text-indigo-500"
            href="/"
          >
            {t('Back to home', { ns: 'nav' })}
          </a>
        </div>
      </main>
    </>
  )
}
