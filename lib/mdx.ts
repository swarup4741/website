import { bundleMDX } from 'mdx-bundler'
import { readFileSync, readdirSync } from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import rehypePrism from '@mapbox/rehype-prism'

const ROOT_PATH = process.cwd()

export async function getFiles() {
  return readdirSync(join(ROOT_PATH, 'data'))
}

export async function getFileBySlug(slug: string) {
  const source = readFileSync(join(ROOT_PATH, 'data', `${slug}.mdx`), 'utf8')
  const { code, frontmatter } = await bundleMDX(source, {
    xdmOptions: options => {
      options.rehypePlugins = [...(options.rehypePlugins ?? []), rehypePrism]
      return options
    }
  })
  const { content } = matter(source)

  return {
    code,
    frontmatter: {
      readingTime: readingTime(content),
      slug,
      ...frontmatter
    }
  }
}

export async function getAllFilesFrontMatter() {
  const files = readdirSync(join(ROOT_PATH, 'data'))

  return files.reduce((allPosts: any[], postSlug: string) => {
    const source = readFileSync(join(ROOT_PATH, 'data', postSlug), 'utf8')
    const { data } = matter(source)

    return [
      {
        ...data,
        slug: postSlug.replace('.mdx', '')
      },

      ...allPosts
    ]
  }, [])
}
