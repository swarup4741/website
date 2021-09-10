const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts}',
    './data/**/*.mdx'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      },
      fontWeight: ['focus'],
      border: ['hover'],
      typography: theme => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.blue.600'),
              textDecoration: 'none',
              '&:hover': {
                color: theme('colors.blue.800'),
                textDecoration: 'underline'
              }
            },
            p: {
              fontSize: theme('fontSize.base')
            },
            code: {
              color: theme('colors.purple.600')
            },
            pre: {
              background: theme('colors.gray.100'),
              borderWidth: theme('spacing.px'),
              borderColor: theme('colors.gray.300')
            },
            blockquote: {
              borderLeftColor: theme('colors.purple.600')
            },
            'blockquote p:first-of-type::before': false,
            'blockquote p:last-of-type::after': false
          }
        },
        dark: {
          css: {
            a: {
              color: theme('colors.blue.400'),
              '&:hover': {
                color: theme('colors.blue.500')
              },
              code: { color: theme('colors.blue.400') }
            },
            blockquote: {
              color: theme('colors.gray.300')
            },
            'h2,h3,h4': {
              color: theme('colors.white')
            },
            hr: { borderColor: theme('colors.gray.700') },
            ol: {
              li: {
                color: theme('colors.gray.300'),
                fontWeight: '500',
                '&:before': { color: theme('colors.gray.300') }
              }
            },
            ul: {
              li: {
                color: theme('colors.gray.300'),
                fontWeight: '500',
                '&:before': { backgroundColor: theme('colors.gray.500') }
              }
            },
            strong: { color: theme('colors.gray.100') },
            pre: {
              background: theme('colors.gray.900'),
              borderColor: theme('colors.gray.700')
            },
            thead: {
              color: theme('colors.gray.100')
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.700')
              }
            }
          }
        }
      })
    }
  },
  variants: {
    typography: ['dark']
  },
  plugins: [require('@tailwindcss/typography')]
}
