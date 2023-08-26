import { ReactNode } from 'react'

interface Props {
  title: string
  description?: string
  children?: ReactNode
}

export function PresentationText({ title, description, children }: Props) {
  return (
    <div className="flex items-center justify-center">
      <div className="flex w-full max-w-sm flex-col p-8 text-center lg:text-left">
        <h3 className="mb-8 text-lg font-bold text-gray-600">{title}</h3>
        <p className="font-semibold text-gray-500">{description}</p>
        {children}
      </div>
    </div>
  )
}
