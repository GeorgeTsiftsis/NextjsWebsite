import classes from "./styler.module.css";
import { FaFacebook, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";
function Footer() {
  return (
    <div className={classes.footer_dark}>
      <footer>
        <div className={classes.container}>
          <div className={classes.row}>
            <div className={`${classes.item} ${classes.text}`}>
              <h3>Υπηρεσίες</h3>
              <ul>
                <li>
                  <Link href="/Groups/1">Ταε-Κβον-Ντό</Link>
                </li>
                <li>
                  <Link href="/Groups/2">Χορός</Link>
                </li>
              </ul>
            </div>
            <div className={`${classes.item} ${classes.text}`}>
              <h3>Σχετικά με εμάς</h3>
              <ul>
                <li>
                  <Link href="/">Αρχική Σελίδα</Link>
                </li>
                <li>
                  <Link href="/History">Ιστορία-Σύλλογος</Link>
                </li>
                <li>
                  <Link href="/Groups">Τμήματα</Link>
                </li>
                <li>
                  <Link href="/Contact">Επικοινωνία</Link>
                </li>
                <li>
                  <Link href="/Egkatastaseis-tae-kwon-do">Αίθουσες</Link>
                </li>
              </ul>
            </div>

            <div className={`${classes.item} ${classes.text}`}>
              <h3>Επικοινωνία</h3>
              <ul>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.google.gr/maps/place/%CE%91.%CE%93.%CE%A3.+%CE%9A%CE%BF%CE%B6%CE%AC%CE%BD%CE%B7%CF%82+%CE%9C%CE%B1%CE%BA%CE%B5%CE%B4%CE%BF%CE%BD%CE%B9%CE%BA%CE%AE+%CE%94%CF%8D%CE%BD%CE%B1%CE%BC%CE%B7/@40.3007464,21.7858849,17z/data=!4m13!1m7!3m6!1s0x1359d26d28d94dff:0x7f6b8ba56b15ee18!2sEstias+3,+Kozani+501+00!3b1!8m2!3d40.3006863!4d21.7858936!3m4!1s0x1359d26d2c9a16ab:0xb6b78ea356648f1!8m2!3d40.3006863!4d21.7854351"
                  >
                    <GoLocation className={classes.location} /> Εστίας 3, Κοζάνη
                    50132
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="tel:+3024610-25054"
                  >
                    <FaPhoneAlt className={classes.location} /> Τηλέφωνο 24610
                    25054
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="mailto:chrisalmasidistkd@gmail.com"
                  >
                    <AiOutlineMail className={classes.location} />{" "}
                    chrisalmasidistkd@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={classes.socialmediacontainer}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/profile.php?id=100063686376902"
              style={{ padding: 5 }}
            >
              <FaFacebook className={classes.fab} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/makedoniki_dinami/"
              style={{ padding: 5 }}
            >
              <FaInstagram className={classes.fab} />
            </a>
          </div>
          <p className={classes.copyright}>
            Μακεδονική Δύναμη Κοζάνης © {new Date().getFullYear()}
          </p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.gtsif.com"
            className={classes.developedby}
          >
            Developed by George Tsiftsis
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
