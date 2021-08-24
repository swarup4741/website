const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

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
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.gray,
        blue: colors.blue,
        green: colors.green
      },
      typography: theme => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.blue.500'),
              '&:hover': {
                color: theme('colors.blue.700')
              }
            },
            pre: {
              backgroundColor: 'none',
              padding: '0',
              fontSize: '1rem'
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
                color: theme('colors.blue.600')
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
            strong: { color: theme('colors.gray.200') },
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
