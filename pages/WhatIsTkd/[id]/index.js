import firebase from "../../../components/util/firebase";
import TkdPage from "../../../components/Taekwondo/index";

export async function getStaticPaths() {
  const paths = [];

  await firebase
    .database()
    .ref("WhatIsTkd")
    .once("value", (snapshot) => {
      snapshot.forEach((child) => {
        const path = {
          params: { id: `${child.key}` },
        };
        paths.push(path);
      });
    });

  return {
    paths: paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  let object;
  await firebase
    .database()
    .ref("WhatIsTkd/" + params.id)
    .once("value", (snapshot) => {
      object = snapshot.val();
    });

  return {
    props: {
      object,
    },
  };
}

function TaekwondoDetails(props) {
  return <TkdPage object={props.object} key={props.id} />;
}

export default TaekwondoDetails;
