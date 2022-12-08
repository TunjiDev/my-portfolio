import React from "react";
import Heroimg2 from "../components/Heroimg2";
import Layout from "../components/layout/Layout";
import Works from "../components/Works";

function Project() {
  return (
    <>
      <Layout>
        <Heroimg2 heading="PROJECTS." text="Here are some of my works" />
        <Works />
      </Layout>
    </>
  );
}

export default Project;
