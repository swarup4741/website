import React from 'react'
import Image from 'next/image'
import { format } from 'date-fns'
import usePostViews from '@/lib/usePostViews'
import Loader from '../Loader'

interface postLayoutProps {
  readTime: string
  publishedAt: string
  title: string
  image: string
  slug: string
}

export default function BlogPost({
  readTime,
  publishedAt,
  title,
  image,
  slug
}: postLayoutProps) {
  const dP = publishedAt.split('-').map(p => Number(p))
  const formatDate = format(new Date(dP[0], dP[1] - 1, dP[2]), 'MMMM d, yyyy')
  const { views, error } = usePostViews(slug)

  return (
    <>
      <h2>{title}</h2>
      <div className="items-center justify-between my-4 sm:flex">
        <div className="flex items-center gap-3">
          <Image
            src="/images/self.jpg"
            height={32}
            width={32}
            objectFit="cover"
            className="rounded-full"
            alt="blog author avatar"
          />
          <p className="text-sm text-gray-900 dark:text-gray-200">
            Swarup Kumar Das / {formatDate}
          </p>
        </div>
        <div className="flex mt-2 text-sm text-gray-500 divide-x divide-gray-400 dark:divide-gray-500 sm:mt-0">
          <p className="mr-2">{readTime}</p>
          {error ? (
            <Loader />
          ) : views ? (
            <p className="pl-2">{views} views</p>
          ) : (
            <Loader />
          )}
        </div>
      </div>
      <Image
        src={image}
        layout="responsive"
        height={216}
        width={384}
        className="rounded-md"
        objectFit="cover"
        alt="blog image"
      />
    </>
  )
}
