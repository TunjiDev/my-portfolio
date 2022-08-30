import React, { useState } from "react";
import styles from "./Works.module.css";
import Workcard from "../components/Workcard";
import WorkcardFrontendData from "../components/WorkcardFrontendData";
import WorkcardBackendData from "../components/WorkcardBackendData";
import WorkcardWordpressData from "../components/WorkcardWordpressData";

function Works() {
  const [clickFrontend, setClickFrontend] = useState(true);
  const [clickBackend, setClickBackend] = useState(false);
  const [clickWordpress, setClickWordpress] = useState(false);

  const handleClickFrontend = () => {
    setClickFrontend(true);
    setClickBackend(false);
    setClickWordpress(false);
  };

  const handleClickBackend = () => {
    setClickBackend(true);
    setClickFrontend(false);
    setClickWordpress(false);
  };

  const handleClickWordpress = () => {
    setClickWordpress(true);
    setClickBackend(false);
    setClickFrontend(false);
  };

  return (
    <div className={styles.works__container}>
      <div className={styles.works__containerBtnDiv}>
        <button
          className={clickFrontend ? "btn" : "btn btn__light"}
          onClick={handleClickFrontend}
        >
          Front-End
        </button>

        <button
          className={clickBackend ? "btn" : "btn btn__light"}
          onClick={handleClickBackend}
        >
          Back-End
        </button>

        <button
          className={clickWordpress ? "btn" : "btn btn__light"}
          onClick={handleClickWordpress}
        >
          Wordpress
        </button>
      </div>

      <div className={styles.works__workcardContainer}>
        {clickFrontend &&
          WorkcardFrontendData.map((data, i) => {
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

        {clickBackend &&
          WorkcardBackendData.map((data, i) => {
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

        {clickWordpress &&
          WorkcardWordpressData.map((data, i) => {
            return (
              <Workcard
                key={i}
                imgsrc={data.imgsrc}
                title={data.title}
                siteUrl={data.siteUrl}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Works;
