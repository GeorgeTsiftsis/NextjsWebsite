import AnouncementList from "../components/Anouncements/AnouncementList";
import firebase from "../components/util/firebase";
import MainInformation from "../components/maininfos/Maininformation";
import Counter from "../components/Counter/counter";
import Whatis from "../components/WhatisTkd/Whatis";
// import FormforContact from "../components/FormforContact/FormforConract";

function Homepage(props) {
  return (
    <section>
      <MainInformation />
      <Counter />
      <AnouncementList anouncements={props.anouncements} />
      <Whatis />
      {/* <FormforContact /> */}
    </section>
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
