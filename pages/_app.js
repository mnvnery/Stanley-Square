import Footer from '../components/Footer'
import Header from '../components/Header'
import '../styles/globals.css'
import '../styles/faq.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Header/>
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
