// This file exist just for not-found page workaround

interface Props {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return <>{children}</>
}
