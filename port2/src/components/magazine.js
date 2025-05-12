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
  const [isScrollDisabled, setIsScrollDisabled] = useState(true);
  useEffect(() => {
    document.body.style.overflowY = isScrollDisabled ? "hidden" : "auto";
  }, [isScrollDisabled]);
  return (
    <>
      {/* <div className="modalBG"> */}

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
         {props.git && <p>
            More info on:{" "}
            <a className="links" href={props.git} target="_blank">
              GitHub
            </a>
          </p>}
        </div>
        </div>
        
        {/* </div> */}
    </>
  );
}
