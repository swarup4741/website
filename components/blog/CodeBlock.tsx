import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwl'

interface codeProps {
  children: string
  className: Language
}

export default function CodeBlock({ children, className }: codeProps) {
  const language = className.replace(/language-/, '') as Language

  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={children}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: '20px' }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

CodeBlock.displayName = 'code'
