import { Fragment } from "react";
// import Anouncement from "../../components/Anouncements/Anouncement";
import SingleAnouncement from "../../components/Anouncements/SingleAnouncement";
import React from "react";
import firebase from "../../components/util/firebase";
// improt firebaseService from "../../services/firebase-service";

export async function getStaticPaths() {
  const paths = [];

  // func getAnnouncements(numberOfAnnouncements) {

  // }

  await firebase
    .database()
    .ref("Todo")
    // .orderByChild("date")
    // .limitToFirst(numberOfAnnouncements)
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
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  let anouncement;
  await firebase
    .database()
    .ref("Todo/" + params.anouncementId)
    .once("value", (snapshot) => {
      anouncement = snapshot.val();
    });

  return {
    props: {
      anouncement,
    },
  };
}

function AnouncementDetails(props) {
  return <SingleAnouncement anouncement={props.anouncement} />;
  //  <Anouncement anouncement={props.anouncement}
}

export default AnouncementDetails;
