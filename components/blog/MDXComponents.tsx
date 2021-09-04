import CodeBlock from './CodeBlock'

export const MDXComponents = {
  // eslint-disable-next-line react/display-name
  code: (props: any) => <CodeBlock {...props}>{props.children}</CodeBlock>
}
