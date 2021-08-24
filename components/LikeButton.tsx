import { useState } from 'react'
import { motion } from 'framer-motion'
import { sideChild } from '@/lib/constants'

export default function LikeButton({ children }: { children: string }) {
  const [tap, setTap] = useState(false)
  return (
    <>
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
          disabled={tap}
          type="submit"
          onTouchStart={e => console.log(e.currentTarget.disabled)}
          onTouchEnd={e => console.log(e.currentTarget.disabled)}
          onTap={() => setTap(true)}
          className={`relative text-3xl cursor-pointer select-none ${
            tap ? null : 'grayscale'
          }`}
        >
          {children}

          {tap &&
            sideChild.map((s, i) => (
              <motion.span
                role="button"
                aria-label="like button"
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
                <span role="img" aria-label="emoji">
                  {children}
                </span>
              </motion.span>
            ))}
        </motion.button>
      </motion.div>
    </>
  )
}
