import {Inter} from 'next/font/google';
import type { AppProps } from 'next/dist/shared/lib/router/router';
import '../styles/globals.css';
const inter = Inter({subsets: ['latin']});
import Head from 'next/head';

export default function App({ Component, pageProps }) {
    return (
        <div className={inter.className}>
            <Head>
                <title key={'title'}>Create Next App</title>
                <meta name="description" key={'description'} content="Next App"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Component {...pageProps} />
        </div>
    );
}