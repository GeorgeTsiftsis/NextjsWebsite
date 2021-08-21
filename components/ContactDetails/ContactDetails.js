import classes from "./ContactDetails.module.css";
function ContactDetails() {
  return (
    <>
      <div className={classes.container_descrption_of_anouncements}>
        <h1 className={classes.text}>ΠΛΗΡΟΦΟΡΙΕΣ</h1>
        <span className={classes.line}></span>
      </div>
      <div className={classes.container_details_contact}>
        <h2 className={classes.text_details}> Η έδρα του συλλόγου, καθώς και το κύριο τμήμα βρίσκεται στην τοποθεσία Εστίας 3. Μπορείτε να επικοινωνήσετε μαζί μας συμπληρόνοντας την φόρμα για οποιαδήποτε απορία η να καλέστε στο +24610 24054. </h2>
      </div>
    </>
  );
}

export default ContactDetails;
