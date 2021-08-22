// import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
// import "./Navbarmobile.css";

import { AnimateSharedLayout, motion } from "framer-motion";
import OwnImage from "./Image";
// import { fab } from '@fortawesome/free-brands-svg-icons'
import { FiMenu } from "react-icons/fi";
import { FaTimes, FaFacebook, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
// import classes from "./active.module.css";
// import NavLinksItemsFun, { NavBarItems } from "./NavBarItems";

const links = [
  {
    name: "Αρχίκη",
    href: "/",
    key: "1",
  },
  {
    name: "Σύλλογος Ιστορία",
    href: "/History",
    key: "2",
  },
  {
    name: "Πρόσωπικο",
    href: "/Staff",
    key: "3",
  },
  {
    name: "Τμήματα",
    href: "/Groups",
    key: "4",
  },
  {
    name: "Επικοινωνία",
    href: "/Contact",
    key: "5",
  },
];

const MainHeader = () => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen((setOpen) => (setOpen = !setOpen));
  };

  return (
    <>
      <header className={classes.header}>
        <nav className={classes.navbar}>
          <div className={classes.brandtitle}>
            Μακεδονική Δύναμη Κοζάνης
            <div className={classes.menu_icon} onClick={handleClick}>
              <i> {open ? <FiMenu className={classes.fas} /> : <FaTimes className={classes.fas} />}</i>
              <h1 className={classes.menu_index_title}>Menu</h1>
            </div>
          </div>

          <div className={open ? `${classes.navbar_links}` : `${classes.navbar_links_active}`}>
            <ul className={classes.list_ul}>
              {links.map(({ name, index, href }) => (
                <li key={name} className={classes.list}>
                  <Link passHref href={href}>
                    <a>{name}</a>
                  </Link>
                </li>
              ))}
            </ul>

            {/* <NavLinksItemsFun NavBarItems={NavBarItems} /> */}
          </div>
          <div className={classes.socialmediacontainer}>
            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=100063686376902" style={{ padding: 5 }}>
              <FaFacebook className={classes.fab} />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/macedonian_force/" style={{ padding: 5 }}>
              <FaInstagram className={classes.fab} />
            </a>
          </div>
        </nav>
      </header>
      <OwnImage src="/makdin.jpg" layout="fill" alt="makedoniki-dinami-logo"></OwnImage>
    </>
  );
};

export default MainHeader;
