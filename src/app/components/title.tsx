import { Trans } from 'react-i18next/TransWithoutContext'
import { useTranslation } from '../i18n'

interface Props {
  lang: string
}

export async function Title({ lang }: Props) {
  const { t } = await useTranslation(lang, 'home')

  return (
    <h1 className="mb-12 px-2 text-center text-3xl font-semibold text-indigo-500 opacity-90 2xs:px-4 lg:text-4xl xl:text-5xl">
      <Trans i18nKey="welcome" ns="home" t={t}>
        Welcome to
        <span className="bg-gradient-to-r from-emerald-500 via-pink-400 to-indigo-500 bg-clip-text text-transparent">
          Roumple
        </span>
      </Trans>
    </h1>
  )
}
