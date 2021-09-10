import React, { Component } from "react";
// import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
// import "./Navbarmobile.css";
import { FaFacebook, FaInstagram, FaTimes } from "react-icons/fa";
// import { AnimateSharedLayout, motion } from "framer-motion";
import OwnImage from "./Image";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
// import { motion } from "framer-motion";
// import classes from "./active.module.css";
// import NavLinksItemsFun, { NavBarItems } from "./NavBarItems";

const links = [
  {
    name: "Σύλλογος",
    href: "/History",
  },
  {
    name: "Προσωπικό",
    href: "/Staff",
  },
  {
    name: "Τμήματα",
    href: "/Groups",
  },
  {
    name: "Επικοινωνία",
    href: "/Contact",
  },
  {
    name: "Αίθουσες",
    href: "/Egkatastaseis-tae-kwon-do",
  },
  {
    name: "Δράσεις",
    href: "/Draseis",
  },
];

const MainHeader = () => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen((setOpen) => (setOpen = !setOpen));
  };

  const router = useRouter();
  function Home() {
    router.push("/");
  }

  return (
    <>
      <header className={classes.header}>
        <nav  className={classes.navbar}>
          <div className={classes.lala}>
            <h1 onClick={Home} className={classes.brandtitle}>
              Μακεδονική Δύναμη Κοζάνης
            </h1>
            <div className={classes.menu_icon} onClick={handleClick}>
              <i> {open ? <FiMenu className={classes.fas} /> : <FaTimes className={classes.fas} />}</i>
              <h1  className={classes.menu_index_title}>Menu</h1>
            </div>
          </div>

          <div className={open ? `${classes.navbar_links}` : `${classes.navbar_links_active}`}>
            <ul className={classes.list_ul}>
              {links.map(({ name, href }) => (
                <li key={name} className={classes.list}>
                  <Link passHref href={href}>
                    <a  onClick={handleClick}>{name}</a>
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
      <OwnImage src="/makdin2.jpg" layout="fill" alt="makedoniki-dinami-logo"></OwnImage>
    </>
  );
};

export default MainHeader;
