export default function InlineCode({ children }: { children: string }) {
  return (
    <code className="p-1 bg-gray-200 border border-gray-300 rounded-md dark:border-gray-700 dark:text-gray-100 dark:bg-gray-800">
      {children}
    </code>
  )
}
