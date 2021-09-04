import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import readingTime from 'reading-time'
import { serialize } from 'next-mdx-remote/serialize'

const ROOT_PATH = process.cwd()

export async function getFiles() {
  return fs.readdirSync(path.join(ROOT_PATH, 'data'))
}

export async function getFileBySlug(slug: string) {
  const source = fs.readFileSync(
    path.join(ROOT_PATH, 'data', `${slug}.mdx`),
    'utf8'
  )

  const { data, content } = matter(source)
  const mdxSource = await serialize(content, { scope: data })

  return {
    mdxSource,
    frontmatter: {
      wordCount: content.split(/\s+/gu).length,
      readingTime: readingTime(content),
      slug: slug,
      ...data
    }
  }
}
