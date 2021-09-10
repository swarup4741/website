import CodeBlock from './CodeBlock'
import Image from 'next/image'
import InlineCode from './InlineCode'

const MDXComponents = {
  // eslint-disable-next-line react/display-name
  img: (props: any) => <Image {...props} alt={props.alt} layout="responsive" />,
  // eslint-disable-next-line react/display-name
  a: (props: any) => (
    <a href={props.href} target="_blank" rel="noopener noreferrer">
      {props.children}
    </a>
  ),
  // eslint-disable-next-line react/display-name
  InlineCode: (props: any) => (
    <InlineCode {...props}>{props.children}</InlineCode>
  ),

  // eslint-disable-next-line react/display-name
  code: (props: any) => <CodeBlock {...props}>{props.children}</CodeBlock>
}

export default MDXComponents
