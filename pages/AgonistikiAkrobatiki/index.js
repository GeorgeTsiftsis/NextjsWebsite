import firebase from "../../components/util/firebase";
import ImageGallery from "react-image-gallery";
import HorizontalLine from "../../components/HorizontalLines/HorizontalLine/HorizontalLine";
import { motion } from "framer-motion";
import Head from "next/head";


const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

function index(props) {
  return (
    <>
    <Head>
      <title> Α.Σ. Μακεδονική Δύναμη Κοζάνης Αίθουσες Αγωνιστική Ακροβατική </title>
      <meta name="description" content="Τμήματα Μοντέρνος Χορός Αγωνιστική Ακροβατική" />
    </Head>
    <motion.section initial="hidden" animate="enter" exit="exit" variants={variants} transition={{ type: "linear" }}>
    <HorizontalLine title={"Αγωνιστική Ακροβατική"}  />
    {props.mousikokinitikiphotos === undefined ? <h1>Oh no</h1> : <div style={{backgroundColor:'#6096ba',paddingTop:'3rem' }}> <ImageGallery  lazyLoad={true}  showBullets={true} showThumbnails={true} items={props.mousikokinitikiphotos}  /> </div>}
    </motion.section>
    </>
  );
}

export default index;

export async function getStaticProps() {
  const imageUrls = await firebase
    .storage()
    .ref("TmimataXorou/AgwnistikiAkrobatiki")
    .listAll()
    .then((result) => {
      const promises = result.items.map((imageRef) => imageRef.getDownloadURL());
      return Promise.all(promises);
    })
    .catch((gtp) => console.log(gtp));

  const mousikokinitikiphotos = imageUrls.map((url) => {
    return {
      original: url,
      thumbnail: url,
    };
  });

  return {
    props: {
      mousikokinitikiphotos,
    },
  };
}
