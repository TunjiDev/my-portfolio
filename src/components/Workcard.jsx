import React from "react";
import styles from "./Workcard.module.css";

function Home({ imgsrc, title, siteUrl, githubUrl }) {
  return (
    <div className={styles.workcard}>
      <a
        href={siteUrl}
        rel="noopener noreferrer"
        className={styles.workcard__siteLink}
      >
        <img src={imgsrc} alt="site pic" />
      </a>
      <a
        href={githubUrl}
        rel="noopener noreferrer"
        className={styles.workcard__repoLink}
      >
        {title}
      </a>
    </div>
  );
}

export default Home;
