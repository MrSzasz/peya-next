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