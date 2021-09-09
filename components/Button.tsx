import { ReactChild } from 'react'

interface Props {
  href: string
  children: ReactChild
}

export default function Button({ href, children }: Props) {
  return (
    <button className="w-full px-10 py-2 text-sm text-white transition-all bg-black border rounded-md sm:text-base md:text-lg hover:border-gray-800 hover:bg-transparent hover:text-black dark:hover:border-gray-100 dark:text-black dark:bg-white dark:hover:bg-transparent dark:hover:text-white">
      <a href={href}>{children}</a>
    </button>
  )
}
