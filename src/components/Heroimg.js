import "./Heroimg.css";
import React from "react";
import IntroImg from "../assets/images/photo-home.avif";
import { Link } from "react-router-dom";

function Heroimg() {
  return (
    <div className="heroimg">
      <div className="heroimg__mask">
        <img className="heromimg__introImg" src={IntroImg} alt="IntroImg" />
      </div>

      <div className="heroimg__content">
        <p>Hey there, I am Tunji</p>
        <h1>A software developer</h1>
        <div>
          <Link to="/project" className="btn">
            PROJECTS
          </Link>
          <Link to="/contact" className="btn btn__light">
            CONTACT
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Heroimg;
