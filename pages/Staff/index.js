import classes from "./staff.module.css";
import Horizontal2Line from "../../components/HorizontalLine/Horizontal2Line";
function Staff() {
  return (
    <section className={classes.section}>
      <Horizontal2Line />
      <div className={classes.container}>
        <div className={classes.minicont}>
          <img className={classes.photo} src="xristosalmasidis.jpg"></img>
          <h1 className={classes.text}> Αλμασίδης Χρήστος</h1>
          {/* <p className={classes.titlee}>Προπονητής Αγωνιστικής Ομάδας</p> */}
        </div>
        <div className={classes.minicont}>
          <img className={classes.photo} src="xristosalmasidis.jpg"></img>
          <h1 className={classes.text}> Αλμασίδης Χρήστος</h1>
        </div>
        <div className={classes.minicont}>
          <img className={classes.photo} src="xristosalmasidis.jpg"></img>
          <h1 className={classes.text}> Αλμασίδης Χρήστος</h1>
        </div>
        <div className={classes.minicont}>
          <img className={classes.photo} src="xristosalmasidis.jpg"></img>
          <h1 className={classes.text}> Αλμασίδης Χρήστος</h1>
        </div>
        <div className={classes.minicont}>
          <img className={classes.photo} src="xristosalmasidis.jpg"></img>
          <h1 className={classes.text}> Αλμασίδης Χρήστος</h1>
        </div>
      </div>

      {/* <div className={classes.justtoleave}> </div> */}
    </section>
  );
}

export default Staff;
