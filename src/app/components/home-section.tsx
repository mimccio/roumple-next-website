import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export function HomeSection({ children }: Props) {
  return <section className="grid w-full max-w-3xl grid-cols-1 gap-4 lg:grid-cols-2">{children}</section>
}
