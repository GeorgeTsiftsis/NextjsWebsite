import AnouncementList from "../../components/Anouncements/AnouncementList";
import firebase from "../../components/util/firebase";
import classes from "../../components/Anouncements/Card.module.css";

function Staff(props) {
  return (
    <div
    // className={classes.gridnews}
    >
      <AnouncementList anouncements={props.anouncements} />;
    </div>
  );
}

export default Staff;

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
