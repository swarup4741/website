import { ReactNode } from 'react'

interface titleProps {
  title: string
  children: ReactNode
}
export default function Activity({ title, children }: titleProps) {
  return (
    <li className="space-y-1">
      <h4 className="relative sub-thread-mark">{title}</h4>
      <p>{children}</p>
    </li>
  )
}
