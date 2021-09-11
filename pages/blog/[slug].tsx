import { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import Layout from '@/components/Layout'
import MDXComponents from '@/components/MDXComponents'
import BlogPostHeader from '@/components/BlogPost'
import Reactions from '@/components/Reactions'
import { getFileBySlug, getFiles } from '@/lib/mdx'
import { MAIN_URL } from '@/lib/constants'

interface singlePostProps {
  code: any
  frontmatter: any
}

const BlogPost = ({ code, frontmatter }: singlePostProps) => {
  const tags = frontmatter.tags.split(',')
  const Component: any = useMemo(() => getMDXComponent(code), [code])

  return (
    <Layout
      title={frontmatter.title}
      description={frontmatter.summary}
      openGraph={{
        url: `${MAIN_URL}/blog/${frontmatter.slug}`,
        title: frontmatter.title,
        description: frontmatter.summary,
        type: 'article',
        article: {
          publishedTime: new Date(frontmatter.publishedAt).toISOString(),
          authors: ['Swarup Kumar Das'],
          tags: [...tags]
        },
        images: [
          {
            url: `${MAIN_URL}/images${frontmatter.image}`,
            alt: 'blog banner image'
          }
        ],
        site_name: 'Swarup Kumar Das'
      }}
      twitterImage={`/images${frontmatter.image}`}
    >
      <BlogPostHeader
        readTime={frontmatter.readingTime.text}
        publishedAt={frontmatter.publishedAt}
        title={frontmatter.title}
        image={frontmatter.image}
        slug={frontmatter.slug}
      />

      <article className="mt-10 prose lg:prose-xl dark:prose-dark">
        <Component components={MDXComponents} />
      </article>

      <Reactions slug={frontmatter.slug} />
    </Layout>
  )
}

export async function getStaticPaths() {
  const posts = await getFiles()

  return {
    paths: posts.map(p => ({
      params: {
        slug: p.replace(/\.mdx/, '')
      }
    })),
    fallback: false
  }
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const post = await getFileBySlug(params.slug)

  return { props: { ...post } }
}

export default BlogPost
