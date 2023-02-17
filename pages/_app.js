import Footer from '../components/Footer'
import Header from '../components/Header'
import '../styles/globals.css'
import '../styles/faq.css'
import Head from 'next/head'
//import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
    <script
      strategy="afterInteractive"
      src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}`}
    />
    <script id="ga-script" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.GOOGLE_ANALYTICS}', {
          page_path: window.location.pathname,
        });
            `}
    </script>
    </Head>
    <Header/>
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
