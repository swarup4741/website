import Image from 'next/image'

interface ImageProps {
  src: string
  alt: string
  width: number
  height: number
}

interface AnchorProps {
  href: string
  children: string
}

const Anchor = (props: AnchorProps) => (
  <a href={props.href} target="_blank" rel="noopener noreferrer">
    {props.children}
  </a>
)

const NextImage = (props: ImageProps) => (
  <Image {...props} src={`/images${props.src}`} alt={props.alt} />
)

const MDXComponents = {
  Image: NextImage,
  a: Anchor
}

export default MDXComponents
