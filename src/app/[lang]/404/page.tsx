import Image from 'next/image'
import error404Img from '@/assets/error-404.png'
import { useTranslation } from '@/app/i18n'

interface Props {
  params: { lang: string }
}

export const metadata = {
  title: '404',
}

export default async function Page({ params: { lang } }: Props) {
  const { t } = await useTranslation(lang, ['nav', 'message'])

  return (
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
  )
}
