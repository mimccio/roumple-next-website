interface Props {
  params: { lang: string }
}

export default function Home({ params }: Props) {
  console.log('params.lang :', params.lang)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">hello world {params.lang} </main>
  )
}
