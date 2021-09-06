import Layout from '@/components/Layout'
import Project from '@/components/Project'
import SocialLink from '@/components/SocialLink'
import { MAIN_URL, projects } from '@/lib/constants'

export default function Home() {
  return (
    <Layout
      title="Home"
      description="I love writing and reading code.A designer not by profession but by passion."
      openGraph={{
        url: MAIN_URL + '/',
        title: 'Swarup Kumar Das',
        description:
          'I love writing and reading code.A designer not by profession but by passion.',
        images: [
          {
            url: MAIN_URL + '/images/og.png',
            alt: 'Og home page image'
          }
        ],
        site_name: 'Swarup Kumar Das'
      }}
    >
      <h1>Hi, I’m Swarup Das</h1>
      <p className="max-w-2xl my-6 text-lg">
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
      <SocialLink />
      <div className="mt-6">
        <h2 className="py-2">My Projects</h2>
        <div
          id="projects"
          className="grid gap-6 mt-6 sm:grid-cols-2 place-items-center"
        >
          {projects.map(p => (
            <Project
              key={p.id}
              src={p.src}
              alt={p.alt}
              github={p.github}
              web={p.web}
              projectType={p.projectType}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}
