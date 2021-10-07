// import classes from "./Mainpage.module.css";
import classes from "./Maininformation.module.css";
import firebase from "../../components/util/firebase";

import { useRouter } from "next/router";
import ShortMainHistoryText from "../util/Load/ShortMainHistoryText";

const Introduction = ( props ) => {
  const router = useRouter();
  const addInfoHnadler = () => {
    router.push("/History");
  };
 
  return (
  
      <div className={classes.containerr}>
         <p className={classes.text_intro}>
        <ShortMainHistoryText/>     
          <button onClick={addInfoHnadler} className={classes.read_more}>
            Διαβάστε Περισσότερα...
          </button>
        </p>
        
          
      </div>
  
  );
};

export default Introduction;


export async function getServerSideProps(context) {
  const history = [];

  const response = await firebase
    .database()
    .ref("History")
    .once("value", (snapshot) => {
      snapshot.forEach((child) => {
        history.push(child.val());
      });
    });

  return {
    props: {
      history,
    },
  };
}


