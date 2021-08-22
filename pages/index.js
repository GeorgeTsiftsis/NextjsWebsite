import AnouncementList from "../components/Anouncements/AnouncementList";
import firebase from "../components/util/firebase";
import MainInformation from "../components/maininfos/Maininformation";
import Counter from "../components/Counter/counter";
import Whatis from "../components/WhatisTkd/Whatis";
// import FormforContact from "../components/FormforContact/FormforConract";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};
function Homepage(props) {
  return (
    <motion.section initial="hidden" animate="enter" exit="exit" variants={variants} transition={{ type: "linear" }}>
      <MainInformation />
      <Counter />
      <AnouncementList anouncements={props.anouncements} />
      <Whatis />
      {/* <FormforContact /> */}
    </motion.section>
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
