import firebase from "../../components/util/firebase";
import ReactImageGalleryTest from "./DynamicColumn";
import classes from "./classes.module.css";
import HorizontalLine4 from "../../components/HorizontalLines/HorizontalLine4/HorizontalLine4";
function EgkatastaseisTaekwondo(props) {
  return (
    <>
      <HorizontalLine4 />
      <div className={classes.wholeContainer}>
        <h1 className={classes.titles}>Φωτογραφίες Εισόδου</h1>
        <div className={classes.gridnews}></div>
        <h1 className={classes.titles}>Αίθουσες Ταεκβοντο και ρυθμικης Γυμναστικής</h1>
        <ReactImageGalleryTest galleryphotos={props.galleryphotos} />
      </div>
    </>
  );
}

export default EgkatastaseisTaekwondo;

// export async function getServerSideProps(context) {
//   const galleryphotos = [];
//   // const object = [];

//   const response = await firebase
//     .database()
//     .ref("Gallery")
//     .once("value", (snapshot) => {
//       snapshot.forEach((child) => {
//         galleryphotospush(child.val());
//       });
//     });
// await firebase
//   .database()
//   .ref("WhatIsTkd")
//   .once("value", (snapshot) => {
//     snapshot.forEach((child) => {
//       object.push(child.val());
//     });
//   });

//   return {
//     props: {
//       galleryphotos,
//       // object
//     },
//   };
// }
