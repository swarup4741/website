import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  )
}
export default MyApp
