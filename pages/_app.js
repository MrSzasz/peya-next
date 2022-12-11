import getFirestoreApp from '../firebase/config'
import '../styles/globals.scss'

getFirestoreApp()

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
