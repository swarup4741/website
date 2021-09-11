import React from 'react'
import Image from 'next/image'
import SwarupImg from '@/public/static/images/self.jpg'
import Button from '@/components/Button'

export default function Hero() {
  return (
    <>
      <h1>Hi, I’m Swarup Das</h1>
      <p className="my-6 leading-relaxed">
        I love{' '}
        <span className="text-blue-600 sp-text bg-blue-50 dark:bg-blue-900 dark:text-blue-300 dark:bg-opacity-40">
          writing
        </span>{' '}
        and{' '}
        <span className="text-green-600 sp-text bg-green-50 dark:bg-green-900 dark:text-green-300 dark:bg-opacity-40">
          reading
        </span>{' '}
        code. Open Source enthusiast because it is one of the greatest way to
        learn. A designer not by profession but by{' '}
        <span className="text-yellow-600 sp-text bg-yellow-50 dark:text-yellow-300 dark:bg-yellow-900 dark:bg-opacity-40">
          passion
        </span>
        . An adventurous guy with a vision to make people’s life{' '}
        <span className="text-purple-600 sp-text bg-purple-50 dark:bg-purple-900 dark:text-purple-300 dark:bg-opacity-40">
          easier
        </span>{' '}
        through software.
      </p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button href="https://github.com/swarup4741">Github</Button>
        <Button href="https://www.linkedin.com/in/swarup4741/">Linkedin</Button>
      </div>
      <div className="grid mt-10 place-items-center">
        <Image
          src={SwarupImg}
          alt="Avatar of Swarup Das"
          height={220}
          width={220}
          className="rounded-full"
          objectFit="cover"
          placeholder="blur"
        />
      </div>
    </>
  )
}
