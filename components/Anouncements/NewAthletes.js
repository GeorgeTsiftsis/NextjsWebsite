import AthleteList from "../Athletes/AthleteList";

function NewAthletes(props) {
  return (
    <div>
      <AthleteList athletes={props.athletes} />
    </div>
  );
}

export default NewAthletes;

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
