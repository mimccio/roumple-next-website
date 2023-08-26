import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import { cl } from '@/utils'
import './globals.css'
import { fallbackLng } from './i18n/settings'

const nunito = Nunito({ subsets: ['latin'] })

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const lang = params.lang ?? fallbackLng
  const title = 'Roumple'
  const description = lang === 'fr' ? 'Todo list pour tâches et routines' : 'Todo list for tasks and  routines'

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: 'https://www.roumple.com',
      type: 'website',
    },
  }
}

interface Props {
  children: React.ReactNode
  params: { lang: string }
}

export default function RootLayout({ children, params }: Props) {
  const lang = params.lang ?? fallbackLng

  return (
    <html lang={lang}>
      <body className={cl('flex h-full min-h-screen flex-col bg-gray-100 text-gray-700', nunito.className)}>
        {children}
      </body>
    </html>
  )
}
