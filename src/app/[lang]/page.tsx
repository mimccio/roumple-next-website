import { useTranslation } from '../i18n'

interface Props {
  params: { lang: string }
}

export default async function Home({ params }: Props) {
  const { t } = await useTranslation(params.lang, 'nav')

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{t('login')}</h1>
    </main>
  )
}
