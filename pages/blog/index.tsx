import BlogPostPreview from '@/components/blog/BlogPostPreview'
import Layout from '@/components/Layout'
import { getFileBySlug, getFiles } from '@/lib/mdx'

interface postProps {
  postMetaArr: any[]
}

export default function blog({ postMetaArr }: postProps) {
  return (
    <Layout>
      {/* Next seo goes here */}

      <h1 className="mb-10">Blog Posts</h1>
      {postMetaArr.map(p => (
        <BlogPostPreview
          key={p.slug}
          slug={p.slug}
          title={p.title}
          summary={p.summary}
          readTime={p.readingTime.text}
        />
      ))}
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = await getFiles()
  const slugs = posts.map(p => p.replace(/\.mdx/, ''))

  const postMetaArr: any[] = []

  await Promise.all(
    slugs.map(async s => {
      const { frontmatter } = await getFileBySlug(s)
      postMetaArr.push(frontmatter)
    })
  )
  return {
    props: { postMetaArr }
  }
}
