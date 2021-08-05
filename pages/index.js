import AnouncementList from "../components/Anouncements/AnouncementList";
import firebase from "../components/util/firebase";
import MainInformation from "../components/maininfos/Maininformation";
import Counter from "./Counter/counter";
// import Whatis from "../components/WhatisTkd/Whatis";

function Homepage(props) {
  return (
    <section>
      <MainInformation />
      <AnouncementList anouncements={props.anouncements} />
      <Counter />
      {/* <Whatis /> */}
    </section>
  );
}

export default Homepage;

export async function getServerSideProps(context) {
  const anouncements = [];

  await firebase
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
