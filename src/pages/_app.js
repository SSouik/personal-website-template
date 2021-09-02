import React from 'react';
import { Nav, Footer } from '../components';
import PropTypes from 'prop-types';

// Global style sheet
import '../styles/index.scss'

function MyApp({ Component, pageProps }) {
    return (
        <div>
            <Nav/>
            <Component {...pageProps} />
            <Footer/>
        </div>
    )
}

MyApp.propTypes = {
    Component: PropTypes.node.isRequired,
    pageProps: PropTypes.object.isRequired
}

export default MyApp
