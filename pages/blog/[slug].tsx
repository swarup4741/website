import { getFileBySlug, getFiles } from '@/lib/mdx'
import Layout from '@/components/Layout'
import { MDXRemote } from 'next-mdx-remote'
import { MDXComponents } from '@/components/blog/MDXComponents'
import BlogPost from '@/components/blog/BlogPost'
import Reactions from '@/components/Reactions'

interface singlePostProps {
  mdxSource: any
  frontmatter: any
}

export default function blogPost({ mdxSource, frontmatter }: singlePostProps) {
  return (
    <Layout>
      <div className="mt-6">
        <BlogPost
          publishedAt={frontmatter.publishedAt}
          title={frontmatter.title}
          image={frontmatter.image}
        />
        <div className="prose md:prose-xl dark:prose-dark mt-14">
          <MDXRemote {...mdxSource} components={MDXComponents} />
        </div>
      </div>
      <Reactions />
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
