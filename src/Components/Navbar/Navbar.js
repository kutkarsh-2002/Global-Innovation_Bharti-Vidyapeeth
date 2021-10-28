import React, { useState } from "react";
import { Link } from "react-scroll";
import Styles from "./Navbar.module.css";
import { FaBars } from "react-icons/fa";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "./Navbar.module.css";
const NavBar = () => {
  const [color, setcolor] = useState(0);
  const [collapseCol, setCollapseCol] = useState(0);
  const changeNavbarColor = () => {
    if (window.scrollY >= 450) {
      setcolor(1);
    } else {
      setcolor(0);
    }
  };
  const toggleNavColor = () => {
    if (collapseCol === 0) {
      setCollapseCol(1);
    } else {
      setCollapseCol(0);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  console.log(color);
  return (
    <React.Fragment>
      {color === 0 && collapseCol === 0 ? (
        <nav
          className={`navbar navbar-expand-lg navbar-light fixed-top  bg-transparent`}
        >
          <div className="container-fluid">
            {/* <a className={`nav-item ${Styles.Header}`} id="header" href="/">
              logo
            </a> */}
            <button
              onClick={toggleNavColor}
              className={`navbar-toggler `}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <FaBars className={Styles.Navbutton} />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className={`nav-item `}>
                  <Link to="inc" activeClass="active" smooth={true}>
                    INCUBATION
                  </Link>
                </li>
                <li className={`nav-item `}>
                  <Link to="ment" activeClass="active" smooth={true}>
                    MENTORSHIP
                  </Link>
                </li>
                <li className={`nav-item `}>
                  <Link to="fnd" activeClass="active" smooth={true}>
                    FUND RAISING
                  </Link>
                </li>
                <li className={`nav-item `}>
                  <Link to="" activeClass="active" smooth={true}>
                    ABOUT
                  </Link>
                </li>
                <li className={`nav-item `}>
                  <Link to="#footer-reach" activeClass="active" smooth={true}>
                    CONTACT
                  </Link>
                </li>
                <li className={`nav-item `}>
                  <Link to="" activeClass="active" smooth={true}>
                    HELP
                  </Link>
                </li>
                <li className={`nav-item `}>
                  <Link to="" activeClass="active" smooth={true}>
                    LOGIN
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      ) : (
        <nav
          className={`navbar navbar-expand-lg navbar-light fixed-top ${Styles.Nav} bg-transparent`}
        >
          <div className="container-fluid">
            <a className={`nav-item ${Styles.Header}`} id="header" href="/">
              lOGO
            </a>
            <button
              onClick={toggleNavColor}
              className={`navbar-toggler `}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <FaBars className={Styles.Navbutton} />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className={`nav-item `}>
                  <Link to="inc" activeClass="active" smooth={true}>
                    INCUBATION
                  </Link>
                </li>
                <li className={`nav-item `}>
                  <Link to="ment" activeClass="active" smooth={true}>
                    MENTORSHIP
                  </Link>
                </li>
                <li className={`nav-item `}>
                  <Link to="fnd" activeClass="active" smooth={true}>
                    FUND RAISING
                  </Link>
                </li>
                <li className={`nav-item `}>
                  <Link to="" activeClass="active" smooth={true}>
                    ABOUT
                  </Link>
                </li>
                <li className={`nav-item `}>
                  <Link to="contact" activeClass="active" smooth={true}>
                    CONTACT
                  </Link>
                </li>
                <li className={`nav-item `}>
                  <Link to="" activeClass="active" smooth={true}>
                    HELP
                  </Link>
                </li>
                <li className={`nav-item `}>
                  <Link to="" activeClass="active" smooth={true}>
                    LOGIN
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}
    </React.Fragment>
  );
};
export default NavBar;
