import classes from "./styler.module.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function footer() {
  return (
    <div className={classes.footer_dark}>
      <footer>
        <div className={classes.container}>
          <div className={classes.row}>
            <div className={`${classes.item} ${classes.text}`}>
              <h3>Υπηρεσίες</h3>
              <ul>
                <li>
                  <a href="#">Ταε-Κβον-Ντό</a>
                </li>
                <li>
                  <a href="#">Μοντέρνος Χορός</a>
                </li>
                <li>
                  <a href="#">Ελεύθερα Βάρη</a>
                </li>
              </ul>
            </div>
            <div className={`${classes.item} ${classes.text}`}>
              <h3>Σχετικά με εμάς</h3>
              <ul>
                <li>
                  <a href="#">Ιστορία-Σύλλογος</a>
                </li>
                <li>
                  <a href="#">Τμήματα</a>
                </li>
                <li>
                  <a href="#">Αρχική Σελίδα</a>
                </li>
              </ul>
            </div>

            <div className={`${classes.item} ${classes.text}`}>
              <h3>Επικοινωνία</h3>
              <ul>
                <li>
                  <a href="#">Εστίας 3, Κοζάνη 50132</a>
                </li>
                <li>
                  <a href="#">Τηλέφωνο +24610 25054</a>
                </li>
                <li>
                  <a href="#">Email:macedonianforce@outlook.com</a>
                </li>
              </ul>
            </div>
          </div>
          <div className={classes.socialmediacontainer}>
            <a target="_blank" href="https://www.facebook.com/profile.php?id=100063686376902" style={{ padding: 5 }}>
              <FaFacebook className={classes.fab} />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/macedonian_force/" style={{ padding: 5 }}>
              <FaInstagram className={classes.fab} />
            </a>
          </div>
          <p className={classes.copyright}>Μακεδονική Δύναμη Κοζάνης © 2021</p>
        </div>
      </footer>
    </div>
  );
}

export default footer;
