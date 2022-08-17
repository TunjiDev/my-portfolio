import styles from "./Footer.module.css";
import { AiOutlineArrowUp } from "react-icons/ai";
import React, { useState } from "react";

function Footer() {
  const [bottom, setBottom] = useState(false);

  const toTop = () => {
    if (window.scrollY >= 150) {
      setBottom(true);
    } else {
      setBottom(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0 });
  };

  window.addEventListener("scroll", toTop);

  return (
    <div className={styles.footer}>
      <div className={styles.footer__container}>
        <h2>Created by @TunjiDev. ALL RIGHTS RESERVED.</h2>
      </div>

      <div>
        <AiOutlineArrowUp
          size={40}
          onClick={scrollToTop}
          className={
            bottom
              ? `${styles.footer__topArrowIcon}`
              : `${styles.hidden} ${styles.footer__topArrowIcon}`
          }
        />
      </div>
    </div>
  );
}

export default Footer;
