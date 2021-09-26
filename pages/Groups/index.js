import classes from "./style.module.css";
import HorizontalLine from "../../components/HorizontalLines/HorizontalLine/HorizontalLine";
import firebase from "../../components/util/firebase";
import GroupList from "../../components/CompGroup/GroupList";
import { motion } from "framer-motion";
import Head from "next/head";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

function Groups(props) {
  return (
    <>
        <Head>
      <title> Α.Σ. Μακεδονική Δύναμη Κοζάνης Τμήματα </title>
      <meta name="description" content="Χώρος εκγύμνασης για σας αλλά και για τα παιδιά σας με ασφάλεια. Αθλητικός Σύλλογος Μαθημάτων Ταε-Κβον-Ντο Συγχρόνος Χορός Ρυθμική και αερόβια Γυμναστική." />
      </Head>
      <motion.section initial="hidden" animate="enter" exit="exit" variants={variants} transition={{ type: "linear" }}>
        <HorizontalLine title={"ΤΜΗΜΑΤΑ"}  />

        <GroupList GroupMembers={props.GroupMembers} key={props.id} />
      </motion.section>
    </>
  );
}

export default Groups;

export async function getStaticProps(context) {
  const GroupMembers = [];

  await firebase
    .database()
    .ref("Groups")
    .once("value", (snapshot) => {
      snapshot.forEach((child) => {
        GroupMembers.push(child.val());
      });
    });
  return {
    props: { GroupMembers },
  };
}
