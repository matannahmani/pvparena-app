import { GeistProvider, CssBaseline } from '@geist-ui/react'
import '../styles/globals.scss'
import Navbar from '../components/navbar'
function MyApp({ Component, pageProps }) {
  return (
    <GeistProvider>
      <Navbar/>
      <main id="page-wrap">
      <CssBaseline />
      <Component {...pageProps} />
      </main>
    </GeistProvider>  )
}

export default MyApp
