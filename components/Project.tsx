import React, { useState } from 'react'
import Image from 'next/image'
import Button from './Button'

interface ImageMetaProps {
  src: StaticImageData
  alt: string
  github: string
  web: string
  projectType: string
}

export default function Project({
  src,
  alt,
  github,
  web,
  projectType
}: ImageMetaProps) {
  const [clicked, setClicked] = useState(false)
  return (
    <div
      onClick={() => setClicked(!clicked)}
      className="relative w-full max-w-sm overflow-y-hidden border-2 border-gray-200 rounded-md cursor-pointer dark:border-gray-700"
    >
      <header className="flex items-center px-2 py-1 border-b-2 border-gray-200 dark:border-gray-700">
        <div className="w-3 h-3 bg-gray-300 rounded-full toolbar dark:bg-gray-700"></div>
        <div className="w-2/3 ml-12 bg-gray-200 rounded-sm dark:bg-gray-800">
          <p className="grid text-sm text-gray-600 place-items-center dark:text-gray-400">
            {projectType}
          </p>
        </div>
      </header>
      <nav
        className={`absolute mx-10 mt-10 space-y-3 ${clicked ? 'z-10' : null}`}
      >
        <Button href={github}>Source code</Button>
        <Button href={web}>Live demo</Button>
      </nav>
      <Image
        className={`transition-transform ${
          clicked ? 'transform translate-y-full' : null
        }`}
        src={src}
        alt={alt}
        placeholder="blur"
        height={216}
        width={384}
        objectFit="cover"
        layout="responsive"
      />
    </div>
  )
}
