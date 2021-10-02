import SingleAnouncement from "../../../components/Anouncements/SingleAnouncement";
import React from "react";
import firebase from "../../../components/util/firebase";
import OldAnouncementList from "../../../components/Anouncements/OldAnouncementList";
import { motion } from "framer-motion";
import Head from "next/head";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

export async function getStaticPaths() {
  const paths = [];

  await firebase
    .database()
    .ref("Todo")
    .once("value", (snapshot) => {
      snapshot.forEach((child) => {
        const path = {
          params: { anouncementId: child.key },
        };
        paths.push(path);
      });
    });

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  let anouncement;
  let anouncements = [];
  await firebase
    .database()
    .ref("Todo/" + params.anouncementId)
    .once("value", (snapshot) => {
      anouncement = snapshot.val();
    });
  await firebase
    .database()
    .ref("Todo")
    .limitToFirst(3)
    .once("value", (snapshot) => {
      snapshot.forEach((child) => {
        anouncements.push(child.val());
      });
    });

  return {
    props: {
      anouncement,
      anouncements,
    },
  };
}

function AnouncementDetails(props) {
  return (<>  
     <Head>
    <title> Α.Σ. Μακεδονική Δύναμη Κοζάνης Ανακοινώσεις και Δράσεις Συλλόγου</title>
    <meta name="description" content="Ανακοινώσεις και Δράσεις Συλλόγου για Μοντέρνο Χορό και Ταε-Κβον-Ντο" />
  </Head>
    <motion.section initial="hidden" animate="enter" exit="exit" variants={variants} transition={{ type: "linear" }}>
      <div style={{ display: "flex", justifyItems: "center", alignItems: "center", flexDirection: "column" }}>
        <SingleAnouncement anouncement={props.anouncement} />
        <OldAnouncementList anouncements={props.anouncements} />
      </div>
    </motion.section>
    </>
  );
}

export default AnouncementDetails;
