import "./Contacts.css";

import React, { useState } from "react";
import {
  FaFacebook,
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa";
import { GrMail } from "react-icons/gr";

function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [click, setClick] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!name && !email && !message) return;

    setClick(true);

    setTimeout(() => {
      setClick(false);
      setName("");
      setEmail("");
      setMessage("");
    }, 3000);
  };

  // console.log(click);

  return (
    <div className="contacts">
      <div className={click ? "contacts__modal" : "contacts__modal hidden"}>
        <p>Thank you {name}, Message received! </p>
      </div>

      <div className="contacts__container">
        <a
          href="https://github.com/TunjiDev"
          id="profile-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={20} style={{ color: "#fff" }} /> GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/adetunji-igbatayo-0a059416b"
          id="profile-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={20} style={{ color: "#4c6ef5" }} /> LinkedIn
        </a>
        <a
          href="https://web.facebook.com/adetunji.igbatayo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook size={20} style={{ color: "rgb(49, 49, 163)" }} />{" "}
          Facebook
        </a>
        <a
          href="https://twitter.com/El_directo_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter size={20} style={{ color: "rgb(66, 120, 221)" }} /> Twitter
        </a>
        <a
          href="mailto:adetunjiigbatayo@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GrMail size={20} style={{ color: "rgb(211, 18, 18)" }} /> Send a mail
        </a>
        <a
          href="tel:+234-090-5357-2653"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaPhone size={20} style={{ color: "rgb(128, 128, 128)" }} /> Call me
        </a>
      </div>

      <form className="contacts__form" onSubmit={submitHandler}>
        <label>Your Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>How may I help you?</label>
        <textarea
          rows="6"
          placeholder="Enter your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
}

export default Home;
