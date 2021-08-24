import React from 'react'
import Image from 'next/image'

interface postLayoutProps {
  publishedAt: string
  title: string
  image: string
}

export default function BlogPost({
  publishedAt,
  title,
  image
}: postLayoutProps) {
  return (
    <>
      <h2>{title}</h2>
      <div className="flex items-center gap-6 my-6">
        <Image
          src="/images/self.jpg"
          height={35}
          width={35}
          objectFit="cover"
          className="rounded-full"
        />
        <p>Swarup Kumar Das · {publishedAt}</p>
      </div>
      <Image
        src={image}
        layout="responsive"
        height={216}
        width={384}
        className="rounded-lg"
        objectFit="cover"
      />
    </>
  )
}
