import { ReactChild } from 'react'

interface Props {
  href: string
  children: ReactChild
}

export default function Button({ href, children }: Props) {
  return (
    <a
      href={href}
      className="inline-block px-10 py-2 text-lg text-center text-white transition-all bg-black border rounded-md hover:border-gray-800 hover:bg-transparent hover:text-black dark:hover:border-gray-100 dark:text-black dark:bg-white dark:hover:bg-transparent dark:hover:text-white"
    >
      {children}
    </a>
  )
}
