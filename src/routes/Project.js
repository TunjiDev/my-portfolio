import React from "react";
import Navbar from "../components/Navbar";
import Heroimg2 from "../components/Heroimg2";
import Footer from "../components/Footer";
import Works from "../components/Works";

function Project() {
  return (
    <>
      <Navbar />
      <Heroimg2 heading="PROJECTS." text="Here are some of my works" />
      <Works />
      <Footer />
    </>
  );
}

export default Project;
