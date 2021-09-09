export default function Footer() {
  return (
    <footer className="max-w-3xl px-6 mx-auto my-16">
      <hr className="border-gray-400 dark:border-gray-600" />
      <div className="flex flex-col items-center md:flex-row md:justify-between">
        <p className="my-6">Built with Next.js, MDX, Tailwind and Vercel</p>
        <div className="flex justify-between w-64 mb-2 text-gray-500 sm:text-lg md:mb-0 dark:text-gray-400">
          <a
            href="https://github.com/swarup4741"
            className="hover:text-black dark:hover:text-gray-50"
          >
            Github
          </a>
          <a
            href="https://dribbble.com/swarupdas"
            className="hover:text-black dark:hover:text-gray-50"
          >
            Dribbble
          </a>
          <a
            href="https://twitter.com/swarup4741"
            className="hover:text-black dark:hover:text-gray-50"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  )
}
