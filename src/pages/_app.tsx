import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter } from '@next/font/google'
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';
import Head from 'next/head';

const inter = Inter({subsets: ['latin']});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4021488147419187" crossOrigin="anonymous"></script>
      </Head>
      <div className={inter.className}>
        <Component {...pageProps} />
        <Analytics />
      </div>
    </>
  )
}

export default MyApp
