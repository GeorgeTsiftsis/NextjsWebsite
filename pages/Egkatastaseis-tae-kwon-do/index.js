import firebase from "../../components/util/firebase";
import classes from "./classes.module.css";
import ImageGallery from "react-image-gallery";
import HorizontalLine4 from "../../components/HorizontalLines/HorizontalLine4/HorizontalLine4";
import { resolveHref } from "next/dist/shared/lib/router/router";
function EgkatastaseisTaekwondo(props) {
  return (
    <>
      <HorizontalLine4 />
      <div className={classes.wholeContainer}>
        <h1 className={classes.titles}>Φωτογραφίες Εισόδου</h1>
        <div className={classes.gridnews}></div>
        <h1 className={classes.titles}>Αίθουσες Ταεκβοντο και ρυθμικης Γυμναστικής</h1>
        {props.galleryphotos === undefined ? <h1>Oh no</h1> : <ImageGallery className={classes.imgs} showThumbnails={true} items={props.galleryphotos} />}
      </div>
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
