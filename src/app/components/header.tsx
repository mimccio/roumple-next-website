import Link from 'next/link'
import { useTranslation } from '@/app/i18n'
import { Logo } from './logo'

interface Props {
  lang: string
}

const myRoumpleUrl = process.env.NEXT_PUBLIC_MY_ROUMPLE_URL

export async function Header({ lang }: Props) {
  const { t } = await useTranslation(lang, 'nav')

  return (
    <header className="fixed left-0 right-0 top-0 z-10 flex h-14 items-center justify-end bg-gray-50 px-6 shadow-md 2xs:justify-between">
      <Link href="/" className="group hidden items-center gap-4 2xs:flex" aria-label="home">
        <Logo />
        <h2 className="hidden font-bold text-indigo-300 transition-colors group-hover:text-indigo-400 sm:block">
          Roumple
        </h2>
      </Link>

      <a
        href={myRoumpleUrl}
        className="flex items-center rounded-lg border border-indigo-100 bg-indigo-50 px-5 py-1 font-semibold text-indigo-600 transition-colors duration-200 hover:border-indigo-200 hover:bg-indigo-100 hover:text-indigo-700"
      >
        {t('login', { ns: 'nav' })}
      </a>
    </header>
  )
}
