import React from "react";
import Navbar from "../components/Navbar";
import Heroimg2 from "../components/Heroimg2";
import Footer from "../components/Footer";
import Contacts from "../components/Contacts";

function Contact() {
  return (
    <div>
      <Navbar />
      <Heroimg2
        heading="CONTACT."
        text="Let's work together...How do u take your coffee?"
      />
      <Contacts />
      <Footer />
    </div>
  );
}

export default Contact;
