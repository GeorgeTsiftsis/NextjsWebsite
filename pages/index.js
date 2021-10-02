import AnouncementList from "../components/Anouncements/AnouncementList";
import firebase from "../components/util/firebase";
import MainInformation from "../components/maininfos/Maininformation";
import Counter from "../components/Counter/counter";
import Whatis from "../components/Whatis/index";
// import { NextSeo } from "next-seo";
// import FormforContact from "../components/FormforContact/FormforConract";
import Head from "next/head";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};
function Homepage(props) {
  return (
    <>
      <Head>
        <title> Α.Σ. Μακεδονική Δύναμη Κοζάνης Ταε-Κβο-Ντο</title>
        <meta name="description" content="Χώρος εκγύμνασης για σας αλλά και για τα παιδιά σας με ασφάλεια. Αθλητικός Σύλλογος Μαθημάτων Ταε-Κβον-Ντο Συγχρόνος Χορός Ρυθμική και αερόβια Γυμναστική." />
       
      </Head>
      <motion.section initial="hidden" animate="enter" exit="exit" variants={variants} transition={{ type: "linear" }}>
        <MainInformation history={props.history} />
        <Counter />
        <AnouncementList anouncements={props.anouncements} />
        <Whatis object={props.object} />
        {/* <FormforContact /> */}
      </motion.section>
    </>
  );
}
export default Homepage;

export async function getServerSideProps(context) {
  const anouncements = [];

  const response = await firebase
    .database()
    .ref("Todo")
    .once("value", (snapshot) => {
      snapshot.forEach((child) => {
        anouncements.push(child.val());
      });
    });

  return {
    props: {
      anouncements,
    },
  };
}


