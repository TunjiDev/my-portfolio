import React from "react";
import Layout from "../components/layout/Layout";
import Heroimg2 from "../components/Heroimg2";
import Contacts from "../components/Contacts";

function Contact() {
  return (
    <>
      <Layout>
        <Heroimg2
          heading="CONTACT."
          text="Let's work together...How do u take your coffee?"
        />
        <Contacts />
      </Layout>
    </>
  );
}

export default Contact;
