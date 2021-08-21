import classes from "./style.module.css";
// import { firebase } from "../util/firebase";
import { useState } from "react";
function FormforContact() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      name,
      lastname,
      email,
      message,
    };
    console.log(data);

    fetch("/api/contact", {
      method: "post",
      body: JSON.stringify(data),
    }).then((res) => {
      if (!res.ok) {
        throw new Error("Κάποιο Πρόβλημα Πραουσιάστηκε δοκιμάστε ξανά");
      } else {
        setName("");
        setLastName("");
        setEmail("");
        setMessage("");
        setSubmitted(true);
      }
    });
  };

  // fetch("/api/contact", {
  //   method: "POST",
  //   headers: {
  //     Accept: "application/json, text/plain, */*",
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(data),
  // }).then((res) => {
  //   console.log("Response received");
  //   if (res.status === 200) {
  //     console.log("Response succeeded!");
  //     setSubmitted(true);
  //     setName("");
  //     setLastName("");
  //     setEmail("");
  //     setBody("");
  //   }
  // });
  // firebase
  //   .collection("contacts")
  //   .add({
  //     name: name,
  //     lastname: lastname,
  //     email: email,
  //     message: message,
  //   })
  //   .then(() => {
  //     alert("Message Has been submitted");
  //   })
  //   .catch((error) => {
  //     alert(error.message);
  //   });
  // setName("");
  // setLastName("");
  // setEmail("");
  // setMessage("");

  return (
    <>
      {!submitted && (
        <section className={classes.body}>
          <div className={`${classes.container} ${classes.card} ${classes.message_container}`}>
            <h1 className={`${classes.message_title}`}>Στειλτε μήνυμα</h1>

            <form className={classes.form} onSubmit={handleSubmit}>
              {/* // action="mailto:gtsiff@gmail.com" method="post" enctype="text/plain"> */}
              {/* <label for="subject" className={`${classes.subject} ${classes.label}`}>
            Subject
          </label>
          <input type="text" name="subject" maxlength="45" /> */}

              <label htmlFor="message" className={`${classes.message} ${classes.label}`}>
                Μήνυμα
              </label>
              <textarea className={classes.textarea} /*name="message"*/ cols="30" rows="7" required maxLength="500" /*value={message}*/ onChange={(e) => setMessage(e.target.value)}></textarea>

              <label htmlFor="name" className={`${classes.name} ${classes.label}`}>
                Όνομα
                {/* <!-- keep <p> on next line to keep a letter space for mobile version --> */}
                <p className={classes.break}>(Προαιρετικό)</p>
              </label>
              <input className={`${classes.first_name} ${classes.input}`} type="text" /*name="first-name"*/ placeholder="Όνομα" maxLength="20" /*value={name}*/ onChange={(e) => setName(e.target.value)} />
              <input className={`${classes.last_name} ${classes.input}`} type="text" /*name="last-name"*/ placeholder="Επίθετο" maxLength="20" /*value={lastname}*/ onChange={(e) => setLastName(e.target.value)} />

              <label htmlFor="email" className={`${classes.email} ${classes.label}`}>
                Email
                {/* <!-- keep <b> on next line to keep a letter space for mobile version --> */}
                {/* <p className={classes.break}>(Optional)</p> */}
              </label>
              <input className={`${classes.email} ${classes.input}`} type="email" /*name="email"*/ placeholder="example@email.com" /*value={email}*/ onChange={(e) => setEmail(e.target.value)} />

              <p className={classes.button_container}>
                <button className={classes.button} type="submit">
                  Αποστολή
                </button>
              </p>
            </form>
          </div>
        </section>
      )}
      {submitted && (
        <section className={classes.section}>
          <div className={`${classes.container} ${classes.card} ${classes.message_container}`}>
            <h2 className={classes.text}>Το μήνυμα σας στάλθηκε θα προσπαθήσουμε να επικοινωνήσουμε μαζί σας το συντομότερο δυνατό </h2>
          </div>
        </section>
      )}
    </>
  );
}

export default FormforContact;
