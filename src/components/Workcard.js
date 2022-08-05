import React from "react";
import "./Workcard.css";

function Home({ imgsrc, title, siteUrl, githubUrl }) {
  return (
    <div className="workcard">
      <a
        href={siteUrl}
        rel="noopener noreferrer"
        className="wordcard__siteLink"
      >
        <img src={imgsrc} alt="site pic" />
      </a>
      <a
        href={githubUrl}
        rel="noopener noreferrer"
        className="wordcard__repoLink"
      >
        {title}
      </a>
    </div>
  );
}

export default Home;
