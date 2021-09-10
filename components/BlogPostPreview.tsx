import Link from 'next/link'
import { formatDate } from '@/lib/date'

interface PostPreviewProps {
  slug: string
  title: string
  summary: string
  publishedAt: string
}
export default function BlogPostPreview({
  slug,
  title,
  summary,
  publishedAt
}: PostPreviewProps) {
  return (
    <Link href={`/blog/${slug}`} passHref>
      <a className="block">
        <div className="p-3 space-y-2 transition-all border border-gray-300 rounded-md dark:border-gray-800 dark:hover:border-gray-700 hover:border-gray-400">
          <h4>{title}</h4>
          <p>{formatDate(publishedAt)}</p>
          <p>{summary}</p>
        </div>
      </a>
    </Link>
  )
}
