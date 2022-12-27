import { useEffect } from 'react'
import TagManager from 'react-gtm-module'
import { AppContext } from '../context/AppContext'
import getFirestoreApp from '../firebase/config'
import '../styles/globals.scss'

getFirestoreApp()

function MyApp({ Component, pageProps }) {
  
useEffect(() => {
  
  const tagManagerArgs = {
    gtmId: 'GTM-KDRV8L6'
  }

  TagManager.initialize(tagManagerArgs)

}, [])


  return(
    <AppContext>
      <Component {...pageProps} />
    </AppContext>
  )
}

export default MyApp


/*

<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KDRV8L6');</script>
<!-- End Google Tag Manager -->
Additionally, paste this code immediately after the opening <body> tag:
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KDRV8L6"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->

*/