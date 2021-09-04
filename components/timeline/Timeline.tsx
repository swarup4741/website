import Activity from './Activity'
import Year from './Year'

export default function Timeline() {
  return (
    <div className="mb-6">
      <Year on="2021">
        <Activity title="Built Spark">
          After working with Vanilla js for several times I realised that I had
          to write some amount of boilerplate code so setup my project, So I
          decided to make a node.js CLI which can bootstrap a Vanilla js project
          for me.
        </Activity>
        <Activity title="Built Stacksense">
          This was my first large scale full-stack web app project made using
          Next.js, Firebase, Chakra-UI.
        </Activity>
        <Activity title="Learning Next.js, Tailwind CSS">
          Next.js is currently my favourite react framework because of how it
          provides out of the box developer experience. Tailwind is just way
          beyond awesome.
        </Activity>
        <Activity title="Learnt React, React-router">
          I really enjoyed learning react and also got to know what’s under hood
          of it, the very core of react, Thanks to Tejas Kumar for his amazing{' '}
          <a href="https://youtu.be/f2mMOiCSj5c" className="text-blue-500">
            talk
          </a>
          .
        </Activity>
      </Year>
      <Year on="2020">
        <Activity title="Got into Masters">
          Took admission in Masters programme on Mathematics in RamaKrishna
          Mission Vivekananda Educational and Research Institute.
        </Activity>
        <Activity title="Stared learing web development">
          Learnt basics of web development like HTML5, CSS3 and Javascript. I
          finally found something that attracted me the most in a while.
        </Activity>
        <Activity title="Got into web designing">
          I always loved painting and designing. When I found that I could also
          paint the web with all beautiful colors and animations that is when it
          all clicked.
        </Activity>
      </Year>
    </div>
  )
}
