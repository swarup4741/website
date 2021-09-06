import BlogPostPreview from '@/components/blog/BlogPostPreview'
import Layout from '@/components/Layout'
import { getFileBySlug, getFiles } from '@/lib/mdx'
import { MAIN_URL } from '@/lib/constants'

interface postProps {
  postMetaArr: any[]
}

export default function blog({ postMetaArr }: postProps) {
  return (
    <Layout
      title="Blog"
      description="A written form of the struggles and learnings that I went through as a self taught web developer and what I'm building and learning right now."
      openGraph={{
        url: MAIN_URL + '/',
        title: 'Swarup Kumar Das | Blog',
        description:
          "A written form of the struggles and learnings that I went through as a self taught web developer and what I'm building and learning right now.",
        images: [
          {
            url: MAIN_URL + '/images/og.png',
            alt: 'Og blog page image'
          }
        ],
        site_name: 'Swarup Kumar Das'
      }}
    >
      <h1 className="mb-6">Blog Posts</h1>
      <p className="mb-10">
        A written form of the struggles and learnings that I went through as a
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        self taught web developer and what I'm building and learning right now.
      </p>
      <section className="gap-6 sm:grid sm:grid-cols-2">
        {postMetaArr.map(p => (
          <BlogPostPreview
            key={p.slug}
            slug={p.slug}
            title={p.title}
            summary={p.summary}
            thumbnail={p.image}
          />
        ))}
      </section>
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
