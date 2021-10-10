// import classes from "./Mainpage.module.css";
import classes from "./Maininformation.module.css";
import firebase from "../../components/util/firebase";

import { useRouter } from "next/router";
// import ShortMainHistoryText from "../util/Load/ShortMainHistoryText";

const Introduction = ( props ) => {
  const router = useRouter();
  const addInfoHnadler = () => {
    router.push("/History");
  };
 
  return (
  
      <div className={classes.containerr}>
         <p className={classes.text_intro}>
        {/* <ShortMainHistoryText/>      */}
        Ο σύλλογός μας με την επωνυμία ΄Α.Γ.Σ. ΚΟΖΑΝΗΣ ΜΑΚΕΔΟΝΙΚΗ ΔΥΝΑΜΗ’ ιδρύθηκε το 1988. Εδώ και 33 χρόνια λοιπόν δραστηριοποιείται στα αθλήματα του taekwondo, της ενόργανης και της ρυθμικής γυμναστικής, του μοντέρνου χορού, της αγωνιστικής αεροβικής, της μουσικοκινητικής αγωγής και μπλαλέτου του Kick Boxing και Muay Thai. Επίσης, απασχολεί στις τάξεις του, 10 γυμναστές και προπονητές των αντίστοιχων ειδικοτήτων. Το  1990 έγινε μέλος της Ελληνικής  Ομοσπονδίας  Τάεκβοντο (ΕΛ.Ο.Τ) και από τότε έως και σήμερα έχει να παρουσιάσει πληθώρα δραστηριοτήτων και επιτυχιών, τόσο σε επαρχιακό, σε πανελλήνιο όσο και σε διεθνές επίπεδο που καθιστούν τον σύλλογό μας επάξια σε έναν από τους πιο οργανωμένους και πρωτοποριακούς συλλόγους της χώρας μας. Μετράει στο ενεργητικό του 6 Παγκόσμιες διακρίσεις, 17 Πανευρωπαϊκές, 2 Μεσογειακές, 
        2 Βαλκανικές και περισσότερα 350 Πανελλήνια μετάλλια!
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


