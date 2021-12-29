import firebase from "../../components/util/firebase";
import classes from "./classes.module.css";
import ImageGallery from "react-image-gallery";
import HorizontalLine from "../../components/HorizontalLines/HorizontalLine/HorizontalLine";
import { motion } from "framer-motion";
import Head from "next/head";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

function EgkatastaseisTaekwondo(props) {
  return (
    <>
      <Head>
        <title> Α.Σ. Μακεδονική Δύναμη Κοζάνης Αίθουσες Εγκαταστάσεις </title>
        <meta
          name="description"
          content="Αίθουσες και Εγκαταστάσεις στον αθλητικό σύλλογο Μακεδονικη Δύναμη Κοζάνης "
        />
      </Head>
      <motion.section
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: "linear" }}
      >
        <HorizontalLine title={"Αίθουσες"} />
        {props.galleryphotos === undefined ? (
          <h1>Παρουσιάστηκε σφάλμα ανανεώστε την σελίδα</h1>
        ) : (
          <div style={{ backgroundColor: "#6096ba", paddingTop: "3rem" }}>
            {" "}
            <ImageGallery
              className={classes.broken}
              lazyLoad={true}
              showBullets={true}
              showThumbnails={true}
              items={props.galleryphotos}
            />{" "}
          </div>
        )}
      </motion.section>
    </>
  );
}

export default EgkatastaseisTaekwondo;

export async function getStaticProps() {
  const imageUrls = await firebase
    .storage()
    .ref("Gallery")
    .listAll()
    .then((result) => {
      const promises = result.items.map((imageRef) =>
        imageRef.getDownloadURL()
      );
      return Promise.all(promises);
    })
    .catch((error) => console.log(error));

  const galleryphotos = imageUrls.map((url) => {
    return {
      original: url,
      thumbnail: url,
    };
  });

  return {
    props: {
      galleryphotos,
    },
  };
}
