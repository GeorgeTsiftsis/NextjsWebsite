// import classes from "./Mainpage.module.css";
import classes from "./Maininformation.module.css";

import { useRouter } from 'next/router'

const Introduction = (props) => {
    const router = useRouter()
  const addInfoHnadler = () => {
    router.push('/History');
  };
  return (
    <div className={classes.bigdiv}>
      <div className={classes.containerr}>
        <p className={classes.text_intro}>
          Ο Α.Σ. Μακεδονική Δύναμη Κόζάνης είναι αναγνωρισμένο και ενεργό μέλος της Ελληνικής Ομοσπονδίας TAE-KWON-DO (ΕΛ.Ο.Τ.) με Ειδική Αθλητική Αναγνώριση από την Γενική Γραμματεία Αθλητισμού και αναγνωρισμένο και ενεργό μέλος της Ελληνικής Γυμναστικής Ομοσπονδίας (Ε.Γ.Ο.). <br />Ο Σύλλογος ιδρύθηκε το 1990 με όραμα και ιδεώδες τη δημιουργία ενός «νέου συλλόγου», που είχε και έχει σαν θεμέλιο λίθο την αγάπη προς τα παιδιά και τον αθλητισμό. Στην μακροχρόνια και ανοδική πορεία του, εκτός από το Tae Know Do, με το οποίο ξεκίνησε έχει αγκαλιάσει και άλλα αθλήματα, όπως τη Ρυθμική και το Αερόμπικ. <br /> Μέσα από τη νέα ιστοσελίδα, αθλητές μέλη και μη θα έχουν την ευκαιρία να ενημερωθούν άμεσα για τις τελευταίες εξελίξεις του συλλόγου και του αθλήματος του Tae-Kwon-Do. Σε έναν χώρο 600 τ.μ
          στο κέντρο της πόλης με 4 αίθουσες προπόνησης. Τηρώντας το υγειονομικό πρωτόκολλο της Γ.Γ.Α.
          <button onClick={addInfoHnadler} className={classes.read_more}>
            Διαβάστε Περισσότερα...
          </button>
        </p>
      </div>
    </div>
  );
};

export default Introduction;