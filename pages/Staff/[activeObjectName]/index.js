import SingleDetail from "../../../components/CompStaff/SingleDetail";
import firebase from "../../../components/util/firebase";

export async function getStaticPaths() {
  const paths = [];

  await firebase
    .database()
    .ref("Staffs/")
    .once("value", (snapshot) => {
      snapshot.forEach((child) => {
        const path = {
          params: { activeObjectName: child.key },
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
    .ref(`Staffs/${params.activeObjectName}`)
    .once("value", (snapshot) => {
      object = snapshot.val();
    });

  return {
    props: {
      object,
    },
  };
}

function ObjectRole(props) {
  return <SingleDetail object={props.object} />;
}

export default ObjectRole;
