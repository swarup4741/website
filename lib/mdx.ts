import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import readingTime from 'reading-time'
import rehypePrism from '@mapbox/rehype-prism'
import { bundleMDX } from 'mdx-bundler'

const ROOT_PATH = process.cwd()

export async function getFiles() {
  return fs.readdirSync(path.join(ROOT_PATH, 'data'))
}

export async function getFileBySlug(slug: string) {
  const source = fs.readFileSync(
    path.join(ROOT_PATH, 'data', `${slug}.mdx`),
    'utf8'
  )

  if (process.platform === 'win32') {
    process.env.ESBUILD_BINARY_PATH = path.join(
      process.cwd(),
      'node_modules',
      'esbuild',
      'esbuild.exe'
    )
  } else {
    process.env.ESBUILD_BINARY_PATH = path.join(
      process.cwd(),
      'node_modules',
      'esbuild',
      'bin',
      'esbuild'
    )
  }

  const { content } = matter(source)
  const { code, frontmatter } = await bundleMDX(source, {
    xdmOptions: options => {
      options.rehypePlugins = [rehypePrism]
      return options
    }
  })

  return {
    code,
    frontmatter: {
      readingTime: readingTime(content),
      slug,
      ...frontmatter
    }
  }
}
