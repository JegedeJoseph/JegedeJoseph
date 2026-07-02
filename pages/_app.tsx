import '../styles/globals.css'
import type { AppProps } from 'next/app'
import GoogleAnalytics from '../components/GoogleAnalytics'
import CursorFollower from '../components/CursorFollower'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleAnalytics />
      <CursorFollower />
      <Component {...pageProps} />
    </>
  )
}
