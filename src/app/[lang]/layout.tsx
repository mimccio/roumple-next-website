import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import { cl } from '@/utils'
import { defaultLocale } from '@/middleware'
import '../globals.css'
import { Header } from '../components/header'

const nunito = Nunito({ subsets: ['latin'] })

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const lang = params.lang ?? defaultLocale

  return {
    title: 'Roumple',
    description: lang === 'fr' ? 'Todo list pour tâches et routines' : 'Todo list for tasks and routines',
  }
}

interface Props {
  children: React.ReactNode
  params: { lang: string }
}

export default function RootLayout({ children, params }: Props) {
  const lang = params.lang ?? defaultLocale

  return (
    <html lang={lang}>
      <body className={cl('flex h-full min-h-screen flex-col bg-gray-100 text-gray-700', nunito.className)}>
        <Header lang={lang} />
        {children}
      </body>
    </html>
  )
}
