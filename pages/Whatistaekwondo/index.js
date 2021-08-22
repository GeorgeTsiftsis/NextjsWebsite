import classes from "./style.module.css";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Image from "next/image";
import apostolistelikostoglou from "../../public/whatistkd.jpg";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};
function Whatistaekwondo() {
  const router = useRouter();
  function showDetailsHandler() {
    router.push("/" + "Groups");
  }
  return (
    <>
      <motion.section className={classes.cont} initial="hidden" animate="enter" exit="exit" variants={variants} transition={{ type: "linear" }}>
        <div>
          <h1 className={classes.title}> Λίγα λόγια για το Tae-Kwon-DO</h1>
          <h2 className={classes.description}>Το ταε-κβο-ντο είναι ολυμπιακό άθλημα που ξεκίνησε στην Κόρέα. Οι λέξεις του τάε και κβον αντιπροσωπεύουν το χερί και το πόδι ενώ το ντο συμβολίζει την μέθοδο η τον τρόπο που χρησιμοπιεί το μυαλό προκειμένου να συνδυάσει χέρια και πόδια στην πολεμική αυτή τέχνη</h2>
        </div>
        <Image className={classes.photo} src={apostolistelikostoglou} alt="apostolistelikostoglou"></Image>
      </motion.section>
      <section className={classes.cont2}>
        <h2 className={classes.description2}> Η Μακεδονικη Δύναμη Κοζάνης εξειδικεύεται στο Tae-Kwon-Do για περισσότερο απο 30 χρόνια αποτελόντας έναν απο τους ιστορικότερους και πιο πετυχημένους συλλόγους στην Ελλάδα.</h2> <h2 className={classes.description2}>To άθλημα του Ταε-Κβον-Ντο διδάσκεται από ηλικίες των 6 ετών. Μπορείτε να περιηγήθειτε στα διάφορα τμήματα μας κάνοντας κλίκ στο παρακάτω κουμπί</h2>
        <div className={classes.section_of_button}>
          <span className={classes.span}>
            <a onClick={showDetailsHandler}></a>
          </span>
        </div>
      </section>
    </>
  );
}

export default Whatistaekwondo;
