import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import { cl } from '@/utils'
import { fallbackLng } from '../i18n/settings'
import { Header } from '../components/header'
import { Footer } from '../components/footer'
import '../globals.css'

const nunito = Nunito({ subsets: ['latin'] })

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const lang = params.lang ?? fallbackLng
  const title = 'Roumple'
  const description = lang === 'fr' ? 'Todo list pour tâches et routines' : 'Todo list for tasks and  routines'

  return {
    title: {
      default: title,
      template: `${title} | %s`,
    },
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
        <Header lang={lang} />

        <main className="mt-14 flex w-full flex-1 flex-col items-center gap-20 bg-gradient-to-b from-gray-100 to-indigo-100 px-8 py-20 lg:px-12">
          {children}
        </main>
        <Footer lang={lang} />
      </body>
    </html>
  )
}
