import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/vsDark'

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
        <pre
          className={className}
          style={{
            ...style,
            background: '#0E111A',
            borderRadius: '0.4rem',
            padding: '1rem 0 0 1.3rem',
            overflow: 'auto',
            margin: 0
          }}
        >
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
