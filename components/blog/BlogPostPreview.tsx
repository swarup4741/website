import Link from 'next/link'

interface PostPreviewProps {
  slug: string
  title: string
  summary: string
  readTime: string
}
export default function BlogPostPreview({
  slug,
  title,
  summary,
  readTime
}: PostPreviewProps) {
  return (
    <Link href={`/blog/${slug}`} passHref>
      <a className="flex gap-3 p-3 border border-gray-300 rounded-md dark:border-gray-800">
        <div>
          <h3 className="mb-1 font-medium">{title}</h3>
          <p className="mt-1 sm:mt-0">{readTime}</p>
          <p className="my-2">{summary}</p>
        </div>
      </a>
    </Link>
  )
}
