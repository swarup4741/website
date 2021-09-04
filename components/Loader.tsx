import { motion } from 'framer-motion'

export default function Loader() {
  return (
    <motion.span className="flex items-center px-2 space-x-1 overflow-hidden max-w-min">
      {[0.25, 0.15, 0].map((i, j) => (
        <motion.span
          key={j}
          animate={{
            x: [-100, 0, 100]
          }}
          transition={{
            repeat: Infinity,
            delay: i,
            duration: 2,
            times: [0, 0.77, 1]
          }}
          className="text-gray-300 rounded-full dark:text-gray-600"
        >
          •
        </motion.span>
      ))}
    </motion.span>
  )
}
