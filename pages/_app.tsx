import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import { SWRConfig } from 'swr'
import '../styles/globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import fetch from '@/lib/fetch'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig value={{ fetcher: fetch }}>
      <ThemeProvider attribute="class" defaultTheme="system">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </SWRConfig>
  )
}
export default MyApp
