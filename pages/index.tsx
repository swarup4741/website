import Layout from '@/components/Layout'
import Project from '@/components/Project'
import Hero from '@/components/Hero'
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
      <Hero />
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
