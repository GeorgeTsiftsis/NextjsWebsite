import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import Error from "next/error";
import { AnimatePresence } from "framer-motion";
// import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  if (pageProps.error) {
    return <Error statusCode={pageProps.error.statusCode} title={pageProps.error.message} />;
  }
  return (
    <Layout>
      <AnimatePresence exitBeforeEnter initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
        <Component {...pageProps} />
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
