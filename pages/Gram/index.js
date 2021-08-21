// import Figure from "react-bootstrap/Figure";
// import classes from "./gram.module.css";
import firebase from "../../components/util/firebase";
import AthleteList from "../../components/Athletes/AthleteList";

function Gram(props) {
  return <AthleteList athletes={props.athletes} />;
}

export default Gram;

export async function getStaticProps(context) {
  const athletes = [];

  await firebase
    .database()
    .ref("Athletes")
    .once("value", (snapshot) => {
      snapshot.forEach((child) => {
        athletes.push(child.val());
      });
    });

  return {
    props: { athletes },
  };
}
