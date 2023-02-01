import Script from 'next/script'
import { useEffect } from 'react'
import TagManager from 'react-gtm-module'
import { AppContext } from '../context/AppContext'
import getFirestoreApp from '../firebase/config'
import '../styles/globals.scss'

getFirestoreApp()

function MyApp({ Component, pageProps }) {
  
useEffect(() => {
  
  const tagManagerArgs = {
    gtmId: process.env.NEXT_PUBLIC_GOOAN_GTMID
  }

  TagManager.initialize(tagManagerArgs)

}, [])


  return(
    <>
      <Script id='hotjar-analytics'>{`
      (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:3347815,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
      `}</Script>
      <AppContext>
        <Component {...pageProps} />
      </AppContext>
    </>
  )
}

export default MyApp