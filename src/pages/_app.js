import '../styles/index.scss'

import { Nav, Footer } from '../components';

function MyApp({ Component, pageProps }) {
    return (
        <div>
            <Nav/>
            <Component {...pageProps} />
            <Footer/>
        </div>
    )
}

export default MyApp
