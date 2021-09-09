import Layout from '@/components/Layout'
import Timeline from '@/components/timeline'
import { MAIN_URL } from '@/lib/constants'

export default function about() {
  return (
    <Layout
      title="About"
      description="About myself and my journey so far."
      openGraph={{
        url: MAIN_URL + '/about',
        title: 'Swarup Kumar Das | About',
        description: 'About myself and my journey so far.',
        images: [
          {
            url: MAIN_URL + '/images/og.png',
            alt: 'Og blog page image'
          }
        ],
        site_name: 'Swarup Kumar Das'
      }}
      twitterImage="/images/og.png"
    >
      <h1>My Journey</h1>
      <p className="my-6 leading-relaxed">
        I have been coding since 2013 but when I got admitted to college in 2017
        as a undergraduate student in Mathematics, coding got out of my range.
        But during the pandemic in 2020 I revived my love for coding again. Also
        I explored my passion for designing too. Below is my journey till now.
      </p>
      <h2>TimeLine</h2>
      <Timeline />
      <p className="mt-16 ml-9">to be continued...</p>
    </Layout>
  )
}
