// When we can, move this file in [lang], remove use client, delete app/layout.tsx and handle trad like other files (https://github.com/vercel/next.js/discussions/12477)

'use client'

import { useTranslation } from '@/app/i18n/client'

export default function NotFound() {
  const { language } = navigator
  const { t } = useTranslation(language, 'nav')

  return <h1>{t('login')}</h1>
}
