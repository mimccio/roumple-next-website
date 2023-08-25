import { useTranslation } from '../i18n'

interface Props {
  params: { lang: string }
}

export default async function Home({ params }: Props) {
  const { t } = await useTranslation(params.lang)
  console.log('params.lang :', params.lang)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{t('title')}</h1> hello world {params.lang}{' '}
    </main>
  )
}
