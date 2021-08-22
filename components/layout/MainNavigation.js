import React, { Component } from "react";
// import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
// import "./Navbarmobile.css";
import { FaFacebook } from "react-icons/fa";

import OwnImage from "./Image";
// import { fab } from '@fortawesome/free-brands-svg-icons'
import { FaInstagram } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
// import classes from "./active.module.css";
// import NavLinksItemsFun, { NavBarItems } from "./NavBarItems";

const MainHeader = () => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen((setOpen) => (setOpen = !setOpen));
  };

  const router = useRouter;
  const active = {
    color: "gold",
    height: "400px",
  };
  const inactive = {
    color: "red",
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
              <li className={classes.list}>
                <Link
                  //  className={router.pathname === "/" ? $`{classes.active}` : ""}
                  activeClassName="active"
                  href="/"
                >
                  Αρχική
                </Link>
              </li>
              <li className={router.pathname == "/History" ? `${classes.active}` : ""}>
                <Link href="/History">Ιστορια- Σύλλογος</Link>
              </li>
              <li className={classes.list}>
                <Link className={classes.boi} href="/Staff">
                  Προσωπικό
                </Link>
              </li>
              <li className={classes.list}>
                <Link href="/Groups">Τμήματα</Link>
              </li>
              <li className={classes.list}>
                <Link href="/Contact">Επικοινωνία</Link>
              </li>
            </ul>

            {/* <NavLinksItemsFun NavBarItems={NavBarItems} /> */}
          </div>
          <div className={classes.socialmediacontainer}>
            <a target="_blank" href="https://www.facebook.com/profile.php?id=100063686376902" style={{ padding: 5 }}>
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
