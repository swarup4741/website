import CodeBlock from './CodeBlock'

export const MDXComponents = () => ({
  code: (props: any) => <CodeBlock {...props}>{props.children}</CodeBlock>
})
