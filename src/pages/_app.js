import '../styles/index.scss'

import { Nav } from '../components';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Nav/>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
