import { ReactNode } from 'react'
import Head from 'next/head'
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
    <main className="container max-w-3xl px-8 pt-12 mx-auto overflow-hidden">
      <NextSeo
        title={title}
        titleTemplate="Swarup Kumar Das | %s"
        defaultTitle="Swarup Kumar Das"
        description={description}
        canonical={MAIN_URL + '/'}
        openGraph={{ ...openGraph, type: 'website' }}
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
            content: MAIN_URL + '/icons/browserconfig.xml'
          },
          {
            name: 'theme-color',
            content: '#ffffff'
          }
        ]}
      />
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@swarup4741" />
        <meta name="twitter:creator" content="@swarup4741" />
        <meta property="twitter:domain" content="swarup.vercel.app" />
        <meta property="twitter:url" content={MAIN_URL} />
        <meta name="twitter:title" content={'Swarup Kumar Das | ' + title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={MAIN_URL + '/images/og.png'} />
      </Head>
      {children}
    </main>
  )
}
