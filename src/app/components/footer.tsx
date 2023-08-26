import { useTranslation } from '@/app/i18n'

interface Props {
  lang: string
}

const myRoumpleUrl = process.env.NEXT_PUBLIC_MY_ROUMPLE_URL

export async function Footer({ lang }: Props) {
  const { t } = await useTranslation(lang, ['nav', 'message'])

  return (
    <div className="flex w-full flex-col items-center bg-gradient-to-b from-indigo-100 from-10% via-30% to-indigo-300 to-80% px-12 lg:px-20">
      <div className="mx-20 w-full rounded-lg border border-indigo-200 bg-indigo-200 lg:mx-60"></div>
      <div className="grid w-full max-w-3xl grid-cols-1 items-end justify-between gap-y-8 py-20 lg:grid-cols-2">
        <ol className="flex text-sm flex-col gap-4 pt-16">
          <li>
            <a href="/" className="font-semibold text-indigo-600 transition-colors hover:text-indigo-700 lg:text-sm">
              {t('Home', { ns: 'nav' })}
            </a>
          </li>
          <li>
            <a
              href={myRoumpleUrl}
              className=" font-semibold text-indigo-600 transition-colors hover:text-indigo-700 lg:text-sm"
            >
              {t('My roumple app', { ns: 'nav' })}
            </a>
          </li>
        </ol>
        <div className="flex justify-end">
          <div className="mt-12 text-xs text-indigo-500">
            Copyright © 2023 | {t('All rights reserved.', { ns: 'message' })}
            <p></p>
          </div>
        </div>
      </div>
    </div>
  )
}
