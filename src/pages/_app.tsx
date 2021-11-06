import React from 'react';
import { AppProps } from 'next/app';

// Global style sheet
import '../styles/index.scss';

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}


export default MyApp;
