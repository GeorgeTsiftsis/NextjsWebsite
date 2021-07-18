import React, { Component } from "react";
// import { NavLink } from "react-router-dom";
import classes from './MainNavigation.module.css';
// import "./Navbarmobile.css";
import { FaFacebook } from "react-icons/fa";


// import { fab } from '@fortawesome/free-brands-svg-icons'
import { FaInstagram } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";
import Link from "next/link";
// import classes from "./active.module.css";
// import NavLinksItemsFun, { NavBarItems } from "./NavBarItems";

class MainHeader extends Component {
  state = { clicked: true };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
        <>
      <header className= {classes.header}>
        <nav className={classes.navbar}>
          <div className={classes.brandtitle}>
            Μακεδονική Δύναμη Κοζάνης
            <div className={classes.menu_icon} onClick={this.handleClick}>
              <i> {this.state.clicked ? <FiMenu className={classes.fas}  /> : <FaTimes className={classes.fas} />}</i>
              <h1 className={classes.menu_index_title}>Menu</h1>
              
            </div>
          </div>

          <div 
          className={this.state.clicked ? `${classes.navbar_links}` : `${classes.navbar_links_active}`}
          >
             
            <ul className={classes.list_ul}>
              <li className={classes.list}>
                <Link className={classes.list_a} 
                // activeClassName={classes.activee} 
                href="/">
                  Αρχική
                </Link>
              </li>
              <li className={classes.list}>
                <Link className="list_a"
                //  activeClassName={classes.activee} 
                 href="/History">
                  Ιστορια- Σύλλογος
                </Link>
              </li>
              <li className={classes.list}>
                <Link className="list_a" activeClassName={classes.activee} href="/Staff">
                  Προσωπικό
                </Link>
              </li>
              <li className={classes.list}>
                <Link className="list_a" activeClassName={classes.activee} href="/Τμήματα">
                  Τμήματα
                </Link>
              </li>
              <li className={classes.list}>
                <Link className="list_a" activeClassName={classes.activee} href="/Πληροφορίες">
                  Επικοινωνία
                </Link>
              </li>
    </ul>
            {/* <NavLinksItemsFun NavBarItems={NavBarItems} /> */}
          </div>
          <div className={classes.socialmediacontainer}>
          <a className="faba" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=100063686376902" >
              <FaFacebook  className={classes.fab} />
              </a>
            <a  target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/macedonian_force/">
              <FaInstagram className={classes.fab}  />
            </a>
         
          </div>
        </nav>
      </header>
       <div className={classes.livebox}>
       <img src="makdin.jpg" alt="makedoniki-dinami-logo"></img>
     </div>
     </>
    );
  }
}

export default MainHeader;
