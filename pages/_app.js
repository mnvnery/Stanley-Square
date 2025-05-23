import Footer from '../components/Footer'
import Header from '../components/Header'
import '../styles/globals.css'
import '../styles/faq.css'
import Head from 'next/head'
import Script from 'next/script'
import GoogleAnalytics from "@bradgarropy/next-google-analytics"

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
    </Head>
    <GoogleAnalytics measurementId='G-0XH6XFDK3Q'/>
    <Header/>
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
