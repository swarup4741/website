import { ReactElement, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { sideChild } from '@/lib/constants'
import usePostLikes from '@/lib/usePostLikes'
import Loader from './Loader'

interface likeButtonProps {
  children: ReactElement
  label: string
  slug: string
}

export default function LikeButton({ children, label, slug }: likeButtonProps) {
  const { likes, error, updateLikes } = usePostLikes(slug)
  const { currentUserLikes, allUserLikes } = likes
  const [tap, setTap] = useState(false)

  useEffect(() => {
    const isActiveEmoji = currentUserLikes
      ? Object.values(currentUserLikes).includes(label)
      : false
    setTap(isActiveEmoji)
  }, [currentUserLikes])

  return (
    <>
      <div className="flex flex-col items-center gap-1">
        <motion.div
          whileHover={{
            scale: [0.9, 1.2, 1],
            transition: {
              ease: 'easeInOut'
            }
          }}
        >
          <motion.button
            whileTap={{
              scale: [1, 0.5, 1.2, 1],
              transition: {
                ease: 'circIn',
                duration: 0.3
              }
            }}
            onTap={() => {
              setTap(true)
              if (!tap) updateLikes(label)
            }}
            aria-label={label + ' button'}
            className={`relative text-3xl cursor-pointer select-none ${
              tap ? '' : 'grayscale'
            }`}
          >
            {children}

            {tap &&
              sideChild.map((s, i) => (
                <motion.span
                  role="button"
                  aria-label="icons animated"
                  key={i}
                  className="absolute text-sm hide-sideChild"
                  initial={{
                    top: '30%',
                    left: '30%',
                    scale: 0
                  }}
                  animate={{
                    y: [0, -Math.random() * 120 - 50],
                    scale: [1, 0],
                    top: s.top,
                    left: s.left
                  }}
                >
                  <span role="img" aria-label="icon">
                    {children}
                  </span>
                </motion.span>
              ))}
          </motion.button>
        </motion.div>

        <p
          className="select-none"
          aria-label={'number of ' + label + ' reactions'}
        >
          {!error ? (
            allUserLikes ? (
              allUserLikes[label]
            ) : (
              <Loader />
            )
          ) : (
            <Loader />
          )}
        </p>
      </div>
    </>
  )
}
