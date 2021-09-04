import { getFileBySlug, getFiles } from '@/lib/mdx'
import Layout from '@/components/Layout'
import { MDXRemote } from 'next-mdx-remote'
import { MDXComponents } from '@/components/blog/MDXComponents'
import BlogPost from '@/components/blog/BlogPost'
import Reactions from '@/components/Reactions'
import { MAIN_URL } from '@/lib/constants'

interface singlePostProps {
  mdxSource: any
  frontmatter: any
}

export default function blogPost({ mdxSource, frontmatter }: singlePostProps) {
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
          publishedTime: frontmatter.publishedAt,
          authors: ['Swarup Kumar Das']
        },
        images: [
          {
            url: `${MAIN_URL + frontmatter.image}`,
            width: 800,
            height: 600,
            alt: 'Og blog post image'
          }
        ],
        site_name: 'Swarup Kumar Das'
      }}
    >
      <div className="mt-6">
        <BlogPost
          readTime={frontmatter.readingTime.text}
          publishedAt={frontmatter.publishedAt}
          title={frontmatter.title}
          image={frontmatter.image}
          slug={frontmatter.slug}
        />

        <div className="prose md:prose-xl dark:prose-dark mt-14">
          <MDXRemote {...mdxSource} components={MDXComponents} />
        </div>
      </div>
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

  return { props: post }
}
