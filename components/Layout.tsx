import { ReactNode } from 'react'
import { NextSeo, NextSeoProps } from 'next-seo'
import { MAIN_URL } from '@/lib/constants'

interface LayoutProps {
  children: ReactNode
  title: NextSeoProps['title']
  description: NextSeoProps['description']
  openGraph?: NextSeoProps['openGraph']
}

export default function Layout({
  children,
  title,
  description,
  openGraph
}: LayoutProps) {
  return (
    <main className="container max-w-3xl px-6 py-8 mx-auto overflow-hidden">
      <NextSeo
        title={title}
        titleTemplate="Swarup Kumar Das | %s"
        defaultTitle="Swarup Kumar Das"
        description={description}
        canonical={MAIN_URL + '/'}
        openGraph={openGraph}
        twitter={{
          handle: '@swarup4741',
          site: '@swarup4741',
          cardType: 'summary_large_image'
        }}
        robotsProps={{
          nosnippet: true,
          notranslate: true,
          noimageindex: true,
          noarchive: true,
          maxSnippet: -1,
          maxImagePreview: 'standard',
          maxVideoPreview: -1
        }}
        additionalLinkTags={[
          {
            rel: 'shortcut icon',
            href: '/icons/favicon.ico',
            type: 'image/x-icon'
          },
          {
            rel: 'apple-touch-icon',
            href: '/icons/apple-touch-icon.png',
            sizes: '180x180'
          },
          {
            rel: 'icon',
            href: '/icons/favicon-16x16.png',
            sizes: '16x16'
          },
          {
            rel: 'icon',
            href: '/icons/favicon-32x32.png',
            sizes: '32x32'
          },
          {
            rel: 'icon',
            href: '/icons/android-chrome-192x192.png',
            sizes: '192x192'
          },
          {
            rel: 'icon',
            href: '/icons/android-chrome-512x512.png',
            sizes: '512x512'
          },
          {
            rel: 'mask-icon',
            href: '/icons/safari-pinned-tab.svg',
            color: '#000000'
          },
          {
            rel: 'manifest',
            href: '/icons/site.webmanifest'
          }
        ]}
        additionalMetaTags={[
          {
            name: 'apple-mobile-web-app-title',
            content: 'Swarup Kumar Das'
          },
          {
            name: 'application-name',
            content: 'Swarup Kumar Das'
          },
          {
            name: 'msapplication-TileColor',
            content: '#d0d0d0'
          },
          {
            name: 'msapplication-config',
            content: '/icons/browserconfig.xml'
          },
          {
            name: 'theme-color',
            content: '#ffffff'
          }
        ]}
      />
      {children}
    </main>
  )
}
