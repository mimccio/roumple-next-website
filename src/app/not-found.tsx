// When we can, move this file in [lang], remove use client, delete app/layout.tsx and handle trad like other files (https://github.com/vercel/next.js/discussions/12477)

'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import error404Img from '@/assets/error-404.png'
import { useTranslation } from '@/app/i18n/client'
import { Logo } from './components/logo'
import { fallbackLng } from './i18n/settings'
import { cl } from '@/utils'

const myRoumpleUrl = process.env.NEXT_PUBLIC_MY_ROUMPLE_URL

export default function NotFound() {
  const [lang, setLang] = useState(fallbackLng)

  useEffect(() => {
    const lang = navigator ? navigator.language : fallbackLng
    setLang(lang.slice(0, 2))
  }, [])

  const { t } = useTranslation(lang, ['nav', 'message'])

  return (
    <html lang={lang}>
      <body className={cl('flex h-full min-h-screen flex-col bg-gray-100 text-gray-700')}>
        <header className="fixed left-0 right-0 top-0 z-10 flex h-14 items-center justify-end bg-gray-50 px-6 shadow-md 2xs:justify-between">
          <a href="/" className="group hidden items-center gap-4 2xs:flex">
            <Logo />
            <h2 className="hidden font-bold text-indigo-300 transition-colors group-hover:text-indigo-400 sm:block">
              Roumple
            </h2>
          </a>

          <a
            href={myRoumpleUrl}
            className="flex items-center rounded-lg border border-indigo-100 bg-indigo-50 px-5 py-1 font-semibold text-indigo-400 transition-colors duration-200 hover:border-indigo-200 hover:bg-indigo-100 hover:text-indigo-500"
          >
            {t('login', { ns: 'nav' })}
          </a>
        </header>
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
                alt="404"
                priority
              />
            </div>

            <div className="flex justify-center">
              <a
                className="mt-16 block rounded-lg border border-indigo-200 px-4 py-2 font-semibold text-indigo-400 transition-colors hover:border-indigo-300 hover:text-indigo-500"
                href="/"
              >
                {t('Back to home', { ns: 'nav' })}
              </a>
            </div>
          </div>
        </main>
      </body>
    </html>
  )
}
