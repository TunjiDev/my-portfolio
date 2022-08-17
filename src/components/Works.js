import React, { useState } from "react";
import styles from "./Works.module.css";
import Workcard from "../components/Workcard";
import WorkcardFrontendData from "../components/WorkcardFrontendData";
import WorkcardBackendData from "../components/WorkcardBackendData";

function Works() {
  const [clickFrontend, setClickFrontend] = useState(true);
  const [clickBackend, setClickBackend] = useState(false);

  const handleClickFrontend = () => {
    setClickFrontend(true);
    setClickBackend(false);
  };
  const handleClickBackend = () => {
    setClickBackend(true);
    setClickFrontend(false);
  };

  return (
    <div className={styles.works__container}>
      <div className={styles.works__containerBtnDiv}>
        <div
          className={clickFrontend ? "btn" : "btn btn__light"}
          onClick={handleClickFrontend}
        >
          Front-End
        </div>
        <div
          className={clickBackend ? "btn" : "btn btn__light"}
          onClick={handleClickBackend}
        >
          Back-End
        </div>
      </div>

      <div className={styles.works__workcardContainer}>
        {clickFrontend
          ? WorkcardFrontendData.map((data, i) => {
              return (
                <Workcard
                  key={i}
                  imgsrc={data.imgsrc}
                  title={data.title}
                  siteUrl={data.siteUrl}
                  githubUrl={data.githubUrl}
                />
              );
            })
          : WorkcardBackendData.map((data, i) => {
              return (
                <Workcard
                  key={i}
                  imgsrc={data.imgsrc}
                  title={data.title}
                  siteUrl={data.siteUrl}
                  githubUrl={data.githubUrl}
                />
              );
            })}
      </div>
    </div>
  );
}

export default Works;
