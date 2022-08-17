import styles from "./Navbar.module.css";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div
      className={
        color
          ? `${styles.navbar__header} ${styles.navbar__headerBg}`
          : `${styles.navbar__header}`
      }
    >
      <nav className={styles.navbar__nav}>
        <Link to="/" style={{ fontSize: "24px" }}>
          Portfolio
        </Link>

        <ul
          className={
            click
              ? `${styles.navbar__menu} ${styles.active}`
              : `${styles.navbar__menu}`
          }
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/project">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <div className={styles.navbar__hamburger} onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{ color: "#fff" }} />
          ) : (
            <FaBars size={20} style={{ color: "#fff" }} />
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
