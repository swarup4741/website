import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <main className="container max-w-3xl px-6 py-8 mx-auto overflow-hidden">
      {children}
    </main>
  )
}
