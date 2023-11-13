import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./landing.css";
import Magazine from "../components/magazine.js";
import DDR from "../files/DDR.jpeg";
import Inner from "../files/inner.jpeg";
import Maps from "../files/maps.jpeg";
import Hater from "../files/Hater.jpeg";
import ezML from "../files/ezML.png"
import Bubble from "../files/bubble.png";
import Marble from "../files/marble.png"
import FUTURAMA from "../files/FUTURAMA.jpeg";
import GRAPH from "../files/GRAPH.jpeg";
import Mountain from "./mountain.png";
import Forrest from "./forrest.png";
import Portfolio from "../files/portfolio.jpeg";
import Navbar from "../components/navbar/nav";
import { render } from "react-dom";
import { Parallax, Background } from "react-parallax";

import Resume from "../files/Resume.pdf";
import Window from "../components/backWindow.js";
import { MdFullscreenExit } from "react-icons/md";

export default function Landing(props) {
  const [show, setShow] = useState("none");
  const [slideIn, setSlideIn] = useState({ display: "none" });
  const [toggle, setToggle] = useState(true);

  const AboutMeRef = useRef();
  const ProjectsRef = useRef();
  const ContactRef = useRef();

  function clickAboutMe() {
    AboutMeRef.current.scrollIntoView({ behavior: "smooth" });
  }
  function clickProjects() {
    ProjectsRef.current.scrollIntoView({ behavior: "smooth" });
  }
  function clickContact() {
    ContactRef.current.scrollIntoView({ behavior: "smooth" });
  }

  const allProjects = [
    {
      name: "ezML",
      git: "",
      url: "https://ezml.io/",
      img: ezML,
      tag: "ezML",
      project: "project1",
      row: "1",
    },
    {
      name: "Bubble Frenzy",
      git: "https://github.com/Newbz521/Beacon-Defender-",
      url: "https://newbz521.github.io/Beacon-Defender-/",
      img: Bubble,
      tag: "Bubble",
      project: "project1",
      row: "2",
    },
    {
      name: "The Marbler",
      git: "https://github.com/Newbz521/Game-test",
      url: "https://newbz521.github.io/Game-test/",
      img: Marble,
      tag: "Marble",
      project: "project1",
      row: "2",
    },

    // {
    //   name: "Places",
    //   git: "https://github.com/Newbz521/Places-API-Reac-Front-End",
    //   url: "https://travelpoints.netlify.app",
    //   img: Maps,
    //   tag: "Places",
    //   project: "project3",
    //   row: "1",
    // },
    {
      name: "DDR",
      git: "https://github.com/Newbz521/DDR",
      url: "https://newbz521.github.io/DDR/",
      img: DDR,
      tag: "DDR",
      project: "project4",
      row: "2",
    },
    // {
    //   name: "GRAPH",
    //   git: "https://github.com/Newbz521/React-Graph-Component",
    //   url: "https://graphcomponent.netlify.app/",
    //   img: GRAPH,
    //   tag: "GRAPH",
    //   project: "project5",
    //   row: "2",
    // },

  ];
  const size = 2;
  const firstHalfProjects = allProjects.slice(0, size);

  const [current, setCurrent] = useState("none");
  function changeProject(e) {
    setCurrent(e.target.dataset.key);
    // console.log(e.target.dataset.key);
  }
  const text = [
    "I am from NYC!",
    "I am a Software.Dev",
    "Hi! My name is Lawrence Yee",
  ];

  const [word, setWord] = useState("Hi! My name is Lawrence Yee");
  let index = 0;
  useEffect(() => {
    const interval = setInterval(() => {
      setWord(text[index++ % text.length]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  const styles = {
    fontFamily: "sans-serif",
    textAlign: "center",
    position: "absolute",

    width: "100%",
    border: "5px solid orange",
  };
  const insideStyles = {
    background: "white",
    padding: 20,
    position: "absolute",
    top: "0%",
    left: "0%",
    transform: "translate(-50%,-50%)",
  };
  const image1 =
    "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
  const image2 =
    "https://img00.deviantart.net/2bd0/i/2009/276/c/9/magic_forrest_wallpaper_by_goergen.jpg";
  const image3 =
    "https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001";
  const image4 =
    "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg";

  return (
    <>
      <div className="bigWrap">
        <Navbar
          clickAboutMe={clickAboutMe}
          clickProjects={clickProjects}
          clickContact={clickContact}
        ></Navbar>

        <div className="overallContainer">
          <div className="contentContainer">
            <div className="wrapper">
              <header>
                <div className="backDrop">
                  <div className="backStation ">
                    <div className="bg parallax bg1"></div>
                  </div>
                  <div className="backStation ">
                    <div className="bg parallax bg1"></div>
                  </div>
                  <div className="backStation ">
                    <div className="bg parallax bg1"></div>
                  </div>
                  <div className="backStation ">
                    <div className="bg parallax bg1"></div>
                  </div>
                  <div className="backStation ">
                    <div className="bg parallax bg1"></div>
                  </div>
                  <div className="backStation ">
                    <div className="bg parallax bg1"></div>
                  </div>
                </div>

                <div className="trainContainer">
                  <div className="train section static">
                    <div className="trainCar">
                      <div className="trainWindow"></div>
                      <div className="trainWindow"></div>
                      <div className="trainWindow"></div>
                    </div>
                    <div className="trainCar">
                      <div className="trainWindow"></div>
                      <div className="trainWindow"></div>
                      <div className="trainWindow"></div>
                    </div>
                    <div className="trainCar">
                      <div className="trainWindow"></div>
                      <div className="trainWindow"></div>
                      <div className="trainWindow"></div>
                    </div>
                    <div className="trainCar">
                      <div className="trainWindow"></div>
                      <div className="trainWindow"></div>
                      <div className="trainWindow"></div>
                    </div>
                    <div className="trainCar">
                      <div className="trainWindow"></div>
                      <div className="trainWindow"></div>
                      <div className="trainWindow"></div>
                    </div>
                    <div className="trainCar">
                      <div className="trainWindow"></div>
                      <div className="trainWindow"></div>
                      <div className="trainWindow"></div>
                    </div>
                  </div>
                </div>

                <>
                  <div
                    className="landingContainer1"
                    id="section1"
                    ref={ProjectsRef}
                  >
                    {allProjects.map(
                      (data) =>
                        data.tag.includes(current) && (
                          <Magazine
                            img={data.img}
                            title={data.name}
                            setCurrent={setCurrent}
                            url={data.url}
                            git={data.git}
                          ></Magazine>
                        )
                    )}

                    <div className="station">
                      <div className="randomOnecharMovement">
                        <div className="randomOnelargeContainer">
                          <div className="Lawboxer">
                            <div className="Lawcharacter">
                              <div className="Lawhead">
                                <div className="Lawface">
                                  <div className="Laweyes"></div>
                                  <div className="Laweyes2"></div>
                                </div>
                              </div>
                              <div className="LawupperBody">
                                <div className="LawleftArm"></div>
                                <div className="Lawtorso">
                                  <div className="heart"></div>
                                </div>
                                <div className="LawrightArm"></div>
                              </div>
                              <div className="LawlowerBody">
                                <div className="LawleftLeg"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="randomTwocharMovement">
                        <div className="randomTwolargeContainer">
                          <div className="Lawboxer">
                            <div className="Lawcharacter">
                              <div className="Lawhead">
                                <div className="Lawface">
                                  <div className="Laweyes"></div>
                                  <div className="Laweyes2"></div>
                                </div>
                              </div>
                              <div className="LawupperBody">
                                <div className="LawleftArm"></div>
                                <div className="Lawtorso">
                                  <div className="heart"></div>
                                </div>
                                <div className="LawrightArm"></div>
                              </div>
                              <div className="LawlowerBody">
                                <div className="LawleftLeg"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pole leftPole">
                        <div className="poleThick"></div>
                        <div className="poleCenter"></div>
                        <div className="poleThick"></div>
                      </div>
                      <div className="storeContainer">
                        <div className="lampContainer">
                          <div className="lamp"></div>
                          <div className="lamp2"></div>
                        </div>
                        <div className="stationSignContainer">
                          Projects Ave.
                        </div>
                        <div className="store">
                          <div className="storeTop">
                            <div className="storeName">NEWSSTAND</div>
                          </div>
                          <div className="storeBottom">
                            <div className="storeLeft"></div>
                            <div className="storeCenter">
                              <div className="storeCenterTop">
                                <div className="fridge">
                                  <div className="fridgeBrand">COCA-COLA</div>
                                  <div className="fridgeContent">
                                    <div className="fridgeSoda"></div>
                                  </div>
                                </div>
                                <div className="charMovement">
                                  <div className="largeContainer">
                                    <div className="boxer">
                                      <div className="character">
                                        <div className="head">
                                          <div className="face">
                                            <div className="eyes"></div>
                                            <div className="eyes2"></div>
                                          </div>
                                        </div>
                                        <div className="upperBody">
                                          <div className="leftArm"></div>
                                          <div className="torso">
                                            <div className="heart"></div>
                                          </div>
                                          <div className="rightArm"></div>
                                        </div>
                                        <div className="lowerBody">
                                          <div className="leftLeg"></div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="storeCenterBottom">
                                <div className="magRow">
                                  <div className="mags">
                                    {allProjects.map(
                                      (data) =>
                                        data.row.includes("1") && (
                                          <div
                                            className="magazine"
                                            data-key={data.tag}
                                            onClick={changeProject}
                                          >
                                            {data.tag}
                                          </div>
                                        )
                                    )}
                                  </div>
                                  <div className="shelf"></div>
                                </div>
                                <div className="magRow">
                                  <div className="mags">
                                    {allProjects.map(
                                      (data) =>
                                        data.row.includes("2") && (
                                          <div
                                            className="magazine"
                                            data-key={data.tag}
                                            onClick={changeProject}
                                          >
                                            {data.tag}
                                          </div>
                                        )
                                    )}
                                  </div>
                                  <div className="shelf"></div>
                                </div>
                              </div>
                            </div>
                            <div className="storeRight"></div>
                          </div>
                        </div>
                      </div>
                      <div className="pole leftPole">
                        <div className="stationName">
                          <div className="stationNameBorder">
                            New York
                            <div className="trainNameContainer">
                              <div className="trainCircle">D</div>
                              <div className="trainCircle">B</div>
                            </div>
                          </div>
                        </div>
                        <div className="poleThick"></div>
                        <div className="poleCenter"></div>
                        <div className="poleThick"></div>
                      </div>
                    </div>
                    <div className="floorContainer">
                      <div className="floorYellow"></div>
                      <div className="floorBrown"></div>
                    </div>
                  </div>
                </>
                <>
                  <div
                    className="landingContainer2"
                    id="section2"
                    ref={AboutMeRef}
                  >
                    <div className="station">
                      <div className="storeContainer">
                        <div className="lampContainer">
                          {/* <div className="lamp"></div> */}
                          <div className="lamp2"></div>
                        </div>
                      </div>
                      <div className="middleContainer">
                        <div className="chatContainer">
                          <div className="chatBubble">{word}</div>
                        </div>
                        <div className="randomOnecharMovement">
                          <div className="randomOnelargeContainer">
                            <div className="Lawboxer">
                              <div className="Lawcharacter">
                                <div className="Lawhead">
                                  <div className="Lawface">
                                    <div className="Laweyes"></div>
                                    <div className="Laweyes2"></div>
                                  </div>
                                </div>
                                <div className="LawupperBody">
                                  <div className="LawleftArm"></div>
                                  <div className="Lawtorso">
                                    <div className="heart"></div>
                                  </div>
                                  <div className="LawrightArm"></div>
                                </div>
                                <div className="LawlowerBody">
                                  <div className="LawleftLeg"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="randomTwocharMovement">
                          <div className="randomTwolargeContainer">
                            <div className="Lawboxer">
                              <div className="Lawcharacter">
                                <div className="Lawhead">
                                  <div className="Lawface">
                                    <div className="Laweyes"></div>
                                    <div className="Laweyes2"></div>
                                  </div>
                                </div>
                                <div className="LawupperBody">
                                  <div className="LawleftArm"></div>
                                  <div className="Lawtorso">
                                    <div className="heart"></div>
                                  </div>
                                  <div className="LawrightArm"></div>
                                </div>
                                <div className="LawlowerBody">
                                  <div className="LawleftLeg"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="benchContainer">
                          <div className="bench">
                            <div className="lawrenceContainer">
                              <div className="LawcharMovement">
                                <div className="LawlargeContainer">
                                  <div className="Lawboxer">
                                    <div className="Lawcharacter">
                                      <div className="Lawhead">
                                        <div className="Lawface">
                                          <div className="Laweyes"></div>
                                          <div className="Laweyes2"></div>
                                        </div>
                                      </div>
                                      <div className="LawupperBody">
                                        <div className="LawleftArm"></div>
                                        <div className="Lawtorso">
                                          <div className="heart"></div>
                                        </div>
                                        <div className="LawrightArm"></div>
                                      </div>
                                      <div className="LawlowerBody">
                                        <div className="LawleftLeg"></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <div className="poleMid">
                        <div className="stationName">
                          <div className="stationNameBorder">
                            New York
                            <div className="trainNameContainer">
                              <div className="trainCircle">D</div>
                              <div className="trainCircle">B</div>
                            </div>
                          </div>
                        </div>
                        <div className="poleThick"></div>
                        <div className="poleCenter"></div>
                        <div className="poleThick"></div>
                      </div> */}
                        <div className="stationSignContainer">
                          Lawrence Yee Street
                        </div>
                      <div className="kioskContainer">
                        <div className="kiosk">
                          <div className="kioskLeft"></div>
                          <div className="kioskMiddle">
                            KIOSK
                            <div className="kioskScreen">
                              <div className="kioskOff">Who am I?</div>
                              <div className="kioskText">
                                {" "}
                                From architecture designer to software engineer,
                                I bring experience in turning a simple idea into
                                reality. Included in this process are the unsure
                                beginnings of pre-planning, to the nitty gritty
                                works of production up to the beauty of project
                                completion. In order to execute all these steps,
                                I am well versed in working as a team in order
                                to provide the best quality of work throughout
                                every phase. I am aiming to utilize my
                                experiences in order to support the ongoing
                                development of software engineering. For a field
                                still so young, I will work towards growing
                                alongside the seemingly infinite potential of
                                software, further improving the lives of
                                everyone around us.{" "}
                              </div>
                            </div>
                          </div>
                          <div className="kioskRight"></div>
                        </div>
                      </div>
                    </div>
                    <div className="floorContainer">
                      <div className="floorYellow"></div>
                      <div className="floorBrown"></div>
                    </div>
                  </div>
                </>
                <>
                  <div
                    className="landingContainer3"
                    id="section3"
                    ref={ContactRef}
                  >
                    <div className="station">
                      <div className="pole rightPole">
                        <div className="poleThick"></div>
                        <div className="poleCenter"></div>
                        <div className="poleThick"></div>
                      </div>
                      <div className="storeContainer">
                        <div className="lampContainer">
                          <div className="lamp"></div>
                          <div className="lamp2"></div>
                        </div>
                      </div>
                      <div className="infoContainer">
                        <div className="stationSignContainer">Contact Blvd</div>
                        <div className="info">
                          <div className="infoLeft"></div>
                          <div className="infoMiddle">
                            <div className="infoScreen">
                              <div className="infoText">
                                <a
                                  className="flier"
                                  href="https://www.linkedin.com/in/lawrenceyee91/"
                                  target="_blank"
                                >
                                  <div className="flierText">LinkedIn</div>
                                </a>
                                <a
                                  className="flier"
                                  href="https://github.com/Newbz521"
                                  target="_blank"
                                >
                                  <div className="flierText">GitHub</div>
                                </a>
                                <a
                                  className="flier"
                                  href={Resume}
                                  target="_blank"
                                >
                                  <div className="flierText">Resume</div>
                                </a>
                              </div>
                              <div className="infoTextRight"></div>
                            </div>
                          </div>
                          <div className="infoRight"></div>
                        </div>
                      </div>
                      <div className="pole">
                        <div className="stationName">
                          <div className="stationNameBorder">
                            New York
                            <div className="trainNameContainer">
                              <div className="trainCircle">D</div>
                              <div className="trainCircle">B</div>
                            </div>
                          </div>
                        </div>
                        <div className="poleThick"></div>
                        <div className="poleCenter"></div>
                        <div className="poleThick"></div>
                      </div>
                    </div>
                    <div className="floorContainer">
                      <div className="floorYellow"></div>
                      <div className="floorBrown"></div>
                    </div>
                  </div>
                </>
              </header>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
