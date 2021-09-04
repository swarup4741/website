import Link from 'next/link'
import Image from 'next/image'

interface PostPreviewProps {
  slug: string
  title: string
  summary: string
  thumbnail: string
}
export default function BlogPostPreview({
  slug,
  title,
  summary,
  thumbnail
}: PostPreviewProps) {
  return (
    <Link href={`/blog/${slug}`} passHref>
      <a>
        <div className="p-3 space-y-3 transition-all border border-gray-300 rounded-md dark:border-gray-800 dark:hover:border-gray-700 hover:border-gray-400">
          <Image
            src={thumbnail}
            layout="responsive"
            height={216}
            width={384}
            objectFit="cover"
            className="rounded-md"
            alt="blog thumbnail"
          />
          <h3 className="font-medium">{title}</h3>
          <p>{summary}</p>
        </div>
      </a>
    </Link>
  )
}
