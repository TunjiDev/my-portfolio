import styles from "./Resume.module.css";

import React from "react";

function Resume() {
  return (
    <div className={styles.resume}>
      <div className={styles.resume__header}>
        <h3>ADETUNJI IGBATAYO</h3>
        <h4>adetunjiigbatayo@gmail.com | +23409053572653</h4>
        <h4>
          <a
            href="https://github.com/TunjiDev"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/TunjiDev
          </a>{" "}
          |{" "}
          <a
            href="https://www.linkedin.com/in/adetunji-igbatayo-0a059416b"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.linkedin.com/in/adetunji-igbatayo-0a059416b
          </a>
        </h4>
      </div>

      <div className={styles.resume__professionalSummary}>
        <h3>PROFESSIONAL SUMMARY</h3>
        <p>
          <i>
            Software and Wordpress developer dedicated to helping clients
            accomplish technical goals by developing user friendly and
            forward-thinking apps. Aspiring full stack developer with skills in
            ReactJs and NodeJs. Cloud practitioner with skills in Aws and
            Microsoft Azure. Software tester.
          </i>
        </p>
      </div>

      <div className={styles.resume__education}>
        <h3>EDUCATION</h3>
        <div>
          <div>
            <h4>Bachelor of Engineering (B.Eng), Petroleum</h4>
            <p>Afe Babalola University, Ado-Ekiti, Nigeria</p>
          </div>
          <div>
            <h4>Graduated On: October 2017</h4>
          </div>
        </div>
      </div>

      <div className={styles.resume__technical__skills}>
        <h3>TECHNICAL SKILLS</h3>
        <ul>
          <li>
            <strong>Computing:</strong> Html, Css, JavaScript, ReactJs, NextJs,
            Bootstrap, Wordpress, NodeJs, SQL, NoSQL, Cloud computing, Software
            Testing
          </li>
          <li>
            <strong>Professional:</strong> Problem Solving, Critical Thinking, Team Work.
          </li>
          <li>
            <strong>Languages:</strong> English (fluent)
          </li>
        </ul>
      </div>

      <div className={styles.resume__experience}>
        <h3>EXPERIENCE</h3>
        <div className={styles.resume__experienceTop}>
          <div>
            <h4>Microsoft Azure Database Administrator Intern</h4>
            <p>Stanbic IBTC Digital Skill Empowerment Program </p>
          </div>
          <div>
            <h4>November 2021 - February 2022</h4>
            <p>Lagos, Nigeria</p>
          </div>
        </div>
        <ul>
          <li>
            Deployed and configured servers, instances and databases for Azure
            SQL.
          </li>
          <li>
            Secured data with Azure SQL, masked data, and managed security with
            Microsoft Defender for cloud
          </li>
          <li>
            Delivered consistent performance with Azure SQL using indexes and
            intelligent performance features.
          </li>
          <li>
            Deployed highly available solutions including configuring
            auto-failover groups and georeplication for Azure SQL.
          </li>
        </ul>

        <div className={styles.resume__experienceBottom}>
          <div>
            <h4>Backend Software Developer, Nodejs</h4>
            <p>Anter Technologies</p>
          </div>
          <div>
            <h4>February 2021 - October 2021</h4>
            <p>Ilorin, Nigeria</p>
          </div>
        </div>
        <ul>
          <li>
            Collaborated with Front-end developers to integrate user-facing
            elements with server-side logic.
          </li>
          <li>
            Designed and developed modern APIs (RESTFUL) that integrate with
            server backend.
          </li>
          <li>
            User authentication and authorization between multiple systems,
            servers, and environments
          </li>
          <li>Diagnosed and fixed bugs.</li>
          <li>
            Maintained code and performed unit and integration testing to ensure
            the app was of the highest quality.
          </li>
        </ul>
      </div>

      <div className={styles.resume__certifications}>
        <h3>PROFESSIONAL CERTIFICATIONS</h3>

        <ul>
          <li>
            4X Microsoft Azure Certified (AZ-900, DP-900, AI-900, DP-300).
          </li>
          <li>
            Certified Database Administrator (MYSQL & MONGODB) by Side Hustle
            (October 2021).
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;
