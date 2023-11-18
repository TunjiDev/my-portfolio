import React from "react";
import "./Cube.css";

const Cube = () => {
  return (
    <div id="cube-container">
      <div className="cubo uppercase font-semibold">
        <div className="cara1 flex justify-center items-center">
          <p>JavaScript</p>
        </div>
        <div className="cara2 flex justify-center items-center">
          <p>TypeScript</p>
        </div>
        <div className="cara3 flex justify-center items-center">
          <p>ReactJs</p>
        </div>
        <div className="cara4 flex justify-center items-center">
          <p>NextJs</p>
        </div>
        <div className="cara5 flex justify-center items-center">
          <p>ChakraUI</p>
        </div>
        <div className="cara6 flex justify-center items-center">
          <p>...and more</p>
        </div>
      </div>
    </div>
  );
};

export default Cube;
