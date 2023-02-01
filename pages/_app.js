import { AppContext } from '../context/AppContext'
import getFirestoreApp from '../firebase/config'
import '../styles/globals.scss'

getFirestoreApp()

function MyApp({ Component, pageProps }) {
  return(
    <AppContext>
      <Component {...pageProps} />
    </AppContext>
  )
}

export default MyApp