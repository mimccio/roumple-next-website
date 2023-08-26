import { useTranslation } from '@/app/i18n'

interface Props {
  lang: string
}

const myRoumpleUrl = process.env.NEXT_PUBLIC_MY_ROUMPLE_URL

export async function Cta({ lang }: Props) {
  const { t } = await useTranslation(lang, 'nav')

  return (
    <a
      href={myRoumpleUrl}
      className="mx-4 my-16 block flex-wrap rounded-lg bg-indigo-400 px-10 py-4 text-center font-semibold text-white shadow-xl shadow-indigo-200 transition-all duration-200 hover:scale-105 hover:bg-indigo-500 hover:shadow-lg hover:shadow-indigo-300"
    >
      <span className="text-center">{t('Go to my roumple', { ns: 'nav' })}</span>
    </a>
  )
}
