import AnouncementList from "../components/Anouncements/AnouncementList";
import firebase from "../components/util/firebase";
import MainInformation from "../components/maininfos/Maininformation";
import Counter from "../components/Counter/counter";
import Whatis from "../components/WhatisTkd/Whatis";
import Head from "next/head";
// import FormforContact from "../components/FormforContact/FormforConract";
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
        <title>Μακεδονική Δύναμη Κόζάνης Τάε-κβον-ντο</title>
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0" />
      </Head>
      <motion.section initial="hidden" animate="enter" exit="exit" variants={variants} transition={{ type: "linear" }}>
        <MainInformation />
        <Counter />
        <AnouncementList anouncements={props.anouncements} />
        <Whatis />
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
    props: { anouncements },
  };
}
