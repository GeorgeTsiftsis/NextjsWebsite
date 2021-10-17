import "../styles/globals.css";
// // import Document, { Html, Head, Main, NextScript } from "next/document";
import Layout from "../components/layout/Layout";
// import { Html } from "next/document";
import Head from "next/head";
import Error from "next/error";
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as ga from '../lib/ga'
// import { AnimatePresence, motion } from "framer-motion";

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }

    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  if (pageProps.error) {
    return <Error statusCode={pageProps.error.statusCode} title={pageProps.error.message} />;
  }

 
  return (
    // <Html lang="el">
    <>
      <Head>
      
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      </Head>

      <Layout>
        {/* <AnimatePresence exitBeforeEnter initial={false} onExitComplete={() => window.scrollTo(0, 0)}> */}
        <Component {...pageProps} />
        {/* </AnimatePresence> */}
      </Layout>
    </>
  );
}

export default MyApp;
