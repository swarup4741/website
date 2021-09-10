import React from 'react'
import Image from 'next/image'
import usePostViews from '@/lib/usePostViews'
import Loader from './Loader'
import { formatDate } from '@/lib/date'

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
  const { views, error } = usePostViews(slug)

  return (
    <>
      <h1>{title}</h1>
      <div className="my-6 sm:items-center sm:justify-between sm:flex">
        <div className="flex items-center gap-3">
          <Image
            src="/images/self.jpg"
            height={28}
            width={28}
            objectFit="cover"
            className="rounded-full"
            alt="blog author avatar"
            priority
          />
          <div className="flex separator">
            <p className="mr-2 text-gray-900 meta-size dark:text-gray-100">
              Swarup Kumar Das
            </p>
            <p className="pl-2 text-gray-900 meta-size dark:text-gray-100">
              {formatDate(publishedAt)}
            </p>
          </div>
        </div>
        <div className="flex mt-4 text-gray-500 separator sm:mt-0">
          <p className="mr-2 meta-size">{readTime}</p>
          {error ? (
            <Loader />
          ) : views ? (
            <p className="pl-2 meta-size">{views} views</p>
          ) : (
            <Loader />
          )}
        </div>
      </div>
      <Image
        src={`/images/posts${image}`}
        layout="responsive"
        height={630}
        width={1200}
        className="rounded-sm"
        objectFit="cover"
        alt="blog image"
        priority
      />
    </>
  )
}
