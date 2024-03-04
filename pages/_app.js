import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/globals.css'
import { useEffect } from "react";
import Layout from '@/components/layout';
import Head from 'next/head'
import CustomCursor from '@/components/CustomCursor'

function App({ Component, pageProps }) {

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);


  return (
    <>
      <Head>
        <title>  Sama Babaee </title>
        <meta name="description" content="Generated by sama babaee" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="img/favicon/favicon.ico" />
        {/* <link rel="apple-touch-icon" sizes="180x180" href="img/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="img/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="img/favicon/favicon-16x16.png" />
        <link rel="manifest" href="img/favicon/site.webmanifest" /> */}
        <script src="https://cdn.lordicon.com/lordicon.js"></script>

      </Head>
      <Layout>
      <CustomCursor />
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
export default App;