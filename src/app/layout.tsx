// Layout for not-found page (workaround for i18n in not-found page)

import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import { cl } from '@/utils'
import { defaultLocale } from '@/middleware'
import './globals.css'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Roumple',
  description: 'Todo list for tasks and routines',
}

interface Props {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang={defaultLocale}>
      <body className={cl('flex h-full min-h-screen flex-col bg-gray-100 text-gray-700', nunito.className)}>
        {children}
      </body>
    </html>
  )
}
