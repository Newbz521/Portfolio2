import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./magazine.css";
import DDR from "../files/DDR.jpeg";
import Inner from "../files/inner.jpeg";
import Maps from "../files/maps.jpeg";
import Hater from "../files/Hater.jpeg";

export default function Magazine(props) {
  function closeProject() {
    props.setCurrent("none");
  }
  return (
    <>
      <div className="projectMagContainer">
        <div className="magCover">
          <div className="closer" onClick={closeProject}>
            X
          </div>
          <h1>TIME</h1>
          <p>"The Next Big {props.title}"</p>
          <img className="screenShot" src={props.img}></img>
          <p>
            Now available:{" "}
            <a className="links" href={props.url} target="_blank">
              Online
            </a>
          </p>
          <p>
            More info on:{" "}
            <a className="links" href={props.git} target="_blank">
              GitHub
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
