import HorizontalLine from "../../components/HorizontalLines/HorizontalLine/HorizontalLine"
import firebase from "../../components/util/firebase";
import StaffList from "../../components/CompStaff/StaffList";
import { motion } from "framer-motion";
import Head from "next/head";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};
function Staff(props) {
  return (
    <>
 <Head>
      <title> Α.Σ. Μακεδονική Δύναμη Κοζάνης Προσωπικό </title>
      <meta name="description" content="Μακεδονική Δύναμη Κοζάνης Προσωπικό" />
    </Head>
    
    <motion.section initial="hidden" animate="enter" exit="exit" variants={variants} transition={{ type: "linear" }}>
      <HorizontalLine title={"Προσωπικό"} />
      <StaffList staffMembers={props.staffMembers} key={props.id} />
    </motion.section>
    </>
  );
}
export default Staff;

export async function getStaticProps(context) {
  const staffMembers = [];

  await firebase
    .database()
    .ref("Staffs")
    .once("value", (snapshot) => {
      snapshot.forEach((child) => {
        staffMembers.push(child.val());
      });
    });
  return {
    props: { staffMembers },
  };
}
