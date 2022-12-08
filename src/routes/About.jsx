import React from "react";
import Layout from "../components/layout/Layout";
import Heroimg2 from "../components/Heroimg2";
import Resume from "../components/Resume";

function About() {
  return (
    <>
      <Layout>
        <Heroimg2
          heading="ABOUT."
          text="I am a friendly Software Engineer with skills in Front-End engineering(ReactJs), Back-End engineering(NodeJs), Wordpress Development, Cloud Engineering(AWS and Microsoft Azure) as well as Software Quality Assurance Engineering. Please check out my resume below."
        />
        <Resume />
      </Layout>
    </>
  );
}

export default About;
