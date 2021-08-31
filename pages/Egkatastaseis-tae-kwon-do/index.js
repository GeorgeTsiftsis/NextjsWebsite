import firebase from "../../components/util/firebase";
import classes from "./classes.module.css";
import ImageGallery from "react-image-gallery";
import HorizontalLine4 from "../../components/HorizontalLines/HorizontalLine4/HorizontalLine4";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

function EgkatastaseisTaekwondo(props) {
  return (
    <motion.section initial="hidden" animate="enter" exit="exit" variants={variants} transition={{ type: "linear" }}>
      <HorizontalLine4 />
      <div className={classes.wholeContainer}>
        <h1 className={classes.titles}>Φωτογραφίες Εισόδου</h1>

        {/* <h1 className={classes.titles}>Αίθουσες Ταεκβοντο και ρυθμικης Γυμναστικής</h1> */}
      </div>

      {props.galleryphotos === undefined ? <h1>Oh no</h1> : <ImageGallery className={classes.broken} showBullets={true} showThumbnails={true} items={props.galleryphotos} />}
    </motion.section>
  );
}

export default EgkatastaseisTaekwondo;

export async function getStaticProps() {
  const imageUrls = await firebase
    .storage()
    .ref("Gallery")
    .listAll()
    .then((result) => {
      const promises = result.items.map((imageRef) => imageRef.getDownloadURL());
      return Promise.all(promises);
    })
    .catch((gtp) => console.log(gtp));

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
